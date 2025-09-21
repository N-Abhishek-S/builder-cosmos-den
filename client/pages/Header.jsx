import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      ref={headerRef} 
      className="bg-white bg-opacity-95 backdrop-blur-lg shadow-lg py-5 px-6 sticky top-0 z-50 border-b-2 border-blue-100"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-2xl">AI</span>
            </div>
            <span className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              StyleGenius
            </span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Search Bar - Moved to center on desktop */}
        <div className="flex-1 max-w-2xl mx-4 w-full order-3 md:order-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="🔍 Search for fashion, styles, or ask AI..."
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all duration-200 shadow-lg text-lg font-medium"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Desktop Navigation and Actions */}
        <div className="hidden md:flex items-center space-x-4 order-2 md:order-3">
          {/* Navigation Links */}
          <div className="flex space-x-5 mr-6">
            <NavLink 
              to="/ecommerce" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-blue-100 text-blue-700 shadow-inner" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              🛍️ Shop
            </NavLink>
            <NavLink 
              to="/get-started" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-purple-100 text-purple-700 shadow-inner" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                }`
              }
            >
              🤖 AI Stylist
            </NavLink>
            <NavLink 
              to="/mainfun" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isActive 
                    ? "bg-green-100 text-green-700 shadow-inner" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                }`
              }
            >
              👗 Virtual Try-On
            </NavLink>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="relative p-3 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 rounded-xl transition-all duration-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <NavLink to="/cart">

            <button className="relative p-3 bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 rounded-xl transition-all duration-200 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">3</span>
            </button>
            </NavLink>
            
            <NavLink to="/singin">
              <button className="px-5 py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 border-2 border-gray-200">
                👤 Sign In
              </button>
            </NavLink>
            
            <NavLink to="/get-started">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg transform hover:scale-105">
                🚀 Start Styling
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
          <div className="grid gap-3">
            <NavLink 
              to="/shop" 
              className="px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🛍️ Fashion Shop
            </NavLink>
            <NavLink 
              to="/ai-assistant" 
              className="px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🤖 AI Style Assistant
            </NavLink>
            <NavLink 
              to="/try-on" 
              className="px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              👗 Virtual Fitting Room
            </NavLink>
            <NavLink 
              to="/signin" 
              className="px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              👤 Sign In
            </NavLink>
            <NavLink 
              to="/get-started" 
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🚀 Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;