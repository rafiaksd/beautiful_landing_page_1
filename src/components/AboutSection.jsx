// src/components/AboutSection.jsx
export default function AboutSection({ className = "" }) {
  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-transparent ${className}`}
      data-delay="0.5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* ---------- IMAGE ---------- */}
          <div className="relative order-1 md:order-none">
            <div className="rounded-3xl overflow-hidden shadow-xl relative">
              <img
                src="/profile1.webp"
                alt="Abdul Rouf Jibon"
                className="w-full h-auto object-cover"
              />

              {/* --- NAME + TITLE overlay (bottom right) --- */}
              <div
                className="
                  absolute bottom-4 left-4
                  bg-white/30 backdrop-blur-md
                  rounded-tr-2xl shadow-lg
                  px-5 py-3
                  text-right
                "
              >
                <h3 className="text-lg md:text-xl font-bold text-secondary-900 tracking-wide">
                  ABDUR ROUF JIBON
                </h3>
                <p className="text-sm text-secondary-800 font-medium">
                  Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* ---------- TEXT ---------- */}
          <div className="space-y-6 order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
              Bangladesh’s UI/UX &amp; Web Team
            </h1>

            <p className="text-secondary-700 text-base md:text-lg leading-relaxed">
              Zorg IT Group is a Dhaka-based creative design agency delivering premium digital
              services to startups, enterprises, and global brands. Our expert team blends UI/UX
              design with powerful development, helping clients elevate their online presence
              and achieve measurable results. Recognized by Clutch as a leading UI/UX agency in
              Bangladesh, we’ve successfully delivered{" "}
              <strong>45+ high-impact projects</strong> across industries.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition"
            >
              Book Your FREE Strategy Call
            </a>

            <div className="flex flex-wrap gap-8 mt-10 text-center md:text-left">
              <div>
                <div className="text-4xl font-bold text-primary-500">40+</div>
                <div className="text-sm text-secondary-600">Startups Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500">80+</div>
                <div className="text-sm text-secondary-600">Projects Designed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500">3+</div>
                <div className="text-sm text-secondary-600">Years of Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}