"use client";

import Link from "next/link";
import { leagues } from "@/data/leagues";

// Rich color schemes for each league
const leagueVisuals: Record<string, { gradient: string; accent: string; textColor: string }> = {
  "premier-league": { gradient: "from-purple-900 to-purple-600", accent: "bg-purple-400", textColor: "text-purple-200" },
  "la-liga": { gradient: "from-orange-700 to-red-600", accent: "bg-orange-400", textColor: "text-orange-200" },
  "bundesliga": { gradient: "from-red-800 to-red-500", accent: "bg-red-400", textColor: "text-red-200" },
  "serie-a": { gradient: "from-blue-900 to-blue-600", accent: "bg-blue-400", textColor: "text-blue-200" },
  "ligue-1": { gradient: "from-green-800 to-emerald-600", accent: "bg-green-400", textColor: "text-green-200" },
  "mls": { gradient: "from-blue-800 to-indigo-600", accent: "bg-indigo-400", textColor: "text-indigo-200" },
  "liga-mx": { gradient: "from-green-900 to-green-600", accent: "bg-green-400", textColor: "text-green-200" },
  "champions-league": { gradient: "from-indigo-900 to-blue-700", accent: "bg-indigo-400", textColor: "text-indigo-200" },
};

export default function ShopByLeague() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black">Shop by League</h2>
          <p className="text-muted-foreground mt-1">Find your league, find your kit</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {leagues.map((league) => {
            const visual = leagueVisuals[league.slug] || leagueVisuals["premier-league"];
            return (
              <Link
                key={league.id}
                href={`/shop/clubs?league=${league.slug}`}
                className={`group relative rounded-2xl overflow-hidden h-36 md:h-44 bg-gradient-to-br ${visual.gradient}`}
              >
                {/* Decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/5" />
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${visual.accent} opacity-60`} />

                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="mb-2">
                    <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-white/25 transition-colors">
                      <span className="text-white text-xs font-black">
                        {league.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight group-hover:translate-x-1 transition-transform">
                    {league.name}
                  </h3>
                  <p className={`text-xs ${visual.textColor} mt-0.5`}>{league.country}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
