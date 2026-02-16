"use client";

import Link from "next/link";
import Image from "next/image";
import { bannerImages } from "@/data/images";

export default function PromoBanner() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Left banner - Customize */}
          <Link href="/shop/jerseys" className="group relative h-64 md:h-72 rounded-2xl overflow-hidden block">
            <Image
              src={bannerImages.customize}
              alt="Customize your jersey"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-center p-8 md:p-10">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest mb-2">
                Personalize Your Kit
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                Add Any Name<br />& Number
              </h3>
              <p className="text-white/70 text-sm mb-5 max-w-xs">
                Customize your jersey with official printing. Your name, your number.
              </p>
              <span className="inline-block bg-white text-blue-900 px-6 py-2.5 rounded-full font-bold text-sm group-hover:bg-blue-50 transition-colors w-fit">
                Customize Now
              </span>
            </div>
          </Link>

          {/* Right banner - Sale */}
          <Link href="/shop/sale" className="group relative h-64 md:h-72 rounded-2xl overflow-hidden block">
            <Image
              src={bannerImages.sale}
              alt="Sale"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-900/60 to-transparent" />
            <div className="relative h-full flex flex-col justify-center p-8 md:p-10">
              <span className="text-rose-300 text-xs font-bold uppercase tracking-widest mb-2">
                Limited Time Offer
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                Up to 40%<br />Off Sale
              </h3>
              <p className="text-white/70 text-sm mb-5 max-w-xs">
                Incredible deals on last season jerseys and clearance items.
              </p>
              <span className="inline-block bg-white text-primary px-6 py-2.5 rounded-full font-bold text-sm group-hover:bg-rose-50 transition-colors w-fit">
                Shop Sale
              </span>
            </div>
          </Link>
        </div>

        {/* Full-width World Cup banner */}
        <Link
          href="/shop/national-teams"
          className="group relative mt-4 md:mt-6 h-48 md:h-56 rounded-2xl overflow-hidden block"
        >
          <Image
            src={bannerImages.worldcup}
            alt="FIFA World Cup 2026"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative h-full flex items-center p-8 md:p-12">
            <div>
              <span className="inline-block bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Coming 2026
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-2">
                FIFA World Cup 2026
              </h3>
              <p className="text-white/70 text-sm md:text-base max-w-md">
                Be ready for the biggest event in soccer. Shop official national team jerseys now.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
