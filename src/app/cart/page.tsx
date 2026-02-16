"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { getPrimaryProductImage } from "@/data/images";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const subtotal = getTotal();
  const shipping = subtotal >= 49 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-20 h-20 text-muted-foreground/20 mx-auto mb-6" />
        <h1 className="text-2xl font-black mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-black">Shopping Cart ({items.length})</h1>
        <button
          onClick={clearCart}
          className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex gap-4 md:gap-6 p-4 md:p-6 bg-white border border-border rounded-xl"
            >
              {/* Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                <Image
                  src={getPrimaryProductImage(item.product)}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/product/${item.product.slug}`}
                  className="text-sm md:text-base font-semibold hover:text-primary transition-colors line-clamp-2"
                >
                  {item.product.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">{item.product.brand}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Size: <span className="font-medium text-foreground">{item.size}</span>
                  {item.customName && (
                    <span> | Custom: {item.customName} #{item.customNumber}</span>
                  )}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.size, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      {item.product.salePrice ? (
                        <>
                          <p className="text-sm font-bold text-primary">
                            {formatPrice(item.product.salePrice * item.quantity)}
                          </p>
                          <p className="text-xs text-muted-foreground line-through">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-bold">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            {/* Promo code */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 relative">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Promo code"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-border rounded-lg outline-none focus:border-primary transition-colors"
                />
              </div>
              <button className="px-4 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-colors">
                Apply
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    formatPrice(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-muted-foreground bg-muted rounded-lg p-2">
                  Add {formatPrice(49 - subtotal)} more for free shipping!
                </p>
              )}

              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-primary text-white text-center py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors mt-6"
            >
              Proceed to Checkout
            </Link>

            <div className="flex items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
