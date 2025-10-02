import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const HealthVoiceAssistant = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const widgetCardRef = useRef(null);
  const footerRef = useRef(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [micPermission, setMicPermission] = useState('prompt'); // 'prompt', 'granted', 'denied'
  const [isSecureContext, setIsSecureContext] = useState(true);

  // Check if we're in a secure context (HTTPS or localhost)
  useEffect(() => {
    setIsSecureContext(window.isSecureContext);
  }, []);

  // Check microphone permissions
  const checkMicrophonePermission = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setMicPermission('unsupported');
        return false;
      }

      const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
      setMicPermission(permissionStatus.state);

      permissionStatus.onchange = () => {
        setMicPermission(permissionStatus.state);
      };

      return permissionStatus.state === 'granted';
    } catch (error) {
      console.warn('Microphone permission check failed:', error);
      setMicPermission('unknown');
      return false;
    }
  };

  // Request microphone access
  const requestMicrophoneAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      
      // Stop the stream immediately since we just needed permission
      stream.getTracks().forEach(track => track.stop());
      
      setMicPermission('granted');
      return true;
    } catch (error) {
      console.error('Microphone access denied:', error);
      setMicPermission('denied');
      return false;
    }
  };

  // Function to load the widget script safely
  const loadWidgetScript = async () => {
    if (scriptLoaded) return;

    // Check microphone permission first
    const hasPermission = await checkMicrophonePermission();
    
    if (!hasPermission && micPermission === 'prompt') {
      // Don't auto-load widget if we need to request permission
      return;
    }

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="convai-widget-embed"]');
    if (existingScript) {
      setScriptLoaded(true);
      setWidgetLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      setScriptLoaded(true);
      setWidgetLoaded(true);
      console.log('✅ ElevenLabs widget script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('❌ Failed to load ElevenLabs widget script');
      setWidgetLoaded(false);
    };

    document.head.appendChild(script);
    setScriptLoaded(true);
  };

  useEffect(() => {
    // Page load animations
    const tl = gsap.timeline();

    tl.fromTo(headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(titleRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.3"
    )
    .fromTo(descriptionRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    )
    .fromTo(widgetCardRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "-=0.3"
    )
    .fromTo(footerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    );

    // Initial checks
    checkMicrophonePermission();
  }, []);

  const handleGetStarted = async () => {
    // Check and request microphone permission
    if (micPermission !== 'granted') {
      const granted = await requestMicrophoneAccess();
      if (!granted) {
        return; // Stop if permission denied
      }
    }

    // Load widget if not already loaded
    if (!widgetLoaded) {
      await loadWidgetScript();
    }

    // Smooth scroll to widget section
    widgetCardRef.current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
    
    // Add a bounce animation to draw attention
    gsap.fromTo(widgetCardRef.current,
      { scale: 1 },
      { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 }
    );
  };

  const handleEmergencyContact = () => {
    alert('🚨 Emergency contact feature would be implemented here!\n\nThis would connect you with healthcare professionals or emergency services.');
  };

  const handleRetryWidget = async () => {
    setWidgetLoaded(false);
    // Small delay to ensure state update
    setTimeout(() => {
      loadWidgetScript();
    }, 100);
  };

  const handleAllowMicrophone = async () => {
    const granted = await requestMicrophoneAccess();
    if (granted) {
      await loadWidgetScript();
    }
  };

  const openPermissionsGuide = () => {
    window.open('https://support.google.com/chrome/answer/2693767', '_blank');
  };

  // Render microphone permission status
  const renderPermissionStatus = () => {
    if (!isSecureContext) {
      return (
        <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
          <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔒</span>
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-3">
            Secure Connection Required
          </h3>
          <p className="text-red-700 mb-4">
            Microphone access requires a secure HTTPS connection or localhost.
          </p>
          <div className="text-sm text-red-600 bg-red-100 p-3 rounded-lg">
            <strong>Solution:</strong> Use HTTPS or run on localhost
          </div>
        </div>
      );
    }

    switch (micPermission) {
      case 'denied':
        return (
          <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-200">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-3">
              Microphone Access Denied
            </h3>
            <p className="text-red-700 mb-4">
              Please allow microphone access to use the voice assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-300"
              >
                🔄 Reload Page
              </button>
              <button 
                onClick={openPermissionsGuide}
                className="px-6 py-3 bg-white text-red-700 font-semibold rounded-xl border-2 border-red-300 hover:border-red-400 transition-all duration-300"
              >
                📖 Permission Guide
              </button>
            </div>
          </div>
        );

      case 'granted':
        return (
          <div className="text-center p-6 bg-green-50 rounded-2xl border-2 border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Microphone Ready!
            </h3>
            <p className="text-green-700 mb-4">
              Microphone access granted. Loading voice assistant...
            </p>
            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        );

      default:
        return (
          <div className="text-center p-6 bg-blue-50 rounded-2xl border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎤</span>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Microphone Access Required
            </h3>
            <p className="text-blue-700 mb-4">
              This voice assistant needs microphone access to hear you speak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={handleAllowMicrophone}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
              >
                🎤 Allow Microphone
              </button>
              <button 
                onClick={openPermissionsGuide}
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl border-2 border-blue-300 hover:border-blue-400 transition-all duration-300"
              >
                ℹ️ Learn More
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-100">
      {/* Header */}
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-200 shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                AI Health Assistant
              </h1>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleGetStarted}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
              >
                Get Started
              </button>
              <button 
                onClick={handleEmergencyContact}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-pink-600"
              >
                🚨 Emergency
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight"
          >
            Your Personal AI Health
            <span className="block bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              Voice Assistant
            </span>
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Available 24/7 • Powered by Advanced AI • Your Health Companion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={handleGetStarted}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 hover:from-blue-600 hover:to-teal-600 group"
            >
              <span className="flex items-center justify-center">
                🎤 Start Talking
                <span className="ml-3 group-hover:animate-bounce">👇</span>
              </span>
            </button>
            
            <button className="px-8 py-5 bg-white text-gray-700 text-lg font-semibold rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50">
              📚 Learn More
            </button>
          </div>

          {/* Security Notice */}
          {!isSecureContext && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-2xl">
              <div className="flex items-center justify-center space-x-2 text-yellow-800">
                <span className="text-xl">⚠️</span>
                <p className="font-semibold">
                  For full functionality, please use HTTPS or localhost
                </p>
              </div>
            </div>
          )}

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-2 border-blue-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Always here when you need health guidance, anytime day or night.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-2 border-teal-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Advice</h3>
              <p className="text-gray-600">Tailored health recommendations based on your specific needs.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-2 border-cyan-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Privacy First</h3>
              <p className="text-gray-600">Your health data is secure and confidential with enterprise-grade encryption.</p>
            </div>
          </div>
        </section>

        {/* Widget Section */}
        <section className="max-w-4xl mx-auto">
          <div 
            ref={widgetCardRef}
            className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border-2 border-blue-200 p-8 hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          >
            {/* Glowing effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                  🎤 Talk to Your Health Assistant
                </h2>
                <p className="text-xl text-gray-600">
                  Click the microphone and start speaking about your health concerns
                </p>
              </div>

              {/* ElevenLabs Widget Container */}
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-inner min-h-[400px] flex items-center justify-center">
                {widgetLoaded && micPermission === 'granted' ? (
                  <div className="w-full max-w-2xl mx-auto">
                    <elevenlabs-convai 
                      agent-id="agent_6901k65h2k6feg8tq6kaf2vmhmxe"
                      style={{ 
                        width: '100%', 
                        minHeight: '350px',
                        borderRadius: '16px',
                        border: '2px solid #e5e7eb'
                      }}
                    />
                  </div>
                ) : (
                  renderPermissionStatus()
                )}
              </div>

              {/* Usage Tips */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tip</h4>
                  <p className="text-blue-700 text-sm">
                    Speak clearly and describe your symptoms in detail for the most accurate advice.
                  </p>
                </div>
                <div className="bg-teal-50 rounded-2xl p-4 border border-teal-200">
                  <h4 className="font-semibold text-teal-800 mb-2">⚠️ Remember</h4>
                  <p className="text-teal-700 text-sm">
                    This is an AI assistant. For emergencies, always contact healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-8 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-center">
              🚀 Why Choose Our Health Assistant?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h4 className="font-bold text-lg">AI-Powered Insights</h4>
                    <p className="text-blue-100">Advanced machine learning for accurate health guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h4 className="font-bold text-lg">Natural Conversations</h4>
                    <p className="text-blue-100">Speak naturally as you would with a human expert</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-bold text-lg">Health Tracking</h4>
                    <p className="text-blue-100">Monitor your symptoms and progress over time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-bold text-lg">Multi-Language</h4>
                    <p className="text-blue-100">Support for multiple languages and dialects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-teal-400 rounded-xl flex items-center justify-center">
                <span className="text-white">🏥</span>
              </div>
              <span className="text-xl font-bold">AI Health Assistant</span>
            </div>
            
            <div className="text-lg">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                Powered by ElevenLabs
              </span>
            </div>
            
            <div className="text-gray-400">
              © 2024 Health Tech Inc. • Your privacy matters
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthVoiceAssistant;