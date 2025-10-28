// src/App.jsx
import './App.css'
import { useEffect } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
      multiplier: 0.7, // slower scroll
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });

    // Fade-in animations on scroll
    scroll.on("scroll", () => {
      const trigger = window.innerHeight * 0.85;

      document.querySelectorAll(".scroll-fade").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    });

    // Recalculate scroll after all content is loaded
    window.addEventListener("load", () => scroll.update());

    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Nav className="scroll-fade is-visible fixed top-0 left-0 w-full z-50" />

    <div id="scroll-container" data-scroll-container className="font-sans bg-background text-secondary-900">
      
      {/* Nav + Hero: fade in immediately */}
      <section data-scroll-section>
        <Hero className="scroll-fade" />
      </section>

      {/* Other sections: fade on scroll */}
      <section data-scroll-section>
        <SliderCompany className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <AboutSection className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <ProjectsSection className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <WhyChooseUs className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <ServicesOffer className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <HowWeBringIdeaToLife className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <ClientReviews className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <FAQSection className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <Culture className="scroll-fade" />
      </section>
      <section data-scroll-section>
        <Ending className="scroll-fade" />
      </section>

    </div>
    </>
  )
}
