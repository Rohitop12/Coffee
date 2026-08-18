import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Coffee } from 'lucide-react';

export default function Navbar({ onOpenFinder }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', href: '#collection' },
    { name: 'Coffee', href: '#intro' },
    { name: 'Brew Guide', href: '#brew-guide' },
    { name: 'Our Story', href: '#story' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brewed-cream/90 backdrop-blur-xs border-b border-brewed-border/60 py-3.5 shadow-soft-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-brewed-dark rounded-lg px-1 py-0.5"
            aria-label="Brewed Homepage"
          >
            <span className="w-8 h-8 rounded-full bg-brewed-brown text-brewed-cream flex items-center justify-center transition-transform group-hover:scale-105">
              <Coffee className="w-4 h-4" />
            </span>
            <span className="font-heading font-extrabold tracking-wider text-brewed-dark">
              BREWED
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex font-semibold text-brewed-dark items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brewed-dark/80 hover:text-brewed-brown transition-colors focus:outline-none focus:ring-2 focus:ring-brewed-accent rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenFinder}
              className="inline-flex items-center gap-2 bg-brewed-dark text-brewed-cream hover:bg-brewed-brown px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-soft-sm hover:shadow-soft-md focus:outline-none focus:ring-2 focus:ring-brewed-accent"
            >
              <span>Build your brew</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brewed-dark hover:text-brewed-brown focus:outline-none focus:ring-2 focus:ring-brewed-accent rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-brewed-cream/98 backdrop-blur-lg border-b border-brewed-border px-6 py-6 shadow-soft-lg transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-brewed-dark hover:text-brewed-brown py-2 border-b border-brewed-border/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenFinder) onOpenFinder();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-brewed-dark text-brewed-cream hover:bg-brewed-brown px-5 py-3 rounded-full text-base font-semibold transition-colors"
              >
                <span>Build your brew</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
