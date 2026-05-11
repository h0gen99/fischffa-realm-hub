import logo from "@/assets/logo.png";

const items = ["KnockbackFFA", "JoinFFA", "Speedbridge", "OnlyUp", "TNT Tag", "Speedrun", "Lobby Spiele"];

export function LogoMarquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-12 px-6">
      {items.map((label) => (
        <div key={label} className="flex items-center gap-3 opacity-80">
          <img
            src={logo}
            alt=""
            aria-hidden
            width={32}
            height={32}
            className="h-8 w-8 object-contain logo-glow"
          />
          <span className="font-display text-lg font-bold tracking-wide text-foreground/85">
            {label}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="relative overflow-hidden border-y border-border/60 bg-gradient-to-r from-transparent via-secondary/30 to-transparent py-5"
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
