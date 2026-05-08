"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const posts = [
  {
    title: "Why Bicycle Delivery Is the Future of Urban Logistics",
    excerpt:
      "As cities grow denser and traffic worsens, bicycle couriers are emerging as the fastest, most sustainable option for last-mile delivery. Here's why the shift is happening now.",
    date: "May 2, 2026",
    category: "Industry",
    image: "/Cloudy Deliveries (3).jpg",
  },
  {
    title: "How Small Businesses Can Save on Shipping Costs",
    excerpt:
      "Local delivery doesn't have to break the bank. We break down practical strategies for SMEs to reduce logistics costs while keeping customers happy.",
    date: "April 18, 2026",
    category: "Business Tips",
    image: "/Cloudy Deliveries.jpg",
  },
  {
    title: "The Rise of E-Bikes in South African Communities",
    excerpt:
      "Electric cargo bikes are transforming delivery in townships and suburbs alike. We explore the technology, economics, and community impact of this growing trend.",
    date: "April 5, 2026",
    category: "Technology",
    image: "/690597741_1556821266448792_6467830221181312039_n.jpg",
  },
  {
    title: "5 Tips for Packaging Items for Bicycle Delivery",
    excerpt:
      "Proper packaging ensures your goods arrive in perfect condition. From fragile items to food orders, here's how to prep your parcels for a smooth ride.",
    date: "March 22, 2026",
    category: "Guides",
    image: "/Cloudy Deliveries (7).jpg",
  },
  {
    title: "Supporting Local: How Delivery Services Strengthen Communities",
    excerpt:
      "When you choose local delivery, you're not just getting convenience — you're investing in jobs, reducing emissions, and building a stronger neighborhood economy.",
    date: "March 10, 2026",
    category: "Community",
    image: "/Cloudy Deliveries (5).jpg",
  },
  {
    title: "From Pitch Winner to Community Impact: Our Story",
    excerpt:
      "Winning the TEA Pitch competition and Kasi SME Summit was just the beginning. Here's how those moments fueled our mission to deliver change, one ride at a time.",
    date: "February 25, 2026",
    category: "Company News",
    image: "/Cloudy Deliveries (4).jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="section-padding pb-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl">
                Our <span className="gradient-text">Blog</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Insights, tips, and stories from the world of bicycle delivery
                and sustainable logistics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.08}>
              <article className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-500 hover:border-accent-500/20 hover:shadow-lg hover:shadow-accent-500/5">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-medium text-accent-400">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs text-gray-500">{post.date}</p>
                  <h2 className="text-lg font-semibold leading-snug transition-colors duration-500 group-hover:text-accent-400">
                    {post.title}
                  </h2>
                  <p className="mt-auto text-sm leading-relaxed text-gray-400">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
