import React from 'react';
import { Clock, Zap, Monitor } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Basic Class",
      description: "Grammar, vocabulary, and everyday conversation for absolute beginners.",
      icon: Clock,
      features: ["Fundamental grammar", "Essential vocabulary", "Basic conversation", "Beginner-friendly pace"]
    },
    {
      title: "Intensive Class",
      description: "Faster-paced sessions for those who want to improve quickly in a shorter time.",
      icon: Zap,
      features: ["Accelerated learning", "Intensive practice", "Quick progress", "Focused curriculum"]
    },
    {
      title: "Online Class",
      description: "Learn from anywhere with interactive Zoom classes and digital modules.",
      icon: Monitor,
      features: ["Flexible schedule", "Interactive sessions", "Digital materials", "Remote learning"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            Our Course Programs
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto">
            Choose the program that best fits your learning style and schedule
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
                  <p className="text-[#1E1E1E] leading-relaxed">
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