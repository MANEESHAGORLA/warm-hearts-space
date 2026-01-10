import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import collectionNecklaces from "@/assets/collection-necklaces.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionBracelets from "@/assets/collection-bracelets.jpg";

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  overlayGradient: string;
}

const slides: Slide[] = [
  {
    image: collectionNecklaces,
    subtitle: "The WishCraft Collection",
    title: "Magical Botanical Fashion",
    description: "From magical dandelion seeds to misty fern leaves, discover the most soulful, earthy jewellery you can wear.",
    overlayGradient: "from-black/70 via-black/30 to-black/20",
  },
  {
    image: collectionEarrings,
    subtitle: "Timeless Elegance",
    title: "Handcrafted Earrings",
    description: "Each piece tells a story of nature's beauty, preserved forever in stunning botanical designs.",
    overlayGradient: "from-black/60 via-black/40 to-rose-900/30",
  },
  {
    image: collectionBracelets,
    subtitle: "Delicate Beauty",
    title: "Artisan Bracelets",
    description: "Capture the essence of wildflowers and forest whispers in our exquisite bracelet collection.",
    overlayGradient: "from-black/60 via-purple-900/20 to-black/30",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Image Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dynamic Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t transition-all duration-700 ${currentSlide.overlayGradient}`} 
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer border-2 border-white ${
              index === activeIndex 
                ? "bg-white scale-110" 
                : "bg-transparent hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
