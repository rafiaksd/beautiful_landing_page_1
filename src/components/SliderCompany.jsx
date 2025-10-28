// src/components/SliderCompany.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { image: "company1.svg" },
  { image: "company2.svg" },
  { image: "company3.svg" },
  { image: "company1.svg" },
  { image: "company2.svg" },
  { image: "company3.svg" },
];

export default function SliderCompany() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 scroll-fade">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-500">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Slider – 70% width, centered */}
      <div className="max-w-6xl mx-auto px-4 scroll-fade">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <img
                src={slide.image}
                alt={`Company ${index + 1}`}
                className="h-12 w-auto mx-auto object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}