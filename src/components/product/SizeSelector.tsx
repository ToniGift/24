"use client";

import { useState } from "react";
import { Ruler, X } from "lucide-react";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold">
          Size: {selectedSize && <span className="text-primary">{selectedSize}</span>}
        </span>
        <button
          onClick={() => setShowGuide(true)}
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <Ruler className="w-3.5 h-3.5" />
          Size Guide
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`min-w-[3rem] px-3 py-2 text-sm font-medium border rounded-lg transition-all ${
              selectedSize === size
                ? "border-primary bg-primary text-white"
                : "border-border hover:border-primary/50 hover:bg-primary/5"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Size Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center" onClick={() => setShowGuide(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-lg font-bold">Size Guide</h3>
              <button onClick={() => setShowGuide(false)} className="p-1 hover:bg-muted rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Size</th>
                    <th className="text-left py-2 font-semibold">Chest (in)</th>
                    <th className="text-left py-2 font-semibold">Length (in)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2">S</td><td>34-37</td><td>27</td></tr>
                  <tr className="border-b border-border"><td className="py-2">M</td><td>37-41</td><td>28</td></tr>
                  <tr className="border-b border-border"><td className="py-2">L</td><td>41-44</td><td>29</td></tr>
                  <tr className="border-b border-border"><td className="py-2">XL</td><td>44-48</td><td>30</td></tr>
                  <tr><td className="py-2">XXL</td><td>48-53</td><td>31</td></tr>
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-4">
                Measurements are approximate. For the best fit, measure your chest at the fullest point.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
