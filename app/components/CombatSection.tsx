import Image from 'next/image';

const ENEMIES = [
  { src: '/assets/enemies/enemy_forest_wolf.png', name: 'Forest Wolf' },
  { src: '/assets/enemies/enemy_demon_brute.png', name: 'Demon Brute' },
  { src: '/assets/enemies/enemy_cursed_bat.png', name: 'Cursed Bat' },
  { src: '/assets/enemies/enemy_iron_brute.png', name: 'Iron Brute' },
];

const BOSSES = [
  { src: '/assets/bosses/boss_forest_warden.png', name: 'Forest Warden' },
  { src: '/assets/bosses/boss_shadow_lord.png', name: 'Shadow Lord' },
  { src: '/assets/bosses/boss_sun_god_inferno.png', name: 'Sun God' },
  { src: '/assets/bosses/boss_tidal_empress.png', name: 'Tidal Empress' },
];

const ROOM_TYPES = [
  { src: '/assets/rooms/room_combat.png', label: 'Combat' },
  { src: '/assets/rooms/room_elite.png', label: 'Elite' },
  { src: '/assets/rooms/room_boss.png', label: 'Boss' },
  { src: '/assets/rooms/room_treasure.png', label: 'Treasure' },
  { src: '/assets/rooms/room_rest.png', label: 'Rest' },
  { src: '/assets/rooms/room_shop.png', label: 'Shop' },
  { src: '/assets/rooms/room_event.png', label: 'Event' },
];

const COMBAT_ACTIONS = [
  {
    src: '/assets/icons/combat_execute.png',
    label: 'Execute',
    color: '#E84545',
  },
  { src: '/assets/icons/combat_swap.png', label: 'Swap', color: '#5A9FE8' },
  { src: '/assets/icons/combat_pause.png', label: 'Pause', color: '#A8C770' },
  { src: '/assets/icons/combat_flee.png', label: 'Flee', color: '#E8B85C' },
  { src: '/assets/icons/combat_cancel.png', label: 'Cancel', color: '#888' },
];

const card = (border: string): React.CSSProperties => ({
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(12px)',
  border: `1px solid ${border}`,
  borderRadius: '1rem',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
});

export default function CombatSection() {
  return (
    <section
      id="combat"
      className="min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: '6rem 1.5rem' }}
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/backgrounds/bg_combat_slime.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14,28,14,0.9)' }}
        />
      </div>

      <div
        style={{
          maxWidth: '72rem',
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
            Enter the Dungeon
          </h2>
          <div className="flex justify-center">
            <div
              className="section-divider"
              style={{ marginBottom: '1.25rem' }}
            />
          </div>
          <p style={{ color: 'rgba(245,235,216,0.6)', fontSize: '1rem' }}>
            Turn-based combat with skill combos, status effects, and epic boss
            battles
          </p>
        </div>

        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Room Types */}
          <div style={card('rgba(232,184,92,0.2)')}>
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--sun-warm)',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Dungeon Room Types
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
              }}
            >
              {ROOM_TYPES.map((r) => (
                <div
                  key={r.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center"
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      background: 'rgba(232,184,92,0.1)',
                      border: '1px solid rgba(232,184,92,0.2)',
                    }}
                  >
                    <Image
                      src={r.src}
                      alt={r.label}
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>
                  <span
                    style={{
                      color: 'rgba(245,235,216,0.5)',
                      fontSize: '0.7rem',
                      fontFamily: 'Cinzel, serif',
                      textAlign: 'center',
                    }}
                  >
                    {r.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Combat Actions */}
          <div style={card('rgba(168,199,112,0.2)')}>
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--leaf-light)',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Combat Actions
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {COMBAT_ACTIONS.map((a) => (
                <div
                  key={a.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      background: `${a.color}22`,
                      border: `2px solid ${a.color}55`,
                    }}
                  >
                    <Image
                      src={a.src}
                      alt={a.label}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <span
                    style={{
                      color: a.color,
                      fontSize: '0.7rem',
                      fontFamily: 'Cinzel, serif',
                    }}
                  >
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
        >
          {/* Enemies */}
          <div style={card('rgba(232,68,68,0.2)')}>
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--hp-red)',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Enemies
            </h3>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {ENEMIES.map((e) => (
                <div
                  key={e.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center"
                    style={{
                      width: '4.25rem',
                      height: '4.25rem',
                      background: 'rgba(232,68,68,0.1)',
                      border: '1px solid rgba(232,68,68,0.25)',
                    }}
                  >
                    <Image
                      src={e.src}
                      alt={e.name}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <span
                    style={{
                      color: 'rgba(245,235,216,0.55)',
                      fontSize: '0.75rem',
                      textAlign: 'center',
                    }}
                  >
                    {e.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bosses */}
          <div style={card('rgba(232,184,92,0.25)')}>
            <h3
              style={{
                fontFamily: 'Cinzel, serif',
                color: 'var(--sun-warm)',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Epic Bosses
            </h3>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {BOSSES.map((b) => (
                <div
                  key={b.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center animate-pulse-glow"
                    style={{
                      width: '4.25rem',
                      height: '4.25rem',
                      background: 'rgba(232,184,92,0.1)',
                      border: '1px solid rgba(232,184,92,0.3)',
                    }}
                  >
                    <Image
                      src={b.src}
                      alt={b.name}
                      width={52}
                      height={52}
                      className="object-contain"
                    />
                  </div>
                  <span
                    style={{
                      color: 'var(--sun-warm)',
                      fontSize: '0.75rem',
                      textAlign: 'center',
                    }}
                  >
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
