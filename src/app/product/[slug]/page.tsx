"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  Shield,
  RefreshCw,
  Minus,
  Plus,
  ArrowLeft,
} from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import SizeSelector from "@/components/product/SizeSelector";
import JerseyCustomizer from "@/components/product/JerseyCustomizer";
import ProductCard from "@/components/product/ProductCard";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: (typeof products)[number] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customName, setCustomName] = useState("");
  const [customNumber, setCustomNumber] = useState("");
  const [activeTab, setActiveTab] = useState("description");
  const [sizeError, setSizeError] = useState(false);

  const { addItem } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, customName || undefined, customNumber || undefined);
    }
  };

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.clubSlug === product.clubSlug ||
          p.nationalTeamSlug === product.nationalTeamSlug ||
          p.category === product.category)
    )
    .slice(0, 4);

  const tabs = [
    { id: "description", label: "Description" },
    { id: "size-guide", label: "Size Guide" },
    { id: "shipping", label: "Shipping" },
    { id: "reviews", label: `Reviews (${product.reviewCount})` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <span className="text-muted-foreground">/</span>
        <Link href="/shop" className="text-muted-foreground hover:text-foreground">Shop</Link>
        <span className="text-muted-foreground">/</span>
        <span className="font-medium truncate">{product.name}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Gallery */}
        <ProductGallery images={product.images} name={product.name} slug={product.slug} category={product.category} />

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
              {product.brand}
            </p>
            <h1 className="text-2xl md:text-3xl font-black leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? "text-accent fill-accent"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            {product.salePrice ? (
              <>
                <span className="text-3xl font-black text-primary">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="bg-primary/10 text-primary text-sm font-bold px-2 py-0.5 rounded">
                  Save {formatPrice(product.price - product.salePrice)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-black">{formatPrice(product.price)}</span>
            )}
          </div>

          {/* Size */}
          <div>
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeChange={(s) => {
                setSelectedSize(s);
                setSizeError(false);
              }}
            />
            {sizeError && (
              <p className="text-sm text-primary font-medium mt-2">Please select a size</p>
            )}
          </div>

          {/* Jersey Customizer */}
          {product.category === "jersey" && (
            <JerseyCustomizer
              customName={customName}
              customNumber={customNumber}
              onNameChange={setCustomName}
              onNumberChange={setCustomNumber}
            />
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex gap-3">
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-3 hover:bg-muted transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-3 hover:bg-muted transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
            <button
              onClick={() =>
                inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
              }
              className={`px-4 py-3 border rounded-lg transition-colors ${
                inWishlist
                  ? "bg-primary/10 border-primary text-primary"
                  : "border-border hover:border-primary/50"
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Truck className="w-4 h-4 text-primary shrink-0" />
              <span>Free shipping over $49</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-primary shrink-0" />
              <span>100% authentic</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <RefreshCw className="w-4 h-4 text-primary shrink-0" />
              <span>30-day returns</span>
            </div>
          </div>

          {/* Tags */}
          {(product.club || product.nationalTeam) && (
            <div className="flex flex-wrap gap-2">
              {product.club && (
                <Link
                  href={`/shop/clubs/${product.clubSlug}`}
                  className="text-xs bg-muted px-3 py-1.5 rounded-full font-medium hover:bg-border transition-colors"
                >
                  {product.club}
                </Link>
              )}
              {product.nationalTeam && (
                <Link
                  href={`/shop/national-teams/${product.nationalTeamSlug}`}
                  className="text-xs bg-muted px-3 py-1.5 rounded-full font-medium hover:bg-border transition-colors"
                >
                  {product.nationalTeam}
                </Link>
              )}
              {product.league && (
                <span className="text-xs bg-muted px-3 py-1.5 rounded-full font-medium">
                  {product.league}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Product Details</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Brand: {product.brand}</li>
                    <li>Category: {product.category}</li>
                    <li>Gender: {product.gender}</li>
                    <li>Type: {product.isAuthentic ? "Authentic" : "Replica"}</li>
                  </ul>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Features</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Official licensed product</li>
                    <li>Moisture-wicking fabric</li>
                    <li>Heat-applied club badge</li>
                    <li>Standard fit</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "size-guide" && (
            <div>
              <h3 className="text-lg font-bold mb-4">Size Chart</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted">
                      <th className="text-left py-3 px-4 font-semibold">Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Chest (inches)</th>
                      <th className="text-left py-3 px-4 font-semibold">Waist (inches)</th>
                      <th className="text-left py-3 px-4 font-semibold">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 px-4">S</td><td className="py-3 px-4">34-37</td><td className="py-3 px-4">28-31</td><td className="py-3 px-4">27</td></tr>
                    <tr className="border-b border-border"><td className="py-3 px-4">M</td><td className="py-3 px-4">37-41</td><td className="py-3 px-4">31-35</td><td className="py-3 px-4">28</td></tr>
                    <tr className="border-b border-border"><td className="py-3 px-4">L</td><td className="py-3 px-4">41-44</td><td className="py-3 px-4">35-39</td><td className="py-3 px-4">29</td></tr>
                    <tr className="border-b border-border"><td className="py-3 px-4">XL</td><td className="py-3 px-4">44-48</td><td className="py-3 px-4">39-43</td><td className="py-3 px-4">30</td></tr>
                    <tr><td className="py-3 px-4">XXL</td><td className="py-3 px-4">48-53</td><td className="py-3 px-4">43-47</td><td className="py-3 px-4">31</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3 items-start">
                <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Free Standard Shipping</p>
                  <p>Free on orders over $49. Delivery in 5-7 business days.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Truck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Express Shipping - $12.99</p>
                  <p>Delivery in 2-3 business days.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <RefreshCw className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Easy Returns</p>
                  <p>30-day return policy. Customized jerseys are final sale.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="text-4xl font-black">{product.rating}</p>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(product.rating)
                            ? "text-accent fill-accent"
                            : "text-gray-200 fill-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{product.reviewCount} reviews</p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const pct = stars === 5 ? 68 : stars === 4 ? 22 : stars === 3 ? 7 : stars === 2 ? 2 : 1;
                    return (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-xs w-3">{stars}</span>
                        <Star className="w-3 h-3 text-accent fill-accent" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground w-8">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sample reviews */}
              <div className="space-y-6">
                {[
                  { name: "Alex M.", rating: 5, date: "2 weeks ago", text: "Amazing quality jersey! The fit is perfect and the materials feel premium. Definitely worth the price." },
                  { name: "Sarah K.", rating: 4, date: "1 month ago", text: "Great jersey overall. Colors are vibrant and true to the official kit. Slightly tight around the shoulders for me." },
                  { name: "James T.", rating: 5, date: "1 month ago", text: "Best soccer jersey I've ever owned. The customization came out perfect too. Will definitely order again!" },
                ].map((review, i) => (
                  <div key={i} className="border-b border-border pb-6 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        {review.name[0]}
                      </div>
                      <span className="text-sm font-semibold">{review.name}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${
                            j < review.rating ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-black mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
