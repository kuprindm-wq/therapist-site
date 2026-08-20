import Image from "next/image";
import BookingModal from "./booking/BookingModal";
import MobileBookingModal from "./booking/MobileBookingModal";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 md:py-16 lg:px-12 lg:py-24">
      <div className="grid items-center gap-6 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Текст */}
        <div className="order-2 md:order-1">
          {/* Фото — только на мобильных, сверху, маленькое */}
          <div className="flex justify-center md:hidden mb-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#D5CCBE]">
              <Image
                src="/terap.jpg"
                alt="Мария Куприна"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Для пар и семей */}
          <div className="mb-6">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7560]">
              Для пар и семей
            </span>
            <h1 className="mt-2 text-2xl font-medium leading-tight text-[#2E2B27] sm:text-3xl md:text-4xl lg:text-5xl">
              Вы устали от конфликтов, непонимания <br className="hidden sm:inline" />
              или чувства, что отношения отдаляются?
            </h1>
          </div>

          {/* Индивидуальная терапия */}
          <div className="mb-8 pt-5 border-t border-[#D5CCBE]">
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7560]">
              Индивидуальная терапия
            </span>
            <h2 className="mt-2 text-xl font-medium leading-tight text-[#2E2B27] sm:text-2xl md:text-3xl lg:text-4xl">
              Чувствуете тревогу, неуверенность <br className="hidden sm:inline" />
              или потеряли контакт с собой?
            </h2>
          </div>

          {/* Описание */}
          <p className="mb-5 max-w-xl text-sm leading-6 text-[#55514B] sm:text-base">
            Помогаю разобраться в отношениях с собой и близкими, пройти через кризисы и найти опору на себя.
          </p>

          {/* Якорь доверия */}
          <div className="mb-6 flex flex-wrap gap-3 text-xs text-[#7B705F] sm:text-sm">
            <span>✓ Опыт 8+ лет</span>
            <span className="hidden xs:inline">·</span>
            <span>✓ 200+ клиентов</span>
            <span className="hidden xs:inline">·</span>
            <span>✓ Конфиденциально</span>
          </div>

          {/* Кнопка */}
          <div className="mb-4">
            <div className="hidden md:block">
              <BookingModal />
            </div>
            <div className="block md:hidden w-full">
              <MobileBookingModal />
            </div>
          </div>

          {/* "Узнать больше" */}
          <div className="text-center md:text-left">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
            >
              <span>Узнать больше</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Фото — только на десктопе */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end hidden md:flex">
          <div className="relative w-full max-w-[280px] lg:max-w-[420px]">
            <div className="absolute -inset-4 rounded-[40px] bg-[#E7DED0]" />
            <div className="relative overflow-hidden rounded-[40px]">
              <Image
                src="/terap.jpg"
                alt="Мария Куприна — парный и семейный психотерапевт"
                width={420}
                height={540}
                className="h-auto w-full rounded-[40px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}