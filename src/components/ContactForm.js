import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

const initial = {
  name: "",
  email: "",
  institution: "",
  role: "",
  interest: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) next.email = "Enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.institution.trim()) next.institution = "Enter your institution.";
    if (!form.interest) next.interest = "Select an area of interest.";
    if (!form.message.trim() || form.message.trim().length < 20)
      next.message = "Please provide at least 20 characters.";
    if (!form.consent)
      next.consent = "Please confirm that we may respond to your enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (event) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;
    setStatus("sending");
    try {
      const subject = encodeURIComponent(
        `AML365 enquiry from ${form.institution}`,
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nWork email: ${form.email}\nInstitution: ${form.institution}\nRole: ${form.role || "Not provided"}\nInterest: ${form.interest}\n\n${form.message}`,
      );
      window.location.href = `mailto:info@datasoft-bd.com?subject=${subject}&body=${body}`;
      window.setTimeout(() => setStatus("success"), 300);
    } catch {
      setStatus("error");
    }
  };
  const fieldClass = (key) =>
    `focus-ring mt-2 w-full rounded-xl border bg-white px-4 py-3 text-navy-950 transition placeholder:text-slate-400 ${errors[key] ? "border-red-500" : "border-slate-300 focus:border-brand-500"}`;
  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(6,20,43,.08)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-navy-900">
          Full name
          <input
            className={fieldClass("name")}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.name}
            </span>
          )}
        </label>
        <label className="text-sm font-bold text-navy-900">
          Work email
          <input
            type="email"
            className={fieldClass("email")}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.email}
            </span>
          )}
        </label>
        <label className="text-sm font-bold text-navy-900">
          Institution
          <input
            className={fieldClass("institution")}
            value={form.institution}
            onChange={(e) => setForm({ ...form, institution: e.target.value })}
            aria-invalid={!!errors.institution}
          />
          {errors.institution && (
            <span className="mt-1 block text-xs text-red-600">
              {errors.institution}
            </span>
          )}
        </label>
        <label className="text-sm font-bold text-navy-900">
          Role <span className="font-normal text-slate-400">(optional)</span>
          <input
            className={fieldClass("role")}
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-bold text-navy-900">
        Area of interest
        <select
          className={fieldClass("interest")}
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          aria-invalid={!!errors.interest}
        >
          <option value="">Select one</option>
          <option>Sanctions screening</option>
          <option>KYC and customer risk</option>
          <option>Transaction monitoring</option>
          <option>Regulatory reporting</option>
          <option>Integrated AML platform</option>
          <option>Implementation and support</option>
        </select>
        {errors.interest && (
          <span className="mt-1 block text-xs text-red-600">
            {errors.interest}
          </span>
        )}
      </label>
      <label className="mt-5 block text-sm font-bold text-navy-900">
        What would you like to discuss?
        <textarea
          rows={5}
          className={fieldClass("message")}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
          placeholder="Tell us about your institution, current priorities and preferred timeline."
        />
        {errors.message && (
          <span className="mt-1 block text-xs text-red-600">
            {errors.message}
          </span>
        )}
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          className="focus-ring mt-1 h-4 w-4 accent-brand-600"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
        />
        <span>
          I agree that DataSoft may use this information to respond to my
          enquiry.
        </span>
      </label>
      {errors.consent && (
        <span className="mt-1 block text-xs text-red-600">
          {errors.consent}
        </span>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-4 font-extrabold text-white transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? (
          <LoaderCircle className="animate-spin" size={19} />
        ) : (
          <Send size={18} />
        )}{" "}
        Prepare enquiry
      </button>
      <div aria-live="polite" className="mt-4 min-h-6 text-sm">
        {status === "success" && (
          <p className="flex items-center gap-2 font-semibold text-blue-700">
            <CheckCircle2 size={18} /> Your email application is ready. Review
            and send the message from there.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 font-semibold text-red-600">
            <AlertCircle size={18} /> We could not open your email application.
            Email info@datasoft-bd.com directly.
          </p>
        )}
      </div>
    </form>
  );
}
