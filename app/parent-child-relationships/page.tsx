import Link from "next/link";
import Image from "next/image";

export default function ParentChildRelationshipsPage() {
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
            Детско-родительские отношения: как понять и принять друг друга
          </h1>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/parent-child-relationships-banner.jpg"
                alt="Детско-родительские отношения"
                width={1200}
                height={630}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            Я помогаю родителям и детям восстановить контакт, научиться слышать
            друг друга и находить общий язык в любом возрасте.
          </p>

          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        <div className="mt-12">
          <div className="max-w-2xl mx-auto space-y-6 text-[#55514B] leading-relaxed">
            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Когда нужна помощь в детско-родительских отношениях
            </h2>

            <p>
              Ко мне приходят, когда:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>ребёнок не слушается и не слышит родителей;</li>
              <li>подросток отдаляется, становится агрессивным или замкнутым;</li>
              <li>взрослые дети не хотят общаться или сохраняют обиды;</li>
              <li>вы чувствуете вину, стыд или страх за отношения с ребёнком;</li>
              <li>не знаете, как установить границы и при этом сохранить любовь.</li>
            </ul>

            <p>
              Я работаю с детско-родительскими отношениями в гештальт-подходе.
              Мы смотрим не только на поведение ребёнка, но и на то, что происходит
              между вами: какие чувства возникают, как вы строите контакт,
              что мешает близости.
            </p>

            <div className="bg-[#F5F0EB] rounded-2xl p-6 md:p-8 border-l-4 border-[#C49A7C] my-6">
              <p className="text-xl md:text-2xl text-[#2C2C2C] font-medium leading-relaxed">
                «Я не знаю, как говорить с дочерью. Мне кажется, я делаю всё не так».
              </p>
              <p className="text-sm text-[#8A7A6A] mt-3 text-right">— из сессии</p>
            </div>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Как проходит работа с детско-родительскими отношениями
            </h2>

            <p>
              В терапии я помогаю вам:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>понять, что стоит за поведением ребёнка;</li>
              <li>научиться говорить так, чтобы вас слышали;</li>
              <li>восстановить доверие и эмоциональную близость;</li>
              <li>найти баланс между заботой и контролем;</li>
              <li>прожить сложные чувства (вину, стыд, страх).</li>
            </ul>

            <p>
              Я работаю как с родителями, так и с подростками — индивидуально
              или в формате семейных сессий, когда это уместно.
            </p>

            <h2 className="text-2xl text-[#2E2B27] font-serif">
              Что вы получите в результате
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>сможете говорить о сложном без страха и осуждения;</li>
              <li>увидите привычные сценарии и научитесь их менять;</li>
              <li>восстановите доверие и близость;</li>
              <li>найдёте новые способы быть рядом, даже когда трудно.</li>
            </ul>

            <p>
              Я не даю готовых рецептов. Вместе мы ищем то, что подходит именно вашей семье.
            </p>
          </div>
        </div>

        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <h2 className="max-w-2xl text-3xl leading-tight md:text-4xl">
              Запишитесь на консультацию
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Если ваши отношения с ребёнком стали сложными, я помогу вам
              найти путь к взаимопониманию.
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