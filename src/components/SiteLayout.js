import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

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
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-slate-200/80">
        <div className="site-container flex h-20 items-center justify-between">
          <Logo />
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {links.map(([label, to]) => (
              <NavLink
                key={label}
                to={to}
                className="focus-ring text-sm font-semibold text-slate-600 transition hover:text-brand-600"
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="focus-ring rounded-full bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              Request a consultation
            </Link>
          </nav>
          <button
            type="button"
            className="focus-ring rounded-lg p-2 text-navy-950 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="border-t border-slate-200 bg-white px-4 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-container flex flex-col gap-1">
              {links.map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-semibold text-navy-900 hover:bg-skysoft-50"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-navy-950 px-4 py-3 text-center font-bold text-white"
              >
                Request a consultation
              </Link>
            </div>
          </nav>
        )}
      </header>
      <main id="main-content">{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Logo compact />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
              DataSoft’s financial crime compliance software portfolio for banks
              and financial institutions.
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.17em] text-slate-400">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-slate-600">
              <Link to="/#modules">Solutions</Link>
              <Link to="/#roadmap">AI/ML roadmap</Link>
              <Link to="/#clients">Clients</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.17em] text-slate-400">
              Contact
            </p>
            <a
              href="mailto:info@datasoft-bd.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-700"
            >
              info@datasoft-bd.com <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-200">
          <div className="site-container flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
            <span>
              © {new Date().getFullYear()} DataSoft Systems Bangladesh Limited
            </span>
            <span>AML365 product portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
