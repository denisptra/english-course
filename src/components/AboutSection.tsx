import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg text-[#494949] max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              {t('about.feature1_title')}
            </h3>
            <p className="text-[#494949]">
              {t('about.feature1_desc')}
            </p>
          </div>

          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              {t('about.feature2_title')}
            </h3>
            <p className="text-[#1E1E1E]">
              {t('about.feature2_desc')}
            </p>
          </div>

          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              {t('about.feature3_title')}
            </h3>
            <p className="text-[#1E1E1E]">
              {t('about.feature3_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;