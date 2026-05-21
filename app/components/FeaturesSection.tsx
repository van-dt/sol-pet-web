import Image from 'next/image';

const FEATURES = [
  {
    icon: '/assets/eggs/egg_legendary.png',
    title: 'Hatch Rare Eggs',
    desc: 'Discover Common, Rare, Epic, and Legendary eggs. The rarer the egg, the more powerful the companion inside.',
    color: '#E8B85C',
  },
  {
    icon: '/assets/pets/pet_cubcat_baby.png',
    title: 'Collect Companions',
    desc: 'Build a roster across 5 battle roles: Warrior, Mage, Tank, Archer, and Support. Every pet has unique abilities.',
    color: '#A8C770',
  },
  {
    icon: '/assets/icons/nav_dungeon.png',
    title: 'Conquer Dungeons',
    desc: 'Explore procedurally-generated floors with combat, treasure, rest, and boss rooms. No two runs are ever the same.',
    color: '#5A9FE8',
  },
  {
    icon: '/assets/pets/pet_thornspike_baby.png',
    title: 'Evolve Your Pets',
    desc: 'Watch your pets grow through multiple evolution stages with dramatically increased powers and new abilities.',
    color: '#8B4A6B',
  },
  {
    icon: '/assets/icons/nav_gacha.png',
    title: 'Gacha & Shop',
    desc: 'Spend Gold and Gems to unlock exclusive items, equipment, and limited-edition companions. Fortune favors the bold.',
    color: '#D17B3F',
  },
  {
    icon: '/assets/icons/reward_trophy.png',
    title: 'Leaderboards',
    desc: 'Climb global rankings, earn prestigious badges, and prove your team is the strongest in the realm.',
    color: '#E84545',
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center"
      style={{
        padding: '6rem 1.5rem',
        background:
          'linear-gradient(180deg, var(--forest-deep) 0%, #1e3a1c 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(90,138,62,0.15), transparent 65%)',
        }}
      />

      <div style={{ maxWidth: '72rem', margin: '0 auto', width: '100%' }}>
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
            Game Features
          </h2>
          <div className="flex justify-center">
            <div
              className="section-divider"
              style={{ marginBottom: '1.25rem' }}
            />
          </div>
          <p style={{ color: 'rgba(245,235,216,0.6)', fontSize: '1rem' }}>
            Everything you need for an epic adventure
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-hover glass rounded-2xl"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                borderColor: `${f.color}22`,
              }}
            >
              <div
                className="rounded-xl flex items-center justify-center"
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: `${f.color}22`,
                  border: `1px solid ${f.color}44`,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: f.color,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: 'rgba(245,235,216,0.68)',
                  fontSize: '0.875rem',
                  lineHeight: '1.8',
                  flex: 1,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
