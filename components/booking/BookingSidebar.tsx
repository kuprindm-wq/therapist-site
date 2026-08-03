type BookingSidebarProps = {
  onBack: () => void;
};

export default function BookingSidebar({
  onBack,
}: BookingSidebarProps) {
  return (
    <aside className="w-full shrink-0 border-b border-[#E8DFD4] bg-[#F6F2EC] lg:w-[320px] lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col p-8">
        <button
          type="button"
          onClick={onBack}
          className="mb-10 w-fit text-sm tracking-wide text-[#6E7668] transition hover:text-[#53614D]"
        >
          ← Назад
        </button>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#7C8470]">
          ПЕРВАЯ ВСТРЕЧА
        </p>

        <h2 className="text-[34px] leading-[1.15] text-[#2E2B27]">
          Запись
          <br />
          на консультацию
        </h2>

        <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#5E564E]">
          <p>
            Иногда самый сложный шаг — просто начать разговор.
          </p>

          <p>
            Оставьте заявку в удобной для вас форме. Я свяжусь с вами,
            отвечу на вопросы и мы вместе выберем время первой встречи.
          </p>

          <p>
            Если пока не хочется подробно рассказывать о своей ситуации —
            это совершенно нормально. Для первого обращения достаточно
            нескольких слов.
          </p>
        </div>

        <div className="mt-auto pt-10">
          <div className="rounded-2xl border border-[#E4DBCF] bg-white p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C8470]">
              Обычно отвечаю
            </p>

            <p className="mt-3 text-lg leading-8 text-[#2E2B27]">
              в течение
              <br />
              одного рабочего дня
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}