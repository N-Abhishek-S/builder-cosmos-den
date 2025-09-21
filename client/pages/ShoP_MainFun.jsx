import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

// Sample product data
const sampleProducts = [
  { 
    id: 1, 
    name: "Classic Aviator Sunglasses", 
    category: "Sunglasses", 
    price: 89.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    faceShape: "Round Face",
    frameType: "Metal",
    lensColor: "Grey",
    size: "Medium"
  },
  { 
    id: 2, 
    name: "Vintage Round Glasses", 
    category: "Sunglasses", 
    price: 75.50, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    faceShape: "Oval Face",
    frameType: "Acetate",
    lensColor: "Brown",
    size: "Small"
  },
  { 
    id: 3, 
    name: "Sport Performance Shades", 
    category: "Sunglasses", 
    price: 120.00, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    faceShape: "Square Face",
    frameType: "Plastic",
    lensColor: "Black",
    size: "Large"
  },
  { 
    id: 4, 
    name: "Designer Cat-Eye Sunglasses", 
    category: "Sunglasses", 
    price: 210.00, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    faceShape: "Heart Face",
    frameType: "Metal",
    lensColor: "Green",
    size: "Medium"
  },
  { 
    id: 5, 
    name: "Premium Casual T-Shirt", 
    category: "Fashion", 
    price: 29.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    colorTone: "Neutral",
    styleType: "Casual",
    material: "Cotton",
    size: "Medium"
  },
  { 
    id: 6, 
    name: "Business Formal Shirt", 
    category: "Fashion", 
    price: 59.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    colorTone: "Cool",
    styleType: "Formal",
    material: "Cotton",
    size: "Large"
  },
  { 
    id: 7, 
    name: "Floral Summer Dress", 
    category: "Fashion", 
    price: 45.50, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    colorTone: "Warm",
    styleType: "Casual",
    material: "Linen",
    size: "Small"
  },
  { 
    id: 8, 
    name: "Classic Denim Jacket", 
    category: "Fashion", 
    price: 79.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    colorTone: "Cool",
    styleType: "Casual",
    material: "Denim",
    size: "Medium"
  },
  { 
    id: 9, 
    name: "Leather Crossbody Bag", 
    category: "Accessories", 
    price: 129.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Casual",
    material: "Leather",
    size: "One Size"
  },
  { 
    id: 10, 
    name: "Minimalist Watch", 
    category: "Accessories", 
    price: 199.99, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Formal",
    material: "Stainless Steel",
    size: "Standard"
  },
  { 
    id: 11, 
    name: "Running Shoes", 
    category: "Footwear", 
    price: 119.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Mesh",
    size: "10"
  },
  { 
    id: 12, 
    name: "Wool Beanie", 
    category: "Accessories", 
    price: 24.99, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Casual",
    material: "Wool",
    size: "One Size"
  },
  { 
    id: 13, 
    name: "Silk Scarf", 
    category: "Accessories", 
    price: 49.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Formal",
    material: "Silk",
    size: "One Size"
  },
  { 
    id: 14, 
    name: "Canvas Backpack", 
    category: "Bags", 
    price: 79.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Casual",
    material: "Canvas",
    size: "Large"
  },
  { 
    id: 15, 
    name: "Formal Leather Shoes", 
    category: "Footwear", 
    price: 149.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Formal",
    material: "Leather",
    size: "11"
  },
  { 
    id: 16, 
    name: "Cashmere Sweater", 
    category: "Fashion", 
    price: 189.99, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Casual",
    material: "Cashmere",
    size: "Large"
  },
  { 
    id: 17, 
    name: "Polarized Wayfarers", 
    category: "Sunglasses", 
    price: 135.00, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1515956589635-8d4f5df72c71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    faceShape: "Oval Face",
    frameType: "Acetate",
    lensColor: "Polarized",
    size: "Medium"
  },
  { 
    id: 18, 
    name: "Yoga Pants", 
    category: "Activewear", 
    price: 54.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1506629905877-52a5ca6d63b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Sporty",
    material: "Spandex",
    size: "Small"
  },
  { 
    id: 19, 
    name: "Leather Wallet", 
    category: "Accessories", 
    price: 69.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Casual",
    material: "Leather",
    size: "Standard"
  },
  { 
    id: 20, 
    name: "Winter Parka", 
    category: "Outerwear", 
    price: 249.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Casual",
    material: "Polyester",
    size: "Large"
  },
  { 
    id: 21, 
    name: "Straw Sun Hat", 
    category: "Accessories", 
    price: 34.99, 
    rating: 4.1, 
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Casual",
    material: "Straw",
    size: "One Size"
  },
  { 
    id: 22, 
    name: "Wireless Earbuds", 
    category: "Electronics", 
    price: 129.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Tech",
    material: "Plastic",
    size: "One Size"
  },
  { 
    id: 23, 
    name: "Ceramic Coffee Mug", 
    category: "Home", 
    price: 19.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Casual",
    material: "Ceramic",
    size: "Standard"
  },
  { 
    id: 24, 
    name: "Yoga Mat", 
    category: "Fitness", 
    price: 39.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Rubber",
    size: "Standard"
  },
  { 
    id: 25, 
    name: "Bluetooth Speaker", 
    category: "Electronics", 
    price: 89.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Tech",
    material: "Plastic",
    size: "Small"
  },
  { 
    id: 26, 
    name: "Desk Lamp", 
    category: "Home", 
    price: 49.99, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Modern",
    material: "Metal",
    size: "Standard"
  },
  { 
    id: 27, 
    name: "Water Bottle", 
    category: "Fitness", 
    price: 24.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Sporty",
    material: "Stainless Steel",
    size: "1L"
  },
  { 
    id: 28, 
    name: "Notebook Set", 
    category: "Stationery", 
    price: 18.99, 
    rating: 4.0, 
    image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Minimalist",
    material: "Paper",
    size: "A5"
  },
  { 
    id: 29, 
    name: "Plant Pot", 
    category: "Home", 
    price: 29.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Decorative",
    material: "Ceramic",
    size: "Medium"
  },
  { 
    id: 30, 
    name: "Wireless Mouse", 
    category: "Electronics", 
    price: 59.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Tech",
    material: "Plastic",
    size: "Standard"
  },
  { 
    id: 31, 
    name: "Scented Candle", 
    category: "Home", 
    price: 22.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Decorative",
    material: "Wax",
    size: "Small"
  },
  { 
    id: 32, 
    name: "Phone Case", 
    category: "Electronics", 
    price: 34.99, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1601593346740-9b5a4c7330c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Protective",
    material: "Silicone",
    size: "Standard"
  },
  { 
    id: 33, 
    name: "Throw Pillow", 
    category: "Home", 
    price: 39.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Decorative",
    material: "Cotton",
    size: "18x18"
  },
  { 
    id: 34, 
    name: "Skateboard", 
    category: "Sports", 
    price: 119.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1547447138-6b368f5c710d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Street",
    material: "Wood",
    size: "Standard"
  },
  { 
    id: 35, 
    name: "Board Game", 
    category: "Entertainment", 
    price: 44.99, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1610917140572-d1df14e103d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Family",
    material: "Cardboard",
    size: "Standard"
  },
  { 
    id: 36, 
    name: "Puzzle", 
    category: "Entertainment", 
    price: 29.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Educational",
    material: "Cardboard",
    size: "1000pc"
  },
  { 
    id: 37, 
    name: "Cookbook", 
    category: "Books", 
    price: 24.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Educational",
    material: "Paper",
    size: "Hardcover"
  },
  { 
    id: 38, 
    name: "Headphones", 
    category: "Electronics", 
    price: 159.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Tech",
    material: "Plastic",
    size: "Over-ear"
  },
  { 
    id: 39, 
    name: "Resistance Bands", 
    category: "Fitness", 
    price: 34.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Rubber",
    size: "Set"
  },
  { 
    id: 40, 
    name: "Dumbbell Set", 
    category: "Fitness", 
    price: 89.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Metal",
    size: "20kg"
  },
  { 
    id: 41, 
    name: "Yoga Block", 
    category: "Fitness", 
    price: 14.99, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Foam",
    size: "Standard"
  },
  { 
    id: 42, 
    name: "Jump Rope", 
    category: "Fitness", 
    price: 19.99, 
    rating: 4.1, 
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba94693?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Sporty",
    material: "Plastic",
    size: "Adjustable"
  },
  { 
    id: 43, 
    name: "Gym Bag", 
    category: "Bags", 
    price: 49.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Sporty",
    material: "Polyester",
    size: "Medium"
  },
  { 
    id: 44, 
    name: "Waterproof Jacket", 
    category: "Outerwear", 
    price: 129.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Outdoor",
    material: "Nylon",
    size: "Medium"
  },
  { 
    id: 45, 
    name: "Hiking Boots", 
    category: "Footwear", 
    price: 149.99, 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Outdoor",
    material: "Leather",
    size: "10"
  },
  { 
    id: 46, 
    name: "Camping Tent", 
    category: "Outdoor", 
    price: 199.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Outdoor",
    material: "Polyester",
    size: "4-person"
  },
  { 
    id: 47, 
    name: "Sleeping Bag", 
    category: "Outdoor", 
    price: 89.99, 
    rating: 4.4, 
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Outdoor",
    material: "Polyester",
    size: "Standard"
  },
  { 
    id: 48, 
    name: "Portable Grill", 
    category: "Outdoor", 
    price: 79.99, 
    rating: 4.3, 
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Neutral",
    styleType: "Outdoor",
    material: "Metal",
    size: "Compact"
  },
  { 
    id: 49, 
    name: "Cooler", 
    category: "Outdoor", 
    price: 69.99, 
    rating: 4.5, 
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Cool",
    styleType: "Outdoor",
    material: "Plastic",
    size: "20L"
  },
  { 
    id: 50, 
    name: "Picnic Blanket", 
    category: "Outdoor", 
    price: 39.99, 
    rating: 4.2, 
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colorTone: "Warm",
    styleType: "Outdoor",
    material: "Polyester",
    size: "Large"
  }
];

// Filter options by category
const filterOptions = {
  Sunglasses: {
    faceShape: ["Round Face", "Oval Face", "Square Face", "Heart Face", "Diamond Face"],
    frameType: ["Metal", "Acetate", "Plastic", "Mixed"],
    lensColor: ["Black", "Grey", "Brown", "Green", "Blue", "Mirrored"],
    size: ["Small", "Medium", "Large"]
  },
  Fashion: {
    colorTone: ["Warm", "Cool", "Neutral"],
    styleType: ["Casual", "Formal", "Sporty", "Business"],
    material: ["Cotton", "Polyester", "Linen", "Denim", "Wool"],
    size: ["XS", "Small", "Medium", "Large", "XL"]
  }
};

const ShoP_MainFun = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilters({}); // Reset filters when category changes
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      
      if (newFilters[filterType] === value) {
        // If the same filter is clicked again, remove it
        delete newFilters[filterType];
      } else {
        // Otherwise set the new filter
        newFilters[filterType] = value;
      }
      
      return newFilters;
    });
  };

  // Apply filters whenever category or filters change
  useEffect(() => {
    let result = sampleProducts;
    
    // Filter by category if not 'All'
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply attribute filters
    Object.entries(filters).forEach(([key, value]) => {
      result = result.filter(product => product[key] === value);
    });
    
    // Animate the transition
    gsap.fromTo(".product-card", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
    
    setFilteredProducts(result);
  }, [selectedCategory, filters]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({});
    setSelectedCategory('All');
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400 fill-current' : (i === fullStars && hasHalfStar ? 'text-yellow-400 fill-current' : 'text-gray-300')}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-500">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Product Finder</h1>
        
        {/* Category selector */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {['All', 'Sunglasses', 'Fashion'].map(category => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Filter toggle for mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow-md"
          >
            <span className="font-medium">Filters</span>
            <svg 
              className={`w-5 h-5 transition-transform ${isFilterOpen ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar */}
          <div className={`lg:w-1/4 bg-white rounded-xl shadow-md p-6 h-fit lg:sticky lg:top-4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              {Object.keys(filters).length > 0 && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear all
                </button>
              )}
            </div>
            
            {selectedCategory !== 'All' && filterOptions[selectedCategory] ? (
              Object.entries(filterOptions[selectedCategory]).map(([filterType, options]) => (
                <div key={filterType} className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3 capitalize">
                    {filterType.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    {options.map(option => (
                      <button
                        key={option}
                        onClick={() => handleFilterChange(filterType, option)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${filters[filterType] === option 
                          ? 'bg-blue-100 text-blue-700 font-medium' 
                          : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : selectedCategory === 'All' ? (
              <p className="text-gray-500 text-sm">Select a category to see filters</p>
            ) : (
              <p className="text-gray-500 text-sm">No filters available for this category</p>
            )}
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            {/* Results info */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> products
                {Object.keys(filters).length > 0 && ' with selected filters'}
              </p>
            </div>
            
            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <div className="mb-2">
                        <StarRating rating={product.rating} />
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                {Object.keys(filters).length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoP_MainFun;