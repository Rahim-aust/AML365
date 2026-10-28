export function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`section-label ${light ? "!text-blue-300" : ""}`}>
        <span
          className={`section-label-mark ${light ? "bg-blue-300" : "bg-brand-500"}`}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        className={`section-title mt-4 ${light ? "text-white" : "text-navy-950"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`lead-copy mt-5 max-w-2xl ${light ? "text-blue-100/75" : "text-slate-600"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
