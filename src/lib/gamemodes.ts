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
    short: "Schubs alle von der Map.",
    description:
      "Schnapp dir ein Knockback-Kit, spring in die Arena und schubs deine Gegner runter. Schnell, chaotisch und richtig suchtig.",
    icon: Swords,
    accent: "primary",
    highlights: ["Knockback-Kits", "Offene Arena", "Hohes Tempo"],
  },
  {
    slug: "joinffa",
    name: "JoinFFA",
    short: "Klassisches FFA mit Style.",
    description:
      "Wähl dein Kit, geh rein und kämpf gegen alle. Pures PvP, bei dem nur dein Skill zählt – kein Schnickschnack.",
    icon: Crosshair,
    accent: "accent",
    highlights: ["Mehrere Kits", "PvP pur", "Skill-basiert"],
  },
  {
    slug: "speedbridge",
    name: "Speedbridge",
    short: "Werde der schnellste Bridger.",
    description:
      "Trainiere dein Bridging und jag deine Bestzeit. Perfekt zum Aufwärmen oder um dich richtig zu verbessern.",
    icon: Zap,
    accent: "emerald",
    highlights: ["Bridge-Training", "Bestzeiten", "Präzision"],
  },
  {
    slug: "speedrun",
    name: "Speedrun",
    short: "Movement & volle Geschwindigkeit.",
    description:
      "Die Erweiterung zu Speedbridge: hier zählt jede Bewegung. Optimiere deinen Lauf und werde wirklich schnell.",
    icon: Wind,
    accent: "accent",
    highlights: ["Movement", "Parkour", "Erweiterung zu Speedbridge"],
  },
  {
    slug: "tnt-tag",
    name: "TNT Tag",
    short: "Heiße Kartoffel, nur mit TNT.",
    description:
      "Einer hat das TNT – und das tickt. Gib es schnell weiter, sonst macht es Bumm. Spaß für die ganze Runde.",
    icon: Bomb,
    accent: "primary",
    highlights: ["Party-Modus", "Schnelle Runden", "Spaß garantiert"],
  },
  {
    slug: "onlyup",
    name: "OnlyUp",
    short: "Klettere bis ganz nach oben.",
    description:
      "Das größte OnlyUp auf den Cytooxien Realms. Streamer sind regelmäßig dabei und ein 100€-Event ist geplant.",
    icon: ArrowUp,
    accent: "emerald",
    highlights: ["100€ Event geplant", "Streamer dabei", "Größtes OnlyUp"],
  },
  {
    slug: "lobby-spiele",
    name: "Lobby Spiele",
    short: "Kleine Spiele zum Warmwerden.",
    description:
      "Combo Trainer, TicTacToe gegen die KI und mehr – direkt aus der Lobby für zwischendurch oder zum Aufwärmen.",
    icon: Gamepad2,
    accent: "accent",
    highlights: ["Combo Trainer", "TicTacToe vs KI", "Mehr Fun-Games"],
  },
];

export const accentClasses: Record<Gamemode["accent"], string> = {
  primary: "from-primary/40 to-primary/5 text-primary",
  accent: "from-accent/40 to-accent/5 text-accent",
  emerald: "from-emerald/40 to-emerald/5 text-emerald",
};
