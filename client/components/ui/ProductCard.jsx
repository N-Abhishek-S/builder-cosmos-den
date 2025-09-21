import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star, Zap } from 'lucide-react';

export const ProductCard = ({ 
  product = {
    id: 1,
    name: "Premium Leather Jacket",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    rating: 4.8,
    reviews: 142,
    isNew: true,
    isTrending: false,
    isAIPicked: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['black', 'brown', 'navy'],
    aiRecommendation: "Perfect for your style profile! Matches 92% of your wardrobe."
  }
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Added to cart:', product.name);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                NEW
              </span>
            )}
            {product.isTrending && (
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                TRENDING
              </span>
            )}
            {product.isAIPicked && (
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                <Zap size={14} className="mr-1" />
                AI PICK
              </span>
            )}
            {discountPercentage > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={handleQuickView}
              className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            >
              <Eye size={18} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            <ShoppingCart size={18} className="inline mr-2" />
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="p-5">
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* AI Recommendation Badge */}
          {product.aiRecommendation && (
            <div className="mb-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-700 font-medium">
                🤖 {product.aiRecommendation}
              </p>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Size and Color Options */}
          <div className="space-y-2">
            {/* Sizes */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Size:</span>
              <div className="flex space-x-1">
                {product.sizes.slice(0, 3).map((size) => (
                  <button
                    key={size}
                    className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-600 transition-colors"
                  >
                    {size}
                  </button>
                ))}
                {product.sizes.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{product.sizes.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Colors */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Color:</span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color) => (
                  <div
                    key={color}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{product.colors.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Try with AI Button */}
          <button className="w-full mt-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
            👗 Try with AI
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            {/* Quick view content would go here */}
          </div>
        </div>
      )}
    </>
  );
};



