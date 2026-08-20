export default function PainPoints() {
  return (
    <section className="bg-[#FBF8F3] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-center text-sm uppercase tracking-[0.25em] text-[#6B7560]">
          Вы узнаёте себя?
        </p>

        <h2 className="mt-3 text-center text-3xl leading-tight text-[#2E2B27] md:text-4xl">
          Если вы чувствуете что-то из этого — вы не одиноки
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#D5CCBE] bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <p className="text-4xl text-[#C49A7C]">😔</p>
            <h3 className="mt-4 text-xl font-medium text-[#2E2B27]">
              Потеряли себя в отношениях
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#716B63]">
              Не понимаете, чего хотите, и чувствуете, что живёте чужой жизнью
            </p>
          </div>

          <div className="rounded-2xl border border-[#D5CCBE] bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <p className="text-4xl text-[#C49A7C]">😰</p>
            <h3 className="mt-4 text-xl font-medium text-[#2E2B27]">
              Чувствуете тревогу и неуверенность
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#716B63]">
              Постоянное напряжение, страхи и ощущение, что почва уходит из-под ног
            </p>
          </div>

          <div className="rounded-2xl border border-[#D5CCBE] bg-white p-8 text-center shadow-sm transition hover:shadow-md">
            <p className="text-4xl text-[#C49A7C]">💔</p>
            <h3 className="mt-4 text-xl font-medium text-[#2E2B27]">
              Устали от повторяющихся конфликтов
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#716B63]">
              Ссоры в семье или паре, где вы снова и снова наступаете на одни и те же грабли
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#53614D] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2E2B27]"
          >
            Разобраться с этим →
          </a>
        </div>
      </div>
    </section>
  );
}