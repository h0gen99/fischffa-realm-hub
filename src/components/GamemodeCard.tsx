import { accentClasses, type Gamemode } from "@/lib/gamemodes";
import { ArrowUpRight } from "lucide-react";

export function GamemodeCard({ mode }: { mode: Gamemode }) {
  const Icon = mode.icon;
  return (
    <div className="card-hover ring-aurora group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-card glass">
      <div
        className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br opacity-40 blur-3xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-110 ${accentClasses[mode.accent]}`}
      />
      <div className="relative flex items-start justify-between">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-soft ${accentClasses[mode.accent]}`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>
      <h3 className="relative mt-5 text-xl font-bold tracking-tight">{mode.name}</h3>
      <p className="relative mt-1 text-sm text-accent/90 font-medium">{mode.short}</p>
      <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
        {mode.description}
      </p>
      {mode.highlights && (
        <ul className="relative mt-5 flex flex-wrap gap-2">
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
  );
}
