import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-[#172F66] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/Logo-2.svg"
              alt="Base of Basic English Course"
              className="h-8 w-auto mr-3"
            />
            {/* <span className="text-lg font-semibold">Base of Basic</span> */}
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">
              © 2025 Base of Basic English Course. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;