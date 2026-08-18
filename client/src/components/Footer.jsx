import React from 'react';
import { Coffee, Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brewed-cream border-t border-brewed-border text-brewed-dark">

      {/* ============================================================
          FOOTER CONTENT
      ============================================================ */}

      <div className="relative z-10 py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brewed-border/60">

            {/* ======================================================
                BRAND COLUMN
            ====================================================== */}

            <div className="md:col-span-5 flex flex-col items-start">

              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-2
                  text-2xl
                  font-bold
                  tracking-tight
                  text-brewed-dark
                  mb-4
                "
              >

                <span
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-brewed-brown
                    text-brewed-cream
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Coffee className="w-4 h-4" />
                </span>

                <span
                  className="
                    font-heading
                    font-extrabold
                    tracking-wider
                  "
                >
                  BREWED
                </span>

              </a>


              <p
                className="
                  text-sm
                  text-brewed-muted
                  max-w-sm
                  leading-relaxed
                  mb-6
                "
              >
                A modern specialty coffee brand focused on making
                exceptional coffee easier to discover, understand,
                and enjoy every morning.
              </p>


              {/* Social Icons */}

              <div className="flex items-center gap-3">

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Brewed on Instagram"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-brewed-cream-dark
                    border
                    border-brewed-border
                    flex
                    items-center
                    justify-center
                    text-brewed-dark
                    hover:text-brewed-brown
                    hover:bg-brewed-card
                    transition-colors
                  "
                >
                  <Instagram className="w-4 h-4" />
                </a>


                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Brewed on X"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-brewed-cream-dark
                    border
                    border-brewed-border
                    flex
                    items-center
                    justify-center
                    text-brewed-dark
                    hover:text-brewed-brown
                    hover:bg-brewed-card
                    transition-colors
                  "
                >
                  <Twitter className="w-4 h-4" />
                </a>


                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Brewed GitHub Repository"
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-brewed-cream-dark
                    border
                    border-brewed-border
                    flex
                    items-center
                    justify-center
                    text-brewed-dark
                    hover:text-brewed-brown
                    hover:bg-brewed-card
                    transition-colors
                  "
                >
                  <Github className="w-4 h-4" />
                </a>

              </div>

            </div>


            {/* ======================================================
                NAVIGATION
            ====================================================== */}

            <div className="md:col-span-4">

              <h4
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-widest
                  text-brewed-brown
                  mb-4
                "
              >
                Navigation
              </h4>

              <ul
                className="
                  space-y-2.5
                  text-sm
                  font-medium
                  text-brewed-muted
                "
              >

                <li>
                  <a
                    href="#collection"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Shop Collection
                  </a>
                </li>

                <li>
                  <a
                    href="#intro"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Coffee Profiles
                  </a>
                </li>

                <li>
                  <a
                    href="#brew-guide"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Brew Guide
                  </a>
                </li>

                <li>
                  <a
                    href="#story"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Our Story
                  </a>
                </li>

                <li>
                  <a
                    href="#finder"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Find Your Brew
                  </a>
                </li>

              </ul>

            </div>


            {/* ======================================================
                LEGAL
            ====================================================== */}

            <div className="md:col-span-3">

              <h4
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-widest
                  text-brewed-brown
                  mb-4
                "
              >
                Legal & Info
              </h4>

              <ul
                className="
                  space-y-2.5
                  text-sm
                  font-medium
                  text-brewed-muted
                "
              >

                <li>
                  <a
                    href="#"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Shipping & Returns
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brewed-dark transition-colors"
                  >
                    Contact Support
                  </a>
                </li>

              </ul>

            </div>

          </div>


          {/* ========================================================
              BOTTOM LINE
          ======================================================== */}

          <div
            className="
              relative
              z-20
              pt-8
              pb-20
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              text-xs
              text-brewed-muted
              gap-4
            "
          >

            <p className='text-bold'>
              © 2026 Brewed. Made for better mornings.
            </p>

            <p className="text-brewed-brown font-semibold">
              Specialty coffee, without the intimidation.
            </p>

          </div>

        </div>

      </div>


      {/* ============================================================
          COFFEE BEAN IMAGE
          PLACE IMAGE AT VERY BOTTOM
      ============================================================ */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[150px]
          sm:h-[190px]
          lg:h-[230px]
          pointer-events-none
          overflow-hidden
          opacity-[0.16]
        "
      >

        <img
          src="/images/bean_border-1.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[1100px]
            sm:w-[1500px]
            lg:w-[2000px]
            max-w-none
            h-auto
            object-contain
          "
        />

      </div>


      {/* ============================================================
          SOFT FADE ABOVE BEANS
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-full
          h-[180px]
          z-10
          bg-gradient-to-t
          from-brewed-cream
          via-brewed-cream/90
          to-transparent
        "
      />

    </footer>
  );
}