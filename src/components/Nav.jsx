// src/components/Nav.jsx
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fade-in-nav fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/zorg-logo.svg" alt="ZORG IT" className="h-8" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#projects" className="hover:text-red-500 transition">Projects</a>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-500 transition">
              Services <span className="text-xs">Down Arrow</span>
            </button>
          </div>
          <a href="#about" className="hover:text-red-500 transition">About Us</a>
          <a href="#subscription" className="hover:text-red-500 transition">Subscription</a>
          <a href="#blogs" className="hover:text-red-500 transition">Blogs</a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center rounded-full px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition font-medium"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}