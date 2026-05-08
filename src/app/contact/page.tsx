"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  }

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="heading-xl">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Have a question or want to schedule a delivery? Drop us a message
                and we&apos;ll get back to you shortly.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <ScrollReveal className="lg:col-span-2" direction="left">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Phone
                  </h3>
                  <a
                    href="tel:0680579223"
                    className="text-lg text-accent-400 transition-colors duration-500 hover:text-accent-300"
                  >
                    068 057 9223
                  </a>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Hours
                  </h3>
                  <p className="text-gray-400">Monday – Saturday</p>
                  <p className="text-gray-400">7:00 AM – 7:00 PM</p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Service Area
                  </h3>
                  <p className="text-gray-400">Cape Town &amp; surrounding communities</p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Follow Us
                  </h3>
                  <p className="text-gray-400">
                    Find us on social media for updates, promotions, and
                    community stories.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal className="lg:col-span-3" delay={0.15}>
              {submitted ? (
                <div className="glass-card flex flex-col items-center gap-4 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-400/10">
                    <svg
                      className="h-8 w-8 text-teal-400"
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
                  </div>
                  <h3 className="heading-md">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card flex flex-col gap-5 p-8"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white/[0.04] px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 ${
                        errors.name ? "border-red-500/50" : "border-white/[0.08]"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white/[0.04] px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 ${
                        errors.email ? "border-red-500/50" : "border-white/[0.08]"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30"
                      placeholder="Your phone number (optional)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-gray-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full resize-none rounded-lg border bg-white/[0.04] px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-white/[0.08]"
                      }`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="mt-2 w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
