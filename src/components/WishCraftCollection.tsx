import { Heart } from "lucide-react";
import thumbMoon from "@/assets/thumb-moon.jpg";
import thumbDaisy from "@/assets/thumb-daisy.jpg";
import thumbRose from "@/assets/thumb-rose.jpg";
import thumbLavender from "@/assets/thumb-lavender.jpg";
import thumbSakura from "@/assets/thumb-sakura.jpg";
import thumbSunflower from "@/assets/thumb-sunflower.jpg";
import thumbDandelion from "@/assets/thumb-dandelion.jpg";

interface WishCraftProduct {
  id: number;
  name: string;
  emoji: string;
  price: number;
  image: string;
}

const products: WishCraftProduct[] = [
  { id: 1, emoji: "✨", name: "Manifestor Necklace", price: 1299, image: thumbMoon },
  { id: 2, emoji: "🌊", name: "Cosmic Harmony Necklace", price: 1299, image: thumbDaisy },
  { id: 3, emoji: "🦋", name: "Rebirth Talisman Necklace", price: 1299, image: thumbRose },
  { id: 4, emoji: "❤️", name: "Heart Flame Necklace", price: 1299, image: thumbLavender },
  { id: 5, emoji: "🧿", name: "Guardian Star Necklace", price: 1299, image: thumbSakura },
  { id: 6, emoji: "🌙", name: "DreamKeeper Necklace", price: 1299, image: thumbSunflower },
  { id: 7, emoji: "☀️", name: "Golden Bloom Necklace", price: 1299, image: thumbDandelion },
];

const ProductCard = ({ product }: { product: WishCraftProduct }) => (
  <div className="group cursor-pointer flex-shrink-0 w-40 md:w-48">
    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
        <Heart className="h-3.5 w-3.5 text-foreground" />
      </button>
    </div>
    <h3 className="font-serif text-sm md:text-base text-foreground group-hover:text-rosewood transition-colors line-clamp-2">
      {product.emoji} {product.name}
    </h3>
    <div className="mt-1">
      <span className="text-foreground font-medium text-sm">₹{product.price.toLocaleString()}</span>
    </div>
  </div>
);

const WishCraftCollection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            The WishCraft Collection
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        {/* Horizontal Scrollable Product Row */}
        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {products.map((product) => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-foreground text-background px-8 py-3 font-medium tracking-wide hover:bg-foreground/90 transition-colors">
            SHOP WISHCRAFT
          </button>
        </div>
      </div>
    </section>
  );
};

export default WishCraftCollection;
