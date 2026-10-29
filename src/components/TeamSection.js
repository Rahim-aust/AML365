import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-skysoft-50/40"
    >
      <div className="site-container mx-auto max-w-6xl">
        <section aria-labelledby="leadership-heading">
          <h2
            id="leadership-heading"
            className="text-center text-lg font-semibold text-navy-950"
            data-reveal
          >
            Leadership
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-12">
            {leadership.map((member, index) => (
              <div
                key={member.name}
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
            className="mt-14 border-t border-blue-100 pt-10 sm:mt-16 sm:pt-12"
          >
            <h3
              id={`${group.id}-heading`}
              className="text-center text-lg font-semibold text-navy-950"
              data-reveal
            >
              {group.title}
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-12">
              {group.members.map((member, index) => (
                <div
                  key={member.name}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 60}ms` }}
                >
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
