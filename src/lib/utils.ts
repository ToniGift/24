import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Currency = "EUR" | "USD" | "PLN";

// Default currency is EUR as specified in the plan
const DEFAULT_CURRENCY: Currency = "EUR";

// Currency conversion rates (base: EUR)
const CURRENCY_RATES: Record<Currency, number> = {
  EUR: 1,
  USD: 1.09,
  PLN: 4.32,
};

// Get currency from localStorage or use default
export function getCurrentCurrency(): Currency {
  if (typeof window === "undefined") return DEFAULT_CURRENCY;
  const stored = localStorage.getItem("currency");
  return (stored as Currency) || DEFAULT_CURRENCY;
}

// Set currency in localStorage
export function setCurrency(currency: Currency): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("currency", currency);
}

export function formatPrice(price: number, currency?: Currency): string {
  const activeCurrency = currency || (typeof window !== "undefined" ? getCurrentCurrency() : DEFAULT_CURRENCY);
  const convertedPrice = price * CURRENCY_RATES[activeCurrency];
  
  const localeMap: Record<Currency, string> = {
    EUR: "de-DE",
    USD: "en-US",
    PLN: "pl-PL",
  };

  return new Intl.NumberFormat(localeMap[activeCurrency], {
    style: "currency",
    currency: activeCurrency,
  }).format(convertedPrice);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}
