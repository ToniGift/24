"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { players } from "@/data/players";
import { heroImages } from "@/data/images";

// Assign accent colors to players for visual variety
const playerAccents = [
  "from-blue-600 to-blue-800",
  "from-purple-600 to-purple-800",
  "from-rose-600 to-rose-800",
  "from-sky-600 to-sky-800",
  "from-amber-600 to-amber-800",
  "from-emerald-600 to-emerald-800",
  "from-red-600 to-red-800",
  "from-indigo-600 to-indigo-800",
  "from-orange-600 to-orange-800",
  "from-teal-600 to-teal-800",
  "from-pink-600 to-pink-800",
  "from-cyan-600 to-cyan-800",
];

export default function FeaturedPlayers() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImages.pitch}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary/92" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
              Player Jerseys
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white">Shop by Player</h2>
            <p className="text-white/50 mt-1">Get your favorite star&apos;s official jersey</p>
          </div>
          <Link
            href="/shop/players"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            All Players <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {players.slice(0, 12).map((player, i) => (
            <Link
              key={player.id}
              href={`/shop/players/${player.slug}`}
              className="group text-center"
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${playerAccents[i % playerAccents.length]} flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-3xl md:text-4xl font-black text-white/30 group-hover:text-white/50 transition-colors">
                  {player.number || "?"}
                </span>
              </div>
              <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-primary transition-colors">
                {player.name}
              </h3>
              <p className="text-[10px] md:text-xs text-white/40 mt-0.5 truncate">
                {player.club}
              </p>
            </Link>
          ))}
        </div>

        <div className="md:hidden mt-6 text-center">
          <Link
            href="/shop/players"
            className="inline-flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            View All Players <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
