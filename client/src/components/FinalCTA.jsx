import React from 'react';
import { ArrowRight, Compass, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA({ onExploreClick, onBuildBrewClick }) {
  return (
    <section className="py-20 lg:py-28 bg-brewed-dark text-brewed-cream relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brewed-brown/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating ambient coffee icon */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 right-20 text-brewed-cream/5 pointer-events-none hidden lg:block"
      >
        <Coffee className="w-32 h-32" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-12 left-16 text-brewed-cream/5 pointer-events-none hidden lg:block"
      >
        <Coffee className="w-24 h-24" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-brewed-dark via-brewed-dark to-black/40 rounded-3xl p-8 sm:p-14 lg:p-20 border border-brewed-cream/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content — slideLeft */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brewed-brown/30 border border-brewed-brown/50 text-xs font-bold tracking-wider text-brewed-accent uppercase mb-6">
                <Coffee className="w-3.5 h-3.5" />
                <span>Ready to taste?</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-brewed-cream mb-6 leading-[1.1]">
                Find your next <br className="hidden sm:inline" />
                <span className="text-brewed-accent">favorite cup.</span>
              </h2>

              <p className="text-lg sm:text-xl text-brewed-cream/80 max-w-xl leading-relaxed mb-8">
                Start with a flavor you already love. Simple roasts, transparent origins, and better mornings.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#collection"
                  onClick={onExploreClick}
                  className="inline-flex items-center justify-center gap-3 bg-brewed-accent hover:bg-brewed-accent-light text-brewed-dark px-8 py-4 rounded-full text-base font-bold transition-all shadow-soft-md group focus:outline-none focus:ring-2 focus:ring-brewed-accent"
                >
                  <span>Explore Brewed</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </a>

                <button
                  onClick={onBuildBrewClick}
                  className="inline-flex items-center justify-center gap-2 bg-brewed-cream/10 hover:bg-brewed-cream/20 text-brewed-cream px-6 py-4 rounded-full text-base font-semibold border border-brewed-cream/20 transition-all focus:outline-none focus:ring-2 focus:ring-brewed-accent"
                >
                  <Compass className="w-4 h-4 text-brewed-accent" />
                  <span>Build my brew</span>
                </button>
              </div>
            </motion.div>

            {/* Right Visual — slideRight + float animation */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative p-4 rounded-3xl bg-brewed-cream/5 border border-brewed-cream/10 backdrop-blur-sm"
              >
                <img
                  src="/images/brew-ritual.png"
                  alt="Brewed pour over coffee ritual CTA visual"
                  className="w-full max-w-[280px] h-auto rounded-2xl object-cover shadow-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
