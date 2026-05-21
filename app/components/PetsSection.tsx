import Image from 'next/image';

type Rarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

interface PetCard {
  name: string;
  baby: string;
  rarity: Rarity;
  role: string;
  element: string;
  elementIcon: string;
  hint: string;
}

const PETS: PetCard[] = [
  {
    name: 'Cubcat',
    baby: '/assets/pets/pet_cubcat_baby.png',
    rarity: 'Legendary',
    role: 'Tank',
    element: 'Earth',
    elementIcon: '/assets/elements/element_earth.png',
    hint: 'A rare cub of immense power. Its true form is said to shake the earth itself.',
  },
  {
    name: 'Cindermoth',
    baby: '/assets/pets/pet_cindermoth_baby.png',
    rarity: 'Epic',
    role: 'Mage',
    element: 'Fire',
    elementIcon: '/assets/elements/element_fire.png',
    hint: 'Born from ember and ash. Evolves into a blazing inferno of pure destruction.',
  },
  {
    name: 'Floatling',
    baby: '/assets/pets/pet_floatling_baby.png',
    rarity: 'Epic',
    role: 'Support',
    element: 'Light',
    elementIcon: '/assets/elements/element_light.png',
    hint: 'A gentle spirit of light that grows into a radiant, celestial guardian.',
  },
];

const RARITY_STYLE: Record<
  Rarity,
  { label: string; bg: string; text: string; border: string }
> = {
  Common: { label: 'Common', bg: '#33333366', text: '#aaa', border: '#888' },
  Rare: { label: 'Rare', bg: '#1a3a5c66', text: '#5A9FE8', border: '#5A9FE8' },
  Epic: { label: 'Epic', bg: '#2d1a4466', text: '#c084fc', border: '#c084fc' },
  Legendary: {
    label: 'Legendary',
    bg: '#3a280066',
    text: '#E8B85C',
    border: '#E8B85C',
  },
};

const ROLE_ICON: Record<string, string> = {
  Tank: '/assets/icons/role_tank.png',
  Warrior: '/assets/icons/role_warrior.png',
  Mage: '/assets/icons/role_mage.png',
  Archer: '/assets/icons/role_archer.png',
  Support: '/assets/icons/role_support.png',
};

const TEASER_PETS = [
  '/assets/pets/pet_thornspike_baby.png',
  '/assets/pets/pet_boulderling_baby.png',
  '/assets/pets/pet_dewpetal_baby.png',
  '/assets/pets/pet_wispling_baby.png',
];

export default function PetsSection() {
  return (
    <section
      id="pets"
      className="min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #1e3a1c 0%, #1a301a 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 70% 40%, rgba(139,74,107,0.18), transparent 55%)',
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
            Meet Your Companions
          </h2>
          <div className="flex justify-center">
            <div
              className="section-divider"
              style={{ marginBottom: '1.25rem' }}
            />
          </div>
          <p style={{ color: 'rgba(245,235,216,0.6)', fontSize: '1rem' }}>
            A glimpse of what awaits — collect over a dozen unique pets in-game
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
          {PETS.map((pet, idx) => {
            const rs = RARITY_STYLE[pet.rarity];
            return (
              <div
                key={pet.name}
                className="card-hover rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(12,24,12,0.85)',
                  border: `1px solid ${rs.border}44`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image area */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ height: '15rem', background: rs.bg }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '8rem',
                      height: '8rem',
                      background: rs.border,
                      opacity: 0.12,
                      filter: 'blur(32px)',
                    }}
                  />
                  <Image
                    src={pet.baby}
                    alt={pet.name}
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-2xl animate-float relative z-10"
                    style={{ animationDelay: `${idx * 0.5}s` }}
                  />
                  <span
                    className="chip absolute"
                    style={{
                      top: '0.75rem',
                      right: '0.75rem',
                      color: rs.text,
                      background: rs.bg,
                      border: `1px solid ${rs.border}`,
                    }}
                  >
                    {rs.label}
                  </span>
                </div>

                {/* Body */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.875rem',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Cinzel, serif',
                        color: rs.text,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                      }}
                    >
                      {pet.name}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <Image
                        src={ROLE_ICON[pet.role]}
                        alt={pet.role}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span
                        style={{
                          color: 'rgba(245,235,216,0.5)',
                          fontSize: '0.8rem',
                        }}
                      >
                        {pet.role}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Image
                      src={pet.elementIcon}
                      alt={pet.element}
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                    <span
                      style={{
                        color: 'rgba(245,235,216,0.5)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {pet.element} Element
                    </span>
                  </div>

                  <p
                    style={{
                      color: 'rgba(245,235,216,0.5)',
                      fontSize: '0.875rem',
                      lineHeight: '1.7',
                      flex: 1,
                    }}
                  >
                    {pet.hint}
                  </p>

                  {/* Evolution */}
                  <div
                    style={{
                      paddingTop: '0.875rem',
                      borderTop: `1px solid ${rs.border}22`,
                    }}
                  >
                    <span
                      style={{
                        color: 'rgba(245,235,216,0.3)',
                        fontSize: '0.7rem',
                        fontFamily: 'Cinzel, serif',
                        display: 'block',
                        marginBottom: '0.625rem',
                      }}
                    >
                      Evolution Path
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <div
                        className="rounded-xl flex items-center justify-center"
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          background: `${rs.border}22`,
                          border: `1px solid ${rs.border}55`,
                        }}
                      >
                        <Image
                          src={pet.baby}
                          alt=""
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.15)',
                          fontSize: '10px',
                        }}
                      >
                        ▶
                      </span>
                      {[0, 1].map((i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                          }}
                        >
                          <div
                            className="rounded-xl flex items-center justify-center"
                            style={{
                              width: '2.5rem',
                              height: '2.5rem',
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px dashed rgba(255,255,255,0.1)',
                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255,255,255,0.2)',
                                fontSize: '14px',
                              }}
                            >
                              ?
                            </span>
                          </div>
                          {i < 1 && (
                            <span
                              style={{
                                color: 'rgba(255,255,255,0.15)',
                                fontSize: '10px',
                              }}
                            >
                              ▶
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Teaser */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {TEASER_PETS.map((src, i) => (
              <div
                key={src}
                className="rounded-xl flex items-center justify-center"
                style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  opacity: 0.45,
                }}
              >
                <Image
                  src={src}
                  alt=""
                  width={42}
                  height={42}
                  className="object-contain animate-float"
                  style={{
                    animationDelay: `${i * 0.35}s`,
                    filter: 'grayscale(90%) brightness(0.5)',
                  }}
                />
              </div>
            ))}
            <div
              className="rounded-xl flex items-center justify-center"
              style={{
                width: '3.5rem',
                height: '3.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px dashed rgba(255,255,255,0.08)',
                opacity: 0.3,
              }}
            >
              <span
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '1.25rem',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                +
              </span>
            </div>
          </div>
          <p
            style={{
              color: 'rgba(245,235,216,0.28)',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
            }}
          >
            And many more waiting to be discovered...
          </p>
        </div>
      </div>
    </section>
  );
}
