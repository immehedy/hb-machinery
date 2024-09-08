import { Products } from "./components/ui";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* @ts-expect-error Server Component */}
      <Products />
    </div>
  );
}
