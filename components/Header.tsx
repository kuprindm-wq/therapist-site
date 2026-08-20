import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import BookingModal from "./booking/BookingModal";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7] border-b border-[#E6DFD4]">
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="block shrink-0">
            <p className="text-xl font-light tracking-wide text-[#2E2B27]">
              Мария Куприна
            </p>

            <p className="mt-1 text-sm text-[#7B705F]">
              Психолог · гештальт-терапевт
            </p>
          </a>

          <div className="hidden md:block">
            <Navigation />
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden md:block">
              <BookingModal />
            </div>

            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}