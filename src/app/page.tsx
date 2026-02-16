import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import TrendingProducts from "@/components/home/TrendingProducts";
import ShopByLeague from "@/components/home/ShopByLeague";
import FeaturedPlayers from "@/components/home/FeaturedPlayers";
import PromoBanner from "@/components/home/PromoBanner";
import NewArrivals from "@/components/home/NewArrivals";
import LoopShowcaseVideo from "@/components/home/LoopShowcaseVideo";
import TrustBadges from "@/components/home/TrustBadges";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedCategories />
      <TrendingProducts />
      <LoopShowcaseVideo />
      <ShopByLeague />
      <PromoBanner />
      <FeaturedPlayers />
      <NewArrivals />
      <TrustBadges />
    </>
  );
}
