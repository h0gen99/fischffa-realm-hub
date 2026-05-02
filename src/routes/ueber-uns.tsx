import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, Trophy, Sparkles, ArrowRight, Target, Smile, Shield } from "lucide-react";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns – FischFFA" },
      {
        name: "description",
        content:
          "Wer wir sind und wofür FischFFA steht: Community, Spaß und Skill auf einem Cytooxien Realm.",
      },
      { property: "og:title", content: "Über uns – FischFFA" },
      { property: "og:description", content: "Community, Spaß und Skill." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Users, title: "Community first", text: "Freundliche Leute, klare Regeln und immer ein offenes Ohr für Feedback." },
  { icon: Heart, title: "Einfach Spaß", text: "Sieben Modi auf einem Realm – langweilig wird hier garantiert nichts." },
  { icon: Trophy, title: "Echtes Können", text: "Trainier dein Bridging, dein Movement und dein PvP – ganz ohne Pay-to-Win." },
  { icon: Sparkles, title: "Events", text: "Wir machen regelmäßig Aktionen – z. B. unser geplantes 100€ OnlyUp-Event." },
  { icon: Shield, title: "Fairplay", text: "Cheater haben hier nichts zu suchen. Wir gehen Meldungen direkt nach." },
  { icon: Smile, title: "Auf Deutsch", text: "Alles komplett auf Deutsch – vom Server bis zur Community." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-emerald/15 blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Über uns</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-black">
            <span className="text-gradient">Unsere Story</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            FischFFA ist aus einer ganz einfachen Idee entstanden: ein Realm, auf dem
            man <span className="text-foreground font-semibold">alles spielen kann, was Spaß macht</span> – ohne ewig
            zwischen verschiedenen Servern zu wechseln. PvP-Profi, Casual-Spieler oder
            irgendwo dazwischen? Hier bist du richtig.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card-hover glass rounded-2xl border border-border p-8">
            <Target className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-extrabold">Unsere Mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Wir wollen einen Server bauen, auf dem man sich einfach wohlfühlt.
              Klare Regeln, faires Spiel, viele Modi – und eine Community, in der
              man sich nach ein paar Runden schon kennt.
            </p>
          </div>
          <div className="card-hover glass rounded-2xl border border-border p-8">
            <Heart className="h-8 w-8 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-extrabold">Unser Versprechen</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Kein Pay-to-Win, keine Werbung an jeder Ecke, kein Drama. Wir machen
              das, weil wir Bock auf Minecraft haben – und das soll man merken.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Wofür wir stehen</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">Unsere Werte</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-hover glass rounded-2xl border border-border p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/30 via-accent/30 to-emerald/30 grid place-items-center">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-accent/10 to-emerald/15 p-10 sm:p-14 text-center">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold">
              Werde Teil von <span className="text-gradient">FischFFA</span>
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Komm vorbei, lern die Leute kennen und finde deinen Lieblingsmodus. Wir freuen uns auf dich.
            </p>
            <Link
              to="/beitreten"
              className="btn-primary mt-7 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold"
            >
              Jetzt beitreten <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
