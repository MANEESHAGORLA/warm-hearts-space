import flowerPressImg from "@/assets/flower-press.jpg";
import romanticRosesImg from "@/assets/romantic-roses.jpg";
import bloomingCrystalsImg from "@/assets/blooming-crystals.jpg";
import forgetMeNotImg from "@/assets/forget-me-not-collection.jpg";
import fernsFlowersImg from "@/assets/ferns-flowers.jpg";
import dandelionWishesImg from "@/assets/dandelion-wishes.jpg";

interface CollectionFeature {
  image: string;
  title: string;
  description: string[];
  buttonText: string;
  buttonColor: string;
  dividerColor: string;
  isItalic?: boolean;
  imageFirst?: boolean;
}

const collections: CollectionFeature[] = [
  {
    image: flowerPressImg,
    title: "Flower Press",
    description: [
      "Flowers bring a joy that we want to make last, and with this tool, your precious memories can be preserved forever.",
      "A complete DIY Kit with a full descriptive manual that makes the process fun and easy."
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-primary text-primary-foreground hover:bg-primary/90",
    dividerColor: "bg-gold",
    imageFirst: false,
  },
  {
    image: romanticRosesImg,
    title: "Romantic Roses",
    description: [
      "We all know that roses are a symbol of LOVE. Ever wondered how this flower gained all this prominence?!",
      "It is said that the Goddess of Love, Aphrodite created this flower. Legends say that her tears and her lover, Adonis' blood watered the ground from where the red roses grew.",
      "We preserved these beautiful flowers of love and romance into jewelry just so you can gift something that stays forever."
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-rosewood text-white hover:bg-rosewood/90",
    dividerColor: "bg-rosewood",
    isItalic: true,
    imageFirst: true,
  },
  {
    image: bloomingCrystalsImg,
    title: "Blooming Crystals Collection",
    description: [
      "Botanical beauty meets earthy enchantment.",
      "These botanicals are forever-preserved within crystal-shaped homes; uniquely captivating gifts for both him and her."
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-primary text-primary-foreground hover:bg-primary/90",
    dividerColor: "bg-gold",
    imageFirst: false,
  },
  {
    image: forgetMeNotImg,
    title: "Forget-me-not Blooms",
    description: [
      "A Knight once gave these flowers to his lady and shouted 'Forget-me-not' while breathing his last, thus these flowers came to be called Forget-me-nots. These tiny little flowers are an epitome of LOVE.",
      "A beautiful collection for meaningful, soulful & romantic gifts!"
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-sky-600 text-white hover:bg-sky-700",
    dividerColor: "bg-sky-500",
    isItalic: true,
    imageFirst: true,
  },
  {
    image: fernsFlowersImg,
    title: "Ferns and Flowers",
    description: [
      "Get her flowers that stay forever instead of those that will wilt & dry! A perfect first date gift that'll make her smile.",
      "We have preserved a few chosen flowers and fern leaves and transformed them into beautiful jewelry. Get browsing and pick the ones that catch your fancy."
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-emerald-700 text-white hover:bg-emerald-800",
    dividerColor: "bg-emerald-600",
    isItalic: true,
    imageFirst: false,
  },
  {
    image: dandelionWishesImg,
    title: "Dandelion Fairy Dust Keepsakes",
    description: [
      "Dandelion Seeds! These magical fairy dust like beauties from nature are believed to bring dreams and wishes come true in all forms.",
      "We have created some gorgeous keepsakes with the magical dandelion seeds so you can gift some luck & courage to your loved ones."
    ],
    buttonText: "SHOP NOW",
    buttonColor: "bg-amber-600 text-white hover:bg-amber-700",
    dividerColor: "bg-amber-500",
    isItalic: true,
    imageFirst: true,
  },
];

const CollectionItem = ({ collection }: { collection: CollectionFeature }) => {
  const imageElement = (
    <div className={collection.imageFirst ? "" : "order-1 md:order-2"}>
      <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );

  const contentElement = (
    <div className={collection.imageFirst ? "" : "order-2 md:order-1"}>
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
        {collection.title}
      </h2>
      <div className={`w-16 h-px ${collection.dividerColor} mb-6`} />
      {collection.description.map((paragraph, index) => (
        <p 
          key={index} 
          className={`text-muted-foreground text-lg mb-4 leading-relaxed ${collection.isItalic ? 'italic' : ''}`}
        >
          {paragraph}
        </p>
      ))}
      <a 
        href="#"
        className={`inline-block ${collection.buttonColor} px-8 py-3 font-medium tracking-wide transition-colors mt-4`}
      >
        {collection.buttonText}
      </a>
    </div>
  );

  return (
    <div className="container mx-auto px-4 mb-16 lg:mb-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        {collection.imageFirst ? (
          <>
            {imageElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {imageElement}
          </>
        )}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-16 lg:py-24">
      {collections.map((collection, index) => (
        <CollectionItem key={index} collection={collection} />
      ))}
    </section>
  );
};

export default FeatureSection;
