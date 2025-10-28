// src/components/Ending.jsx
export default function Ending() {
  return (
    <footer
      className={`
        scroll-fade bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700
        text-white py-16 px-6 md:px-12 lg:px-20
        relative overflow-hidden 
      `}
      data-delay="0.4"
    >
      {/* Optional subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Bar: Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium border-b border-white/20 pb-6 mb-10">
          <div className="flex items-center gap-2">
            <span>24/7 SUPPORT</span>
          </div>
          <div className="flex items-center gap-2">
            <span>WEEKLY UPDATES</span>
          </div>
          <div className="flex items-center gap-2">
            <span>SECURE & COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2">
            <span>99.9% UPTIME</span>
          </div>
        </div>

        {/* Hero CTA Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Let’s Build Something
            <br />
            Great — Together
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Start your project with Zorg IT Group today, or book a{" "}
            <strong>free strategy call</strong> with our expert team in Dhaka to get{" "}
            <strong>personalized guidance in minutes</strong>.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Book Your FREE Strategy Call
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* Logo + Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">Z</span>
              </div>
              <div>
                <div className="font-bold text-lg">ZORG IT</div>
                <div className="text-xs opacity-80">GROUP</div>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Zorg IT — your trusted partner for UI/UX design and web development in Dubai and across the UAE.
            </p>
            <div className="flex gap-3 mt-6">
              {["facebook", "twitter", "behance", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/60 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-blue-100">
              {["Home", "Projects", "About", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">SERVICES</h3>
            <ul className="space-y-2 text-blue-100">
              {["UI/UX Design", "Development", "Branding"].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="font-bold text-lg mb-4">OTHERS</h3>
            <ul className="space-y-2 text-blue-100">
              {["Subscription", "Privacy Policy", "Career"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© 2020 - 2025 Zorg IT Group LLC. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Sitemap
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Floating Scroll-to-Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}