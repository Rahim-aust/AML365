import { TeamSection } from "../components/TeamSection.js";

export function TeamPage() {
  return (
    <div className="bg-white pt-[4.75rem]">
      <header className="border-b border-slate-200 bg-skysoft-50">
        <div className="site-container mx-auto max-w-7xl py-12 sm:py-14 lg:py-16">
          <div className="max-w-4xl" data-reveal>
            <p className="text-sm font-semibold text-brand-700">
              AML365 team
            </p>
            <h1 className="page-title mt-3 text-navy-950">
              The Brains Behind AML365
            </h1>
            <p className="lead-copy mt-4 max-w-3xl text-slate-600">
              Meet the people behind our technology, expertise, and
              implementation.
            </p>
          </div>
        </div>
      </header>
      <TeamSection />
    </div>
  );
}
