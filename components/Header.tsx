"use client";

import Link from "next/link";

const navItems = [
  { label: "Обо мне", href: "/#about" },
  { label: "Направления", href: "/#requests" },
  { label: "Статьи", href: "/articles" },
  { label: "Психолог по отношениям", href: "/psychologist-for-relationships" },
  { label: "Психолог для пары", href: "/couple-therapy" },
  { label: "Панические атаки", href: "/panic-attacks" },
  { label: "Контакты", href: "/#contact" },
];

export default function Navigation() {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}