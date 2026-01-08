import { useState } from "react";
import { Heart, Minus, Plus, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground underline">Home</a>
        <span className="mx-2">›</span>
        <span>Rosewood Necklace</span>
      </nav>

      {/* Title & Price */}
      <div className="text-center lg:text-left">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Rosewood Necklace
        </h1>
        <p className="text-2xl text-foreground font-light">₹ 1,299</p>
        <p className="text-sm text-muted-foreground mt-2">
          Tax included. <a href="#" className="underline hover:text-foreground">Shipping</a> calculated at checkout.
        </p>
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-border mx-auto lg:mx-0" />

      {/* Quantity Selector */}
      <div className="flex items-center justify-center lg:justify-start gap-4">
        <span className="text-sm text-muted-foreground">Quantity</span>
        <div className="flex items-center border border-border rounded-sm">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:bg-muted transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:bg-muted transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full py-6 text-sm tracking-widest uppercase"
          disabled
        >
          Sold Out
        </Button>
        <Button className="w-full py-6 text-sm tracking-widest uppercase bg-primary hover:bg-primary/90">
          Notify Me When Available
        </Button>
      </div>

      {/* Wishlist */}
      <button className="flex items-center justify-center lg:justify-start gap-2 text-rosewood hover:text-rosewood/80 transition-colors">
        <Heart className="h-4 w-4" />
        <span className="text-sm tracking-wide uppercase">Add to Wishlist</span>
      </button>

      {/* Trust Badges */}
      <div className="bg-ivory p-4 rounded-sm text-center">
        <p className="text-sm text-muted-foreground mb-3">Secure and trusted checkout with</p>
        <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          {["Visa", "Mastercard", "Amex", "UPI", "NetBanking"].map((method) => (
            <span key={method} className="px-2 py-1 bg-background rounded-sm border border-border">
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* Shipping Info */}
      <div className="bg-ivory p-4 rounded-sm flex items-center gap-3">
        <Truck className="h-6 w-6 text-muted-foreground flex-shrink-0" />
        <p className="text-sm text-foreground">
          Buy now to receive in 3-4 working days | Within Bangalore, Delivery in 1-2 working days.
        </p>
      </div>

      {/* Product Description */}
      <div className="space-y-4 text-foreground leading-relaxed">
        <p className="italic text-muted-foreground">
          In the heart of the darkest woods, a delicate pink rose blooms with quiet resilience.
        </p>
        <p>
          The Rosewood necklace captures this powerful contrast, with the soft pink of the rose 
          standing out beautifully against the deep, rich tones of dark wood. This pink rose 
          symbolizes hope, love, and the courage to find beauty even in life's most difficult moments.
        </p>
        <p>
          It makes a thoughtful, uplifting gift for a friend facing a tough season, reminding them 
          of their inner strength and resilience. Or, keep it for yourself as a reminder to bloom 
          boldly, even in the inkiest chapters of your own story.
        </p>
        <p>
          Whether given as a heartfelt token or worn close to your own heart, this piece speaks of 
          love, courage, and the beauty that endures against all odds.
        </p>
      </div>

      {/* Specifications */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl text-foreground">Product Specifications</h3>
        <ul className="text-sm text-foreground space-y-2 list-disc list-inside">
          <li>Measurement: Oval shaped locket, Length-4.3cm; Width-2.6cm; Height-1.3cm, Chain length-44cm</li>
          <li>Magic Infusion: Pink Rose Flower</li>
          <li>Materials: Resin, Preserved Flower, Preserved Wood, Silver plated stainless steel chain</li>
          <li>Packaging: Comes in a cotton cloth pouch</li>
        </ul>
      </div>

      {/* Care Instructions */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl text-foreground">Product Care</h3>
        <p className="text-sm text-muted-foreground">
          Avoid water and harsh weather exposure as it may cause discoloration of the metal alloy. 
          Keep in the cloth pouch in a dry, airy place when not in use.
        </p>
        <p className="text-xs text-muted-foreground italic">
          P.S: Please note that the flowers/seeds you might receive in your order might not be of 
          the same shape or form like the images as each flower is different and unique. These 
          images are for reference only.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
