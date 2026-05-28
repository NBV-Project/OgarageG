/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Wrench, CheckCircle2, Calendar } from "lucide-react";

interface ServiceProps {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  highlights: string[];
}

export const ServiceCard: React.FC<ServiceProps> = ({ name, price, image, description, highlights }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    engine: "S58",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", engine: "S58", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* Service Card */}
      <div className="bg-white border-2 border-gray-150 hover:border-black rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
        
        {/* Service Image */}
        <div className="h-52 bg-gray-50 border-b border-gray-100 overflow-hidden relative select-none">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
            <span className="bg-[#9e0005] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full w-max select-none mb-1 shadow-sm tracking-wider">
              {price}
            </span>
            <h3 className="font-extrabold text-lg text-white uppercase tracking-tight line-clamp-1">
              {name}
            </h3>
          </div>
        </div>

        {/* Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-bold text-gray-700">
                  <CheckCircle2 size={14} className="text-[#9e0005] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 transform active:scale-95 group-hover:bg-[#9e0005]"
          >
            <Wrench size={14} />
            <span>Book Service Inquiry</span>
          </button>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          
          <div className="bg-white border-t-4 border-[#9e0005] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn relative">
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
              <div>
                <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wide">In-house Engine Shop</span>
                <h3 className="font-black text-black uppercase tracking-tight text-base mt-2">
                  Service Inquiry: {name}
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-black font-extrabold text-xl p-1 bg-white border rounded-full hover:shadow transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} className="animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg uppercase text-black">Inquiry Submitted Successfully!</h4>
                    <p className="text-xs text-gray-500 font-bold mt-1">
                      Our engine advisors are reviewing your project. We will contact you at **{formData.email}** within 24 hours.
                    </p>
                  </div>
                  <div className="text-[10px] text-gray-400 font-extrabold uppercase mt-2">
                    🛠️ 5150 Engine Assembly & CNC Machining
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-bold text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Engine Platform</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.engine}
                        onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                      >
                        <option value="S58">BMW S58 (G80/G82/G87)</option>
                        <option value="B58">BMW B58 (Supra/M340i)</option>
                        <option value="S55">BMW S55 (F80/F82)</option>
                        <option value="N54">BMW N54 (335i/135i)</option>
                        <option value="Other">Other BMW Platform</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Project Details & HP Goal</label>
                    <textarea
                      rows={3}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-black focus:outline-none focus:border-[#9e0005]"
                      placeholder="Explain your setup, target boost, and horsepower goals so we can supply recommendations."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#9e0005] hover:bg-black text-white py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5 uppercase font-extrabold text-xs tracking-wider"
                  >
                    <Calendar size={14} />
                    <span>Request Assembly Booking Slot</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
