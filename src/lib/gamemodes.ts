import {
  Swords,
  Crosshair,
  Zap,
  Wind,
  Bomb,
  ArrowUp,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

export type Gamemode = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: "primary" | "accent" | "emerald";
  highlights?: string[];
};

export const gamemodes: Gamemode[] = [
  {
    slug: "knockbackffa",
    name: "KnockbackFFA",
    short: "Schubse deine Gegner von der Map.",
    description:
      "Spieler kämpfen mit Knockback-Kits und versuchen, andere von der Map zu schubsen. Schnell, chaotisch, suchtig.",
    icon: Swords,
    accent: "primary",
    highlights: ["Knockback-Kits", "Offene Arena", "Hohes Tempo"],
  },
  {
    slug: "joinffa",
    name: "JoinFFA",
    short: "Klassisches FFA mit Kits.",
    description:
      "Klassisches FFA mit verschiedenen Kits – kämpfe gegen alle anderen Spieler in einer offenen Arena.",
    icon: Crosshair,
    accent: "accent",
    highlights: ["Mehrere Kits", "PvP pur", "Skill-basiert"],
  },
  {
    slug: "speedbridge",
    name: "Speedbridge",
    short: "Trainiere dein Bridging.",
    description:
      "Trainiere deine Bridging-Skills und werde schneller und präziser. Perfekt zum Aufwärmen oder Üben.",
    icon: Zap,
    accent: "emerald",
    highlights: ["Bridge-Training", "Bestzeiten", "Präzision"],
  },
  {
    slug: "speedrun",
    name: "Speedrun",
    short: "Movement & Geschwindigkeit.",
    description:
      "Fokus auf Movement und Geschwindigkeit als Erweiterung zu Speedbridge. Optimiere jede Bewegung.",
    icon: Wind,
    accent: "accent",
    highlights: ["Movement", "Parkour", "Erweiterung zu Speedbridge"],
  },
  {
    slug: "tnt-tag",
    name: "TNT Tag",
    short: "Heiße Kartoffel mit Sprengstoff.",
    description:
      "Ein Spieler hat TNT – wie heiße Kartoffel. Gib es weiter, bevor es explodiert!",
    icon: Bomb,
    accent: "primary",
    highlights: ["Party-Modus", "Schnelle Runden", "Spaß garantiert"],
  },
  {
    slug: "onlyup",
    name: "OnlyUp",
    short: "Das größte Cytooxien OnlyUp.",
    description:
      "Das größte Cytooxien-Realm OnlyUp! Mit geplantem 100€-Event und vielen Streamern.",
    icon: ArrowUp,
    accent: "emerald",
    highlights: ["100€ Event geplant", "Streamer dabei", "Klettern bis ganz nach oben"],
  },
  {
    slug: "lobby-spiele",
    name: "Lobby Spiele",
    short: "Kleine Minispiele zum Warmwerden.",
    description:
      "Kleine Minispiele wie Combo Trainer, TicTacToe vs AI und weitere Fun-Games direkt aus der Lobby.",
    icon: Gamepad2,
    accent: "accent",
    highlights: ["Combo Trainer", "TicTacToe vs AI", "Weitere Fun-Games"],
  },
];

export const accentClasses: Record<Gamemode["accent"], string> = {
  primary: "from-primary/30 to-primary/5 text-primary",
  accent: "from-accent/30 to-accent/5 text-accent",
  emerald: "from-emerald/30 to-emerald/5 text-emerald",
};
