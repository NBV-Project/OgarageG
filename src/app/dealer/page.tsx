"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, FileCheck2, Building, Send, Award } from "lucide-react";

export default function DealerProgram() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    usaBased: "No",
    country: "Thailand",
    bmwSpecific: "No",
    ownerName: "",
    email: "",
    phone: "",
    website: "",
    taxId: "",
    address: "",
    businessType: [] as string[],
    stockPlan: "Stock OgarageG Products",
    signature: "",
    termsAccepted: false
  });

  const handleCheckboxChange = (type: string) => {
    setFormData((prev) => {
      const current = [...prev.businessType];
      const index = current.indexOf(type);
      if (index > -1) {
        current.splice(index, 1);
      } else {
        current.push(type);
      }
      return { ...prev, businessType: current };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the Terms & Conditions and Resale certification before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <Building size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            Wholesale Accounts
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            Wholesale Dealer Program
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Own a tuning shop, Dyno cell, or automotive webstore? Join the OgarageG dealer network to receive wholesale margins, drop-ship options, and tech support.
          </p>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white border-2 border-black rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                <CheckCircle2 size={44} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-2xl uppercase text-black leading-none">Application Submitted!</h3>
                <p className="text-xs text-gray-500 font-bold leading-normal">
                  Thank you, **{formData.ownerName}**. Your dealer registration for **{formData.companyName}** has been recorded under reference code **OGARAGEG-DLR-MOCK**. Our partnership coordinators will review your business license and Tax ID within 2-3 business days.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-150 p-5 rounded-2xl text-left text-xs font-bold text-gray-600 space-y-2">
                <p className="text-black font-black uppercase border-b pb-1.5 mb-2 flex items-center gap-1.5">
                  <Award size={14} className="text-[#9e0005]" />
                  <span>Wholesale Account Summary</span>
                </p>
                <div className="flex justify-between"><span>Company:</span><span className="text-black font-black">{formData.companyName}</span></div>
                <div className="flex justify-between"><span>Tax ID:</span><span className="text-black font-black">{formData.taxId}</span></div>
                <div className="flex justify-between"><span>Email Desk:</span><span className="text-black font-black">{formData.email}</span></div>
                <div className="flex justify-between"><span>Program Channel:</span><span className="text-black font-black">{formData.stockPlan}</span></div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow transition-all"
              >
                Register Another Business
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-bold text-xs text-black">
              
              {/* SECTION A: BUSINESS IDENTIFICATION */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-[#9e0005] border-b border-gray-150 pb-2 flex items-center gap-2">
                  <Building size={16} />
                  <span>A. Business & Contact Identification</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Registered Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Performance Garage Ltd"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Owner / Officer Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Miller"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Business Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +66 80-555-5150"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Wholesale Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. purchasing@apexgarage.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Company Website URL</label>
                    <input
                      type="url"
                      required
                      placeholder="e.g. https://apexgarage.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Tax ID / Business License</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 0105567XXXXXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Thailand-Based Business?</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.usaBased}
                      onChange={(e) => setFormData({ ...formData, usaBased: e.target.value })}
                    >
                      <option value="No">Yes, Thailand-Based Business</option>
                      <option value="Yes">No, International Business</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Company Physical Address</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 99/9 Tiwanon Road, Mueang Nonthaburi, Nonthaburi 11000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>

              {/* SECTION B: BUSINESS TYPE PROFILE */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-[#9e0005] border-b border-gray-150 pb-2 flex items-center gap-2">
                  <Building size={16} />
                  <span>B. Business Type Profile</span>
                </h3>
                
                <div className="space-y-2">
                  <label className="text-gray-500 uppercase tracking-wide block">Select All That Apply</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Storefront Retail Shop",
                      "Engine Installer",
                      "Webstore / E-commerce",
                      "Dyno / Tuning Shop",
                      "Motorsport Race Team",
                      "Warehouse Distributor"
                    ].map((type) => {
                      const isChecked = formData.businessType.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleCheckboxChange(type)}
                          className={`py-3 px-3 border-2 rounded-xl text-left font-bold transition-all text-xs flex justify-between items-center ${
                            isChecked
                              ? "bg-red-50 border-[#9e0005] text-[#9e0005]"
                              : "border-gray-150 text-gray-700 bg-gray-50 hover:border-black"
                          }`}
                        >
                          <span>{type}</span>
                          {isChecked && <CheckCircle2 size={14} />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Dealer Sales Model Strategy</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.stockPlan}
                      onChange={(e) => setFormData({ ...formData, stockPlan: e.target.value })}
                    >
                      <option value="Stock OgarageG Products">Stock inventory physically at our facility</option>
                      <option value="Sell OgarageG Products Online">Sell online and utilize drop-shipping logistics</option>
                      <option value="Stock & Online mix">Hybrid mix of stock holding and drop-shipping</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Is your shop Honda-Specific?</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.bmwSpecific}
                      onChange={(e) => setFormData({ ...formData, bmwSpecific: e.target.value })}
                    >
                      <option value="Yes">Yes, we are a dedicated Honda tuner/builder</option>
                      <option value="No">No, we tune all sports car platforms</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION C: LEGAL DISCLAIMERS & TAX EXEMPTION */}
              <div className="space-y-4 bg-gray-50 border border-gray-150 p-5 rounded-2xl">
                <h3 className="text-xs font-black uppercase text-black border-b border-gray-200 pb-2 flex items-center gap-1.5">
                  <FileCheck2 size={16} />
                  <span>C. Legal Resale Certifications & Signatures</span>
                </h3>
                
                <p className="text-[10px] text-gray-500 leading-relaxed font-bold text-justify">
                  By executing this signature, I hereby certify under penalty of perjury that all purchases made from OgarageG are for the express purpose of resale or installation in sanctioned closed-course racing vehicles. I assume full responsibility for collecting and remitting applicable local sales taxes, and I certify that all components sold are intended strictly for off-road closed-course competition use only and will not be installed on highway vehicles in violation of emissions standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Signature Authorized Officer</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Miller"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005] font-sans italic"
                      value={formData.signature}
                      onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
                    />
                  </div>
                  <div className="flex items-end pb-1.5">
                    <label className="flex items-center gap-2 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="w-4 h-4 text-[#9e0005] focus:ring-[#9e0005] rounded cursor-pointer"
                        checked={formData.termsAccepted}
                        onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                      />
                      <span className="text-[11px] text-gray-600 font-extrabold uppercase">
                        Accept Terms & Resale certifications
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#9e0005] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>Submit Wholesale Dealer Application</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Safety Exemption Banner */}
      <div className="bg-gray-50 border border-gray-150 rounded-2xl p-5 flex gap-4 items-start font-bold">
        <ShieldCheck className="text-green-700 shrink-0 mt-0.5" size={20} />
        <div className="text-xs text-gray-500 leading-normal">
          <p className="text-black font-black uppercase">Dealer Exemption Auditing</p>
          <p className="mt-0.5">OgarageG complies with export and trading compliance guidelines. All registered dealers are micro-screened at application to protect our partners and guarantee compliance with national commercial standards.</p>
        </div>
      </div>
    </div>
  );
}
