"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { Product } from "@/types";
import { getProductImages } from "@/data/images";

interface ProductGalleryProps {
  images: string[];
  name: string;
  slug?: string;
  category?: Product["category"];
}

export default function ProductGallery({ images, name, slug = "", category = "jersey" }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const galleryImages = getProductImages({ slug, category, images });
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0];

  return (
    <div className="space-y-4">
      {/* Main View */}
      <div
        className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-zoom-in group border border-gray-100"
        onClick={() => setZoomed(true)}
      >
        <Image
          src={activeImage}
          alt={`${name} view ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />

        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <ZoomIn className="w-5 h-5 text-foreground" />
        </div>

        {galleryImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev + 1) % galleryImages.length);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* View label */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-foreground capitalize shadow-sm">
          Photo {activeIndex + 1}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {galleryImages.map((image, i) => (
          <button
            key={`${image}-${i}`}
            onClick={() => setActiveIndex(i)}
            className={`relative flex-1 aspect-square rounded-xl border-2 transition-all overflow-hidden ${
              activeIndex === i ? "border-primary shadow-md" : "border-transparent hover:border-gray-200"
            }`}
          >
            <Image src={image} alt={`${name} thumbnail ${i + 1}`} fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>

      {/* Zoom overlay */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setZoomed(false)}
        >
          <button className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="relative w-[88vw] max-w-5xl h-[80vh] rounded-3xl overflow-hidden">
            <Image src={activeImage} alt={name} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </div>
  );
}
