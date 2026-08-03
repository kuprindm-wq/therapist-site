"use client";

import { useState } from "react";
import BookingModal from "./booking/BookingModal";


export default function MobileMenu() {


  const [open, setOpen] = useState(false);





  return (
    <div className="md:hidden">





      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-[#D5CCBE] px-5 py-2 text-sm text-[#59544D]"
      >
        {open ? "Закрыть" : "Меню"}
      </button>







      {open && (

        <div className="absolute left-0 right-0 top-full z-40 bg-[#FDFBF7] px-6 py-8 shadow-lg">





          <nav className="flex flex-col gap-5 text-base text-[#59544D]">





            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Обо мне
            </a>







            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Направления
            </a>







            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="transition hover:text-[#53614D]"
            >
              Контакты
            </a>







            <div className="pt-4">

              <BookingModal />

            </div>






          </nav>






        </div>

      )}






    </div>
  );
}