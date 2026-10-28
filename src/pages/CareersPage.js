import { ArrowLeft, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

export function CareersPage() {
  return (
    <section className="soft-grid min-h-[calc(100vh-5rem)] bg-skysoft-50 pt-20">
      <div className="site-container grid min-h-[680px] place-items-center py-16">
        <div
          className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-[0_24px_70px_rgba(6,20,43,.08)] sm:p-12"
          data-reveal
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-brand-700">
            <BriefcaseBusiness size={26} />
          </span>
          <p className="eyebrow mt-7">Careers at AML365</p>
          <h1 className="page-title mt-4 text-navy-950">
            We are not currently recruiting
          </h1>
          <p className="lead-copy mx-auto mt-5 max-w-xl text-slate-600">
            There are no open positions with the AML365 team at this time.
            Please check this page again for future opportunities.
          </p>
          <div className="mt-9 border-t border-slate-200 pt-7">
            <Link
              to="/"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-bold text-navy-950 transition hover:border-blue-300 hover:bg-blue-50"
            >
              <ArrowLeft size={17} /> Return to AML365
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
