import { useEffect, useRef } from "react";

/** Lightweight ambient orbs. No mousemove repaint cost. */
export function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile / coarse pointer to save GPU.
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (max-width: 768px)");
    if (mq.matches && ref.current) ref.current.style.display = "none";
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="orb orb-1" />
      <div className="orb orb-2" />
    </div>
  );
}
