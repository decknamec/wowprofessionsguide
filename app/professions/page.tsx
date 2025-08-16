// app/professions/page.tsx
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Berufe entdecken – WoW Guides",
  description:
    "Übersicht aller Berufe mit Icons, Kurzbeschreibungen und Badges für Kosten & Schwierigkeit.",
  openGraph: {
    title: "Berufe entdecken – WoW Guides",
    description:
      "Übersicht aller Berufe mit Icons, Kurzbeschreibungen und Badges für Kosten & Schwierigkeit.",
    type: "website",
  },
};

// --- Statische Beispiel-Daten (Platzhalter) ---
const PROFESSIONS = [
  {
    slug: "alchemie",
    title: "Alchemie",
    teaser: "Tränke, Phiolen & Alchemistensteine.",
    cost: "~25–35k",
    difficulty: "Mittel",
    iconUrl: "/icons/alchemy.jpg",
    updatedAt: "2025-08-10",
  },
  {
    slug: "schmiedekunst",
    title: "Schmiedekunst",
    teaser: "Waffen, Rüstungen & Aufwertungen.",
    cost: "~40–60k",
    difficulty: "Hoch",
    iconUrl: "/icons/blacksmithing.jpg",
    updatedAt: "2025-08-08",
  },
  {
    slug: "goldingenuerskunst",
    title: "Ingenieurskunst",
    teaser: "Gadgets, Spielzeuge & Nützliches.",
    cost: "~30–45k",
    difficulty: "Mittel",
    iconUrl: "/icons/engineering.jpg",
    updatedAt: "2025-08-12",
  },
  {
    slug: "lederverarbeitung",
    title: "Lederverarbeitung",
    teaser: "Leder-/Kettenrüstungen & Trommeln.",
    cost: "~28–42k",
    difficulty: "Mittel",
    iconUrl: "/icons/leatherworking.jpg",
    updatedAt: "2025-08-09",
  },
  {
    slug: "schneiderei",
    title: "Schneiderei",
    teaser: "Stoffrüstungen, Taschen & Verzauberungen.",
    cost: "~18–30k",
    difficulty: "Niedrig",
    iconUrl: "/icons/tailoring.jpg",
    updatedAt: "2025-08-11",
  },
  {
    slug: "juwelenschleifen",
    title: "Juwelenschleifen",
    teaser: "Edelsteine, Schmuck & Sockel.",
    cost: "~35–55k",
    difficulty: "Hoch",
    iconUrl: "/icons/jewelcrafting.jpg",
    updatedAt: "2025-08-07",
  },
  {
    slug: "verzauberungskunst",
    title: "Verzauberungskunst",
    teaser: "Waffen- & Rüstungsverzauberungen.",
    cost: "~22–38k",
    difficulty: "Mittel",
    iconUrl: "/icons/enchanting.jpg",
    updatedAt: "2025-08-12",
  },
  {
    slug: "inschriftenkunde",
    title: "Inschriftenkunde",
    teaser: "Glyphen, Verträge & Offhands.",
    cost: "~20–32k",
    difficulty: "Mittel",
    iconUrl: "/icons/inscription.jpg",
    updatedAt: "2025-08-05",
  },
  {
    slug: "kochen",
    title: "Kochen",
    teaser: "Bufffood & Festmähler.",
    cost: "~8–15k",
    difficulty: "Niedrig",
    iconUrl: "/icons/cooking.jpg",
    updatedAt: "2025-08-03",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100svh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Berufe entdecken
          </h1>
          <p className="text-sm text-white/60">Letztes Update: 16. Aug 2025</p>
        </div>
        <p className="mt-2 max-w-2xl text-white/80">
          Wähle einen Beruf aus, um zum jeweiligen Guide zu gelangen. Angaben zu
          geschätzten Kosten & Schwierigkeit sind nur Platzhalter.
        </p>
      </header>

      {/* Filterleiste (rein visuell) */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          {[
            "Alle",
            "Sammelberufe",
            "Herstellungsberufe",
            "Günstig",
            "Schnell",
            "Classic",
            "Retail",
          ].map((label) => (
            <span
              key={label}
              className="select-none rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80"
              aria-disabled
            >
              {label}
            </span>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONS.map((p) => (
            <article
              key={p.slug}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
            >
              <header className="flex items-center gap-3">
                {/* In Produktion: next/image verwenden */}
                <img
                  src={p.iconUrl}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{p.title}</h2>
                  <p className="text-sm text-white/70">{p.teaser}</p>
                </div>
              </header>

              <dl className="mt-4 grid grid-cols-3 gap-2 text-xs text-white/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                  <dt className="block text-[11px] text-white/60">Kosten</dt>
                  <dd className="mt-0.5 font-medium">{p.cost}</dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                  <dt className="block text-[11px] text-white/60">
                    Schwierigkeit
                  </dt>
                  <dd className="mt-0.5 font-medium">{p.difficulty}</dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                  <dt className="block text-[11px] text-white/60">Stand</dt>
                  <dd className="mt-0.5 font-medium">
                    {new Date(p.updatedAt).toLocaleDateString("de-DE")}
                  </dd>
                </div>
              </dl>

              <a
                href={`/professions/${p.slug}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white/90 transition group-hover:bg-white/20"
                aria-label={`${p.title} – Guide öffnen`}
              >
                Zum Guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M13.5 4.5a.75.75 0 000 1.5h4.19l-9.72 9.72a.75.75 0 101.06 1.06l9.72-9.72V15a.75.75 0 001.5 0V4.5h-6.75z" />
                </svg>
              </a>

              {/* sanfter Schimmer */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl transition group-hover:bg-fuchsia-500/20"
              />
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
