export default function Format() {
  return (
    <section id="format">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="mb-16 max-w-3xl">
          <p className="mb-7 text-sm uppercase tracking-[0.25em] text-[#6B7560]">
            Формат работы
          </p>

          <h2 className="text-4xl leading-tight text-[#2E2B27] md:text-6xl">
            Как проходят встречи
          </h2>
        </div>

        <div className="max-w-5xl">
          <div className="border-t border-[#D5CCBE] py-9 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="mb-3 text-2xl text-[#2E2B27] md:text-3xl font-serif">
                Индивидуальная терапия
              </h3>

              <p className="text-[#716B63]">
                Встречи один на один
              </p>
            </div>

            <p className="mt-5 text-xl text-[#403C36] md:mt-0 font-medium">
              55 минут · 3 500 ₽
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] py-9 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="mb-3 text-2xl text-[#2E2B27] md:text-3xl font-serif">
                Парная терапия
              </h3>

              <p className="text-[#716B63]">
                Встречи вдвоём с терапевтом
              </p>
            </div>

            <p className="mt-5 text-xl text-[#403C36] md:mt-0 font-medium">
              1 час 25 минут · 4 900 ₽
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] py-9">
            <h3 className="mb-5 text-2xl text-[#2E2B27] md:text-3xl font-serif">
              Онлайн и очно
            </h3>

            <p className="max-w-3xl text-lg leading-8 text-[#59544D]">
              Основной формат работы — онлайн-консультации.
              <br />
              <br />
              Очные встречи возможны в Калининграде и Москве.
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] py-9">
            <h3 className="mb-5 text-2xl text-[#2E2B27] md:text-3xl font-serif">
              Первая встреча
            </h3>

            <div className="bg-[#F5F0EB] rounded-2xl p-8 md:p-10 border-l-4 border-[#C49A7C]">
              <p className="max-w-3xl text-lg leading-8 text-[#2C2C2C]">
                На первой встрече мы знакомимся, обсуждаем ваш запрос и определяем, на что важно обратить внимание в дальнейшей работе. Вам не нужно заранее формулировать проблему идеально — можно начать с того, что сейчас происходит в вашей жизни.
              </p>
              <p className="text-sm text-[#8A7A6A] mt-4 text-right">— Мария Куприна</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}