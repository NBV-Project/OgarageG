/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Shield, Send, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-gray-400 border-t-4 border-[#9e0005] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group shrink-0 select-none">
              <div 
                className="flex items-baseline font-logo italic tracking-[-0.05em] text-2xl md:text-3xl transform -skew-x-12 scale-x-115 origin-left transition-transform group-hover:scale-[1.15] duration-300"
                style={{ fontWeight: 950 }}
              >
                <span className="text-white" style={{ WebkitTextStroke: "1.2px #ffffff" }}>Ogarage</span>
                <span className="text-[#e30613] -ml-[0.02em]" style={{ WebkitTextStroke: "1.2px #e30613" }}>G</span>
              </div>
              <div className="flex flex-col border-l-2 border-white/20 pl-3 ml-3">
                <span className="text-[9px] font-black text-white uppercase tracking-widest leading-none">
                  BMW 340i
                </span>
                <span className="text-[8px] font-bold text-[#e30613] uppercase tracking-widest leading-none mt-0.5">
                  B58 SPECIALISTS
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 font-bold leading-relaxed">
              We engineer, build, and supply the ultimate BMW 340i performance parts for B58 Gen 1, Gen 2, and Custom Stroker platforms. From CNC machined heads to Darton sleeved engine blocks, we deliver race-ready reliability.
            </p>
            <div className="flex items-center gap-3 text-xs font-black text-white uppercase bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg select-none">
              <Shield className="text-[#9e0005]" size={16} />
              <span>100% Secure Shopping Guarantee</span>
            </div>
          </div>

          {/* Column 2: Parts & Categories */}
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-wider border-l-2 border-[#9e0005] pl-3 mb-6">
              Shop Categories
            </h3>
            <ul className="space-y-3.5 text-sm font-bold">
              {[
                { name: "Forged Pistons Set", href: "/shop?category=pistons" },
                { name: "Steel Connecting Rods", href: "/shop?category=rods" },
                { name: "ARP Head & Main Studs", href: "/shop?category=hardware" },
                { name: "Stage 2/3 Engine Build Kits", href: "/shop?category=kits" },
                { name: "Darton Cylinder Sleeves", href: "/shop?category=sleeves" },
                { name: "Billet Steel Crankshafts", href: "/shop?category=crankshafts" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-[#9e0005] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Applications */}
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-wider border-l-2 border-[#9e0005] pl-3 mb-6">
              Resources & Program
            </h3>
            <ul className="space-y-3.5 text-sm font-bold">
              {[
                { name: "In-House Machine Services", href: "/services" },
                { name: "Dealer Application Form", href: "/dealer" },
                { name: "Sponsored Driver Program", href: "/sponsorship" },
                { name: "Custom Piston Builder", href: "/custom-pistons" },
                { name: "Suggestion & Feedback Box", href: "/contact" },
                { name: "Real Projects Gallery", href: "/#gallery" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:underline transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 bg-[#9e0005] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-black uppercase text-sm tracking-wider border-l-2 border-[#9e0005] pl-3 mb-2">
              Stay Tuned
            </h3>
            <p className="text-xs font-bold text-gray-500 leading-normal">
              Sign up for our newsletter and receive **5% OFF** your next order, exclusive BMW B58 tuning guides, and new product releases!
            </p>
            {subscribed ? (
              <div className="bg-red-950/40 border border-[#9e0005] p-4 rounded-xl flex items-start gap-2.5 text-red-200">
                <CheckCircle2 className="shrink-0 text-[#9e0005]" size={18} />
                <div className="text-xs font-bold">
                  <p className="text-white font-extrabold uppercase">Welcome to the Family!</p>
                  <p className="mt-1">Check your email for your 5% discount code: <span className="bg-[#9e0005] text-white px-1.5 py-0.5 rounded font-black text-[10px]">OGARAGEGBOOST</span></p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#9e0005] focus:bg-white/10 font-bold flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#9e0005] text-white hover:bg-white hover:text-black px-4 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Send size={12} />
                  <span>Join</span>
                </button>
              </form>
            )}
            
            {/* Contact Details */}
            <div className="space-y-3 pt-2 text-xs font-bold border-t border-white/5">
              <a href="mailto:sales@ogarageg.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={14} className="text-[#9e0005] shrink-0" />
                <span>Sales@OgarageG.com</span>
              </a>
              <a href="tel:+66805555150" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={14} className="text-[#9e0005] shrink-0" />
                <span>+66 80-555-5150 (Mon-Sat 9AM-6PM)</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#9e0005] shrink-0 mt-0.5" />
                <span className="leading-normal">
                  OgarageG HQ Distribution & Tuning Lab,<br />
                  Mueang Nonthaburi, Nonthaburi, Thailand
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-500">
          <div className="text-center md:text-left leading-relaxed">
            <p>© 2026 OgarageG Co., Ltd. All rights reserved. Built with Next.js & Tailwind CSS.</p>
            <p className="mt-1">
              BMW, 340i, B58, F30, G20, G21 are registered trademarks of Bayerische Motoren Werke AG. OgarageG is an independent tuning engine builder & component supplier and is not affiliated with BMW AG. All products sold are designated for off-road closed-course racing use only.
            </p>
          </div>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 select-none shrink-0 bg-white/5 px-3 py-1.5 border border-white/5 rounded-xl">
            {["PromptPay", "Visa", "Mastercard", "TrueMoney", "Rabbit LinePay"].map((card) => (
              <span key={card} className="bg-black border border-white/10 text-white font-extrabold text-[9px] uppercase px-2 py-0.5 rounded tracking-wide font-sans">
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
