import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("404 – FischFFA", "Seite nicht gefunden.");
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl text-gradient">404</h1>
        <p className="mt-3 text-muted-foreground">Diese Seite gibt es nicht.</p>
        <Link
          to="/"
          className="btn-primary mt-6 inline-flex rounded-xl px-6 py-3 font-semibold"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
