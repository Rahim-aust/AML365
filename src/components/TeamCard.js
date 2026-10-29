import { useState } from "react";
import { Linkedin, Mail, Phone, UserRound } from "lucide-react";

export function TeamCard({ member, featured = false, headingLevel = "h3" }) {
  const [imageError, setImageError] = useState(false);
  const showImage = member.image && !imageError;
  const Heading = headingLevel;

  return (
    <article
      className={`group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/[.07] ${featured ? "rounded-3xl" : "rounded-2xl"}`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-blue-50 via-skysoft-50 to-blue-100 ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        {showImage ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.title}`}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.025]"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="grid h-full w-full place-items-center text-brand-700"
            role="img"
            aria-label={`Photograph placeholder for ${member.name}`}
          >
            <span className="grid h-20 w-20 place-items-center rounded-full border border-blue-200 bg-white/80 shadow-sm sm:h-24 sm:w-24">
              <UserRound
                size={featured ? 42 : 36}
                strokeWidth={1.35}
                aria-hidden="true"
              />
            </span>
          </div>
        )}
        {featured && (
          <span className="meta-label absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-brand-700 shadow-sm backdrop-blur">
            Leadership
          </span>
        )}
      </div>

      <div className={featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}>
        <Heading
          className={`${featured ? "text-2xl" : "text-xl"} font-semibold leading-tight tracking-[-0.02em] text-navy-950`}
        >
          {member.name}
        </Heading>
        <p className="mt-2 text-sm font-semibold leading-6 text-brand-700">
          {member.title}
        </p>
        {(member.phone || member.email || member.linkedin) && (
          <div className="mt-5 space-y-2 border-t border-slate-200 pt-4">
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="focus-ring flex w-fit items-center gap-2 rounded text-sm font-medium text-slate-600 transition hover:text-brand-700"
                aria-label={`Call ${member.name} at ${member.phone}`}
              >
                <Phone size={15} aria-hidden="true" />
                {member.phone}
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="focus-ring flex w-fit items-center gap-2 rounded text-sm font-medium text-slate-600 transition hover:text-brand-700"
                aria-label={`Email ${member.name} at ${member.email}`}
              >
                <Mail size={15} aria-hidden="true" />
                <span className="break-all">{member.email}</span>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex w-fit items-center gap-2 rounded text-sm font-medium text-slate-600 transition hover:text-brand-700"
                aria-label={`View ${member.name} on LinkedIn`}
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
