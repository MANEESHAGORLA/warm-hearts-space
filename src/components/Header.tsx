import { Menu, Search, ShoppingCart, User, Heart, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = ["Home", "New Arrivals", "Bestsellers", "Necklaces", "Earrings", "Rings", "Bracelets", "Pendants"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 hover:bg-muted rounded-sm transition-colors">
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-background">
            <SheetHeader className="border-b border-border pb-4">
              <SheetTitle className="font-serif text-xl text-foreground">
                <span className="text-forest">🌿</span> Leafy Affair
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 mt-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-sm transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="border-t border-border mt-6 pt-6">
              <div className="flex flex-col gap-1">
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-sm transition-colors">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-sm transition-colors">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-sm transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-sm transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
          <h1 className="font-serif text-2xl md:text-3xl tracking-wide text-foreground">
            <span className="text-forest">🌿</span> Leafy Affair
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navItems.slice(0, 6).map((item) => (
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
