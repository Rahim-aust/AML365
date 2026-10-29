import { useState } from "react";
import { Linkedin, Mail, Phone, UserRound } from "lucide-react";

export function TeamCard({ member, featured = false, headingLevel = "h3" }) {
  const [imageError, setImageError] = useState(false);
  const showImage = member.image && !imageError;
  const Heading = headingLevel;

  return (
    <article className="group mx-auto w-full max-w-[17rem] text-center">
      <div
        className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-blue-100 bg-white transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-300 group-hover:shadow-xl group-hover:shadow-blue-950/10"
      >
        {showImage ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.title}`}
            className="h-full w-full object-cover object-center transition-[filter] duration-300 group-hover:brightness-[1.03]"
            loading={featured ? "eager" : "lazy"}
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center text-brand-700"
            role="img"
            aria-label={`Photograph placeholder for ${member.name}`}
          >
            <span className="grid h-20 w-20 place-items-center rounded-full bg-white sm:h-24 sm:w-24">
              <UserRound
                size={32}
                strokeWidth={1.35}
                aria-hidden="true"
              />
            </span>
          </div>
        )}
      </div>

      <div className="pt-4">
        <Heading className="text-base font-semibold leading-6 text-navy-950 transition-colors duration-300 group-hover:text-brand-700 sm:text-lg">
          {member.name}
        </Heading>
        <p className="mt-1 text-sm font-medium leading-5 text-brand-700">
          {member.title}
        </p>
        {(member.phone || member.email || member.linkedin) && (
          <div className="mt-2 space-y-1 text-xs leading-5 text-slate-500">
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="focus-ring mx-auto flex w-fit items-center gap-1.5 rounded transition hover:text-brand-700"
                aria-label={`Call ${member.name} at ${member.phone}`}
              >
                <Phone size={12} aria-hidden="true" />
                {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="focus-ring mx-auto flex w-fit max-w-full items-start gap-1.5 rounded transition hover:text-brand-700"
                aria-label={`Email ${member.name} at ${member.email}`}
              >
                <Mail className="mt-1 shrink-0" size={12} aria-hidden="true" />
                <span className="break-all">{member.email}</span>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mx-auto flex w-fit items-center gap-1.5 rounded transition hover:text-brand-700"
                aria-label={`View ${member.name} on LinkedIn`}
              >
                <Linkedin size={12} aria-hidden="true" />
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
