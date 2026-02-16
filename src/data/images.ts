import { Product } from "@/types";

// Centralized image mapping for the entire site
// High-quality real photo assets for a richer store look.

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const heroImages = {
  worldcup: unsplash("photo-1431324155629-1a6deb1dec8d", 2200),
  stadium: unsplash("photo-1522778119026-d647f0596c20", 2200),
  fans: unsplash("photo-1574629810360-7efbbe195018", 2200),
  action: unsplash("photo-1553778263-73a83bab9b0c", 2200),
  ball: unsplash("photo-1614632537423-1e6c2e7e0aab", 2200),
  cleats: unsplash("photo-1517927033932-b3d18e61fb3a", 2200),
  pitch: unsplash("photo-1489944440615-453fc2b6a9a9", 2200),
};

export const categoryImages = {
  jerseys: unsplash("photo-1577223625816-7546f13df25d", 900),
  nationalTeams: unsplash("photo-1459865264687-595d652de67e", 900),
  footwear: unsplash("photo-1517927033932-b3d18e61fb3a", 900),
  gear: unsplash("photo-1614632537423-1e6c2e7e0aab", 900),
  newArrivals: unsplash("photo-1517466787929-bc90951d0974", 900),
  sale: unsplash("photo-1574629810360-7efbbe195018", 900),
};

export const bannerImages = {
  customize: unsplash("photo-1560272564-c83b66b1ad12", 1800),
  sale: unsplash("photo-1431324155629-1a6deb1dec8d", 1800),
  worldcup: unsplash("photo-1522778119026-d647f0596c20", 1800),
  freeShipping: unsplash("photo-1553778263-73a83bab9b0c", 1800),
};

export const megaMenuImages = {
  clubs: unsplash("photo-1522778119026-d647f0596c20", 1400),
  teams: unsplash("photo-1459865264687-595d652de67e", 1400),
  players: unsplash("photo-1574629810360-7efbbe195018", 1400),
  jerseys: unsplash("photo-1517466787929-bc90951d0974", 1400),
};

const jerseyProductImages = [
  unsplash("photo-1517466787929-bc90951d0974", 1200),
  unsplash("photo-1577223625816-7546f13df25d", 1200),
  unsplash("photo-1522778119026-d647f0596c20", 1200),
  unsplash("photo-1459865264687-595d652de67e", 1200),
  unsplash("photo-1574629810360-7efbbe195018", 1200),
  unsplash("photo-1553778263-73a83bab9b0c", 1200),
];

const footwearProductImages = [
  unsplash("photo-1517927033932-b3d18e61fb3a", 1200),
  unsplash("photo-1560272564-c83b66b1ad12", 1200),
  unsplash("photo-1489944440615-453fc2b6a9a9", 1200),
  unsplash("photo-1614632537423-1e6c2e7e0aab", 1200),
];

const gearProductImages = [
  unsplash("photo-1614632537423-1e6c2e7e0aab", 1200),
  unsplash("photo-1553778263-73a83bab9b0c", 1200),
  unsplash("photo-1489944440615-453fc2b6a9a9", 1200),
  unsplash("photo-1431324155629-1a6deb1dec8d", 1200),
];

const apparelProductImages = [
  unsplash("photo-1577223625816-7546f13df25d", 1200),
  unsplash("photo-1517466787929-bc90951d0974", 1200),
  unsplash("photo-1560272564-c83b66b1ad12", 1200),
];

const productImageOverrides: Record<string, string[]> = {
  "nike-mercurial-superfly-10-elite": [
    unsplash("photo-1517927033932-b3d18e61fb3a", 1200),
    unsplash("photo-1489944440615-453fc2b6a9a9", 1200),
    unsplash("photo-1560272564-c83b66b1ad12", 1200),
  ],
  "adidas-predator-elite-fg": [
    unsplash("photo-1489944440615-453fc2b6a9a9", 1200),
    unsplash("photo-1517927033932-b3d18e61fb3a", 1200),
    unsplash("photo-1560272564-c83b66b1ad12", 1200),
  ],
  "nike-flight-official-match-ball": [
    unsplash("photo-1614632537423-1e6c2e7e0aab", 1200),
    unsplash("photo-1431324155629-1a6deb1dec8d", 1200),
    unsplash("photo-1553778263-73a83bab9b0c", 1200),
  ],
};

const hashString = (value: string): number => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const isRemoteUrl = (url: string): boolean => /^https?:\/\//.test(url);

export function getProductImages(
  product: Pick<Product, "slug" | "category" | "images">
): string[] {
  const override = productImageOverrides[product.slug];
  if (override) return override;

  const remoteImages = product.images.filter(isRemoteUrl);
  if (remoteImages.length >= 3) return remoteImages.slice(0, 3);

  const pool =
    product.category === "footwear"
      ? footwearProductImages
      : product.category === "gear"
        ? gearProductImages
        : product.category === "apparel"
          ? apparelProductImages
          : jerseyProductImages;

  const seed = hashString(product.slug);
  const first = pool[seed % pool.length];
  const second = pool[(seed + 1) % pool.length];
  const third = pool[(seed + 2) % pool.length];

  return [first, second, third];
}

export function getPrimaryProductImage(
  product: Pick<Product, "slug" | "category" | "images">
): string {
  return getProductImages(product)[0];
}
