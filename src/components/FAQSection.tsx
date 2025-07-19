import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this course suitable for complete beginners?",
      answer: "Yes, our course is designed for those starting from zero."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, participants will receive a certificate of completion."
    },
    {
      question: "Are classes held online or offline?",
      answer: "Currently, all classes are held offline at our learning center."
    },
    {
      question: "Can working adults join?",
      answer: "Yes, the course is designed to accommodate flexible schedules."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#1E1E1E]">
            Find answers to common questions about our English course
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-[#F5F7FA] hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-[#1E1E1E]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#20438F]" size={24} />
                ) : (
                  <ChevronDown className="text-[#20438F]" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-[#1E1E1E] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;