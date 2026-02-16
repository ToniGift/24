"use client";

import Image from "next/image";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { heroImages } from "@/data/images";

const filters = [
  { label: "Category", key: "category", options: ["jersey", "footwear", "gear", "apparel"] },
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma"] },
];

export default function SalePage() {
  const saleProducts = products.filter((p) => p.isSale);

  return (
    <div>
      {/* Sale Banner with image */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <Image
          src={heroImages.fans}
          alt="Sale"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-rose-700/80 to-primary/70" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-3">
              Limited Time
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
              End of Season Sale
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Up to 40% off on selected jerseys, footwear, and gear
            </p>
          </div>
        </div>
      </div>

      <ProductGrid
        products={saleProducts}
        title="Sale Items"
        subtitle={`${saleProducts.length} items on sale`}
        filters={filters}
      />
    </div>
  );
}
