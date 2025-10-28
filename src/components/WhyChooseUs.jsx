// src/components/WhyChooseUs.jsx
export default function WhyChooseUs({ className = "" }) {
  const features = [
    {
      icon: "📊",
      title: "Proven UI/UX & Development Expertise",
      desc: "We combine design thinking with technical precision to deliver platforms that users love.",
    },
    {
      icon: "🎯",
      title: "Custom Solutions That Fit Your Business",
      desc: "No templates. Every project is tailored to your brand, goals, and audience.",
    },
    {
      icon: "🤝",
      title: "Client-Centric Approach",
      desc: "You’re part of the process — from discovery to launch, we keep you in the loop.",
    },
    {
      icon: "🚀",
      title: "Scalable MERN Stack Development",
      desc: "Fast, secure, and future-proof apps built with MongoDB, Express, React, and Node.js.",
    },
    {
      icon: "💡",
      title: "Innovation Meets Strategy",
      desc: "Creative designs backed by data-driven decisions that drive growth.",
    },
    {
      icon: "❤️",
      title: "Reliable Support & Long-Term Partnership",
      desc: "We’re not just a vendor — we’re your tech partner. From discovery to post-launch, we stay committed to your success.",
    },
  ];

  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-white ${className}`}
      data-delay="0.3"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
            Why Businesses in Dubai Choose Zorg IT Group
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            We work with startups, real estate developers, and established brands in Dubai and the UAE. From SaaS platforms to e-commerce sites, we design and build tools that make day-to-day operations smoother and help your business grow online.
          </p>
        </div>

        {/* Grid: Features + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features */}
          <div className="space-y-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`
                  group flex gap-4 p-5 rounded-2xl border bg-gray-50 border-gray-200
                  hover:bg-red-50 hover:border-primary-200
                  transition-all duration-300 cursor-default
                `}
              >
                <div className="text-2xl flex-shrink-0 transition-colors group-hover:text-primary-600">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-900">
                    {feat.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Office Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/office_setup.png"
              alt="Zorg IT Group Office"
              className="w-full h-auto object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-primary-600 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}