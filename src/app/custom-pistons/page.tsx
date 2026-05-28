"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Settings2, ShieldCheck, Sparkles } from "lucide-react";

export default function CustomPistons() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    engine: "L15B",
    cylinderHead: "OEM L15B1 DOHC Head",
    headVolume: "OEM Specs",
    camshaft: "Standard Lift",
    valveSizeIntake: "Standard",
    valveSizeExhaust: "Standard",
    boreSize: "73.00mm (Standard)",
    compressionRatio: "10.3:1 (Recommended for High Boost)",
    rodLength: "139.6mm",
    crankStroke: "89.5mm",
    targetHp: "450 HP",
    fuelType: "E85 / Flex Fuel",
    induction: "Turbocharged",
    nitrous: "No",
    antilag: "No"
  });

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <Settings2 size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            Interactive Spec Sheets
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            Custom Piston Spec Builder
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Need a bespoke piston configuration for high-boost, stroker, or unique fuel setups? Complete our spec sheets and let our engineers design it.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border-2 border-black rounded-3xl shadow-xl overflow-hidden">
        
        {/* Step Indicator */}
        {!submitted && (
          <div className="bg-gray-50 border-b border-gray-150 px-6 py-4 flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-500">
            <span className="text-black">Spec Sheet Builder</span>
            <div className="flex gap-2">
              <span className={`px-2 py-1 rounded ${step >= 1 ? "bg-[#9e0005] text-white" : "bg-gray-200"}`}>1. Contact</span>
              <span className={`px-2 py-1 rounded ${step >= 2 ? "bg-[#9e0005] text-white" : "bg-gray-200"}`}>2. Engine Spec</span>
              <span className={`px-2 py-1 rounded ${step >= 3 ? "bg-[#9e0005] text-white" : "bg-gray-200"}`}>3. Operating Spec</span>
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                <CheckCircle2 size={44} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-2xl uppercase text-black leading-none">Specifications Submitted!</h3>
                <p className="text-xs text-gray-500 font-bold leading-normal">
                  Thank you, **{formData.firstName} {formData.lastName}**. Our design desk is analyzing your engine specifications. A representative will contact you at **{formData.email}** with custom blueprints and CP-Carrillo production quotes.
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-150 p-4 rounded-2xl text-left text-xs font-bold text-gray-600 space-y-1.5">
                <p className="text-black font-black uppercase border-b pb-1.5 mb-2 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#9e0005]" />
                  <span>Build Summary Specs</span>
                </p>
                <div className="flex justify-between"><span>Engine Code:</span><span className="text-black font-black">{formData.engine}</span></div>
                <div className="flex justify-between"><span>Bore Size:</span><span className="text-black font-black">{formData.boreSize}</span></div>
                <div className="flex justify-between"><span>Compression Ratio:</span><span className="text-black font-black">{formData.compressionRatio}</span></div>
                <div className="flex justify-between"><span>Fuel & Power Goal:</span><span className="text-black font-black">{formData.fuelType} | {formData.targetHp}</span></div>
              </div>

              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow transition-all"
                >
                  Configure New Specs
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-bold text-xs text-black">
              
              {/* STEP 1: CONTACT DETAILS */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-sm font-black uppercase text-black border-l-2 border-[#9e0005] pl-2.5 mb-4">
                    Step 1: Customer Contact details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="+66 80-555-5150"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: ENGINE SPECIFICATIONS */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-sm font-black uppercase text-black border-l-2 border-[#9e0005] pl-2.5 mb-4">
                    Step 2: Engine Geometry & Dimensions
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Engine Model Family</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.engine}
                        onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                      >
                        <option value="L15B">Honda L15B (1.5L Civic Turbo)</option>
                        <option value="K20C1">Honda K20C1 (2.0L Civic Type R Turbo)</option>
                        <option value="K-Series">Honda K20 / K24 (Accord / Custom Swap)</option>
                        <option value="B-Series">Honda B16 / B18 (Classic VTEC)</option>
                        <option value="Other">Other custom Honda platform</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Bore Size</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.boreSize}
                        onChange={(e) => setFormData({ ...formData, boreSize: e.target.value })}
                      >
                        <option value="73.00mm (Standard)">73.00mm (L15B Standard OEM)</option>
                        <option value="73.50mm (+0.50mm Overbore)">73.50mm (+0.50mm Overbore)</option>
                        <option value="86.00mm (Standard)">86.00mm (K-Series Standard OEM)</option>
                        <option value="Bespoke custom specification">Bespoke Custom Size</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Connecting Rod Length</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="e.g. 139.6mm"
                        value={formData.rodLength}
                        onChange={(e) => setFormData({ ...formData, rodLength: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Crankshaft Stroke</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="e.g. 89.5mm"
                        value={formData.crankStroke}
                        onChange={(e) => setFormData({ ...formData, crankStroke: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Cylinder Head Cast</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="e.g. L15B1 standard DOHC"
                        value={formData.cylinderHead}
                        onChange={(e) => setFormData({ ...formData, cylinderHead: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: OPERATING CONDITIONS */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-sm font-black uppercase text-black border-l-2 border-[#9e0005] pl-2.5 mb-4">
                    Step 3: Target HP, Fuel & Induction
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Target Horsepower Goal</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="e.g. 500 HP"
                        value={formData.targetHp}
                        onChange={(e) => setFormData({ ...formData, targetHp: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Fuel Type</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.fuelType}
                        onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                      >
                        <option value="E85 / Flex Fuel">E85 / Ethanol Flex Fuel</option>
                        <option value="Pump Gas 95 octane">Pump Gasoline (95 Octane)</option>
                        <option value="Race Gas (Q16 / C16)">Lead/Unleaded Race Fuel</option>
                        <option value="Methanol Injected">Pure Methanol / Meth Injection</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Target Compression Ratio</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        placeholder="e.g. 10.3:1"
                        value={formData.compressionRatio}
                        onChange={(e) => setFormData({ ...formData, compressionRatio: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Induction Method</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.induction}
                        onChange={(e) => setFormData({ ...formData, induction: e.target.value })}
                      >
                        <option value="Turbocharged">Turbocharged</option>
                        <option value="Supercharged">Supercharged</option>
                        <option value="Naturally Aspirated">Naturally Aspirated</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 uppercase tracking-wide">Nitrous Spray (N2O)</label>
                      <select
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.nitrous}
                        onChange={(e) => setFormData({ ...formData, nitrous: e.target.value })}
                      >
                        <option value="No">No</option>
                        <option value="Yes (Dry shot)">Yes (Dry Shot)</option>
                        <option value="Yes (Wet shot)">Yes (Wet Shot)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-black hover:bg-gray-800 text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow transition-all"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-[#9e0005] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow transition-all flex items-center gap-1"
                  >
                    <span>Next step</span>
                    <ChevronRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-red-700 hover:bg-[#9e0005] text-white font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-lg transition-all flex items-center gap-1.5"
                  >
                    <CheckCircle2 size={16} />
                    <span>Submit Specifications Binder</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Safety Banner */}
      <div className="bg-gray-50 border border-gray-150 rounded-2xl p-5 flex gap-4 items-start font-bold">
        <ShieldCheck className="text-green-700 shrink-0 mt-0.5" size={20} />
        <div className="text-xs text-gray-500 leading-normal">
          <p className="text-black font-black uppercase">OgarageG Engineering Consultation</p>
          <p className="mt-0.5">By submitting this form, you trigger a priority engineering consultation. All data is verified for deck collision and piston pin stress using thermodynamic simulation models before CP-Carrillo begins custom production forging.</p>
        </div>
      </div>
    </div>
  );
}
