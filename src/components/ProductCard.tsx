/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Eye, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      engine: product.engine,
      category: product.category,
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      {/* Product Card Container */}
      <div className="bg-white border-2 border-gray-150 hover:border-[#9e0005] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full relative">
        
        {/* Engine Badge & Category */}
        <div className="absolute top-3 left-3 z-10 flex gap-1.5 flex-wrap">
          <span className="bg-[#9e0005] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider select-none">
            {product.engine}
          </span>
          <span className="bg-black text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider select-none">
            {product.category}
          </span>
        </div>

        {/* Product Image Area */}
        <div className="h-60 bg-gray-50 border-b border-gray-100 p-6 flex items-center justify-center relative overflow-hidden shrink-0 select-none">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          {/* Quick Action Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-black hover:bg-[#9e0005] hover:text-white p-3 rounded-full shadow-md font-bold transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
              title="Quick View Specs"
            >
              <Eye size={20} />
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-[#9e0005] text-white hover:bg-black p-3 rounded-full shadow-md font-bold transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
              title="Add to Cart"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-black uppercase tracking-tight line-clamp-2 hover:text-[#9e0005] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs font-bold text-gray-500 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Quick Specs Preview */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 space-y-1.5 text-xs font-bold text-gray-600">
            {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
              <div key={key} className="flex justify-between gap-2">
                <span className="text-gray-400 uppercase text-[10px] tracking-wide">{key}</span>
                <span className="text-black font-black text-right line-clamp-1">{val}</span>
              </div>
            ))}
          </div>

          {/* Price & Add to Cart */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Price</span>
              <span className="text-xl font-black text-[#9e0005] mt-1">${product.price.toLocaleString()}</span>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-black hover:bg-[#9e0005] text-white font-extrabold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl shadow-md transition-all transform active:scale-95 flex items-center gap-1.5"
            >
              <ShoppingCart size={14} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Specs Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          {/* Modal Container */}
          <div className="relative bg-white border-t-4 border-[#9e0005] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-start justify-between gap-4">
              <div>
                <div className="flex gap-2 mb-2 select-none font-black text-[10px] uppercase">
                  <span className="bg-[#9e0005] text-white px-2.5 py-0.5 rounded-full">{product.engine} Spec</span>
                  <span className="bg-black text-white px-2.5 py-0.5 rounded-full">{product.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-black text-black uppercase leading-tight tracking-tight">
                  {product.name}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-black font-extrabold text-xl p-1 bg-white border border-gray-200 rounded-full hover:shadow-md transition-all shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <div className="h-52 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {/* Top Details */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                    <p className="text-3xl font-black text-[#9e0005]">${product.price.toLocaleString()} USD</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black text-green-700 uppercase bg-green-50 border border-green-200 px-3 py-2 rounded-lg select-none">
                    <CheckCircle2 size={16} />
                    <span>In stock - Ships in 24 hours</span>
                  </div>
                  <button
                    onClick={() => {
                      handleAddToCart();
                      setIsModalOpen(false);
                    }}
                    className="w-full bg-[#9e0005] hover:bg-black text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Add To Shopping Cart</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-l-2 border-[#9e0005] pl-2">
                  Product Overview
                </h4>
                <p className="text-sm font-bold text-gray-500 leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2">
                <h4 className="font-extrabold text-sm text-black uppercase tracking-wider border-l-2 border-[#9e0005] pl-2">
                  Technical Specifications
                </h4>
                <div className="border border-gray-150 rounded-xl overflow-hidden font-bold">
                  {Object.entries(product.specs).map(([key, val], idx) => (
                    <div
                      key={key}
                      className={`grid grid-cols-3 gap-2 px-4 py-3 text-xs border-b border-gray-100 ${
                        idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <span className="text-gray-400 uppercase font-extrabold tracking-wide">{key}</span>
                      <span className="col-span-2 text-black font-black text-right md:text-left">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification on Add to Cart */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-black border-l-4 border-[#9e0005] text-white px-5 py-4 rounded-xl shadow-2xl z-50 animate-slideUp font-extrabold text-xs flex items-center gap-3">
          <div className="bg-[#9e0005] text-white p-1.5 rounded-full">
            <CheckCircle2 size={16} />
          </div>
          <div>
            <p className="uppercase text-white tracking-wider">Product Added!</p>
            <p className="text-[10px] text-gray-400 font-bold mt-0.5 line-clamp-1 max-w-[200px]">{product.name}</p>
          </div>
        </div>
      )}
    </>
  );
};
