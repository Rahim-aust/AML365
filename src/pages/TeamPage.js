import { TeamSection } from "../components/TeamSection.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamPage() {
  const teamCount =
    leadership.length +
    teamGroups.reduce((total, group) => total + group.members.length, 0);

  return (
    <div className="bg-slate-50 pt-[4.75rem]">
      <header className="relative overflow-hidden bg-navy-950 text-white">
        <div
          className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="site-container relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,.75fr)] lg:gap-16">
            <div data-reveal>
              <p className="section-label !text-blue-300">
                <span
                  className="section-label-mark bg-blue-300"
                  aria-hidden="true"
                />
                AML365 by DataSoft
              </p>
              <h1 className="page-title mt-5 max-w-4xl text-white">
                The Brains Behind AML365
              </h1>
              <p className="lead-copy mt-5 max-w-3xl text-blue-100/75">
                Meet the people behind our technology, expertise, and
                implementation.
              </p>
            </div>

            <aside
              className="rounded-2xl border border-white/15 bg-white/[.06] p-5 backdrop-blur-sm sm:p-6"
              aria-label="Team overview"
              data-reveal="right"
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                <span className="text-3xl font-semibold tracking-[-0.03em] text-white">
                  {teamCount}
                </span>
                <span className="text-sm font-semibold text-blue-100/65">
                  Team members
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Team functions">
                {["Leadership", ...teamGroups.map((group) => group.title)].map(
                  (functionName) => (
                    <li
                      key={functionName}
                      className="rounded-full border border-white/10 bg-navy-950/25 px-3 py-1.5 text-xs font-semibold text-blue-100/75"
                    >
                      {functionName}
                    </li>
                  ),
                )}
              </ul>
            </aside>
          </div>
        </div>
      </header>
      <TeamSection />
    </div>
  );
}
