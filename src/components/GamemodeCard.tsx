import { accentClasses, type Gamemode } from "@/lib/gamemodes";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import logo from "@/assets/logo.png";

export function GamemodeCard({ mode }: { mode: Gamemode }) {
  const Icon = mode.icon;
  return (
    <TiltCard className="h-full">
      <div className="ring-aurora group relative h-full overflow-hidden rounded-2xl border border-border bg-card/80 shadow-card glass">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={mode.image}
            alt={mode.name}
            loading="lazy"
            width={768}
            height={512}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div
            className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-all duration-500 group-hover:opacity-90 ${accentClasses[mode.accent]}`}
          />
          <div
            className={`absolute top-3 left-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-soft backdrop-blur ${accentClasses[mode.accent]}`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-foreground/80 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>

        <div className="relative p-6">
          <img
            src={logo}
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-4 bottom-4 h-16 w-16 object-contain opacity-[0.06] select-none transition-opacity duration-500 group-hover:opacity-20"
          />
          <h3 className="text-xl font-bold tracking-tight">{mode.name}</h3>
          <p className="mt-1 text-sm text-accent/90 font-medium">{mode.short}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{mode.description}</p>
          {mode.highlights && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {mode.highlights.map((h) => (
                <li
                  key={h}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary/70 text-secondary-foreground border border-border/60"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </TiltCard>
  );
}
