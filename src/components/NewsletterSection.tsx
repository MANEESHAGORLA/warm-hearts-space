import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-forest text-4xl mb-4 block">🌿</span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Join the Leafy Family
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe to receive updates on new collections, exclusive offers, and a sprinkle of botanical magic.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-border focus:border-forest"
            />
            <Button 
              type="submit"
              className="bg-forest text-white hover:bg-forest/90 px-8"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, just love and botanicals. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
