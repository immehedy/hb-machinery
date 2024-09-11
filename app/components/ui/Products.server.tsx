import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import ImageCard from "./ImageCard";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  slug: string;
  images: any[]; // You might want to define a more specific type for images
}


async function getProducts(): Promise<Product[]> {
  const query = `*[_type== "product"] | order(_createdAt desc) {
  _id,
  name,
    images,
    "slug" : slug.current,
    price,
    description
}`
return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Products() {
  const products = await getProducts();

  return (
    <>
      {products.length > 0 ? (
        <div className="masonry-grid h-auto md:h-screen">
          {products.map((product: Product) => (
            <Link key={product._id} href={`/product/${product.slug}`}>
              <ImageCard
                imageSrc={urlFor(product.images?.[0]).url()}
                slug={product.slug}
                title={product.name}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[500px]">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center ">
        <svg
            className="mx-auto h-12 w-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No Data Found</h3>
          <p className="mt-1 text-sm text-gray-500">We couldn't find any products at the moment.</p>
        </div>
        </div>
        
      )}
    </>
  );
}

  // return (
  //   <div className="masonry-grid h-auto md:h-screen">
  //     {products.length > 0 ? products.map((product: Product) => (
  //       <Link key={product._id} href={`/product/${product.slug}`}>
  //         <ImageCard
  //           imageSrc={urlFor(product.images?.[0]).url()}
  //           slug={product.slug}
  //           title={product.name}
  //         />
  //       </Link>
  //     )) : 
  //     <p className="text-center text-gray-500">No Data Found</p>
  //     }
  //   </div>
  // );
// }
