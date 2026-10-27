import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "../components/ContactForm.js";

export function ContactPage() {
  return (
    <section className="soft-grid min-h-screen bg-skysoft-50 pt-20">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[.75fr_1.25fr] lg:py-20">
        <div>
          <p className="eyebrow">Contact AML365</p>
          <h1 className="page-title mt-4 text-navy-950">
            A focused conversation about your AML priorities
          </h1>
          <p className="lead-copy mt-5 text-slate-600">
            Share the modules, integration needs or implementation questions you
            want to discuss. The form prepares an email for your review before
            anything is sent.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href="mailto:info@datasoft-bd.com"
              className="focus-ring flex items-center gap-3 font-semibold text-brand-700"
            >
              <Mail size={19} /> info@datasoft-bd.com
            </a>
            <p className="flex items-start gap-3 text-sm leading-6 text-slate-600">
              <MapPin size={19} className="mt-0.5 shrink-0 text-brand-600" />{" "}
              Rupayan Shelford, 23/6 Mirpur Road, Shyamoli, Dhaka 1207,
              Bangladesh
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
