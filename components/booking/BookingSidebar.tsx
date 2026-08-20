type BookingSidebarProps = {
  onBack: () => void;
};

export default function BookingSidebar({
  onBack,
}: BookingSidebarProps) {
  return (
    <aside className="shrink-0 bg-[#F1ECE3] lg:w-[300px]">
      <div className="flex h-full flex-col p-6 sm:p-8 md:p-10">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 self-start text-sm text-[#6B7560] transition-colors hover:text-[#2E2B27]"
        >
          ← Назад
        </button>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#7C8470]">
          ПЕРВАЯ ВСТРЕЧА
        </p>

        <h2 className="text-[30px] leading-[1.15] text-[#2E2B27] sm:text-[34px]">
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

        <div className="mt-8 pt-2 lg:mt-auto lg:pt-10">
          <div className="rounded-2xl border border-[#E4DBCF] bg-white p-5 sm:p-6">
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