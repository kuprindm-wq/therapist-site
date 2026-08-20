import Link from "next/link";
import Image from "next/image";

export default function CoupleTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#2E2B27]">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 md:py-20">
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
          >
            ← На главную
          </Link>
        </div>

        <header className="max-w-3xl">
          <h1 className="text-4xl leading-[1.08] text-[#2E2B27] sm:text-5xl md:text-6xl">
            Психолог для пары: терапия отношений
          </h1>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/couple-therapy-banner.jpg"
                alt="Психолог для пары"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            Помогаю парам восстановить контакт, доверие и близость.
            Вместе мы разбираемся в конфликтах, находим новые способы слышать друг друга и возвращаем тепло в отношения.
          </p>

          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        <div className="mt-12">
          <div className="max-w-2xl mx-auto space-y-6 text-[#55514B] leading-relaxed">
            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Когда нужен психолог для пары
            </h2>

            <p>
              Если вы чувствуете, что между вами растёт стена, если разговоры
              всё чаще заканчиваются ссорами или молчанием — это сигнал.
              Терапия для пар помогает не только решить конкретный конфликт,
              но и понять, что происходит в ваших отношениях на более глубоком уровне.
            </p>

            <p>
              Ко мне приходят пары, которые хотят:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>услышать и понять друг друга;</li>
              <li>выйти из повторяющихся конфликтов;</li>
              <li>восстановить доверие после измены или обмана;</li>
              <li>вернуть близость и страсть;</li>
              <li>понять, стоит ли сохранять отношения, или уже пора расстаться.</li>
            </ul>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Мы перестали слышать друг друга. Кажется, мы говорим на разных языках».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Как проходят консультации для пар
            </h2>

            <p>
              Я работаю с парой как с единой системой. Мы не ищем «виноватого»,
              а смотрим на то, что происходит между вами. Как вы строите диалог?
              Что стоит за вашими словами? Что каждый из вас чувствует на самом деле?
            </p>

            <p>
              В терапии я помогаю:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>замечать привычные сценарии поведения;</li>
              <li>проговаривать то, что обычно остаётся за кадром;</li>
              <li>восстанавливать эмоциональный контакт;</li>
              <li>находить новые способы быть вместе.</li>
            </ul>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Что даёт терапия паре
            </h2>

            <p>
              Терапия не даёт универсальных решений — она создаёт пространство,
              в котором вы сами находите то, что подходит именно вам.
            </p>

            <p>
              В результате вы сможете:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>говорить о сложном без страха и осуждения;</li>
              <li>слышать друг друга, даже когда вы не согласны;</li>
              <li>восстановить доверие и близость;</li>
              <li>принимать решения, опираясь на себя и на пару.</li>
            </ul>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Мы снова можем разговаривать. Не идеально, но мы снова слышим друг друга».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Как начать
            </h2>

            <p>
              Первая встреча — это знакомство. Мы обсуждаем ваш запрос,
              определяем, на что важно обратить внимание, и решаем, в каком
              формате нам двигаться дальше.
            </p>

            <p>
              Вы можете прийти как вдвоём, так и по отдельности — я подстраиваюсь
              под вашу ситуацию и запрос.
            </p>
          </div>
        </div>

        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
              Запишитесь на консультацию для пары
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Если вы чувствуете, что ваши отношения зашли в тупик, я помогу
              вам найти выход и заново услышать друг друга.
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