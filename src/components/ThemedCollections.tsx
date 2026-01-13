import flowerPressImg from "@/assets/flower-press.jpg";
import romanticRosesImg from "@/assets/romantic-roses.jpg";

interface ThemedCollection {
  name: string;
  description: string[];
  image: string;
  link: string;
}

const themedCollections: ThemedCollection[] = [
  {
    name: "Flower Press",
    description: [
      "Flowers bring a joy that we want to make last, and with this tool, your precious memories can be preserved forever.",
      "A complete DIY Kit with a full descriptive manual that makes the process fun and easy."
    ],
    image: flowerPressImg,
    link: "#"
  },
  {
    name: "Blooming Crystals Collection",
    description: [
      "Botanical beauty meets earthy enchantment.",
      "These botanicals are forever-preserved within crystal-shaped homes; uniquely captivating gifts for both him and her."
    ],
    image: romanticRosesImg,
    link: "#"
  },
  {
    name: "Romantic Roses",
    description: [
      "We all know that roses are a symbol of LOVE. Ever wondered how this flower gained all this prominence?!",
      "We preserved these beautiful flowers of love and romance into jewelry just so you can gift something that stays forever."
    ],
    image: flowerPressImg,
    link: "#"
  },
  {
    name: "Forget-me-not Blooms",
    description: [
      "A Knight once gave these flowers to his lady and shouted 'Forget-me-not' while breathing his last, thus these flowers came to be called Forget-me-nots.",
      "A beautiful collection for meaningful, soulful & romantic gifts!"
    ],
    image: romanticRosesImg,
    link: "#"
  },
  {
    name: "Ferns and Flowers",
    description: [
      "Get her flowers that stay forever instead of those that will wilt & dry! A perfect first date gift that'll make her smile.",
      "We have preserved a few chosen flowers and fern leaves and transformed them into beautiful jewelry."
    ],
    image: flowerPressImg,
    link: "#"
  },
  {
    name: "Dandelion Fairy Dust Keepsakes",
    description: [
      "Dandelion Seeds! These magical fairy dust like beauties from nature are believed to bring dreams and wishes come true in all forms.",
      "We have created some gorgeous keepsakes with the magical dandelion seeds so you can gift some luck & courage to your loved ones."
    ],
    image: romanticRosesImg,
    link: "#"
  },
  {
    name: "Floral Constellation Collection",
    description: [
      "Just as stars twinkle against the velvety backdrop of the night, these pieces feature intricately placed flowers that mirror the delicate dance of celestial bodies.",
      "Tiny petals that bring to mind the constellations that have guided sailors, dreamers and astrologers for centuries."
    ],
    image: flowerPressImg,
    link: "#"
  }
];

const ThemedCollections = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Collections
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        {/* Collections Grid */}
        <div className="space-y-16 lg:space-y-24">
          {themedCollections.map((collection, index) => (
            <div
              key={collection.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  {collection.name}
                </h3>
                <div className="space-y-4 mb-8">
                  {collection.description.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="font-serif text-foreground/80 italic leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <a
                  href={collection.link}
                  className="inline-block px-8 py-3 border border-gold text-gold font-serif tracking-wider hover:bg-gold hover:text-background transition-colors duration-300"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemedCollections;
