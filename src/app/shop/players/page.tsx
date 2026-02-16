import Link from "next/link";
import { players } from "@/data/players";

export default function PlayersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black">Shop by Player</h1>
        <p className="text-muted-foreground mt-1">
          Get your favorite star&apos;s official jersey
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {players.map((player) => (
          <Link
            key={player.id}
            href={`/shop/players/${player.slug}`}
            className="group p-4 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-center"
          >
            <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <span className="text-2xl font-black text-gray-400 group-hover:text-primary transition-colors">
                {player.number || "?"}
              </span>
            </div>
            <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
              {player.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{player.club}</p>
            <p className="text-xs text-muted-foreground">{player.position}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
