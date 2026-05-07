import Link from 'next/link';

const ventures = [
  {
    name: 'Zetto',
    tagline: 'The gym for your Japanese.',
    description:
      'A voice-first Japanese training app that measures spoken production in real time and progressively increases difficulty based on performance.',
    status: 'In development',
    statusActive: true,
    href: '/ventures/zetto',
    externalHref: 'https://zetto.app',
    externalLabel: 'zetto.app',
    aiRole: 'The product. The Gemini Live API session is Zetto.',
  },
  {
    name: 'Nexus',
    tagline: 'Your bank is built for One. Your life is built for Two.',
    description:
      'A financial wellness platform for couples that replaces guilt-driven budgeting with collaborative money management. Proof of concept complete, on hold pending funding.',
    status: 'On hold',
    statusActive: false,
    href: '/ventures/nexus',
    externalHref: null,
    externalLabel: null,
    aiRole: 'Data processing and pattern analysis.',
  },
];

const monoStyle = { fontFamily: '"DM Mono", monospace' };
const serifStyle = { fontFamily: '"Instrument Serif", Georgia, serif' };
const sansLightStyle = { fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 300 };

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="w-full py-24 md:py-36">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="max-w-3xl">

            {/* Section label */}
            <p
              className="animate-fadein animate-fadein-1 mb-5 text-[10px] uppercase tracking-[0.12em] text-[#78716C]"
              style={monoStyle}
            >
              Axion Ventures
            </p>

            {/* Hero headline */}
            <h1
              className="animate-fadein animate-fadein-2 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] text-[#1C1917] mb-6"
              style={serifStyle}
            >
              Every venture starts with<br />
              <em>something broken.</em>
            </h1>

            {/* Body */}
            <p
              className="animate-fadein animate-fadein-3 text-lg text-[#44403C] leading-relaxed max-w-[60ch] mb-10"
              style={sansLightStyle}
            >
              Most software is lazy, extractive, or just bad. I&apos;m building the stuff that isn&apos;t.
            </p>

            {/* CTAs */}
            <div className="animate-fadein animate-fadein-4 flex flex-wrap gap-4">
              <Link
                href="/ventures"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white text-sm transition-colors duration-200 hover:bg-[#1d4ed8]"
                style={{ ...monoStyle, borderRadius: '2px' }}
              >
                Explore ventures →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-[#44403C] transition-colors duration-200 hover:text-[#2563EB]"
                style={{ ...monoStyle, border: '1px solid rgba(28,25,23,0.15)', borderRadius: '2px' }}
              >
                Get in touch
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── VENTURES ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ borderTop: '1px solid rgba(28,25,23,0.08)' }}
      >
        <div className="container mx-auto max-w-screen-xl px-4">

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {ventures.map((venture) => (
              <article
                key={venture.name}
                className="venture-card bg-white p-8 flex flex-col gap-5"
              >
                {/* Status badge */}
                <p
                  className="text-[10px] uppercase tracking-[0.10em]"
                  style={{
                    ...monoStyle,
                    color: venture.statusActive ? '#2563EB' : '#78716C',
                    backgroundColor: venture.statusActive
                      ? 'rgba(37, 99, 235, 0.08)'
                      : 'rgba(28, 25, 23, 0.05)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 8px',
                    borderRadius: '2px',
                    width: 'fit-content',
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: venture.statusActive ? '#2563EB' : '#78716C',
                    }}
                  />
                  {venture.status}
                </p>

                {/* Venture name */}
                <div>
                  <h2
                    className="text-[1.75rem] leading-tight text-[#1C1917] mb-1"
                    style={serifStyle}
                  >
                    {venture.name}
                  </h2>
                  <p
                    className="text-[#44403C]"
                    style={{ ...serifStyle, fontStyle: 'italic', fontSize: '1rem' }}
                  >
                    {venture.tagline}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-sm text-[#44403C] leading-relaxed flex-grow"
                  style={sansLightStyle}
                >
                  {venture.description}
                </p>

                {/* AI role */}
                <p
                  className="text-[13px] text-[#78716C]"
                  style={monoStyle}
                >
                  AI role: {venture.aiRole}
                </p>

                {/* Link */}
                <div className="flex items-center gap-4 pt-1">
                  {venture.externalHref && (
                    <a
                      href={venture.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[#2563EB] transition-colors duration-200 hover:text-[#1d4ed8]"
                      style={monoStyle}
                    >
                      {venture.externalLabel} →
                    </a>
                  )}
                  <Link
                    href={venture.href}
                    className="text-[13px] text-[#78716C] transition-colors duration-200 hover:text-[#2563EB]"
                    style={monoStyle}
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDIO + FOUNDER ─────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 bg-[#EFECE8]"
        style={{ borderTop: '1px solid rgba(28,25,23,0.08)' }}
      >
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl">

            {/* SPARC */}
            <div>
              <h2
                className="text-[1.75rem] text-[#1C1917] mb-4"
                style={serifStyle}
              >
                SPARC
              </h2>
              <p
                className="text-sm text-[#44403C] leading-relaxed mb-5"
                style={sansLightStyle}
              >
                SPARC is a TDD-first AI development methodology using a multi-agent
                architecture. It turns a solo founder into a small team. PoliCRM shipped in
                48 hours — it also shipped with three auth bugs that didn&apos;t surface until a
                campaign staffer tried to log in from an iPad at 11pm the night before launch.
                I fixed them at 1am. That&apos;s what &ldquo;fast&rdquo; actually looks like. Zetto&apos;s entire
                spec suite was still designed and documented in days, not months.
              </p>
              <Link
                href="/ventures/sparc"
                className="text-[13px] text-[#2563EB] transition-colors duration-200 hover:text-[#1d4ed8]"
                style={monoStyle}
              >
                Learn about SPARC →
              </Link>
            </div>

            {/* The Founder */}
            <div>
              <p
                className="text-[10px] uppercase tracking-[0.12em] text-[#78716C] mb-4"
                style={monoStyle}
              >
                The Founder
              </p>
              <h2
                className="text-[1.75rem] text-[#1C1917] mb-4"
                style={serifStyle}
              >
                I&apos;m Ethan.
              </h2>
              <p
                className="text-sm text-[#44403C] leading-relaxed mb-5"
                style={sansLightStyle}
              >
                13 years building systems — retail operations, AI pipelines, political campaign
                infrastructure. I created SPARC because I kept waiting on people. The ventures
                are the point.
              </p>
              <Link
                href="/about"
                className="text-[13px] text-[#2563EB] transition-colors duration-200 hover:text-[#1d4ed8]"
                style={monoStyle}
              >
                About Axion →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
