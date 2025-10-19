'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT CONTENT */}
          <motion.div
            className="text-center lg:text-left order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Welcome */}
            <motion.div
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-full backdrop-blur-sm mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-blue-100 text-xs sm:text-sm">Welcome to My Portfolio</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              ARDHITA <span className="text-blue-200">SETYANINGRUM</span>
            </motion.h1>

            {/* Profession */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Professional <span className="font-semibold text-white">Sales Executive</span> &<br />
              <span className="font-semibold text-white">Customer Service</span> Specialist
            </motion.p>

            {/* Foto Profil (mobile) */}
            <motion.div
              className="flex justify-center lg:hidden mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Ardhita Setyaningrum"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-300 flex items-center justify-center text-white text-6xl sm:text-8xl">
                    👩‍💼
                  </div>
                )}
                <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg mb-6 sm:mb-8 text-blue-50 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              With over 10 years of experience in sales strategy, client relationship management,
              and customer service excellence across multiple company’s.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
              >
                <span>📧</span> Get In Touch
              </a>
              <a
                href="#experience"
                className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg backdrop-blur-sm"
              >
                <span>💼</span> View Experience
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {[
                { number: '10+', text: 'Years Exp.' },
                { number: '50+', text: 'Happy Clients' },
                { number: '99%', text: 'Success Rate' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 rounded-lg p-3 sm:p-4 backdrop-blur-sm"
                >
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-blue-200 mt-1">{stat.text}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PROFILE IMAGE (desktop) */}
          <motion.div
            className="hidden lg:flex justify-center lg:justify-end relative order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Ardhita Setyaningrum"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-300 flex items-center justify-center text-white text-8xl">
                    👩‍💼
                  </div>
                )}
                <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-pulse"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-400 rounded-full opacity-30 animate-float"></div>
              <div
                className="absolute -bottom-3 -left-3 w-20 h-20 bg-green-400 rounded-full opacity-30 animate-float"
                style={{ animationDelay: '1.5s' }}
              ></div>

              {/* Badges */}
              <div className="absolute bottom-6 -left-4 bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2 text-sm">
                <span>⭐</span> 10+ Years Exp
              </div>
              <div className="absolute top-6 -right-4 bg-green-500 text-white px-3 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Available
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
