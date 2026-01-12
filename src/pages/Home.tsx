import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductVideoShowcase from "@/components/ProductVideoShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import VideoShowcase from "@/components/VideoShowcase";
import WishCraftCollection from "@/components/WishCraftCollection";
import FloralConstellation from "@/components/FloralConstellation";
import CollectionGrid from "@/components/CollectionGrid";
import FeatureSection from "@/components/FeatureSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <ProductVideoShowcase />
        <FeaturedProducts />
        <VideoShowcase />
        <WishCraftCollection />
        <FloralConstellation />
        <CollectionGrid />
        <FeatureSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
