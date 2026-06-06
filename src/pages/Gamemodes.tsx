import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";

export default function Gamemodes() {
  usePageMeta("Gamemodes – FischFFA", "Alle Modi auf FischFFA.");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black">
            <span className="text-gradient">Gamemodes</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Alles, was du auf FischFFA spielen kannst.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.map((m) => (
            <GamemodeCard key={m.slug} mode={m} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border glass p-8 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-extrabold">
            Du weißt nicht, was du spielen sollst?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Einfach reinhopsen und ausprobieren. Wechseln geht immer.
          </p>
          <Link
            to="/beitreten"
            className="btn-primary mt-5 inline-flex rounded-xl px-6 py-3 font-semibold"
          >
            Jetzt joinen
          </Link>
        </div>
      </section>
    </>
  );
}
