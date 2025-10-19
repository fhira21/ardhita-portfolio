'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV_Ardhita_Setyaningrum.pdf'
    link.download = 'CV_Ardhita_Setyaningrum.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#education-skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* === NAVBAR === */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* === LOGO === */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              animate={{
                backgroundColor: isScrolled ? '#2563eb' : 'rgba(255,255,255,0.3)',
                color: '#fff',
                scale: isScrolled ? 1 : 1.05
              }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md"
            >
              AS
            </motion.div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Ardhita.S
            </span>
          </motion.div>

          {/* === DESKTOP MENU === */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`font-medium relative group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-blue-200"
            >
              <span>📄</span> Download CV
            </motion.button>
          </div>

          {/* === MOBILE BUTTON === */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* === MOBILE SLIDE-UP MENU === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg rounded-t-3xl p-6 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-base flex items-center gap-2 shadow-md hover:shadow-blue-300"
              >
                <span>📄</span> Download CV
              </motion.button>

              <div className="w-full border-t border-gray-200 pt-4 text-center">
                <p className="text-gray-500 text-sm mb-2">Quick Contact</p>
                <a
                  href="tel:+6281281882188"
                  className="text-blue-600 font-medium block mb-1"
                >
                  📞 +62 812-8188-2188
                </a>
                <a
                  href="mailto:setyaningrumardhita@gmail.com"
                  className="text-blue-600 font-medium"
                >
                  ✉️ Email Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKDROP (klik untuk tutup) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
