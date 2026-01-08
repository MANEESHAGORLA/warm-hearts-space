import { useState } from "react";

import mainImage from "@/assets/rosewood-necklace-main.jpg";
import detailImage from "@/assets/rosewood-necklace-detail.jpg";
import wornImage from "@/assets/rosewood-necklace-worn.jpg";
import handsImage from "@/assets/rosewood-necklace-hands.jpg";

const images = [mainImage, detailImage, wornImage, handsImage];

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="aspect-[4/5] overflow-hidden bg-ivory rounded-sm">
        <img
          src={images[selectedImage]}
          alt="Rosewood Necklace"
          className="w-full h-full object-cover gallery-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === index
                ? "border-primary"
                : "border-transparent hover:border-muted-foreground/30"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
