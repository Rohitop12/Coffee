import React, { useState } from 'react';
import { finderPreferences } from '../data/coffee.js';
import { ArrowRight, Sparkles, CheckCircle2, Flame, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductShowcase({ onSelectCoffee }) {
  const [selectedPrefId, setSelectedPrefId] = useState('smooth');

  const currentMatch = finderPreferences.find((p) => p.id === selectedPrefId) || finderPreferences[0];
  const coffee = currentMatch.coffee;

  return (
    <section id="finder" className="py-20 lg:py-28 bg-brewed-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brewed-cream-dark border border-brewed-border text-xs font-bold tracking-wider text-brewed-brown uppercase mb-3">
            {/* <Sparkles className="w-3.5 h-3.5 text-brewed-accent" /> */}
            <span>Interactive Matcher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brewed-dark tracking-tight">
            Find your coffee.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brewed-muted">
            Select what you enjoy drinking, and we'll instantly match you with a roast.
          </p>
        </motion.div>

        {/* Dashboard Card Container */}
        <div className="bg-brewed-card rounded-3xl border border-brewed-border shadow-soft-lg p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Preference Selector (slideLeft on scroll) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-brewed-dark mb-2">
                What sounds good today?
              </h3>
              <p className="text-sm text-brewed-muted mb-6">
                Choose your ideal flavor profile to see your recommended match.
              </p>

              <div className="flex flex-col gap-3">
                {finderPreferences.map((pref) => {
                  const isSelected = pref.id === selectedPrefId;
                  return (
                    <button
                      key={pref.id}
                      onClick={() => setSelectedPrefId(pref.id)}
                      className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brewed-accent ${
                        isSelected
                          ? 'bg-brewed-cream-dark border-2 border-brewed-brown shadow-soft-sm text-brewed-dark'
                          : 'bg-brewed-cream/60 hover:bg-brewed-cream border border-brewed-border/70 text-brewed-dark/80'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-brewed-brown bg-brewed-brown text-brewed-cream'
                              : 'border-brewed-muted/40 bg-transparent'
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-brewed-cream" />}
                        </div>
                        <span className="text-base font-bold font-heading">
                          {pref.label}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-brewed-muted hidden sm:inline-block">
                        {pref.coffee.roast} Roast
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Recommendation Preview Card (slideRight on scroll) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={coffee._id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="bg-brewed-cream rounded-3xl p-6 sm:p-8 border border-brewed-border shadow-soft-md relative overflow-hidden"
                >
                  {/* Top Match Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brewed-brown text-brewed-cream text-xs font-extrabold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-brewed-accent" />
                      <span>Your Match</span>
                    </span>
                    <span className="text-lg font-bold text-brewed-brown font-heading">
                      ₹{coffee.price}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                    <div className="w-36 h-36 bg-brewed-card rounded-2xl border border-brewed-border/80 p-3 flex items-center justify-center shadow-soft-sm shrink-0">
                      <img
                        src={coffee.image}
                        alt={coffee.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-brewed-muted uppercase tracking-wider mb-1">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brewed-accent" />
                          {coffee.origin}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-brewed-brown" />
                          {coffee.roast} Roast
                        </span>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-brewed-dark mb-2">
                        {coffee.name}
                      </h4>

                      <p className="text-xs sm:text-sm text-brewed-muted line-clamp-2 leading-relaxed">
                        {coffee.description}
                      </p>
                    </div>
                  </div>

                  {/* Flavor Notes */}
                  <div className="bg-brewed-card/90 rounded-2xl p-4 border border-brewed-border/60 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brewed-muted mb-2">
                      Flavor Profile
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coffee.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 rounded-full bg-brewed-cream-dark/70 text-brewed-dark text-xs font-semibold border border-brewed-border/50"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={() => onSelectCoffee && onSelectCoffee(coffee)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brewed-dark text-brewed-cream hover:bg-brewed-brown px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all shadow-soft-sm group focus:outline-none focus:ring-2 focus:ring-brewed-accent"
                  >
                    <span>View coffee details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
