import { TeamCard } from "./TeamCard.js";
import { leadership, teamGroups } from "../data/team.js";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-label="AML365 team directory"
      className="section-pad scroll-mt-24 bg-skysoft-50"
    >
      <div className="site-container mx-auto max-w-7xl">
        <section
          aria-labelledby="team-page-title"
          className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16"
        >
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-brand-700" data-reveal>
              Leadership
            </p>
            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {leadership.map((member, index) => (
                <div
                  key={member.name}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 70}ms` }}
                >
                  <TeamCard member={member} featured headingLevel="h2" />
                </div>
              ))}
            </div>
          </div>

          <div
            className="order-1 max-w-xl lg:order-2"
            data-reveal="right"
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-600">
              AML365 by DataSoft
            </p>
            <h1
              id="team-page-title"
              className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.035em] text-navy-950 sm:text-5xl"
            >
              The Brains Behind AML365
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Meet the people behind our technology, expertise, and
              implementation.
            </p>
          </div>
        </section>

        {teamGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="mt-16 border-t border-blue-100 pt-10 sm:mt-20 sm:pt-12"
          >
            <h3
              id={`${group.id}-heading`}
              className="text-center text-2xl font-semibold tracking-[-0.02em] text-navy-950"
              data-reveal
            >
              {group.title}
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-10">
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
