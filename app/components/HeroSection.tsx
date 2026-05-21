import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/backgrounds/bg_main_menu.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          zIndex: 0,
          maxWidth: 'none',
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10rem',
          background:
            'linear-gradient(to bottom, transparent, var(--forest-deep))',
          zIndex: 1,
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20 w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full text-xs font-semibold glass"
          style={{
            color: 'var(--sun-warm)',
            border: '1px solid rgba(232,184,92,0.3)',
            padding: '0.375rem 1rem',
            marginBottom: '2rem',
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: 'var(--sun-warm)' }}
          />
          Mobile RPG Adventure — Coming Soon
        </div>

        <h1
          className="font-black leading-tight"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            marginBottom: '1rem',
          }}
        >
          <span
            className="shimmer-text"
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', display: 'block' }}
          >
            MONSTER
          </span>
          <span
            style={{
              color: 'var(--cream)',
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              display: 'block',
            }}
          >
            PET GAME
          </span>
        </h1>

        <p
          className="leading-relaxed"
          style={{
            color: 'rgba(245,235,216,0.8)',
            fontSize: '1.125rem',
            maxWidth: '42rem',
            margin: '1.5rem auto 2.5rem',
          }}
        >
          Hatch mysterious eggs, collect powerful companions, and conquer
          dungeons in this epic mobile RPG adventure.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center"
          style={{ gap: '1rem', marginBottom: '4rem' }}
        >
          <a href="#download" className="btn-gold rounded-xl py-1! px-2!">
            Download Free
          </a>
          <a href="#features" className="btn-primary rounded-xl py-1! px-2!">
            Learn More
          </a>
        </div>

        {/* Floating pets */}
        <div
          className="flex justify-center flex-wrap"
          style={{ gap: '1.5rem' }}
        >
          {[
            {
              src: '/assets/pets/pet_cubcat_baby.png',
              delay: '0s',
              label: 'Cubcat',
            },
            {
              src: '/assets/pets/pet_wispling_baby.png',
              delay: '0.4s',
              label: 'Wispling',
            },
            {
              src: '/assets/pets/pet_cindermoth_baby.png',
              delay: '0.8s',
              label: 'Cindermoth',
            },
            {
              src: '/assets/pets/pet_dewpetal_baby.png',
              delay: '1.2s',
              label: 'Dewpetal',
            },
            {
              src: '/assets/pets/pet_floatling_baby.png',
              delay: '1.6s',
              label: 'Floatling',
            },
          ].map((pet) => (
            <div
              key={pet.src}
              className="flex flex-col items-center animate-float"
              style={{ gap: '0.5rem', animationDelay: pet.delay }}
            >
              <div
                className="glass rounded-2xl"
                style={{
                  width: '5rem',
                  height: '5rem',
                  padding: '0.5rem',
                  border: '1px solid rgba(232,184,92,0.3)',
                }}
              >
                <Image
                  src={pet.src}
                  alt={pet.label}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <span
                className="text-xs font-semibold"
                style={{
                  color: 'var(--leaf-light)',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                {pet.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
        style={{ gap: '0.5rem' }}
      >
        <span
          className="text-xs"
          style={{
            color: 'rgba(245,235,216,0.45)',
            fontFamily: 'Cinzel, serif',
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,235,216,0.45), transparent)',
          }}
        />
      </div>
    </section>
  );
}
