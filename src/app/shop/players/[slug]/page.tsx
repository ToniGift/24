"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { players } from "@/data/players";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function PlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const player = players.find((p) => p.slug === slug);

  if (!player) {
    notFound();
  }

  const playerProducts = products.filter(
    (p) =>
      p.playerSlug === slug ||
      p.clubSlug === player.clubSlug ||
      p.nationalTeamSlug === player.nationalTeamSlug
  );

  return (
    <div>
      {/* Player Hero */}
      <div className="bg-gradient-to-br from-secondary to-gray-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/shop/players"
            className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> All Players
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-black text-white/40">
                {player.number || "?"}
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black">{player.name}</h1>
              <p className="text-white/70 mt-1">
                {player.position}
                {player.club && ` · ${player.club}`}
                {player.nationalTeam && ` · ${player.nationalTeam}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={playerProducts}
        title={`${player.name} Jerseys & Gear`}
        subtitle={`${playerProducts.length} items available`}
        showFilters={false}
      />
    </div>
  );
}
