import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', label: t('navigation.home') },
    { key: 'about', label: t('navigation.about') },
    { key: 'programs', label: t('navigation.programs') },
    { key: 'schedule', label: t('navigation.schedule') },
    { key: 'contact', label: t('navigation.contact') }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const changeLanguage = (lang: 'en' | 'id') => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#">
              <img src="/Logo-1.png" alt="Base of Basic English Course" className="h-10 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-3">
              {menuItems.map((item) => (
                <button key={item.key} onClick={() => scrollToSection(item.key)} className="text-[#494949] hover:text-[#20438F] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  {item.label}
                </button>
              ))}
            </div>
            {/* Language Switcher */}
            <div className="ml-4 flex items-center space-x-1 border-l pl-4">
               <button onClick={() => changeLanguage('id')} className={`px-2 py-1 text-sm font-bold rounded ${i18n.language === 'id' ? 'text-[#20438F]' : 'text-gray-500'}`}>ID</button>
               <span className='text-gray-300'>|</span>
               <button onClick={() => changeLanguage('en')} className={`px-2 py-1 text-sm font-bold rounded ${i18n.language === 'en' ? 'text-[#20438F]' : 'text-gray-500'}`}>EN</button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1E1E1E] hover:text-[#20438F] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <button key={item.key} onClick={() => scrollToSection(item.key)} className="text-[#1E1E1E] hover:text-[#20438F] block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200">
                  {item.label}
                </button>
              ))}
               {/* Mobile Language Switcher */}
               <div className="pt-2 mt-2 border-t flex items-center space-x-2 px-3">
                  <button onClick={() => changeLanguage('id')} className={`px-3 py-1 text-base font-bold rounded ${i18n.language === 'id' ? 'text-white bg-[#20438F]' : 'text-gray-600'}`}>Indonesia</button>
                  <button onClick={() => changeLanguage('en')} className={`px-3 py-1 text-base font-bold rounded ${i18n.language === 'en' ? 'text-white bg-[#20438F]' : 'text-gray-600'}`}>English</button>
               </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;