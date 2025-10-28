// src/components/Nav.jsx
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)
  const toggleMenu = () => setMobileOpen(prev => !prev)

  return (
    <>
      {/* Navbar */}
      <div
        className={`fade-in-nav fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/zorg-logo.svg" alt="ZORG IT" className="h-8" />
          </a>

          {/* Desktop Menu */}
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

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center rounded-full px-6 py-2.5 bg-gray-900 text-white hover:bg-gray-800 transition font-medium"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu – Fullscreen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-20 z-40 bg-white transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`h-full overflow-y-auto pb-20 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="px-6 py-8 flex flex-col gap-6 text-center text-gray-700 font-medium">
            <a href="#projects" onClick={closeMenu} className="hover:text-red-500 transition text-lg">Projects</a>
            <button className="flex items-center gap-1 hover:text-red-500 transition text-lg">
              <div className="mx-auto">Services</div>
            </button>
            <a href="#about" onClick={closeMenu} className="hover:text-red-500 transition text-lg">About Us</a>
            <a href="#subscription" onClick={closeMenu} className="hover:text-red-500 transition text-lg">Subscription</a>
            <a href="#blogs" onClick={closeMenu} className="hover:text-red-500 transition text-lg">Blogs</a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-6 inline-flex items-center justify-center rounded-full px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>

      {/* Backdrop (click to close) */}
      {mobileOpen && (
        <div
          onClick={closeMenu}
          className="lg:hidden fixed inset-0 bg-black/20 z-30"
          aria-hidden="true"
        />
      )}
    </>
  )
}