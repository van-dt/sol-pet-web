'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pets', href: '#pets' },
  { label: 'Combat', href: '#combat' },
  { label: 'Elements', href: '#elements' },
  { label: 'Eggs', href: '#eggs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/assets/icons/nav_home.png"
            alt="logo"
            width={32}
            height={32}
            className="group-hover:animate-wiggle"
          />
          <span
            className="font-cinzel font-bold text-lg tracking-widest shimmer-text"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            MONSTER PET
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide transition-colors"
                style={{ color: 'var(--cream)', fontFamily: 'Cinzel, serif' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--sun-warm)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--cream)')
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#download"
          className="hidden md:block btn-gold btn-sm rounded-lg px-2! py-1!"
        >
          Download Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{ background: 'var(--cream)' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${open ? 'opacity-0' : ''}`}
            style={{ background: 'var(--cream)' }}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{ background: 'var(--cream)' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass md:hidden px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-cinzel text-sm py-2 border-b border-white/10"
              style={{ color: 'var(--cream)', fontFamily: 'Cinzel, serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="btn-gold btn-sm rounded-lg text-center mt-2"
          >
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
}
