import Link from 'next/link';

const ventures = [
  {
    name: 'Zetto',
    tagline: 'The gym for your Japanese.',
    description:
      'A voice-first Japanese training application that measures spoken production in real time and progressively adapts difficulty based on performance.',
    stack: 'Decoupled Gemini 2.5 Flash API with a custom low-latency TTS pipeline.',
    status: 'Active — engineering bench',
    statusActive: true,
    href: '/ventures/zetto',
    externalHref: 'https://zetto.app',
    externalLabel: 'zetto.app',
  },
  {
    name: 'Transport Inequality Engine',
    tagline: null,
    description:
      'An interactive spatial data tool mapping Melbourne transit infrastructure to compute localized equity and transit-accessibility scores.',
    stack: 'Rust, TypeScript, Leaflet, GTFS Open Data.',
    status: 'Active — open source',
    statusActive: true,
    href: '/ventures/tie',
    externalHref: 'https://github.com/axion-au',
    externalLabel: 'github.com/axion-au',
  },
  {
    name: 'Nexus',
    tagline: 'Your bank is built for One. Your life is built for Two.',
    description:
      'A multi-tenant financial wellness platform for couples that replaces guilt-driven budgeting with collaborative money management. Proof of concept complete, on hold pending deployment configuration.',
    stack: 'Next.js, TypeScript, FastAPI, PostgreSQL.',
    status: 'On hold',
    statusActive: false,
    href: '/ventures/nexus',
    externalHref: null,
    externalLabel: null,
  },
  {
    name: 'PoliCRM',
    tagline: null,
    description:
      'A targeted platform built in 48 hours to automate the cross-referencing and verification of 911 members against live state electoral rolls, completely removing manual spreadsheet errors.',
    stack: 'Python, FastAPI, Selenium, Rust, React.',
    status: 'Shipped',
    statusActive: false,
    href: '/ventures/sparc',
    externalHref: null,
    externalLabel: null,
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

            {/* Hero headline */}
            <h1
              className="animate-fadein animate-fadein-1 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] text-[#1C1917] mb-6"
              style={serifStyle}
            >
              Every venture starts with<br />
              <em>something broken.</em>
            </h1>

            {/* Body */}
            <p
              className="animate-fadein animate-fadein-2 text-lg text-[#44403C] leading-relaxed max-w-[60ch] mb-10"
              style={sansLightStyle}
            >
              Axion Ventures is an AI-native venture studio and open-source project incubator
              powered by SPARC, our proprietary AI development framework. We build high-velocity
              software assets targeting markets where existing solutions are lazy, extractive,
              or fundamentally broken.
            </p>

            {/* CTAs */}
            <div className="animate-fadein animate-fadein-3 flex flex-wrap gap-4">
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
                  {venture.tagline && (
                    <p
                      className="text-[#44403C]"
                      style={{ ...serifStyle, fontStyle: 'italic', fontSize: '1rem' }}
                    >
                      {venture.tagline}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm text-[#44403C] leading-relaxed flex-grow"
                  style={sansLightStyle}
                >
                  {venture.description}
                </p>

                {/* Stack */}
                <p
                  className="text-[13px] text-[#78716C]"
                  style={monoStyle}
                >
                  Stack: {venture.stack}
                </p>

                {/* Links */}
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

      {/* ── SPARC + STUDIO ───────────────────────────────────────────────── */}
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
                SPARC is a lightweight agent skill execution framework developed as a major
                architectural refactor from a 3,000+ line prompt orchestration library. By
                registering native functional capabilities directly into autonomous agent
                runtimes, SPARC standardizes workspace scaffolding and drastically accelerates
                development cycles. It turns a lean engineering bench into a high-execution
                software factory.
              </p>
              <Link
                href="/ventures/sparc"
                className="text-[13px] text-[#2563EB] transition-colors duration-200 hover:text-[#1d4ed8]"
                style={monoStyle}
              >
                Learn about SPARC →
              </Link>
            </div>

            {/* Studio */}
            <div>
              <h2
                className="text-[1.75rem] text-[#1C1917] mb-4"
                style={serifStyle}
              >
                Driven by Systems.<br />Backed by a Collective.
              </h2>
              <p
                className="text-sm text-[#44403C] leading-relaxed mb-5"
                style={sansLightStyle}
              >
                Axion was founded by Ethan Cornwill to build products at the speed and quality
                of an enterprise team by combining bleeding-edge LLM orchestration with rigid
                operational execution. Today, Axion operates as a collaborative venture studio.
                We pair our proprietary internal frameworks with a decentralized, rolling bench
                of software engineers and systems specialists who ship clean code, audit
                asynchronous logic defects, and maintain our active open-source portfolio.
                Axion is the vehicle. The platforms are the point.
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
