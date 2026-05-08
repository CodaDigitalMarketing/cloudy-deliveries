import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Cloudy Deliveries"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">
                <span className="text-accent-500">Cloudy</span> Deliveries
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Award-winning bicycle delivery service providing fast,
              eco-friendly, and reliable deliveries across the community. Proudly
              pedaling since day one.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
              <svg
                className="h-4 w-4 text-accent-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              068 057 9223
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-500 hover:text-accent-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cloudy Deliveries. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
