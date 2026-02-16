"use client";

import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const filters = [
  { label: "Category", key: "category", options: ["jersey", "footwear", "gear", "apparel"] },
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma", "New Balance"] },
  { label: "Gender", key: "gender", options: ["men", "women", "youth", "unisex"] },
];

export default function ShopPage() {
  return (
    <ProductGrid
      products={products}
      title="All Products"
      subtitle="Browse our complete collection of jerseys, footwear, and gear"
      filters={filters}
    />
  );
}
