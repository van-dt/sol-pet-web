import Image from 'next/image';

const ELEMENTS = [
  {
    name: 'Fire',
    icon: '/assets/elements/element_fire.png',
    color: '#E84545',
    bg: 'rgba(232,68,68,0.08)',
    desc: 'Burn enemies over time. Burst damage specialists that melt through any defense.',
    skills: [
      '/assets/skills/fire/skill_fireball.png',
      '/assets/skills/fire/skill_meteor_strike.png',
      '/assets/skills/fire/skill_inferno_blast.png',
    ],
  },
  {
    name: 'Water',
    icon: '/assets/elements/element_water.png',
    color: '#5A9FE8',
    bg: 'rgba(90,159,232,0.08)',
    desc: 'Heal allies and freeze foes. Master of sustain, shields, and battlefield control.',
    skills: [
      '/assets/skills/water/skill_tsunami.png',
      '/assets/skills/water/skill_healing_rain.png',
      '/assets/skills/water/skill_aqua_barrier.png',
    ],
  },
  {
    name: 'Earth',
    icon: '/assets/elements/element_earth.png',
    color: '#A8C770',
    bg: 'rgba(168,199,112,0.08)',
    desc: 'Unyielding defense and crowd control roots. Tank the heaviest blows.',
    skills: [
      '/assets/skills/earth/skill_earthquake.png',
      '/assets/skills/earth/skill_iron_wall.png',
      '/assets/skills/earth/skill_boulder_crash.png',
    ],
  },
  {
    name: 'Thunder',
    icon: '/assets/elements/element_thunder.png',
    color: '#FFD66B',
    bg: 'rgba(255,214,107,0.08)',
    desc: 'Chain lightning and stun. The fastest element — devastate before enemies act.',
    skills: [
      '/assets/skills/thunder/skill_thunderstorm.png',
      '/assets/skills/thunder/skill_chain_lightning.png',
      '/assets/skills/thunder/skill_storm_fury.png',
    ],
  },
  {
    name: 'Light',
    icon: '/assets/elements/element_light.png',
    color: '#FFF8C0',
    bg: 'rgba(255,248,192,0.08)',
    desc: 'Holy power — bless allies, resurrect the fallen, and smite with divine judgement.',
    skills: [
      '/assets/skills/light/skill_holy_burst.png',
      '/assets/skills/light/skill_resurrection.png',
      '/assets/skills/light/skill_divine_pillar.png',
    ],
  },
  {
    name: 'Shadow',
    icon: '/assets/elements/element_shadow.png',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.08)',
    desc: 'Drain life, silence foes, and strike from the darkness. Death by a thousand cuts.',
    skills: [
      '/assets/skills/shadow/skill_eclipse.png',
      '/assets/skills/shadow/skill_soul_drain.png',
      '/assets/skills/shadow/skill_void_lance.png',
    ],
  },
];

export default function ElementsSection() {
  return (
    <section
      id="elements"
      className="min-h-screen flex flex-col justify-center"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #1a301a 0%, #1e3a1c 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 50%, rgba(90,159,232,0.1), transparent 50%)',
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
            Elemental Powers
          </h2>
          <div className="flex justify-center">
            <div
              className="section-divider"
              style={{ marginBottom: '1.25rem' }}
            />
          </div>
          <p style={{ color: 'rgba(245,235,216,0.6)', fontSize: '1rem' }}>
            Master every element to build the ultimate team composition
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
          {ELEMENTS.map((el) => (
            <div
              key={el.name}
              className="card-hover rounded-2xl"
              style={{
                background: el.bg,
                border: `1px solid ${el.color}28`,
                backdropFilter: 'blur(8px)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
              >
                <div
                  className="rounded-xl flex items-center justify-center"
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    background: `${el.color}22`,
                    border: `1px solid ${el.color}55`,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={el.icon}
                    alt={el.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: 'Cinzel, serif',
                    color: el.color,
                    fontSize: '1.25rem',
                    fontWeight: 700,
                  }}
                >
                  {el.name}
                </h3>
              </div>

              <p
                style={{
                  color: 'rgba(245,235,216,0.7)',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  flex: 1,
                }}
              >
                {el.desc}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                <span
                  style={{
                    color: 'rgba(245,235,216,0.35)',
                    fontSize: '0.7rem',
                    fontFamily: 'Cinzel, serif',
                  }}
                >
                  Sample Skills
                </span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {el.skills.map((s) => (
                    <div
                      key={s}
                      className="rounded-xl flex items-center justify-center"
                      style={{
                        width: '2.75rem',
                        height: '2.75rem',
                        background: `${el.color}18`,
                        border: `1px solid ${el.color}30`,
                      }}
                    >
                      <Image
                        src={s}
                        alt=""
                        width={34}
                        height={34}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
