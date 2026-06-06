import { createFileRoute, Link } from "@tanstack/react-router";
import { Monitor, Server, Compass, Fish, Play, Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/beitreten")({
  head: () => ({
    meta: [
      { title: "So trittst du bei – FischFFA" },
      {
        name: "description",
        content:
          "In wenigen Minuten auf FischFFA: Minecraft starten, cytooxien.de joinen, Realm auswählen, fertig.",
      },
      { property: "og:title", content: "So trittst du bei – FischFFA" },
      { property: "og:description", content: "In wenigen Schritten auf FischFFA spielen." },
    ],
  }),
  component: JoinPage,
});

const steps = [
  {
    icon: Monitor,
    title: "Minecraft starten",
    text: "Mach Minecraft Java Edition auf deinem PC auf. Empfohlen: aktuelle Version, läuft aber auch auf älteren.",
  },
  {
    icon: Server,
    title: "Server hinzufügen",
    text: "Geh ins Multiplayer-Menü und füg cytooxien.de als Server hinzu. Einmal eingetragen, bleibt der Server in deiner Liste.",
    copy: "cytooxien.de",
  },
  {
    icon: Compass,
    title: "Zu den Realms gehen",
    text: "In der Cytooxien-Lobby findest du den Bereich Realms. Da geht es zu allen Community-Realms.",
  },
  {
    icon: Fish,
    title: "FischFFA auswählen",
    text: "Such in der Realm-Liste nach FischFFA und klick drauf. Schon geht's los.",
  },
  {
    icon: Play,
    title: "Modus wählen & spielen",
    text: "In der FischFFA-Lobby kannst du jeden Modus direkt anklicken. Viel Spaß!",
  },
];


function JoinPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[500px] rounded-full bg-accent/20 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Anleitung</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">So bist du dabei</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Fünf Schritte, ein paar Minuten – und du spielst auf FischFFA.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 glass rounded-2xl border border-border px-5 py-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Server-IP</span>
            <CopyChip value="cytooxien.de" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <TiltCard intensity={5}>
                <div className="glass flex gap-5 rounded-2xl border border-border p-5 sm:p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center font-display text-base font-extrabold text-primary-foreground shadow-glow">
                      {i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent mt-2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <step.icon className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                    {step.copy && (
                      <div className="mt-3">
                        <CopyChip value={step.copy} />
                      </div>
                    )}
                  </div>
                </div>
              </TiltCard>
            </li>
          ))}
        </ol>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-accent/10 to-emerald/15 p-10 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold">Wir sehen uns ingame!</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Falls was nicht klappt – frag einfach in der Lobby. Die Community hilft gern.
          </p>
          <Link
            to="/gamemodes"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
          >
            Modi anschauen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function CopyChip({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/70 px-3 py-1.5 text-xs font-mono hover:bg-secondary transition-colors"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald" /> Kopiert!
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> {value}
        </>
      )}
    </button>
  );
}
