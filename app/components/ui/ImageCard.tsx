import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative pb-[150%]"> {/* This maintains a 2:3 aspect ratio */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold px-4 text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
