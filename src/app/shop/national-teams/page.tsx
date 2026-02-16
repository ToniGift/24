import Link from "next/link";
import { nationalTeams } from "@/data/teams";

export default function NationalTeamsPage() {
  const confederations = ["UEFA", "CONMEBOL", "CONCACAF", "AFC", "CAF"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black">National Teams</h1>
        <p className="text-muted-foreground mt-1">
          Official national team jerseys from around the world
        </p>
      </div>

      <div className="space-y-10">
        {confederations.map((conf) => {
          const teams = nationalTeams.filter((t) => t.confederation === conf);
          if (teams.length === 0) return null;
          return (
            <div key={conf}>
              <h2 className="text-xl font-bold mb-4 pb-2 border-b border-border">{conf}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {teams.map((team) => (
                  <Link
                    key={team.id}
                    href={`/shop/national-teams/${team.slug}`}
                    className="group p-4 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all text-center"
                  >
                    <div className="text-4xl mb-3">{team.flag}</div>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {team.name}
                    </h3>
                    {team.fifaRanking && (
                      <p className="text-xs text-muted-foreground mt-1">
                        FIFA #{team.fifaRanking}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
