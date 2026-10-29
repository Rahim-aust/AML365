import { SectionHeading } from "./SectionHeading.js";
import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section id="team" className="section-pad scroll-mt-24 bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="AML365 team"
          title="The Brains Behind AML365"
          copy="Meet the people behind our technology, expertise, and implementation."
        />

        <section aria-labelledby="leadership-heading" className="mt-10 sm:mt-12">
          <div className="flex items-center gap-4">
            <h3
              id="leadership-heading"
              className="shrink-0 text-lg font-semibold text-navy-950"
            >
              Leadership
            </h3>
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:gap-7">
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
            className="mt-14 border-t border-slate-200 pt-12 sm:mt-16"
          >
            <div className="flex items-center gap-4">
              <h3
                id={`${group.id}-heading`}
                className="shrink-0 text-lg font-semibold text-navy-950"
              >
                {group.title}
              </h3>
              <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, index) => (
                <div
                  key={member.name}
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
    </section>
  );
}
