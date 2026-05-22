import logo from "@/assets/logo.png";

type Accent = "primary" | "accent" | "emerald";

const ringMap: Record<Accent, string> = {
  primary: "from-primary via-accent to-primary",
  accent: "from-accent via-primary to-accent",
  emerald: "from-emerald via-accent to-emerald",
};

export function MemberAvatar({ name, accent }: { name: string; accent: Accent }) {
  const initials = name
    .replace(/[^a-zA-Z]/g, "")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative">
      <div
        className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-tr ${ringMap[accent]} opacity-70 blur-[2px]`}
      />
      <div className="relative h-16 w-16 rounded-2xl bg-card grid place-items-center overflow-hidden shadow-soft">
        <img
          src={logo}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain opacity-[0.10]"
        />
        <span className="relative font-display text-xl font-extrabold text-gradient">
          {initials}
        </span>
      </div>
    </div>
  );
}
