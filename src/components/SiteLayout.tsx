import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { AmbientBackground } from "@/components/AmbientBackground";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

const navItems = [
  { to: "/", label: "Start", end: true },
  { to: "/gamemodes", label: "Gamemodes" },
  { to: "/regeln", label: "Regeln" },
  { to: "/support", label: "Support" },
  { to: "/ueber-uns", label: "Team" },
  { to: "/beitreten", label: "Beitreten" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <AmbientBackground />

      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "backdrop-blur-xl bg-background/75 border-b border-border"
            : "backdrop-blur-md bg-background/40 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="FischFFA"
              width={36}
              height={36}
              className="h-9 w-9 object-contain logo-glow"
            />
            <span className="font-display text-lg font-extrabold text-gradient">
              FischFFA
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground bg-secondary/60"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border glass px-3 py-2 text-sm font-medium hover:bg-secondary/70 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> Discord
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive ? "text-foreground bg-secondary" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> Discord
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="FischFFA" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="font-display text-base font-extrabold text-gradient">FischFFA</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Unser Minecraft Realm. Komm vorbei und spiel mit.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="mt-3 space-y-1.5 text-sm">
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
            <h4 className="text-sm font-semibold">Server</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              IP: <span className="font-mono text-foreground">cytooxien.de</span>
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-accent" /> Discord
            </a>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} FischFFA
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
