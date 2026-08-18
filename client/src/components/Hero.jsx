import React, { useState } from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreClick, onBuildBrewClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-brewed-cream">
      {/* Background Subtle Warm Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brewed-cream-dark/50 to-brewed-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Floating Ambient Coffee Bean Graphic 1 */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-8 text-brewed-brown/15 pointer-events-none hidden md:block"
      >
        <Coffee className="w-16 h-16" />
      </motion.div>

      {/* Floating Ambient Coffee Bean Graphic 2 */}
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 right-12 text-brewed-accent/20 pointer-events-none hidden md:block"
      >
        <Coffee className="w-20 h-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy Content (Tavern Coffee slideLeft entrance) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Pill */}
            {/* <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brewed-cream-dark/80 border border-brewed-border text-xs font-bold tracking-wider text-brewed-brown uppercase mb-6 shadow-soft-sm"
            > */}
              {/* <Sparkles className="w-3.5 h-3.5 text-brewed-accent" /> */}
              {/* <span>Specialty coffee, without the intimidation</span> */}
            {/* </motion.div> */}

            {/* Main Editorial Headline */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-heading font-extrabold leading-[1.05] tracking-tight text-brewed-dark mb-6">
              Coffee that <br className="hidden sm:inline" />
              <span className="text-brewed-brown relative inline-block">
                earns your morning.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brewed-accent/40" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 3 150 3 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-brewed-muted max-w-xl leading-relaxed mb-8">
              Discover carefully selected beans, simple brew guides, and coffee that fits the way you actually drink it.
            </p>

            {/* Action Buttons & Subtext */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
              <a
                href="#collection"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-3 bg-brewed-dark text-brewed-cream hover:bg-brewed-brown px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-soft-md hover:shadow-soft-lg group focus:outline-none focus:ring-2 focus:ring-brewed-accent"
              >
                <span>Explore coffee</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>

              <button
                onClick={onBuildBrewClick}
                className="inline-flex items-center justify-center gap-2 bg-brewed-card border border-brewed-border hover:bg-brewed-cream-dark text-brewed-dark px-6 py-4 rounded-full text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brewed-accent shadow-soft-sm hover:shadow-soft-md"
              >
                <Compass className="w-4 h-4 text-brewed-accent" />
                <span>Build your brew</span>
              </button>
            </div>

            {/* Subtle Reassurance */}
            {/* <div className="inline-flex items-center gap-2 text-xs font-medium text-brewed-muted/90 bg-brewed-cream-dark/40 px-3 py-1.5 rounded-md border border-brewed-border/40">
              <ShieldCheck className="w-3.5 h-3.5 text-brewed-brown" />
              <span>No coffee expertise required.</span>
            </div> */}
          </motion.div>

          {/* Right Hero Product Composition Visual (Tavern Coffee slideRight entrance) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative cursor-pointer group w-full max-w-[440px]"
            >
              {/* Soft Ambient Card Container */}
              {/* <div className="relative rounded-3xl bg-brewed-card p-4 sm:p-6 border border-brewed-border shadow-soft-lg transition-all duration-500 overflow-hidden"> */}
                
                {/* Background Editorial Tag */}
                {/* <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-brewed-brown bg-brewed-cream-dark px-2.5 py-1 rounded-full border border-brewed-border">
                    House No. 01
                  </span>
                  <span className="text-xs font-medium text-brewed-muted">Colombia</span>
                </div> */}

                {/* Animated Packaging Visual */}
                <div className="relative pt-8 pb-4 flex justify-center items-center min-h-[360px] sm:min-h-[400px]">
                  <motion.img
                    src="/images/hero-bag.png"
                    alt="Brewed House No. 01 Specialty Coffee Bag Packaging"
                    className="w-[400px] sm:w-[650px] h-auto object-contain drop-shadow-2xl z-10 transition-transform duration-500 ease-out"
                    // animate={{
                    //   y: isHovered ? -14 : 0,
                    //   rotate: isHovered ? 2.5 : 0,
                    //   scale: isHovered ? 1.03 : 1,
                    // }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  {/* Soft Dynamic Shadow */}
                  <motion.div
                    className="absolute bottom-6 w-[200px] h-[18px] bg-brewed-dark/15 rounded-full blur-md z-0"
                    animate={{
                      scaleX: isHovered ? 1.15 : 1,
                      opacity: isHovered ? 0.25 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Micro Interaction Reveal: Tasting Notes Floating Badge */}
                <motion.div
                  initial={{ opacity: 0.9, y: 0 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.9,
                    y: isHovered ? -6 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 p-4 rounded-2xl bg-brewed-cream border border-brewed-border shadow-soft-sm flex items-center justify-between z-20 relative"
                >
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-brewed-muted">
                      Tasting Notes
                    </div>
                    <div className="text-sm font-bold text-brewed-dark font-heading mt-0.5">
                      Chocolate · Caramel · Almond
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-bold text-brewed-cream bg-brewed-brown px-2.5 py-1 rounded-full">
                      Medium Roast
                    </span>
                  </div>
                </motion.div>
              {/* </div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    
  );
}
