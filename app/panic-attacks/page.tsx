import Link from "next/link";
import Image from "next/image";

export default function PanicAttacksPage() {
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
            Панические атаки: что делать и когда нужен психолог
          </h1>

          {/* УМЕНЬШЕННАЯ КАРТИНКА */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/panic-attacks-banner.jpg"
                alt="Панические атаки"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            Панические атаки — это не просто страх. Это состояние,
            которое можно понять и взять под контроль.
          </p>

          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        <div className="mt-12">
          <div className="max-w-2xl mx-auto space-y-6 text-[#55514B] leading-relaxed">
            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Что такое паническая атака на самом деле
            </h2>

            <p>
              Паническая атака — это внезапный приступ сильной тревоги,
              который сопровождается физическими симптомами: учащённое
              сердцебиение, нехватка воздуха, потливость, дрожь, головокружение.
            </p>

            <p>
              Важно понимать: паническая атака не опасна для жизни.
              Это реакция нервной системы, которая «перегружается» и включает
              ложную тревогу. Но в момент атаки кажется, что происходит
              что-то ужасное.
            </p>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Я не могу дышать, мне кажется, я сейчас умру».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Почему возникают панические атаки
            </h2>

            <p>
              Причины могут быть разными: сильный стресс, подавленные эмоции,
              хроническая усталость, тревожное расстройство. Иногда атаки
              случаются «на пустом месте» — без видимой причины.
            </p>

            <p>
              Часто панические атаки возникают у людей, которые привыкли
              подавлять свои чувства и не давать себе права на слабость.
              Это способ психики сказать: «Стоп, я больше не могу».
            </p>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Что делать во время панической атаки
            </h2>

            <p>
              Если вы или кто-то рядом переживает паническую атаку,
              вот что можно сделать:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Сосредоточьтесь на дыхании.</strong> Медленный вдох
                через нос — задержка на 3 счёта — медленный выдох через рот.
              </li>
              <li>
                <strong>Заземлитесь.</strong> Посмотрите вокруг: назовите
                5 предметов, которые видите, 4, которые можете потрогать,
                3, которые слышите.
              </li>
              <li>
                <strong>Не убегайте.</strong> Помните: это пройдёт через
                10–15 минут.
              </li>
              <li>
                <strong>Умойтесь холодной водой</strong> — это помогает
                «переключить» нервную систему.
              </li>
            </ul>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Я научился дышать. Это звучит просто, но это изменило всё».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Когда нужен психолог
            </h2>

            <p>
              Если панические атаки повторяются, если вы начинаете избегать
              мест и ситуаций, где они могут случиться, — это повод обратиться
              к специалисту.
            </p>

            <p>
              Психолог поможет вам:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>понять причины ваших состояний;</li>
              <li>научиться справляться с тревогой;</li>
              <li>восстановить чувство контроля над своей жизнью;</li>
              <li>перестать жить в страхе перед следующей атакой.</li>
            </ul>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Как я могу помочь
            </h2>

            <p>
              Я работаю с тревожными состояниями и паническими атаками
              в рамках гештальт-подхода. Мы не просто «убираем симптомы»,
              а исследуем, что стоит за вашей тревогой, какие части вашей
              жизни просят внимания.
            </p>

            <p>
              Вместе мы находим способы, которые работают именно для вас.
              Терапия не обещает, что атаки исчезнут мгновенно, но она даёт
              вам инструменты и опору, чтобы справляться с ними и постепенно
              уменьшить их влияние на вашу жизнь.
            </p>
          </div>
        </div>

        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
              Вы не должны справляться с этим в одиночку
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Если панические атаки мешают вам жить, я готова помочь вам
              понять их причины и научиться справляться.
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