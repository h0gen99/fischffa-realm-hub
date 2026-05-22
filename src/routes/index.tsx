import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Gamepad2, Sparkles, Trophy, Users, Zap, Shield, Flame } from "lucide-react";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServerStatus } from "@/components/ServerStatus";
import { CountUp } from "@/components/CountUp";
import logo from "@/assets/logo.png";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FischFFA – Der Allrounder Minecraft Realm" },
      {
        name: "description",
        content:
          "KnockbackFFA, JoinFFA, Speedbridge, OnlyUp und mehr – ein Realm, viele Welten. Trainiere deine Skills auf FischFFA.",
      },
      { property: "og:title", content: "FischFFA – Allrounder Minecraft Realm" },
      { property: "og:description", content: "Ein Realm. Sieben Modi. Endlos Spielzeit." },
      { property: "og:image", content: logo },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Gamepad2, label: "Gamemodes", value: gamemodes.length, suffix: "+" },
  { icon: Trophy, label: "Event-Pot", value: 100, suffix: "€" },
  { icon: Users, label: "Community", value: 0, customDisplay: "Discord" },
  { icon: Zap, label: "Online", value: 24, suffix: "/7" },
];

const features = [
  {
    icon: Flame,
    title: "Action ohne Wartezeit",
    text: "Modus wechseln, sofort spielen. Kein Queue, kein Setup, kein Stress.",
    accent: "text-accent",
  },
  {
    icon: Shield,
    title: "Faires PvP",
    text: "Aktives Team, sauberes Anticheat-Setup und klare Regeln. Skill entscheidet.",
    accent: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Events & 100€-Pot",
    text: "Regelmäßige Events – inklusive geplantem 100€ OnlyUp-Event mit Streamern.",
    accent: "text-emerald",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center text-center">
          {/* Floating logo with conic ring */}
          <div className="relative">
            <div className="conic-ring" />
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
            <img
              src={logo}
              alt="FischFFA"
              width={280}
              height={280}
              fetchPriority="high"
              decoding="async"
              className="relative h-44 w-44 sm:h-64 sm:w-64 object-contain logo-glow float-logo"
            />
            <span className="sparkle absolute -top-2 right-6 h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            <span className="sparkle absolute bottom-4 -left-2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" style={{ animationDelay: "1.2s" }} />
            <span className="sparkle absolute top-1/2 -right-3 h-1 w-1 rounded-full bg-emerald shadow-[0_0_10px_var(--emerald)]" style={{ animationDelay: "2.1s" }} />
          </div>

          <div className="mt-6 animate-fade-in-up">
            <ServerStatus />
          </div>

          <h1 className="mt-5 font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight animate-fade-in-up delay-100">
            <span className="text-gradient">FischFFA</span>
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-semibold text-foreground/90 max-w-xl animate-fade-in-up delay-200">
            Ein Realm. Sieben Modi. Endlos Spielzeit.
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md animate-fade-in-up delay-300">
            Vom kompromisslosen PvP bis zu Lobby-Spielen für zwischendurch – alles auf einem Realm, jederzeit spielbar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 animate-fade-in-up delay-400">
            <Link
              to="/beitreten"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
            >
              Jetzt spielen <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-7 py-3.5 font-semibold hover:bg-secondary/70 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Discord beitreten
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="ring-aurora group relative rounded-2xl border border-border glass p-4 text-center card-hover">
                  <s.icon className="mx-auto h-5 w-5 text-accent" />
                  <div className="mt-2 font-display text-2xl font-extrabold text-gradient">
                    {s.customDisplay ? (
                      s.customDisplay
                    ) : (
                      <CountUp to={s.value} suffix={s.suffix ?? ""} />
                    )}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* MARQUEE */}
      <LogoMarquee />

      {/* FEATURES */}
      <section className="cv-auto max-w-6xl mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Warum FischFFA</p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold">
              Gebaut für Spieler, die <span className="text-gradient">wirklich spielen</span>.
            </h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <div className="ring-aurora relative h-full rounded-2xl border border-border glass p-7 card-hover overflow-hidden">
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-6 h-28 w-28 object-contain opacity-[0.07]"
                />
                <f.icon className={`h-7 w-7 ${f.accent}`} />
                <h3 className="mt-4 font-display text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MODES PREVIEW */}
      <section className="cv-auto max-w-6xl mx-auto px-4 pb-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Gamemodes</p>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold">
                Was du <span className="text-gradient">spielen</span> kannst
              </h2>
            </div>
            <Link
              to="/gamemodes"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              Alle Modi <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.slice(0, 6).map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <GamemodeCard mode={m} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cv-auto max-w-6xl mx-auto px-4 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border glass p-10 sm:p-16 text-center">
            <img
              src={logo}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 object-contain opacity-10 select-none"
            />
            <img
              src={logo}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 object-contain opacity-[0.07] select-none rotate-12"
            />
            <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative">
              <Sparkles className="h-8 w-8 text-accent mx-auto" />
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold">
                Bereit, einzusteigen?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Server-IP: <span className="font-mono text-foreground">cytooxien.de</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/beitreten"
                  className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
                >
                  <Gamepad2 className="h-4 w-4" /> So trittst du bei
                </Link>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border glass px-7 py-3.5 font-semibold hover:bg-secondary/70 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Discord beitreten
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
