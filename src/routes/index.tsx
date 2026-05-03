import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Gamepad2, Sparkles } from "lucide-react";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";
import logo from "@/assets/logo.png";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FischFFA – Ein Allrounder Minecraft Realm" },
      {
        name: "description",
        content: "Viele Modi. Viel Spaß. Trainiere deine Skills auf FischFFA.",
      },
      { property: "og:title", content: "FischFFA – Allrounder Minecraft Realm" },
      { property: "og:description", content: "KnockbackFFA, JoinFFA, OnlyUp und mehr." },
      { property: "og:image", content: logo },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center text-center">
          {/* Floating logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl scale-110 animate-pulse-slow" />
            <img
              src={logo}
              alt="FischFFA"
              width={280}
              height={280}
              className="relative h-44 w-44 sm:h-64 sm:w-64 object-contain logo-glow float-logo"
            />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-border text-xs text-muted-foreground animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Live auf den Cytooxien Realms
          </span>

          <h1 className="mt-5 font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight animate-fade-in-up delay-100">
            <span className="text-gradient">FischFFA</span>
          </h1>
          <p className="mt-4 text-lg sm:text-2xl font-semibold text-foreground/90 max-w-xl animate-fade-in-up delay-200">
            Ein Allrounder Minecraft Realm.
          </p>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md animate-fade-in-up delay-300">
            Viele Modi. Viel Spaß. Trainiere deine Skills.
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
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* MODES PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.slice(0, 6).map((m) => (
            <GamemodeCard key={m.slug} mode={m} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border glass p-10 sm:p-16 text-center">
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
      </section>
    </>
  );
}
