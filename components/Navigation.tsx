"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center gap-8 text-sm font-medium text-[#7B705F]">
      <Link href="/#about" className="transition-colors hover:text-[#53614D]">
        Обо мне
      </Link>

      <div
        className="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="flex items-center gap-1 transition-colors hover:text-[#53614D]">
          Услуги
          <svg
            className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full pt-1 min-w-[220px] rounded-xl bg-[#FDFBF7] border border-[#D8CEC1] py-2 shadow-lg">
            <Link
              href="/psychologist-for-relationships"
              className="block px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors"
            >
              Психолог по отношениям
            </Link>
            <Link
              href="/couple-therapy"
              className="block px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors"
            >
              Психолог для пары
            </Link>
            <Link
              href="/panic-attacks"
              className="block px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors"
            >
              Панические атаки
            </Link>
            <Link
              href="/parent-child-relationships"
              className="block px-4 py-2 text-sm hover:bg-[#F5F0EB] transition-colors"
            >
              Детско-родительские отношения
            </Link>
          </div>
        )}
      </div>

      <Link href="/#articles" className="transition-colors hover:text-[#53614D]">
        Статьи
      </Link>

      <Link href="/#contact" className="transition-colors hover:text-[#53614D]">
        Контакты
      </Link>
    </nav>
  );
}