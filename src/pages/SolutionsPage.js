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
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl">
            AML controls connected through one operating environment
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100/75">
            Review the capabilities documented in the AML365 source
            presentation. Individual deployment scope and configuration depend
            on the institution’s requirements.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="site-container">
          <SectionHeading
            eyebrow="Current capabilities"
            title="AML365 modules"
            copy="The modules below represent current product capabilities shown in the supplied presentation. Planned AI and machine-learning items remain separately identified on the main page."
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
                        <span className="text-xs font-extrabold text-brand-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Icon className="text-brand-600" />
                      </div>
                      <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-950">
                        {module.name}
                      </h2>
                      <p className="mt-4 leading-7 text-slate-600">
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
                            className="flex items-start gap-2 text-sm font-semibold text-navy-900"
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
            <p className="text-3xl font-extrabold tracking-tight">
              Discuss the right module scope for your institution
            </p>
            <Link
              to="/contact"
              className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-extrabold text-brand-700"
            >
              Contact the AML365 team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
