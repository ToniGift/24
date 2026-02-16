"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const tabs = [
  { label: "All", filter: () => true },
  { label: "Jerseys", filter: (p: typeof products[number]) => p.category === "jersey" },
  { label: "Footwear", filter: (p: typeof products[number]) => p.category === "footwear" },
  { label: "Gear", filter: (p: typeof products[number]) => p.category === "gear" || p.category === "apparel" },
];

export default function TrendingProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const featured = products
    .filter((p) => p.isFeatured)
    .filter(tabs[activeTab].filter)
    .slice(0, 8);

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1 block">
              Best Sellers
            </span>
            <h2 className="text-2xl md:text-3xl font-black">Trending Now</h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Filter tabs */}
            <div className="flex bg-muted rounded-full p-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === i
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link
              href="/shop/jerseys"
              className="hidden lg:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {featured.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="font-medium">No products found in this category.</p>
          </div>
        )}

        <div className="lg:hidden mt-6 text-center">
          <Link
            href="/shop/jerseys"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
