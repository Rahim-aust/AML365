import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

export function ModuleModal({ module, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    document.body.style.overflow = "hidden";
    appRoot?.setAttribute("inert", "");
    appRoot?.setAttribute("aria-hidden", "true");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      appRoot?.removeAttribute("inert");
      appRoot?.removeAttribute("aria-hidden");
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const Icon = module.icon;
  const titleId = `module-${module.slug}-title`;
  const descriptionId = `module-${module.slug}-description`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-navy-950/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[calc(100dvh-0.75rem)] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl shadow-black/30 sm:max-h-[calc(100dvh-3rem)] sm:max-w-3xl sm:rounded-[2rem]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-brand-700">
              <Icon size={21} />
            </span>
            <span className="meta-label text-brand-700">
              AML365 module
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-navy-950 transition hover:border-blue-300 hover:bg-blue-50"
            aria-label={`Close ${module.name} details`}
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 py-8 sm:px-8 sm:py-10">
          <p className="meta-label text-slate-500">
            Current capability
          </p>
          <h2
            id={titleId}
            className="mt-3 text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl"
          >
            {module.name}
          </h2>
          <p
            id={descriptionId}
            className="lead-copy mt-5 font-semibold text-navy-900"
          >
            {module.summary}
          </p>
          <p className="body-copy mt-5 text-slate-600">{module.details}</p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-skysoft-50 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-navy-950">
              Core capabilities
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {module.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm font-medium leading-6 text-navy-900"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-100 text-brand-700">
                    <Check size={13} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-slate-500">
              Module configuration and implementation scope are aligned with
              each institution’s approved requirements.
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 font-bold text-white transition hover:bg-brand-700"
            >
              Discuss this module <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}
