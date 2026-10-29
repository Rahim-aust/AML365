import { SectionHeading } from "./SectionHeading.js";
import { TeamCard } from "./TeamCard.js";
import { leadership, teamMembers } from "../data/team.js";

export function TeamSection() {
  return (
    <section id="team" className="section-pad scroll-mt-24 bg-white">
      <div className="site-container">
        <SectionHeading
          eyebrow="AML365 team"
          title="The Brains Behind AML365"
          copy="Meet the people behind our technology, expertise, and implementation."
        />

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:gap-7">
          {leadership.map((member, index) => (
            <div
              key={member.name}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <TeamCard member={member} featured />
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4 sm:mt-16">
          <h3 className="shrink-0 text-lg font-semibold text-navy-950">
            Team members
          </h3>
          <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 60}ms` }}
            >
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
