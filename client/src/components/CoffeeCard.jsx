import React from 'react';
import { MapPin, Flame, ArrowUpRight } from 'lucide-react';

export default function CoffeeCard({ coffee, onQuickView }) {
  return (
    <div className="group bg-brewed-card rounded-3xl border border-brewed-border shadow-soft-sm hover:shadow-soft-lg transition-all duration-400 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
      <div>
        {/* Card Header Image Area */}
        <div className="relative bg-brewed-cream-dark/30 p-6 flex items-center justify-center border-b border-brewed-border/40 min-h-[220px] overflow-hidden">
          {/* Origin Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-brewed-card/90 backdrop-blur-sm px-3 py-1 rounded-full border border-brewed-border/60 text-xs font-semibold text-brewed-dark">
            <MapPin className="w-3.5 h-3.5 text-brewed-accent" />
            <span>{coffee.origin}</span>
          </div>

          {/* Roast Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-brewed-brown text-brewed-cream px-2.5 py-1 rounded-full text-xs font-bold">
            <Flame className="w-3 h-3 text-brewed-accent" />
            <span>{coffee.roast}</span>
          </div>

          {/* Packaging Image — scale on hover */}
          <img
            src={coffee.image || '/images/hero-bag.png'}
            alt={`${coffee.name} packaging`}
            className="w-36 h-36 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
          />
        </div>

        {/* Card Details */}
        <div className="p-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-2xl font-heading font-extrabold text-brewed-dark group-hover:text-brewed-brown transition-colors duration-200">
              {coffee.name}
            </h3>
            <span className="text-xl font-bold font-heading text-brewed-brown">
              ₹{coffee.price}
            </span>
          </div>

          <p className="text-xs font-medium text-brewed-accent uppercase tracking-wider mb-3">
            {coffee.tagline || `${coffee.origin} ${coffee.roast} Roast`}
          </p>

          <p className="text-sm text-brewed-muted line-clamp-2 leading-relaxed mb-6">
            {coffee.description}
          </p>

          {/* Flavor Notes */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {coffee.flavorNotes &&
              coffee.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="px-2.5 py-1 rounded-md bg-brewed-cream text-brewed-dark text-xs font-medium border border-brewed-border/50"
                >
                  {note}
                </span>
              ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={() => onQuickView(coffee)}
          className="w-full inline-flex items-center justify-center gap-2 bg-brewed-cream hover:bg-brewed-brown hover:text-brewed-cream text-brewed-dark border border-brewed-border hover:border-brewed-brown px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brewed-accent group/btn"
        >
          <span>Explore roast</span>
          <ArrowUpRight className="w-4 h-4 text-brewed-brown group-hover/btn:text-brewed-cream transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
}
