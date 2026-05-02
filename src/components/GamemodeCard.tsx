import { accentClasses, type Gamemode } from "@/lib/gamemodes";

export function GamemodeCard({ mode }: { mode: Gamemode }) {
  const Icon = mode.icon;
  return (
    <div className="card-hover group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card">
      <div
        className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-70 ${accentClasses[mode.accent]}`}
      />
      <div
        className={`relative inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${accentClasses[mode.accent]}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="relative mt-4 font-display text-base">{mode.name}</h3>
      <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">
        {mode.description}
      </p>
      {mode.highlights && (
        <ul className="relative mt-4 flex flex-wrap gap-2">
          {mode.highlights.map((h) => (
            <li
              key={h}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
            >
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
