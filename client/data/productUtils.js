import { products } from './products';

export const getRecommendedProducts = (analysisResult) => {
  const { gender, face_shape, skin_tone } = analysisResult;
  
  if (!gender || !face_shape || !skin_tone) {
    return getFallbackProducts(gender);
  }

  const genderKey = gender.toLowerCase();
  const faceShape = face_shape.toLowerCase();
  const skinTone = skin_tone.toLowerCase();

  // Get gender-specific products or fallback to unisex
  const genderProducts = products[genderKey] || products.unisex;

  return {
    sunglasses: filterSunglasses(genderProducts.sunglasses || [], faceShape, 4),
    clothing: filterBySkinTone(genderProducts.clothing || [], skinTone, 4),
    accessories: filterBySkinTone(genderProducts.accessories || [], skinTone, 4),
    watches: filterBySkinTone(genderProducts.Watches || [], skinTone, 4),
    footwear: filterBySkinTone(genderProducts.Footwear || [], skinTone, 4),
    hairstyles: filterHairstyles(genderProducts.Hairstyle || [], faceShape, 4)
  };
};

const filterSunglasses = (sunglasses, faceShape, limit) => {
  try {
    // Handle nested array structure - sunglasses is [[array]]
    const sunglassesArray = Array.isArray(sunglasses[0]) ? sunglasses[0] : sunglasses;
    
    if (!Array.isArray(sunglassesArray)) {
      console.warn('Sunglasses data is not an array:', sunglassesArray);
      return [];
    }
    
    const filtered = sunglassesArray
      .filter(product => 
        product && 
        product.faceShapeCompatibility && 
        Array.isArray(product.faceShapeCompatibility) &&
        product.faceShapeCompatibility.some(shape => 
          shape && shape.toLowerCase().includes(faceShape.toLowerCase())
        )
      )
      .slice(0, limit);
    
    console.log(`Found ${filtered.length} sunglasses for face shape: ${faceShape}`);
    return filtered;
  } catch (error) {
    console.error('Error filtering sunglasses:', error);
    return [];
  }
};

const filterBySkinTone = (productArray, skinTone, limit) => {
  try {
    if (!Array.isArray(productArray)) {
      console.warn('Product data is not an array:', productArray);
      return [];
    }
    
    const filtered = productArray
      .filter(product => 
        product &&
        product.skinToneCompatibility && 
        Array.isArray(product.skinToneCompatibility) &&
        product.skinToneCompatibility.some(tone => 
          tone && tone.toLowerCase().includes(skinTone.toLowerCase())
        )
      )
      .slice(0, limit);
    
    console.log(`Found ${filtered.length} products for skin tone: ${skinTone}`);
    return filtered;
  } catch (error) {
    console.error('Error filtering products by skin tone:', error);
    return [];
  }
};

const filterHairstyles = (hairstyles, faceShape, limit) => {
  try {
    if (!Array.isArray(hairstyles)) {
      console.warn('Hairstyles data is not an array:', hairstyles);
      return [];
    }
    
    const filtered = hairstyles
      .filter(style => 
        style &&
        style.faceShapeCompatibility && 
        (Array.isArray(style.faceShapeCompatibility) 
          ? style.faceShapeCompatibility.some(shape => 
              shape && shape.toLowerCase().includes(faceShape.toLowerCase())
            )
          : typeof style.faceShapeCompatibility === 'string' && 
            style.faceShapeCompatibility.toLowerCase().includes(faceShape.toLowerCase())
        )
      )
      .slice(0, limit);
    
    console.log(`Found ${filtered.length} hairstyles for face shape: ${faceShape}`);
    return filtered;
  } catch (error) {
    console.error('Error filtering hairstyles:', error);
    return [];
  }
};

const getFallbackProducts = (gender) => {
  try {
    const genderKey = (gender || 'unisex').toLowerCase();
    const genderProducts = products[genderKey] || products.unisex;
    
    // Handle nested sunglasses structure
    const sunglassesArray = genderProducts.sunglasses && Array.isArray(genderProducts.sunglasses[0]) 
      ? genderProducts.sunglasses[0] 
      : genderProducts.sunglasses || [];
    
    const fallbackProducts = {
      sunglasses: (sunglassesArray || []).slice(0, 4),
      clothing: (genderProducts.clothing || []).slice(0, 4),
      accessories: (genderProducts.accessories || []).slice(0, 4),
      watches: (genderProducts.Watches || []).slice(0, 4),
      footwear: (genderProducts.Footwear || []).slice(0, 4),
      hairstyles: (genderProducts.Hairstyle || []).slice(0, 4)
    };
    
    console.log('Using fallback products:', fallbackProducts);
    return fallbackProducts;
  } catch (error) {
    console.error('Error getting fallback products:', error);
    return {
      sunglasses: [],
      clothing: [],
      accessories: [],
      watches: [],
      footwear: [],
      hairstyles: []
    };
  }
};

// Helper function to get color value for display
export const getColorValue = (colorName) => {
  const colorMap = {
    'navy': '#1e3a8a',
    'black': '#000000',
    'white': '#ffffff',
    'charcoal': '#374151',
    'burgundy': '#800020',
    'forest green': '#228B22',
    'olive': '#808000',
    'cream': '#fffdd0',
    'beige': '#f5f5dc',
    'khaki': '#f0e68c',
    'grey': '#808080',
    'blue': '#0000ff',
    'red': '#ff0000',
    'green': '#008000',
    'purple': '#800080',
    'pink': '#ffc0cb',
    'yellow': '#ffff00',
    'orange': '#ffa500',
    'brown': '#a52a2a',
    'teal': '#008080',
    'lavender': '#e6e6fa',
    'maroon': '#800000',
    'coral': '#ff7f50',
    'peach': '#ffdab9',
    'emerald': '#50c878',
    'sapphire': '#0f52ba',
    'ruby': '#e0115f',
    'amber': '#ffbf00',
    'silver': '#c0c0c0',
    'gold': '#ffd700',
    'rose gold': '#b76e79',
    'bronze': '#cd7f32',
    'platinum': '#e5e4e2',
    'emerald green': '#50c878',
    'royal blue': '#4169e1',
    'mustard yellow': '#ffdb58',
    'coral': '#ff7f50',
    'brown': '#8B4513'
  };
  
  return colorMap[colorName?.toLowerCase()] || '#6b7280';
};