export default function Requests() {
  return (
    <section id="requests">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="mb-16 max-w-3xl">
          <p className="mb-7 text-sm uppercase tracking-[0.25em] text-[#6B7560]">
            С чем я работаю
          </p>

          <h2 className="text-4xl leading-tight text-[#2E2B27] md:text-6xl">
            Пара и семья
          </h2>
        </div>

        <div className="max-w-5xl">
          {/* Карточка "Пара и семья" */}
          <div className="rounded-2xl bg-[#FBF8F3] p-8 border border-[#D5CCBE]">
            <p className="mb-6 text-lg leading-8 text-[#59544D]">
              Помогаю разобраться в отношениях, когда становится сложно слышать
              друг друга, сохранять близость или понимать, что происходит между
              вами.
            </p>

            <ul className="grid gap-x-12 gap-y-3 md:grid-cols-2">
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                конфликты и кризисы в отношениях
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                трудности коммуникации
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                созависимость и эмоциональная зависимость
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                сложности в сексуальных отношениях
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                измена, расставание и развод
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                детско-родительские отношения, в том числе отношения взрослых
                детей и их родителей
              </li>
            </ul>
          </div>

          {/* Блок про насилие */}
          <div className="mt-8 rounded-2xl bg-[#F5F0EB] p-8 border-l-4 border-[#C49A7C]">
            <p className="text-lg leading-8 text-[#2C2C2C]">
              При эмоциональном и физическом насилии помогаю восстановить
              связь с собой, найти внутреннюю опору и разобраться в возможных
              путях выхода из ситуации.
            </p>
          </div>

          {/* Блок "Что может измениться" */}
          <div className="mt-12 rounded-2xl bg-[#F7F3EF] p-8 md:p-10">
            <h3 className="mb-5 text-2xl text-[#2E2B27] font-serif">
              Что может измениться в терапии
            </h3>

            <p className="text-lg leading-8 text-[#59544D]">
              В процессе терапии вы сможете лучше понимать свои желания,
              потребности и чувства, принимать решения с большей опорой на себя
              и яснее видеть происходящее в отношениях.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#59544D]">
              Я не даю готовых рецептов. Мы вместе разбираемся в вашей
              ситуации и ищем то, что подходит именно вам.
            </p>
          </div>

          {/* Карточка "Индивидуальная терапия" */}
          <div className="mt-12 rounded-2xl bg-[#FBF8F3] p-8 border border-[#D5CCBE]">
            <h3 className="mb-5 text-2xl text-[#2E2B27] font-serif">
              Индивидуальная терапия
            </h3>

            <p className="text-lg leading-8 text-[#59544D]">
              В индивидуальной работе мы можем исследовать:
            </p>

            <ul className="mt-5 grid gap-x-12 gap-y-3 md:grid-cols-2">
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                сепарацию и эмоциональное отделение от родителей
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                вопросы идентичности и самоопределения
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                панические атаки, тревожные состояния и фобии
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                последствия травматического опыта и ПТСР
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                нестабильную самооценку, стресс и ощущение одиночества
              </li>
              <li className="flex items-start gap-3 text-[#59544D]">
                <span className="mt-1 text-[#C49A7C] text-lg">✦</span>
                депрессивные состояния и ПРЛ
              </li>
            </ul>
          </div>

          {/* Кнопка в конце блока */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-[#53614D] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2E2B27]"
            >
              Записаться на консультацию →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}