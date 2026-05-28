"use client";

import React, { useState } from "react";
import { Gauge, Wrench, Shield, ShoppingCart, HelpCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

export const BuildCalculator: React.FC = () => {
  const { addToCart } = useCart();
  const [engine, setEngine] = useState<"L15B" | "K20C1" | "K24">("L15B");
  const [targetHp, setTargetHp] = useState<number>(450);
  const [addedAll, setAddedAll] = useState(false);

  // Engines list
  const engines = [
    { code: "L15B", name: "1.5L Civic Turbo (FC, FK, FL)", defHp: 450, ranges: [300, 450, 650] },
    { code: "K20C1", name: "2.0L Civic Type R Turbo (FK8, FL5)", defHp: 700, ranges: [450, 700, 950] },
    { code: "K24", name: "2.4L Accord / Custom Swap (NA/Turbo)", defHp: 600, ranges: [300, 600, 900] },
  ] as const;

  // Parts list helper based on engine & horsepower range
  const getBuildSpecs = (eng: "L15B" | "K20C1" | "K24", hp: number) => {
    let pistonType = "OgarageG Spec Forged Pistons (2618 Alloy)";
    let rodType = "CP-Carrillo H-Beam Connecting Rods";
    let studType = "ARP 2000 Head Stud Kit";
    const bearingType = "King Racing Coated Bearings";
    let sleeveType = "OEM Cylinder Walls (No sleeving needed)";
    const gasketType = "Athena Cooper Ring Gasket";
    let machinedNeed = "Basic Block Honing & Decking";
    
    let partsCost = 2800;
    let shopLaborCost = 1800;

    if (hp >= 700) {
      pistonType = "OgarageG Spec CP-Carrillo Pistons (Heavy duty racing dome)";
      rodType = "CP-Carrillo Pro-H-Beam Rods with Custom Age 625+ Bolts";
      studType = "ARP Custom Age 625+ Head Stud Kit (280,000 psi)";
      sleeveType = "Darton MID Ductile Iron Sleeves";
      machinedNeed = "CNC Cylinder Sleeving + Deck Surface Fire Ringing";
      partsCost = 4800;
      shopLaborCost = 3500;
    } else if (hp >= 450) {
      pistonType = "OgarageG Spec CP-Carrillo Pistons";
      rodType = "CP-Carrillo H-Beam Rods with ARP2000 Bolts";
      studType = "ARP Custom Age 625+ Head Stud Kit";
      sleeveType = "OEM Cylinder Walls (Up to 500HP safe)";
      machinedNeed = "Precision Block Boring & Decking";
      partsCost = 3500;
      shopLaborCost = 2200;
    }

    if (eng === "K24" && hp === 300) {
      pistonType = "CP High-Compression NA Pistons (12.5:1 CR)";
      rodType = "CP-Carrillo H-Beam Lightweight Rods";
      studType = "ARP2000 Head Studs";
      sleeveType = "OEM Sleeves (Iron inserts standard)";
      machinedNeed = "High-RPM Rotating Assembly Dynamic Balancing";
      partsCost = 2200;
      shopLaborCost = 1500;
    }

    return {
      pistonType,
      rodType,
      studType,
      bearingType,
      sleeveType,
      gasketType,
      machinedNeed,
      partsCost,
      shopLaborCost,
    };
  };

  const currentSpecs = getBuildSpecs(engine, targetHp);
  const totalCost = currentSpecs.partsCost + currentSpecs.shopLaborCost;

  // Add all build items to cart
  const handleAddAllToCart = () => {
    // Add Pistons
    addToCart({
      id: `${engine.toLowerCase()}-custom-builder-pistons-${targetHp}`,
      name: `OgarageG custom Spec ${engine} Forged Pistons (${targetHp}HP Kit)`,
      price: currentSpecs.partsCost * 0.45,
      image: "/photo/S__54026244_0.jpg",
      engine: engine,
      category: "pistons",
    });

    // Add Rods
    addToCart({
      id: `${engine.toLowerCase()}-custom-builder-rods-${targetHp}`,
      name: `Carrillo Spec ${engine} H-Beam Connecting Rods (${targetHp}HP Kit)`,
      price: currentSpecs.partsCost * 0.40,
      image: "/photo/S__54026246_0.jpg",
      engine: engine,
      category: "rods",
    });

    // Add Studs
    addToCart({
      id: `${engine.toLowerCase()}-custom-builder-studs-${targetHp}`,
      name: `${engine} Upgrade Studs Kit (${targetHp}HP Spec)`,
      price: currentSpecs.partsCost * 0.15,
      image: "/photo/S__54026248_0.jpg",
      engine: engine,
      category: "hardware",
    });

    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 3000);
  };

  const selectedEngineData = engines.find((e) => e.code === engine)!;

  return (
    <div className="bg-white border-2 border-black rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
      
      {/* Left panel: Inputs */}
      <div className="p-6 md:p-8 lg:w-1/2 space-y-6">
        <div>
          <span className="bg-[#9e0005] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
            Interactive Tool
          </span>
          <h3 className="text-2xl font-black text-black uppercase tracking-tight mt-2.5">
            Honda Horsepower Build Builder
          </h3>
          <p className="text-xs font-bold text-gray-500 mt-1">
            Choose your engine platform, select your horsepower goals, and see your customized component recipe!
          </p>
        </div>

        {/* 1. Choose Engine */}
        <div className="space-y-2">
          <label className="text-xs font-black text-black uppercase tracking-wider block">
            1. Select Engine Code
          </label>
          <div className="grid grid-cols-3 gap-2">
            {engines.map((e) => (
              <button
                key={e.code}
                onClick={() => {
                  setEngine(e.code);
                  setTargetHp(e.defHp);
                }}
                className={`py-3 px-2 border-2 rounded-xl text-sm font-black transition-all ${
                  engine === e.code
                    ? "bg-black border-black text-white shadow-md"
                    : "border-gray-200 text-black hover:border-[#9e0005]"
                }`}
              >
                {e.code}
              </button>
            ))}
          </div>
          <p className="text-[10px] font-bold text-gray-500 mt-1 italic">
            Configuring: {selectedEngineData.name}
          </p>
        </div>

        {/* 2. Horsepower Goal */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-black text-black uppercase tracking-wider">
              2. Target Horsepower Goal
            </label>
            <span className="bg-red-50 text-[#9e0005] border border-red-200 text-base font-black px-3 py-1 rounded-xl flex items-center gap-1 select-none">
              <Gauge size={16} />
              <span>{targetHp} HP</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {selectedEngineData.ranges.map((hp) => (
              <button
                key={hp}
                onClick={() => setTargetHp(hp)}
                className={`py-3 px-2 border-2 rounded-xl text-xs font-black transition-all uppercase tracking-wider ${
                  targetHp === hp
                    ? "bg-[#9e0005] border-[#9e0005] text-white shadow-md"
                    : "border-gray-200 text-black hover:border-[#9e0005] bg-gray-50"
                }`}
              >
                {hp >= 750 ? "⚡ Extreme" : hp >= 450 ? "💪 Pro-Street" : "🚗 Street+"}
                <span className="block text-sm font-black mt-0.5">{hp} HP</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Build Cost Summary Box */}
        <div className="bg-gray-50 border border-gray-150 rounded-2xl p-5 space-y-4">
          <h4 className="text-xs font-black text-black uppercase tracking-wider border-b border-gray-200 pb-2">
            Estimated Project Costing
          </h4>
          <div className="space-y-2 text-xs font-bold text-gray-600">
            <div className="flex justify-between">
              <span>Tailored Internal Components</span>
              <span className="text-black font-black">${currentSpecs.partsCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>In-House Machine & Labor estimate</span>
              <span className="text-black font-black">${currentSpecs.shopLaborCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-t border-dashed border-gray-200 pt-2 text-sm text-black font-black uppercase">
              <span>Total Estimated Build</span>
              <span className="text-base text-[#9e0005]">${totalCost.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddAllToCart}
              disabled={addedAll}
              className={`flex-1 font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 transform active:scale-95 ${
                addedAll
                  ? "bg-green-600 text-white"
                  : "bg-black hover:bg-[#9e0005] text-white"
              }`}
            >
              <ShoppingCart size={16} />
              <span>{addedAll ? "Kits Added to Cart!" : "Add Engine Parts Kit to Cart"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right panel: Output specifications */}
      <div className="p-6 md:p-8 lg:w-1/2 bg-gray-50 flex flex-col justify-between space-y-6">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Custom Recipe</span>
          <h3 className="text-xl font-black text-black uppercase tracking-tight mt-1.5 border-l-4 border-[#9e0005] pl-3">
            Build Configuration Spec Sheet
          </h3>
        </div>

        {/* Dynamic Recipe Details */}
        <div className="space-y-4 flex-1 py-4">
          
          {/* Pistons */}
          <div className="flex gap-3.5 items-start">
            <div className="w-6 h-6 bg-[#9e0005]/10 border border-[#9e0005]/20 rounded-full flex items-center justify-center text-[#9e0005] shrink-0 mt-0.5 font-bold text-xs select-none">
              P
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Piston Set specification</p>
              <p className="text-sm font-black text-black uppercase tracking-tight mt-0.5">{currentSpecs.pistonType}</p>
            </div>
          </div>

          {/* Rods */}
          <div className="flex gap-3.5 items-start">
            <div className="w-6 h-6 bg-[#9e0005]/10 border border-[#9e0005]/20 rounded-full flex items-center justify-center text-[#9e0005] shrink-0 mt-0.5 font-bold text-xs select-none">
              R
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Connecting Rods specification</p>
              <p className="text-sm font-black text-black uppercase tracking-tight mt-0.5">{currentSpecs.rodType}</p>
            </div>
          </div>

          {/* Head studs */}
          <div className="flex gap-3.5 items-start">
            <div className="w-6 h-6 bg-[#9e0005]/10 border border-[#9e0005]/20 rounded-full flex items-center justify-center text-[#9e0005] shrink-0 mt-0.5 font-bold text-xs select-none">
              S
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Fasteners & Studs</p>
              <p className="text-sm font-black text-black uppercase tracking-tight mt-0.5">{currentSpecs.studType}</p>
            </div>
          </div>

          {/* Bearings & Sleeves */}
          <div className="flex gap-3.5 items-start">
            <div className="w-6 h-6 bg-[#9e0005]/10 border border-[#9e0005]/20 rounded-full flex items-center justify-center text-[#9e0005] shrink-0 mt-0.5 font-bold text-xs select-none">
              B
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide">Cylinder sleeving & block preparation</p>
              <p className="text-sm font-black text-black uppercase tracking-tight mt-0.5">{currentSpecs.sleeveType}</p>
            </div>
          </div>

          {/* Machining service requirements */}
          <div className="flex gap-3.5 items-start bg-white border border-gray-150 p-4 rounded-xl">
            <Wrench className="text-[#9e0005] shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wide flex items-center gap-1">
                <span>Recommended Engine Machining</span>
                <span title="Necessary machine-shop operations for this level of stress.">
                  <HelpCircle size={10} className="text-gray-400" />
                </span>
              </p>
              <p className="text-xs font-black text-black uppercase tracking-tight mt-1">{currentSpecs.machinedNeed}</p>
            </div>
          </div>
        </div>

        {/* Engine Quality Guarantee Badge */}
        <div className="bg-black text-white p-4 rounded-2xl flex items-center gap-3">
          <Shield className="text-[#9e0005] shrink-0 animate-pulse" size={24} />
          <div className="text-[10px] font-bold text-gray-400 leading-normal">
            <p className="text-white font-black uppercase text-xs">OgarageG Engineered Guarantee</p>
            <p className="mt-0.5">All OgarageG recommended packages are race-tested and precision balanced for zero vibration and maximum longevity under race loads.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
