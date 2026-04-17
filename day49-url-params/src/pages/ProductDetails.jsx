import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 p-8 lg:p-20">
      
      {/* Left: Visuals */}
      <div className="w-full lg:w-[55%]">
        <div className="bg-[#f3f3f1] rounded-lg p-12 aspect-square flex items-center justify-center relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-[80%] object-contain mix-blend-multiply drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Right: Product Meta */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-900 text-white text-[10px] px-3 py-1 font-black uppercase tracking-widest rounded-full">
            {product.category}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-black tracking-tight mb-2">
          {product.title}
        </h1>

        <div className="flex items-center gap-2 mb-8">
          <div className="flex text-yellow-400 text-xs">{"★".repeat(4)}<span className="text-gray-200">★</span></div>
          <span className="text-xs text-gray-400 font-medium">({product.rating.count} reviews)</span>
        </div>

        <div className="text-5xl font-bold text-black mb-10">
          ${product.price}
        </div>

        <div className="space-y-6 mb-10">
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Description</h4>
          <p className="text-gray-500 leading-relaxed text-sm lg:text-base">
            {product.description}
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-black text-white h-14 font-bold flex items-center justify-center gap-3 hover:bg-purple-900 transition-all rounded-sm shadow-2xl shadow-purple-900/10">
            Buy now
          </button>
        </div>
        
        <p className="text-[11px] text-gray-400 mt-6 flex items-center gap-2">
           🚛 <span className="underline cursor-pointer">Free delivery on orders over $100.0</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;