export default function Education() {
  return (
    <section id="education">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="mb-16 max-w-3xl">
          <p className="mb-7 text-sm uppercase tracking-[0.25em] text-[#6B7560]">
            Образование
          </p>

          <h2 className="text-4xl leading-tight text-[#2E2B27] md:text-6xl">
            Профессиональная подготовка
            <br />
            и дополнительное обучение
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="border-t border-[#D5CCBE] pt-8">
            <h3 className="mb-4 text-2xl text-[#2E2B27] md:text-3xl font-serif">
              Московский Университет Открытого Образования
            </h3>

            <p className="leading-8 text-[#59544D] text-lg">
              Психолог
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] pt-8">
            <h3 className="mb-4 text-2xl text-[#2E2B27] md:text-3xl font-serif">
              Московский Институт Гештальт-терапии и Консультирования
            </h3>

            <p className="leading-8 text-[#59544D] text-lg">
              «Теория и практика Гештальт-терапии».
              <br />
              Гештальт-терапевт
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#D5CCBE] pt-10">
          <h3 className="mb-8 text-2xl text-[#2E2B27] md:text-3xl font-serif">
            Дополнительная подготовка
          </h3>

          <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="text-[#C49A7C] text-lg mt-0.5">✦</span>
              <p className="leading-7 text-[#59544D]">
                Повышение квалификации по сказкотерапии
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#C49A7C] text-lg mt-0.5">✦</span>
              <p className="leading-7 text-[#59544D]">
                Повышение квалификации по системной семейной психотерапии
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#C49A7C] text-lg mt-0.5">✦</span>
              <p className="leading-7 text-[#59544D]">
                Повышение квалификации по песочной терапии
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#C49A7C] text-lg mt-0.5">✦</span>
              <p className="leading-7 text-[#59544D]">
                Семинар «Работа с кризисами в детской терапии»
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl border-t border-[#D5CCBE] pt-10">
          <div className="bg-[#F5F0EB] rounded-2xl p-8 md:p-10">
            <p className="text-xl leading-9 text-[#2C2C2C] md:text-2xl font-medium">
              В работе я опираюсь прежде всего на гештальт-терапию и системный подход к работе с семьёй. Дополнительные знания и инструменты использую в зависимости от запроса и особенностей конкретного человека или пары.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}