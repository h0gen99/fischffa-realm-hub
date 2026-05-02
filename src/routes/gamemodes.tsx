import { createFileRoute } from "@tanstack/react-router";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";

export const Route = createFileRoute("/gamemodes")({
  head: () => ({
    meta: [
      { title: "Gamemodes – FischFFA" },
      {
        name: "description",
        content:
          "Alle Gamemodes von FischFFA: KnockbackFFA, JoinFFA, Speedbridge, Speedrun, TNT Tag, OnlyUp und Lobby-Spiele.",
      },
      { property: "og:title", content: "Gamemodes – FischFFA" },
      { property: "og:description", content: "KnockbackFFA, JoinFFA, Speedbridge und mehr." },
    ],
  }),
  component: GamemodesPage,
});

function GamemodesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-accent">Modi</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl text-gradient">Gamemodes</h1>
        <p className="mt-4 text-muted-foreground">
          Von intensivem PvP bis zu entspannten Minispielen – auf FischFFA findest du
          deinen Lieblingsmodus.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gamemodes.map((m) => (
          <GamemodeCard key={m.slug} mode={m} />
        ))}
      </div>
    </section>
  );
}
