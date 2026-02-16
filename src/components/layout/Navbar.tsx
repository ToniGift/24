"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import MegaMenu from "./MegaMenu";
import SearchModal from "./SearchModal";
import CurrencySelector from "./CurrencySelector";

const navItems = [
  {
    label: "CLUBS",
    href: "/shop/clubs",
    megaMenu: "clubs",
  },
  {
    label: "NATIONAL TEAMS",
    href: "/shop/national-teams",
    megaMenu: "teams",
  },
  {
    label: "JERSEYS",
    href: "/shop/jerseys",
    megaMenu: "jerseys",
  },
  {
    label: "WORLD CUP 2026",
    href: "/shop/national-teams",
    megaMenu: null,
    accent: true,
  },
  {
    label: "SALE",
    href: "/shop/sale",
    megaMenu: null,
    accent: true,
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggleCart, getItemCount } = useCartStore();
  const itemCount = mounted ? getItemCount() : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="bg-white border-b border-border/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top row */}
          <div className="h-16 flex items-center justify-between border-b border-border/70">
            <div className="flex items-center gap-1">
              <button
                className="lg:hidden p-2 -ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <Link href="/" className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              TWENTY FOUR
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <CurrencySelector />
              <Link
                href="/account"
                className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/wishlist"
                className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:flex"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-muted rounded-full transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Desktop category row */}
          <nav className="hidden lg:flex items-center justify-center h-10 gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.megaMenu && setActiveMenu(item.megaMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`px-2.5 py-2 text-[13px] font-bold tracking-wide transition-colors flex items-center gap-1 ${
                    item.accent
                      ? "text-primary hover:text-primary-dark"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="w-3 h-3" />}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        {activeMenu && (
          <div
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <MegaMenu type={activeMenu} />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-sm font-semibold tracking-wide rounded-lg transition-colors ${
                    item.accent ? "text-primary hover:bg-amber-50" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Currency:</span>
                  <CurrencySelector />
                </div>
                <div className="flex gap-4">
                  <Link href="/account" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <User className="w-4 h-4" /> Account
                  </Link>
                  <Link href="/wishlist" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                    <Heart className="w-4 h-4" /> Wishlist
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
