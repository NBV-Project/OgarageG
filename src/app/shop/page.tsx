"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "../../data/products";
import { ProductCard } from "../../components/ProductCard";
import { Filter, SlidersHorizontal, Grid3X3, EyeOff, Search } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialEngine = searchParams.get("engine") || "all";
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedEngine, setSelectedEngine] = useState<string>(initialEngine);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

  // Computed state - no useEffect needed!
  const filteredProducts = products.filter((p) => {
    // 1. Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.engine.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      if (!match) return false;
    }

    // 2. Engine Filter
    if (selectedEngine !== "all") {
      const match =
        p.engine.toLowerCase() === selectedEngine.toLowerCase() ||
        p.engine === "All Honda";
      if (!match) return false;
    }

    // 3. Category Filter
    if (selectedCategory !== "all") {
      if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }
    }

    return true;
  });

  // Categories list with count
  const getCategoryCount = (cat: string) => {
    if (cat === "all") return products.length;
    return products.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
  };

  const getEngineCount = (eng: string) => {
    if (eng === "all") return products.length;
    return products.filter((p) => p.engine.toLowerCase() === eng.toLowerCase() || p.engine === "All Honda").length;
  };

  const categories = [
    { code: "all", label: "All Components", count: getCategoryCount("all") },
    { code: "pistons", label: "Forged Pistons", count: getCategoryCount("pistons") },
    { code: "rods", label: "Connecting Rods", count: getCategoryCount("rods") },
    { code: "hardware", label: "ARP Fasteners / Studs", count: getCategoryCount("hardware") },
    { code: "kits", label: "Stage Engine Kits", count: getCategoryCount("kits") },
    { code: "sleeves", label: "Cylinder Sleeves", count: getCategoryCount("sleeves") },
    { code: "crankshafts", label: "Billet Crankshafts", count: getCategoryCount("crankshafts") },
  ];

  const engines = [
    { code: "all", label: "All Engines", count: getEngineCount("all") },
    { code: "L15B", label: "Honda L15B", count: getEngineCount("L15B") },
    { code: "K20C1", label: "Honda K20C1", count: getEngineCount("K20C1") },
    { code: "K-Series", label: "Honda K20/K24", count: getEngineCount("K-Series") },
    { code: "B-Series", label: "Honda B-Series", count: getEngineCount("B-Series") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Dynamic Header banner */}
      <div className="bg-black border-l-8 border-[#9e0005] p-8 rounded-2xl text-white select-none relative overflow-hidden">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center p-6 shrink-0 pointer-events-none">
          <SlidersHorizontal size={300} />
        </div>
        <div className="max-w-lg space-y-2 relative z-10">
          <span className="bg-[#9e0005] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wide">
            OgarageG Catalog
          </span>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            Honda Performance Shop
          </h1>
          <p className="text-xs font-bold text-gray-400 leading-normal">
            Browse our meticulously designed racing parts catalog. Filter by your specific Honda engine platform or required internal components.
          </p>
        </div>
      </div>

      {/* Primary Shop layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4 space-y-6 shrink-0">
          
          {/* Search Box */}
          <div className="bg-white border-2 border-black rounded-2xl p-5 space-y-3 shadow-sm">
            <h3 className="text-xs font-black text-black uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-gray-150">
              <Search size={14} />
              <span>Search Parts</span>
            </h3>
            <input
              type="text"
              placeholder="Search by keywords..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-black focus:outline-none focus:border-[#9e0005] font-bold transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Engine Filter */}
          <div className="bg-white border-2 border-black rounded-2xl p-5 space-y-3 shadow-sm">
            <h3 className="text-xs font-black text-black uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-gray-150">
              <Filter size={14} />
              <span>Engine Platform</span>
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-1.5 text-xs font-bold">
              {engines.map((eng) => (
                <button
                  key={eng.code}
                  onClick={() => setSelectedEngine(eng.code)}
                  className={`flex justify-between items-center w-full px-3 py-2.5 rounded-xl transition-all ${
                    selectedEngine === eng.code
                      ? "bg-red-50 text-[#9e0005] font-black border-l-4 border-[#9e0005]"
                      : "text-black hover:bg-gray-50 hover:text-[#9e0005]"
                  }`}
                >
                  <span>{eng.label}</span>
                  <span className="bg-gray-100 text-gray-400 font-extrabold text-[9px] px-2 py-0.5 rounded-full select-none">
                    {eng.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-white border-2 border-black rounded-2xl p-5 space-y-3 shadow-sm">
            <h3 className="text-xs font-black text-black uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-gray-150">
              <Grid3X3 size={14} />
              <span>Categories</span>
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-1.5 text-xs font-bold">
              {categories.map((cat) => (
                <button
                  key={cat.code}
                  onClick={() => setSelectedCategory(cat.code)}
                  className={`flex justify-between items-center w-full px-3 py-2.5 rounded-xl transition-all ${
                    selectedCategory === cat.code
                      ? "bg-red-50 text-[#9e0005] font-black border-l-4 border-[#9e0005]"
                      : "text-black hover:bg-gray-50 hover:text-[#9e0005]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="bg-gray-100 text-gray-400 font-extrabold text-[9px] px-2 py-0.5 rounded-full select-none">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right side: Catalog Grid */}
        <div className="flex-1 space-y-6">
          {/* Header count details */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span>Showing {filteredProducts.length} high-performance parts</span>
            <div className="flex gap-2">
              <span className="bg-gray-100 text-black px-2.5 py-1 rounded-full text-[9px]">
                Engine: {selectedEngine}
              </span>
              <span className="bg-gray-100 text-black px-2.5 py-1 rounded-full text-[9px]">
                Category: {selectedCategory}
              </span>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-gray-50 border border-gray-150 rounded-2xl py-20 px-4 text-center space-y-4">
              <EyeOff className="text-gray-400 mx-auto" size={48} />
              <div>
                <h3 className="font-extrabold text-lg uppercase text-black">No Products Match Filters</h3>
                <p className="text-xs text-gray-500 font-bold mt-1">
                  Try adjusting your search query, selecting &quot;All Engines&quot; or choosing another component group.
                </p>
              </div>
              <button
                onClick={() => {
                  setSelectedEngine("all");
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="bg-[#9e0005] text-white hover:bg-black font-extrabold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-md transition-all inline-block"
              >
                Reset Shop Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center font-extrabold text-gray-500">
        Loading Shop Catalog...
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
