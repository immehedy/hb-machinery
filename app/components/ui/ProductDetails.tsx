"use client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useState } from "react";

interface ProductDetailsProps {
  images: string[];
  title: string;
  slug: string;
  description?: any;
  price: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  images,
  title,
  slug,
  description,
  price,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Main Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="mb-4">
            <Image
              //   loader={() => urlFor(images[index]).url()}
              objectFit="contain"
              src={urlFor(images[index]).url()}
              alt={images[index]}
              width={350}
              height={350}
              className="object-contain mx-auto w-full h-[550px] rounded-lg shadow-md"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, i) => (
              <div key={i} className="cursor-pointer">
                <Image
                  //   loader={() => urlFor(image).url()}
                  objectFit="contain"
                  src={urlFor(image).url()}
                  alt={image}
                  width={220}
                  height={100}
                  className={` w-full h-20 rounded-lg shadow-md ${index === i ? "border-2 border-indigo-500" : ""}`}
                  onClick={() => setIndex(i)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-gray-500 mb-4">Slug: {slug}</p>
          {description && <div className="prose prose-blue lg:prose-lg md:prose-md sm:prose-sm mb-4"><PortableText value={description} /></div>}
          <p className="text-xl font-semibold text-indigo-600">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
