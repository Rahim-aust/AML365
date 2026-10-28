import { Check } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading.js";
import { modules } from "../data/content.js";

export function SolutionsPage() {
  return (
    <>
      <section className="blueprint-grid bg-navy-950 pt-20 text-white">
        <div className="site-container py-14 sm:py-16" data-reveal>
          <div className="max-w-4xl">
            <p className="section-label !text-blue-300">Solution portfolio</p>
            <h1 className="page-title mt-5">
              AML controls for the complete compliance workflow
            </h1>
            <p className="lead-copy mt-5 max-w-3xl text-blue-100/75">
              Explore the current AML365 modules for screening, customer risk,
              transaction monitoring, regulatory activity and operational
              reporting.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Current capabilities"
            title="AML365 modules"
            copy="Each module operates within the wider AML365 environment, with configurable roles, approvals and reporting workflows. Planned AI and machine-learning capabilities are presented separately on the main page."
          />
          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <article
                  id={module.slug}
                  key={module.slug}
                  data-reveal
                  style={{ "--reveal-delay": `${(index % 2) * 60}ms` }}
                  aria-labelledby={`${module.slug}-title`}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.03]"
                >
                  <div className="flex h-full flex-col">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <span className="meta-label text-slate-500">
                          Module {module.number}
                        </span>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand-700">
                          <Icon size={22} aria-hidden="true" />
                        </span>
                      </div>
                      <h2
                        id={`${module.slug}-title`}
                        className="mt-6 text-2xl font-semibold leading-tight text-navy-950"
                      >
                        {module.name}
                      </h2>
                      <p className="mt-3 leading-7 text-slate-600">
                        {module.summary}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col border-t border-blue-100 bg-skysoft-50 p-6 sm:p-8">
                      <p className="leading-7 text-slate-700">{module.details}</p>
                      <div className="mt-6 border-t border-blue-100 pt-5">
                        <p className="meta-label text-brand-700">
                          Core capabilities
                        </p>
                        <ul className="mt-4 space-y-3">
                          {module.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm font-medium leading-6 text-navy-900"
                            >
                              <Check
                                size={17}
                                className="mt-0.5 shrink-0 text-brand-600"
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
