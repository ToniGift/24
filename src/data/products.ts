import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1", name: "Barcelona Home Jersey 2024/25", slug: "barcelona-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/barca-home-1.jpg", "/images/products/barca-home-2.jpg"],
    category: "jersey", club: "Barcelona", clubSlug: "barcelona", league: "La Liga",
    brand: "Nike", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Blue/Red"],
    isAuthentic: false, gender: "men", description: "Show your support for FC Barcelona with the official 2024/25 home jersey. Features Dri-FIT technology for moisture-wicking comfort.", rating: 4.8, reviewCount: 245, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "barcelona", "la-liga"]
  },
  {
    id: "2", name: "Real Madrid Home Jersey 2024/25", slug: "real-madrid-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/madrid-home-1.jpg", "/images/products/madrid-home-2.jpg"],
    category: "jersey", club: "Real Madrid", clubSlug: "real-madrid", league: "La Liga",
    brand: "adidas", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White"],
    isAuthentic: false, gender: "men", description: "The iconic white of Real Madrid. Official 2024/25 home jersey with AEROREADY technology.", rating: 4.9, reviewCount: 312, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "real-madrid", "la-liga"]
  },
  {
    id: "3", name: "Manchester United Home Jersey 2024/25", slug: "manchester-united-home-jersey-2024-25",
    price: 84.99, salePrice: 69.99, images: ["/images/products/manutd-home-1.jpg", "/images/products/manutd-home-2.jpg"],
    category: "jersey", club: "Manchester United", clubSlug: "manchester-united", league: "Premier League",
    brand: "adidas", sizes: ["S", "M", "L", "XL"], colors: ["Red"],
    isAuthentic: false, gender: "men", description: "Classic red devil energy. Official Man United 2024/25 home jersey.", rating: 4.5, reviewCount: 189, isNew: false, isFeatured: true, isSale: true, tags: ["jersey", "home", "manchester-united", "premier-league", "sale"]
  },
  {
    id: "4", name: "Liverpool Home Jersey 2024/25", slug: "liverpool-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/liverpool-home-1.jpg", "/images/products/liverpool-home-2.jpg"],
    category: "jersey", club: "Liverpool FC", clubSlug: "liverpool", league: "Premier League",
    brand: "Nike", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Red"],
    isAuthentic: false, gender: "men", description: "You'll Never Walk Alone. Official Liverpool FC 2024/25 home jersey with Dri-FIT ADV technology.", rating: 4.7, reviewCount: 278, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "liverpool", "premier-league"]
  },
  {
    id: "5", name: "Arsenal Away Jersey 2024/25", slug: "arsenal-away-jersey-2024-25",
    price: 89.99, salePrice: 74.99, images: ["/images/products/arsenal-away-1.jpg", "/images/products/arsenal-away-2.jpg"],
    category: "jersey", club: "Arsenal", clubSlug: "arsenal", league: "Premier League",
    brand: "adidas", sizes: ["S", "M", "L", "XL"], colors: ["Navy/Yellow"],
    isAuthentic: false, gender: "men", description: "Stand out with the Arsenal 2024/25 away jersey. AEROREADY technology keeps you dry.", rating: 4.6, reviewCount: 156, isNew: false, isFeatured: false, isSale: true, tags: ["jersey", "away", "arsenal", "premier-league", "sale"]
  },
  {
    id: "6", name: "Bayern Munich Home Jersey 2024/25", slug: "bayern-munich-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/bayern-home-1.jpg", "/images/products/bayern-home-2.jpg"],
    category: "jersey", club: "Bayern Munich", clubSlug: "bayern-munich", league: "Bundesliga",
    brand: "adidas", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Red/White"],
    isAuthentic: false, gender: "men", description: "Mia san mia. Official FC Bayern Munich 2024/25 home jersey.", rating: 4.7, reviewCount: 198, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "bayern-munich", "bundesliga"]
  },
  {
    id: "7", name: "PSG Home Jersey 2024/25", slug: "psg-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/psg-home-1.jpg", "/images/products/psg-home-2.jpg"],
    category: "jersey", club: "Paris Saint-Germain", clubSlug: "paris-saint-germain", league: "Ligue 1",
    brand: "Nike", sizes: ["S", "M", "L", "XL"], colors: ["Navy/Red"],
    isAuthentic: false, gender: "men", description: "Parisian excellence. Official PSG 2024/25 home jersey.", rating: 4.6, reviewCount: 167, isNew: true, isFeatured: false, isSale: false, tags: ["jersey", "home", "psg", "ligue-1"]
  },
  {
    id: "8", name: "Argentina Home Jersey 2024", slug: "argentina-home-jersey-2024",
    price: 94.99, images: ["/images/products/argentina-home-1.jpg", "/images/products/argentina-home-2.jpg"],
    category: "jersey", nationalTeam: "Argentina", nationalTeamSlug: "argentina",
    brand: "adidas", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Blue/White"],
    isAuthentic: false, gender: "men", description: "World Champions. Official Argentina 2024 home jersey with three stars.", rating: 4.9, reviewCount: 456, isNew: false, isFeatured: true, isSale: false, tags: ["jersey", "home", "argentina", "national-team", "world-cup"]
  },
  {
    id: "9", name: "Brazil Home Jersey 2024", slug: "brazil-home-jersey-2024",
    price: 94.99, salePrice: 79.99, images: ["/images/products/brazil-home-1.jpg", "/images/products/brazil-home-2.jpg"],
    category: "jersey", nationalTeam: "Brazil", nationalTeamSlug: "brazil",
    brand: "Nike", sizes: ["S", "M", "L", "XL"], colors: ["Yellow/Green"],
    isAuthentic: false, gender: "men", description: "Samba style. Official Brazil 2024 home jersey.", rating: 4.8, reviewCount: 389, isNew: false, isFeatured: true, isSale: true, tags: ["jersey", "home", "brazil", "national-team", "sale"]
  },
  {
    id: "10", name: "USA Home Jersey 2024", slug: "usa-home-jersey-2024",
    price: 89.99, images: ["/images/products/usa-home-1.jpg", "/images/products/usa-home-2.jpg"],
    category: "jersey", nationalTeam: "USA", nationalTeamSlug: "usa",
    brand: "Nike", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White/Blue"],
    isAuthentic: false, gender: "men", description: "Stars and stripes. Official USMNT 2024 home jersey.", rating: 4.5, reviewCount: 234, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "usa", "national-team"]
  },
  {
    id: "11", name: "Nike Mercurial Superfly 10 Elite", slug: "nike-mercurial-superfly-10-elite",
    price: 274.99, images: ["/images/products/mercurial-1.jpg", "/images/products/mercurial-2.jpg"],
    category: "footwear", subcategory: "cleats",
    brand: "Nike", sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"], colors: ["Volt/Black"],
    isAuthentic: true, gender: "men", description: "Engineered for speed. The Mercurial Superfly 10 Elite features Zoom Air technology and a Flyknit upper.", rating: 4.8, reviewCount: 134, isNew: true, isFeatured: true, isSale: false, tags: ["footwear", "cleats", "nike", "mercurial"]
  },
  {
    id: "12", name: "adidas Predator Elite FG", slug: "adidas-predator-elite-fg",
    price: 249.99, salePrice: 199.99, images: ["/images/products/predator-1.jpg", "/images/products/predator-2.jpg"],
    category: "footwear", subcategory: "cleats",
    brand: "adidas", sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"], colors: ["Core Black/White"],
    isAuthentic: true, gender: "men", description: "Dominate every touch. The Predator Elite FG features Hybridtouch for ultimate ball control.", rating: 4.7, reviewCount: 98, isNew: false, isFeatured: true, isSale: true, tags: ["footwear", "cleats", "adidas", "predator", "sale"]
  },
  {
    id: "13", name: "Nike Flight Official Match Ball", slug: "nike-flight-official-match-ball",
    price: 164.99, images: ["/images/products/flight-ball-1.jpg", "/images/products/flight-ball-2.jpg"],
    category: "gear", subcategory: "balls",
    brand: "Nike", sizes: ["5"], colors: ["White/Multi"],
    isAuthentic: true, gender: "unisex", description: "The Nike Flight ball features AerowSculpt technology for a more consistent and accurate flight.", rating: 4.6, reviewCount: 87, isNew: true, isFeatured: false, isSale: false, tags: ["gear", "ball", "nike", "match-ball"]
  },
  {
    id: "14", name: "adidas Tiro League Shin Guards", slug: "adidas-tiro-league-shin-guards",
    price: 19.99, images: ["/images/products/shinguards-1.jpg", "/images/products/shinguards-2.jpg"],
    category: "gear", subcategory: "shin-guards",
    brand: "adidas", sizes: ["S", "M", "L", "XL"], colors: ["White/Black"],
    isAuthentic: false, gender: "unisex", description: "Lightweight protection for training and match days.", rating: 4.3, reviewCount: 234, isNew: false, isFeatured: false, isSale: false, tags: ["gear", "shin-guards", "adidas"]
  },
  {
    id: "15", name: "Chelsea Third Jersey 2024/25", slug: "chelsea-third-jersey-2024-25",
    price: 89.99, salePrice: 64.99, images: ["/images/products/chelsea-third-1.jpg", "/images/products/chelsea-third-2.jpg"],
    category: "jersey", club: "Chelsea", clubSlug: "chelsea", league: "Premier League",
    brand: "Nike", sizes: ["S", "M", "L", "XL"], colors: ["Black/Gold"],
    isAuthentic: false, gender: "men", description: "Elegant third kit for Chelsea FC 2024/25 season.", rating: 4.4, reviewCount: 112, isNew: false, isFeatured: false, isSale: true, tags: ["jersey", "third", "chelsea", "premier-league", "sale"]
  },
  {
    id: "16", name: "Inter Miami Home Jersey 2024", slug: "inter-miami-home-jersey-2024",
    price: 94.99, images: ["/images/products/miami-home-1.jpg", "/images/products/miami-home-2.jpg"],
    category: "jersey", club: "Inter Miami CF", clubSlug: "inter-miami", league: "MLS",
    player: "Lionel Messi", playerSlug: "lionel-messi",
    brand: "adidas", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Pink/Black"],
    isAuthentic: false, gender: "men", description: "Messi's Inter Miami. Official 2024 home jersey.", rating: 4.9, reviewCount: 567, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "inter-miami", "mls", "messi"]
  },
  {
    id: "17", name: "Juventus Home Jersey 2024/25", slug: "juventus-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/juve-home-1.jpg", "/images/products/juve-home-2.jpg"],
    category: "jersey", club: "Juventus", clubSlug: "juventus", league: "Serie A",
    brand: "adidas", sizes: ["S", "M", "L", "XL"], colors: ["Black/White"],
    isAuthentic: false, gender: "men", description: "Classic Bianconeri stripes. Official Juventus 2024/25 home jersey.", rating: 4.5, reviewCount: 143, isNew: true, isFeatured: false, isSale: false, tags: ["jersey", "home", "juventus", "serie-a"]
  },
  {
    id: "18", name: "Nike Goalkeeper Gloves Vapor Grip3", slug: "nike-goalkeeper-gloves-vapor-grip3",
    price: 79.99, images: ["/images/products/gk-gloves-1.jpg", "/images/products/gk-gloves-2.jpg"],
    category: "gear", subcategory: "goalkeeper",
    brand: "Nike", sizes: ["7", "8", "9", "10", "11"], colors: ["Black/Volt"],
    isAuthentic: true, gender: "unisex", description: "Professional-level grip with Nike Vapor technology.", rating: 4.5, reviewCount: 76, isNew: false, isFeatured: false, isSale: false, tags: ["gear", "goalkeeper", "gloves", "nike"]
  },
  {
    id: "19", name: "France Home Jersey 2024", slug: "france-home-jersey-2024",
    price: 94.99, images: ["/images/products/france-home-1.jpg", "/images/products/france-home-2.jpg"],
    category: "jersey", nationalTeam: "France", nationalTeamSlug: "france",
    brand: "Nike", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Navy/White"],
    isAuthentic: false, gender: "men", description: "Les Bleus. Official France 2024 home jersey.", rating: 4.8, reviewCount: 267, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "france", "national-team"]
  },
  {
    id: "20", name: "England Away Jersey 2024", slug: "england-away-jersey-2024",
    price: 94.99, salePrice: 74.99, images: ["/images/products/england-away-1.jpg", "/images/products/england-away-2.jpg"],
    category: "jersey", nationalTeam: "England", nationalTeamSlug: "england",
    brand: "Nike", sizes: ["S", "M", "L", "XL"], colors: ["Purple"],
    isAuthentic: false, gender: "men", description: "Bold new look for the Three Lions. Official England 2024 away jersey.", rating: 4.6, reviewCount: 198, isNew: false, isFeatured: false, isSale: true, tags: ["jersey", "away", "england", "national-team", "sale"]
  },
  {
    id: "21", name: "Manchester City Home Jersey 2024/25", slug: "manchester-city-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/mancity-home-1.jpg"],
    category: "jersey", club: "Manchester City", clubSlug: "manchester-city", league: "Premier League",
    brand: "Puma", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Sky Blue"],
    isAuthentic: false, gender: "men", description: "Champion style. Official Manchester City 2024/25 home jersey.", rating: 4.7, reviewCount: 213, isNew: true, isFeatured: true, isSale: false, tags: ["jersey", "home", "manchester-city", "premier-league"]
  },
  {
    id: "22", name: "Puma Future Ultimate FG", slug: "puma-future-ultimate-fg",
    price: 219.99, images: ["/images/products/puma-future-1.jpg"],
    category: "footwear", subcategory: "cleats",
    brand: "Puma", sizes: ["7", "8", "9", "10", "11", "12"], colors: ["White/Fire Orchid"],
    isAuthentic: true, gender: "men", description: "Unlock your creativity. The Puma Future Ultimate features FUZIONFIT+ for adaptive support.", rating: 4.5, reviewCount: 67, isNew: true, isFeatured: false, isSale: false, tags: ["footwear", "cleats", "puma", "future"]
  },
  {
    id: "23", name: "Nike Academy Training Top", slug: "nike-academy-training-top",
    price: 44.99, salePrice: 34.99, images: ["/images/products/nike-training-1.jpg"],
    category: "apparel", subcategory: "training",
    brand: "Nike", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Black/White"],
    isAuthentic: false, gender: "men", description: "Train like the pros. Dri-FIT technology keeps you cool and comfortable.", rating: 4.4, reviewCount: 345, isNew: false, isFeatured: false, isSale: true, tags: ["apparel", "training", "nike", "sale"]
  },
  {
    id: "24", name: "Borussia Dortmund Home Jersey 2024/25", slug: "borussia-dortmund-home-jersey-2024-25",
    price: 89.99, images: ["/images/products/bvb-home-1.jpg"],
    category: "jersey", club: "Borussia Dortmund", clubSlug: "borussia-dortmund", league: "Bundesliga",
    brand: "Puma", sizes: ["S", "M", "L", "XL"], colors: ["Yellow/Black"],
    isAuthentic: false, gender: "men", description: "The Yellow Wall. Official BVB 2024/25 home jersey.", rating: 4.6, reviewCount: 156, isNew: true, isFeatured: false, isSale: false, tags: ["jersey", "home", "borussia-dortmund", "bundesliga"]
  },
];
