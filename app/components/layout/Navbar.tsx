import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-zinc-500 py-4 border shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <Image
            src="https://seemaenterprisebd.com/wp-content/uploads/2022/06/cropped-Seema-Ent-Final-logo-1.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 md:h-12"
          />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-gray-400" />
            <span>+1 123-456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-gray-400" />
            <span>info@example.com</span>
          </div>
          {/* <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-gray-400" />
            <span>123 Main St, City, Country</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
