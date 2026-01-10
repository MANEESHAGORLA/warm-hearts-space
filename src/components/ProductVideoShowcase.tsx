import daisyVideo from "@/assets/product-daisy-video.mp4";
import teardropVideo from "@/assets/product-teardrop-video.mp4";
import moonVideo from "@/assets/product-moon-video.mp4";
import cascadeVideo from "@/assets/product-cascade-video.mp4";

import thumbDaisy from "@/assets/thumb-daisy.jpg";
import thumbTeardrop from "@/assets/thumb-teardrop.jpg";
import thumbMoon from "@/assets/thumb-moon.jpg";
import thumbCascade from "@/assets/thumb-cascade.jpg";

interface Product {
  video: string;
  thumbnail: string;
  name: string;
  price: string;
}

const products: Product[] = [
  {
    video: daisyVideo,
    thumbnail: thumbDaisy,
    name: "The Soulful Daisy",
    price: "₹1,099",
  },
  {
    video: teardropVideo,
    thumbnail: thumbTeardrop,
    name: "Blue Ocean of Love",
    price: "₹1,099",
  },
  {
    video: moonVideo,
    thumbnail: thumbMoon,
    name: "Midnight Moon Earrings",
    price: "₹999",
  },
  {
    video: cascadeVideo,
    thumbnail: thumbCascade,
    name: "Cascading Raindrops",
    price: "₹1,599",
  },
];

const ProductVideoShowcase = () => {
  return (
    <section className="py-12 lg:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Video Card */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-ivory">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src={product.video} type="video/mp4" />
                </video>
                
                {/* Thumbnail overlay */}
                <div className="absolute bottom-3 left-3 w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden border-2 border-white shadow-lg">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-serif text-sm md:text-base text-foreground group-hover:text-forest transition-colors">
                  {product.name}
                </h3>
                <p className="text-forest font-medium mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVideoShowcase;
