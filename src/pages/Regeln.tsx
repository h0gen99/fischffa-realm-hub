import { Link } from "react-router-dom";
import { Swords, MessageCircle, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

type Rule = { title: string; text: string };
type Section = { title: string; icon: LucideIcon; rules: Rule[] };

const sections: Section[] = [
  {
    title: "Minecraft / PvP",
    icon: Swords,
    rules: [
      { title: "Kein Cheating", text: "Keine Hacks, KillAura, AutoClicker, Reach." },
      { title: "Kein Teaming", text: "In FFA spielt jeder für sich." },
      { title: "Keine Bugs abusen", text: "Bugs einfach beim Team melden." },
      { title: "Respektvoll bleiben", text: "Keine Beleidigungen im Chat." },
    ],
  },
  {
    title: "Discord",
    icon: MessageCircle,
    rules: [
      { title: "Respekt", text: "Sei nett. Kein Hate." },
      { title: "Keine Werbung", text: "Werbung nur mit Erlaubnis." },
      { title: "Kein Spam", text: "Text, Emojis, Voice – kein Spam." },
      { title: "Richtige Kanäle", text: "Schreib im passenden Channel." },
      { title: "Voice fair", text: "Kein Soundboard-Spam, kein Trolling." },
      { title: "Kein NSFW", text: "Keine NSFW-, Gewalt- oder politischen Inhalte." },
      { title: "Keine Fake-Identität", text: "Gib dich nicht als jemand anderes aus." },
      { title: "Auf das Team hören", text: "Diskussionen bitte per DM." },
    ],
  },
];

export default function Regeln() {
  usePageMeta("Regeln – FischFFA", "Regeln für FischFFA und Discord.");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black">
            <span className="text-gradient">Regeln</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Kurz und fair.</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-12 space-y-8">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="rounded-2xl border border-border glass p-6">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-accent" />
                <h2 className="font-display text-xl font-extrabold">{s.title}</h2>
              </div>
              <ol className="mt-5 space-y-2">
                {s.rules.map((r, i) => (
                  <li
                    key={r.title}
                    className="flex gap-4 rounded-lg border border-border/60 bg-secondary/30 p-3"
                  >
                    <span className="h-6 w-6 shrink-0 grid place-items-center rounded bg-secondary text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm">{r.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{r.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}

        <div className="rounded-2xl border border-border glass p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <h2 className="font-display text-lg font-extrabold">Verstöße</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Bei Regelbrüchen gibt es Verwarnung, Mute, Kick oder Ban. Das Team entscheidet.
          </p>
        </div>

        <div className="rounded-2xl border border-border glass p-6 text-center">
          <h3 className="font-display text-lg font-extrabold">Noch Fragen?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Schreib ein Ticket oder frag das Team.
          </p>
          <Link
            to="/support"
            className="btn-primary mt-4 inline-flex rounded-xl px-5 py-2.5 font-semibold text-sm"
          >
            Zum Support
          </Link>
        </div>
      </section>
    </>
  );
}
