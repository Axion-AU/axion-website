import Link from 'next/link';

const ventures = [
  {
    name: 'Zetto',
    slug: 'zetto',
    category: 'Active',
    tagline: 'The gym for your Japanese.',
    description:
      'A voice-first Japanese training app that measures spoken production in real time and progressively increases difficulty based on performance. Android + PWA first, iOS later.',
    status: 'In development',
    statusActive: true,
  },
  {
    name: 'Nexus',
    slug: 'nexus',
    category: 'On Hold',
    tagline: 'Your bank is built for One. Your life is built for Two.',
    description:
      'A financial wellness platform for couples that replaces guilt-driven budgeting with collaborative money management. Proof of concept complete. On hold pending funding.',
    status: 'On hold',
    statusActive: false,
  },
  {
    name: 'SPARC',
    slug: 'sparc',
    category: 'Internal',
    tagline: null,
    description:
      'A TDD-first AI development methodology using a multi-agent architecture. It turns a solo founder into a small team. PoliCRM was built in 48 hours with it.',
    status: 'Internal tool',
    statusActive: false,
  },
  {
    name: 'MunchRun',
    slug: 'munchrun',
    category: 'Previous',
    tagline: null,
    description:
      "A food delivery logistics platform. The lessons learned from MunchRun's operational challenges informed the current focus on scalable, software-centric ventures.",
    status: 'Archived',
    statusActive: false,
  },
  {
    name: 'MagnetLab',
    slug: 'magnetlab',
    category: 'Previous',
    tagline: null,
    description:
      "A previous AI automation venture co-founded by Axion's founder. MagnetLab served as the incubator for the SPARC methodology and provided a critical lesson: a cohesive vision must exist before bringing on co-founders.",
    status: 'Previous venture',
    statusActive: false,
  },
  {
    name: 'Merry Berry Açaí',
    slug: 'merry-berry-acai',
    category: 'Previous',
    tagline: null,
    description:
      'A student project that became a valuable case study in motivation, accountability, and the challenges of remote collaboration in a distributed, volunteer-based team.',
    status: 'Case study',
    statusActive: false,
  },
];

const categories = [
  { key: 'Active', label: 'Active Ventures' },
  { key: 'On Hold', label: 'On Hold' },
  { key: 'Internal', label: 'Internal Tools' },
  { key: 'Previous', label: 'Previous Ventures' },
];

const monoStyle = { fontFamily: '"DM Mono", monospace' };
const serifStyle = { fontFamily: '"Instrument Serif", Georgia, serif' };
const sansLightStyle = { fontFamily: '"DM Sans", system-ui, sans-serif', fontWeight: 300 };

export default function VenturesPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">

      {/* Page header */}
      <div className="mb-16 max-w-2xl">
        <p
          className="text-[10px] uppercase tracking-[0.12em] text-[#78716C] mb-4"
          style={monoStyle}
        >
          Portfolio
        </p>
        <h1
          className="text-[clamp(2rem,5vw,3rem)] leading-tight text-[#1C1917] mb-4"
          style={serifStyle}
        >
          The Ventures
        </h1>
        <p
          className="text-base text-[#44403C] leading-relaxed"
          style={sansLightStyle}
        >
          Active projects, internal tools, and past explorations. No &ldquo;coming soon&rdquo; teases
          — when the next one ships, it gets added here.
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-20">
        {categories.map(({ key, label }) => {
          const categoryVentures = ventures.filter((v) => v.category === key);
          if (categoryVentures.length === 0) return null;

          return (
            <div key={key}>
              {/* Category section label */}
              <div
                className="flex items-center gap-6 mb-8"
                style={{ borderBottom: '1px solid rgba(28,25,23,0.08)', paddingBottom: '12px' }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.12em] text-[#78716C]"
                  style={monoStyle}
                >
                  {label}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryVentures.map((venture) => (
                  <article
                    key={venture.name}
                    className="venture-card bg-white p-8 flex flex-col gap-5"
                  >
                    {/* Status */}
                    <p
                      className="text-[10px] uppercase tracking-[0.10em] inline-flex items-center gap-1.5"
                      style={{
                        ...monoStyle,
                        color: venture.statusActive ? '#2563EB' : '#78716C',
                        backgroundColor: venture.statusActive
                          ? 'rgba(37,99,235,0.08)'
                          : 'rgba(28,25,23,0.05)',
                        width: 'fit-content',
                        padding: '3px 8px',
                        borderRadius: '2px',
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

                    {/* Name + tagline */}
                    <div>
                      <h2
                        className="text-[1.5rem] leading-tight text-[#1C1917] mb-1"
                        style={serifStyle}
                      >
                        {venture.name}
                      </h2>
                      {venture.tagline && (
                        <p
                          className="text-[#44403C]"
                          style={{ ...serifStyle, fontStyle: 'italic', fontSize: '0.95rem' }}
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

                    {/* Link */}
                    <Link
                      href={`/ventures/${venture.slug}`}
                      className="text-[13px] text-[#78716C] transition-colors duration-200 hover:text-[#2563EB] self-start"
                      style={monoStyle}
                    >
                      Learn more →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
