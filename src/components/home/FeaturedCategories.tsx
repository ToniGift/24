"use client";

import Link from "next/link";
import Image from "next/image";
import { categoryImages } from "@/data/images";

const categories = [
  { name: "Club Jerseys", href: "/shop/clubs", image: categoryImages.jerseys, count: "100+" },
  { name: "National Teams", href: "/shop/national-teams", image: categoryImages.nationalTeams, count: "40+" },
  { name: "Footwear", href: "/shop/footwear", image: categoryImages.footwear, count: "50+" },
  { name: "Gear & Equipment", href: "/shop/gear", image: categoryImages.gear, count: "30+" },
  { name: "New Arrivals", href: "/shop/jerseys?sort=newest", image: categoryImages.newArrivals, count: "NEW" },
  { name: "Sale", href: "/shop/sale", image: categoryImages.sale, count: "40% OFF" },
];

export default function FeaturedCategories() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5">
                  {cat.count}
                </span>
                <h3 className="text-white text-sm font-bold leading-tight">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
