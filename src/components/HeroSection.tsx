import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="pt-16 bg-[#F5F7FA] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E1E1E] mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-[#20438F]">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#1E1E1E] mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/62xxxxxxxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#FFB800] text-[#1E1E1E] font-semibold rounded-lg hover:bg-[#e6a600] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="mr-2" size={20} />
              {t('hero.cta')}
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#20438F] mb-2">17+</div>
              <div className="text-[#1E1E1E]">{t('hero.stat_age')}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#20438F] mb-2">3</div>
              <div className="text-[#1E1E1E]">{t('hero.stat_programs')}</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#20438F] mb-2">100%</div>
              <div className="text-[#1E1E1E]">{t('hero.stat_beginner')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;