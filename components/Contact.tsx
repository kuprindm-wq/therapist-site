import BookingModal from "./booking/BookingModal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FBF8F2]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-[#6B7560]">
            Контакты
          </p>

          <h2 className="mb-10 text-4xl leading-tight text-[#2E2B27] md:text-6xl">
            Начать можно
            <br />
            с первого сообщения
          </h2>

          <p className="mb-14 max-w-3xl text-lg leading-8 text-[#59544D] md:text-xl md:leading-9">
            Если вы хотите обсудить свою ситуацию,
            задать вопросы или подобрать удобный
            формат встречи — напишите мне.
          </p>

          <div className="mb-12">
            <BookingModal />
          </div>

          <div className="grid gap-8 border-t border-[#D5CCBE] pt-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8A8072]">
                Телефон
              </p>

              <a
                href="tel:+79057897905"
                className="text-xl text-[#2E2B27] transition hover:text-[#53614D]"
              >
                +7&nbsp;905&nbsp;789-79-05
              </a>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#8A8072]">
                Email
              </p>

              <a
                href="mailto:psi-art@mail.ru"
                className="text-xl text-[#2E2B27] transition hover:text-[#53614D]"
              >
                psi-art@mail.ru
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-[#D5CCBE] pt-8">
            <p className="text-lg leading-8 text-[#59544D]">
              Формат встреч:
              <br />
              Онлайн — основной формат работы.
              <br />
              Очные встречи — Калининград и Москва.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}