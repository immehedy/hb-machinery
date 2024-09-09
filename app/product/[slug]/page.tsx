import { client } from "@/sanity/lib/client";
import ProductDetails from "@/app/components/ui/ProductDetails";

// Define types
interface Product {
  _id: string;
  slug: { current: string };
  name: string;
  description: string;
  price: number;
  images: any[];
}

interface PageProps {
  params: { slug: string };
}

// This function fetches the product data
async function getProduct(slug: string): Promise<Product | undefined> {

  const query = `*[_type=="product" && slug.current=='${slug}'] {
  _id,
  slug,
  name,
  description,
  price,
  images
  } [0]`

  return await client.fetch(query, {}, { next: { revalidate: 3600 } });
}

// The main page component
export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductDetails
      images={product.images}
      title={product.name}
      description={product.description}
      price={product.price}
      slug={product.slug.current}
    />
  );
}
