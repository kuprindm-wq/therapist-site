import Link from "next/link";
import Image from "next/image";

export default function PsychologistForRelationshipsPage() {
  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#2E2B27]">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 md:py-20">
        <div className="mb-10">
          <Link href="/" className="text-sm text-[#7B705F] hover:text-[#53614D]">
            ← На главную
          </Link>
        </div>

        <header className="max-w-3xl">
          <h1 className="text-4xl leading-[1.08] text-[#2E2B27] sm:text-5xl md:text-6xl">
            Психолог по отношениям: помощь парам и семьям
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            Отношения — это сложно. Иногда мы перестаём слышать друг друга,
            теряем близость и не знаем, как вернуть то, что было.
            Я помогаю парам и семьям разобраться в конфликтах, восстановить
            доверие и найти новые способы быть вместе.
          </p>

          {/* КАРТИНКА — без обрезки */}
          <div className="mt-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/relationships-banner.jpg"
              alt="Психолог по отношениям"
              width={1200}
              height={630}
              className="w-full h-auto"
            />
          </div>

          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        <div className="mt-12">
          <div className="max-w-2xl mx-auto space-y-6 text-[#55514B] leading-relaxed">
            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Когда нужна помощь психолога по отношениям
            </h2>

            <p>
              Ко мне приходят, когда:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>ссоры и конфликты стали привычкой;</li>
              <li>чувствуете, что отдаляетесь друг от друга;</li>
              <li>после измены или предательства не знаете, как быть дальше;</li>
              <li>сложно говорить о своих чувствах и желаниях;</li>
              <li>кажется, что вы живёте как соседи, а не как пара.</li>
            </ul>

            <p>
              Я работаю с отношениями в гештальт-подходе. Это значит, что мы
              смотрим не только на слова и действия, но и на то, что происходит
              между вами в моменте: какие чувства вы переживаете, как вы строите
              контакт, что мешает вам быть ближе.
            </p>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Мы перестали разговаривать. Я не знаю, что он думает, а он не знает, что я чувствую».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Как проходит терапия отношений
            </h2>

            <p>
              В терапии я помогаю вам:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>замечать, как вы взаимодействуете;</li>
              <li>проговаривать то, что остаётся за кадром;</li>
              <li>восстанавливать доверие и эмоциональный контакт;</li>
              <li>находить новые способы поддерживать близость.</li>
            </ul>

            <p>
              Вы можете прийти как вдвоём (парная терапия), так и по отдельности —
              иногда работа с одним человеком помогает изменить систему отношений
              в паре или семье.
            </p>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Что вы получите в результате
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>сможете говорить о сложном без страха и осуждения;</li>
              <li>увидите привычные сценарии конфликтов и научитесь их менять;</li>
              <li>вернёте близость и доверие;</li>
              <li>примете решение, которое подходит именно вам.</li>
            </ul>

            <p>
              Я не даю готовых решений. Вместе мы исследуем вашу ситуацию,
              и вы находите то, что работает для вас.
            </p>
          </div>
        </div>

        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
              Запишитесь на консультацию
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Если ваши отношения проходят через сложный период, я готова помочь вам найти выход.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#F7F3ED] px-7 py-3.5 text-base font-medium text-[#53614D] transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}