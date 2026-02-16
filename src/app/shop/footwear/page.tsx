"use client";

import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const filters = [
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma", "New Balance", "Mizuno"] },
  { label: "Gender", key: "gender", options: ["men", "women", "youth"] },
];

export default function FootwearPage() {
  const footwear = products.filter((p) => p.category === "footwear");

  return (
    <ProductGrid
      products={footwear}
      title="Soccer Footwear"
      subtitle="Cleats, indoor shoes, turf shoes and more from top brands"
      filters={filters}
    />
  );
}
