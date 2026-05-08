"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-navy-900/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cloudy Deliveries"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <span className="hidden text-lg font-bold tracking-tight sm:inline">
            <span className="text-accent-500">Cloudy</span>{" "}
            <span className="text-gray-100">Deliveries</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-500 hover:bg-white/[0.06] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-lg border border-accent-500/30 bg-gradient-to-b from-accent-500 to-accent-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition-all duration-500 hover:shadow-accent-500/40"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/[0.06] md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors duration-500 hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
