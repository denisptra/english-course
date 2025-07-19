import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            About Base of Basic
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-4xl mx-auto leading-relaxed">
            Base of Basic English Course is dedicated to helping learners aged 17 and above build a strong foundation in English. Through structured modules, speaking practice, and guidance from experienced tutors, we make learning effective and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              Structured Learning
            </h3>
            <p className="text-[#1E1E1E]">
              Our curriculum is carefully designed with progressive modules that build upon each other, ensuring steady improvement.
            </p>
          </div>

          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              Speaking Practice
            </h3>
            <p className="text-[#1E1E1E]">
              Regular conversation sessions help you gain confidence and fluency in real-world communication scenarios.
            </p>
          </div>

          <div className="text-center p-8 bg-[#F5F7FA] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#20438F] text-white rounded-full mb-6">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4">
              Expert Tutors
            </h3>
            <p className="text-[#1E1E1E]">
              Learn from experienced instructors who understand the challenges of English language learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;