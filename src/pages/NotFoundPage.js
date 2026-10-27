import { ArrowLeft } from "lucide-react"; // JavaScript route component.
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="grid min-h-screen place-items-center bg-navy-950 px-4 pt-20 text-center text-white">
      <div>
        <p className="eyebrow !text-blue-300">404</p>
        <h1 className="page-title mt-4">
          Page not found
        </h1>
        <p className="mt-5 text-blue-100/65">
          The page you requested is not part of the AML365 website.
        </p>
        <Link
          to="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-bold"
        >
          <ArrowLeft size={18} /> Return home
        </Link>
      </div>
    </section>
  );
}
