import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-skysoft-50 pt-16 pb-12 sm:pt-20 sm:pb-16"
    >
      {/* Header Container with proper vertical spacing from navbar */}
      <div className="site-container mx-auto max-w-7xl px-4 text-center">
        <div className="mx-auto max-w-2xl" data-reveal="right">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
            AML365 by DataSoft
          </p>
          <h1
            id="team-page-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
          >
            The Brains Behind AML365
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Meet the people behind our technology, expertise, and implementation.
          </p>
        </div>

        {/* Leadership Section */}
        <section
          aria-labelledby="leadership-heading"
          className="mt-14 sm:mt-18 border-t border-blue-100/80 pt-12"
        >
          <h2
            id="leadership-heading"
            className="text-2xl font-semibold tracking-tight text-navy-950"
            data-reveal
          >
            Leadership
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {leadership.map((member, index) => (
              <div
                key={member.name}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` }}
              >
                <TeamCard member={member} featured headingLevel="h3" />
              </div>
            ))}
          </div>
        </section>

        {/* Team Groups Sections */}
        {teamGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="mt-14 sm:mt-18 border-t border-blue-100/80 pt-12"
          >
            <h3
              id={`${group.id}-heading`}
              className="text-2xl font-semibold tracking-tight text-navy-950"
              data-reveal
            >
              {group.title}
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {group.members.map((member, index) => (
                <div
                  key={member.name}
                  className="w-full max-w-[17rem] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
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