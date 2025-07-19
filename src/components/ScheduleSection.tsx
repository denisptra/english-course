import React from 'react';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            Enrollment Schedule
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto">
            Don't miss out on our upcoming enrollment period
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                Registration Period
              </h3>
              <p className="text-3xl font-bold text-[#20438F] mb-2">
                1 – 20 August 2025
              </p>
              <p className="text-[#1E1E1E]">
                Early registration recommended
              </p>
            </div>

            <div className="bg-[#F5F7FA] rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1E1E1E] mb-4">
                Learning Period
              </h3>
              <p className="text-3xl font-bold text-[#20438F] mb-2">
                25 August – 31 October 2025
              </p>
              <p className="text-[#1E1E1E]">
                10 weeks of intensive learning
              </p>
            </div>
          </div>

          <div className="bg-[#FFB800] rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertCircle className="text-[#1E1E1E] mr-2" size={24} />
              <span className="text-xl font-bold text-[#1E1E1E]">
                Important Notice
              </span>
            </div>
            <p className="text-lg text-[#1E1E1E] font-semibold">
              Limited seats available. Secure your spot early!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;