import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Когда забота превращается в контроль | Мария Куприна",
  description:
    "О родительской тревоге, контроле, самостоятельности ребёнка и том, как сохранить близость без постоянного вмешательства.",
};

export default function ParentalControlPage() {
  return (
    <ArticlePage
      category="Детско-родительские отношения"
      title="Когда забота превращается в контроль"
      intro="«Я просто переживаю»."
    >
      <section className="space-y-5 text-[#55514B] leading-relaxed">

        <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
          Тревога заставляет держать крепче
        </h2>

        <p>
          Где ребёнок? С кем он? Почему не ответил?
          Почему получил не ту оценку?
        </p>

        <p>
          За такими вопросами обычно стоит любовь.
        </p>

        <p>
          И страх.
        </p>

        <p>
          Когда родителю тревожно, очень хочется всё предусмотреть,
          подсказать, проверить и не дать ребёнку ошибиться.
        </p>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            Самостоятельность тоже требует опыта
          </h2>

          <p>
            Ребёнку важно не только получать правильные ответы от взрослого.
          </p>

          <p>
            Ему важно пробовать самому.
            Ошибаться. Расстраиваться. Исправлять.
          </p>

          <p>
            Иногда сталкиваться с последствиями своих решений.
          </p>

          <p className="font-medium text-[#53614D]">
            Это не значит оставить ребёнка без поддержки.
            Скорее — постепенно менять её форму.
          </p>
        </div>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            А что делать с тревогой родителя?
          </h2>

          <p>
            Не всегда получается просто «перестать контролировать».
          </p>

          <p>
            Если за контролем стоит сильный страх, сначала важно
            разобраться именно с ним.
          </p>

          <p>
            Чего я боюсь?
          </p>

          <p>
            Что произойдёт, если я не вмешаюсь?
          </p>

          <p>
            Почему мне так трудно доверить ребёнку это решение?
          </p>

          <p>
            Иногда ответы на эти вопросы говорят о переживаниях
            самого родителя больше, чем о поведении ребёнка.
          </p>
        </div>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            Близость не требует постоянного контроля
          </h2>

          <p>
            Ребёнку важно знать:
          </p>

          <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
            <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
              «Мне доверяют, но если мне понадобится помощь — она будет рядом».
            </p>
            <p className="text-sm text-[#8A7A6A] mt-3 text-right">— Мария Куприна</p>
          </div>

          <p>
            А родителю важно постепенно обнаруживать:
          </p>

          <p className="font-medium text-[#53614D]">
            отпустить часть контроля — не значит перестать любить.
          </p>

          <p>
            Иногда это и есть следующий шаг к более спокойным
            и близким отношениям.
          </p>
        </div>

        <div className="border-t border-[#D8CEC1] pt-10 mt-8">
          <p>
            Если тревога становится слишком сильной и отношения
            начинают страдать, с этим можно разбираться вместе
            со специалистом.
          </p>

          <a
            href="/#contact"
            className="mt-6 inline-flex rounded-full bg-[#53614D] px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Обсудить свою ситуацию
          </a>
        </div>
      </section>
    </ArticlePage>
  );
}