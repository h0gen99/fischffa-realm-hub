import { Link } from "react-router-dom";
import { MessageCircle, Gamepad2 } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { gamemodes } from "@/lib/gamemodes";
import { GamemodeCard } from "@/components/GamemodeCard";
import { ServerStatus } from "@/components/ServerStatus";
import logo from "@/assets/logo.png";

const DISCORD_URL = "https://discord.gg/9sRnGnaW";

export default function Home() {
  usePageMeta(
    "FischFFA – Minecraft Allrounder Realm",
    "FischFFA – ein Cytooxien Realm mit KnockbackFFA, JoinFFA, OnlyUp und mehr.",
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/10 blur-[120px] -z-10" />

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-24 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="FischFFA"
            width={200}
            height={200}
            className="h-36 w-36 sm:h-48 sm:w-48 object-contain logo-glow float-logo"
          />

          <div className="mt-6">
            <ServerStatus />
          </div>

          <h1 className="mt-5 font-display font-black text-5xl sm:text-7xl tracking-tight">
            <span className="text-gradient">FischFFA</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-foreground/90 max-w-lg">
            Unser Minecraft Realm auf Cytooxien.
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            Mehrere Modi, eine Community. Komm vorbei und spiel mit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link
              to="/beitreten"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
            >
              <Gamepad2 className="h-4 w-4" /> So joinst du
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3 font-semibold hover:bg-secondary/70 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold">
            Unsere <span className="text-gradient">Gamemodes</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Such dir aus, was du spielen willst.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gamemodes.slice(0, 6).map((m) => (
            <GamemodeCard key={m.slug} mode={m} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/gamemodes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Alle Modi ansehen →
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-border glass p-8 sm:p-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
            Bock zu spielen?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Server-IP: <span className="font-mono text-foreground">cytooxien.de</span>
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/beitreten"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold"
            >
              Anleitung
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border glass px-6 py-3 font-semibold hover:bg-secondary/70 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
