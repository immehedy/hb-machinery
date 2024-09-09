import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-zinc-500 py-4 border shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between gap-2 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mb-0">
          <Image
            src="/hb-machinery-logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="h-10 w-full md:h-12"
          />
        </Link>

        {/* Contact Information */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          <div className="flex items-center">
            <Phone className="h-3 md:h-5 w-3 md:w-5 mr-2 text-gray-400" />
            <span className="text-xs md:text-base">01711-871147</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-3 md:h-5 w-3 md:w-5 mr-2 text-gray-400" />
            <span className="text-xs md:text-base">info@hbmachinerybd.com</span>
          </div>
          {/* <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-gray-400" />
            <span>23/3, Distilary Road, Gandaria. Dhaka-1204</span>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
