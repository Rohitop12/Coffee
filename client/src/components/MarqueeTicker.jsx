import React from 'react';

export default function MarqueeTicker() {
  const items = [
    'HOUSE NO. 01',
    'SINGLE ORIGIN COLOMBIA',
    'FRESHLY ROASTED BATCHES',
    'POUR OVER & ESPRESSO',
    'NO COFFEE INTIMIDATION',
    'CRAFT SPECIALTY ROASTS',
    'BREWED FOR BETTER MORNINGS',
    'CHOCOLATE · CARAMEL · ALMOND',
  ];

  return (
    <div className="w-full  text-brewed-brown py-3.5 overflow-hidden  shadow-soft-sm relative z-20">
      <div className="flex w-max animate-marquee space-x-8 text-xs sm:text-sm font-heading font-extrabold uppercase tracking-widest">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center space-x-8 shrink-0">
            <span className="hover:text-brewed-accent transition-colors cursor-default">
              {text}
            </span>
            {/* <span className="text-brewed-accent text-xs">✦</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
