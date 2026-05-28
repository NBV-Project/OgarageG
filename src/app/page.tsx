/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Gauge, Award, Star, Flame, X, ZoomIn } from "lucide-react";
import { BuildCalculator } from "../components/BuildCalculator";
import { ServiceCard } from "../components/ServiceCard";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { galleryItems } from "../data/gallery";

const heroSlides = [
  {
    title: "THE HONDA CIVIC SPECIALISTS",
    subtitle: "Billet internals & components designed to handle 800+ HP on Civic FC / FK platforms.",
    cta: "Shop L15B Parts",
    link: "/shop?engine=L15B",
    bgImage: "/photo/584772139_25313103488306664_7245076373796934313_n.jpg",
    tagline: "🔥 WORLD-RECORD HONDA PERFORMANCE"
  },
  {
    title: "CNC MACHINING & ENGINE ASSEMBLY",
    subtitle: "From Darton block sleeving to full blueprinted engine assembly, all done in-house.",
    cta: "Explore Tuning Services",
    link: "/services",
    bgImage: "/photo/648178666_26251178824499121_2090250045273905207_n.jpg",
    tagline: "🛠️ AEROSPACE ACCURACY & blueprinted"
  },
  {
    title: "STAGE 3 PRO-SERIES HONDA KITS",
    subtitle: "All-in-one comprehensive engine internals packages for street & circuit racing.",
    cta: "Custom Piston Builder",
    link: "/custom-pistons",
    bgImage: "/photo/S__54026249.jpg",
    tagline: "⚡ ZERO WEAK POINTS"
  }
];

interface ChassisPlatform {
  code: string;
  label: string;
  years: string;
  engine: string;
  hpSpec: string;
  link: string;
  bgImage: string;
}

const chassisPlatforms: ChassisPlatform[] = [
  {
    code: "CIVIC EG / EK",
    label: "Golden Era VTEC Hatchback",
    years: "1992 - 2000",
    engine: "B-Series VTEC / K-Swap NA",
    hpSpec: "300 - 800+ HP",
    link: "/shop?engine=B-Series",
    bgImage: "/photo/672672351_26711784485105217_295210917605046360_n.jpg"
  },
  {
    code: "INTEGRA DC2 / FD2",
    label: "High-RPM VTEC Legends",
    years: "1996 - 2011",
    engine: "K20A / B18C Spec R",
    hpSpec: "240 - 600+ HP",
    link: "/shop?engine=K-Series",
    bgImage: "/photo/702703461_27095896783360650_8758496579318148763_n.jpg"
  },
  {
    code: "CIVIC FK8 TYPE R",
    label: "VTEC Turbo Track Weapon",
    years: "2017 - 2021",
    engine: "K20C1 Turbocharged",
    hpSpec: "350 - 980+ HP",
    link: "/shop?engine=K20C1",
    bgImage: "/photo/653914375_26394704970146505_325215423282693049_n.jpg"
  },
  {
    code: "CIVIC FL5 TYPE R",
    label: "Sleek Modern Fastback",
    years: "2022+",
    engine: "K20C1 / L15T Turbo",
    hpSpec: "330 - 850+ HP",
    link: "/shop?engine=L15B",
    bgImage: "/photo/657417279_26465819353035066_3210606262633383033_n.jpg"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "engines" | "tuning" | "cars">("all");

  const filteredGallery = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  // Auto scroll slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const featuredParts = products.filter((p) => p.isFeatured);

  const services = [
    {
      id: "sleeving",
      name: "Darton Cylinder Sleeving",
      price: "Starts at $1,199",
      image: "/photo/648448042_26251179264499077_3309831350860693678_n.jpg",
      description: "Prevent open-deck cylinder walls cracking under wild boost. We mill the block and press in heavyweight Darton ductile iron sleeves for absolute ring seal.",
      highlights: ["Darton Dry/MID Sleeves", "In-house CNC boring & positioning", "Tested up to 40+ psi boost pressure"]
    },
    {
      id: "cnc-head",
      name: "CNC VTEC Cylinder Head Work",
      price: "Starts at $1,299",
      image: "/photo/700285747_27054805450803117_158015724386763124_n.jpg",
      description: "Optimize airflow dynamics and compression. Features oversized race valve configurations, manganese-bronze valve guides, and proprietary VTEC port specs.",
      highlights: ["Up to +20% intake port volume", "Multi-angle race valve jobs", "Combustion chamber volume matching"]
    },
    {
      id: "assembly",
      name: "Short / Long Block Blueprinting",
      price: "Starts at $1,999",
      image: "/photo/700306268_27054805110803151_6200875956161866076_n.jpg",
      description: "Let our professional race builders assemble your dream Honda engine. Every engine is blueprinted, balanced to +/- 0.5 grams, and fully leak tested.",
      highlights: ["Blueprinted assemblyspec logs", "Custom piston ring gapping for E85", "Pressurized priming checking"]
    }
  ];

  // Lightbox handlers
  const handlePrevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Image Carousel */}
      <section className="relative h-[650px] bg-black overflow-hidden select-none border-b-8 border-black">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Blur Image */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover transform scale-105 transition-transform duration-1000"
            />
            {/* Text Contents */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl space-y-6 text-white text-left animate-slideUp">
                <span className="bg-[#9e0005] text-white text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full tracking-wider shadow-md select-none inline-block">
                  {slide.tagline}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none text-white drop-shadow-lg">
                  {slide.title.split(" ").map((w, i) => (
                    <span key={i} className={w === "L15B" || w === "HONDA" || w === "MACHINING" || w === "TURBO" || w === "CIVIC" ? "text-[#9e0005]" : ""}>
                      {w}{" "}
                    </span>
                  ))}
                </h1>
                <p className="text-base sm:text-lg font-bold text-gray-300 drop-shadow-md leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href={slide.link}
                    className="bg-[#9e0005] hover:bg-white text-white hover:text-black font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-transparent hover:border-black"
                  >
                    <span>{slide.cta}</span>
                    <ChevronRight size={16} />
                  </Link>
                  <Link
                    href="/custom-pistons"
                    className="bg-transparent hover:bg-white text-white hover:text-black font-extrabold text-sm uppercase tracking-wider py-4 px-8 rounded-xl transition-all flex items-center gap-2 border-2 border-white hover:border-white shadow-md"
                  >
                    <span>Custom Specifications</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                idx === currentSlide ? "bg-[#9e0005] w-8 border-[#9e0005]" : "bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. SHOP BY HONDA CHASSIS PLATFORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest">Shop By Platform</span>
          <h2 className="text-3xl font-black text-black uppercase tracking-tight">
            SHOP BY HONDA CHASSIS
          </h2>
          <p className="text-xs font-bold text-gray-500 max-w-lg mx-auto leading-relaxed">
            Select your high-performance Honda platform below to filter our engineering catalog for precise component blueprints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chassisPlatforms.map((chassis) => (
            <Link
              key={chassis.code}
              href={chassis.link}
              className="relative overflow-hidden rounded-3xl border-2 border-black hover:border-[#9e0005] group transition-all duration-500 hover:shadow-[0_15px_40px_rgba(158,0,5,0.25)] flex flex-col justify-between h-[360px] scroll-mt-24 cursor-pointer"
            >
              {/* Background realistic workshop built car photo */}
              <img
                src={chassis.bgImage}
                alt={chassis.code}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out select-none"
              />

              {/* Dark atmospheric shadow gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 opacity-90 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

              {/* Glowing Red Ambient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9e0005]/45 via-transparent to-[#9e0005]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Futuristic HUD Tech Lines & Status */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none rounded-xl group-hover:border-[#9e0005]/30 transition-colors duration-500">
                {/* Corner bracket styling */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30 group-hover:border-[#9e0005] transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30 group-hover:border-[#9e0005] transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30 group-hover:border-[#9e0005] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30 group-hover:border-[#9e0005] transition-colors" />
                
                {/* HUD Live Connection/Data telemetry */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-white/40 tracking-widest font-black uppercase flex items-center gap-1.5 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9e0005] animate-pulse" />
                  <span>OG.SYS // {chassis.years}</span>
                </div>
              </div>

              {/* Top Bar inside Card */}
              <div className="relative z-10 p-6 flex justify-between items-start w-full">
                <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white/80 group-hover:text-white group-hover:border-[#9e0005]/50 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md transition-colors select-none font-bold">
                  {chassis.hpSpec}
                </span>
                <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide shadow-sm select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  SHOP SPEC →
                </span>
              </div>

              {/* Technical Bottom Blueprint Details */}
              <div className="relative z-10 p-6 space-y-2 select-none">
                {/* Tech category header */}
                <div className="text-[10px] font-mono font-black text-[#9e0005] uppercase tracking-widest">
                  PLATFORM BLUEPRINTS
                </div>
                {/* Chassis code name */}
                <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#9e0005] transition-colors drop-shadow-md">
                  {chassis.code}
                </h3>
                
                {/* Tech specs dividing line */}
                <div className="h-[1px] bg-white/10 group-hover:bg-[#9e0005]/30 transition-colors w-full" />
                
                {/* Label metadata and engine spec */}
                <div className="space-y-1 pt-1">
                  <p className="text-[11px] font-bold text-gray-300 uppercase leading-none">
                    {chassis.label}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-mono font-extrabold text-gray-400">
                    <span className="group-hover:text-white transition-colors">{chassis.engine}</span>
                    <span className="bg-[#9e0005] text-white p-1 rounded-full transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. In-House Machining & Machined Engine Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest">In-house engine shop</span>
            <h2 className="text-3xl font-black text-black uppercase tracking-tight">
              Machining & blueprint assembly services
            </h2>
            <p className="text-xs font-bold text-gray-500 max-w-xl leading-relaxed">
              We operate high-rigidity boring gear, custom milling machinery, and specialized tools to prepare blocks and valvetrains for wild street & racetrack limits.
            </p>
          </div>
          <Link
            href="/services"
            className="text-xs font-black text-black uppercase tracking-wider hover:text-[#9e0005] hover:underline flex items-center gap-1 shrink-0 group"
          >
            <span>View All Custom Services</span>
            <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv) => (
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
      </section>

      {/* 4. Horsepower Build Calculator Banner */}
      <section className="bg-black py-16 border-y-8 border-[#9e0005] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(#9e0005_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest flex items-center justify-center gap-1.5 animate-pulse">
              <Flame size={14} />
              <span>Interactive Engine Builder</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
              Blueprint Your Ultimate Honda Engine
            </h2>
            <p className="text-xs font-bold text-gray-400 max-w-md mx-auto leading-normal">
              Select your engine platform, choose your performance limits, and let our blueprinter calculate the optimal component recipe.
            </p>
          </div>

          <BuildCalculator />
        </div>
      </section>

      {/* 5. Featured Performance Internals (Shop Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest">Flagship Internals</span>
            <h2 className="text-3xl font-black text-black uppercase tracking-tight">
              Featured Performance Internals
            </h2>
            <p className="text-xs font-bold text-gray-500 max-w-xl leading-relaxed">
              Shop custom forged pistons, heavy-duty H-beam connecting rods, and super alloy fasteners.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs font-black text-black uppercase tracking-wider hover:text-[#9e0005] hover:underline flex items-center gap-1 shrink-0 group"
          >
            <span>Browse Full Catalog</span>
            <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredParts.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 6. REAL OGARAGEG PROJECTS & WORKS GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Star size={14} className="text-[#9e0005]" />
            <span>OGARAGEG PORTFOLIO</span>
          </span>
          <h2 className="text-3xl font-black text-black uppercase tracking-tight">
            Our Works & Workshop Gallery
          </h2>
          <p className="text-xs font-bold text-gray-500 max-w-md mx-auto leading-relaxed">
            Take a look inside the real OgarageG workshop in Nonthaburi. Tuning bays, high boost dyno tests, engine blueprints, and racetrack builds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 pb-4">
          <button
            onClick={() => {
              setActiveCategory("all");
              setLightboxIndex(null);
            }}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#9e0005] text-white shadow-md"
                : "bg-white text-black border border-gray-300 hover:border-black"
            }`}
          >
            All Works ({galleryItems.length})
          </button>
          <button
            onClick={() => {
              setActiveCategory("engines");
              setLightboxIndex(null);
            }}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === "engines"
                ? "bg-[#9e0005] text-white shadow-md"
                : "bg-white text-black border border-gray-300 hover:border-black"
            }`}
          >
            Engines & Machining ({galleryItems.filter(i => i.category === "engines").length})
          </button>
          <button
            onClick={() => {
              setActiveCategory("tuning");
              setLightboxIndex(null);
            }}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === "tuning"
                ? "bg-[#9e0005] text-white shadow-md"
                : "bg-white text-black border border-gray-300 hover:border-black"
            }`}
          >
            Dyno & Tuning Cells ({galleryItems.filter(i => i.category === "tuning").length})
          </button>
          <button
            onClick={() => {
              setActiveCategory("cars");
              setLightboxIndex(null);
            }}
            className={`px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === "cars"
                ? "bg-[#9e0005] text-white shadow-md"
                : "bg-white text-black border border-gray-300 hover:border-black"
            }`}
          >
            Finished Cars ({galleryItems.filter(i => i.category === "cars").length})
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="bg-gray-150 border border-gray-200 rounded-xl overflow-hidden aspect-square relative group cursor-pointer shadow-sm hover:shadow-lg hover:border-[#9e0005] transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Image Label Overlay on Hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <span className="text-[9px] font-black text-[#9e0005] uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-xs font-bold text-white uppercase truncate">
                  {item.title}
                </h4>
                <p className="text-[9px] text-gray-400 font-medium line-clamp-2 mt-0.5">
                  {item.description}
                </p>
                <div className="absolute top-2 right-2 bg-white/90 text-black p-1.5 rounded-full shadow-md">
                  <ZoomIn size={12} className="text-[#9e0005]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 animate-fadeIn">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center text-white gap-4 z-50 max-w-5xl mx-auto w-full">
            <div className="text-left space-y-0.5">
              <span className="font-extrabold text-[9px] uppercase tracking-widest bg-[#9e0005] px-3 py-1 rounded-full select-none inline-block">
                OgarageG {filteredGallery[lightboxIndex].category} ({lightboxIndex + 1} / {filteredGallery.length})
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight leading-tight mt-1">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs font-medium text-gray-400 line-clamp-1 sm:line-clamp-none max-w-2xl">
                {filteredGallery[lightboxIndex].description}
              </p>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="self-end sm:self-center text-white hover:text-[#9e0005] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all shrink-0 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={26} />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-between gap-4 max-w-5xl mx-auto w-full select-none">
            <button
              onClick={handlePrevImage}
              className="text-white hover:text-[#9e0005] p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all shrink-0 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="max-h-[65vh] max-w-full flex items-center justify-center p-2 relative">
              <img
                src={filteredGallery[lightboxIndex].src}
                alt={filteredGallery[lightboxIndex].title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl animate-fadeIn"
              />
            </div>

            <button
              onClick={handleNextImage}
              className="text-white hover:text-[#9e0005] p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all shrink-0 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="text-center text-gray-500 text-[10px] font-bold uppercase tracking-widest py-2 select-none">
            ← Use Left & Right Buttons or Keys to Navigate →
          </div>
        </div>
      )}

      {/* 7. Garage Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-black text-[#9e0005] uppercase tracking-widest">OgarageG Projects</span>
          <h2 className="text-3xl font-black text-black uppercase tracking-tight">
            Featured Projects & Builds
          </h2>
          <p className="text-xs font-bold text-gray-500 max-w-md mx-auto leading-relaxed">
            See our engineering in action. These showcase project builds use OgarageG off-the-shelf catalog parts to dominate drag strips and track races.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Build 1 */}
          <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative select-none">
              <img
                src="/photo/699573108_27054805167469812_1791772490447201553_n.jpg"
                alt="Civic FK8 Type R"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-between p-6 md:hidden">
                <span className="bg-[#9e0005] text-white text-[10px] font-black px-2 py-0.5 rounded-full w-max uppercase">
                  980 WHEEL HP
                </span>
              </div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="hidden md:inline-block bg-[#9e0005] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider w-max select-none">
                  980 WHEEL HP
                </span>
                <h3 className="font-extrabold text-lg text-black uppercase tracking-tight">
                  THE CIVIC FK8 TYPE R &quot;MONSTER&quot;
                </h3>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">
                  Engineered in our workshop to test K20C1 block limits. Features custom CP-Carrillo pistons, Custom Age 625+ studs, Darton sleeves, and our proprietary cylinder fire-ringing.
                </p>
              </div>
              <Link
                href="/shop?engine=K20C1"
                className="text-xs font-extrabold text-[#9e0005] hover:text-black uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Get K20C1 Build Recipe</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Build 2 */}
          <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative select-none">
              <img
                src="/photo/672677300_26711785435105122_3285091312195490304_n.jpg"
                alt="Civic FC L15B"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-between p-6 md:hidden">
                <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 rounded-full w-max uppercase">
                  650 HP STREET+
                </span>
              </div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="hidden md:inline-block bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider w-max select-none">
                  650 HP STREET+
                </span>
                <h3 className="font-extrabold text-lg text-black uppercase tracking-tight">
                  THE L15B CIVIC FC STREET KILLER
                </h3>
                <p className="text-xs font-bold text-gray-500 leading-relaxed">
                  A daily drivable street weapon utilizing our custom Darton sleeve block kit. Balanced and blueprint assembled to generate maximum torque under heavy turbo boost.
                </p>
              </div>
              <Link
                href="/shop?engine=L15B"
                className="text-xs font-extrabold text-[#9e0005] hover:text-black uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Get L15B Build Recipe</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Trust badges grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-150 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-red-50 text-[#9e0005] rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-black uppercase tracking-wider">Race-Blueprint Certified</h4>
              <p className="text-xs font-bold text-gray-500 leading-normal mt-1">
                Every component is individually micro-measured and certified for maximum roundness, concentricity, and balance tolerances.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-red-50 text-[#9e0005] rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
              <Gauge size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-black uppercase tracking-wider">Engine Building Advisor</h4>
              <p className="text-xs font-bold text-gray-500 leading-normal mt-1">
                Stuck on your build strategy? Our in-house advisors offer technical engine-blueprint advisory sessions to help you design a foolproof recipe.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-red-50 text-[#9e0005] rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-sm">
              <Star size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-black uppercase tracking-wider">In-House Quality Control</h4>
              <p className="text-xs font-bold text-gray-500 leading-normal mt-1">
                All block sleeving, CNC chamber milling, head porting, and engine blueprint assembly are completed under one roof by master machinists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
