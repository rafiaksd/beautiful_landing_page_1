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
          scrolled 
            ? 'bg-primary-500/95 backdrop-blur-md shadow-sm' 
            : 'bg-primary-500'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            {/* The SVG now inherits Tailwind color via text-primary-50 or text-white */}
            <img src="/zorg-logo.svg" alt="ZORG IT" className="h-8" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <a href="#projects" className="hover:text-primary-100 transition">Projects</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary-100 transition">
                Services
              </button>
            </div>
            <a href="#about" className="hover:text-primary-100 transition">About Us</a>
            <a href="#subscription" className="hover:text-primary-100 transition">Subscription</a>
            <a href="#blogs" className="hover:text-primary-100 transition">Blogs</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center rounded-full px-6 py-2.5 bg-white text-primary-600 hover:bg-primary-50 transition font-medium"
          >
            Contact Us
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-primary-700 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
        className={`lg:hidden fixed inset-0 top-20 z-40 bg-primary-600 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`h-full overflow-y-auto pb-20 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="px-6 py-8 flex flex-col gap-6 text-center text-white font-medium">
            <a href="#projects" onClick={closeMenu} className="hover:text-primary-100 transition text-lg">Projects</a>
            <button className="flex items-center gap-1 hover:text-primary-100 transition text-lg">
              <div className="mx-auto">Services</div>
            </button>
            <a href="#about" onClick={closeMenu} className="hover:text-primary-100 transition text-lg">About Us</a>
            <a href="#subscription" onClick={closeMenu} className="hover:text-primary-100 transition text-lg">Subscription</a>
            <a href="#blogs" onClick={closeMenu} className="hover:text-primary-100 transition text-lg">Blogs</a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-6 inline-flex items-center justify-center rounded-full px-8 py-3 bg-white text-primary-600 hover:bg-primary-50 transition font-medium"
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
