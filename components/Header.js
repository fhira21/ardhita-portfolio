'use client'
import { useState } from 'react'

export default function Header() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <span className="text-blue-100 text-sm">Welcome to My Portfolio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              ARDHITA <span className="text-blue-200">SETYANINGRUM</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 font-light">
              Professional <span className="font-semibold text-white">Sales Executive</span> &<br />
              <span className="font-semibold text-white">Customer Service</span> Specialist
            </p>
            
            <p className="text-lg mb-8 text-blue-50 max-w-lg leading-relaxed">
              With over 10 years of experience in sales strategy, client relationship management, 
              and customer service excellence across multiple industries.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                <span>📧</span> Get In Touch
              </a>
              <a 
                href="#experience" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg backdrop-blur-sm"
              >
                <span>💼</span> View Experience
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                { number: '10+', text: 'Years Experience' },
                { number: '50+', text: 'Happy Clients' },
                { number: '99%', text: 'Success Rate' }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-blue-200 mt-1">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Main Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                {/* Profile Image - menggunakan foto dari public/profile.jpg */}
                {!imageError ? (
                  <img 
                    src="/profile.jpg" 
                    alt="Ardhita Setyaningrum"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Fallback jika gambar tidak ada */
                  <div className="w-full h-full bg-blue-300 flex items-center justify-center text-white text-8xl">
                    👩‍💼
                  </div>
                )}
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-8 -left-4 bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2">
                <span>⭐</span> 10+ Years Exp
              </div>

              {/* Availability Badge */}
              <div className="absolute top-8 -right-4 bg-green-500 text-white px-3 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available for Work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </a>
      </div>
    </section>
  )
}