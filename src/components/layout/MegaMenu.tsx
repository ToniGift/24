"use client";

import Link from "next/link";
import Image from "next/image";
import { clubs } from "@/data/clubs";
import { nationalTeams } from "@/data/teams";
import { players } from "@/data/players";
import { megaMenuImages } from "@/data/images";

interface MegaMenuProps {
  type: string;
}

export default function MegaMenu({ type }: MegaMenuProps) {
  return (
    <div className="absolute left-0 right-0 bg-white border-y border-border shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {type === "clubs" && <ClubsMenu />}
        {type === "teams" && <TeamsMenu />}
        {type === "jerseys" && <JerseyMenu />}
      </div>
    </div>
  );
}

function MenuShowcase({
  image,
  title,
  subtitle,
  href,
  cta,
}: {
  image: string;
  title: string;
  subtitle: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="relative h-72 rounded-xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" sizes="40vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Featured</p>
        <h4 className="text-white text-2xl font-black leading-tight">{title}</h4>
        <p className="text-white/70 text-sm mt-1 mb-4 max-w-xs">{subtitle}</p>
        <Link
          href={href}
          className="inline-block w-fit bg-white text-foreground px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

function ClubsMenu() {
  const premierLeague = clubs.filter((c) => c.league === "Premier League");
  const laLiga = clubs.filter((c) => c.league === "La Liga");
  const other = clubs.filter((c) => !["Premier League", "La Liga"].includes(c.league)).slice(0, 8);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7 grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
            More Clubs
          </h3>
          <ul className="space-y-2">
            {other.map((club) => (
              <li key={club.id}>
                <Link
                  href={`/shop/clubs/${club.slug}`}
                  className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {club.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
            Leagues
          </h3>
          <ul className="space-y-2">
            {[
              "Premier League",
              "La Liga",
              "Bundesliga",
              "Serie A",
              "Ligue 1",
              "MLS",
              "Liga MX",
              "Champions League",
            ].map((league) => (
              <li key={league}>
                <Link href={`/shop/clubs?league=${league.toLowerCase().replace(/\s+/g, "-")}`} className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">
                  {league}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
          Premier League
          </h3>
          <ul className="space-y-2 mb-4">
            {premierLeague.slice(0, 4).map((club) => (
              <li key={club.id}>
                <Link href={`/shop/clubs/${club.slug}`} className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">
                  {club.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
            La Liga
          </h3>
          <ul className="space-y-2">
            {laLiga.slice(0, 4).map((club) => (
              <li key={club.id}>
                <Link href={`/shop/clubs/${club.slug}`} className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">
                  {club.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-5">
        <MenuShowcase
          image={megaMenuImages.clubs}
          title="Club Jerseys 24/25"
          subtitle="Official kits from Europe's top clubs and beyond."
          href="/shop/clubs"
          cta="View All Clubs"
        />
      </div>
    </div>
  );
}

function TeamsMenu() {
  const uefa = nationalTeams.filter((t) => t.confederation === "UEFA");
  const conmebol = nationalTeams.filter((t) => t.confederation === "CONMEBOL");
  const others = nationalTeams.filter((t) => !["UEFA", "CONMEBOL"].includes(t.confederation));

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7 grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
          UEFA (Europe)
          </h3>
          <ul className="space-y-2">
            {uefa.slice(0, 8).map((team) => (
              <li key={team.id}>
                <Link
                  href={`/shop/national-teams/${team.slug}`}
                  className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {team.flag} {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
          CONMEBOL (South America)
          </h3>
          <ul className="space-y-2">
            {conmebol.map((team) => (
              <li key={team.id}>
                <Link
                  href={`/shop/national-teams/${team.slug}`}
                  className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {team.flag} {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
          More Nations
          </h3>
          <ul className="space-y-2">
            {others.slice(0, 8).map((team) => (
              <li key={team.id}>
                <Link
                  href={`/shop/national-teams/${team.slug}`}
                  className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {team.flag} {team.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-5">
        <MenuShowcase
          image={megaMenuImages.teams}
          title="World Cup 2026"
          subtitle="Shop official jerseys from national teams around the world."
          href="/shop/national-teams"
          cta="Shop Nations"
        />
      </div>
    </div>
  );
}

function JerseyMenu() {
  const half = Math.ceil(players.length / 2);
  const firstHalf = players.slice(0, half);
  const secondHalf = players.slice(half);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7 grid grid-cols-3 gap-6">
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
          Shop by Type
        </h3>
        <ul className="space-y-2">
          <li><Link href="/shop/jerseys" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">All Jerseys</Link></li>
          <li><Link href="/shop/jerseys?type=authentic" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">Authentic Jerseys</Link></li>
          <li><Link href="/shop/jerseys?type=replica" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">Replica Jerseys</Link></li>
          <li><Link href="/shop/jerseys?gender=women" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">Women&apos;s Jerseys</Link></li>
          <li><Link href="/shop/jerseys?gender=youth" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">Youth Jerseys</Link></li>
          <li><Link href="/shop/jerseys?tag=retro" className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">Retro Jerseys</Link></li>
        </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
            Popular Players
          </h3>
          <ul className="space-y-2">
            {firstHalf.slice(0, 8).map((player) => (
              <li key={player.id}>
                <Link href={`/shop/players/${player.slug}`} className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">
                  {player.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-sm uppercase tracking-wide text-primary mb-3">
            More Players
          </h3>
          <ul className="space-y-2">
            {secondHalf.slice(0, 8).map((player) => (
              <li key={player.id}>
                <Link href={`/shop/players/${player.slug}`} className="text-[15px] font-medium text-gray-700 hover:text-primary transition-colors">
                  {player.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-5">
        <MenuShowcase
          image={megaMenuImages.jerseys}
          title="New Kit Releases"
          subtitle="Authentic and replica jerseys from top clubs and players."
          href="/shop/jerseys"
          cta="Shop Jerseys"
        />
      </div>
    </div>
  );
}
