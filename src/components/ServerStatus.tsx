import { useEffect, useRef, useState } from "react";
import { Users, Wifi, WifiOff } from "lucide-react";

type Status = {
  online: boolean;
  players?: { online: number; max: number };
};

/**
 * Live Cytooxien-Status via mcstatus.io (kostenlos, ohne API-Key).
 * Gibt für die GANZE Cytooxien-Plattform die aktuelle Spielerzahl zurück.
 * Realm-spezifische Zahlen sind nur via offizielle Cytooxien-API möglich
 * (falls vorhanden) oder via eigenem Plugin auf einem eigenen Server.
 */
export function ServerStatus({ host = "cytooxien.de" }: { host?: string }) {
  const [data, setData] = useState<Status | null>(null);
  const [display, setDisplay] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const r = await fetch(`https://api.mcstatus.io/v2/status/java/${host}`);
        const j = (await r.json()) as Status;
        if (!cancelled) setData(j);
      } catch {
        if (!cancelled) setData({ online: false });
      }
    };
    load();
    const t = setInterval(load, 45_000);
    return () => {
      cancelled = true;
      clearInterval(t);
    };
  }, [host]);

  // Smooth count-up
  useEffect(() => {
    const target = data?.players?.online ?? 0;
    const start = display;
    const startTime = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - startTime) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(start + (target - start) * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.players?.online]);

  const online = data?.online ?? false;

  return (
    <div className="inline-flex items-center gap-3 rounded-full glass border border-border px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        {online && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-70" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            online ? "bg-emerald" : "bg-destructive"
          }`}
        />
      </span>
      {online ? (
        <>
          <Wifi className="h-3.5 w-3.5 text-emerald" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Cytooxien</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Users className="h-3.5 w-3.5 text-accent" />
            <span className="font-display text-base tabular-nums">{display.toLocaleString("de-DE")}</span>
            <span className="text-muted-foreground font-normal">online</span>
          </span>
        </>
      ) : (
        <>
          <WifiOff className="h-3.5 w-3.5 text-destructive" />
          <span className="text-xs text-muted-foreground">Status wird geladen…</span>
        </>
      )}
    </div>
  );
}
