import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  imageSrc: string;
  slug: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, slug, title }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden group mb-4">
      <div className="relative w-full h-auto">
        <Image
          src={imageSrc}
          alt={slug}
          width={500}
          height={300}
          layout="responsive"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold px-4 text-center truncate">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;