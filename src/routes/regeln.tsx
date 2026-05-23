import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Swords, MessageCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/regeln")({
  head: () => ({
    meta: [
      { title: "Regeln – FischFFA" },
      { name: "description", content: "Das offizielle FischFFA Regelwerk für Minecraft und Discord." },
      { property: "og:title", content: "Regeln – FischFFA" },
      { property: "og:description", content: "PvP- und Discord-Regeln auf FischFFA." },
    ],
  }),
  component: RulesPage,
});

type Rule = { title: string; text: string };
type Section = { title: string; icon: LucideIcon; accent: string; rules: Rule[] };

const sections: Section[] = [
  {
    title: "Minecraft / PvP",
    icon: Swords,
    accent: "text-primary",
    rules: [
      { title: "Kein Cheating", text: "Keine Hacks, KillAura, AutoClicker, Reach – nichts in der Art." },
      { title: "Kein Teaming", text: "In JoinFFA spielt jeder für sich, außer der Modus erlaubt es." },
      { title: "Keine Bugs ausnutzen", text: "Fehler nicht abusen – meld sie einfach beim Team." },
      { title: "Respektvoll bleiben", text: "Keine Beleidigungen, kein Toxic-Verhalten im Chat." },
    ],
  },
  {
    title: "Discord",
    icon: MessageCircle,
    accent: "text-accent",
    rules: [
      { title: "Respekt & Umgang", text: "Sei nett. Kein Hate, keine Diskriminierung, kein Mobbing." },
      { title: "Keine Werbung", text: "Werbung für andere Server oder Channels nur mit Erlaubnis." },
      { title: "Kein Spam", text: "Kein Text-, Emoji-, Reaktions- oder Voice-Spam." },
      { title: "Kanäle richtig nutzen", text: "Schreib im passenden Channel. Off-Topic wird entfernt." },
      { title: "Voice fair halten", text: "Kein Soundboard-Spam, keine Musikbots ohne Absprache, kein Trolling." },
      { title: "Keine NSFW-Inhalte", text: "Kein NSFW, keine Gewalt, kein Rassismus, kein extrem-politischer Kram." },
      { title: "Keine Identitätsfälschung", text: "Gib dich nicht als Team oder andere Personen aus." },
      { title: "Auf das Team hören", text: "Anweisungen vom Team befolgen. Diskussionen bitte per DM." },
    ],
  },
];

function RulesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-primary/20 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <Shield className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">Regelwerk</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">Regeln</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Damit alle Spaß haben – kurz, klar, fair.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16 space-y-10">
        {sections.map((s, si) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={si * 80}>
              <div className="rounded-3xl border border-border glass p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-secondary/60 border border-border">
                    <Icon className={`h-5 w-5 ${s.accent}`} />
                  </div>
                  <h2 className="font-display text-2xl font-extrabold">{s.title}</h2>
                </div>

                <ol className="mt-6 space-y-3">
                  {s.rules.map((r, i) => (
                    <li
                      key={r.title}
                      className="group flex gap-4 rounded-xl border border-border/70 bg-secondary/30 p-4 hover:bg-secondary/60 transition-colors"
                    >
                      <span className="h-7 w-7 shrink-0 grid place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-display text-sm font-extrabold">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{r.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          );
        })}

        <Reveal>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-destructive/10 via-accent/5 to-primary/10 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-accent" />
              <h2 className="font-display text-xl font-extrabold">Verstöße & Konsequenzen</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Bei Regelbrüchen gibt es Verwarnungen, Mutes, Kicks oder Bans – ingame und auf Discord.
              Die Entscheidung trifft das Team.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border glass p-8 text-center">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold">Noch Fragen?</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Schreib ein Support-Ticket oder frag direkt ein Teammitglied.
            </p>
            <Link
              to="/support"
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
            >
              Zum Support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
