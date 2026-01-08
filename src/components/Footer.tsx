import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">🌿 Leafy Affair</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Handcrafted botanical jewelry preserving nature's beauty in timeless pieces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["About Us", "Shipping Policy", "Refund Policy", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/70 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          © 2024 Leafy Affair. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
