import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading.js";
import { modules } from "../data/content.js";

export function SolutionsPage() {
  return (
    <>
      <section className="blueprint-grid bg-navy-950 pt-20 text-white">
        <div className="site-container py-16 sm:py-20">
          <p className="eyebrow !text-blue-300">Solution portfolio</p>
          <h1 className="page-title mt-4 max-w-5xl">
            AML controls connected through one operating environment
          </h1>
          <p className="lead-copy mt-5 max-w-3xl text-blue-100/75">
            Explore AML365 capabilities across screening, customer risk,
            monitoring, investigation and regulatory reporting. Deployment
            scope and configuration are aligned to each institution’s
            requirements.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Current capabilities"
            title="AML365 modules"
            copy="Explore the current AML365 product modules. Planned AI and machine-learning capabilities are identified separately on the main page."
          />
          <div className="mt-14 space-y-5">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article
                  id={module.slug}
                  key={module.slug}
                  className="scroll-mt-28 rounded-3xl border border-slate-200 p-6 sm:p-9"
                >
                  <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="meta-label text-brand-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Icon className="text-brand-600" />
                      </div>
                      <h2 className="mt-5 text-2xl font-semibold leading-tight text-navy-950">
                        {module.name}
                      </h2>
                      <p className="body-copy mt-4 text-slate-600">
                        {module.summary}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-skysoft-50 p-6">
                      <p className="leading-7 text-slate-700">
                        {module.details}
                      </p>
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {module.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm font-medium text-navy-900"
                          >
                            <Check
                              size={16}
                              className="mt-0.5 shrink-0 text-brand-600"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-14 rounded-3xl bg-brand-600 p-8 text-white sm:p-12">
            <p className="text-2xl font-semibold leading-tight">
              Discuss the right module scope for your institution
            </p>
            <Link
              to="/contact"
              className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-brand-700"
            >
              Contact the AML365 team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
