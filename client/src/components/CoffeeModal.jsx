import React, { useEffect } from 'react';
import { X, MapPin, Flame, Coffee, Check, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CoffeeModal({ coffee, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!coffee) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brewed-dark/60 backdrop-blur-sm"
        />

        {/* Dialog Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-brewed-card w-full max-w-2xl rounded-3xl border border-brewed-border shadow-soft-lg z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brewed-cream border border-brewed-border text-brewed-dark hover:text-brewed-brown transition-colors focus:outline-none focus:ring-2 focus:ring-brewed-accent"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Image Column */}
            <div className="md:col-span-5 bg-brewed-cream-dark/40 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-brewed-border/60">
              <img
                src={coffee.image || '/images/hero-bag.png'}
                alt={coffee.name}
                className="w-48 h-48 object-contain drop-shadow-xl mb-4"
              />
              <span className="text-2xl font-extrabold font-heading text-brewed-brown">
                ₹{coffee.price}
              </span>
              <span className="text-xs text-brewed-muted">Whole Bean / 250g</span>
            </div>

            {/* Right Information Column */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Origin & Roast Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 bg-brewed-cream px-2.5 py-1 rounded-full border border-brewed-border text-xs font-semibold text-brewed-dark">
                    <MapPin className="w-3.5 h-3.5 text-brewed-accent" />
                    {coffee.origin}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-brewed-brown text-brewed-cream px-2.5 py-1 rounded-full text-xs font-bold">
                    <Flame className="w-3.5 h-3.5 text-brewed-accent" />
                    {coffee.roast} Roast
                  </span>
                </div>

                <h3 className="text-3xl font-heading font-extrabold text-brewed-dark mb-1">
                  {coffee.name}
                </h3>
                
                <p className="text-xs font-semibold text-brewed-brown uppercase tracking-wider mb-4">
                  {coffee.tagline || 'Specialty Single Origin'}
                </p>

                <p className="text-sm text-brewed-muted leading-relaxed mb-6">
                  {coffee.description}
                </p>

                {/* Flavor Notes */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-brewed-muted block mb-2">
                    Tasting Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coffee.flavorNotes &&
                      coffee.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 rounded-full bg-brewed-cream text-brewed-dark text-xs font-semibold border border-brewed-border"
                        >
                          {note}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Recommended Brew Methods */}
                {coffee.brewMethods && (
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-brewed-muted block mb-2">
                      Recommended Brew Methods
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {coffee.brewMethods.map((method) => (
                        <span
                          key={method}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brewed-cream-dark/60 text-brewed-dark text-xs font-medium border border-brewed-border/60"
                        >
                          <Coffee className="w-3 h-3 text-brewed-brown" />
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-brewed-border/60">
                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brewed-dark text-brewed-cream hover:bg-brewed-brown px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all shadow-soft-sm focus:outline-none focus:ring-2 focus:ring-brewed-accent"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Select {coffee.name} — ₹{coffee.price}</span>
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
