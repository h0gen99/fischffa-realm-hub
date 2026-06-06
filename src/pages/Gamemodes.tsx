import { createFileRoute, Link } from "@tanstack/react-router";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/gamemodes")({
  head: () => ({
    meta: [
      { title: "Alle Gamemodes – FischFFA" },
      {
        name: "description",
        content:
          "Alle Modi von FischFFA: KnockbackFFA, JoinFFA, Speedbridge, Speedrun, TNT Tag, OnlyUp und Lobby-Spiele.",
      },
      { property: "og:title", content: "Gamemodes – FischFFA" },
      { property: "og:description", content: "KnockbackFFA, JoinFFA, Speedbridge und mehr." },
    ],
  }),
  component: GamemodesPage,
});

function GamemodesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/20 blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent animate-fade-in-up">
            Alle Modi auf einen Blick
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black animate-fade-in-up delay-100">
            <span className="text-gradient">Gamemodes</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Von hartem PvP bis zu entspannten Minispielen – such dir aus, worauf du Lust hast.
            Jeder Modus ist auf Spaß und Skill ausgelegt.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.map((m, i) => (
            <div key={m.slug} className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 400)}`}>
              <GamemodeCard mode={m} />
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-emerald/15 via-accent/10 to-primary/15 p-10 text-center">
          <Sparkles className="h-8 w-8 text-accent mx-auto" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold">
            Welcher Modus passt zu dir?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Probier einfach alles aus – hin und her wechseln geht jederzeit, ohne neu zu joinen.
          </p>
          <Link
            to="/beitreten"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
          >
            Jetzt loslegen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
