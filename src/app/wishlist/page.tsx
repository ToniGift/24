"use client";

import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist-store";
import ProductCard from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Heart className="w-20 h-20 text-muted-foreground/20 mx-auto mb-6" />
        <h1 className="text-2xl font-black mb-2">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Save your favorite items to your wishlist for later.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-black">My Wishlist</h1>
          <p className="text-muted-foreground mt-1">{items.length} saved items</p>
        </div>
        <button
          onClick={clearWishlist}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary font-medium transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
