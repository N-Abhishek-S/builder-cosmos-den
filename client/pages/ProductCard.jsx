// ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, index }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  // Handle image loading errors
  const handleImageError = () => {
    console.error(`Image failed to load for product: ${product.name || product.id}`);
    if (!imgError) {
      setImgError(true);
    }
  };

  // Handle successful image load
  const handleImageLoad = () => {
    setImgLoaded(true);
  };

  // Fix malformed image URLs
  const getFixedImageUrl = () => {
    if (!product.image) {
      console.warn(`No image URL for product: ${product.name || product.id}`);
      return `https://picsum.photos/seed/${product.id || product.name || index}/300/200.jpg`;
    }
    
    let imageUrl = product.image;
    
    // Fix hhttps issue
    if (imageUrl.startsWith('hhttps')) {
      imageUrl = imageUrl.replace('hhttps', 'https');
    }
    
    // Fix double slashes
    imageUrl = imageUrl.replace(/([^:]\/)\/+/g, '$1');
    
    // Fix missing protocol
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      imageUrl = `https://${imageUrl}`;
    }
    
    return imageUrl;
  };

  const imageUrl = getFixedImageUrl();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden relative bg-gray-100">
        {/* Loading spinner */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        )}
        
        {/* Product image */}
        <img 
          src={imgError 
            ? `https://picsum.photos/seed/${product.id || product.name || index}/300/200.jpg` 
            : imageUrl}
          alt={product.name || product.title || 'Product'}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        
        {/* Discount badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1 truncate">
          {product.name || product.title || 'Product Name'}
        </h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="capitalize">{product.category || product.productType || 'Category'}</span>
          {product.gender && (
            <>
              <span className="mx-2">•</span>
              <span className="capitalize">{product.gender}</span>
            </>
          )}
        </div>
        
        {/* Rating if available */}
        {product.rating && (
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({product.reviewCount || Math.floor(Math.random() * 100)})
            </span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-gray-800">
              ${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-gray-500 line-through">
                ${typeof product.originalPrice === 'number' ? product.originalPrice.toFixed(2) : '0.00'}
              </p>
            )}
          </div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;