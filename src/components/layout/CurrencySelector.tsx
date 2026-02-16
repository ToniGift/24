"use client";

import { useState, useEffect } from "react";
import { Currency, getCurrentCurrency, setCurrency } from "@/lib/utils";
import { DollarSign, ChevronDown } from "lucide-react";

const currencies: { code: Currency; label: string; symbol: string }[] = [
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "PLN", label: "Polish Złoty", symbol: "zł" },
];

export default function CurrencySelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("EUR");

  useEffect(() => {
    setMounted(true);
    setSelectedCurrency(getCurrentCurrency());
  }, []);

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
    setCurrency(currency);
    setIsOpen(false);
    // Force re-render of all prices by triggering a storage event
    window.dispatchEvent(new Event("storage"));
    // Reload page to update all prices
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1.5 text-sm">
        <DollarSign className="w-4 h-4" />
        <span className="font-medium">EUR</span>
      </div>
    );
  }

  const current = currencies.find((c) => c.code === selectedCurrency) || currencies[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-muted rounded-lg transition-colors text-sm"
        aria-label="Select currency"
      >
        <DollarSign className="w-4 h-4" />
        <span className="font-medium">{current.code}</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-lg py-1 z-50 min-w-[160px]">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencyChange(currency.code)}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center justify-between ${
                  selectedCurrency === currency.code
                    ? "bg-primary/5 text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                <span>
                  {currency.symbol} {currency.label}
                </span>
                {selectedCurrency === currency.code && (
                  <span className="text-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
