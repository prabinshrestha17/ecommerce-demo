import React from "react";
import HeroSection from "./Hero";
import CategorySection from "./CategorySection";
import NewsletterFeatures from "./NewsletterFeatures";
import PromoGrid from "./PromoGrid";
import Testimonials from "./Testimonials";
import BestSellingProducts from "./BestSellingProducts";
import CountdownSection from "./CountdownSection";
import NewArrivals from "./NewArrivals";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <NewArrivals />
      <CategorySection />
      <BestSellingProducts />
      <NewsletterFeatures />
      <PromoGrid />
      <CountdownSection />
      <Testimonials />
    </div>
  );
};

export default Page;
