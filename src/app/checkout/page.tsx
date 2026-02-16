"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock, CreditCard, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { getPrimaryProductImage } from "@/data/images";

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore();
  const [step, setStep] = useState(1);
  const subtotal = getTotal();
  const shipping = subtotal >= 49 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-20 h-20 text-muted-foreground/20 mx-auto mb-6" />
        <h1 className="text-2xl font-black mb-2">Nothing to Checkout</h1>
        <p className="text-muted-foreground mb-8">Your cart is empty.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link
        href="/cart"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>

      <h1 className="text-2xl md:text-3xl font-black mb-8">Checkout</h1>

      {/* Steps */}
      <div className="flex items-center gap-4 mb-8">
        {["Shipping", "Payment", "Review"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step > i + 1
                  ? "bg-green-500 text-white"
                  : step === i + 1
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              {step > i + 1 ? "✓" : i + 1}
            </div>
            <span
              className={`text-sm font-medium ${
                step === i + 1 ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {i < 2 && <div className="w-8 md:w-16 h-px bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6">Shipping Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">First Name *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Last Name *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Email Address *</label>
                  <input type="email" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Street Address *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">City *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">State *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">ZIP Code *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Country *</label>
                  <select className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors bg-white">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Spain</option>
                    <option>Italy</option>
                    <option>Brazil</option>
                    <option>Mexico</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full mt-6 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-600" />
                Payment Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">Card Number *</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors pr-10"
                    />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Name on Card *</label>
                  <input type="text" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium block mb-1.5">Expiry Date *</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-1.5">CVV *</label>
                    <input type="text" placeholder="123" className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3.5 border border-border rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors"
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6">Review Your Order</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-4 pb-4 border-b border-border last:border-0">
                    <div className="relative w-16 h-16 bg-muted rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={getPrimaryProductImage(item.product)}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Size: {item.size} | Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-bold">
                      {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3.5 border border-border rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => alert("Order placed! (Demo)")}
                  className="flex-1 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  Place Order - {formatPrice(total)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div>
          <div className="bg-white border border-border rounded-xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm mb-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex justify-between">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-medium shrink-0">
                    {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">{shipping === 0 ? <span className="text-green-600">FREE</span> : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
