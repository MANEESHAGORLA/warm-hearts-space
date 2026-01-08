import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery />
          </div>
          
          {/* Right: Product Details */}
          <div>
            <ProductDetails />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
