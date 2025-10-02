import React from 'react';

const ProductCard = ({ product, index }) => {
  if (!product) return null;

  return (
    <div className="product-card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
      <div className="product-image-container h-48 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
          }}
        />
      </div>
      
      <div className="product-info p-4">
        <h3 className="product-name font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="product-category text-sm text-gray-500 mb-2 capitalize">
          {product.category}
        </p>
        
        <p className="product-description text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="product-meta flex justify-between items-center">
          <span className="product-price font-bold text-lg text-purple-600">
            ₹{product.price?.toLocaleString()}
          </span>
          
          {/* Compatibility badges */}
          <div className="compatibility-badges flex flex-wrap gap-1">
            {product.skinToneCompatibility && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Skin
              </span>
            )}
            {product.faceShapeCompatibility && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Face
              </span>
            )}
          </div>
        </div>
        
        {/* Add to cart button */}
        <button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;