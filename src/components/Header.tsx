/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, Menu, X, Trash2, ShieldCheck, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Header: React.FC = () => {
  const { cart, cartCount, cartTotal, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Handle background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
      setIsSearchOpen(false);
    });
    return () => cancelAnimationFrame(handle);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop Parts", href: "/shop" },
    { name: "Engine Services", href: "/services" },
    { name: "Custom Pistons", href: "/custom-pistons" },
    { name: "Dealer Program", href: "/dealer" },
    { name: "Sponsorships", href: "/sponsorship" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. Announcement Bar */}
      <div className="bg-[#9e0005] text-white text-xs font-bold py-2 px-4 text-center tracking-wider uppercase border-b border-black/10 select-none">
        <span className="animate-pulse">🔥 FREE SHIPPING ON THAILAND ORDERS OVER 9,999 THB!</span>
        <span className="hidden md:inline mx-3">|</span>
        <span className="hidden md:inline">IN-HOUSE BMW 340i B58 ENGINE MACHINING & ASSEMBLY SPECIALISTS 🛠️</span>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white border-b-2 border-[#9e0005] shadow-lg py-1.5 md:py-1"
            : "bg-white border-b border-gray-100 py-3 md:py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-[#9e0005] focus:outline-none p-1 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/logo/logo_transparent.png"
                alt="OgarageG Logo"
                className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-black tracking-tight leading-none group-hover:text-[#9e0005] transition-colors">
                  Ogarage<span className="text-[#9e0005]">G</span>
                </span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">
                  BMW 340i B58 Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-extrabold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-[#9e0005] bg-gray-50 border-b-2 border-[#9e0005] rounded-b-none"
                        : "text-black hover:text-[#9e0005] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              
              {/* Search Toggle Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-black hover:text-[#9e0005] p-2 rounded-full hover:bg-gray-100 transition-all focus:outline-none"
                aria-label="Toggle search"
              >
                <Search size={22} />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-black hover:text-[#9e0005] p-2 rounded-full hover:bg-gray-100 transition-all focus:outline-none flex items-center"
                aria-label="Open cart"
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#9e0005] text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b-2 border-[#9e0005] shadow-lg py-4 px-4 sm:px-6 lg:px-8 z-50 animate-fadeIn">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <Search className="text-gray-400 shrink-0" size={20} />
              <input
                type="text"
                placeholder="Search Honda Civic parts (e.g., L15B Pistons, K20C1 head studs, cams)..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm text-black focus:outline-none focus:border-[#9e0005] focus:bg-white font-bold transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-black font-extrabold text-sm uppercase tracking-wider px-2"
              >
                Close
              </button>
            </div>
            <div className="max-w-3xl mx-auto mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500 font-bold">
              <span>Quick Searches:</span>
              {["L15B", "K20C1", "VTEC", "Pistons", "ARP Studs", "Stroker Kits"].map((term) => (
                <Link
                  key={term}
                  href={`/shop?search=${term}`}
                  className="bg-gray-100 hover:bg-red-50 hover:text-[#9e0005] px-2 py-1 rounded transition-colors"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 4. Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Menu */}
          <div className="relative w-4/5 max-w-sm bg-white h-full flex flex-col shadow-2xl z-50 border-r-4 border-[#9e0005] animate-slideRight">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#9e0005] rounded-full flex items-center justify-center text-white font-black text-sm">
                  OG
                </div>
                <span className="font-black text-black">OgarageG</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-[#9e0005] p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-extrabold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-red-50 text-[#9e0005] border-l-4 border-[#9e0005]"
                        : "text-black hover:bg-gray-50 hover:text-[#9e0005]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} />
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-gray-150 bg-gray-50 text-xs font-bold text-gray-500">
              <p className="text-center">🔥 Premium BMW 340i B58 Specialist</p>
              <p className="text-center mt-1">© 2026 OgarageG Co., Ltd.</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Sliding Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          {/* Cart Sidebar */}
          <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl z-50 border-l-4 border-[#9e0005] animate-slideLeft">
            <div className="p-4 bg-black text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="text-[#9e0005]" size={22} />
                <span className="font-black tracking-wider uppercase">YOUR CART ({cartCount})</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-white hover:text-[#9e0005] p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Contents */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 bg-red-50 text-[#9e0005] rounded-full flex items-center justify-center">
                    <ShoppingCart size={32} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-black uppercase text-lg">Your Cart is Empty</h3>
                    <p className="text-sm text-gray-500 font-bold mt-1">
                      Ready to build your ultimate engine? Check out our premium parts.
                    </p>
                  </div>
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-[#9e0005] text-white hover:bg-black font-extrabold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md inline-block"
                  >
                    Browse 340i Parts
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-white border border-gray-100 rounded-xl relative hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-extrabold text-sm text-black line-clamp-2 uppercase tracking-tight pr-6">
                          {item.name}
                        </h4>
                        {item.engine && (
                          <span className="text-[10px] bg-red-50 text-[#9e0005] font-black uppercase px-2 py-0.5 rounded-full mt-1 inline-block">
                            {item.engine}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:text-black font-extrabold"
                          >
                            -
                          </button>
                          <span className="px-2 text-sm text-black font-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:text-black font-extrabold"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-black text-[#9e0005] text-sm">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-600 p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-4">
                <div className="space-y-1.5 font-bold">
                  <div className="flex justify-between text-xs text-gray-500 uppercase">
                    <span>Subtotal</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 uppercase">
                    <span>Shipping</span>
                    <span className="text-green-600 font-extrabold">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm text-black border-t border-gray-200 pt-2 font-black uppercase">
                    <span>Total</span>
                    <span className="text-lg text-[#9e0005]">${cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`🚀 Checkout Simulation!\n\nProcessing order total: $${cartTotal.toLocaleString()}\n\nThank you for choosing OgarageG! In a production build, this would launch the secure payment flow.`);
                  }}
                  className="w-full bg-[#9e0005] text-white hover:bg-black font-extrabold text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
                >
                  <ShieldCheck size={18} />
                  <span>Secure Checkout</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-bold">
                  <ShieldCheck className="text-green-600" size={12} />
                  <span>Guaranteed Safe & Secure Checkout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
