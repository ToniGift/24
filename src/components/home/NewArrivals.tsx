"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Fresh Drops
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black">New Arrivals</h2>
            <p className="text-muted-foreground mt-1">The latest drops you don&apos;t want to miss</p>
          </div>
          <Link
            href="/shop/jerseys?sort=newest"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
