import Image from "next/image";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ImageCard from "./components/ui/ImageCard";

export default async function Home() {
  //@ts-ignore
  const products = await client.fetch(groq`*[_type=="product"]`);

  console.log({ products });

  const images = [
    {
      imageSrc: "https://source.unsplash.com/random/800x600",
      title: "Beautiful Landscape",
    },
    {
      imageSrc: "https://source.unsplash.com/random/801x601",
      title: "Serene Beach",
    },
    {
      imageSrc: "https://source.unsplash.com/random/802x602",
      title: "City Skyline",
    },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <ImageCard
            key={index}
            imageSrc={image.imageSrc}
            title={image.title}
          />
        ))}
      </div>
    </div>
  );
}
