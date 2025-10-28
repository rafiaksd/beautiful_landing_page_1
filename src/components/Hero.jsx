// src/components/Hero.jsx
import { useRef } from 'react'

const SquiggleUnderline = () => (
  <svg
    className="absolute left-0 -bottom-5 w-full h-8 pointer-events-none"
    viewBox="0 -8 1200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 16 Q 100 0, 200 16 T 400 16 T 600 16 T 800 16 T 1000 16 T 1200 16"
      stroke="#0ea5e9"  // primary-500
      strokeWidth="4"
      fill="none"
      className="animate-draw"
      style={{
        strokeDasharray: 1600,
        strokeDashoffset: 1600,
        animation: 'draw 1.7s ease-in-out 1.5s forwards',
      }}
    />
  </svg>
)

export default function Hero() {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-primary-50 via-background to-primary-50 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Clutch badge */}
        <div className="scroll-fade flex justify-center mb-8" data-delay="0.1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-background rounded-full shadow-sm border border-secondary-200">
            <span className="text-sm font-semibold text-secondary-800">4.9 ⭐ ON CLUTCH</span>
          </div>
        </div>

        {/* Headline */}
        <div className="scroll-fade text-center max-w-5xl mx-auto" data-delay="0.2">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-500 leading-tight">
            UI/UX Design & Web <br/> Development in Dubai for 
            <br />
            <span className="relative inline-block w-[70%]">
              SaaS and High-End Brands
              <SquiggleUnderline />
            </span>
          </h1>
        </div>

        {/* Paragraph */}
        <p className="scroll-fade mt-6 text-lg text-secondary-600 max-w-3xl mx-auto text-center" data-delay="0.3">
          We help businesses in Dubai and across the UAE create websites and digital platforms that look great and bring in results. Whether it’s a full website design, a new SaaS dashboard, or a complete brand refresh, we make sure your customers enjoy using it — and keep coming back.
        </p>

        {/* CTA */}
        <div className="scroll-fade mt-10 flex justify-center" data-delay="0.4">
          <a
            href="#proposal"
            className="inline-flex items-center rounded-full bg-primary-500 text-white px-8 py-4 font-semibold hover:bg-primary-600 transition shadow-lg"
          >
            Get a UI/UX Design Proposal – Zorg IT Dubai
          </a>
        </div>

        {/* Website preview */}
        <div className="scroll-fade relative mt-12 w-full max-w-5xl mx-auto pointer-events-none" data-delay="0.5">
          <img
            src="/website_preview.png"
            alt="Website preview – before & after"
            className="w-full drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}