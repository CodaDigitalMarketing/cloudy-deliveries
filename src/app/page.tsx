"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const WA_ICON = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
);

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-accent-50/30">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-600">
                Cape Town Township Delivery &middot; Empowering Young People
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-700 md:text-5xl lg:text-6xl">
                Food delivered to{" "}
                <span className="gradient-text">your door</span>{" "}
                — by bicycle
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-500">
                Order from local restaurants, takeaways, and food vendors — delivered fast and affordably across Cape Town&apos;s townships on our bicycle and e&#8209;bike fleet. Need an errand run? We do that too.
              </p>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/27680579223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-green-400/30 bg-gradient-to-b from-green-500 to-green-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-green-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/30"
                >
                  {WA_ICON}
                  Order on WhatsApp
                </a>
                <a
                  href="https://makeitcloudy.co.za:8800/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-accent-400/30 bg-gradient-to-b from-accent-500 to-accent-600 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-accent-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/30"
                >
                  Order Online
                </a>
              </div>

              <p className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                <svg className="h-4 w-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Or call us: <a href="tel:0680579223" className="font-medium text-gray-600 underline decoration-gray-300 underline-offset-2 transition-colors hover:text-accent-600">068 057 9223</a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="right">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-6 rounded-3xl bg-accent-100/50 blur-3xl" />
                <Image
                  src="/logo.png"
                  alt="Cloudy Deliveries"
                  width={480}
                  height={480}
                  className="relative drop-shadow-lg"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────── HOW IT WORKS ───────── */}
      <section id="how-it-works" className="scroll-mt-20 bg-white px-6 py-20 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold text-navy-700 md:text-4xl">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
              Three steps. That&apos;s it.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Place your order",
                desc: "Message us on WhatsApp or use our online ordering platform. Pick your food and drop your address.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                ),
              },
              {
                step: "2",
                title: "We pick it up",
                desc: "Our rider collects your food from the restaurant, takeaway, or vendor — quickly and carefully.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                ),
              },
              {
                step: "3",
                title: "Delivered to you",
                desc: "Straight to your door by bicycle or e-bike. Fast, affordable, and zero emissions.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:shadow-md">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    {item.icon}
                  </div>
                  <span className="mb-1 text-xs font-bold uppercase tracking-widest text-accent-500">Step {item.step}</span>
                  <h3 className="text-lg font-semibold text-navy-700">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WHAT WE DO ───────── */}
      <section className="bg-gray-50 px-6 py-20 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Food delivery — primary */}
            <ScrollReveal>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <span className="text-4xl">🍔</span>
                <h3 className="mt-4 text-2xl font-bold text-navy-700">Food Delivery</h3>
                <p className="mt-3 leading-relaxed text-gray-500">
                  Our main thing. Order from local restaurants, takeaways, spaza shops, and food vendors — we pick it up and bring it straight to your door by bicycle.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Restaurants", "Takeaways", "Street food", "Spaza shops"].map((tag) => (
                    <span key={tag} className="rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Errands — secondary */}
            <ScrollReveal delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <span className="text-4xl">📦</span>
                <h3 className="mt-4 text-2xl font-bold text-navy-700">Errands</h3>
                <p className="mt-3 leading-relaxed text-gray-500">
                  Need something picked up or dropped off? We also run errands — collecting parcels, documents, or anything else you need moved around the neighbourhood.
                </p>
                <p className="mt-4 text-sm text-gray-400">
                  Message us on WhatsApp to request an errand.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT ───────── */}
      <section id="about" className="scroll-mt-20 bg-white px-6 py-20 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <Image src="/Cloudy Deliveries (6).jpg" alt="Cloudy Deliveries rider" width={300} height={400} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <Image src="/Cloudy Deliveries (1).jpg" alt="Riders checking orders" width={300} height={200} className="h-full w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <Image src="/Cloudy Deliveries (5).jpg" alt="Rider at market" width={300} height={200} className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="text-3xl font-bold text-navy-700 md:text-4xl">
                Empowering young people,{" "}
                <span className="gradient-text">one delivery at a time</span>
              </h2>
              <p className="mt-5 leading-relaxed text-gray-500">
                Cloudy Deliveries is a bicycle delivery service that empowers young people. What started with one bike and a simple idea has grown into a fleet of bicycles and e&#8209;bikes delivering food across Cape Town&apos;s townships every day — creating real jobs for young riders, cutting emissions, and connecting communities to the meals they love.
              </p>

              {/* Awards */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100 text-lg">🏆</div>
                  <div>
                    <p className="font-semibold text-navy-700">Kasi SME Summit 2025 — 1st Place</p>
                    <p className="text-sm text-gray-500">Recognised as a top small business at the national SME Summit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100 text-lg">🏆</div>
                  <div>
                    <p className="font-semibold text-navy-700">TEA Kasi Pitch Winner — R50,000</p>
                    <p className="text-sm text-gray-500">Won the community entrepreneurship pitch competition.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────── PHOTO STRIP ───────── */}
      <section className="bg-gray-50 px-6 py-20 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold text-navy-700 md:text-4xl">See us in action</h2>
              <Link href="/gallery" className="hidden text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500 sm:inline-flex">
                View all photos &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              "/Cloudy Deliveries (3).jpg",
              "/Cloudy Deliveries (7).jpg",
              "/Cloudy Deliveries (4).jpg",
              "/690597741_1556821266448792_6467830221181312039_n.jpg",
            ].map((src, i) => (
              <ScrollReveal key={src} delay={i * 0.08}>
                <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md">
                  <Image src={src} alt="Cloudy Deliveries" width={400} height={400} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 text-center sm:hidden">
              <Link href="/gallery" className="text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500">
                View all photos &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────── CONTACT / ORDER ───────── */}
      <section id="contact" className="scroll-mt-20 bg-white px-6 py-20 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold text-navy-700 md:text-4xl">
              Ready to order?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
              The fastest way to reach us is WhatsApp. You can also order through our online platform or give us a call.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/27680579223"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-8 text-center transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
                  {WA_ICON}
                </div>
                <p className="text-lg font-semibold text-green-700">WhatsApp</p>
                <p className="text-sm text-green-600/70">Chat with us to place an order or ask anything</p>
              </a>

              {/* Online ordering */}
              <a
                href="https://makeitcloudy.co.za:8800/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center transition-all duration-500 hover:shadow-lg hover:shadow-accent-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <p className="text-lg font-semibold text-accent-700">Order Online</p>
                <p className="text-sm text-accent-600/70">Browse and order through our web platform</p>
              </a>

              {/* Phone */}
              <a
                href="tel:0680579223"
                className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition-all duration-500 hover:shadow-lg hover:shadow-gray-500/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </div>
                <p className="text-lg font-semibold text-navy-700">Call Us</p>
                <p className="text-sm text-gray-500">068 057 9223</p>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-sm font-medium text-gray-600">
                <span className="font-semibold text-navy-700">Service area:</span>{" "}
                Khayelitsha, Langa, Gugulethu, Nyanga, Mitchells Plain, Philippi, Athlone &amp; surrounding areas
              </p>
              <p className="mt-1 text-sm text-gray-400">Monday – Saturday &middot; 7:00 AM – 7:00 PM</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
