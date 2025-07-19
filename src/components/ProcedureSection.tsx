import React from 'react';
import { MessageCircle, FileText, CreditCard, GraduationCap } from 'lucide-react';

const ProcedureSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contact Admin",
      description: "Click the WhatsApp button to contact our admin",
    },
    {
      icon: FileText,
      title: "Fill Details",
      description: "Fill out your personal details",
    },
    {
      icon: CreditCard,
      title: "Confirm Payment",
      description: "Confirm schedule and payment",
    },
    {
      icon: GraduationCap,
      title: "Start Learning",
      description: "Receive your placement and start learning",
    }
  ];

  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            How to Register
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto">
            Follow these simple steps to join our English course
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#20438F] text-white rounded-full mb-4 relative z-10">
                    <IconComponent size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1E1E1E] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcedureSection;