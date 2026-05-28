import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OgarageG | Honda Civic & Type R Performance Engines",
  description: "OgarageG is your #1 supplier of high-performance Honda engine components. Shop forged pistons, CP-Carrillo connecting rods, and custom ARP hardware for L15B, K20C1, K-Series, and more. Expert in-house engine assembly, CNC machining, cylinder block sleeving.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
