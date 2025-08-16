// app/(marketing)/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Willkommen ✨",
  description:
    "Eine einladend gestaltete Startseite – ganz ohne Funktionalität.",
  alternates: { canonical: "https://example.com/" },
  openGraph: {
    title: "Willkommen ✨",
    description:
      "Eine einladend gestaltete Startseite – ganz ohne Funktionalität.",
    type: "website",
  },
};

export default function Landingpage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Deko: weiche Farbflächen */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Inhalt */}
      <section className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-28 text-center md:py-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
          Willkommen
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Schön, dass du da bist.
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-white/80 md:text-xl">
          Hier entsteht eine liebevoll gestaltete Seite für
          <span className="mx-1 font-semibold">WoW‑Berufe‑Level‑Guides</span>.
          Lehne dich zurück, schnapp dir einen Heiltrank – bald geht’s los.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/professions"
            className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/20"
            aria-disabled
          >
            Los geht’s
          </a>
          <a
            href="/professions"
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            aria-disabled
          >
            Mehr erfahren
          </a>
        </div>

        {/* kleine Zierlinie */}
        <div className="mt-14 h-px w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <p className="mt-6 text-xs text-white/60">
          Keine Interaktionen – nur warmes Willkommen.
        </p>
      </section>
    </main>
  );
}
