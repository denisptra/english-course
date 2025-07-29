import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-[#494949] max-w-3xl mx-auto mb-8">
            {t('contact.description')}
          </p>
          
          <a
            href="https://wa.me/62xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FFB800] text-[#1E1E1E] font-semibold rounded-lg hover:bg-[#e6a600] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            {t('contact.cta')}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">{t('contact.phone')}</h3>
            <p className="text-[#494949]">+62 xxx-xxxx-xxxx</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">{t('contact.email')}</h3>
            <p className="text-[#494949]">info@baseofbasic.com</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#20438F] text-white rounded-full mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">{t('contact.location')}</h3>
            <p className="text-[#494949]">{t('contact.location_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;