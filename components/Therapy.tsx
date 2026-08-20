export default function Therapy() {
  return (
    <section id="therapy">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-28">
        <div className="mb-16 max-w-3xl">
          <p className="mb-7 text-sm uppercase tracking-[0.25em] text-[#6B7560]">
            Как проходит терапия
          </p>

          <h2 className="text-4xl leading-tight text-[#2E2B27] md:text-6xl">
            Разговор, в котором
            <br />
            можно быть услышанным
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="border-t border-[#D5CCBE] pt-7">
            <p className="mb-4 text-sm text-[#8A8072] font-medium">01</p>

            <h3 className="mb-5 text-2xl text-[#2E2B27] font-serif">
              Начинаем с вашей истории
            </h3>

            <p className="leading-8 text-[#716B63]">
              На первой встрече мы знакомимся и разбираемся в том, что привело
              вас в терапию. Вы можете рассказать о том, что сейчас особенно
              волнует, беспокоит или не даёт двигаться дальше.
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] pt-7">
            <p className="mb-4 text-sm text-[#8A8072] font-medium">02</p>

            <h3 className="mb-5 text-2xl text-[#2E2B27] font-serif">
              Исследуем происходящее
            </h3>

            <p className="leading-8 text-[#716B63]">
              Вместе мы обращаем внимание на чувства, потребности, привычные
              способы реагирования и то, как складываются отношения с собой и
              другими людьми.
            </p>
          </div>

          <div className="border-t border-[#D5CCBE] pt-7">
            <p className="mb-4 text-sm text-[#8A8072] font-medium">03</p>

            <h3 className="mb-5 text-2xl text-[#2E2B27] font-serif">
              Ищем то, что подходит вам
            </h3>

            <p className="leading-8 text-[#716B63]">
              В терапии нет готового универсального рецепта. Мы постепенно
              ищем новые способы справляться с трудностями, принимать решения и
              строить отношения, опираясь на ваши особенности и опыт.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-4xl border-t border-[#D5CCBE] pt-10">
          <div className="bg-[#F5F0EB] rounded-2xl p-8 md:p-10 border-l-4 border-[#C49A7C]">
            <p className="text-xl leading-9 text-[#2C2C2C] md:text-2xl font-medium">
              Терапия — это совместная работа. Вам не нужно заранее знать, что именно говорить или с чего начинать. Достаточно прийти с тем, что сейчас происходит в вашей жизни.
            </p>
            <p className="text-sm text-[#8A7A6A] mt-4 text-right">— Мария Куприна</p>
          </div>
        </div>
      </div>
    </section>
  );
}