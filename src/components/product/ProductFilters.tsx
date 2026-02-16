"use client";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface FilterSection {
  label: string;
  key: string;
  options: string[];
}

interface ProductFiltersProps {
  filters: FilterSection[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (key: string, value: string) => void;
  onClearAll: () => void;
}

export default function ProductFilters({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
}: ProductFiltersProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(filters.map((f) => [f.key, true]))
  );

  const hasActiveFilters = Object.values(activeFilters).some((v) => v.length > 0);

  return (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold uppercase tracking-wide">Active Filters</h3>
            <button
              onClick={onClearAll}
              className="text-xs text-primary hover:text-primary-dark font-semibold"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(activeFilters).map(([key, values]) =>
              values.map((value) => (
                <button
                  key={`${key}-${value}`}
                  onClick={() => onFilterChange(key, value)}
                  className="flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  {value}
                  <X className="w-3 h-3" />
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {filters.map((section) => (
        <div key={section.key} className="border-t border-border pt-4">
          <button
            onClick={() =>
              setExpanded((prev) => ({ ...prev, [section.key]: !prev[section.key] }))
            }
            className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wide mb-3"
          >
            {section.label}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expanded[section.key] ? "rotate-180" : ""
              }`}
            />
          </button>
          {expanded[section.key] && (
            <div className="space-y-2">
              {section.options.map((option) => {
                const isActive = activeFilters[section.key]?.includes(option) ?? false;
                return (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-primary border-primary"
                          : "border-border group-hover:border-primary/50"
                      }`}
                    >
                      {isActive && (
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 10">
                          <path d="M10.59 0L12 1.41 4.41 9 0 4.59 1.41 3.17 4.41 6.17z" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        isActive ? "font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
