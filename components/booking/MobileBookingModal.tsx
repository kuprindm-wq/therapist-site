"use client";

import { useState } from "react";
import MobileBookingForm from "./MobileBookingForm";

export default function MobileBookingModal() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full rounded-full bg-[#53614D] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#465341] hover:shadow-lg"
      >
        Записаться
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-[#2E2B27]/55 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="flex h-[100dvh] w-full items-center justify-center p-3">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative h-[calc(100dvh-24px)] w-full overflow-hidden rounded-[24px] bg-[#FCFAF6] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            >
              {/* Крестик */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Закрыть"
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#D5CCBE] bg-[#FCFAF6]/95 text-xl leading-none text-[#59544D] transition hover:border-[#53614D] hover:text-[#53614D]"
              >
                ×
              </button>

              <MobileBookingForm onClose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}