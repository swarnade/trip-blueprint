import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/main.jpg";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 relative overflow-hidden w-screen">
      {/* Cute animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 text-6xl animate-float">☁️</div>
        <div className="absolute top-40 right-20 text-5xl animate-float animation-delay-2000">☁️</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-float animation-delay-4000">✈️</div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 md:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 hover:rotate-0 transition-transform">
              <span className="text-white font-bold text-xl">🌍</span>
            </div>
            <span className="text-gray-800 font-bold text-xl md:text-2xl">Trip BluePrint</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#features" className="hover:text-pink-500 transition-colors">Features</a>
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)] py-12">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-5 py-2 border-2 border-pink-200 shadow-sm">
              <span className="text-2xl animate-bounce">✨</span>
              <span className="text-gray-700 text-sm font-semibold">AI-Powered Travel Planning</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Unlock the World
              </span>
              <br />
              <span className="text-gray-800">with Smart Travel ✈️</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
              Discover breathtaking destinations, craft unforgettable itineraries, and receive 
              personalized AI recommendations tailored just for you. 🌟
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-white rounded-2xl p-3 shadow-sm border border-pink-100">
                <div className="text-2xl">🎯</div>
                <span className="text-gray-700 font-medium">Smart Recommendations</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-2xl p-3 shadow-sm border border-purple-100">
                <div className="text-2xl">📋</div>
                <span className="text-gray-700 font-medium">Custom Itineraries</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-2xl p-3 shadow-sm border border-blue-100">
                <div className="text-2xl">⚡</div>
                <span className="text-gray-700 font-medium">Real-time Updates</span>
              </div>
              <div className="flex items-center space-x-3 bg-white rounded-2xl p-3 shadow-sm border border-yellow-100">
                <div className="text-2xl">💰</div>
                <span className="text-gray-700 font-medium">Budget Planning</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NavLink 
                to="/destination"
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-2xl font-bold text-white text-center transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/50 hover:scale-105 shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Planning Now 🚀
                </span>
              </NavLink>
              
              <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                Watch Demo 🎬
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 border border-pink-200 shadow-sm">
                <div className="text-3xl font-bold text-pink-600">50K+</div>
                <div className="text-gray-600 text-sm font-medium">Happy Travelers 😊</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">150+</div>
                <div className="text-gray-600 text-sm font-medium">Destinations 🗺️</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">4.9★</div>
                <div className="text-gray-600 text-sm font-medium">User Rating ⭐</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 text-6xl animate-spin-slow">🌸</div>
              <div className="absolute -bottom-6 -right-6 text-6xl animate-spin-slow animation-delay-2000">🌺</div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-purple-200/50 bg-white p-2">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt="Travel destination"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 border-2 border-pink-200 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold text-sm">Next Trip</div>
                    <div className="text-gray-600 text-xs">Paris, France 🇫🇷</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 border-2 border-blue-200 shadow-lg animate-float animation-delay-2000">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl">
                    🤖
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold text-sm">AI Planning</div>
                    <div className="text-gray-600 text-xs">2 min saved ⏱️</div>
                  </div>
                </div>
              </div>

              {/* Decorative sparkles */}
              <div className="absolute top-1/4 -left-8 text-3xl animate-pulse">✨</div>
              <div className="absolute bottom-1/4 -right-8 text-3xl animate-pulse animation-delay-2000">⭐</div>
              <div className="absolute top-1/2 right-1/4 text-2xl animate-pulse animation-delay-4000">💫</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-gray-200 mt-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm font-medium">
              © 2026 Trip BluePrint. Made with 💖
            </div>
            <div className="text-gray-600 text-sm">
              Developed by <span className="text-purple-600 font-bold">Swarnadeep Saha Poddar</span> ✨
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors font-medium">Terms</a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors font-medium">Support</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;