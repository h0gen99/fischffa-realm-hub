import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Code2, Hammer, Settings, MessageCircle, ArrowRight, Shield, Users } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { MemberAvatar } from "@/components/MemberAvatar";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.png";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Team – FischFFA" },
      { name: "description", content: "Das Team hinter FischFFA." },
      { property: "og:title", content: "Team – FischFFA" },
      { property: "og:description", content: "Wer hinter FischFFA steckt." },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  text: string;
  icon: LucideIcon;
  accent: "primary" | "accent" | "emerald";
};

const team: Member[] = [
  { name: "Fischiix", role: "Owner", text: "Kümmert sich um alles.", icon: Crown, accent: "primary" },
  { name: "Gritzelbritz", role: "Admin & Developer", text: "Denkt mit und codet.", icon: Code2, accent: "accent" },
  { name: "ElementIron", role: "Admin", text: "Hält den Laden am Laufen.", icon: Shield, accent: "primary" },
  { name: "Fite_88", role: "Admin & Builder", text: "Baut, denkt und organisiert.", icon: Hammer, accent: "emerald" },
  { name: "Freeeedom", role: "Manager", text: "Organisiert alles.", icon: Settings, accent: "primary" },
  { name: "Babobastisch", role: "Discord Manager", text: "Kümmert sich komplett um Discord.", icon: MessageCircle, accent: "accent" },
  { name: "voiqz", role: "Community Manager", text: "Da für die Community.", icon: Users, accent: "emerald" },
];

const accentBg: Record<Member["accent"], string> = {
  primary: "from-primary/40 to-primary/5 text-primary",
  accent: "from-accent/40 to-accent/5 text-accent",
  emerald: "from-emerald/40 to-emerald/5 text-emerald",
};

function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-emerald/15 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <img src={logo} alt="FischFFA" width={120} height={120} className="mx-auto h-24 w-24 object-contain logo-glow float-logo" />
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-accent">Das Team</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">Wer hinter FischFFA steckt</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Ein kleines Team, das Bock auf Minecraft hat.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.name} delay={i * 70}>
                <TiltCard className="h-full">
                  <div className="ring-aurora group relative h-full overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-card glass">
                    <div
                      className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br opacity-40 blur-3xl transition-all duration-500 group-hover:opacity-80 ${accentBg[m.accent]}`}
                    />
                    <div className="relative flex items-center gap-4">
                      <MemberAvatar name={m.name} accent={m.accent} />
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight truncate">{m.name}</h3>
                        <p className="text-sm text-accent/90 font-medium flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5" /> {m.role}
                        </p>
                      </div>
                    </div>
                    <p className="relative mt-5 text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-border glass p-10 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
            Werde Teil von <span className="text-gradient">FischFFA</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Komm vorbei, lern die Leute kennen und finde deinen Lieblingsmodus.
          </p>
          <Link to="/beitreten" className="btn-primary mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold">
            Jetzt beitreten <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
