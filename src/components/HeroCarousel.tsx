import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    tag: "THE CHALLENGE IS OFFICIALLY ON",
    title: "LET'S MAKE IT A HIIT",
    description: "Take 10 or 20 classes, or set your own Red Room record. Push play on your next breakthrough and earn rewards.",
    cta: "SIGN UP NOW",
    link: "/book-now"
  },
  {
    image: hero2,
    tag: "BURN. BUILD. TRANSFORM.",
    title: "YOUR INTENSITY. YOUR RESULTS.",
    description: "Alternate between treadmill sprints and floor strength blocks. Every class is designed to push your limits.",
    cta: "EXPLORE CLASSES",
    link: "/buy-classes"
  },
  {
    image: hero3,
    tag: "JOIN THE MOVEMENT",
    title: "REDEFINE YOUR LIMITS",
    description: "High-intensity training that adapts to you. Choose your challenge, track your progress, level up your fitness.",
    cta: "GET STARTED",
    link: "/book-now"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-widest mb-6 animate-fade-in">
                {slide.tag}
              </p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-none animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-10 max-w-xl text-foreground/90 animate-fade-in">
                {slide.description}
              </p>
              <Link 
                to={slide.link} 
                className="bg-foreground text-background px-12 py-4 font-bold text-sm tracking-widest hover:bg-primary transition-all animate-fade-in inline-block"
              >
                {slide.cta}
              </Link>
            </div>
          </div>

          {/* Red Room Badge - Only on first slide */}
          {index === 0 && (
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in">
              <div className="relative w-80 h-80">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="#DC2626" />
                  <text className="text-[10px] font-bold fill-white">
                    <textPath href="#circlePath" startOffset="0">
                      RED ROOM RECORDS • RED ROOM RECORDS • RED ROOM RECORDS •
                    </textPath>
                  </text>
                  <text
                    x="100"
                    y="95"
                    textAnchor="middle"
                    className="text-2xl font-black fill-white"
                  >
                    BLAZE
                  </text>
                  <text
                    x="100"
                    y="115"
                    textAnchor="middle"
                    className="text-2xl font-black fill-white"
                  >
                    HOUSE
                  </text>
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-foreground w-8" : "bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Vertical Text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-sm font-bold tracking-widest transform rotate-90 origin-center whitespace-nowrap">
          OCTOBER 1—31
        </p>
      </div>
    </section>
  );
};

export default HeroCarousel;
