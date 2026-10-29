import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-slate-50"
    >
      <div className="site-container mx-auto max-w-7xl">
        <section
          aria-labelledby="leadership-heading"
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm shadow-blue-950/[.03] sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="meta-label text-brand-600">Team directory</p>
              <h2
                id="leadership-heading"
                className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-navy-950 sm:text-3xl"
              >
                Leadership
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-500">
              {leadership.length} profiles
            </p>
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2 lg:gap-7">
            {leadership.map((member, index) => (
              <div
                key={member.name}
                className="h-full"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` }}
              >
                <TeamCard member={member} featured headingLevel="h4" />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white px-5 shadow-sm shadow-blue-950/[.03] sm:px-7 lg:px-8">
          {teamGroups.map((group, groupIndex) => (
            <section
              key={group.id}
              aria-labelledby={`${group.id}-heading`}
              className={`py-9 sm:py-10 ${groupIndex > 0 ? "border-t border-slate-200" : ""}`}
            >
              <div className="flex items-center gap-4">
                <span
                  className="h-7 w-1 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                <h3
                  id={`${group.id}-heading`}
                  className="text-xl font-semibold tracking-[-0.02em] text-navy-950 sm:text-2xl"
                >
                  {group.title}
                </h3>
                <span
                  className="hidden h-px flex-1 bg-slate-200 sm:block"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.members.map((member, index) => (
                  <div
                    key={member.name}
                    className="h-full"
                    data-reveal
                    style={{ "--reveal-delay": `${(index % 3) * 60}ms` }}
                  >
                    <TeamCard member={member} headingLevel="h4" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
