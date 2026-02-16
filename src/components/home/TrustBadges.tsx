import { Truck, Shield, RefreshCw, Headphones } from "lucide-react";

const badges = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $49", color: "bg-emerald-50 text-emerald-600" },
  { icon: Shield, title: "100% Authentic", description: "Officially licensed", color: "bg-blue-50 text-blue-600" },
  { icon: RefreshCw, title: "Easy Returns", description: "30-day policy", color: "bg-amber-50 text-amber-600" },
  { icon: Headphones, title: "24/7 Support", description: "We're here to help", color: "bg-purple-50 text-purple-600" },
];

export default function TrustBadges() {
  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${badge.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{badge.title}</h3>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
