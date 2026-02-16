"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, Grid3X3, LayoutList, ChevronDown } from "lucide-react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

interface FilterSection {
  label: string;
  key: string;
  options: string[];
}

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  filters?: FilterSection[];
  showFilters?: boolean;
}

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rated", value: "rating" },
];

const ITEMS_PER_PAGE = 12;

export default function ProductGrid({
  products,
  title,
  subtitle,
  filters = [],
  showFilters = true,
}: ProductGridProps) {
  const [sortBy, setSortBy] = useState("featured");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (key: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[key] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: updated };
    });
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setCurrentPage(1);
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    // Apply filters
    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values.length === 0) return;
      result = result.filter((p) => {
        const productValue = (p as unknown as Record<string, unknown>)[key];
        if (typeof productValue === "string") {
          return values.some((v) => productValue.toLowerCase().includes(v.toLowerCase()));
        }
        if (typeof productValue === "boolean") {
          return values.includes(productValue ? "Yes" : "No");
        }
        return true;
      });
    });

    // Apply sort
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "price-asc":
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case "price-desc":
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [products, activeFilters, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredAndSorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters */}
        {showFilters && filters.length > 0 && (
          <aside className="hidden lg:block w-64 shrink-0">
            <ProductFilters
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={clearAllFilters}
            />
          </aside>
        )}

        {/* Products */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-4">
              {showFilters && filters.length > 0 && (
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center gap-2 text-sm font-semibold"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
              )}
              <p className="text-sm text-muted-foreground">
                {filteredAndSorted.length} product{filteredAndSorted.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-3 py-2 text-sm font-medium border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <div className="lg:hidden mb-6 p-4 border border-border rounded-lg">
              <ProductFilters
                filters={filters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={clearAllFilters}
              />
            </div>
          )}

          {/* Grid */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-semibold mb-2">No products found</p>
              <p className="text-muted-foreground">Try adjusting your filters to find what you&apos;re looking for.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === i + 1
                      ? "bg-primary text-white"
                      : "border border-border hover:bg-muted"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events-none"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
