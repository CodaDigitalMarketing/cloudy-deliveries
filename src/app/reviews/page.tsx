"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const detailedReviews = [
  {
    name: "Thabo M.",
    location: "Khayelitsha",
    text: "Cloudy Deliveries is always on time. I order groceries every week and they never disappoint. The riders are friendly and always handle my items with care. Best delivery service I've ever used!",
    rating: 5,
    date: "April 2026",
  },
  {
    name: "Lerato K.",
    location: "Langa",
    text: "I love that they use bicycles — it's fast, affordable, and good for the environment. My neighborhood has really embraced Cloudy and we all recommend them to each other.",
    rating: 5,
    date: "March 2026",
  },
  {
    name: "Sipho N.",
    location: "Gugulethu",
    text: "My packages always arrive in perfect condition. The tracking updates are great — I always know exactly when my delivery will arrive. Professional service through and through.",
    rating: 5,
    date: "March 2026",
  },
  {
    name: "Naledi D.",
    location: "Mitchells Plain",
    text: "I run a small business and Cloudy handles all my local deliveries. They're reliable, affordable, and my customers are always happy with the speed. A true partner for SMEs.",
    rating: 5,
    date: "February 2026",
  },
  {
    name: "James O.",
    location: "Athlone",
    text: "Incredible service! They delivered my order in under 30 minutes. The rider even called me when he was nearby. Will definitely be using them for all my deliveries from now on.",
    rating: 4,
    date: "February 2026",
  },
  {
    name: "Zanele P.",
    location: "Nyanga",
    text: "Great communication from the riders. They always let me know when they're on the way and are always polite. It feels good supporting a local company that cares about the community.",
    rating: 5,
    date: "January 2026",
  },
  {
    name: "Bongani R.",
    location: "Philippi",
    text: "Affordable prices and super fast delivery. Cloudy Deliveries has made my life so much easier. I don't know how I managed before — they're an essential part of my routine now.",
    rating: 5,
    date: "January 2026",
  },
  {
    name: "Ayanda S.",
    location: "Observatory",
    text: "The e-bikes are a game changer. Quick deliveries even during rush hour when the roads are packed. Love supporting a local business that's also green and sustainable!",
    rating: 4,
    date: "December 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-accent-500" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl">
                Customer <span className="gradient-text">Reviews</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Real feedback from the people we serve every day. Your trust
                drives us to deliver better.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scrolling carousel */}
      <section className="pb-16">
        <ReviewsCarousel />
      </section>

      {/* Detailed reviews grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ScrollReveal>
          <h2 className="heading-md mb-10 text-center">
            What the Community is Saying
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {detailedReviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.06}>
              <div className="glass-card flex h-full flex-col gap-4 p-8 transition-all duration-500 hover:border-accent-500/20">
                <div className="flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-auto pt-2">
                  <p className="font-semibold text-accent-400">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-navy-800/30">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <p className="text-4xl font-bold text-accent-500">4.9</p>
                <p className="mt-1 text-sm text-gray-400">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-500">500+</p>
                <p className="mt-1 text-sm text-gray-400">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-500">98%</p>
                <p className="mt-1 text-sm text-gray-400">On-Time Delivery</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
