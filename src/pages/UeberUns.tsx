import { Link } from "react-router-dom";
import { Crown, Code2, Hammer, Settings, MessageCircle, Shield, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { MemberAvatar } from "@/components/MemberAvatar";
import logo from "@/assets/logo.png";

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
  { name: "Fite_88", role: "Admin & Builder", text: "Baut und organisiert.", icon: Hammer, accent: "emerald" },
  { name: "Freeeedom", role: "Manager", text: "Organisiert alles.", icon: Settings, accent: "primary" },
  { name: "Babobastisch", role: "Discord Manager", text: "Macht den Discord.", icon: MessageCircle, accent: "accent" },
  { name: "voiqz", role: "Community Manager", text: "Da für die Community.", icon: Users, accent: "emerald" },
];

export default function UeberUns() {
  usePageMeta("Team – FischFFA", "Das Team hinter FischFFA.");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <img
            src={logo}
            alt="FischFFA"
            width={96}
            height={96}
            className="mx-auto h-20 w-20 object-contain logo-glow float-logo"
          />
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-black">
            <span className="text-gradient">Unser Team</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Ein kleines Team mit Bock auf Minecraft.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.name}
                className="rounded-2xl border border-border glass p-5"
              >
                <div className="flex items-center gap-4">
                  <MemberAvatar name={m.name} accent={m.accent} />
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold truncate">{m.name}</h3>
                    <p className="text-sm text-accent flex items-center gap-1.5">
                      <Icon className="h-3.5 w-3.5" /> {m.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{m.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-border glass p-8 text-center">
          <h3 className="font-display text-xl font-extrabold">Lust mitzuspielen?</h3>
          <p className="mt-2 text-sm text-muted-foreground">Komm einfach vorbei.</p>
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
