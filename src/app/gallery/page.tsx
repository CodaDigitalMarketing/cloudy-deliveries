"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const photos = [
  { src: "/Cloudy Deliveries (6).jpg", alt: "Cloudy Deliveries rider in branded uniform" },
  { src: "/Cloudy Deliveries (1).jpg", alt: "Riders checking orders on their phones" },
  { src: "/Cloudy Deliveries (3).jpg", alt: "Delivering through city streets" },
  { src: "/Cloudy Deliveries (7).jpg", alt: "Rider with branded delivery box on the road" },
  { src: "/Cloudy Deliveries (2).jpg", alt: "Kasi SME Summit 2025 — 1st Place" },
  { src: "/Cloudy Deliveries (5).jpg", alt: "Rider at a local fresh produce market" },
  { src: "/Cloudy Deliveries (4).jpg", alt: "TEA Pitch competition — R50,000 winner" },
  { src: "/Cloudy Deliveries.jpg", alt: "Cloudy Deliveries riders at a local shop" },
  { src: "/690597741_1556821266448792_6467830221181312039_n.jpg", alt: "E-bike fleet lined up and ready" },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 px-6 py-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-3xl font-bold text-navy-700 md:text-4xl">Gallery</h1>
            <p className="mt-2 text-gray-500">Our team, our rides, our community.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.05}>
              <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={500}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
