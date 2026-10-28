export const CONTACT_EMAIL = "rahim3706@gmail.com";

export function createEnquiryMailto(form) {
  const subject = encodeURIComponent(`AML365 enquiry from ${form.institution}`);
  const body = encodeURIComponent(
    `Name: ${form.name}\nWork email: ${form.email}\nInstitution: ${form.institution}\nRole: ${form.role || "Not provided"}\nInterest: ${form.interest}\n\n${form.message}`,
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
