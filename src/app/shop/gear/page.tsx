"use client";

import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const filters = [
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma"] },
  { label: "Type", key: "subcategory", options: ["balls", "shin-guards", "goalkeeper", "bags", "training"] },
];

export default function GearPage() {
  const gear = products.filter((p) => p.category === "gear");

  return (
    <ProductGrid
      products={gear}
      title="Soccer Gear & Equipment"
      subtitle="Balls, shin guards, goalkeeper gloves, bags and training equipment"
      filters={filters}
    />
  );
}
