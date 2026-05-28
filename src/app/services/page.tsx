"use client";

import React from "react";
import { ServiceCard } from "../../components/ServiceCard";
import { ShieldCheck, Flame, Wrench, FileCheck2, Award, Clock } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      id: "sleeving",
      name: "Darton Mid-Cylinder Sleeving",
      price: "Starts at $1,199",
      image: "/photo/648448042_26251179264499077_3309831350860693678_n.jpg",
      description: "Prevent open-deck cylinder wall cracking under wild boost. We machine the block and press in heavyweight Darton ductile iron sleeves designed for up to 35+ psi of boost.",
      highlights: [
        "Darton Ductile Iron (120,000 psi tensile strength)",
        "Precision in-house CNC boring & fitment",
        "Perfect cylinder concentricity guaranteed",
        "Essential for Civic L15B/K20C1 builds shooting for 500+ HP"
      ]
    },
    {
      id: "cnc-head",
      name: "CNC VTEC Cylinder Head Machining & Porting",
      price: "Starts at $1,299",
      image: "/photo/700285747_27054805450803117_158015724386763124_n.jpg",
      description: "Optimize flow dynamics and combustion geometry. Features oversized race valve options, manganese-bronze valve guides, and proprietary CNC porting specifications.",
      highlights: [
        "Up to +20% intake flow rate improvement",
        "Custom multi-angle valve jobs for racing seal",
        "Perfect combustion chamber volume matching",
        "Premium manganese-bronze heavy duty valve guides"
      ]
    },
    {
      id: "fire-ringing",
      name: "Cylinder Block Firegrooving & Fire Rings",
      price: "Starts at $599",
      image: "/photo/S__54026247_0.jpg",
      description: "Create an impenetrable mechanical seal around each combustion chamber. We machine custom grooves into the block deck surface and fit custom stainless steel fire rings.",
      highlights: [
        "Stainless steel compression ring inserts",
        "Eliminates head gasket blowouts up to 45+ psi",
        "Proprietary groove depth specifications",
        "Specifically recommended for Civic FC/FK race builds"
      ]
    },
    {
      id: "blueprint",
      name: "Short Block Engine Blueprinting & Assembly",
      price: "Starts at $1,999",
      image: "/photo/700306268_27054805110803151_6200875956161866076_n.jpg",
      description: "Complete engineered bottom-end blueprint assembly. Includes micro-measurement documentation of bearing clearances, rod side play, and custom ring gapping.",
      highlights: [
        "Full micro-measurement clearance spec sheet provided",
        "Piston ring gaps custom set for fuel type (E85 / Gas)",
        "Zero-balance rotational blueprinting",
        "Assembled in dynamic dust-controlled engine clean room"
      ]
    },
    {
      id: "full-build",
      name: "Long Block Blueprinted Engine Build",
      price: "Starts at $3,999",
      image: "/photo/S__54026249.jpg",
      description: "A complete turnkey high-performance engine build from block deck to valvetrain assembly. Engineered for racetrack reliability.",
      highlights: [
        "Complete short block blueprinting included",
        "Cylinder head assembly with custom cams",
        "Timing alignment and dynamic chain replacement",
        "Pressurized hot-leak verification and priming check"
      ]
    },
    {
      id: "balancing",
      name: "Crankshaft Micro-Polishing & Balancing",
      price: "Starts at $349",
      image: "/photo/S__54026246_0.jpg",
      description: "Eliminate harmonic engine vibration at high RPM. We polish crankshaft journals to a mirror finish and dynamically balance the rotating assembly to within 0.1 grams.",
      highlights: [
        "Dynamic balancing at up to 9,000 RPM simulation",
        "Micro-polished rod and main journals",
        "Improves main bearing lifespan by up to 150%",
        "Crucial for high-revving Honda VTEC engines"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Dynamic Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <Wrench size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            OgarageG Race Shop
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            In-House Tuning & Machining Services
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Take your Honda engine build to the next level. Our in-house machine shop is staffed by master builders to deliver race-ready, blueprinted perfection.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {servicesList.map((srv) => (
          <ServiceCard
            key={srv.id}
            id={srv.id}
            name={srv.name}
            price={srv.price}
            image={srv.image}
            description={srv.description}
            highlights={srv.highlights}
          />
        ))}
      </div>

      {/* Trust & Process Highlights */}
      <section className="bg-gray-50 border-2 border-black rounded-3xl p-8 space-y-8">
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <h2 className="text-2xl font-black text-black uppercase tracking-tight">
            Our Engine Building Process
          </h2>
          <p className="text-xs font-bold text-gray-500 leading-relaxed">
            Every block and head sent to OgarageG is treated with aerospace tolerances and undergoes thorough inspections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: <Wrench size={24} />,
              title: "1. Intake & Wash",
              desc: "Engine blocks are hot-tanked and ultrasonically washed to eliminate oils, debris, and corrosion before measurement."
            },
            {
              icon: <Award size={24} />,
              title: "2. Micro-Measurement",
              desc: "Using calibrated dial bore indicators, we measure clearances to the nearest ten-thousandth of an inch."
            },
            {
              icon: <Flame size={24} />,
              title: "3. Precision Machining",
              desc: "Boring, decking, sleeving, and porting operations are conducted in-house on high-rigidity CNC machinery."
            },
            {
              icon: <FileCheck2 size={24} />,
              title: "4. Blueprint Specs",
              desc: "A comprehensive digital blueprint binder containing every clearance specification is compiled for your build record."
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-white border border-gray-150 p-5 rounded-2xl space-y-3 shadow-sm flex flex-col items-center">
              <div className="w-10 h-10 bg-red-50 text-[#9e0005] rounded-full flex items-center justify-center border border-red-150">
                {step.icon}
              </div>
              <h4 className="font-extrabold text-sm uppercase text-black">{step.title}</h4>
              <p className="text-[11px] font-bold text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping Blocks details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#9e0005]/20 to-transparent pointer-events-none" />
        <div className="space-y-6">
          <span className="bg-[#9e0005] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full w-max tracking-wider">
            Logistics & Freight
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-white">
            Shipping Your Engine To OgarageG
          </h2>
          <p className="text-xs font-bold text-gray-400 leading-relaxed text-justify">
            We regularly receive cylinder heads and engine blocks from clients throughout Thailand. We make engine freight shipping painless. We can schedule door-to-door liftgate freight pick-up for your crated block, supply packing guidelines, and coordinate logistics safely.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs font-bold">
            <div className="flex gap-2 items-center text-gray-300">
              <Clock size={16} className="text-[#9e0005] shrink-0" />
              <span>Average machining turn: 2 weeks</span>
            </div>
            <div className="flex gap-2 items-center text-gray-300">
              <ShieldCheck size={16} className="text-[#9e0005] shrink-0" />
              <span>Fully freight insured</span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
          <h4 className="text-sm font-black uppercase tracking-wider text-white border-l-2 border-[#9e0005] pl-2">
            Ready to schedule machining?
          </h4>
          <p className="text-xs font-bold text-gray-400 leading-relaxed">
            Contact our freight coordination desk directly at **Sales@OgarageG.com** or call **+66 80-555-5150** to receive a custom freight quote and package coding sheet!
          </p>
          <div className="flex gap-3 text-xs font-bold">
            <a
              href="mailto:sales@ogarageg.com"
              className="bg-[#9e0005] text-white hover:bg-white hover:text-black font-extrabold text-xs uppercase tracking-wider py-3 px-5 rounded-xl text-center flex-1 shadow transition-all"
            >
              Email Machining Advisor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
