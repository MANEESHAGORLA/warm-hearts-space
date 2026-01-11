import daisyVideo from "@/assets/product-daisy-video.mp4";
import teardropVideo from "@/assets/product-teardrop-video.mp4";
import moonVideo from "@/assets/product-moon-video.mp4";
import cascadeVideo from "@/assets/product-cascade-video.mp4";
import lavenderVideo from "@/assets/product-lavender-video.mp4";
import forgetmenotVideo from "@/assets/product-forgetmenot-video.mp4";
import fernVideo from "@/assets/product-fern-video.mp4";
import sunflowerVideo from "@/assets/product-sunflower-video.mp4";
import roseVideo from "@/assets/product-rose-video.mp4";
import dandelionVideo from "@/assets/product-dandelion-video.mp4";
import sakuraVideo from "@/assets/product-sakura-video.mp4";
import mossVideo from "@/assets/product-moss-video.mp4";

import thumbDaisy from "@/assets/thumb-daisy.jpg";
import thumbTeardrop from "@/assets/thumb-teardrop.jpg";
import thumbMoon from "@/assets/thumb-moon.jpg";
import thumbCascade from "@/assets/thumb-cascade.jpg";
import thumbLavender from "@/assets/thumb-lavender.jpg";
import thumbForgetmenot from "@/assets/thumb-forgetmenot.jpg";
import thumbFern from "@/assets/thumb-fern.jpg";
import thumbSunflower from "@/assets/thumb-sunflower.jpg";
import thumbRose from "@/assets/thumb-rose.jpg";
import thumbDandelion from "@/assets/thumb-dandelion.jpg";
import thumbSakura from "@/assets/thumb-sakura.jpg";
import thumbMoss from "@/assets/thumb-moss.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    video: lavenderVideo,
    thumbnail: thumbLavender,
    name: "Lavender Dreams",
    price: "₹1,299",
  },
  {
    video: forgetmenotVideo,
    thumbnail: thumbForgetmenot,
    name: "Forget-Me-Not Pendant",
    price: "₹899",
  },
  {
    video: fernVideo,
    thumbnail: thumbFern,
    name: "Forest Fern Ring",
    price: "₹1,199",
  },
  {
    video: sunflowerVideo,
    thumbnail: thumbSunflower,
    name: "Sunflower Bracelet",
    price: "₹1,499",
  },
  {
    video: roseVideo,
    thumbnail: thumbRose,
    name: "Rose Petal Drops",
    price: "₹1,399",
  },
  {
    video: dandelionVideo,
    thumbnail: thumbDandelion,
    name: "Dandelion Wishes",
    price: "₹1,249",
  },
  {
    video: sakuraVideo,
    thumbnail: thumbSakura,
    name: "Cherry Blossom Earrings",
    price: "₹1,149",
  },
  {
    video: mossVideo,
    thumbnail: thumbMoss,
    name: "Moss Terrarium Ring",
    price: "₹1,699",
  },
];

const ProductVideoShowcase = () => {
  return (
    <section className="py-12 lg:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                <div className="group cursor-pointer">
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
                    <div className="absolute bottom-3 left-3 w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden border-2 border-white shadow-lg">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-white/90 hover:bg-white border-none shadow-lg" />
          <CarouselNext className="right-0 translate-x-1/2 bg-white/90 hover:bg-white border-none shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductVideoShowcase;
