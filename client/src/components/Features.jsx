import React from 'react';
import {
  Sparkles,
  Layers,
  RefreshCcw,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      number: '01',
      icon: Sparkles,
      title: 'Thoughtfully Selected',
      description:
        'Coffee chosen around flavor clarity, inherent sweetness, and everyday drinkability.',
    },
    {
      number: '02',
      icon: Layers,
      title: 'Simple by Design',
      description:
        'No unnecessary complexity between you and a genuinely satisfying cup in the morning.',
    },
    {
      number: '03',
      icon: Compass,
      title: 'Built for Your Ritual',
      description:
        'Find coffee that works effortlessly with the equipment you already have in your kitchen.',
    },
    {
      number: '04',
      icon: RefreshCcw,
      title: 'Always Discovering',
      description:
        'Explore curated single-origin harvests, roast profiles, and distinct flavor notes.',
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-brewed-cream
        text-brewed-dark
        border-t
        border-brewed-border/60
        py-24
        lg:py-36
      "
    >

      {/* ============================================================
          SUBTLE BACKGROUND DECORATION
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -top-48
            -right-48
            w-[600px]
            h-[600px]
            rounded-full
            border
            border-brewed-brown/[0.06]
          "
        />

        <div
          className="
            absolute
            -bottom-60
            -left-48
            w-[700px]
            h-[700px]
            rounded-full
            border
            border-brewed-brown/[0.05]
          "
        />

      </div>


      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* ==========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-80px',
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-4xl
            mb-20
            lg:mb-28
          "
        >

          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              border
              border-brewed-border
              bg-brewed-cream-dark
              text-brewed-brown
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              mb-6
            "
          >

            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-brewed-accent
              "
            />

            Why Brewed

          </div>


          {/* Main heading */}

          <h2
            className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-heading
              font-extrabold
              tracking-[-0.06em]
              leading-[0.9]
              text-brewed-dark
            "
          >
            Better coffee.
            <br />

            <span className="text-brewed-brown/35">
              Less complication.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              sm:text-lg
              leading-relaxed
              text-brewed-muted
            "
          >
            Everything we do comes down to one idea:
            making genuinely good coffee easier to discover,
            brew, and enjoy.
          </p>

        </motion.div>


        {/* ==========================================================
            FEATURE GRID
        ========================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            border-t
            border-brewed-border
          "
        >

          {/* ========================================================
              FEATURE 01
          ======================================================== */}

          <FeatureItem
            item={features[0]}
            className="
              lg:col-span-5
              lg:border-r
              lg:border-b-0
            "
            delay={0}
          />


          {/* ========================================================
              CENTER VISUAL
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: '-60px',
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              hidden
              lg:flex
              lg:col-span-2
              items-center
              justify-center
              border-r
              border-brewed-border
            "
          >

            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                w-28
                h-28
                rounded-full
                border
                border-brewed-border
                flex
                items-center
                justify-center
                relative
                bg-brewed-card
              "
            >

              <div
                className="
                  absolute
                  inset-3
                  rounded-full
                  bg-brewed-brown
                  flex
                  items-center
                  justify-center
                  shadow-soft-sm
                "
              >

                <span
                  className="
                    text-2xl
                    filter
                  "
                >
                  <img src="/images/hero-bag.png" alt="" />
                </span>

              </div>

            </motion.div>

          </motion.div>


          {/* ========================================================
              FEATURE 02
          ======================================================== */}

          <FeatureItem
            item={features[1]}
            className="
              lg:col-span-5
            "
            delay={0.1}
          />


          {/* ========================================================
              FEATURE 03
          ======================================================== */}

          <FeatureItem
            item={features[2]}
            className="
              lg:col-span-5
              lg:border-r
            "
            delay={0.2}
          />


          {/* ========================================================
              FEATURE 04
          ======================================================== */}

          <FeatureItem
            item={features[3]}
            className="
              lg:col-span-7
            "
            delay={0.3}
          />

        </div>


        {/* ==========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: '-60px',
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-end
            justify-between
            gap-8
            pt-12
          "
        >

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-brewed-muted
                mb-3
              "
            >
              The Brewed philosophy
            </p>

            <p
              className="
                text-2xl
                sm:text-3xl
                font-heading
                font-bold
                max-w-xl
                text-brewed-dark
              "
            >
              Good coffee should fit
              <span className="text-brewed-brown">
                {' '}into your life.
              </span>
            </p>

          </div>


          <motion.div
            whileHover={{
              x: 5,
            }}
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-brewed-muted
            "
          >

            Made for better mornings

            <ArrowUpRight className="w-4 h-4" />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}


/* ================================================================
   FEATURE ITEM
================================================================ */

function FeatureItem({
  item,
  className = '',
  delay = 0,
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-60px',
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        min-h-[280px]
        sm:min-h-[320px]
        p-7
        sm:p-10
        lg:p-12
        border-b
        border-brewed-border
        overflow-hidden
        ${className}
      `}
    >

      {/* ==========================================================
          HOVER BACKGROUND
      ========================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-brewed-cream-dark/0
          group-hover:bg-brewed-cream-dark/60
          transition-colors
          duration-500
        "
      />


      {/* ==========================================================
          CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-between
        "
      >

        {/* Top */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-12
          "
        >

          {/* Icon */}

          <div
            className="
              w-12
              h-12
              rounded-2xl
              border
              border-brewed-border
              bg-brewed-card
              flex
              items-center
              justify-center
              text-brewed-brown
              group-hover:bg-brewed-brown
              group-hover:text-brewed-cream
              group-hover:scale-110
              transition-all
              duration-300
            "
          >

            <Icon className="w-5 h-5" />

          </div>


          {/* Number */}

          <span
            className="
              text-xs
              font-bold
              tracking-[0.2em]
              text-brewed-brown/30
            "
          >
            {item.number}
          </span>

        </div>


        {/* Bottom */}

        <div>

          <h3
            className="
              text-2xl
              sm:text-3xl
              font-heading
              font-bold
              text-brewed-dark
              tracking-tight
              mb-4
            "
          >
            {item.title}
          </h3>


          <p
            className="
              max-w-md
              text-sm
              sm:text-base
              leading-relaxed
              text-brewed-muted
              group-hover:text-brewed-dark/70
              transition-colors
              duration-300
            "
          >
            {item.description}
          </p>

        </div>

      </div>


      {/* ==========================================================
          ARROW
      ========================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -5,
          y: 5,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        className="
          absolute
          right-8
          bottom-8
          text-brewed-accent
        "
      >

        <ArrowUpRight className="w-5 h-5" />

      </motion.div>

    </motion.div>
  );
}