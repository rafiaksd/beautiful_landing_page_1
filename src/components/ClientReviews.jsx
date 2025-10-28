// src/components/ClientReviews.jsx
export default function ClientReviews({ className = "" }) {
  const reviews = [
    {
      text: "ZORG IT GROUP's efforts have boosted the client's site traffic, search engine rankings, brand awareness, and click-through rates. The team consistently delivers on time, meeting expectations and ensuring a smooth workflow. The client is impressed with...",
      more: true,
      name: "Abrar",
      title: "CEO & Owner, AKC Play",
      avatar: "person1.webp",
    },
    {
      text: "The client's social media and design standards scaled up thanks to ZORG IT GROUP's work, giving them solid brand consistency. The team communicated via virtual meetings and email throughout the process. The team was constantly supportive, responsive,...",
      more: true,
      name: "Ahmad Ibn Saif",
      title: "Assistant Manager, ULTIMA BANGLADESH",
      avatar: "person2.webp",
    },
    {
      text: "I highly recommend Zorg to any company looking to outsource their content creation. I have been working with Zorg for almost a year, and my experience has been consistently positive. Their design team is very strong, but what stands out the most is...",
      more: true,
      name: "Fabiha Rumman Shifa",
      title: "Assistant General Manager, Sajan Group",
      avatar: "person3.webp",
    },
    {
      text: "ZORG IT GROUP has completed each project stage and finalized the deliverables for production. Their team has understood the project requirements, enabling them to produce pixel-perfect outputs. Moreover, they've managed the project efficiently and...",
      more: true,
      name: "M M Akash",
      title: "Managing Director, Tomattos Technologies Limited",
      avatar: "person1.webp",
    },
    {
      text: "After multiple discussions with Zorg, we initially hesitated to proceed with SEO services. However, we eventually opted for social media management, content marketing, and design. Since Zorg began their work, our page has attained a premium quality,...",
      more: true,
      name: "Asif Mojtaba",
      title: "Brand Manager, Saco Watch Co.",
      avatar: "person2.webp",
    },
  ];

  return (
    <section
      className={`scroll-fade py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50 ${className}`}
      data-delay="0.4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight">
            What Clients Say About Zorg IT
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            From faster websites to higher customer engagement, our clients have seen real improvements after working with us.
            <br className="hidden md:block" />
            We focus on listening to what you need and delivering on time — without overcomplicating the process.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
                {review.more && (
                  <span className="text-primary-600 font-medium cursor-pointer"> ...see more</span>
                )}
              </p>

              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-500">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Clutch Badge */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">Clutch</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      {i < 4 ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">Rated 4.9 out of 5.0</p>
              <p className="text-sm text-gray-600 mt-1">30+ Reviews</p>

              <div className="flex -space-x-2 mt-4">
                {reviews.slice(0, 3).map((r, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img src={r.avatar} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition text-sm"
            >
              Read our reviews on Clutch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}