// src/components/ServicesOffer.jsx
import { useState } from "react";

export default function ServicesOffer({ className = "" }) {
  const [activeTab, setActiveTab] = useState("uiux");

  const tabs = {
    uiux: {
      title: "UI/UX DESIGN",
      count: 6,
      items: [
        {
          num: 1,
          title: "Mobile App Design",
          desc: "Design intuitive mobile experiences that boost usability, retention, and user satisfaction.",
        },
        {
          num: 2,
          title: "Web App Design",
          desc: "Create seamless and scalable web applications optimized for smooth user interaction.",
        },
        {
          num: 3,
          title: "Website Design",
          desc: "Develop responsive, high-performing websites that reflect your brand and engage visitors.",
        },
        {
          num: 4,
          title: "SaaS Design",
          desc: "Build user-focused SaaS platforms with efficient dashboards and easy-to-use interfaces.",
        },
        {
          num: 5,
          title: "Landing Page Design",
          desc: "Design high-converting landing pages tailored to capture attention and drive leads.",
        },
        {
          num: 6,
          title: "UX Audits",
          desc: "Identify and fix usability issues to improve user flow, reduce friction, and increase engagement.",
        },
      ],
    },
    development: {
      title: "DEVELOPMENT",
      count: 5,
      items: [
        {
          num: 1,
          title: "Frontend Development",
          desc: "Build fast, responsive user interfaces using modern frameworks and interactive design.",
        },
        {
          num: 2,
          title: "Backend Development",
          desc: "Develop secure, scalable server-side systems that power your applications and workflows.",
        },
        {
          num: 3,
          title: "Full-Stack Development",
          desc: "Deliver complete digital solutions with seamless frontend and backend integration.",
        },
        {
          num: 4,
          title: "Mobile Development",
          desc: "Create native and cross-platform mobile apps tailored for performance and user experience.",
        },
        {
          num: 5,
          title: "E-commerce Development",
          desc: "Build feature-rich online stores with secure payments and custom backend functionality.",
        },
      ],
    },
    branding: {
      title: "BRANDING",
      count: 5,
      items: [
        {
          num: 1,
          title: "Brand Identity",
          desc: "Craft a cohesive brand identity that tells your story and resonates with your audience.",
        },
        {
          num: 2,
          title: "Logo Design",
          desc: "Design memorable logos that visually represent your values and mission.",
        },
        {
          num: 3,
          title: "Brand Guidelines",
          desc: "Create consistent brand usage rules for design, voice, and visual identity across platforms.",
        },
        {
          num: 4,
          title: "Marketing Materials",
          desc: "Design compelling brochures, decks, and digital assets that strengthen your brand presence.",
        },
        {
          num: 5,
          title: "Brand Strategy",
          desc: "Define your brand’s positioning, tone, and direction to stand out in competitive markets.",
        },
      ],
    },
  };

  const current = tabs[activeTab];

  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-primary-150 ${className}`}
      data-delay="0.4"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
          UI/UX Design, Website Development
          <br />
          &amp; Branding in Dubai
        </h1>
        <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          From improving an existing website to designing a new product from the ground up, our team blends clear layouts with strong visuals. We offer UX audits, complete redesigns, and scalable web applications that make your business easier to run and your customers happier to deal with.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all
                ${activeTab === key
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {tab.title} <span className="ml-1 opacity-70">{tab.count} Items</span>
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.items.map((item) => (
            <div
              key={item.num}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-primary-100 hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-bold flex items-center justify-center text-lg">
                  {item.num}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}