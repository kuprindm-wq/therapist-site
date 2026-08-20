// app/articles/page.tsx
import Link from "next/link";
import { articlesData } from "./articlesData";

const categories = [
  { title: "Все статьи", slug: "all" },
  { title: "Отношения", slug: "relations" },
  { title: "Детско-родительские отношения", slug: "parent-child" },
  { title: "Психотерапия", slug: "therapy" },
];

export const metadata = {
  title: "Статьи о психотерапии и отношениях | Мария Куприна",
  description:
    "Статьи Марии Куприной о психотерапии, отношениях, детско-родительских отношениях и понимании себя.",
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#2E2B27]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
          >
            ← На главную
          </Link>
        </div>

        <header className="mt-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7B705F]">
            Статьи
          </p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-[#2E2B27] md:text-7xl">
            О том, что происходит между людьми
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            Разговоры об отношениях, близости, тревоге, родительстве
            и тех сценариях, которые иногда трудно заметить изнутри.
          </p>
          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        <nav
          aria-label="Категории статей"
          className="mt-12 flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <a
              key={category.slug}
              href={index === 0 ? "#articles" : `#${category.slug}`}
              className={[
                "rounded-full border px-5 py-2.5 text-sm transition-all",
                index === 0
                  ? "border-[#53614D] bg-[#53614D] text-white"
                  : "border-[#D8CEC1] bg-[#FBF8F3] text-[#625C54] hover:border-[#AFA292] hover:text-[#53614D]",
              ].join(" ")}
            >
              {category.title}
            </a>
          ))}
        </nav>

        <section id="articles" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {articlesData.map((article) => (
              <article
                key={article.slug}
                id={article.categorySlug}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[32px] border border-[#DED5CA] bg-[#FBF8F3] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9AD9C] hover:shadow-[0_18px_45px_rgba(65,55,45,0.08)] md:p-9"
              >
                <div className="absolute right-7 top-7 h-16 w-16 rounded-full border border-[#DED5CA] opacity-50 transition-transform duration-500 group-hover:scale-110" />
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A8072]">
                    {article.category}
                  </p>
                  <h2 className="mt-5 max-w-xl text-3xl leading-tight text-[#2E2B27] transition-colors group-hover:text-[#53614D] md:text-4xl">
                    {article.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#716B63]">
                    {article.description}
                  </p>
                </div>
                <div className="relative z-10 mt-auto pt-8">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-sm font-medium text-[#53614D]"
                  >
                    Читать статью
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/65">
              Мария Куприна
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
              Иногда прочитать о себе бывает первым шагом
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Если какая-то из этих историй оказалась вам близка,
              можно обсудить свою ситуацию лично.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#F7F3ED] px-7 py-3.5 text-base font-medium text-[#53614D] transition-opacity hover:opacity-90"
            >
              Обсудить свою ситуацию
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}