import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const steps = [
  {
    title: "Minecraft starten",
    text: "Mach Minecraft Java Edition auf.",
  },
  {
    title: "Server hinzufügen",
    text: "Geh ins Multiplayer-Menü und füg cytooxien.de hinzu.",
    copy: "cytooxien.de",
  },
  {
    title: "Realms öffnen",
    text: "In der Cytooxien-Lobby auf den Realm-Bereich gehen.",
  },
  {
    title: "FischFFA wählen",
    text: "FischFFA in der Liste suchen und draufklicken.",
  },
  {
    title: "Loslegen",
    text: "Modus aussuchen und spielen.",
  },
];

export default function Beitreten() {
  usePageMeta("Beitreten – FischFFA", "So joinst du auf FischFFA.");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black">
            <span className="text-gradient">So joinst du</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            5 Schritte. Dauert keine 2 Minuten.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 glass rounded-xl border border-border px-4 py-2.5">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Server-IP
            </span>
            <CopyChip value="cytooxien.de" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="glass flex gap-4 rounded-xl border border-border p-5"
            >
              <div className="h-10 w-10 shrink-0 grid place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-extrabold">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                {s.copy && (
                  <div className="mt-3">
                    <CopyChip value={s.copy} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-border glass p-8 text-center">
          <h3 className="font-display text-xl font-extrabold">Bis gleich ingame!</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Wenn was nicht klappt – frag uns auf Discord.
          </p>
          <Link
            to="/gamemodes"
            className="btn-primary mt-5 inline-flex rounded-xl px-6 py-3 font-semibold"
          >
            Modi anschauen
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
          <Check className="h-3.5 w-3.5 text-emerald" /> Kopiert
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" /> {value}
        </>
      )}
    </button>
  );
}
