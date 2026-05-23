import { createFileRoute } from "@tanstack/react-router";
import {
  LifeBuoy,
  Ticket,
  Sparkles,
  Bug,
  HelpCircle,
  ShieldAlert,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import type { LucideIcon } from "lucide-react";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support – FischFFA" },
      { name: "description", content: "Hilfe, Bewerbungen und Bug-Reports für FischFFA." },
      { property: "og:title", content: "Support – FischFFA" },
      { property: "og:description", content: "Ticket erstellen, bewerben oder Bug melden." },
    ],
  }),
  component: SupportPage,
});

type TicketType = {
  title: string;
  text: string;
  icon: LucideIcon;
  accent: string;
  action: string;
};

const tickets: TicketType[] = [
  {
    title: "Allgemeine Frage",
    text: "Du brauchst Hilfe oder hast eine Frage zum Server.",
    icon: HelpCircle,
    accent: "text-accent",
    action: "Ticket erstellen",
  },
  {
    title: "Bug melden",
    text: "Etwas funktioniert nicht oder du hast einen Bug gefunden.",
    icon: Bug,
    accent: "text-primary",
    action: "Bug melden",
  },
  {
    title: "Spieler melden",
    text: "Cheater, Toxic-Verhalten oder Regelbruch gesehen? Sag Bescheid.",
    icon: ShieldAlert,
    accent: "text-emerald",
    action: "Report öffnen",
  },
  {
    title: "Bewerbung",
    text: "Du willst Teil vom Team werden? Schick uns deine Bewerbung.",
    icon: Sparkles,
    accent: "text-accent",
    action: "Jetzt bewerben",
  },
];

function SupportPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-emerald/15 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <LifeBuoy className="mx-auto h-10 w-10 text-accent" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">Support</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">Wir helfen dir</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Wähl ein Thema und erstell dein Ticket. Das Team meldet sich so schnell wie möglich.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {tickets.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 70}>
                <TiltCard className="h-full" intensity={4}>
                  <div className="ring-aurora group relative h-full overflow-hidden rounded-2xl border border-border glass p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 grid place-items-center rounded-xl bg-secondary/60 border border-border">
                        <Icon className={`h-6 w-6 ${t.accent}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-bold">{t.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {t.text}
                        </p>
                      </div>
                    </div>
                    <a
                      href={DISCORD_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
                    >
                      <Ticket className="h-4 w-4 text-accent" /> {t.action}
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-border glass p-6 sm:p-8">
            <h2 className="font-display text-xl font-extrabold">So läuft ein Ticket</h2>
            <ol className="mt-5 space-y-3 text-sm">
              {[
                "Geh auf unseren Discord-Server.",
                "Öffne den #support Kanal und wähl dein Thema.",
                "Beschreib dein Anliegen kurz und klar.",
                "Ein Teammitglied meldet sich bei dir.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="h-7 w-7 shrink-0 grid place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-extrabold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-accent/10 to-emerald/15 p-10 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold">
              Direkt auf Discord
            </h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
              Der schnellste Weg zu uns – tritt dem Discord bei und öffne dein Ticket.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
            >
              Discord öffnen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
