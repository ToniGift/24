"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { getPrimaryProductImage } from "@/data/images";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeCart} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gray-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-bold">Cart ({items.length})</h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-muted-foreground/40" />
              </div>
              <p className="text-lg font-bold mb-1">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">
                Add some items to get started.
              </p>
              <button
                onClick={closeCart}
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className="relative w-16 h-16 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden">
                    <Image
                      src={getPrimaryProductImage(item.product)}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold truncate">{item.product.name}</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      Size: {item.size}
                      {item.customName && ` | ${item.customName} #${item.customNumber}`}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">
                          {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="p-1 text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4 bg-gray-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-xl font-black">{formatPrice(getTotal())}</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              href="/cart"
              onClick={closeCart}
              className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors text-sm"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
            >
              Checkout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
