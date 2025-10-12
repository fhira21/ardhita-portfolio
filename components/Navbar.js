'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fungsi untuk download CV
  const downloadCV = () => {
    // Buat link download
    const link = document.createElement('a')
    link.href = '/cv-ardhita.pdf'
    link.download = 'CV_Ardhita_Setyaningrum.pdf' // Nama file yang akan di-download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Optional: Track download (jika perlu analytics)
    console.log('CV downloaded')
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white scale-100' 
                  : 'bg-white/20 text-white backdrop-blur-sm scale-110'
              }`}>
                AS
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Ardhita.S
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              {/* Download CV Button */}
              <button 
                onClick={downloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
              >
                <span>📄</span>
                Download CV
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 pt-24">
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile Download CV Button */}
            <button 
              onClick={downloadCV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-semibold text-lg mt-4 flex items-center gap-2"
            >
              <span>📄</span>
              Download CV
            </button>

            {/* Contact Info in Mobile Menu */}
            <div className="mt-8 p-6 bg-gray-100 rounded-2xl text-center">
              <p className="text-gray-600 mb-2">Quick Contact</p>
              <a href="tel:+6281281882188" className="text-blue-600 font-semibold block mb-2">
                📞 +62 812-8188-2188
              </a>
              <a href="mailto:setyaningrumardhita@gmail.com" className="text-blue-600 font-semibold">
                ✉️ Email Me
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button 
            className="absolute top-6 right-4 p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/20 z-30 transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}