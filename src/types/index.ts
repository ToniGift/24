export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: "jersey" | "footwear" | "gear" | "apparel";
  subcategory?: string;
  club?: string;
  clubSlug?: string;
  nationalTeam?: string;
  nationalTeamSlug?: string;
  player?: string;
  playerSlug?: string;
  league?: string;
  brand: string;
  sizes: string[];
  colors: string[];
  isAuthentic: boolean;
  gender: "men" | "women" | "youth" | "unisex";
  description: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
  isSale: boolean;
  tags: string[];
}

export interface Club {
  id: string;
  name: string;
  slug: string;
  logo: string;
  league: string;
  leagueSlug: string;
  country: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface NationalTeam {
  id: string;
  name: string;
  slug: string;
  flag: string;
  confederation: string;
  fifaRanking?: number;
}

export interface Player {
  id: string;
  name: string;
  slug: string;
  image: string;
  club?: string;
  clubSlug?: string;
  nationalTeam?: string;
  nationalTeamSlug?: string;
  number?: number;
  position: string;
}

export interface League {
  id: string;
  name: string;
  slug: string;
  logo: string;
  country: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  customName?: string;
  customNumber?: string;
}

export interface NavCategory {
  label: string;
  href: string;
  featured?: { label: string; href: string; image?: string }[];
  columns?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}
