'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: 'var(--outline-dark)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="w-full mx-auto p-4!">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image
            src="/assets/icons/nav_home.png"
            alt="logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span
            style={{
              fontFamily: 'Cinzel, serif',
              color: 'var(--sun-warm)',
              fontWeight: 700,
              fontSize: '0.875rem',
              letterSpacing: '0.1em',
            }}
          >
            MONSTER PET GAME
          </span>
        </div>
        <p className="text-xs mb-6" style={{ color: 'rgba(245,235,216,0.35)' }}>
          Hatch. Collect. Battle. Evolve.
        </p>
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          {[
            '#features',
            '#pets',
            '#combat',
            '#elements',
            '#eggs',
            '#download',
          ].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs capitalize transition-colors"
              style={{
                color: 'rgba(245,235,216,0.4)',
                fontFamily: 'Cinzel, serif',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--sun-warm)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  'rgba(245,235,216,0.4)')
              }
            >
              {href.replace('#', '')}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: 'rgba(245,235,216,0.25)' }}>
          © {new Date().getFullYear()} Monster Pet Game. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
