import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FischFFA – Der ultimative Minecraft Allrounder Realm" },
      {
        name: "description",
        content:
          "Knockback, FFA, Speedbridge, TNT Tag, OnlyUp und mehr. Tritt dem FischFFA Cytooxien Realm bei.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
             style={{
               backgroundImage:
                 "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
               backgroundSize: "48px 48px",
             }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground animate-fade-in-up">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Cytooxien Realm
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl text-gradient animate-fade-in-up">
            FischFFA
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Der ultimative Minecraft Allrounder Realm
          </p>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto">
            Knockback, FFA, Speedbridge, TNT Tag, OnlyUp und Lobby-Minispiele –
            alles auf einem Realm, alles auf Deutsch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/beitreten"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Jetzt spielen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/gamemodes"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-semibold hover:bg-secondary transition-colors"
            >
              Gamemodes ansehen
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
            {[
              { icon: Zap, label: "7+ Modi", sub: "Abwechslung pur" },
              { icon: Users, label: "Community", sub: "Aktiv & freundlich" },
              { icon: Sparkles, label: "Events", sub: "100€ OnlyUp Event" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card/60 backdrop-blur p-4 text-left"
              >
                <Icon className="h-5 w-5 text-accent" />
                <p className="mt-2 font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-display text-2xl sm:text-3xl">Was ist FischFFA?</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          FischFFA ist ein vielseitiger Cytooxien Realm, der das Beste aus mehreren
          Welten kombiniert. Egal ob du gerne im PvP brillierst, an deinen Bridges
          feilst oder einfach mit Freunden in OnlyUp herumkletterst – hier findest
          du immer den passenden Modus. Fokus auf Spaß, Skill und Community.
        </p>
      </section>

      {/* Modes preview */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Beliebte Gamemodes</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Eine kleine Auswahl – alle Modi auf der Gamemodes-Seite.
            </p>
          </div>
          <Link
            to="/gamemodes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            Alle ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.slice(0, 6).map((m) => (
            <GamemodeCard key={m.slug} mode={m} />
          ))}
        </div>
      </section>
    </>
  );
}
