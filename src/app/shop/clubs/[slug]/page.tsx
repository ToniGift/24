"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clubs } from "@/data/clubs";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";

const filters = [
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma"] },
  { label: "Gender", key: "gender", options: ["men", "women", "youth"] },
];

export default function ClubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const club = clubs.find((c) => c.slug === slug);

  if (!club) {
    notFound();
  }

  const clubProducts = products.filter((p) => p.clubSlug === slug);

  return (
    <div>
      {/* Club Hero */}
      <div
        className="py-12 md:py-16"
        style={{
          background: `linear-gradient(135deg, ${club.primaryColor}20, ${club.secondaryColor}20)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/shop/clubs"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> All Clubs
          </Link>
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: club.primaryColor + "20" }}
            >
              <span className="text-xl font-black" style={{ color: club.primaryColor }}>
                {club.name.slice(0, 3).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black">{club.name}</h1>
              <p className="text-muted-foreground">
                {club.league} &middot; {club.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={clubProducts}
        title={`${club.name} Products`}
        subtitle={`${clubProducts.length} items available`}
        filters={filters}
      />
    </div>
  );
}
