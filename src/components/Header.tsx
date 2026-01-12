import { Menu, Search, ShoppingCart, User, Heart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navItems = ["Home", "New Arrivals", "Bestsellers", "Necklaces", "Earrings", "Rings"];

const menuCategories = [
  { name: "Necklaces", href: "#" },
  { name: "Earrings", href: "#" },
  { name: "Rings", href: "#" },
  { name: "Bracelets", href: "#" },
  { name: "Sets", href: "#" },
  { name: "Pins", href: "#" },
  { name: "Paperweight", href: "#" },
  { 
    name: "Hair Accessories", 
    submenu: ["Hair Clips", "Hair Pins", "Headbands", "Scrunchies"] 
  },
  { 
    name: "Stationery", 
    submenu: ["Bookmarks", "Journals", "Gift Cards"] 
  },
  { name: "DIY Flower Press", href: "#" },
];

const infoLinks = [
  { name: "Our Story", href: "#" },
  { name: "Shipping Policy", href: "#" },
  { name: "Contact Us", href: "#" },
];

const accountLinks = [
  { name: "Log In", href: "#" },
  { name: "Create Account", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Refund Policy", href: "#" },
  { name: "Terms of Use", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const ExpandableMenuItem = ({ item, onClose }: { item: { name: string; submenu: string[] }; onClose: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-4 text-foreground hover:bg-muted transition-colors border-b border-border">
        <span className="font-serif text-lg">{item.name}</span>
        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-muted/50">
          {item.submenu.map((subItem) => (
            <a
              key={subItem}
              href="#"
              onClick={onClose}
              className="block px-8 py-3 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors text-sm"
            >
              {subItem}
            </a>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

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
          <SheetContent side="left" className="w-full sm:w-96 bg-background p-0 overflow-y-auto">
            <SheetHeader className="border-b border-border p-4">
              <SheetTitle className="font-serif text-xl text-foreground text-left">
                <span className="text-forest">🌿</span> Leafy Affair
              </SheetTitle>
            </SheetHeader>
            
            {/* Main Categories */}
            <nav className="flex flex-col">
              {menuCategories.map((item) => (
                item.submenu ? (
                  <ExpandableMenuItem key={item.name} item={item as { name: string; submenu: string[] }} onClose={() => setIsOpen(false)} />
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-4 text-foreground hover:bg-muted transition-colors font-serif text-lg border-b border-border"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>

            {/* Info Links */}
            <div className="border-t border-border">
              {infoLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-foreground hover:bg-muted transition-colors font-serif text-lg border-b border-border"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Account & Policy Links */}
            <div className="bg-muted/30 py-4">
              {accountLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
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
          {navItems.map((item) => (
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
