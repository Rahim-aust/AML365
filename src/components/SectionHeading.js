export function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "!text-blue-300" : ""}`}>{eyebrow}</p>
      <h2
        className={`section-title mt-5 font-semibold ${light ? "text-white" : "text-navy-950"}`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-6 max-w-2xl text-lg leading-8 ${light ? "text-blue-100/75" : "text-slate-600"}`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
