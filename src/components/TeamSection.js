import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-white"
    >
      <div className="site-container mx-auto max-w-7xl">
        <section aria-labelledby="leadership-heading">
          <div className="border-b border-slate-200 pb-4">
            <h2
              id="leadership-heading"
              className="text-2xl font-semibold tracking-[-0.025em] text-navy-950 sm:text-3xl"
            >
              Leadership
            </h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-6">
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

        {teamGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="mt-12 border-t border-slate-200 pt-9 sm:mt-14 sm:pt-10"
          >
            <h3
              id={`${group.id}-heading`}
              className="text-xl font-semibold tracking-[-0.02em] text-navy-950 sm:text-2xl"
            >
              {group.title}
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <div key={member.name} className="h-full" data-reveal>
                  <TeamCard member={member} headingLevel="h4" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
