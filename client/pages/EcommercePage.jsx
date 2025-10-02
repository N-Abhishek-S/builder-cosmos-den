import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products as productsData } from '../data/products'; // Import the entire products object

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Refs for animations
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const productRefs = useRef([]);
  const categoryRefs = useRef([]);
  const sectionTitleRef = useRef(null);

  // Process and set products data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Flatten all products from all categories
      const allProducts = [];
      let idCounter = 1; // Counter to ensure unique IDs
      
      // Process each gender category
      Object.keys(productsData).forEach(gender => {
        // Process each product type within the gender
        Object.keys(productsData[gender]).forEach(productType => {
          // Check if it's an array before processing
          if (Array.isArray(productsData[gender][productType])) {
            // Add each product with additional metadata
            productsData[gender][productType].forEach(product => {
              // Ensure price is a number and has a default value
              const productPrice = typeof product.price === 'number' ? product.price : 
                                 (typeof product.price === 'string' ? parseFloat(product.price) : 0);
              
              allProducts.push({
                ...product,
                // Create a unique ID combining original ID, gender, and product type
                uniqueId: `${gender}-${productType}-${product.id || idCounter++}`,
                gender: gender,
                productType: productType,
                // Map properties to what the component expects
                title: product.name || 'Product Name',
                category: productType, // Use product type as category
                rating: product.rating || 4.5,
                reviewCount: product.reviewCount || Math.floor(Math.random() * 100) + 1,
                discount: product.discount || (Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : null),
                originalPrice: product.originalPrice || productPrice * 1.2,
                price: productPrice // Ensure price is always a number
              });
            });
          }
        });
      });

      // Get unique categories (product types)
      const uniqueCategories = ['all', ...new Set(allProducts.map(product => product.category))];
      
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      setCategories(uniqueCategories);
      setIsLoading(false);
    }, 1500);
  }, []);

  // Initialize animations
  useEffect(() => {
    if (isLoading) return;

    // Header animation
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Hero section animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    // Category buttons animation
    gsap.fromTo(categoryRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.categories-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Section title animation
    gsap.fromTo(sectionTitleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Product cards animation
    productRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading, filteredProducts]);

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    
    let sortedProducts = [...filteredProducts];
    
    switch(sortValue) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - no sorting needed
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query === '') {
      if (selectedCategory === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === selectedCategory));
      }
    } else {
      setFilteredProducts(
        products.filter(product => 
          (product.title && product.title.toLowerCase().includes(query)) ||
          product.category.toLowerCase().includes(query) ||
          (product.description && product.description.toLowerCase().includes(query))
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header ref={headerRef} className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
          </div>
          
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={handleSearch}
              />
              <button className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="text-gray-600 hover:text-blue-600 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <button className="text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="max-w-2xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Sale Up To 50% Off</h1>
            <p className="text-xl mb-8 opacity-90">Discover the latest trends and get the best deals on thousands of products</p>
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4">
        {/* Categories Section */}
        <section className="categories-section mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Shop by Category</h2>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Sort by:</span>
              <select 
                value={sortBy}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                ref={el => categoryRefs.current[index] = el}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => handleCategoryFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <h2 ref={sectionTitleRef} className="text-2xl font-bold text-gray-800 mb-8">
            {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
            <span className="text-gray-500 text-lg font-normal ml-2">({filteredProducts.length} products)</span>
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, index) => (
                <div key={`loading-${index}`} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.uniqueId} // Use the uniqueId instead of id
                  ref={el => productRefs.current[index] = el}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://picsum.photos/seed/${product.uniqueId}/300/200.jpg`;
                        }}
                      />
                    </div>
                    {product.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </span>
                    )}
                    <button className="absolute top-3 right-3 bg-white text-gray-500 p-2 rounded-full hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{product.title}</h3>
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
                      <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        {/* Add check for price before calling toFixed */}
                        <p className="text-lg font-bold text-gray-800">
                          ${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
                        </p>
                        {product.originalPrice && (
                          <p className="text-xs text-gray-500 line-through">
                            ${typeof product.originalPrice === 'number' ? product.originalPrice.toFixed(2) : '0.00'}
                          </p>
                        )}
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">Get the latest updates on new products, special offers, and exclusive discounts.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto sm:max-w-xl">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3 sm:mb-0 sm:mr-2"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;