import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Crown, Medal, Award, ArrowRight, Swords, Flame, Mountain } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/leaderboards")({
  head: () => ({
    meta: [
      { title: "Leaderboards – FischFFA" },
      { name: "description", content: "Die besten Spieler auf FischFFA. Kills, Wins und Rekorde aller Modi." },
      { property: "og:title", content: "Leaderboards – FischFFA" },
      { property: "og:description", content: "Top-Spieler aller Modi auf FischFFA." },
    ],
  }),
  component: LeaderboardsPage,
});

type Board = {
  title: string;
  icon: LucideIcon;
  metric: string;
  entries: { name: string; value: string }[];
};

const boards: Board[] = [
  {
    title: "KnockbackFFA",
    icon: Swords,
    metric: "Kills",
    entries: [
      { name: "Fischiix", value: "1.842" },
      { name: "voiqz", value: "1.530" },
      { name: "Gritzelbritz", value: "1.214" },
      { name: "ElementIron", value: "987" },
      { name: "Fite_88", value: "812" },
    ],
  },
  {
    title: "JoinFFA",
    icon: Flame,
    metric: "Kills",
    entries: [
      { name: "voiqz", value: "2.105" },
      { name: "Fischiix", value: "1.940" },
      { name: "Freeeedom", value: "1.302" },
      { name: "Babobastisch", value: "1.100" },
      { name: "ElementIron", value: "950" },
    ],
  },
  {
    title: "OnlyUp",
    icon: Mountain,
    metric: "Beste Zeit",
    entries: [
      { name: "Gritzelbritz", value: "04:21" },
      { name: "Fite_88", value: "04:48" },
      { name: "Fischiix", value: "05:02" },
      { name: "voiqz", value: "05:31" },
      { name: "Freeeedom", value: "06:10" },
    ],
  },
];

const rankIcon = (i: number) => {
  if (i === 0) return <Crown className="h-4 w-4 text-accent" />;
  if (i === 1) return <Medal className="h-4 w-4 text-primary" />;
  if (i === 2) return <Award className="h-4 w-4 text-emerald" />;
  return <span className="text-xs font-mono text-muted-foreground">#{i + 1}</span>;
};

function LeaderboardsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-accent/20 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <Trophy className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">Bestenlisten</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">Leaderboards</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Wer ist gerade ganz oben? Hier siehst du die besten Spieler aller Modi.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/80">
            Die Zahlen sind Beispielwerte – live-Daten folgen.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {boards.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 80}>
                <TiltCard className="h-full" intensity={4}>
                  <div className="ring-aurora relative h-full overflow-hidden rounded-2xl border border-border glass p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-accent" />
                        <h3 className="font-display text-lg font-bold">{b.title}</h3>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {b.metric}
                      </span>
                    </div>
                    <ul className="mt-5 divide-y divide-border/60">
                      {b.entries.map((e, idx) => (
                        <li
                          key={e.name}
                          className="flex items-center justify-between py-2.5 text-sm"
                        >
                          <span className="flex items-center gap-3">
                            <span className="w-6 grid place-items-center">{rankIcon(idx)}</span>
                            <span className={idx === 0 ? "font-bold" : "font-medium"}>{e.name}</span>
                          </span>
                          <span className="font-mono text-foreground/90">{e.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-border glass p-10 text-center">
          <Trophy className="mx-auto h-8 w-8 text-accent" />
          <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold">
            Du willst auch nach oben?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Join den Server, schnapp dir einen Modus und spiel dich in die Top 5.
          </p>
          <Link
            to="/beitreten"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
          >
            Jetzt mitspielen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
