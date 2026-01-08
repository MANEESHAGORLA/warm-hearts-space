import necklaceVideo from "@/assets/necklace-showcase.mp4";
import earringsVideo from "@/assets/earrings-showcase.mp4";

const VideoShowcase = () => {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Magical Botanical Fashion
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From magical dandelion seeds to misty fern leaves, we have the most soulful, earthy jewellery 
            and stationery that you can get your hands on! Each piece is carefully curated with lots of love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Necklace Video */}
          <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={necklaceVideo} type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-foreground px-8 py-3 font-medium tracking-wide hover:bg-white/90 transition-colors">
                SHOP NECKLACES
              </button>
            </div>
          </div>

          {/* Earrings Video */}
          <div className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={earringsVideo} type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-foreground px-8 py-3 font-medium tracking-wide hover:bg-white/90 transition-colors">
                SHOP EARRINGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
