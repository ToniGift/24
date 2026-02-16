"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "Clubs", href: "/shop/clubs" },
    { label: "National Teams", href: "/shop/national-teams" },
    { label: "Players", href: "/shop/players" },
    { label: "Jersey Shop", href: "/shop/jerseys" },
    { label: "Footwear", href: "/shop/footwear" },
    { label: "Gear", href: "/shop/gear" },
    { label: "Sale", href: "/shop/sale" },
  ],
  help: [
    { label: "Contact Us", href: "/help" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Shipping Info", href: "/help" },
    { label: "Returns & Exchanges", href: "/help" },
    { label: "FAQ", href: "/help" },
    { label: "Track Order", href: "/help" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Stay in the Game</h3>
              <p className="text-white/70">
                Get exclusive deals, new arrivals and jersey drops straight to your inbox.
              </p>
            </div>
            <form className="flex w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-r-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-white font-black text-lg px-3 py-1.5 rounded">
                24
              </div>
              <span className="text-xl font-black tracking-tight">TWENTY FOUR</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Your premier destination for authentic soccer jerseys, footwear, and gear.
              Representing the beautiful game with passion since 2024.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@twentyfour.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-TWENTY4</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Worldwide Shipping</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Help</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Twenty Four. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span className="font-semibold">We Accept:</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
