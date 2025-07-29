import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const ScheduleSection = () => {
  const { t } = useTranslation();

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            {t('schedule.title')}
          </h2>
          <p className="text-lg text-[#494949] max-w-3xl mx-auto">
            {t('schedule.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                {t('schedule.registration_title')}
              </h3>
              <p className="text-3xl font-bold text-[#20438F] mb-2">
                {t('schedule.registration_date')}
              </p>
              <p className="text-[#494949]">
                {t('schedule.registration_note')}
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                {t('schedule.learning_title')}
              </h3>
              <p className="text-3xl font-bold text-[#20438F] mb-2">
                {t('schedule.learning_date')}
              </p>
              <p className="text-[#1E1E1E]">
                {t('schedule.learning_note')}
              </p>
            </div>
          </div>

          <div className="bg-[#FFB800] rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="text-[#1E1E1E] mr-2" size={24} />
              <span className="text-xl font-bold text-[#1E1E1E]">
                {t('schedule.notice_title')}
              </span>
            </div>
            <p className="text-lg text-[#1E1E1E] font-semibold">
              {t('schedule.notice_desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;