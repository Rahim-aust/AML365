import { useEffect, useState } from "react";

export const PAGE_LOADER_EVENT = "aml365:show-loader";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const replay = () => setRunId((current) => current + 1);
    window.addEventListener(PAGE_LOADER_EVENT, replay);
    return () => window.removeEventListener(PAGE_LOADER_EVENT, replay);
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minimumVisibleTime = reduceMotion ? 0 : 900;
    let exitTimer;
    let removeTimer;
    let fallbackTimer;
    let finished = false;

    document.body.classList.add("page-loading");
    setVisible(true);
    setExiting(false);

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, minimumVisibleTime - elapsed);

      exitTimer = window.setTimeout(() => {
        setExiting(true);
        removeTimer = window.setTimeout(() => {
          setVisible(false);
          document.body.classList.remove("page-loading");
        }, reduceMotion ? 0 : 360);
      }, wait);
    };

    if (runId > 0 || document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    fallbackTimer = window.setTimeout(finish, 2000);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(fallbackTimer);
      document.body.classList.remove("page-loading");
    };
  }, [runId]);

  if (!visible) return null;

  return (
    <div
      className={`page-loader ${exiting ? "is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading AML365"
    >
      <div className="page-loader-pattern" aria-hidden="true" />
      <div className="relative flex flex-col items-center">
        <div className="rounded-2xl bg-white px-5 py-3 shadow-2xl shadow-black/25">
          <img
            src="/aml365-logo.png"
            alt="AML365"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>
        <p className="mt-5 text-sm font-semibold tracking-wide text-blue-100/75">
          Financial crime compliance
        </p>
        <div className="mt-5 h-1 w-44 overflow-hidden rounded-full bg-white/15">
          <span className="page-loader-progress block h-full rounded-full bg-blue-400" />
        </div>
        <span className="sr-only">Loading website</span>
      </div>
    </div>
  );
}
