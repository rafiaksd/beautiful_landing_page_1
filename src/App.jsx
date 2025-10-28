// src/App.jsx
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'

export default function App() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.scroll-fade').forEach(el => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const triggerPoint = windowHeight - 100

        if (rect.top < triggerPoint && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }

    reveal()
    window.addEventListener('scroll', reveal)
    window.addEventListener('resize', reveal)
    window.addEventListener('load', reveal)

    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('resize', reveal)
      window.removeEventListener('load', reveal)
    }
  }, [])

  return (
    <div className="font-sans bg-white text-gray-900">
      <Nav />
      <Hero />

      {/* Example: reuse anywhere */}
      <section className="py-24 text-center">
        <h2 className="scroll-fade text-4xl font-bold" data-delay="0.2">
          This fades in on scroll
        </h2>
        <p className="scroll-fade mt-4 text-lg text-gray-600" data-delay="0.4">
          With optional delay
        </p>
      </section>
    </div>
  )
}