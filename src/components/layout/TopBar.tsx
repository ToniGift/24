"use client";

import { useState, useEffect } from "react";
import { X, Truck, Tag, Mail } from "lucide-react";

const promoMessages = [
  { text: "FREE SHIPPING on all jersey orders over $49", icon: Truck },
  { text: "WORLD CUP 2026 - New jerseys available now!", icon: Tag },
  { text: "Use code TWENTY24 for 10% off your first order", icon: Mail },
];

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promoMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const CurrentIcon = promoMessages[currentIndex].icon;

  return (
    <div className="bg-gradient-to-r from-secondary via-gray-800 to-secondary text-white text-sm relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <CurrentIcon className="w-4 h-4 text-primary shrink-0" />
          <p className="text-center text-xs sm:text-sm">
            {promoMessages[currentIndex].text}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Close promotion bar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
