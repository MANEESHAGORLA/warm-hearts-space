import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-lg md:text-xl text-white/90 tracking-[0.3em] uppercase mb-4 animate-fade-in">
          The WishCraft Collection
        </h2>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-4xl leading-tight">
          Magical Botanical Fashion
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
          From magical dandelion seeds to misty fern leaves, discover the most soulful, earthy jewellery you can wear.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base tracking-wide group"
        >
          SHOP NOW 
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-white" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
