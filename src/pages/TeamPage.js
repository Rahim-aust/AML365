import { TeamSection } from "../components/TeamSection.js";

export function TeamPage() {
  return (
    <div className="bg-white pt-[4.75rem]">
      <header className="border-b border-slate-200 bg-white">
        <div className="site-container mx-auto max-w-4xl py-12 text-center sm:py-14">
          <div data-reveal>
            <p className="text-sm font-semibold text-brand-700">
              AML365 team
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-navy-950 sm:text-4xl">
              The Brains Behind AML365
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
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
