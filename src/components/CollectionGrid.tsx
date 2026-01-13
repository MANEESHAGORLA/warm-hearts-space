import necklacesImg from "@/assets/collection-necklaces.jpg";
import earringsImg from "@/assets/collection-earrings.jpg";
import braceletsImg from "@/assets/collection-bracelets.jpg";
import ringsImg from "@/assets/collection-rings.jpg";
import paperweightsImg from "@/assets/collection-paperweights.jpg";

const collections = [
  { name: "Necklaces", image: necklacesImg },
  { name: "Earrings", image: earringsImg },
  { name: "Bracelets", image: braceletsImg },
  { name: "Rings", image: ringsImg },
  { name: "Paperweights", image: paperweightsImg },
];

const CollectionGrid = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            A Bit of Forest You Can Wear!
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide">
                  {collection.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
