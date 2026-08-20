import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Как понять, что нужен психотерапевт | Мария Куприна",
  description:
    "Когда стоит обратиться к психотерапевту, почему не обязательно ждать кризиса и с чего можно начать работу над собой.",
};

export default function NeedTherapistPage() {
  return (
    <ArticlePage
      category="Психотерапия"
      title="Как понять, что нужен психотерапевт"
      intro="Не обязательно ждать момента, когда станет совсем плохо. Иногда обращение за помощью — это просто способ лучше понять, что с вами происходит."
    >
      <section className="space-y-5 text-[#55514B] leading-relaxed">

        <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
          Когда становится трудно справляться одному
        </h2>

        <p>
          Можно продолжать работать, общаться, заниматься привычными
          делами — и при этом постоянно чувствовать внутреннее напряжение.
        </p>

        <p>
          Тревога, раздражение, усталость или ощущение пустоты могут
          постепенно становиться привычным состоянием.
        </p>

        <p>
          Иногда человек привыкает к этому настолько, что уже не замечает,
          насколько ему тяжело.
        </p>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            Одни и те же ситуации повторяются
          </h2>

          <p>
            Конфликты в отношениях снова заканчиваются похожим образом.
            Вы постоянно оказываетесь в роли того, кто терпит, спасает,
            контролирует или отдаляется.
          </p>

          <p>
            Понимание того, что происходит, иногда приходит только после
            нескольких повторений.
          </p>

          <p className="font-medium text-[#53614D]">
            Психотерапия помогает увидеть этот повторяющийся сценарий
            и разобраться, почему он возникает.
          </p>
        </div>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            Не обязательно иметь «серьёзную проблему»
          </h2>

          <p>
            К психотерапевту обращаются не только в кризисе.
          </p>

          <p>
            Иногда хочется разобраться в себе, лучше понимать свои чувства,
            научиться выстраивать границы или изменить привычный способ
            строить отношения.
          </p>

          <p>
            Для этого не нужно доказывать, что вам достаточно плохо.
          </p>
        </div>

        <div className="border-t border-[#D8CEC1] pt-8 mt-8">

          <h2 className="text-2xl text-[#2E2B27] md:text-3xl font-serif">
            А если я не знаю, с чего начать?
          </h2>

          <p>Это нормально.</p>

          <p>
            Вам не нужно заранее правильно сформулировать проблему
            или подобрать психологический термин.
          </p>

          <p>
            Можно начать с простого:
          </p>

          <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
            <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
              «Мне сейчас трудно, и я хочу понять почему».
            </p>
            <p className="text-sm text-[#8A7A6A] mt-3 text-right">— Мария Куприна</p>
          </div>
        </div>

        <div className="border-t border-[#D8CEC1] pt-10 mt-8">
          <p>
            Психотерапия — не про то, чтобы кто-то рассказал вам,
            как правильно жить.
          </p>

          <p className="font-medium text-[#53614D]">
            Это пространство, где можно внимательнее услышать себя.
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