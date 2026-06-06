import { Ticket, Bug, HelpCircle, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

type TicketType = { title: string; text: string; icon: LucideIcon; action: string };

const tickets: TicketType[] = [
  { title: "Frage", text: "Du hast eine Frage zum Server.", icon: HelpCircle, action: "Ticket öffnen" },
  { title: "Bug melden", text: "Was funktioniert nicht?", icon: Bug, action: "Bug melden" },
  { title: "Spieler melden", text: "Cheater oder Toxic gesehen?", icon: ShieldAlert, action: "Report öffnen" },
  { title: "Bewerbung", text: "Du willst ins Team?", icon: Sparkles, action: "Bewerben" },
];

export default function Support() {
  usePageMeta("Support – FischFFA", "Hilfe und Tickets für FischFFA.");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black">
            <span className="text-gradient">Support</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Wähl ein Thema und schreib uns auf Discord.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="grid sm:grid-cols-2 gap-4">
          {tickets.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="rounded-2xl border border-border glass p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-secondary/60 border border-border">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </div>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  <Ticket className="h-4 w-4 text-accent" /> {t.action}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-2xl border border-border glass p-6">
          <h2 className="font-display text-lg font-extrabold">So läuft ein Ticket</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {[
              "Geh auf unseren Discord.",
              "Öffne den Support-Kanal.",
              "Beschreib dein Anliegen kurz.",
              "Das Team meldet sich bei dir.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="h-6 w-6 shrink-0 grid place-items-center rounded bg-secondary text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-semibold text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Discord öffnen
          </a>
        </div>
      </section>
    </>
  );
}
