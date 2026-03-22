const monoStyle = { fontFamily: '"DM Mono", monospace' };
const serifStyle = { fontFamily: '"Instrument Serif", Georgia, serif' };
const sansLightStyle = { fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 300 };

const pillars = [
  {
    label: 'The Mission',
    text: 'Build products that ship, scale, and actually solve the problem they claim to. One founder, one methodology, one venture at a time.',
  },
  {
    label: 'The Studio',
    text: "Axion Ventures is a solo-founder venture studio powered by SPARC. The studio model exists because good ideas don't need large teams to prove themselves — they need the right tools and one person who can think, build, and ship.",
  },
  {
    label: 'The Ventures',
    text: 'Nexus is rebuilding how couples manage money. Zetto is rebuilding how people learn Japanese. The common thread: products that respect the people who use them.',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">

      {/* Page header */}
      <div className="mb-16 max-w-2xl">
        <p
          className="text-[10px] uppercase tracking-[0.12em] text-[#78716C] mb-4"
          style={monoStyle}
        >
          About
        </p>
        <h1
          className="text-[clamp(2rem,5vw,3rem)] leading-tight text-[#1C1917] mb-5"
          style={serifStyle}
        >
          About Axion
        </h1>
        <p
          className="text-base text-[#44403C] leading-relaxed"
          style={sansLightStyle}
        >
          Every venture starts with something broken. A product that patronises its users.
          A system that punishes the people it should serve. A market that confuses
          complexity for value. Axion builds the fix.
        </p>
      </div>

      {/* Three pillars — text columns, no icon cards */}
      <div
        className="grid md:grid-cols-3 gap-8 pb-16 mb-16"
        style={{ borderBottom: '1px solid rgba(28,25,23,0.08)' }}
      >
        {pillars.map(({ label, text }) => (
          <div key={label} className="flex flex-col gap-3">
            <p
              className="text-[10px] uppercase tracking-[0.12em] text-[#78716C]"
              style={monoStyle}
            >
              {label}
            </p>
            <p
              className="text-sm text-[#44403C] leading-relaxed"
              style={sansLightStyle}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* The Founder */}
      <div className="max-w-2xl">
        <p
          className="text-[10px] uppercase tracking-[0.12em] text-[#78716C] mb-5"
          style={monoStyle}
        >
          The Founder
        </p>
        <h2
          className="text-[1.75rem] leading-tight text-[#1C1917] mb-6"
          style={serifStyle}
        >
          I&apos;m Ethan.
        </h2>
        <div
          className="space-y-4 text-[#44403C] leading-relaxed"
          style={sansLightStyle}
        >
          <p>
            I&apos;ve spent 13 years building systems — from retail operations to AI pipelines
            to political campaign infrastructure.
          </p>
          <p>
            I created SPARC because I wanted to build products at the speed and quality of
            a full team, without needing one.
          </p>
          <p>
            Axion is the vehicle. The ventures are the point.
          </p>
        </div>
      </div>

    </div>
  );
}
