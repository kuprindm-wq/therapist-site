"use client";

import { useState } from "react";
import BookingSidebar from "./BookingSidebar";
import BookingForm from "./BookingForm";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

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
          className="fixed inset-0 z-50 bg-[#2E2B27]/55 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="flex min-h-[100dvh] items-center justify-center p-0 lg:p-8">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-[100dvh] w-full overflow-hidden rounded-none bg-[#FCFAF6] shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:h-auto lg:max-h-[90vh] lg:max-w-[820px] lg:flex-row"
            >
              <div className="hidden lg:block">
                <BookingSidebar onBack={closeModal} />
              </div>

              <section className="min-h-0 flex-1 overflow-y-auto">
                <div className="p-6 md:p-10">
                  <BookingForm />
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}