"use client";

import { useState } from "react";
import {
  Headphones,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  Truck,
  RefreshCw,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Orders placed before 2 PM EST typically ship same day.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes! We offer free standard shipping on all orders over $49. This applies to all items in our store.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day return policy on all unworn, unaltered items in original packaging. Customized jerseys (with names/numbers) are final sale.",
  },
  {
    q: "Are your products authentic?",
    a: "Absolutely. Every product we sell is 100% officially licensed and authentic. We are an authorized retailer for Nike, adidas, Puma, and other major brands.",
  },
  {
    q: "Can I customize a jersey with any name and number?",
    a: "Yes! You can add any name and number to most jerseys during checkout. Official player customization is also available for select jerseys.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! We ship to over 100 countries worldwide. International shipping rates and times vary by destination.",
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-black mb-2">How Can We Help?</h1>
        <p className="text-muted-foreground">
          Find answers to common questions or get in touch with our team
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <div className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-sm mb-1">Email Us</h3>
          <p className="text-sm text-muted-foreground">support@twentyfour.com</p>
          <p className="text-xs text-muted-foreground mt-1">Response within 24 hours</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-sm mb-1">Call Us</h3>
          <p className="text-sm text-muted-foreground">1-800-TWENTY4</p>
          <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9AM-6PM EST</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-bold text-sm mb-1">Live Chat</h3>
          <p className="text-sm text-muted-foreground">Chat with our team</p>
          <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid sm:grid-cols-4 gap-4 mb-12">
        {[
          { icon: Truck, title: "Free Shipping", desc: "Orders over $49" },
          { icon: RefreshCw, title: "30-Day Returns", desc: "Easy returns" },
          { icon: ShieldCheck, title: "100% Authentic", desc: "Licensed products" },
          { icon: CreditCard, title: "Secure Payment", desc: "SSL encrypted" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Icon className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-white border border-border rounded-xl p-6 md:p-8">
        <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent! (Demo)"); }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1.5">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Subject</label>
            <select className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors bg-white">
              <option>Order Inquiry</option>
              <option>Shipping Question</option>
              <option>Returns & Exchanges</option>
              <option>Product Question</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1.5">Message</label>
            <textarea
              rows={5}
              className="w-full px-3 py-2.5 border border-border rounded-lg outline-none focus:border-primary text-sm transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
