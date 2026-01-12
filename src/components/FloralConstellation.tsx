import { Heart } from "lucide-react";
import thumbLavender from "@/assets/thumb-lavender.jpg";
import thumbRose from "@/assets/thumb-rose.jpg";
import thumbSakura from "@/assets/thumb-sakura.jpg";
import thumbDandelion from "@/assets/thumb-dandelion.jpg";
import thumbMoon from "@/assets/thumb-moon.jpg";
import thumbForgetmenot from "@/assets/thumb-forgetmenot.jpg";
import thumbFern from "@/assets/thumb-fern.jpg";
import thumbSunflower from "@/assets/thumb-sunflower.jpg";

interface ConstellationProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const products: ConstellationProduct[] = [
  { id: 1, name: "Lovejoy Unisex Necklace", price: 1399, image: thumbLavender },
  { id: 2, name: "Centauri Bracelet", price: 1499, image: thumbRose },
  { id: 3, name: "Rosette Earrings", price: 1399, image: thumbSakura },
  { id: 4, name: "Capella Earrings", price: 1399, image: thumbDandelion },
  { id: 5, name: "Borealis Earrings", price: 1399, image: thumbMoon },
  { id: 6, name: "Starstruck Earrings", price: 1399, image: thumbForgetmenot },
  { id: 7, name: "Lyra Earrings", price: 1399, image: thumbFern },
  { id: 8, name: "Aurora Earrings", price: 1399, image: thumbSunflower },
  { id: 9, name: "Lyra Set", price: 3656, originalPrice: 4300, image: thumbLavender, badge: "15% OFF" },
  { id: 10, name: "Rosette Set", price: 3656, originalPrice: 4300, image: thumbRose, badge: "15% OFF" },
];

const ProductCard = ({ product }: { product: ConstellationProduct }) => (
  <div className="group cursor-pointer flex-shrink-0 w-40 md:w-48">
    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {product.badge && (
        <span className="absolute top-2 left-2 bg-rosewood text-white text-xs px-2 py-1 rounded-sm font-medium">
          {product.badge}
        </span>
      )}
      <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
        <Heart className="h-3.5 w-3.5 text-foreground" />
      </button>
    </div>
    <h3 className="font-serif text-sm md:text-base text-foreground group-hover:text-rosewood transition-colors line-clamp-2">
      {product.name}
    </h3>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-foreground font-medium text-sm">₹{product.price.toLocaleString()}</span>
      {product.originalPrice && (
        <span className="text-muted-foreground line-through text-xs">
          ₹{product.originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  </div>
);

const FloralConstellation = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Floral Constellation
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
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloralConstellation;
