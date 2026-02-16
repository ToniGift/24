"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/data/products";
import { clubs } from "@/data/clubs";
import { players } from "@/data/players";
import { nationalTeams } from "@/data/teams";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { Search } from "lucide-react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const matchingProducts = query.length >= 2
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.club?.toLowerCase().includes(query.toLowerCase()) ||
          p.nationalTeam?.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const matchingClubs = query.length >= 2
    ? clubs.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const matchingPlayers = query.length >= 2
    ? players.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const matchingTeams = query.length >= 2
    ? nationalTeams.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const totalResults = matchingProducts.length + matchingClubs.length + matchingPlayers.length + matchingTeams.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black">
          {query ? `Results for "${query}"` : "Search"}
        </h1>
        {query && (
          <p className="text-muted-foreground mt-1">{totalResults} results found</p>
        )}
      </div>

      {!query && (
        <div className="text-center py-16">
          <Search className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Search for products</p>
          <p className="text-muted-foreground">Use the search bar above to find jerseys, clubs, players and more.</p>
        </div>
      )}

      {query && totalResults === 0 && (
        <div className="text-center py-16">
          <Search className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">No results found</p>
          <p className="text-muted-foreground mb-6">
            We couldn&apos;t find anything matching &quot;{query}&quot;. Try a different search term.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      )}

      {/* Clubs */}
      {matchingClubs.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Clubs</h2>
          <div className="flex flex-wrap gap-3">
            {matchingClubs.map((club) => (
              <Link
                key={club.id}
                href={`/shop/clubs/${club.slug}`}
                className="px-4 py-2 bg-muted rounded-lg font-medium text-sm hover:bg-border transition-colors"
              >
                {club.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Players */}
      {matchingPlayers.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Players</h2>
          <div className="flex flex-wrap gap-3">
            {matchingPlayers.map((player) => (
              <Link
                key={player.id}
                href={`/shop/players/${player.slug}`}
                className="px-4 py-2 bg-muted rounded-lg font-medium text-sm hover:bg-border transition-colors"
              >
                {player.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Teams */}
      {matchingTeams.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">National Teams</h2>
          <div className="flex flex-wrap gap-3">
            {matchingTeams.map((team) => (
              <Link
                key={team.id}
                href={`/shop/national-teams/${team.slug}`}
                className="px-4 py-2 bg-muted rounded-lg font-medium text-sm hover:bg-border transition-colors"
              >
                {team.flag} {team.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Products */}
      {matchingProducts.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Products ({matchingProducts.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {matchingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
