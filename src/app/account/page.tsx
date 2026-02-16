"use client";

import { useState } from "react";
import { Copy, Check, MessageCircle, Instagram, Package, Truck, Mail, Bell } from "lucide-react";
import Link from "next/link";

export default function OwnerAccountPage() {
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const copyToClipboard = (text: string, templateId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(templateId);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const templates = {
    orderConfirmation: `Hi {Customer Name}! 👋

Thank you for your order from 24! 🎉

Order Summary:
{Order Details}

We'll prepare your items and confirm payment details shortly. Please reply to confirm your preferred payment method.

Need any changes? Let us know!

Best regards,
24 Team ⚽`,

    paymentRequest: `Hi {Customer Name}! 💳

Your order is confirmed and ready to ship!

Total: {Total Amount}

Payment Options:
💳 Bank Transfer: [Your Bank Details]
📱 Mobile Payment: [Your Payment Link]
💰 Cash on Delivery (if available)

Please send payment confirmation once completed.

24 Team ⚽`,

    shippingUpdate: `Hi {Customer Name}! 📦

Great news! Your order has been shipped! 🚚

Tracking: {Tracking Number}
Estimated Delivery: {Delivery Date}

You can track your package here: {Tracking Link}

Questions? Just reply!

24 Team ⚽`,

    deliveryConfirmation: `Hi {Customer Name}! ✅

Your order has been delivered! 🎉

We hope you love your new gear! If everything looks good, we'd appreciate a quick photo or review.

Having any issues? Let us know immediately.

Thanks for shopping with 24! ⚽`,

    newDropAnnouncement: `🔥 NEW DROP ALERT! 🔥

{Customer Name}, check out what just landed:

{Product Name}
Price: {Price}
Available Sizes: {Sizes}

Limited stock! Get yours before they're gone 👉 {Product Link}

24 Team ⚽`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black mb-2">Owner Operations</h1>
        <p className="text-muted-foreground">
          Quick access to templates, checklists, and tools to manage your store efficiently.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Links */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Quick Links
          </h2>
          <div className="space-y-3">
            <a
              href="https://web.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp Web</p>
                <p className="text-xs text-muted-foreground">Manage customer messages</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/direct/inbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Instagram DMs</p>
                <p className="text-xs text-muted-foreground">Check direct messages</p>
              </div>
            </a>
            <Link
              href="/shop"
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Browse Products</p>
                <p className="text-xs text-muted-foreground">View your catalog</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Daily Checklist */}
        <div className="bg-white border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            Daily Operations Checklist
          </h2>
          <div className="space-y-3">
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Check WhatsApp & Instagram messages</p>
                <p className="text-xs text-muted-foreground">Respond to new orders and inquiries</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Confirm pending orders</p>
                <p className="text-xs text-muted-foreground">Send payment requests to confirmed customers</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Process payments received</p>
                <p className="text-xs text-muted-foreground">Verify and mark orders ready to ship</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Update shipping status</p>
                <p className="text-xs text-muted-foreground">Send tracking info to customers</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Tag new-drop opt-in customers</p>
                <p className="text-xs text-muted-foreground">Save in WhatsApp Business labels</p>
              </div>
            </label>
            <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary" />
              <div>
                <p className="text-sm font-medium">Update product inventory</p>
                <p className="text-xs text-muted-foreground">Check stock levels and add new items</p>
              </div>
            </label>
          </div>
        </div>

        {/* Message Templates */}
        <div className="lg:col-span-2 bg-white border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Message Templates
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Order Confirmation */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Package className="w-4 h-4 text-primary" />
                  Order Confirmation
                </h3>
                <button
                  onClick={() => copyToClipboard(templates.orderConfirmation, "orderConfirmation")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedTemplate === "orderConfirmation" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line line-clamp-4">
                {templates.orderConfirmation}
              </p>
            </div>

            {/* Payment Request */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary" />
                  Payment Request
                </h3>
                <button
                  onClick={() => copyToClipboard(templates.paymentRequest, "paymentRequest")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedTemplate === "paymentRequest" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line line-clamp-4">
                {templates.paymentRequest}
              </p>
            </div>

            {/* Shipping Update */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" />
                  Shipping Update
                </h3>
                <button
                  onClick={() => copyToClipboard(templates.shippingUpdate, "shippingUpdate")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedTemplate === "shippingUpdate" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line line-clamp-4">
                {templates.shippingUpdate}
              </p>
            </div>

            {/* Delivery Confirmation */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Delivery Confirmation
                </h3>
                <button
                  onClick={() => copyToClipboard(templates.deliveryConfirmation, "deliveryConfirmation")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedTemplate === "deliveryConfirmation" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line line-clamp-4">
                {templates.deliveryConfirmation}
              </p>
            </div>

            {/* New Drop Announcement */}
            <div className="border border-border rounded-lg p-4 md:col-span-2">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  New Drop Announcement
                </h3>
                <button
                  onClick={() => copyToClipboard(templates.newDropAnnouncement, "newDropAnnouncement")}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copiedTemplate === "newDropAnnouncement" ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground whitespace-pre-line line-clamp-3">
                {templates.newDropAnnouncement}
              </p>
            </div>
          </div>
        </div>

        {/* Tips for Managing Customers */}
        <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">💡 Tips for Managing New Drop Opt-ins</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-1">1. Save Customer Contacts</p>
              <p className="text-muted-foreground text-xs">
                When customers opt-in, save their WhatsApp number with a label like "New Drops" in WhatsApp Business.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">2. Create Broadcast Lists</p>
              <p className="text-muted-foreground text-xs">
                Use WhatsApp Business broadcast lists to send new product announcements to all opt-in customers at once.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">3. Personalize Messages</p>
              <p className="text-muted-foreground text-xs">
                Include customer name and reference their previous purchases when announcing relevant new products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditCard({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}
