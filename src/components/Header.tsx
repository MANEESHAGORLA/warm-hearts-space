import { Menu, Search, ShoppingCart, User, Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="lg:hidden p-2 hover:bg-muted rounded-sm transition-colors">
          <Menu className="h-5 w-5 text-foreground" />
        </button>

        {/* Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-foreground">
            <span className="text-forest">🌿</span> Leafy Affair
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {["Home", "New Arrivals", "Bestsellers", "Necklaces", "Earrings", "Rings"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-sm transition-colors hidden sm:block">
            <Search className="h-5 w-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-sm transition-colors hidden sm:block">
            <User className="h-5 w-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-sm transition-colors">
            <Heart className="h-5 w-5 text-foreground" />
          </button>
          <button className="p-2 hover:bg-muted rounded-sm transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
