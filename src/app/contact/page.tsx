"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessagesSquare, Smile } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    category: "New Product Request",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Dynamic Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <MessagesSquare size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            Support Desk
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            Contact OgarageG
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Have a question about piston compression, rod bearing clearance, or sleeve logistics? Speak directly with an expert builder today.
          </p>
        </div>
      </div>

      {/* Main Grid: Details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1 & 2: Suggestion & Inquiry Form */}
        <div className="lg:col-span-2 bg-white border-2 border-black rounded-3xl p-6 md:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                <Smile size={32} className="animate-bounce" />
              </div>
              <div className="space-y-3">
                <h3 className="font-black text-xl uppercase text-black leading-none">Feedback Received!</h3>
                <p className="text-xs text-gray-500 font-bold leading-relaxed text-justify">
                  Thank you for your feedback! We are always looking for opportunities to better and grow, and welcome all feedback. Contact us directly at <a href="mailto:Sales@OgarageG.com" className="text-[#9e0005] underline font-extrabold">Sales@OgarageG.com</a>.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ firstName: "", lastName: "", businessName: "", email: "", category: "New Product Request", message: "" });
                }}
                className="bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl shadow transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-bold text-xs text-black">
              <div>
                <h3 className="text-base font-black uppercase text-black border-l-2 border-[#9e0005] pl-2.5">
                  Send A Message or Suggestion
                </h3>
                <p className="text-[10px] font-bold text-gray-400 mt-1">
                  Have ideas for a new product, event, or want to share your customer experience? We read every note.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Somchai"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaidee"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Business Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Performance Garage"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="somchai@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-gray-500 uppercase tracking-wide">Feedback Category</label>
                <select
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="New Product Request">New Engine Product Request</option>
                  <option value="Event Suggestions">Motorsport Event Suggestions</option>
                  <option value="Customer Experience">Share Your Customer Experience</option>
                  <option value="Other">Other general suggestions</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-gray-500 uppercase tracking-wide">Message / Suggestions</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what is on your mind. If you are requesting a new product, please specify the BMW chassis and B58 engine generation."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#9e0005] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition-all"
              >
                Send Suggestion Box Note
              </button>
            </form>
          )}
        </div>

        {/* Column 3: Contacts Info & Hours */}
        <div className="space-y-6">
          {/* Quick Contact Card */}
          <div className="bg-black text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-md border-b-8 border-[#9e0005]">
            <h3 className="text-base font-black uppercase tracking-wider text-white border-l-2 border-[#9e0005] pl-2.5">
              Direct Contact Details
            </h3>
            
            <div className="space-y-5 text-xs font-bold text-gray-300">
              <a href="mailto:Sales@OgarageG.com" className="flex items-start gap-3 hover:text-white transition-colors">
                <Mail className="text-[#9e0005] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white uppercase text-[10px] tracking-wider font-black">Sales & Tech Support</p>
                  <p className="mt-0.5">Sales@OgarageG.com</p>
                </div>
              </a>

              <a href="tel:+66805555150" className="flex items-start gap-3 hover:text-white transition-colors">
                <Phone className="text-[#9e0005] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white uppercase text-[10px] tracking-wider font-black">Tuning Lab Phone</p>
                  <p className="mt-0.5">+66 80-555-5150</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="text-[#9e0005] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white uppercase text-[10px] tracking-wider font-black">Distribution & Shop</p>
                  <p className="mt-0.5 leading-normal">
                    OgarageG HQ Distribution Center,<br />
                    Mueang Nonthaburi, Nonthaburi, Thailand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#9e0005] shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-white uppercase text-[10px] tracking-wider font-black">Support Hours</p>
                  <p className="mt-0.5 leading-normal">
                    Monday – Saturday: 9:00 AM – 6:00 PM ICT<br />
                    Sunday: Closed (Closed Racing / Track Tests)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps Mock Card */}
          <div className="bg-white border-2 border-gray-150 rounded-3xl overflow-hidden h-64 shadow-sm relative">
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-center p-4">
              <div className="space-y-2 font-bold text-xs">
                <MapPin size={24} className="text-[#9e0005] mx-auto animate-bounce" />
                <p className="text-black font-black uppercase text-sm">Nonthaburi, Thailand</p>
                <p className="text-gray-400 font-extrabold uppercase text-[10px]">OgarageG Tuning & Engine Lab</p>
                <div className="pt-2">
                  <span className="bg-black text-white font-extrabold text-[10px] uppercase px-3 py-1.5 rounded-full select-none">
                    Map Location Registered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
