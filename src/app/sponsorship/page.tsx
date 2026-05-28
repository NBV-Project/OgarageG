"use client";

import React, { useState } from "react";
import { CheckCircle2, Trophy, Camera, Video, Send, Award, Sparkles } from "lucide-react";

export default function Sponsorship() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carSpec: "",
    city: "",
    vehicleUse: "Track Vehicle",
    youtubeChannel: "",
    youtubeFollowers: "",
    instagramHandle: "",
    instagramFollowers: "",
    buildPlans: "",
    sponsorshipGoal: "",
    racingType: "Time Attack",
    organization: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <Trophy size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            Motorsports Program
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            Sponsored Driver Program
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Are you a competitive track driver, drag racer, or social media automotive influencer? Apply to partner with OgarageG to fuel your vehicle build.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white border-2 border-black rounded-3xl shadow-xl overflow-hidden">
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-md mx-auto">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-200">
                <CheckCircle2 size={44} className="animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-2xl uppercase text-black leading-none">Application Logged!</h3>
                <p className="text-xs text-gray-500 font-bold leading-normal">
                  Thank you, **{formData.firstName}**. Your Sponsored Driver portfolio for the **{formData.carSpec}** has been registered. Our marketing and race-sponsorship coordinators will evaluate your social reach and race results, and contact you in 5-7 business days.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-150 p-5 rounded-2xl text-left text-xs font-bold text-gray-600 space-y-2">
                <p className="text-black font-black uppercase border-b pb-1.5 mb-2 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#9e0005]" />
                  <span>Sponsorship Portfolio</span>
                </p>
                <div className="flex justify-between"><span>Driver:</span><span className="text-black font-black">{formData.firstName} {formData.lastName}</span></div>
                <div className="flex justify-between"><span>Vehicle:</span><span className="text-black font-black">{formData.carSpec}</span></div>
                <div className="flex justify-between"><span>Race Class:</span><span className="text-black font-black">{formData.racingType}</span></div>
                <div className="flex justify-between"><span>Instagram:</span><span className="text-black font-black">{formData.instagramHandle}</span></div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow transition-all"
              >
                Apply with Another Vehicle
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-bold text-xs text-black">
              
              {/* SECTION A: DRIVER BIOGRAPHY */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-[#9e0005] border-b border-gray-100 pb-2 flex items-center gap-2">
                  <Trophy size={16} />
                  <span>A. Driver Biography & Vehicle Specifications</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus"
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
                      placeholder="e.g. Vance"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Driver Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@vanceracing.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Phone Number</label>
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
                    <label className="text-gray-500 uppercase tracking-wide">Home City / Province</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nonthaburi"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Vehicle Year, Make, Model & Engine</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2020 BMW 340i G20 (B58 Gen 2 engine)"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.carSpec}
                      onChange={(e) => setFormData({ ...formData, carSpec: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Vehicle Core Application</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.vehicleUse}
                      onChange={(e) => setFormData({ ...formData, vehicleUse: e.target.value })}
                    >
                      <option value="Track Vehicle">Sanctioned Track Car / Circuit racing</option>
                      <option value="Drag Racing">Drag / Roll Racing competition</option>
                      <option value="Show Car">High Profile Automotive Show Car</option>
                      <option value="Daily Weapon">Premium street/track build project</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION B: SOCIAL OUTLET DETAILS */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-[#9e0005] border-b border-gray-100 pb-2 flex items-center gap-2">
                  <Award size={16} />
                  <span>B. Online Marketing Presence & Racing Experience</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                      <Camera className="text-pink-600" size={16} />
                      <span>Instagram Handle</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="@vance_circuit"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.instagramHandle}
                        onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="e.g. 24,000 Followers"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.instagramFollowers}
                        onChange={(e) => setFormData({ ...formData, instagramFollowers: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                      <Video className="text-red-600" size={16} />
                      <span>YouTube Channel Name</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Vance Circuit Racing"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.youtubeChannel}
                        onChange={(e) => setFormData({ ...formData, youtubeChannel: e.target.value })}
                      />
                      <input
                        type="text"
                        placeholder="e.g. 5,000 Subs"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                        value={formData.youtubeFollowers}
                        onChange={(e) => setFormData({ ...formData, youtubeFollowers: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Competition Racing Class</label>
                    <select
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.racingType}
                      onChange={(e) => setFormData({ ...formData, racingType: e.target.value })}
                    >
                      <option value="Time Attack">Time Attack / Global Time Attack</option>
                      <option value="Drag Racing">Drag / Roll Race Competitions</option>
                      <option value="Formula Drift">Formula Drift / Pro-Am Drifting</option>
                      <option value="Road Racing">NASA / SCCA Circuit Wheel-to-Wheel</option>
                      <option value="Car Shows">Major Car Shows / Semas / Autocons</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-gray-500 uppercase tracking-wide">Organization Affiliations</label>
                    <input
                      type="text"
                      placeholder="e.g. Super Club Racing, Toyo Tires Racing, Drag Racing"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION C: PARTNERSHIP & VALUE PROPOSAL */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-[#9e0005] border-b border-gray-100 pb-2 flex items-center gap-2">
                  <Award size={16} />
                  <span>C. Build Ambitions & Partnership Value</span>
                </h3>
                
                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Explain your upcoming build plans & schedule</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide a brief summary of how you plan to document your build and what modifications you have planned."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.buildPlans}
                    onChange={(e) => setFormData({ ...formData, buildPlans: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-500 uppercase tracking-wide">Why are you a great partner for the OgarageG family?</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How will your build or racing showcase promote OgarageG engine parts? What does your media coverage bring to the table?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005]"
                    value={formData.sponsorshipGoal}
                    onChange={(e) => setFormData({ ...formData, sponsorshipGoal: e.target.value })}
                  />
                </div>
              </div>

              {/* ACTION SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#9e0005] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider py-4 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={14} />
                <span>Submit Sponsored Driver Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
