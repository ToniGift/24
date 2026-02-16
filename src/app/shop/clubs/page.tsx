import Link from "next/link";
import { clubs } from "@/data/clubs";
import { leagues } from "@/data/leagues";

export default function ClubsPage() {
  const groupedByLeague = leagues.map((league) => ({
    league,
    clubs: clubs.filter((c) => c.league === league.name),
  })).filter((g) => g.clubs.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black">Shop by Club</h1>
        <p className="text-muted-foreground mt-1">
          Browse official jerseys and gear from clubs worldwide
        </p>
      </div>

      <div className="space-y-10">
        {groupedByLeague.map(({ league, clubs: leagueClubs }) => (
          <div key={league.id}>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border">{league.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {leagueClubs.map((club) => (
                <Link
                  key={club.id}
                  href={`/shop/clubs/${club.slug}`}
                  className="group p-4 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-center"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: club.primaryColor + "15" }}
                  >
                    <span
                      className="text-lg font-black"
                      style={{ color: club.primaryColor }}
                    >
                      {club.name.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {club.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
