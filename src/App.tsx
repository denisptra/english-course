import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ScheduleSection from './components/ScheduleSection';
import ProcedureSection from './components/ProcedureSection';
// import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <ProcedureSection />
      {/* <FAQSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;