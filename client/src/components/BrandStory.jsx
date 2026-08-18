import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-20 lg:py-32 bg-brewed-cream-dark/60 border-t border-brewed-border/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Asymmetrical Photography Visual — slideLeft */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-brewed-border bg-brewed-card">
              <img
                src="/images/brand-story.png"
                alt="Brewed specialty coffee hands holding warm cup story visual"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brewed-dark/40 via-transparent to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-brewed-card/90 backdrop-blur-md border border-brewed-border/80 text-brewed-dark shadow-soft-md"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-brewed-brown uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-brewed-accent" />
                  Our Purpose
                </div>
                <p className="text-sm font-semibold font-heading text-brewed-dark">
                  Exceptional coffee made transparent, warm, and approachable.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Editorial Copy — slideRight */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brewed-cream border border-brewed-border text-xs font-bold tracking-wider text-brewed-brown uppercase mb-6">
              <Heart className="w-3.5 h-3.5 text-brewed-accent fill-brewed-accent/20" />
              <span>Behind Brewed</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brewed-dark tracking-tight leading-[1.1] mb-6">
              Coffee should feel personal.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-brewed-muted leading-relaxed">
              <p>
                Brewed was created for people who love coffee but don't want to spend their mornings decoding tasting notes, roast charts, and complicated equipment guides.
              </p>
              <p className="text-brewed-dark font-medium border-l-2 border-brewed-brown pl-4 italic">
                "We keep the good stuff and remove the unnecessary complexity."
              </p>
              <p>
                Whether you prefer a rich dark cocoa espresso or a bright pour-over, coffee should fit your morning ritual smoothly — without demanding a barista certification.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
