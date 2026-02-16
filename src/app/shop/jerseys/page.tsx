"use client";

import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";

const filters = [
  { label: "Brand", key: "brand", options: ["Nike", "adidas", "Puma"] },
  { label: "League", key: "league", options: ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "MLS"] },
  { label: "Gender", key: "gender", options: ["men", "women", "youth"] },
];

export default function JerseysPage() {
  const jerseys = products.filter((p) => p.category === "jersey");

  return (
    <ProductGrid
      products={jerseys}
      title="Jersey Shop"
      subtitle="Official club and national team jerseys from all major leagues"
      filters={filters}
    />
  );
}
