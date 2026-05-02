import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Server, Compass, Fish, Play, Copy, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/beitreten")({
  head: () => ({
    meta: [
      { title: "So trittst du bei – FischFFA" },
      {
        name: "description",
        content:
          "Schritt-für-Schritt Anleitung, um dem FischFFA Realm auf Cytooxien beizutreten.",
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
    text: "Öffne Minecraft Java Edition auf deinem PC.",
  },
  {
    icon: Server,
    title: "Server hinzufügen",
    text: "Joine den Server cytooxien.de über das Multiplayer-Menü.",
    copy: "cytooxien.de",
  },
  {
    icon: Compass,
    title: "Zu den Realms",
    text: "Gehe in der Lobby zu den Realms / Realm-Welten.",
  },
  {
    icon: Fish,
    title: "FischFFA wählen",
    text: "Wähle aus der Realm-Liste FischFFA aus.",
  },
  {
    icon: Play,
    title: "Losspielen!",
    text: "Betreten und direkt einen Modus deiner Wahl starten.",
  },
];

function JoinPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-accent">Anleitung</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl text-gradient">
          So trittst du bei
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          In nur fünf einfachen Schritten bist du auf FischFFA dabei.
        </p>
      </div>

      <ol className="mt-14 space-y-4">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="card-hover flex gap-5 rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <div className="flex flex-col items-center">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center font-display text-sm text-primary-foreground shadow-glow">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-border mt-2" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <step.icon className="h-5 w-5 text-accent" />
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              {step.copy && <CopyButton value={step.copy} />}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center">
        <h3 className="font-display text-lg">Bereit?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Wir sehen uns auf FischFFA – viel Spaß und gutes Spiel!
        </p>
      </div>
    </section>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-mono hover:bg-secondary/70 transition-colors"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-emerald" /> : <Copy className="h-3.5 w-3.5" />}
      {value}
    </button>
  );
}
