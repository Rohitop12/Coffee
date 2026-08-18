import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductIntro({ onSelectFilter }) {
  const [activeTaste, setActiveTaste] = useState('Chocolatey');
  const [activeRoast, setActiveRoast] = useState('Medium');
  const [activeBrew, setActiveBrew] = useState('Pour Over');

  const categories = [
    {
      title: 'Taste',
      options: ['Chocolatey', 'Nutty', 'Fruity'],
      state: activeTaste,
      direction: -60, // slideLeft
      setState: (val) => {
        setActiveTaste(val);
        if (onSelectFilter) onSelectFilter('taste', val);
      },
    },
    {
      title: 'Roast',
      options: ['Light', 'Medium', 'Dark'],
      state: activeRoast,
      direction: 0, // fadeUp
      setState: (val) => {
        setActiveRoast(val);
        if (onSelectFilter) onSelectFilter('roast', val);
      },
    },
    {
      title: 'Brew',
      options: ['Pour Over', 'French Press', 'Espresso'],
      state: activeBrew,
      direction: 60, // slideRight
      setState: (val) => {
        setActiveBrew(val);
        if (onSelectFilter) onSelectFilter('brew', val);
      },
    },
  ];

  return (
    <section id="intro" className="py-20 bg-brewed-cream-dark/40 border-y border-brewed-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brewed-cream border border-brewed-border text-xs font-bold tracking-wider text-brewed-brown uppercase mb-4">
            {/* <Sparkles className="w-3.5 h-3.5 text-brewed-accent" /> */}
            <span>Intuitive Flavor Navigation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brewed-dark tracking-tight mb-4">
            Good coffee shouldn't require a vocabulary lesson.
          </h2>

          <p className="text-base sm:text-lg text-brewed-muted leading-relaxed">
            We make specialty coffee easier to explore. Start with what you like, discover where it comes from, and find a brew that fits your morning.
          </p>
        </motion.div>

        {/* Directional Scroll-Triggered Category Cards (slideLeft / fade / slideRight) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: cat.direction, y: cat.direction === 0 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-brewed-card p-6 sm:p-8 rounded-3xl border border-brewed-border shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brewed-muted">
                    0{idx + 1} / Category
                  </span>
                  <span className="text-xs font-semibold text-brewed-brown bg-brewed-cream-dark px-2.5 py-1 rounded-full">
                    {cat.state}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brewed-dark mb-6">
                  {cat.title}
                </h3>
              </div>

              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2.5">
                {cat.options.map((opt) => {
                  const isSelected = cat.state === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => cat.setState(opt)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brewed-accent ${
                        isSelected
                          ? 'bg-brewed-brown text-brewed-cream shadow-soft-sm scale-[1.02]'
                          : 'bg-brewed-cream text-brewed-dark/80 hover:bg-brewed-cream-dark border border-brewed-border/60'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-brewed-accent" />}
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
