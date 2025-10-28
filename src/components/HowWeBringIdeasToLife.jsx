// src/components/HowWeBringIdeaToLife.jsx
export default function HowWeBringIdeaToLife({ className = "" }) {
  return (
    <section
      className={`scroll-fade py-20 px-6 md:px-12 lg:px-20 bg-white ${className}`}
      data-delay="0.4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <div className="relative inline-block mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
            How We Bring Ideas to Life
          </h2>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-20">
          We follow a structured, results-driven process—from discovery to delivery—that ensures every product is
          <br className="hidden md:block" />
          <span className="font-semibold">tailored to your goals and built to scale.</span>
        </p>

        {/* Process Steps with Wavy Line */}
        <div className="relative">
          {/* Wavy Red Line */}


          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
            {/* Step 1: Discovery */}
            <div className="relative lg:pr-12">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6">
                  🚀
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1 Discovery</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understanding your business, users
                    <br />
                    <span className="font-bold bg-gray-100 px-2 py-1 rounded text-xs">
                      technical requirements
                    </span>
                    <br />
                    first.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="relative lg:pr-12 lg:-ml-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6 animate-pulse">
                  🎨
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2 Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Designing intuitive, branded
                    <br />
                    interfaces and prototyping.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Development */}
            <div className="relative lg:pr-12 lg:-ml-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6">
                  <span className="text-sm">&lt;/&gt;</span>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3 Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building fast, scalable
                    <br />
                    <span className="font-bold bg-gray-100 px-2 py-1 rounded text-xs">
                      MERN stack
                    </span>
                    products.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Delivery */}
            <div className="relative lg:-ml-6">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-6">
                  ⭐
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4 Delivery</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Delivering with care and
                    <br />
                    performance support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}