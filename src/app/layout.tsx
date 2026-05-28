import type { Metadata } from "next";
import { Inter, Michroma, Oxanium } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
  display: "swap",
});

const oxanium = Oxanium({
  weight: ["800"],
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OgarageG | BMW 340i & B58 Performance Engines",
  description: "OgarageG is your #1 supplier of high-performance BMW 340i B58 engine components. Shop forged pistons, CP-Carrillo connecting rods, and custom ARP hardware for B58 Gen 1, Gen 2, and Stroker engines. Expert in-house engine assembly, CNC machining, cylinder block sleeving.",
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
    <html lang="en" className={`${inter.variable} ${michroma.variable} ${oxanium.variable} h-full antialiased`}>
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
