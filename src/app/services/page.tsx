"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

const services = [
  {
    title: "Same-Day Local Delivery",
    description:
      "Need something delivered today? Our riders are dispatched within minutes and deliver across the neighborhood quickly and safely. From documents to parcels, we handle it all.",
    features: ["Under 60-minute delivery", "Real-time tracking", "Safe & secure handling"],
    image: "/Cloudy Deliveries (7).jpg",
  },
  {
    title: "Grocery & Food Delivery",
    description:
      "Partner with local shops and restaurants or order your own groceries — we'll pick them up and bring them straight to your door, fresh and on time.",
    features: ["Temperature-sensitive handling", "Direct from local vendors", "Scheduled or on-demand"],
    image: "/Cloudy Deliveries (5).jpg",
  },
  {
    title: "Business & SME Logistics",
    description:
      "We provide dedicated courier solutions for small and medium businesses. Daily pickups, route optimization, and reliable service that your customers will love.",
    features: ["Dedicated account management", "Daily scheduled pickups", "Branded delivery experience"],
    image: "/Cloudy Deliveries.jpg",
  },
  {
    title: "E-Bike Fleet Services",
    description:
      "Our growing fleet of electric cargo bikes handles larger deliveries with zero emissions. Perfect for bulk orders and heavier goods that need a sustainable transport solution.",
    features: ["Heavy-load capable", "Zero carbon emissions", "Extended delivery range"],
    image: "/690597741_1556821266448792_6467830221181312039_n.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                From quick local deliveries to full business logistics, Cloudy
                Deliveries offers fast, reliable, and eco-friendly solutions for
                every need.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service blocks */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col gap-20">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.1}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>

                <div className={`flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="heading-md">{service.title}</h2>
                  <p className="leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-3 pt-2">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-accent-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800/30">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-lg">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              We tailor our delivery services to fit your unique needs. Get in
              touch and let&apos;s find the perfect logistics solution for you.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
