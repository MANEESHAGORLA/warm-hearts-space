import necklaceVideo from "@/assets/necklace-showcase.mp4";
import earringsVideo from "@/assets/earrings-showcase.mp4";
import ringsVideo from "@/assets/rings-showcase.mp4";
import braceletsVideo from "@/assets/bracelets-showcase.mp4";
import pendantsVideo from "@/assets/pendants-showcase.mp4";
import hairclipsVideo from "@/assets/hairclips-showcase.mp4";

interface JewelryCategory {
  video: string;
  title: string;
  buttonText: string;
}

const categories: JewelryCategory[] = [
  {
    video: necklaceVideo,
    title: "Necklaces",
    buttonText: "SHOP NECKLACES",
  },
  {
    video: earringsVideo,
    title: "Earrings",
    buttonText: "SHOP EARRINGS",
  },
  {
    video: ringsVideo,
    title: "Rings",
    buttonText: "SHOP RINGS",
  },
  {
    video: braceletsVideo,
    title: "Bracelets",
    buttonText: "SHOP BRACELETS",
  },
  {
    video: pendantsVideo,
    title: "Pendants",
    buttonText: "SHOP PENDANTS",
  },
  {
    video: hairclipsVideo,
    title: "Hair Accessories",
    buttonText: "SHOP HAIR CLIPS",
  },
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={category.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg">
                <h3 className="text-white font-serif text-lg md:text-xl mb-2">{category.title}</h3>
                <button className="bg-white text-foreground px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wide hover:bg-white/90 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {category.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
