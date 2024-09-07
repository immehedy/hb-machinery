import Image from "next/image";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export default async function Home() {

  //@ts-ignore
  const products = await client.fetch(groq `*[_type=="product"]`);

  console.log({products});

  return (
    <h1 className="underline">Hello World</h1>
  );
}
