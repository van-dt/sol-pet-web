'use client';
import Image from 'next/image';

const BABY_PETS = [
  { src: '/assets/pets/pet_cubcat_baby.png', delay: '0s' },
  { src: '/assets/pets/pet_cindermoth_baby.png', delay: '0.3s' },
  { src: '/assets/pets/pet_boulderling_baby.png', delay: '0.6s' },
  { src: '/assets/pets/pet_floatling_baby.png', delay: '0.9s' },
  { src: '/assets/pets/pet_thornspike_baby.png', delay: '1.2s' },
];

const STAT_HIGHLIGHTS = [
  {
    icon: '/assets/icons/currency_gold.png',
    label: 'Gold',
    value: 'Earn in battles',
  },
  {
    icon: '/assets/icons/currency_gem.png',
    label: 'Gems',
    value: 'Premium currency',
  },
  {
    icon: '/assets/icons/reward_trophy.png',
    label: 'Ranking',
    value: 'Climb the leaderboard',
  },
  {
    icon: '/assets/icons/reward_star.png',
    label: 'Stars',
    value: 'Rate your pets',
  },
];

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="min-h-screen py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #1e3a1c 0%, #162814 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 70%, rgba(232,184,92,0.18), transparent 55%)',
        }}
      />

      <div className="max-w-4xl w-full relative text-center mx-auto top-4">
        {/* Floating pets */}
        {/* <div
          className="flex justify-center gap-8 md:gap-12 flex-wrap"
          style={{ marginBottom: '3.5rem' }}
        >
          {BABY_PETS.map(({ src, delay }) => (
            <Image
              key={src}
              src={src}
              alt="pet"
              width={88}
              height={88}
              className="object-contain drop-shadow-2xl animate-float"
              style={{ animationDelay: delay }}
            />
          ))}
        </div> */}

        <h2
          className="text-5xl md:text-7xl font-black"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            marginBottom: '1.5rem',
          }}
        >
          <span className="shimmer-text">Start Your Adventure</span>
        </h2>

        <div className="w-full flex justify-center">
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-8"
            style={{ color: 'rgba(245,235,216,0.68)', marginBottom: '3rem' }}
          >
            Monster Pet Game is coming to Android and iOS.
            <br />
            Sign up to be first to know when we launch!
          </p>
        </div>

        {/* Email signup */}
        <div className="w-full flex justify-center">
          <form
            className="flex items-stretch gap-3 justify-center w-lg"
            style={{ marginBottom: '3rem' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 rounded-xl text-sm outline-none"
              style={{
                height: '3.25rem',
                padding: '0 1.25rem',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(232,184,92,0.35)',
                color: 'var(--cream)',
              }}
            />
            <button
              type="submit"
              className="btn-gold rounded-xl shrink-0"
              style={{ height: '3.25rem', padding: '0 1.75rem' }}
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Store badges */}
        <div
          className="flex justify-center gap-5 flex-wrap"
          style={{ marginBottom: '3.5rem' }}
        >
          <div
            className="flex items-center gap-4 rounded-xl cursor-pointer transition-all hover:scale-105"
            style={{
              padding: '1rem 2rem',
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current shrink-0"
              style={{ color: 'var(--cream)' }}
            >
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.27.07 2.15.73 2.89.76 1.1-.12 2.15-.83 3.26-.78 1.37.05 2.38.63 3.02 1.6-2.74 1.65-2.29 5.2.79 6.24-.67 1.64-1.5 3.28-1.96 4.04zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div
                className="text-xs mb-0.5"
                style={{ color: 'rgba(245,235,216,0.45)' }}
              >
                Coming soon on
              </div>
              <div
                className="font-bold text-lg"
                style={{ fontFamily: 'Cinzel, serif', color: 'var(--cream)' }}
              >
                App Store
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-4 rounded-xl cursor-pointer transition-all hover:scale-105"
            style={{
              padding: '1rem 2rem',
              background: 'rgba(0,0,0,0.55)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-9 h-9 fill-current shrink-0"
              style={{ color: '#A8C770' }}
            >
              <path d="M3.18 23.76c.33.18.7.19 1.06 0l10.8-6.24-2.3-2.3-9.56 8.54zm14.96-13.84L5.72 3.67c-.37-.21-.77-.21-1.1-.01l10.3 10.32 3.22-4.06zM2.28 4.37C2.1 4.63 2 4.95 2 5.3v13.4c0 .35.1.67.28.93L12.63 9.5 2.28 4.37zm18.1 6.04l-2.8-1.62-3.06 3.07 3.06 3.06 2.82-1.63c.8-.46.8-1.41-.02-1.88z" />
            </svg>
            <div className="text-left">
              <div
                className="text-xs mb-0.5"
                style={{ color: 'rgba(245,235,216,0.45)' }}
              >
                Coming soon on
              </div>
              <div
                className="font-bold text-lg"
                style={{ fontFamily: 'Cinzel, serif', color: 'var(--cream)' }}
              >
                Google Play
              </div>
            </div>
          </div>
        </div>

        {/* Stat highlights */}
        <div className="flex justify-center">
          <div
            className="glass rounded-2xl mx-auto"
            style={{
              maxWidth: '600px',
              padding: '1.75rem 2.5rem',
              border: '1px solid rgba(232,184,92,0.15)',
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {STAT_HIGHLIGHTS.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-3">
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{
                        fontFamily: 'Cinzel, serif',
                        color: 'var(--sun-warm)',
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: 'rgba(245,235,216,0.45)' }}
                    >
                      {s.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
