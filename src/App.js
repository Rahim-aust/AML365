import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout.js";
import { MotionEffects } from "./components/MotionEffects.js";
import { PageLoader } from "./components/PageLoader.js";
import { ContactPage } from "./pages/ContactPage.js";
import { CareersPage } from "./pages/CareersPage.js";
import { HomePage } from "./pages/Home.js";
import { NotFoundPage } from "./pages/NotFoundPage.js";
import { SolutionsPage } from "./pages/SolutionsPage.js";
import { TeamPage } from "./pages/TeamPage.js";

function RouteEffects() {
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/": "AML365 | Financial Crime Compliance Software",
      "/solutions":
        "AML365 Solutions | Screening, KYC and Transaction Monitoring",
      "/contact": "Contact the AML365 Team | DataSoft",
      "/careers": "Careers at AML365 | DataSoft",
      "/team": "The Brains Behind AML365 | DataSoft",
    };
    document.title = titles[location.pathname] ?? "AML365 | DataSoft";
    if (location.hash)
      window.setTimeout(
        () =>
          document
            .querySelector(location.hash)
            ?.scrollIntoView({ behavior: "smooth" }),
        50,
      );
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export default function AppRoot() {
  return (
    <>
      <PageLoader />
      <SiteLayout>
        <RouteEffects />
        <MotionEffects />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </>
  );
}
