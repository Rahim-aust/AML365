import { useCallback, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Database,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  Settings2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm.js";
import { ModuleModal } from "../components/ModuleModal.js";
import { SectionHeading } from "../components/SectionHeading.js";
import { clients, modules, roadmap } from "../data/content.js";

const capabilities = [
  {
    id: "sanctions",
    eyebrow: "Sanctions screening",
    title: "Screen names and transactions across multiple list sources",
    copy: "AML365 supports customer, SWIFT, remittance and transaction screening with list updates, configurable matching, rescreening and role-based alert review.",
    points: [
      "On-demand and batch screening",
      "Fuzzy and phonetic matching",
      "Whitelist and score configuration",
    ],
    image: "/product/screening-interface.png",
  },
  {
    id: "kyc",
    eyebrow: "KYC and risk management",
    title: "Maintain customer risk through onboarding and periodic review",
    copy: "Configurable risk fields, KYC review schedules and transaction profiles help teams apply the institution’s approved model across customers and accounts.",
    points: [
      "Customer risk scoring",
      "Transaction profile capture and review",
      "High-risk and incomplete-KYC reporting",
    ],
    image: "/product/customer-review.png",
  },
  {
    id: "monitoring",
    eyebrow: "Transaction monitoring",
    title: "Connect rule violations with the evidence needed for review",
    copy: "The rules engine generates alerts from customer and transaction activity, then carries the investigation into filing or case management.",
    points: [
      "Configurable scenarios and thresholds",
      "Transaction and customer detail review",
      "STR/SAR and case-management integration",
    ],
    image: "/product/transaction-profile.png",
  },
  {
    id: "reporting",
    eyebrow: "Regulatory reporting",
    title: "Control reporting work from preparation through review",
    copy: "Dedicated workflows cover CTR, activity filing, FATCA reporting, branch assessment, independent testing and half-yearly Bangladesh Bank reports.",
    points: [
      "CTR and STR/SAR workflows",
      "FATCA XML and nil reporting",
      "Self-assessment and independent testing",
    ],
    image: "/product/screening-statistics.png",
  },
];

export function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <Overview />
      <Modules />
      {capabilities.map((item, index) => (
        <Capability key={item.id} item={item} reverse={index % 2 === 1} />
      ))}
      <Roadmap />
      <Dashboards />
      <Implementation />
      <Contact />
    </>
  );
}

function Hero() {
  const cards = [
    ["Customer risk", "Risk models and review", Gauge],
    ["Screening", "Lists and matching", LockKeyhole],
    ["Monitoring", "Rules and detection", CircleDot],
    ["Cases", "Investigation workflow", FileText],
  ];
  return (
    <section className="blueprint-grid relative overflow-hidden bg-navy-950 pt-20 text-white">
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(circle_at_72%_35%,rgba(40,120,237,.32),transparent_38%)]" />
      <div className="site-container relative grid min-h-[540px] items-center gap-9 py-10 lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:py-12">
        <div className="fade-up">
          <p className="eyebrow !text-blue-300">AML365 by DataSoft</p>
          <h1 className="mt-5 max-w-3xl text-[2.8rem] font-semibold leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-[3.75rem]">
            Connected financial crime compliance for modern banking
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100/78">
            Bring screening, customer risk, transaction monitoring,
            investigation and regulatory reporting into one configurable
            environment.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-extrabold text-white transition hover:bg-blue-500"
            >
              Request a consultation <ArrowRight size={18} />
            </Link>
            <Link
              to="/#modules"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore solutions
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-blue-100/70">
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-300" /> Configurable rule
              engine
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-300" /> Role-based workflows
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} className="text-blue-300" /> Banking-system
              integration
            </span>
          </div>
        </div>
        <div
          className="fade-up-delay relative mx-auto hidden w-full max-w-lg lg:block"
          aria-label="AML365 compliance workflow illustration"
        >
          <div className="rounded-[2rem] border border-white/15 bg-white/[.07] p-4 shadow-2xl shadow-black/25 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 text-xs font-bold uppercase tracking-[.13em] text-blue-200">
              <span>Compliance workbench</span>
              <span className="flex items-center gap-2">
                <i className="h-2 w-2 rounded-full bg-blue-400" /> Active
              </span>
            </div>
            <div className="grid gap-3 py-3 sm:grid-cols-2">
              {cards.map(([name, copy, Icon]) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/10 bg-navy-900/70 p-4"
                >
                  <Icon className="text-blue-300" size={22} />
                  <p className="mt-4 font-bold">{name}</p>
                  <p className="mt-1 text-sm text-blue-100/55">{copy}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-brand-600 p-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-blue-100">
                    Connected outcome
                  </p>
                  <p className="mt-1.5 text-lg font-bold">Alert to decision</p>
                </div>
                <ArrowRight />
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-4/5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  const blocks = [
    ["Data", "Multiple banking and external sources", Database],
    ["Controls", "Rules, matching, scoring and workflow", Settings2],
    ["Outcomes", "Alerts, cases, reports and audit history", Layers3],
  ];
  return (
    <section id="overview" className="section-pad scroll-mt-24 bg-white">
      <div className="site-container grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Product overview"
          title="One operating environment across the AML lifecycle"
        />
        <div>
          <p className="text-2xl font-semibold leading-9 tracking-tight text-navy-900">
            AML365 brings separate compliance activities into a consistent
            workflow while preserving the controls and responsibilities each
            function requires.
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The platform receives customer, transaction, messaging, sanctions
            and third-party data. Configurable rules, matching, scoring and
            workflow then produce alerts, cases, dashboards and regulatory
            outputs for authorised users.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {blocks.map(([title, copy, Icon]) => (
              <div key={title} className="bg-skysoft-50 p-6">
                <Icon className="text-brand-600" />
                <p className="mt-6 font-extrabold text-navy-950">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  const [selectedModule, setSelectedModule] = useState(null);
  const closeModal = useCallback(() => setSelectedModule(null), []);

  return (
    <>
      <section id="modules" className="section-pad scroll-mt-24 bg-skysoft-50">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="AML modules"
              title="Purpose-built controls for financial crime operations"
              copy="Each module works as part of the wider AML365 environment and follows configurable roles, approvals and reporting workflows."
            />
            <Link
              to="/solutions"
              className="focus-ring inline-flex items-center gap-2 self-start font-extrabold text-brand-700"
            >
              View all modules <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.slice(0, 9).map((module, index) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.slug}
                  className="group flex min-h-full flex-col rounded-2xl border border-blue-100 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="text-brand-600" size={23} />
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-tight text-navy-950 sm:mt-10">
                    {module.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {module.summary}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedModule(module)}
                    aria-haspopup="dialog"
                    className="focus-ring mt-6 inline-flex min-h-11 items-center gap-1 self-start rounded-lg text-sm font-bold text-brand-700 transition hover:text-brand-600"
                  >
                    View details <ChevronRight size={15} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {selectedModule && (
        <ModuleModal module={selectedModule} onClose={closeModal} />
      )}
    </>
  );
}

function Capability({ item, reverse }) {
  return (
    <section
      id={item.id}
      className={`section-pad scroll-mt-24 ${reverse ? "bg-skysoft-50" : "bg-white"}`}
    >
      <div className="site-container grid items-center gap-14 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="eyebrow">{item.eyebrow}</p>
          <h2 className="section-title mt-5 font-semibold text-navy-950">
            {item.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{item.copy}</p>
          <ul className="mt-8 space-y-4">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 font-semibold text-navy-900"
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-100 text-brand-700">
                  <Check size={13} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/60 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10">
            <div className="mb-4 flex items-center gap-2">
              <i className="h-2.5 w-2.5 rounded-full bg-blue-300" />
              <i className="h-2.5 w-2.5 rounded-full bg-blue-200" />
              <i className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="ml-2 text-xs font-bold uppercase tracking-[.12em] text-slate-400">
                AML365 workbench
              </span>
            </div>
            <img
              src={item.image}
              alt={`${item.eyebrow} interface from the AML365 presentation`}
              className="min-h-64 w-full rounded-xl bg-slate-50 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section
      id="roadmap"
      className="section-pad scroll-mt-24 bg-navy-950 text-white"
    >
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="AI and machine learning"
            title="Planned capabilities on the product roadmap"
            copy="The source presentation identifies these items as plans. They are shown separately from current AML365 functionality and should not be interpreted as generally available features."
            light
          />
          <span className="inline-flex self-start rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[.14em] text-blue-200">
            <Sparkles size={14} className="mr-2" /> Roadmap / planned
          </span>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {roadmap.map(([title, copy], index) => (
            <article key={title} className="bg-navy-900 p-7">
              <div className="flex items-center gap-4">
                <span className="text-xs font-extrabold text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-extrabold">{title}</h3>
              </div>
              <p className="mt-4 pl-9 text-sm leading-6 text-blue-100/65">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dashboards() {
  return (
    <section id="dashboards" className="section-pad bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="Dashboards and reporting"
          title="Operational visibility for compliance teams"
          copy="The presentation shows dashboard views for alert status, aging, customer review, profiling and relationship analysis. Export formats include Excel, PDF and JPEG."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <figure className="rounded-3xl border border-slate-200 bg-skysoft-50 p-5">
            <img
              src="/product/relationship-analysis.png"
              alt="AML365 relationship analysis view"
              className="h-full min-h-80 w-full rounded-2xl bg-white object-contain"
              loading="lazy"
            />
            <figcaption className="mt-4 text-sm font-semibold text-slate-500">
              Relationship analysis view shown in the source presentation
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <figure className="rounded-3xl border border-slate-200 p-5">
              <img
                src="/product/customer-review.png"
                alt="AML365 customer review chart"
                className="h-48 w-full object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm font-semibold text-slate-500">
                Customer review status
              </figcaption>
            </figure>
            <div className="rounded-3xl bg-brand-600 p-7 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[.15em] text-blue-100">
                Management reporting
              </p>
              <p className="mt-4 text-2xl font-extrabold tracking-tight">
                Progress, status, productivity and quality views
              </p>
              <p className="mt-4 text-sm leading-6 text-blue-100/75">
                Report access follows the platform’s configurable roles and
                permissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Implementation() {
  const steps = [
    [
      "01",
      "Scope and requirements",
      "Confirm priorities, integrations, reporting needs and enhancements.",
    ],
    [
      "02",
      "Architecture and design",
      "Define the technical design, data sources, roles and detailed configuration.",
    ],
    [
      "03",
      "Build and integration",
      "Configure rules, workflows, ETL, reports, entitlements and data migration.",
    ],
    [
      "04",
      "Testing and acceptance",
      "Complete unit testing, system integration testing, UAT or BAT and parallel testing where needed.",
    ],
    [
      "05",
      "Training and deployment",
      "Prepare users, finalise deployment planning and move the approved release into production.",
    ],
    [
      "06",
      "Post-production support",
      "Support go-live, production operations, release planning and future enhancements.",
    ],
  ];
  return (
    <section
      id="implementation"
      className="section-pad scroll-mt-24 bg-skysoft-50"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Implementation"
          title="A controlled path from scope to production"
          copy="The delivery lifecycle in the source presentation covers requirements, architecture, data mapping, configuration, testing, training, deployment and production support."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, copy]) => (
            <article
              key={number}
              className="border-t-2 border-brand-600 bg-white p-7"
            >
              <span className="text-xs font-extrabold text-brand-600">
                {number}
              </span>
              <h3 className="mt-8 text-xl font-extrabold text-navy-950">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section
      id="clients"
      className="scroll-mt-24 overflow-hidden border-b border-slate-200 bg-white py-10 sm:py-12"
    >
      <div className="site-container flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Selected banking clients</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950 sm:text-3xl">
            AML experience across Bangladesh’s financial sector
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-500">
          These institutions are identified in the supplied AML365 presentation.
          Logos are reproduced from that source material.
        </p>
      </div>
      <div className="marquee mt-8 overflow-hidden border-y border-slate-200 bg-slate-50/60 py-4">
        <div
          className="marquee-track flex w-max items-center"
          aria-label="Selected AML365 clients"
        >
          {[...clients, ...clients].map(([name, src], index) => (
            <div
              key={`${name}-${index}`}
              className="mx-2 grid h-20 w-44 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white px-5 py-3"
            >
              <img
                src={src}
                alt={`${name} logo`}
                className="max-h-12 max-w-36 object-contain"
                loading={index < clients.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-pad soft-grid bg-skysoft-50">
      <div className="site-container grid items-start gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Discuss your institution’s AML priorities"
            copy="Tell us what you are evaluating. The AML365 team can continue the conversation around scope, integration and implementation."
          />
          <div className="mt-9 rounded-2xl border border-blue-100 bg-white p-6">
            <p className="text-xs font-extrabold uppercase tracking-[.14em] text-slate-400">
              Direct contact
            </p>
            <a
              href="mailto:info@datasoft-bd.com"
              className="focus-ring mt-3 inline-block text-lg font-extrabold text-brand-700"
            >
              info@datasoft-bd.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
