import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            Ready to Learn?
          </h2>
          <p className="text-lg text-[#1E1E1E] max-w-3xl mx-auto mb-8">
            Click below to chat with our admin via WhatsApp and register your seat.
          </p>
          
          <a
            href="https://wa.me/62xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FFB800] text-[#1E1E1E] font-semibold rounded-lg hover:bg-[#e6a600] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Phone</h3>
            <p className="text-[#1E1E1E]">+62 xxx-xxxx-xxxx</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Email</h3>
            <p className="text-[#1E1E1E]">info@baseofbasic.com</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">Location</h3>
            <p className="text-[#1E1E1E]">Learning Center</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;