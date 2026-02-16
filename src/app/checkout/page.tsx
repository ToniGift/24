"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock, CreditCard, ShoppingBag, MessageCircle, Instagram } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { formatPrice } from "@/lib/utils";
import { getPrimaryProductImage } from "@/data/images";
import { CustomerDetails, getWhatsAppCheckoutURL, copyOrderMessageToClipboard } from "@/lib/social-checkout";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const subtotal = getTotal();
  const shipping = subtotal >= 49 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  // Customer details state
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Poland",
    notifyNewDrops: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateShippingInfo = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!customerDetails.firstName.trim()) newErrors.firstName = "First name is required";
    if (!customerDetails.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!customerDetails.email.trim()) newErrors.email = "Email is required";
    if (!customerDetails.phone.trim()) newErrors.phone = "Phone number is required";
    if (!customerDetails.address.trim()) newErrors.address = "Address is required";
    if (!customerDetails.city.trim()) newErrors.city = "City is required";
    if (!customerDetails.country.trim()) newErrors.country = "Country is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleContinueToReview = () => {
    if (validateShippingInfo()) {
      setStep(2);
    }
  };
  
  const handleWhatsAppCheckout = () => {
    // Your WhatsApp business number (replace with actual number)
    const businessPhone = "48123456789"; // Example: Poland number
    const url = getWhatsAppCheckoutURL(businessPhone, items, customerDetails, subtotal, shipping, tax, total);
    window.open(url, "_blank");
    
    // Copy message to clipboard for Instagram
    copyOrderMessageToClipboard(items, customerDetails, subtotal, shipping, tax, total);
    
    // Clear cart after order
    setTimeout(() => clearCart(), 1000);
  };
  
  const handleInstagramCheckout = () => {
    // Copy order message to clipboard
    copyOrderMessageToClipboard(items, customerDetails, subtotal, shipping, tax, total);
    
    // Your Instagram username (replace with actual username)
    const instagramUsername = "24shop"; // Replace with your actual Instagram handle
    window.open(`https://ig.me/m/${instagramUsername}`, "_blank");
    
    // Show instruction
    alert("Order details copied to clipboard! Paste them in the Instagram DM.");
    
    // Clear cart after order
    setTimeout(() => clearCart(), 1000);
  };

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
        {["Customer Info", "Review & Send"].map((label, i) => (
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
            {i < 1 && <div className="w-8 md:w-16 h-px bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1: Customer Info */}
          {step === 1 && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6">Customer Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">First Name *</label>
                  <input
                    type="text"
                    value={customerDetails.firstName}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, firstName: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.firstName ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Last Name *</label>
                  <input
                    type="text"
                    value={customerDetails.lastName}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, lastName: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.lastName ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    value={customerDetails.email}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+48 123 456 789"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.phone ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium block mb-1.5">Street Address *</label>
                  <input
                    type="text"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.address ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">City *</label>
                  <input
                    type="text"
                    value={customerDetails.city}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, city: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors ${
                      errors.city ? "border-red-500" : "border-border"
                    }`}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">State / Province</label>
                  <input
                    type="text"
                    value={customerDetails.state}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, state: e.target.value })}
                    className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">ZIP / Postal Code</label>
                  <input
                    type="text"
                    value={customerDetails.zipCode}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, zipCode: e.target.value })}
                    className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">Country *</label>
                  <select
                    value={customerDetails.country}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, country: e.target.value })}
                    className={`w-full px-3 py-2.5 border rounded-lg outline-none focus:border-primary text-sm transition-colors bg-white ${
                      errors.country ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="Poland">Poland</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                  {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                </div>
                <div className="sm:col-span-2 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={customerDetails.notifyNewDrops}
                      onChange={(e) => setCustomerDetails({ ...customerDetails, notifyNewDrops: e.target.checked })}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                      🔔 Notify me on WhatsApp about new product drops and exclusive offers
                    </span>
                  </label>
                </div>
              </div>
              <button
                onClick={handleContinueToReview}
                className="w-full mt-6 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Review Order
              </button>
            </div>
          )}

          {/* Step 2: Review */}
          {step === 2 && (
            <div className="bg-white border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6">Review Your Order</h2>
              
              {/* Customer Details Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-bold mb-2">Shipping To:</h3>
                <p className="text-sm text-muted-foreground">
                  {customerDetails.firstName} {customerDetails.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{customerDetails.email}</p>
                <p className="text-sm text-muted-foreground">{customerDetails.phone}</p>
                <p className="text-sm text-muted-foreground">
                  {customerDetails.address}, {customerDetails.city}
                  {customerDetails.state && `, ${customerDetails.state}`}
                  {customerDetails.zipCode && ` ${customerDetails.zipCode}`}
                </p>
                <p className="text-sm text-muted-foreground">{customerDetails.country}</p>
              </div>
              
              {/* Order Items */}
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
                      {item.customName && item.customNumber && (
                        <p className="text-xs text-primary font-medium mt-1">
                          ⚽ Custom: {item.customName} #{item.customNumber}
                        </p>
                      )}
                    </div>
                    <p className="text-sm font-bold">
                      {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2 text-sm">
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
              
              {/* Social Checkout Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Order on WhatsApp
                </button>
                <button
                  onClick={handleInstagramCheckout}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Send Order on Instagram
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="w-full py-3 border border-border rounded-lg font-semibold text-sm hover:bg-muted transition-colors"
                >
                  ← Edit Information
                </button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Click above to send your order via WhatsApp or Instagram DM. We&apos;ll confirm and provide payment details.
              </p>
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
