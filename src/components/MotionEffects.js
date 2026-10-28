import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function MotionEffects() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let observer;
    let frame;

    frame = window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll("[data-reveal]");

      if (reduceMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-revealed"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
      );

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
}
