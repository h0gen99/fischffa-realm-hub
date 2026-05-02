import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – FischFFA" },
      {
        name: "description",
        content:
          "Erfahre mehr über das FischFFA Projekt: Community, Spaß und Skill auf einem Cytooxien Realm.",
      },
      { property: "og:title", content: "Über uns – FischFFA" },
      { property: "og:description", content: "Community, Spaß und Skill." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Users, title: "Community", text: "Freundliche Spieler, klare Regeln und ein offenes Ohr." },
  { icon: Heart, title: "Spaß", text: "Abwechslung durch viele Modi – nie wird es langweilig." },
  { icon: Trophy, title: "Skill", text: "Trainiere Bridging, Movement und PvP – werde besser." },
  { icon: Sparkles, title: "Events", text: "Regelmäßige Events – z. B. unser geplantes 100€ OnlyUp Event." },
];

function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-accent">Über uns</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl text-gradient">
          Unser Projekt
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          FischFFA ist ein Realm-Projekt auf Cytooxien, gestartet aus der Liebe
          zu Minecraft-PvP, Bridging und kreativen Minispielen. Unser Ziel ist
          es, einen Allrounder-Server zu bauen, auf dem für jeden etwas dabei
          ist – egal ob Profi oder Casual-Spieler.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {values.map((v) => (
          <div
            key={v.title}
            className="card-hover rounded-xl border border-border bg-card p-6"
          >
            <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center">
              <v.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-base">{v.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-center">
        <h3 className="font-display text-lg">Werde Teil von FischFFA</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Komm vorbei, lerne die Community kennen und finde deinen Lieblingsmodus.
        </p>
        <Link
          to="/beitreten"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Jetzt beitreten
        </Link>
      </div>
    </section>
  );
}
