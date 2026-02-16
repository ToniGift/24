"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { nationalTeams } from "@/data/teams";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";

const filters = [
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma"] },
  { label: "Gender", key: "gender", options: ["men", "women", "youth"] },
];

export default function NationalTeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const team = nationalTeams.find((t) => t.slug === slug);

  if (!team) {
    notFound();
  }

  const teamProducts = products.filter((p) => p.nationalTeamSlug === slug);

  return (
    <div>
      {/* Team Hero */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/shop/national-teams"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> All National Teams
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{team.flag}</span>
            <div>
              <h1 className="text-2xl md:text-3xl font-black">{team.name}</h1>
              <p className="text-muted-foreground">
                {team.confederation}
                {team.fifaRanking && ` · FIFA Ranking #${team.fifaRanking}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={teamProducts}
        title={`${team.name} Products`}
        subtitle={`${teamProducts.length} items available`}
        filters={filters}
      />
    </div>
  );
}
