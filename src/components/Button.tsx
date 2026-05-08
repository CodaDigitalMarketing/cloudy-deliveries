"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "border border-accent-400/30 bg-gradient-to-b from-accent-500 to-accent-600 text-white shadow-md shadow-accent-500/20 hover:shadow-lg hover:shadow-accent-500/30 hover:from-accent-400 hover:to-accent-500",
  secondary:
    "border border-gray-200 bg-gradient-to-b from-white to-gray-50 text-navy-700 shadow-sm hover:shadow-md hover:from-gray-50 hover:to-gray-100",
  outline:
    "border border-gray-300 bg-transparent text-gray-700 hover:border-accent-500/50 hover:text-accent-600 hover:shadow-md hover:shadow-accent-500/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:ring-offset-2 focus:ring-offset-white";

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
