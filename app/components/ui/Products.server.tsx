import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import ImageCard from "./ImageCard";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  images: any[]; // You might want to define a more specific type for images
}

async function getProducts(): Promise<Product[]> {
  //@ts-ignore
  return await client.fetch(groq`*[_type=="product"]{_id, name, slug, images}`);
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <Link key={product._id} href={`/product/${product.slug.current}`}>
          <ImageCard
            imageSrc={urlFor(product.images && product.images[0]).url()}
            slug={product.slug?.current}
            title={product.name}
          />
        </Link>
      ))}
    </div>
  );
}
