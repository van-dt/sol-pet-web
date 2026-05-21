import Image from 'next/image';

const EGGS = [
  {
    src: '/assets/eggs/egg_common.png',
    name: 'Common Egg',
    rarity: 'Common',
    color: '#aaa',
    bg: 'linear-gradient(160deg, #33333355, #44444444)',
    border: '#888',
    desc: 'Widely found in the wild. A reliable starting point for any trainer.',
    rate: '70%',
  },
  {
    src: '/assets/eggs/egg_rare.png',
    name: 'Rare Egg',
    rarity: 'Rare',
    color: '#5A9FE8',
    bg: 'linear-gradient(160deg, #1a3a5c55, #2a5a8c44)',
    border: '#5A9FE8',
    desc: 'Discovered in dungeon chests. Stronger pets with enhanced battle potential.',
    rate: '25%',
  },
  {
    src: '/assets/eggs/egg_epic.png',
    name: 'Epic Egg',
    rarity: 'Epic',
    color: '#c084fc',
    bg: 'linear-gradient(160deg, #2d1a4455, #4a2a6044)',
    border: '#c084fc',
    desc: 'Forged by ancient magic. Powerful creatures of extraordinary abilities.',
    rate: '4.5%',
  },
  {
    src: '/assets/eggs/egg_legendary.png',
    name: 'Legendary Egg',
    rarity: 'Legendary',
    color: '#E8B85C',
    bg: 'linear-gradient(160deg, #4a300055, #7a500044)',
    border: '#E8B85C',
    desc: 'Born from the stars themselves. Only the most mythic companions emerge.',
    rate: '0.5%',
  },
];

export default function EggsSection() {
  return (
    <section
      id="eggs"
      className="min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: '6rem 1.5rem' }}
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/backgrounds/bg_hatchery.png"
          alt=""
          fill
          className="object-cover opacity-18"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14,28,14,0.92)' }}
        />
      </div>

      <div
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Heading */}
        <div
          style={{ textAlign: 'center', marginBottom: '4rem', width: '100%' }}
        >
          <h2
            style={{
              fontFamily: 'Cinzel, serif',
              color: 'var(--cream)',
              fontSize: 'clamp(2rem,5vw,3rem)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            Hatch &amp; Discover
          </h2>
          <div className="flex justify-center">
            <div
              className="section-divider"
              style={{ marginBottom: '1.25rem' }}
            />
          </div>
          <p style={{ color: 'rgba(245,235,216,0.6)', fontSize: '1rem' }}>
            4 egg rarities, each hiding creatures of extraordinary power
          </p>
        </div>

        {/* Egg cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {EGGS.map((egg) => (
            <div
              key={egg.name}
              className="card-hover rounded-2xl overflow-hidden"
              style={{
                background: egg.bg,
                border: `1px solid ${egg.border}44`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '2.5rem',
                  paddingBottom: '1.5rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <Image
                  src={egg.src}
                  alt={egg.name}
                  width={110}
                  height={132}
                  className="object-contain animate-float drop-shadow-2xl"
                />
              </div>
              <div
                style={{
                  padding: '0 1.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  flex: 1,
                  textAlign: 'center',
                }}
              >
                <span
                  className="chip"
                  style={{
                    alignSelf: 'center',
                    color: egg.color,
                    border: `1px solid ${egg.border}55`,
                    background: `${egg.border}11`,
                  }}
                >
                  {egg.rarity}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cinzel, serif',
                    color: egg.color,
                    fontSize: '0.875rem',
                    fontWeight: 700,
                  }}
                >
                  {egg.name}
                </h3>
                <p
                  style={{
                    color: 'rgba(245,235,216,0.55)',
                    fontSize: '0.75rem',
                    lineHeight: '1.65',
                    flex: 1,
                  }}
                >
                  {egg.desc}
                </p>
                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: `1px solid ${egg.border}22`,
                    color: 'rgba(245,235,216,0.4)',
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}
                >
                  Drop Rate:{' '}
                  <span style={{ color: egg.color }}>{egg.rate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mystery egg */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            className="rounded-2xl flex items-center justify-center"
            style={{
              width: '6rem',
              height: '7rem',
              background: 'rgba(255,255,255,0.025)',
              border: '2px dashed rgba(255,255,255,0.1)',
            }}
          >
            <Image
              src="/assets/eggs/egg_unknow.png"
              alt="mystery egg"
              width={68}
              height={82}
              className="object-contain opacity-35"
            />
          </div>
          <p
            style={{
              color: 'rgba(245,235,216,0.3)',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
            }}
          >
            ??? A hidden egg type awaits discovery...
          </p>
        </div>
      </div>
    </section>
  );
}
