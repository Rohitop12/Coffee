import React, { useState, useEffect } from 'react';
import { fetchCoffees } from '../services/api.js';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Flame,
  Coffee,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CoffeeCollection({ onSelectCoffee }) {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadData = async () => {
    setLoading(true);

    const result = await fetchCoffees();

    setCoffees(result.coffees || []);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
  if (coffees.length <= 1) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) =>
      prev === coffees.length - 1 ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, [coffees.length]);

  // --------------------------------
  // NEXT PRODUCT
  // --------------------------------
  const nextCoffee = () => {
    setCurrentIndex((prev) =>
      prev === coffees.length - 1 ? 0 : prev + 1
    );
  };

  // --------------------------------
  // PREVIOUS PRODUCT
  // --------------------------------
  const previousCoffee = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? coffees.length - 1 : prev - 1
    );
  };

  if (loading) {
    return (
      <section
        id="collection"
        className="py-20 lg:py-28 bg-brewed-cream-dark/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[500px] rounded-[2rem] bg-brewed-card animate-pulse border border-brewed-border" />
        </div>
      </section>
    );
  }

  if (!coffees.length) {
    return (
      <section
        id="collection"
        className="py-20 lg:py-28 bg-brewed-cream-dark/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-brewed-muted">
            No coffee available right now.
          </p>
        </div>
      </section>
    );
  }

  const coffee = coffees[currentIndex];

  return (
    <section
      id="collection"
      className="py-20 lg:py-28 bg-brewed-cream-dark/30 relative overflow-hidden border-t border-brewed-border/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --------------------------------
            SECTION HEADER
        -------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brewed-cream border border-brewed-border text-xs font-bold tracking-wider text-brewed-brown uppercase mb-3">
            <Coffee className="w-3.5 h-3.5" />
            Current Batch Releases
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brewed-dark tracking-tight">
            A small collection.
            <br />
            Carefully chosen.
          </h2>
        </motion.div>

        {/* --------------------------------
            FEATURED PRODUCT
        -------------------------------- */}
        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={coffee._id || coffee.name}
              initial={{
                opacity: 0,
                x: 80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                bg-brewed-card
                rounded-[2rem]
                border
                border-brewed-border
                overflow-hidden
                shadow-soft-lg
              "
            >

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

                {/* =================================
                    PRODUCT IMAGE
                ================================= */}
                <div
                  className="
                    relative
                    bg-brewed-cream
                    min-h-[380px]
                    lg:min-h-[520px]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    p-8
                    sm:p-12
                  "
                >

                  {/* Decorative background */}
                  <div
                    className="
                      absolute
                      w-[320px]
                      h-[320px]
                      sm:w-[420px]
                      sm:h-[420px]
                      rounded-full
                      bg-brewed-cream-dark/70
                    "
                  />

                  {/* Product number */}
                  <div className="
                    absolute
                    top-6
                    left-6
                    sm:top-8
                    sm:left-8
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-brewed-muted
                  ">
                    {String(currentIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(coffees.length).padStart(2, '0')}
                  </div>

                  {/* Product image */}
                  <motion.img
                    src={coffee.image}
                    alt={coffee.name}
                    className="
                      relative
                      z-10
                      w-full
                      max-w-[420px]
                      max-h-[420px]
                      object-contain
                      drop-shadow-[0_25px_30px_rgba(70,45,25,0.20)]
                    "
                    initial={{
                      scale: 0.9,
                      rotate: -3,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                </div>

                {/* =================================
                    PRODUCT INFORMATION
                ================================= */}
                <div
                  className="
                    p-7
                    sm:p-10
                    lg:p-14
                    flex
                    flex-col
                    justify-center
                  "
                >

                  {/* Label */}
                  <div className="
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-brewed-cream
                    border
                    border-brewed-border
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-brewed-brown
                    mb-6
                  ">
                    <span className="w-1.5 h-1.5 rounded-full bg-brewed-accent" />
                    Featured Coffee
                  </div>

                  {/* Product name */}
                  <h3 className="
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    font-heading
                    font-extrabold
                    text-brewed-dark
                    tracking-tight
                    leading-[0.95]
                  ">
                    {coffee.name}
                  </h3>

                  {/* Origin + Roast */}
                  <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    mt-5
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-brewed-muted
                  ">

                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brewed-accent" />
                      {coffee.origin}
                    </span>

                    <span className="text-brewed-border">
                      •
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-brewed-brown" />
                      {coffee.roast} Roast
                    </span>

                  </div>

                  {/* Description */}
                  <p className="
                    mt-6
                    text-base
                    sm:text-lg
                    leading-relaxed
                    text-brewed-muted
                    max-w-xl
                  ">
                    {coffee.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-brewed-border my-7" />

                  {/* Flavor notes */}
                  <div>
                    <p className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-brewed-muted
                      mb-3
                    ">
                      Flavor Profile
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {coffee.flavorNotes?.map((note) => (
                        <span
                          key={note}
                          className="
                            px-4
                            py-2
                            rounded-full
                            bg-brewed-cream
                            border
                            border-brewed-border
                            text-sm
                            font-semibold
                            text-brewed-dark
                          "
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    gap-4
                    mt-8
                  ">

                    <div>
                      <span className="text-xs text-brewed-muted uppercase tracking-wider">
                        From
                      </span>

                      <div className="
                        text-2xl
                        font-heading
                        font-extrabold
                        text-brewed-brown
                      ">
                        ₹{coffee.price}
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onSelectCoffee &&
                        onSelectCoffee(coffee)
                      }
                      className="
                        sm:ml-auto
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        px-6
                        py-3.5
                        rounded-2xl
                        bg-brewed-dark
                        text-brewed-cream
                        text-sm
                        font-bold
                        hover:bg-brewed-brown
                        transition-all
                        duration-300
                        group
                      "
                    >
                      View coffee

                      <ArrowRight
                        className="
                          w-4
                          h-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* =================================
              CAROUSEL CONTROLS
          ================================= */}
          <div className="
            flex
            items-center
            justify-between
            mt-6
          ">

            {/* Progress */}
            <div className="
              flex
              items-center
              gap-2
            ">
              {coffees.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to coffee ${index + 1}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === currentIndex
                        ? 'w-10 bg-brewed-brown'
                        : 'w-3 bg-brewed-border hover:bg-brewed-muted'
                    }
                  `}
                />
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex items-center gap-3">

              <button
                onClick={previousCoffee}
                aria-label="Previous coffee"
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-brewed-border
                  bg-brewed-card
                  flex
                  items-center
                  justify-center
                  text-brewed-dark
                  hover:bg-brewed-dark
                  hover:text-brewed-cream
                  transition-all
                  duration-300
                "
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextCoffee}
                aria-label="Next coffee"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-brewed-dark
                  text-brewed-cream
                  flex
                  items-center
                  justify-center
                  hover:bg-brewed-brown
                  transition-all
                  duration-300
                "
              >
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}