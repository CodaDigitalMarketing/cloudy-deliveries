"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const photos = [
  { src: "/Cloudy Deliveries (1).jpg", alt: "Cloudy Deliveries riders checking orders" },
  { src: "/Cloudy Deliveries (2).jpg", alt: "Kasi SME Summit 2025 first place winner" },
  { src: "/Cloudy Deliveries (3).jpg", alt: "Rider delivering through city streets" },
  { src: "/Cloudy Deliveries (4).jpg", alt: "TEA Pitch competition winner" },
  { src: "/Cloudy Deliveries (5).jpg", alt: "Rider at local market" },
  { src: "/Cloudy Deliveries (6).jpg", alt: "Cloudy Deliveries team member" },
  { src: "/Cloudy Deliveries (7).jpg", alt: "Rider with branded delivery box" },
  { src: "/Cloudy Deliveries.jpg", alt: "Cloudy Deliveries at local shop" },
  { src: "/690597741_1556821266448792_6467830221181312039_n.jpg", alt: "E-bike fleet lineup" },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl">
                Our <span className="gradient-text">Gallery</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                A glimpse into our daily operations, community presence, and the
                hardworking team behind every delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.05}>
              <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-accent-500/20 hover:shadow-lg hover:shadow-accent-500/5">
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
