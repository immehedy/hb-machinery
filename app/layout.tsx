import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "./components/layout";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HB Machinery BD",
  description:
    "Find high-quality printing machine spare parts for optimal performance and longevity. Explore our wide range of durable components for offset, digital, and large-format printers. Reliable parts and expert support available.",
    icons: {
      icon: {
        url: '/hb-machinery.png',
        href: '/hb-machinery.png',
      },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">{children}</main>
      </body>
    </html>
  );
}
