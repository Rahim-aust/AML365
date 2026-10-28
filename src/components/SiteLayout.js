import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { PAGE_LOADER_EVENT } from "./PageLoader.js";

const links = [
  ["Overview", "/#overview"],
  ["Solutions", "/#modules"],
  ["AI roadmap", "/#roadmap"],
  ["Implementation", "/#implementation"],
  ["Clients", "/#clients"],
];

export function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      onClick={
        compact
          ? undefined
          : () => window.dispatchEvent(new Event(PAGE_LOADER_EVENT))
      }
      className="focus-ring inline-flex items-center"
      aria-label="AML365 home"
    >
      <img
        src="/aml365-logo.png"
        alt="AML365"
        className={`${compact ? "h-9" : "h-11"} w-auto object-contain`}
      />
    </Link>
  );
}

export function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[80] -translate-y-20 rounded bg-white px-4 py-2 font-semibold text-navy-950 shadow focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_1px_16px_rgba(6,20,43,.05)] backdrop-blur-xl">
        <div
          className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-700 via-brand-500 to-sky-400"
          aria-hidden="true"
        />
        <div className="site-container flex h-[4.75rem] items-center justify-between">
          <Logo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {links.map(([label, to]) => (
              <NavLink
                key={label}
                to={to}
                className="focus-ring rounded-full px-3.5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-skysoft-50 hover:text-brand-700"
              >
                {label}
              </NavLink>
            ))}
            <span
              className="mx-2 h-6 w-px bg-slate-200"
              aria-hidden="true"
            />
            <Link
              to="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700"
            >
              Request a consultation
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
          <button
            type="button"
            className="focus-ring rounded-xl border border-slate-200 bg-white p-2.5 text-navy-950 shadow-sm transition hover:bg-skysoft-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="absolute inset-x-0 top-full border-y border-slate-200 bg-white/98 px-4 py-4 shadow-2xl shadow-blue-950/10 backdrop-blur-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-container flex flex-col gap-1.5">
              {links.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 font-semibold text-navy-900 transition hover:bg-skysoft-50 hover:text-brand-700"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 rounded-xl bg-brand-600 px-4 py-3.5 text-center font-bold text-white shadow-sm transition hover:bg-brand-700"
              >
                Request a consultation
              </Link>
            </div>
          </nav>
        )}
      </header>
      <main id="main-content">{children}</main>
      <footer className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="pointer-events-none absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="site-container relative pt-10 sm:pt-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-r from-brand-700 to-brand-600 px-6 py-8 shadow-2xl shadow-black/20 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10">
            <div
              className="pointer-events-none absolute -right-14 -top-28 h-72 w-72 rounded-full border-[44px] border-white/[.07]"
              aria-hidden="true"
            />
            <div className="relative max-w-3xl">
              <p className="meta-label text-blue-100/80">Start a conversation</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                Discuss your institution’s AML priorities
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100/80 sm:text-base">
                Explore how AML365 can support screening, customer risk,
                transaction monitoring, investigation and regulatory reporting.
              </p>
            </div>
            <Link
              to="/contact"
              className="focus-ring relative mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-navy-950 shadow-lg transition hover:bg-blue-50 lg:mt-0 lg:shrink-0"
            >
              Request a consultation <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_.95fr] lg:gap-12 lg:py-14">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="inline-flex rounded-xl bg-white px-3 py-2">
                <Logo compact />
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100/60">
                DataSoft’s financial crime compliance software portfolio for
                banks and financial institutions.
              </p>
            </div>

            <FooterGroup title="Platform">
              <Link to="/#overview">Product overview</Link>
              <Link to="/solutions">AML modules</Link>
              <Link to="/#roadmap">AI/ML roadmap</Link>
            </FooterGroup>

            <FooterGroup title="Explore">
              <Link to="/#implementation">Implementation</Link>
              <Link to="/#clients">Banking clients</Link>
              <Link to="/careers">Careers</Link>
            </FooterGroup>

            <div>
              <p className="text-sm font-semibold text-white">Business enquiries</p>
              <p className="mt-4 text-sm leading-6 text-blue-100/55">
                Contact the DataSoft team to discuss product scope and
                implementation.
              </p>
              <a
                href="mailto:info@datasoft-bd.com"
                className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
              >
                <Mail size={17} aria-hidden="true" />
                info@datasoft-bd.com
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="site-container flex flex-col gap-2 py-5 text-xs leading-5 text-blue-100/45 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} DataSoft Systems Bangladesh Limited
            </span>
            <span>AML365 · Anti-money laundering and financial crime compliance</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <nav
        className="mt-4 flex flex-col items-start gap-3 text-sm text-blue-100/60"
        aria-label={`${title} footer navigation`}
      >
        {children.map((child) => (
          <span
            key={child.props.to}
            className="transition hover:text-white [&>a]:focus-visible:outline [&>a]:focus-visible:outline-2 [&>a]:focus-visible:outline-offset-4 [&>a]:focus-visible:outline-blue-300"
          >
            {child}
          </span>
        ))}
      </nav>
    </div>
  );
}
