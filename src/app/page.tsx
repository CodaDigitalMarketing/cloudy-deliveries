"use client";

import Image from "next/image";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const services = [
  {
    title: "Local Deliveries",
    description:
      "Fast, same-day delivery of packages, groceries, and goods across your neighborhood by bicycle and e-bike.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Business Logistics",
    description:
      "Reliable courier solutions for small businesses — we handle your daily deliveries so you can focus on growth.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.992 2.992 0 00-.75 1.965v0c0 .41.082.8.229 1.157M3 9.35l1.5-4.8a1.125 1.125 0 011.07-.8h12.86c.5 0 .94.33 1.07.8l1.5 4.8" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Transport",
    description:
      "Zero-emission bicycle and e-bike fleet reducing carbon footprints while keeping your deliveries fast.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.253 2.253 0 01-1.699 2.583" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Cloudy Deliveries (3).jpg"
            alt="Cloudy Deliveries rider on the road"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/80 to-navy-900" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  Award-Winning Delivery Service
                </div>
                <h1 className="heading-xl">
                  Fast, Reliable &{" "}
                  <span className="gradient-text">Eco-Friendly</span> Deliveries
                </h1>
                <p className="max-w-lg text-lg leading-relaxed text-gray-400">
                  Cloudy Deliveries brings your packages, groceries, and goods to
                  your doorstep — by bicycle. Quick, affordable, and zero
                  emissions.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button href="/contact" size="lg">
                    Request a Delivery
                  </Button>
                  <Button href="/services" variant="outline" size="lg">
                    Our Services
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-accent-500/10 blur-3xl" />
                <Image
                  src="/logo.png"
                  alt="Cloudy Deliveries Logo"
                  width={500}
                  height={500}
                  className="relative rounded-2xl"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Cloudy Deliveries (4).jpg"
                  alt="Cloudy Deliveries team winning pitch competition"
                  width={600}
                  height={500}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-6">
                <h2 className="heading-lg">
                  More Than a Delivery Service —{" "}
                  <span className="gradient-text">A Movement</span>
                </h2>
                <p className="leading-relaxed text-gray-400">
                  Born from the heart of the community, Cloudy Deliveries is an
                  award-winning, eco-conscious delivery service that&apos;s
                  changing how goods move through neighborhoods. Our fleet of
                  bicycles and e-bikes delivers fast, affordably, and with zero
                  carbon emissions.
                </p>
                <p className="leading-relaxed text-gray-400">
                  Recognized as the 1st Place winner at the Kasi SME Summit 2025
                  and a TEA Pitch Winner, we&apos;re proving that sustainable
                  business and community impact go hand in hand.
                </p>
                <Button href="/portfolio" variant="secondary" className="w-fit">
                  View Our Gallery
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="section-padding bg-navy-800/30">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <h2 className="heading-lg">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                From groceries to business packages, our riders are ready to get
                your goods where they need to go — fast.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="glass-card flex h-full flex-col gap-4 p-8 transition-all duration-500 hover:border-accent-500/20 hover:shadow-lg hover:shadow-accent-500/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Button href="/services" variant="outline">
                View All Services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="heading-lg">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Don&apos;t just take our word for it — hear from the community.
              </p>
            </div>
          </ScrollReveal>
          <ReviewsCarousel />
          <div className="mt-10 text-center">
            <Button href="/reviews" variant="outline">
              See All Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-lg">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Whether you need a one-time delivery or a regular courier partner,
              Cloudy Deliveries has you covered. Reach out today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button href="tel:0680579223" variant="secondary" size="lg">
                Call 068 057 9223
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
