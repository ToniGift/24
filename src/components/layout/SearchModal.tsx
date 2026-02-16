"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { clubs } from "@/data/clubs";
import { players } from "@/data/players";
import { getPrimaryProductImage } from "@/data/images";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  onClose: () => void;
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const filteredProducts = query.length >= 2
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.club?.toLowerCase().includes(query.toLowerCase()) ||
          p.nationalTeam?.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const filteredClubs = query.length >= 2
    ? clubs.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];

  const filteredPlayers = query.length >= 2
    ? players.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];

  const popularSearches = ["Barcelona", "Real Madrid", "Messi", "Nike Mercurial", "World Cup"];

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jerseys, clubs, players..."
            className="flex-1 text-lg outline-none bg-transparent"
          />
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.length < 2 ? (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-border transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredClubs.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Clubs
                  </h3>
                  <div className="space-y-1">
                    {filteredClubs.map((club) => (
                      <Link
                        key={club.id}
                        href={`/shop/clubs/${club.slug}`}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                      >
                        {club.name} <span className="text-muted-foreground">- {club.league}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredPlayers.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Players
                  </h3>
                  <div className="space-y-1">
                    {filteredPlayers.map((player) => (
                      <Link
                        key={player.id}
                        href={`/shop/players/${player.slug}`}
                        onClick={onClose}
                        className="block px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                      >
                        {player.name} <span className="text-muted-foreground">- {player.club}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Products
                  </h3>
                  <div className="space-y-1">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                          <Image
                            src={getPrimaryProductImage(product)}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.brand}</p>
                        </div>
                        <div className="text-sm font-bold">
                          {product.salePrice ? (
                            <span className="text-primary">{formatPrice(product.salePrice)}</span>
                          ) : (
                            formatPrice(product.price)
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredProducts.length === 0 && filteredClubs.length === 0 && filteredPlayers.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No results found for &quot;{query}&quot;
                </p>
              )}

              {(filteredProducts.length > 0 || filteredClubs.length > 0 || filteredPlayers.length > 0) && (
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="block text-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors py-2"
                >
                  View all results for &quot;{query}&quot;
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
