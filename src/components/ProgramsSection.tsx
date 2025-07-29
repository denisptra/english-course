import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Zap, Monitor } from 'lucide-react';

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('programs.basic_title'),
      description: t('programs.basic_desc'),
      icon: Clock,
      features: [
        t('programs.basic_feature1'),
        t('programs.basic_feature2'),
        t('programs.basic_feature3'),
        t('programs.basic_feature4')
      ]
    },
    {
      title: t('programs.intensive_title'),
      description: t('programs.intensive_desc'),
      icon: Zap,
      features: [
        t('programs.intensive_feature1'),
        t('programs.intensive_feature2'),
        t('programs.intensive_feature3'),
        t('programs.intensive_feature4')
      ]
    },
    {
      title: t('programs.online_title'),
      description: t('programs.online_desc'),
      icon: Monitor,
      features: [
        t('programs.online_feature1'),
        t('programs.online_feature2'),
        t('programs.online_feature3'),
        t('programs.online_feature4')
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            {t('programs.title')}
          </h2>
          <p className="text-lg text-[#494949] max-w-3xl mx-auto">
            {t('programs.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-4">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-[#494949] leading-relaxed">
                    {program.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#1E1E1E]">
                      <div className="w-2 h-2 bg-[#FFB800] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;