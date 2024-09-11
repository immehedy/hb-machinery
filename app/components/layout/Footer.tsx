import React from 'react';
import { MapPin, Mail, Phone, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-zinc-500 py-4 border shadow-t-lg">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
      <div className='flex flex-row justify-center md:justify-start'><div className="flex flex-col ">
          <img
            src="/hb-machinery-logo.png"
            alt="HB Machinery BD Logo"
            className="w-48 h-auto mb-2"
          />
          <div className="flex items-start">
              <MapPin size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
              <span className="text-sm">
                23/3, Distilary Road, Gandaria.
                <br />
                Dhaka-1204, Bangladesh
              </span>
            </div>
        </div></div>
        
        <div className='flex flex-row justify-center md:justify-end'>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:info@hbmachinerybd.com"
              className="flex items-center text-sm hover:underline"
            >
              <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
              info@hbmachinerybd.com
            </a>
            <div className="flex items-center text-sm">
              <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
              <span>01711-871147</span>
            </div>
            <a
              href="https://www.facebook.com/hbmachinerybd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:underline"
            >
              <Facebook size={20} className="mr-2 text-primary flex-shrink-0" />
              <span>Follow us on HB Machinery BD</span>
            </a>
          </div>
        </div>
        
      </div>
      <div className="text-center mt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} <span className='text-primary'>HB Machinery BD.</span> All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;