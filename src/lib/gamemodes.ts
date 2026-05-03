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

import knockbackImg from "@/assets/modes/knockbackffa.jpg";
import joinffaImg from "@/assets/modes/joinffa.jpg";
import speedbridgeImg from "@/assets/modes/speedbridge.jpg";
import speedrunImg from "@/assets/modes/speedrun.jpg";
import tnttagImg from "@/assets/modes/tnttag.jpg";
import onlyupImg from "@/assets/modes/onlyup.jpg";
import lobbyImg from "@/assets/modes/lobby.jpg";

export type Gamemode = {
  slug: string;
  name: string;
  short: string;
  description: string;
  icon: LucideIcon;
  accent: "primary" | "accent" | "emerald";
  image: string;
  highlights?: string[];
};

export const gamemodes: Gamemode[] = [
  {
    slug: "knockbackffa",
    name: "KnockbackFFA",
    short: "Schubs sie alle runter.",
    description:
      "Verschiedene Maps im Himmel, ein Kit mit Special Items und Events mitten im Kampf. Ziel: alle anderen runterschubsen.",
    icon: Swords,
    accent: "primary",
    image: knockbackImg,
    highlights: ["Maps im Himmel", "Special Kit", "Live Events"],
  },
  {
    slug: "joinffa",
    name: "JoinFFA",
    short: "Kit wählen, kämpfen, gewinnen.",
    description: "Klassisches FFA mit verschiedenen Kits. Pures PvP, nur dein Skill zählt.",
    icon: Crosshair,
    accent: "accent",
    image: joinffaImg,
    highlights: ["Mehrere Kits", "PvP pur", "Skill-basiert"],
  },
  {
    slug: "speedbridge",
    name: "Speedbridge",
    short: "Werde der schnellste Bridger.",
    description: "Trainiere dein Bridging und jag deine Bestzeit.",
    icon: Zap,
    accent: "emerald",
    image: speedbridgeImg,
    highlights: ["Bridge-Training", "Bestzeiten", "Präzision"],
  },
  {
    slug: "speedrun",
    name: "Speedrun",
    short: "Fokus auf Movement & Speed.",
    description: "Optimiere deinen Lauf, jeden Sprung, jede Bewegung – und werde wirklich schnell.",
    icon: Wind,
    accent: "accent",
    image: speedrunImg,
    highlights: ["Movement", "Parkour", "Bestzeiten"],
  },
  {
    slug: "tnt-tag",
    name: "TNT Tag",
    short: "Heiße Kartoffel mit TNT.",
    description: "Gib das tickende TNT weiter, bevor es bei dir explodiert.",
    icon: Bomb,
    accent: "primary",
    image: tnttagImg,
    highlights: ["Party-Modus", "Schnelle Runden", "Spaß garantiert"],
  },
  {
    slug: "onlyup",
    name: "OnlyUp",
    short: "Klettere bis ganz nach oben.",
    description: "Das größte OnlyUp auf den Realms. Geplantes 100€-Event und Streamer regelmäßig dabei.",
    icon: ArrowUp,
    accent: "emerald",
    image: onlyupImg,
    highlights: ["100€ Event geplant", "Streamer dabei", "Größtes OnlyUp"],
  },
  {
    slug: "lobby-spiele",
    name: "Lobby Spiele",
    short: "Kleine Spiele für zwischendurch.",
    description: "Combo Trainer, TicTacToe gegen die KI und mehr Fun-Modes direkt aus der Lobby.",
    icon: Gamepad2,
    accent: "accent",
    image: lobbyImg,
    highlights: ["Combo Trainer", "TicTacToe vs KI", "Fun Games"],
  },
];

export const accentClasses: Record<Gamemode["accent"], string> = {
  primary: "from-primary/40 to-primary/5 text-primary",
  accent: "from-accent/40 to-accent/5 text-accent",
  emerald: "from-emerald/40 to-emerald/5 text-emerald",
};
