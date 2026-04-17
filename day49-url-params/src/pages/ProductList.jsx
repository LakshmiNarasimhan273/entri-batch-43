import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-8 bg-white">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Products</h1>
          <div className="h-1 w-12 bg-purple-700 mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="group cursor-pointer"
          >
            {/* Image Box */}
            <div className="relative aspect-square mb-4 bg-[#f6f6f6] flex items-center justify-center p-10 overflow-hidden rounded-sm">
              <img 
                src={product.image} 
                alt={product.title}
                className="object-contain h-full w-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Info */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-700">
                {product.category}
              </span>
              <h3 className="text-sm font-medium text-gray-800 truncate leading-snug">
                {product.title}
              </h3>
              <div className="flex text-yellow-400 text-[10px]">
                {"★".repeat(Math.round(product.rating.rate))}
                <span className="text-gray-300">{"★".repeat(5 - Math.round(product.rating.rate))}</span>
              </div>
              <p className="text-lg font-bold text-black">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;