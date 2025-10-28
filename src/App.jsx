// src/App.jsx
import './App.css'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SliderCompany from './components/SliderCompany'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import ServicesOffer from './components/ServicesOffer'
import HowWeBringIdeaToLife from './components/HowWeBringIdeasToLife'
import ClientReviews from './components/ClientReviews'
import FAQSection from './components/FAQSection'
import Culture from './components/Culture'
import Ending from './components/Ending'

export default function App() {
  useEffect(() => {
    const reveal = () => {
      const trigger = window.innerHeight * 0.85

      document.querySelectorAll(".scroll-fade").forEach(el => {
        const rect = el.getBoundingClientRect()

        if (rect.top < trigger && rect.bottom > 0) {
          el.classList.add("is-visible")
        }
      })
    }

    const raf = requestAnimationFrame(() => reveal())
    window.addEventListener("scroll", reveal, { passive: true })
    window.addEventListener("resize", reveal, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", reveal)
      window.removeEventListener("resize", reveal)
    }
  }, [])

  return (
    <div className="font-sans bg-background text-secondary-900">
      <Nav />
      <Hero />
      <SliderCompany/>
      <AboutSection/>
      <ProjectsSection />
      <WhyChooseUs/>
      <ServicesOffer/>
      <HowWeBringIdeaToLife />
      <ClientReviews/>
      <FAQSection/>
      <Culture />
      <Ending />
    </div>
  )
}