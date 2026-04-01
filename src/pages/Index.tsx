import { useState, useCallback } from 'react';
import MagicalCursor from '@/components/MagicalCursor';
import Navigation from '@/components/Navigation';
import WandReveal from '@/components/WandReveal';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  const handleRevealComplete = useCallback(() => {
    setShowContent(true);
  }, []);

  return (
    <>
      {/* Wand reveal intro animation */}
      <WandReveal onComplete={handleRevealComplete} />
      
      <div 
        className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Magical cursor effect - only on desktop */}
        <div className="hidden md:block">
          <MagicalCursor />
        </div>
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
