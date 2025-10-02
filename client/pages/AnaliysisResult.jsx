// src/components/AnalysisResult.js
import React, { useEffect, useRef, useState } from 'react';
import { FaVenus, FaMars, FaGenderless, FaPalette, FaGlasses, FaStar, FaShoppingBag } from 'react-icons/fa';
import { gsap } from 'gsap';
import ProductCard from './ProductCard';
import { getRecommendedProducts, getColorValue } from '../data/productUtils';

const AnalysisResult = ({ result }) => {
  const resultRef = useRef(null);
  const cardsRef = useRef([]);
  const productsRef = useRef([]);
  const [recommendedProducts, setRecommendedProducts] = useState(null);

  useEffect(() => {
    if (result) {
      const products = getRecommendedProducts(result);
      setRecommendedProducts(products);
    }
  }, [result]);

  useEffect(() => {
    if (resultRef.current && recommendedProducts) {
      // Animate the entire result container
      gsap.fromTo(resultRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate individual cards with stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.15,
          ease: "back.out(1.7)",
          delay: 0.3
        }
      );

      // Animate product sections
      if (productsRef.current.length > 0) {
        gsap.fromTo(productsRef.current,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.8
          }
        );
      }
    }
  }, [result, recommendedProducts]);

  // Gender icon mapping
  const getGenderIcon = (gender) => {
    switch (gender?.toLowerCase()) {
      case 'male': return <FaMars className="text-blue-500" />;
      case 'female': return <FaVenus className="text-pink-500" />;
      default: return <FaGenderless className="text-purple-500" />;
    }
  };

  // Face shape emoji mapping
  const getFaceShapeEmoji = (shape) => {
    const emojiMap = {
      oval: '🥚',
      round: '🔵',
      square: '⬛',
      heart: '❤️',
      diamond: '💎',
      oblong: '📏'
    };
    return emojiMap[shape?.toLowerCase()] || '👤';
  };

  if (!result || !recommendedProducts) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <div ref={resultRef} className="analysis-result space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
          🎭 Your Style Analysis Results
        </h2>
        <p className="text-gray-600 text-lg">
          Based on your facial features and characteristics
        </p>
      </div>

      {/* Main Results Grid */}
      <div className="result-grid grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Gender Card */}
        <div 
          ref={el => cardsRef.current[0] = el}
          className="result-card bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Gender</h4>
            <div className="text-lg">
              {getGenderIcon(result.gender)}
            </div>
          </div>
          <p className="result-value text-2xl font-bold text-gray-800 capitalize mb-1">
            {result.gender || 'Unknown'}
          </p>
        </div>

        {/* Face Shape Card */}
        <div 
          ref={el => cardsRef.current[1] = el}
          className="result-card bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs uppercase tracking-wider text-purple-600 font-semibold">Face Shape</h4>
            <span className="text-xl">{getFaceShapeEmoji(result.face_shape)}</span>
          </div>
          <p className="result-value text-2xl font-bold text-gray-800 capitalize">
            {result.face_shape || 'Not detected'}
          </p>
        </div>

        {/* Skin Tone Card */}
        <div 
          ref={el => cardsRef.current[2] = el}
          className="result-card bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs uppercase tracking-wider text-orange-600 font-semibold">Skin Tone</h4>
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-200 to-brown-500 border-2 border-orange-300"></div>
          </div>
          <p className="result-value text-2xl font-bold text-gray-800 capitalize">
            {result.skin_tone || 'Medium'}
          </p>
        </div>

        {/* Confidence Card */}
        <div 
          ref={el => cardsRef.current[3] = el}
          className="result-card bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs uppercase tracking-wider text-green-600 font-semibold">Analysis</h4>
            <FaStar className="text-yellow-400" />
          </div>
          <p className="result-value text-2xl font-bold text-gray-800">
            Complete
          </p>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="recommendations space-y-8">
        {/* Recommended Colors */}
        {result.recommended_colors && result.recommended_colors.length > 0 && (
          <div 
            ref={el => cardsRef.current[4] = el}
            className="recommendation-section bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <FaPalette className="text-2xl text-purple-500 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">Recommended Colors</h4>
            </div>
            <div className="color-recommendations grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {result.recommended_colors.map((color, index) => (
                <div 
                  key={index}
                  className="color-item group relative bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors capitalize">
                      {color}
                    </span>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: getColorValue(color) }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Style Tips based on face shape */}
        <div 
          ref={el => cardsRef.current[5] = el}
          className="recommendation-section bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Style Tips</h4>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-200">
            <p className="text-gray-700 leading-relaxed text-lg">
              {result.face_shape === 'Oval' 
                ? "Your oval face shape is versatile! You can experiment with various frame styles and haircuts. Consider angular frames to add definition or soft curves to maintain balance."
                : result.face_shape === 'Round'
                ? "Look for angular frames and geometric shapes to add definition. Square or rectangular frames will help lengthen your face."
                : result.face_shape === 'Square'
                ? "Softer, rounded frames will complement your strong jawline. Try oval or round frames to balance angular features."
                : result.face_shape === 'Heart'
                ? "Bottom-heavy frames and rounded styles will balance your wider forehead. Avoid overly decorative top-heavy frames."
                : result.face_shape === 'Diamond'
                ? "Oval or cat-eye frames will highlight your cheekbones. Look for frames that are wider than your cheekbones."
                : "Consider consulting with a style expert for personalized recommendations based on your unique features."}
            </p>
          </div>
        </div>
      </div>

      {/* Product Recommendations Section */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
            🛍️ Recommended Products
          </h3>
          <p className="text-gray-600 text-lg">
            Curated selections based on your face shape ({result.face_shape}), skin tone ({result.skin_tone}), and gender ({result.gender})
          </p>
        </div>

        {/* Sunglasses */}
        {recommendedProducts.sunglasses.length > 0 && (
          <div ref={el => productsRef.current[0] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaGlasses className="text-2xl text-blue-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">Sunglasses for {result.face_shape} Face Shape</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.sunglasses.map((product, index) => (
                <ProductCard key={`sunglasses-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Clothing */}
        {recommendedProducts.clothing.length > 0 && (
          <div ref={el => productsRef.current[1] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaShoppingBag className="text-2xl text-purple-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">
                {result.gender === 'male' ? "Men's" : result.gender === 'female' ? "Women's" : ""} Clothing for {result.skin_tone} Skin
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.clothing.map((product, index) => (
                <ProductCard key={`clothing-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Accessories */}
        {recommendedProducts.accessories.length > 0 && (
          <div ref={el => productsRef.current[2] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaStar className="text-2xl text-yellow-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">
                {result.gender === 'male' ? "Men's" : result.gender === 'female' ? "Women's" : ""} Accessories
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.accessories.map((product, index) => (
                <ProductCard key={`accessories-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Watches */}
        {recommendedProducts.watches.length > 0 && (
          <div ref={el => productsRef.current[3] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaStar className="text-2xl text-green-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">
                {result.gender === 'male' ? "Men's" : result.gender === 'female' ? "Women's" : ""} Watches
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.watches.map((product, index) => (
                <ProductCard key={`watches-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Footwear */}
        {recommendedProducts.footwear.length > 0 && (
          <div ref={el => productsRef.current[4] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaShoppingBag className="text-2xl text-red-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">
                {result.gender === 'male' ? "Men's" : result.gender === 'female' ? "Women's" : ""} Footwear
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.footwear.map((product, index) => (
                <ProductCard key={`footwear-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Hairstyles */}
        {recommendedProducts.hairstyles.length > 0 && (
          <div ref={el => productsRef.current[5] = el} className="mb-12">
            <div className="flex items-center mb-6">
              <FaStar className="text-2xl text-pink-500 mr-3" />
              <h4 className="text-2xl font-bold text-gray-800">
                {result.gender === 'male' ? "Men's" : result.gender === 'female' ? "Women's" : ""} Hairstyles for {result.face_shape} Face
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.hairstyles.map((product, index) => (
                <ProductCard key={`hairstyles-${product.id}`} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* No Products Message */}
      {Object.values(recommendedProducts).every(arr => arr.length === 0) && (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <p className="text-gray-500 text-lg">
            No specific recommendations available. Try uploading a clearer image or check back later.
          </p>
        </div>
      )}

      {/* Timestamp */}
      {result.timestamp && (
        <div className="text-center text-sm text-gray-500 mt-8">
          Analysis completed on {new Date(result.timestamp).toLocaleDateString()} at {new Date(result.timestamp).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default AnalysisResult;