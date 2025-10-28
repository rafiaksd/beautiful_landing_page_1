// src/components/ProjectsSection.jsx
export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Arcon Interior — From Strategy to Execution",
      date: "Feb 28, 2025",
      tags: ["UI/UX design", "MERN stack website", "Interior Design"],
      image: "project1.png",
    },
    {
      id: 2,
      title: "A Businessman from Oman",
      date: "Jul 23, 2023",
      tags: ["E-commerce", "Website"],
      image: "project4.png",
    },
    {
      id: 3,
      title: "Ignite Your English Learning Platform",
      date: "Oct 10, 2023",
      tags: ["Course", "English Communication", "Public Speaking"],
      image: "project3.png",
    },
     {
      id: 4,
      title: "Achieving an Ultimate Ending Goal",
      date: "Oct 10, 2023",
      tags: ["Course", "English Communication", "Public Speaking"],
      image: "project4.png",
    },
  ];

  return (
    <section
      className={`scroll-fade py-20 px-6 md:px-12 lg:px-20 bg-background`}
      data-delay="0.3"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* ----------------- HEADING ----------------- */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-4 relative inline-block">
          Recent UI/UX Design Projects
          <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-primary-500 rounded-full"></span>
        </h2>

        <p className="text-secondary-600 max-w-2xl mx-auto mb-12">
          Here's a selection of our work for SaaS, e-commerce, and real estate clients in Dubai and beyond.
          Every project combines practical layouts with strong visual appeal — helping brands connect with
          customers and improve sales.
        </p>

        {/* ----------------- PROJECT GRID ----------------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-background rounded-2xl transition p-4 flex flex-col"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-secondary-500">
                <span>🕓</span>
                <span>{proj.date}</span>
              </div>

              <h3 className="mt-2 text-lg font-semibold text-secondary-900 leading-snug line-clamp-2">
                {proj.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary-100 text-secondary-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}