import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Users,
  Zap,
  Shield,
  Trophy,
  Heart,
  Gamepad2,
  Flame,
  MessageCircle,
} from "lucide-react";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";
import heroImg from "@/assets/hero.jpg";

const DISCORD_URL = "https://discord.gg/y32bEyVE";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FischFFA – Der Minecraft Allrounder Realm auf Cytooxien" },
      {
        name: "description",
        content:
          "KnockbackFFA, JoinFFA, Speedbridge, TNT Tag, OnlyUp und mehr – alles auf einem Realm. Komm vorbei und spiel mit der Community.",
      },
      { property: "og:title", content: "FischFFA – Minecraft Allrounder Realm" },
      { property: "og:description", content: "Knockback, FFA, Speedbridge, OnlyUp und mehr." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Flame,
    title: "Sieben Modi, ein Realm",
    text: "Von hartem PvP bis zu entspannten Minispielen – wechsel den Modus, wann immer dir danach ist.",
  },
  {
    icon: Shield,
    title: "Faires Spiel",
    text: "Klare Regeln, kein Pay-to-Win. Hier zählt, wie gut du wirklich bist.",
  },
  {
    icon: Heart,
    title: "Freundliche Community",
    text: "Egal ob Anfänger oder Profi – bei uns bist du willkommen und findest schnell Anschluss.",
  },
  {
    icon: Trophy,
    title: "Echte Events",
    text: "Regelmäßige Aktionen wie unser 100€ OnlyUp-Event. Spielen, gewinnen, Spaß haben.",
  },
];

const stats = [
  { value: "7+", label: "Gamemodes" },
  { value: "100€", label: "Event-Pott" },
  { value: "24/7", label: "Online" },
  { value: "DE", label: "Auf Deutsch" },
];

const testimonials = [
  {
    name: "Leon",
    role: "Stammspieler",
    text: "Die Mischung aus KnockbackFFA und Speedbridge ist genau mein Ding. Ich komm jeden Abend kurz vorbei.",
  },
  {
    name: "Mia",
    role: "Casual",
    text: "Endlich ein Realm, auf dem man auch chillen kann. OnlyUp mit Freunden ist einfach mega.",
  },
  {
    name: "Tobi",
    role: "PvPler",
    text: "Saubere Hits, faire Kämpfe, gute Leute. Viel mehr brauch ich von einem Server nicht.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Minecraft Landschaft mit Aurora und schwebenden Inseln"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute inset-0 grid-pattern" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-28 sm:pt-32 sm:pb-36 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Live auf Cytooxien · Realm aktiv
          </span>

          <h1 className="mt-6 font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight animate-fade-in-up delay-100">
            <span className="text-gradient">FischFFA</span>
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-semibold text-foreground/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Der Minecraft-Realm, der einfach alles kann.
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-300">
            KnockbackFFA, JoinFFA, Speedbridge, TNT Tag, OnlyUp und Lobby-Spiele –
            alles auf einem Realm. Komm rein, schnapp dir ein Kit und leg los.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-400">
            <Link
              to="/beitreten"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
            >
              Jetzt spielen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gamemodes"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-7 py-3.5 font-semibold hover:bg-secondary/70 transition-colors"
            >
              <Gamepad2 className="h-4 w-4" /> Modi entdecken
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`glass rounded-2xl border border-border p-5 animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <p className="font-display text-3xl font-extrabold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* fade transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Warum FischFFA</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold">
            Ein Realm, der <span className="text-gradient">richtig Spaß macht</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir bauen FischFFA für Leute, die Minecraft lieben – ohne komplizierten Kram, ohne Bezahlmauern.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-hover glass rounded-2xl border border-border p-6 animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 via-accent/30 to-emerald/30 grid place-items-center">
                <f.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODES PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Gamemodes</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold">Was du spielen kannst</h2>
            <p className="mt-2 text-muted-foreground text-sm max-w-md">
              Eine kleine Vorschau – die ganze Liste findest du auf der Gamemodes-Seite.
            </p>
          </div>
          <Link
            to="/gamemodes"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Alle Modi ansehen
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.slice(0, 6).map((m) => (
            <GamemodeCard key={m.slug} mode={m} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Stimmen aus der Community</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold">
            Was unsere <span className="text-gradient">Spieler sagen</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-hover glass rounded-2xl border border-border p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center font-bold text-sm text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-accent/10 to-emerald/15 p-10 sm:p-16 text-center">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">
            <Sparkles className="h-8 w-8 text-accent mx-auto" />
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold">
              Bereit, einzusteigen?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Server-IP: <span className="font-mono text-foreground">cytooxien.de</span> – Realm wählen, FischFFA, fertig.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/beitreten"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
              >
                <Zap className="h-4 w-4" /> So trittst du bei
              </Link>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-2 rounded-xl border border-border glass px-7 py-3.5 font-semibold hover:bg-secondary/70 transition-colors"
              >
                <Users className="h-4 w-4" /> Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
