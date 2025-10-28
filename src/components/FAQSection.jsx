// src/components/FAQ.jsx
import { useState } from "react";

export default function FAQ({ className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Who is the best UI/UX agency in Dubai?",
      a: "Zorg IT is recognized as one of the best UI/UX agencies in Dubai, offering premium design services for SaaS, enterprise, and e-commerce brands.",
    },
    {
      q: "Do you provide website development for SaaS companies in Dubai?",
      a: "Yes, we specialize in UI/UX design services for SaaS companies, helping them improve user retention, engagement, and conversions.",
    },
    {
      q: "What makes Zorg IT different from other web design companies in Dubai?",
      a: "We deliver high-end, conversion-focused design solutions backed by user research, usability testing, and brand strategy.",
    },
    {
      q: "Can you redesign an e-commerce store in Dubai?",
      a: "Absolutely. Our UX audit services identify usability issues and optimize your digital products for better performance.",
    },
    {
      q: "Do you work with real estate brands in Dubai?",
      a: "Yes, we work with clients globally while offering dedicated UI/UX and web development services for the Dubai and UAE market.",
    },
    {
      q: "Who leads Zorg IT Group?",
      a: "Zorg is led by a seasoned founder with over 15 years in the tech industry. Our leadership team brings deep experience across design, development, and business operations — guiding a growing team that's committed to delivering impact.",
    },
  ];

  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-background to-primary-50 ${className}`}
      data-delay="0.4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title with Squiggles */}
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500">
            Frequently Asked Questions
            <span className="absolute -top-6 left-0 text-primary-500 text-2xl">F</span>
            <span className="absolute -top-6 left-[50%] text-primary-500 text-2xl">A</span>
            <span className="absolute -top-6 right-0 text-primary-500 text-2xl rotate-12">Q</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-background/80 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-primary-500">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="font-medium text-secondary-900">{faq.q}</span>
                </div>
                <span
                  className={`text-2xl text-primary-600 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer - Collapsible */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-secondary-700 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}