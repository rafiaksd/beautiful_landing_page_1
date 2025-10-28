// src/components/Culture.jsx
export default function Culture({ className = "" }) {
  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-white ${className}`}
      data-delay="0.4"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
              A Culture Built on
              <br />
              Growth, Creativity &amp; Collaboration
            </h2>
            <div className="mt-4 w-16 h-8">
              
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Zorg IT Group, our culture empowers every team member to think boldly, work collaboratively, and grow continuously. We celebrate diverse ideas, value open communication, and create space for people to do their best work. Whether it’s daily standups or career-defining milestones, we believe that when our people thrive, our impact multiplies.
          </p>

          <a
            href="#careers"
            className="inline-block px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition"
          >
            Explore Career Opportunities
          </a>
        </div>

        {/* Right: Images – 2 left (stacked), 1 right (tall) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column: Two stacked square images */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/culture1.webp"
                alt="Zorg IT Office - Team Workspace"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/culture2.webp"
                alt="Zorg IT Office - Open Area"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column: One tall image */}
          <div className="rounded-2xl overflow-hidden shadow-lg row-span-2">
            <img
              src="/culture3.webp"
              alt="Zorg IT Office - Creative Booth"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}