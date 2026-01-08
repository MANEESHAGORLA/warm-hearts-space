import flowerPressImg from "@/assets/flower-press.jpg";
import romanticRosesImg from "@/assets/romantic-roses.jpg";

const FeatureSection = () => {
  return (
    <section className="py-16 lg:py-24">
      {/* Flower Press Feature */}
      <div className="container mx-auto px-4 mb-16 lg:mb-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Flower Press
            </h2>
            <div className="w-16 h-px bg-gold mb-6" />
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Flowers bring a joy that we want to make last, and with this tool, 
              your precious memories can be preserved forever.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A complete DIY Kit with a full descriptive manual that makes the process fun and easy.
            </p>
            <a 
              href="#"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              SHOP NOW
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img
                src={flowerPressImg}
                alt="Flower Press"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Romantic Roses Feature */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img
                src={romanticRosesImg}
                alt="Romantic Roses"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Romantic Roses
            </h2>
            <div className="w-16 h-px bg-rosewood mb-6" />
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed italic">
              We all know that roses are a symbol of LOVE. Ever wondered how this flower 
              gained all this prominence?!
            </p>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed italic">
              It is said that the Goddess of Love, Aphrodite created this flower. Legends say that 
              her tears and her lover, Adonis' blood watered the ground from where the red roses grew.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
              We preserved these beautiful flowers of love and romance into jewelry just so you can 
              gift something that stays forever.
            </p>
            <a 
              href="#"
              className="inline-block bg-rosewood text-white px-8 py-3 font-medium tracking-wide hover:bg-rosewood/90 transition-colors"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
