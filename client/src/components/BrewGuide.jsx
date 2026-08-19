import React, { useState, useRef } from 'react';
import { brewRatios } from '../data/coffee.js';

import {
  Sparkles,
  Sliders,
  Droplets,
  Timer,
  Thermometer,
  Info,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';


export default function BrewGuide() {

  // ============================================================
  // STATE
  // ============================================================

  const [selectedMethod, setSelectedMethod] = useState('Pour Over');
  const [activeStep, setActiveStep] = useState(0);

  const stepsSectionRef = useRef(null);


  // ============================================================
  // BREW METHODS
  // ============================================================

  const methods = [
    'Pour Over',
    'French Press',
    'Espresso',
  ];


  // ============================================================
  // CURRENT RECIPE
  // ============================================================

  const recipe = brewRatios[selectedMethod];


  // ============================================================
  // BREWING STEPS
  // ============================================================

  const steps = [
    {
      number: '01',
      title: 'Grind',
      description:
        'Choose the grind size that matches your brew method. Consistency matters more than perfection.',
    },

    {
      number: '02',
      title: 'Brew',
      description:
        'Follow a simple ratio and timing guide. Pour smoothly to extract even, rich flavor.',
    },

    {
      number: '03',
      title: 'Enjoy',
      description:
        'Taste your cup cleanly. Adjust your next brew based purely on what tastes good to you.',
    },
  ];


  // ============================================================
  // SCROLL PROGRESS
  // ============================================================

  const { scrollYProgress } = useScroll({
    target: stepsSectionRef,
    offset: ['start start', 'end end'],
  });


  useMotionValueEvent(
    scrollYProgress,
    'change',
    (progress) => {

      const index = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      setActiveStep(index);

    }
  );


  return (

    <section
      id="brew-guide"
      className="
        relative
        bg-brewed-cream
        border-t
        border-brewed-border/60
      "
    >


      {/* ==========================================================
          HEADER
      ========================================================== */}

      <div
        className="
          pt-20
          pb-10
          lg:pt-28
          lg:pb-14
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            margin: '-50px',
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            text-center
            max-w-2xl
            mx-auto
          "
        >

          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-brewed-cream-dark
              border
              border-brewed-border
              text-xs
              font-bold
              tracking-wider
              text-brewed-brown
              uppercase
              mb-3
            "
          >

            <Sparkles className="w-3.5 h-3.5" />

            <span>
              Simple Rituals
            </span>

          </div>


          {/* Heading */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-heading
              font-extrabold
              text-brewed-dark
              tracking-tight
            "
          >
            Your coffee. Your ritual.
          </h2>


          {/* Description */}

          <p
            className="
              mt-3
              text-base
              sm:text-lg
              text-brewed-muted
            "
          >
            Three simple steps to unlock great flavor at home
            every morning.
          </p>

        </motion.div>

      </div>


      {/* ==========================================================
          FULL WIDTH SCROLL STORY
      ========================================================== */}

      <div
        ref={stepsSectionRef}
        className="
          relative
          h-[320vh]
        "
      >


        {/* ========================================================
            STICKY VIEWPORT
        ======================================================== */}

        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
            flex
            items-center
            justify-center
            bg-brewed-cream
          "
        >


          {/* ======================================================
              BACKGROUND DECORATION
          ====================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 3, 0],
            }}

            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="
              absolute
              w-[500px]
              h-[500px]
              sm:w-[700px]
              sm:h-[700px]
              lg:w-[900px]
              lg:h-[900px]
              rounded-full
              bg-brewed-cream-dark/50
              pointer-events-none
            "
          />


          {/* ======================================================
              LEFT DECORATIVE BEAN
          ====================================================== */}

          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [-8, 8, -8],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="
              absolute
              top-[15%]
              left-[5%]
              w-20
              h-12
              rounded-[50%]
              bg-brewed-brown/10
              rotate-[-25deg]
              hidden
              sm:block
              pointer-events-none
            "
          />


          {/* ======================================================
              RIGHT DECORATIVE BEAN
          ====================================================== */}

          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [8, -8, 8],
            }}

            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}

            className="
              absolute
              bottom-[15%]
              right-[5%]
              w-24
              h-14
              rounded-[50%]
              bg-brewed-brown/10
              rotate-[20deg]
              hidden
              sm:block
              pointer-events-none
            "
          />


          {/* ======================================================
              MAIN CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-10
              w-full
              h-full
              flex
              items-center
              justify-center
              px-4
              sm:px-8
              lg:px-12
            "
          >

            <AnimatePresence mode="wait">

              {/* ==================================================
                  STEP CARD
              ================================================== */}

              <motion.div
                key={activeStep}

                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  y: -80,
                  scale: 0.96,
                }}

                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="
                  relative
                  w-full
                  min-h-[70vh]
                  lg:min-h-[76vh]
                  rounded-[2rem]
                  sm:rounded-[3rem]
                  bg-brewed-card
                  border
                  border-brewed-border
                  shadow-soft-lg
                  overflow-hidden
                  flex
                  items-center
                  justify-center
                "
              >


                {/* =================================================
                    COFFEE IMAGE BACKGROUND
                ================================================= */}

                <motion.img
                  src="/images/BREW BG1.png"
                  alt=""
                  aria-hidden="true"

                  initial={{
                    scale: 1.05,
                    opacity: 0,
                  }}

                  animate={{
                    scale: 1,
                    opacity: 0.13,
                  }}

                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    pointer-events-none
                    select-none
                  "
                />


                {/* =================================================
                    CREAM OVERLAY
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-brewed-cream/2
                    pointer-events-none
                  "
                />


                {/* =================================================
                    SOFT GRADIENT
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-brewed-cream/0
                    via-transparent
                    to-brewed-cream/70
                    pointer-events-none
                  "
                />


                {/* =================================================
                    HUGE STEP NUMBER
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -100,
                  }}

                  animate={{
                    opacity: 1,
                    x: 0,
                  }}

                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  className="
                    absolute
                    left-[-50px]
                    sm:left-[-30px]
                    lg:left-[-50px]
                    top-[10%]
                    text-[180px]
                    sm:text-[280px]
                    lg:text-[420px]
                    font-heading
                    font-extrabold
                    leading-none
                    text-brewed-brown/[0.055]
                    select-none
                    pointer-events-none
                    z-[2]
                  "
                >
                  {steps[activeStep].number}
                </motion.div>


                {/* =================================================
                    MAIN STEP CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    max-w-4xl
                    w-full
                    text-center
                    px-6
                    sm:px-12
                    lg:px-20
                  "
                >


                  {/* ===============================================
                      STEP LABEL
                  =============================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                    }}

                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-brewed-cream/90
                      backdrop-blur-sm
                      border
                      border-brewed-border
                      text-[10px]
                      sm:text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-brewed-brown
                      mb-8
                      shadow-sm
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-brewed-accent
                      "
                    />

                    Step {steps[activeStep].number}

                  </motion.div>


                  {/* ===============================================
                      TITLE
                  =============================================== */}

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.65,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    className="
                      text-[3.5rem]
                      sm:text-7xl
                      lg:text-9xl
                      font-heading
                      font-extrabold
                      text-brewed-dark
                      tracking-[-0.05em]
                      leading-[0.9]
                    "
                  >
                    {steps[activeStep].title}
                  </motion.h3>


                  {/* ===============================================
                      DESCRIPTION
                  =============================================== */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}

                    className="
                      max-w-2xl
                      mx-auto
                      mt-7
                      text-base
                      sm:text-lg
                      lg:text-xl
                      leading-relaxed
                      text-brewed-muted
                    "
                  >
                    {steps[activeStep].description}
                  </motion.p>


                  {/* ===============================================
                      PROGRESS
                  =============================================== */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      mt-12
                    "
                  >

                    {steps.map((step, index) => (

                      <motion.div
                        key={step.number}

                        animate={{
                          width:
                            index === activeStep
                              ? 70
                              : 10,

                          opacity:
                            index === activeStep
                              ? 1
                              : 0.35,
                        }}

                        transition={{
                          duration: 0.5,
                          ease: 'easeOut',
                        }}

                        className="
                          h-2
                          rounded-full
                          bg-brewed-brown
                        "
                      />

                    ))}

                  </div>


                  {/* ===============================================
                      SCROLL HINT
                  =============================================== */}

                  {activeStep < steps.length - 1 && (

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}

                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}

                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}

                      className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        gap-3
                        text-[10px]
                        sm:text-xs
                        uppercase
                        tracking-[0.25em]
                        font-bold
                        text-brewed-muted
                      "
                    >

                      <span>
                        Scroll to continue
                      </span>

                      <span className="text-lg">
                        ↓
                      </span>

                    </motion.div>

                  )}

                </div>


                {/* =================================================
                    ROTATING CIRCLE
                ================================================= */}

                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}

                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}

                  className="
                    absolute
                    -right-20
                    -bottom-20
                    w-56
                    h-56
                    rounded-full
                    border
                    border-brewed-border/50
                    z-[3]
                    pointer-events-none
                  "
                />


                {/* Circle Dot */}

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}

                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}

                  className="
                    absolute
                    right-8
                    bottom-8
                    w-3
                    h-3
                    rounded-full
                    bg-brewed-accent
                    z-[4]
                  "
                />

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>


      {/* ==========================================================
          INTERACTIVE BREW RATIO
      ========================================================== */}

      <div
        className="
          pb-20
          lg:pb-28
          px-4
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            bg-brewed-card
            rounded-3xl
            border
            border-brewed-border
            shadow-soft-lg
            p-6
            sm:p-10
            lg:p-12
            overflow-hidden
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-10
              items-center
            "
          >


            {/* ======================================================
                METHOD SELECTOR
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                margin: '-50px',
              }}

              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="
                lg:col-span-5
                flex
                flex-col
                justify-center
              "
            >

              <span
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-widest
                  text-brewed-brown
                  mb-2
                "
              >
                Brew Method Selector
              </span>


              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-heading
                  font-bold
                  text-brewed-dark
                  mb-4
                "
              >
                Interactive Brew Ratio
              </h3>


              <p
                className="
                  text-sm
                  text-brewed-muted
                  mb-6
                  leading-relaxed
                "
              >
                Select your brew tool to preview example coffee,
                water, and extraction timing targets.
              </p>


              {/* Method Buttons */}

              <div className="flex flex-col gap-3">

                {methods.map((method) => {

                  const isActive =
                    selectedMethod === method;

                  return (

                    <button
                      key={method}

                      onClick={() =>
                        setSelectedMethod(method)
                      }

                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        p-4
                        rounded-2xl
                        text-left
                        transition-all
                        duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-brewed-accent

                        ${
                          isActive
                            ? 'bg-brewed-brown text-brewed-cream shadow-soft-md scale-[1.01]'
                            : 'bg-brewed-cream hover:bg-brewed-cream-dark text-brewed-dark border border-brewed-border'
                        }
                      `}
                    >

                      <span
                        className="
                          text-base
                          font-bold
                          font-heading
                        "
                      >
                        {method}
                      </span>


                      <span
                        className={`
                          text-xs
                          font-semibold
                          px-2.5
                          py-1
                          rounded-full

                          ${
                            isActive
                              ? 'bg-brewed-cream/20 text-brewed-cream'
                              : 'bg-brewed-cream-dark text-brewed-muted'
                          }
                        `}
                      >
                        {brewRatios[method].grind}
                      </span>

                    </button>

                  );

                })}

              </div>


              {/* Info */}

              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-2
                  text-xs
                  text-brewed-muted
                  bg-brewed-cream/70
                  p-3
                  rounded-xl
                  border
                  border-brewed-border/60
                "
              >

                <Info
                  className="
                    w-4
                    h-4
                    text-brewed-accent
                    shrink-0
                    mt-0.5
                  "
                />

                <span>
                  Values are example starting ratios. Adjust
                  grind size and water temperature to fit your
                  personal taste preference.
                </span>

              </div>

            </motion.div>


            {/* ======================================================
                RECIPE DASHBOARD
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                margin: '-50px',
              }}

              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}

              className="
                lg:col-span-7
                bg-brewed-cream
                rounded-3xl
                p-6
                sm:p-8
                border
                border-brewed-border
                shadow-soft-sm
                relative
              "
            >

              {/* Dashboard Header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                  pb-4
                  border-b
                  border-brewed-border
                "
              >

                <div>

                  <span
                    className="
                      text-xs
                      font-bold
                      text-brewed-muted
                      uppercase
                      tracking-wider
                    "
                  >
                    Target Recipe
                  </span>


                  <h4
                    className="
                      text-xl
                      font-heading
                      font-extrabold
                      text-brewed-dark
                    "
                  >
                    {selectedMethod}
                  </h4>

                </div>


                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-brewed-card
                    border
                    border-brewed-border
                    flex
                    items-center
                    justify-center
                    text-brewed-brown
                  "
                >
                  <Sliders className="w-6 h-6" />
                </div>

              </div>


              {/* Recipe */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={selectedMethod}

                  initial={{
                    opacity: 0,
                    y: 12,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    y: -12,
                  }}

                  transition={{
                    duration: 0.3,
                  }}
                >

                  {/* Recipe Stats */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-3
                      gap-4
                      mb-8
                    "
                  >


                    {/* Coffee Dose */}

                    <div
                      className="
                        bg-brewed-card
                        p-5
                        rounded-2xl
                        border
                        border-brewed-border/80
                        text-center
                      "
                    >

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-brewed-brown/10
                          text-brewed-brown
                          mx-auto
                          flex
                          items-center
                          justify-center
                          mb-2
                        "
                      >
                        <Sparkles className="w-4 h-4" />
                      </div>


                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-brewed-muted
                          block
                          mb-1
                        "
                      >
                        Coffee Dose
                      </span>


                      <span
                        className="
                          text-2xl
                          sm:text-3xl
                          font-heading
                          font-extrabold
                          text-brewed-dark
                        "
                      >
                        {recipe.coffee}
                      </span>

                    </div>


                    {/* Water */}

                    <div
                      className="
                        bg-brewed-card
                        p-5
                        rounded-2xl
                        border
                        border-brewed-border/80
                        text-center
                      "
                    >

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-brewed-brown/10
                          text-brewed-brown
                          mx-auto
                          flex
                          items-center
                          justify-center
                          mb-2
                        "
                      >
                        <Droplets className="w-4 h-4" />
                      </div>


                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-brewed-muted
                          block
                          mb-1
                        "
                      >
                        Water Volume
                      </span>


                      <span
                        className="
                          text-2xl
                          sm:text-3xl
                          font-heading
                          font-extrabold
                          text-brewed-dark
                        "
                      >
                        {recipe.water}
                      </span>

                    </div>


                    {/* Brew Time */}

                    <div
                      className="
                        bg-brewed-card
                        p-5
                        rounded-2xl
                        border
                        border-brewed-border/80
                        text-center
                      "
                    >

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-brewed-brown/10
                          text-brewed-brown
                          mx-auto
                          flex
                          items-center
                          justify-center
                          mb-2
                        "
                      >
                        <Timer className="w-4 h-4" />
                      </div>


                      <span
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-brewed-muted
                          block
                          mb-1
                        "
                      >
                        Brew Time
                      </span>


                      <span
                        className="
                          text-2xl
                          sm:text-3xl
                          font-heading
                          font-extrabold
                          text-brewed-dark
                        "
                      >
                        {recipe.time}
                      </span>

                    </div>

                  </div>


                  {/* Temperature + Tip */}

                  <div
                    className="
                      bg-brewed-card/90
                      rounded-2xl
                      p-4
                      border
                      border-brewed-border/60
                      flex
                      flex-col
                      sm:flex-row
                      items-start
                      sm:items-center
                      justify-between
                      gap-3
                      text-xs
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <Thermometer
                        className="
                          w-4
                          h-4
                          text-brewed-brown
                        "
                      />

                      <span
                        className="
                          font-semibold
                          text-brewed-dark
                        "
                      >
                        Temp: {recipe.temp}
                      </span>

                    </div>


                    <div
                      className="
                        text-brewed-muted
                      "
                    >

                      <span
                        className="
                          font-semibold
                          text-brewed-dark
                        "
                      >
                        Tip:
                      </span>{' '}

                      {recipe.tip}

                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}