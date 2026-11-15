
import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-skysoft-50 py-12 sm:py-14"
    >
      <div className="site-container mx-auto max-w-7xl px-4 text-center">
        {/* Header */}
        <div className="mx-auto max-w-2xl" data-reveal="right">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
            AML365 by DataSoft
          </p>

          <h1
            id="team-page-title"
            className="mt-2 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
          >
            The Brains Behind AML365
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Meet the people behind our technology, expertise, and implementation.
          </p>
        </div>

        {/* Leadership */}
        <section
          aria-labelledby="leadership-heading"
          className="mt-10 border-t border-blue-100/80 pt-8 sm:mt-12"
        >
          <h2
            id="leadership-heading"
            className="text-xl font-semibold tracking-tight text-navy-950 sm:text-2xl"
            data-reveal
          >
            Leadership
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5">
            {leadership.map((member, index) => (
              <div
                key={member.name}
                data-reveal
                style={{ "--reveal-delay": `${index * 60}ms` }}
              >
                <TeamCard member={member} featured headingLevel="h3" />
              </div>
            ))}
          </div>
        </section>

        {/* Team Groups */}
        {teamGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="mt-10 border-t border-blue-100/80 pt-8 sm:mt-12"
          >
            <h2
              id={`${group.id}-heading`}
              className="text-xl font-semibold tracking-tight text-navy-950 sm:text-2xl"
              data-reveal
            >
              {group.title}
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-5">
              {group.members.map((member, index) => (
                <div
                  key={member.name}
                  className="w-full max-w-[17rem] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 50}ms` }}
                >
                  <TeamCard member={member} headingLevel="h3" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
