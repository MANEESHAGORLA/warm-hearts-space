import { Heart } from "lucide-react";
import necklaceImg from "@/assets/collection-necklaces.jpg";
import earringsImg from "@/assets/collection-earrings.jpg";
import braceletsImg from "@/assets/collection-bracelets.jpg";
import ringsImg from "@/assets/collection-rings.jpg";
import paperweightsImg from "@/assets/collection-paperweights.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const products: Product[] = [
  { id: 1, name: "Whispering Rose Earrings", price: 1199, image: earringsImg },
  { id: 2, name: "Elara Crescent Moon Necklace", price: 1099, image: necklaceImg },
  { id: 3, name: "Visions of Whimsy Paperweight", price: 2999, image: paperweightsImg },
  { id: 4, name: "Botanical Dream Ring", price: 1199, image: ringsImg },
  { id: 5, name: "Callisto Dandelion Paperweight", price: 3499, image: paperweightsImg },
  { id: 6, name: "Forest Fern Bracelet", price: 1499, image: braceletsImg },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-square overflow-hidden rounded-sm bg-muted mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {product.badge && (
        <span className="absolute top-3 left-3 bg-rosewood text-white text-xs px-2 py-1 rounded-sm">
          {product.badge}
        </span>
      )}
      <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
        <Heart className="h-4 w-4 text-foreground" />
      </button>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-full bg-white text-foreground py-2 text-sm font-medium hover:bg-white/90 transition-colors">
          Quick Add
        </button>
      </div>
    </div>
    <h3 className="font-serif text-lg text-foreground group-hover:text-rosewood transition-colors">
      {product.name}
    </h3>
    <div className="flex items-center gap-2 mt-1">
      <span className="text-foreground font-medium">₹{product.price.toLocaleString()}</span>
      {product.originalPrice && (
        <span className="text-muted-foreground line-through text-sm">
          ₹{product.originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Featured Treasures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of botanical beauties, each one a unique piece of nature preserved forever.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
