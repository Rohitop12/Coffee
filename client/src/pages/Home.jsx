import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';

import ProductIntro from '../components/ProductIntro.jsx';
import ProductShowcase from '../components/ProductShowcase.jsx';
import CoffeeCollection from '../components/CoffeeCollection.jsx';
import CoffeeModal from '../components/CoffeeModal.jsx';
import BrewGuide from '../components/BrewGuide.jsx';
import BrandStory from '../components/BrandStory.jsx';
import Features from '../components/Features.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const [activeModalCoffee, setActiveModalCoffee] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brewed-cream text-brewed-dark flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenFinder={() => scrollToSection('finder')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero
          onExploreClick={() => scrollToSection('collection')}
          onBuildBrewClick={() => scrollToSection('finder')}
        />

        {/* Bean Border Divider */}
        <div className="w-full overflow-hidden leading-none">
          <img
            src="/images/bean_border-1.png"
            alt="Decorative coffee bean border"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Section 3: Product Intro & Filter Chips */}
        {/* <ProductIntro onSelectFilter={() => scrollToSection('finder')} /> */}

        {/* Section 4: Interactive Coffee Finder Showcase */}
        {/* <ProductShowcase onSelectCoffee={(coffee) => setActiveModalCoffee(coffee)} /> */}

        {/* Section 5: Coffee Collection Product Grid */}
        <CoffeeCollection onSelectCoffee={(coffee) => setActiveModalCoffee(coffee)} />

        {/* Section 6: Interactive Brew Guide */}
        <BrewGuide />

        {/* Section 7: Editorial Brand Story */}
        <BrandStory />

        {/* Section 8: Why Brewed Feature Blocks */}
        <Features />

        {/* Section 9: Final Call to Action */}
        <FinalCTA
          onExploreClick={() => scrollToSection('collection')}
          onBuildBrewClick={() => scrollToSection('finder')}
        />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Detail Quick View Modal */}
      {activeModalCoffee && (
        <CoffeeModal
          coffee={activeModalCoffee}
          onClose={() => setActiveModalCoffee(null)}
        />
      )}
    </div>
  );
}
