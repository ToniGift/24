"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { getPrimaryProductImage } from "@/data/images";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);
  const imageUrl = getPrimaryProductImage(product);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[0]);
    openCart();
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/25 hover:shadow-xl transition-all duration-300"
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              NEW
            </span>
          )}
          {product.isSale && product.salePrice && (
            <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
              -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-10">
          <button
            onClick={handleToggleWishlist}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-lg backdrop-blur-sm ${
              inWishlist
                ? "bg-primary text-white"
                : "bg-white/90 text-foreground hover:bg-primary hover:text-white"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 ${inWishlist ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Quick add to cart */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-10">
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            {product.brand}
          </span>
          {product.club && (
            <>
              <span className="w-1 h-1 bg-border rounded-full" />
              <span className="text-[11px] font-medium text-muted-foreground truncate">
                {product.club}
              </span>
            </>
          )}
          {product.nationalTeam && (
            <>
              <span className="w-1 h-1 bg-border rounded-full" />
              <span className="text-[11px] font-medium text-muted-foreground truncate">
                {product.nationalTeam}
              </span>
            </>
          )}
        </div>
        <h3 className="text-sm font-bold line-clamp-2 group-hover:text-primary transition-colors leading-snug mb-2 min-h-[2.5em]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.round(product.rating)
                    ? "text-primary fill-primary"
                    : "text-gray-200 fill-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          {product.salePrice ? (
            <>
              <span className="text-lg font-black text-primary">
                {formatPrice(product.salePrice)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-lg font-black">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
