"use client";

import { useState } from "react";
import Link from "next/link";
import MobileBookingModal from "./booking/MobileBookingModal";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-full border border-[#D5CCBE] px-5 py-2 text-sm text-[#59544D]"
      >
        {open ? "Закрыть" : "Меню"}
      </button>

      {open && (
        <div className="fixed left-0 right-0 top-[88px] z-40 bg-[#FDFBF7] px-6 py-8 shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col gap-5 text-base text-[#59544D]">
            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Обо мне
            </Link>

            <Link
              href="/#requests"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Направления
            </Link>

            <div className="border-t border-[#E6DFD4] pt-3">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A8072]">
                Услуги
              </p>

              <Link
                href="/psychologist-for-relationships"
                onClick={() => setOpen(false)}
                className="mt-2 block transition hover:text-[#53614D]"
              >
                Психолог по отношениям
              </Link>

              <Link
                href="/couple-therapy"
                onClick={() => setOpen(false)}
                className="mt-2 block transition hover:text-[#53614D]"
              >
                Психолог для пары
              </Link>

              <Link
                href="/panic-attacks"
                onClick={() => setOpen(false)}
                className="mt-2 block transition hover:text-[#53614D]"
              >
                Панические атаки
              </Link>

              <Link
                href="/parent-child-relationships"
                onClick={() => setOpen(false)}
                className="mt-2 block transition hover:text-[#53614D]"
              >
                Детско-родительские
              </Link>
            </div>

            <Link
              href="/#articles"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Статьи
            </Link>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Контакты
            </Link>

            <div className="pt-4">
              <MobileBookingModal />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}