"use client";

import { useState } from "react";
import BookingSidebar from "./BookingSidebar";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-[#53614D] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#465341] hover:shadow-lg"
      >
        Записаться
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2E2B27]/55 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-[820px] flex-col overflow-hidden rounded-[30px] bg-[#FCFAF6] shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:flex-row"
          >
            <BookingSidebar
              onBack={() => setOpen(false)}
            />

            <section className="flex-1 overflow-y-auto">
              <div className="p-8 md:p-10">
                <BookingForm />
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}