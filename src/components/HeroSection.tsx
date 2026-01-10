import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import necklaceVideo from "@/assets/necklace-showcase.mp4";
import earringsVideo from "@/assets/earrings-showcase.mp4";

interface Slide {
  video: string;
  subtitle: string;
  title: string;
  description: string;
  accentColor: string;
  overlayGradient: string;
}

const slides: Slide[] = [
  {
    video: heroVideo,
    subtitle: "The WishCraft Collection",
    title: "Magical Botanical Fashion",
    description: "From magical dandelion seeds to misty fern leaves, discover the most soulful, earthy jewellery you can wear.",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    overlayGradient: "from-black/70 via-black/30 to-black/20",
  },
  {
    video: necklaceVideo,
    subtitle: "Timeless Elegance",
    title: "Handcrafted Necklaces",
    description: "Each piece tells a story of nature's beauty, preserved forever in stunning botanical pendants.",
    accentColor: "from-amber-500/20 to-rose-500/20",
    overlayGradient: "from-black/60 via-black/40 to-rose-900/30",
  },
  {
    video: earringsVideo,
    subtitle: "Delicate Beauty",
    title: "Artisan Earrings",
    description: "Capture the essence of wildflowers and forest whispers in our exquisite earring collection.",
    accentColor: "from-violet-500/20 to-purple-500/20",
    overlayGradient: "from-black/60 via-purple-900/20 to-black/30",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    // Play the active video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Video Backgrounds */}
      {slides.map((slide, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          autoPlay={index === 0}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* Dynamic Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${currentSlide.overlayGradient}`} 
      />
      
      {/* Accent Glow */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${currentSlide.accentColor}`} 
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 
          key={`subtitle-${activeIndex}`}
          className="font-serif text-lg md:text-xl text-white/90 tracking-[0.3em] uppercase mb-4 animate-fade-in"
        >
          {currentSlide.subtitle}
        </h2>
        <h1 
          key={`title-${activeIndex}`}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          {currentSlide.title}
        </h1>
        <p 
          key={`desc-${activeIndex}`}
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          {currentSlide.description}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base tracking-wide group animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          SHOP NOW 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === activeIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
