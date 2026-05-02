import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Fish, Github, MessageCircle } from "lucide-react";

const navItems: { to: "/" | "/gamemodes" | "/beitreten" | "/ueber-uns"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Start", exact: true },
  { to: "/gamemodes", label: "Gamemodes" },
  { to: "/beitreten", label: "Beitreten" },
  { to: "/ueber-uns", label: "Über uns" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/75 border-b border-border shadow-soft"
            : "backdrop-blur-md bg-background/40 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-accent to-emerald grid place-items-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Fish className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-extrabold text-gradient">FischFFA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Cytooxien Realm</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/beitreten"
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold"
            >
              Jetzt spielen
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/beitreten"
              className="btn-primary mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Jetzt spielen
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative border-t border-border mt-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
                <Fish className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-base font-extrabold text-gradient">FischFFA</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Der Allrounder-Realm auf Cytooxien – PvP, Bridging, OnlyUp und mehr. Auf Deutsch, für die Community.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-muted-foreground hover:text-foreground transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Community</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              Server-IP: <span className="font-mono text-foreground">cytooxien.de</span>
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
                <MessageCircle className="h-3.5 w-3.5" /> Discord bald
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
                <Github className="h-3.5 w-3.5" /> Open
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} FischFFA · Mit Liebe für die Minecraft-Community gebaut.
            </p>
            <p className="text-xs text-muted-foreground">
              Nicht offiziell mit Mojang oder Microsoft verbunden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
