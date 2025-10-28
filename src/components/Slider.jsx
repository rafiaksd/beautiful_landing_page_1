import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  // Your slides data
  {
    image: "https://placehold.co/600x400?text=Attic",
    caption:
      "“Megan was airblivious to the fact that dust, mold spores, and insulation fibers in the attic were hitching regular rides into her air ducts.”",
  },
  {
    image: "https://placehold.co/600x400?text=BBQ",
    caption:
      "“Jake was airblivious to the fact that his backyard BBQ was filling the air with more PM2.5 than a diesel truck idling at a stoplight.”",
  },
  {
    image: "https://placehold.co/600x400?text=Heater",
    caption:
      "“Ethan was airblivious to his heater’s side hustle: sneaking dangerous carbon monoxide into the air like an undercover villain.”",
  },
  {
    image: "https://placehold.co/600x400?text=Gamer",
    caption:
      "“Mike was airblivious to the LED haze gathering in his gaming den like a futuristic fog.”",
  },
  {
    image: "https://placehold.co/600x400?text=Smog",
    caption:
      "“Sara was airblivious to the outdoor smog sneaking in through cracked windows.”",
  },
];

export default function AbliviousSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000, // Speed of the slide transition (in ms)
    autoplay: true,
    autoplaySpeed: 0, // No delay between slides
    cssEase: "linear", // Ensures smooth, continuous motion
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <section className="px-4 py-16 text-center">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2 scroll-fade">Air•blivious</h2>
      <p className="text-lg font-semibold italic text-gray-700 mb-1 scroll-fade">
        [ehr-<span className="font-bold">bliv</span>-ee-uhs]{" "}
        <span className="font-bold">adjective</span>
      </p>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-10 scroll-fade">
        Lacking knowledge or awareness of the air quality one is breathing.
      </p>

      {/* Slider */}
      <Slider {...settings} className="scroll-fade">
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <div className="flex flex-col items-center text-center">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-2xl shadow-md"
              />
              <p className="text-sm italic text-gray-700 mt-4 max-w-xs">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}