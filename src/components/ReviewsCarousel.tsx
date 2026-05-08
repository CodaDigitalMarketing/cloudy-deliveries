"use client";

const reviews = [
  {
    name: "Thabo M.",
    text: "Cloudy Deliveries is always on time. I order groceries every week and they never disappoint. Friendly riders too!",
    rating: 5,
  },
  {
    name: "Lerato K.",
    text: "I love that they use bicycles — it's fast, affordable, and good for the environment. Best delivery service in the area.",
    rating: 5,
  },
  {
    name: "Sipho N.",
    text: "My packages always arrive in perfect condition. The team is professional and the tracking updates are great.",
    rating: 5,
  },
  {
    name: "Naledi D.",
    text: "I run a small business and Cloudy handles all my local deliveries. They're reliable and my customers are always happy.",
    rating: 5,
  },
  {
    name: "James O.",
    text: "Incredible service! They delivered my order in under 30 minutes. Will definitely be using them again.",
    rating: 4,
  },
  {
    name: "Zanele P.",
    text: "Great communication from the riders. They always let me know when they're on the way. Five stars!",
    rating: 5,
  },
  {
    name: "Bongani R.",
    text: "Affordable prices and super fast. Cloudy Deliveries has made my life so much easier. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ayanda S.",
    text: "The e-bikes are a game changer. Quick deliveries even during rush hour. Love supporting a local business!",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent-500" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, text, rating }: (typeof reviews)[0]) {
  return (
    <div className="glass-card mx-3 flex w-[340px] flex-shrink-0 flex-col gap-4 p-6">
      <StarRating rating={rating} />
      <p className="text-sm leading-relaxed text-gray-300">&ldquo;{text}&rdquo;</p>
      <p className="mt-auto text-sm font-semibold text-accent-400">{name}</p>
    </div>
  );
}

export default function ReviewsCarousel() {
  const doubled = [...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />

      <div className="flex animate-scroll-left">
        {doubled.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </div>
  );
}
