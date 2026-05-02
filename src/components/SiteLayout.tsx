import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

const navItems: { to: "/" | "/gamemodes" | "/beitreten" | "/ueber-uns"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Startseite", exact: true },
  { to: "/gamemodes", label: "Gamemodes" },
  { to: "/beitreten", label: "Beitreten" },
  { to: "/ueber-uns", label: "Über uns" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
              <Gamepad2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-sm sm:text-base text-gradient">FischFFA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                activeProps={{ className: "text-accent bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border bg-background/95 px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                activeProps={{ className: "text-accent bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FischFFA · Cytooxien Realm
          </p>
          <p className="text-xs text-muted-foreground">
            Nicht offiziell mit Mojang oder Microsoft verbunden.
          </p>
        </div>
      </footer>
    </div>
  );
}
