# Direct contact-form email delivery

This guide explains how to replace the current `mailto:` enquiry flow with direct email delivery from the AML365 website. The proposed setup uses a Vercel Function and Resend, keeps the API key on the server, and delivers enquiries to a configurable receiver.

## Current behaviour

The current form is implemented in `src/components/ContactForm.js`.

After validation, it builds a `mailto:` URL using `src/config/contact.js` and opens the visitor's email application. The visitor must review and send the draft. The website itself does not send or store the enquiry.

Keep this implementation until the server-side solution below has been deployed and tested successfully.

## Recommended architecture

```text
Contact form
    |
    | POST /api/contact
    v
Vercel Function
    |
    | Resend API using a private server-side key
    v
Configured receiver email
```

The browser must never receive the Resend API key. The receiver and sender addresses should also be controlled by the server rather than accepted from form input.

## Files involved

| File | Purpose |
| --- | --- |
| `src/components/ContactForm.js` | Validate the form and submit JSON to `/api/contact`. |
| `src/config/contact.js` | Publicly displayed contact address and the current `mailto:` fallback. |
| `api/contact.js` | Future Vercel Function that validates and sends the enquiry. |
| `.env.example` | Documents required environment-variable names without secrets. |
| `package.json` | Contains the future `resend` dependency. |
| `vercel.json` | Keeps SPA routing configuration. Verify `/api/contact` after deployment. |

## 1. Prepare Resend

1. Create a Resend account.
2. Add and verify a domain that the organisation controls.
3. Create an API key with only the permissions needed to send email.
4. Choose a sender address on the verified domain, for example `AML365 Website <contact@example.com>`.
5. Keep the receiver address separate from the sender. The initial receiver can be `rahim3706@gmail.com`.

Use a verified organisational domain before production so the sender represents the AML365 or DataSoft website appropriately. Refer to the [Resend Email API documentation](https://resend.com/features/email-api) for the current SDK and sending options.

## 2. Install the server dependency

From the project root:

```bash
npm install resend
```

Commit both `package.json` and `package-lock.json`.

## 3. Configure environment variables

Create `.env.local` for local development:

```dotenv
RESEND_API_KEY=re_replace_with_real_key
CONTACT_TO_EMAIL=rahim3706@gmail.com
CONTACT_FROM_EMAIL=AML365 Website <contact@example.com>
```

Never prefix the API key with `VITE_`. Vite-prefixed values can be exposed to browser code.

In Vercel, open the project and add the same variables under **Settings → Environment Variables**. Configure them for Preview and Production as required. Environment-variable changes apply to new deployments, so redeploy after adding or changing them. See [Vercel environment variables](https://vercel.com/docs/environment-variables).

The repository already ignores `.env` and `.env.*` files while allowing `.env.example`.

## 4. Add the Vercel Function

Create `api/contact.js` at the repository root:

```js
import { Resend } from "resend";

const MAX_MESSAGE_LENGTH = 4000;

const clean = (value, maximum = 200) =>
  typeof value === "string" ? value.trim().slice(0, maximum) : "";

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({
      ok: false,
      message: "Method not allowed.",
    });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL
  ) {
    return response.status(500).json({
      ok: false,
      message: "Email delivery is not configured.",
    });
  }

  const payload = request.body ?? {};
  const name = clean(payload.name);
  const email = clean(payload.email);
  const institution = clean(payload.institution);
  const role = clean(payload.role);
  const interest = clean(payload.interest);
  const message = clean(payload.message, MAX_MESSAGE_LENGTH);
  const consent = payload.consent === true;
  const website = clean(payload.website);

  // A hidden honeypot field should stay empty for real visitors.
  if (website) return response.status(200).json({ ok: true });

  if (
    !name ||
    !isEmail(email) ||
    !institution ||
    !interest ||
    message.length < 20 ||
    !consent
  ) {
    return response.status(400).json({
      ok: false,
      message: "Please review the submitted information.",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const plainText = [
    `Name: ${name}`,
    `Work email: ${email}`,
    `Institution: ${institution}`,
    `Role: ${role || "Not provided"}`,
    `Area of interest: ${interest}`,
    "",
    message,
  ].join("\n");

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: [process.env.CONTACT_TO_EMAIL],
    replyTo: email,
    subject: `AML365 enquiry from ${institution}`,
    text: plainText,
    html: `
      <h2>New AML365 enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Institution:</strong> ${escapeHtml(institution)}</p>
      <p><strong>Role:</strong> ${escapeHtml(role || "Not provided")}</p>
      <p><strong>Area of interest:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Contact email provider error", {
      name: error.name,
      message: error.message,
    });
    return response.status(502).json({
      ok: false,
      message: "The enquiry could not be delivered. Please try again.",
    });
  }

  return response.status(200).json({ ok: true, id: data?.id });
}
```

Vercel supports JavaScript functions in the root `api` directory for Vite projects. See [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite) and the [Vercel Node.js runtime](https://vercel.com/docs/functions/runtimes/node-js).

## 5. Replace the frontend `mailto:` submission

In `src/components/ContactForm.js`, replace the current `window.location.href = createEnquiryMailto(form)` submission with a request to the function:

```js
const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...form,
    website: "",
  }),
});

const result = await response.json().catch(() => ({}));

if (!response.ok) {
  throw new Error(result.message || "The enquiry could not be delivered.");
}

setStatus("success");
setForm(initial);
```

Additional frontend changes:

1. Rename the button from **Prepare enquiry** to **Send enquiry**.
2. Change the success message to **Your enquiry has been sent successfully.**
3. Keep the existing loading and error states.
4. Add a visually hidden honeypot input named `website`, or keep it only in component state and always submit an empty string for legitimate visitors.
5. Keep `src/config/contact.js` as a public contact display and emergency `mailto:` fallback. Do not use it to decide the server-side receiver.

## 6. Test locally

`npm run dev` starts Vite but does not provide the deployed Vercel Function environment. For end-to-end testing, link the project to Vercel and run:

```bash
npx vercel dev
```

If needed, pull the development variables first:

```bash
npx vercel env pull .env.local
```

Then test the endpoint with non-sensitive sample data:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "institution": "Test Bank",
    "role": "Compliance",
    "interest": "Transaction monitoring",
    "message": "This is a test enquiry for the AML365 contact flow.",
    "consent": true,
    "website": ""
  }'
```

Expected response:

```json
{ "ok": true, "id": "provider-message-id" }
```

Also verify:

- invalid email returns HTTP `400`;
- missing consent returns HTTP `400`;
- non-POST requests return HTTP `405`;
- missing environment variables return HTTP `500`;
- the form shows success only after the function confirms delivery;
- pressing the submit button repeatedly does not create duplicate sends.

## 7. Deploy safely

1. Implement and commit on `development`.
2. Add environment variables to the Vercel Preview environment.
3. Push and test the Preview deployment.
4. Confirm the email arrives at the configured receiver.
5. Check that **Reply** targets the visitor's submitted work email.
6. Add the same environment variables to Production.
7. Merge into `main` and redeploy.
8. Test once more using non-sensitive sample content.

## Security and reliability checklist

- Keep `RESEND_API_KEY` server-side and out of Git.
- Never create a `VITE_RESEND_API_KEY` variable.
- Validate all fields again inside the server function.
- Escape visitor-supplied values before inserting them into HTML.
- Limit field lengths and request-body size.
- Do not log full enquiry bodies or personal information.
- Add rate limiting before public launch.
- Keep the honeypot field and consider Turnstile or another bot challenge if spam appears.
- Use a verified sender domain and configure SPF and DKIM as directed by the email provider.
- Consider an idempotency key to reduce duplicate sends during retries. Resend documents this in its [idempotency guidance](https://resend.com/changelog/idempotency-keys).
- Review provider retention, privacy and contractual requirements before sending real client data.

## Troubleshooting

### The endpoint returns 404

- Confirm the file is exactly `api/contact.js` at the repository root.
- Test with `vercel dev`, not only `vite`.
- Confirm the Preview deployment contains the latest commit.

### The endpoint returns 500

- Confirm all three environment variables exist in the current Vercel environment.
- Redeploy after changing variables.
- Do not print the API key in logs.

### The endpoint returns 502

- Review the Resend dashboard logs.
- Confirm the sender domain and sender address are valid.
- Confirm the API key can send email.

### The request succeeds but no email arrives

- Check spam and junk folders.
- Review the provider's delivery logs and bounce information.
- Confirm `CONTACT_TO_EMAIL` is correct in the deployment environment.
- Verify the sender domain's DNS configuration.

## Updating addresses later

To change the private delivery destination, update `CONTACT_TO_EMAIL` in Vercel and redeploy. No frontend change is required.

To change the public address displayed on the website, edit:

```text
src/config/contact.js
```

To change the sender identity, update `CONTACT_FROM_EMAIL` in Vercel and ensure the new domain or address is authorised by the email provider.

## Rollback

Keep the existing `createEnquiryMailto()` function until direct sending has been stable in production.

If direct sending fails after release:

1. revert the implementation commit;
2. redeploy the previous version;
3. confirm the **Prepare enquiry** button opens an email draft again;
4. investigate the function and provider logs without exposing enquiry content.

Example:

```bash
git revert <direct-email-implementation-commit>
git push origin development
```

Do not delete the Vercel environment variables until the rollback deployment has completed and the old form has been verified.
