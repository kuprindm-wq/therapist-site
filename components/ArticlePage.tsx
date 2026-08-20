"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

type ArticlePageProps = {
  category: string;
  title: string;
  intro: string;
  slug?: string;
  children: ReactNode;
};

const articles = [
  {
    slug: "child-anger",
    category: "Детско-родительские отношения",
    title: "Когда ребёнок злится на родителей",
  },
  {
    slug: "parental-control",
    category: "Детско-родительские отношения",
    title: "Когда забота превращается в контроль",
  },
  {
    slug: "parent-guilt",
    category: "Детско-родительские отношения",
    title: "Почему родители так часто чувствуют себя виноватыми",
  },
  {
    slug: "family-stop-hearing",
    category: "Отношения",
    title: "Почему в семье мы перестаём слышать друг друга",
  },
  {
    slug: "similar-partners",
    category: "Отношения",
    title: "Почему мы снова выбираем похожих партнёров",
  },
  {
    slug: "need-therapist",
    category: "Психотерапия",
    title: "Как понять, что нужен психотерапевт",
  },
];

export default function ArticlePage({
  category,
  title,
  intro,
  children,
}: ArticlePageProps) {
  const currentIndex = articles.findIndex(
    (article) => article.title === title
  );

  const previousArticle =
    currentIndex > 0 ? articles[currentIndex - 1] : null;

  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  const relatedArticles = articles
    .filter((article) => article.title !== title)
    .filter((article) => article.category === category)
    .slice(0, 3);

  // === МИКРОРАЗМЕТКА ARTICLE (JSON-LD) ===
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": intro,
    "author": {
      "@type": "Person",
      "name": "Мария Куприна",
      "url": "https://mariakuprina.ru",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Мария Куприна",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mariakuprina.ru/terap.jpg",
      },
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://mariakuprina.ru",
    },
  };

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#2E2B27]">
      {/* === JSON-LD МИКРОРАЗМЕТКА === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-6 md:py-20">
        {/* Навигация назад */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
          >
            ← На главную
          </Link>

          <Link
            href="/articles"
            className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
          >
            Все статьи →
          </Link>
        </div>

        {/* Заголовок */}
        <header className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7B705F]">
            {category}
          </p>

          <h1 className="mt-5 text-4xl leading-[1.08] text-[#2E2B27] sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#716B63] md:text-xl md:leading-9">
            {intro}
          </p>

          {/* === ОГЛАВЛЕНИЕ === */}
          <TableOfContents />

          <div className="mt-8 h-px w-20 bg-[#B9AD9C]" />
        </header>

        {/* КОНТЕНТ СТАТЬИ */}
        <div className="mt-12">
          <div className="max-w-2xl mx-auto">
            {children}
          </div>
        </div>

        {/* Похожие статьи */}
        <section className="mt-16 border-t border-[#D8CEC1] pt-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8A8072]">
            Другие материалы
          </p>

          <h2 className="mt-4 text-3xl leading-tight text-[#2E2B27] md:text-4xl">
            Возможно, вам будет интересно продолжить
          </h2>

          {relatedArticles.length > 0 && (
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group rounded-3xl border border-[#DED5CA] bg-[#FBF8F3] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9AD9C] hover:shadow-[0_12px_35px_rgba(65,55,45,0.08)]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8A8072]">
                    {article.category}
                  </p>

                  <h3 className="mt-4 text-xl leading-7 text-[#2E2B27] transition-colors group-hover:text-[#53614D]">
                    {article.title}
                  </h3>

                  <span className="mt-6 inline-block text-sm text-[#53614D]">
                    Читать →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Навигация по статьям */}
        <nav
          aria-label="Навигация по статьям"
          className="mt-12 grid gap-4 border-t border-[#D8CEC1] pt-8 sm:grid-cols-2"
        >
          {previousArticle ? (
            <Link
              href={`/articles/${previousArticle.slug}`}
              className="group rounded-3xl border border-[#DED5CA] bg-[#FBF8F3] p-6 transition-all duration-300 hover:border-[#B9AD9C] hover:shadow-[0_10px_30px_rgba(65,55,45,0.06)]"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#8A8072]">
                ← Предыдущая статья
              </span>

              <span className="mt-3 block text-lg leading-7 text-[#2E2B27] group-hover:text-[#53614D]">
                {previousArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle ? (
            <Link
              href={`/articles/${nextArticle.slug}`}
              className="group rounded-3xl border border-[#DED5CA] bg-[#FBF8F3] p-6 text-left sm:text-right transition-all duration-300 hover:border-[#B9AD9C] hover:shadow-[0_10px_30px_rgba(65,55,45,0.06)]"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#8A8072]">
                Следующая статья →
              </span>

              <span className="mt-3 block text-lg leading-7 text-[#2E2B27] group-hover:text-[#53614D]">
                {nextArticle.title}
              </span>
            </Link>
          ) : null}
        </nav>

        {/* КОММЕРЧЕСКИЙ БЛОК */}
        <section className="mt-16 border-t border-[#D8CEC1] pt-12">
          <div className="rounded-[32px] bg-[#53614D] px-7 py-10 text-white md:px-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/65">
              Психотерапия
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
              Если вы узнали в этой статье свою ситуацию
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Не обязательно сразу понимать, что именно происходит.
              Иногда разобраться в этом легче вместе со специалистом.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex rounded-full bg-[#F7F3ED] px-7 py-3.5 text-base font-medium text-[#53614D] transition-opacity hover:opacity-90"
            >
              Обсудить свою ситуацию
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/articles"
            className="text-sm text-[#7B705F] transition-colors hover:text-[#53614D]"
          >
            ← Вернуться ко всем статьям
          </Link>
        </div>
      </article>
    </main>
  );
}

// === КОМПОНЕНТ ОГЛАВЛЕНИЯ ===
function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    // Ищем все заголовки h2 в статье
    const elements = document.querySelectorAll("article h2");
    const items = Array.from(elements).map((el) => ({
      id: el.id || el.textContent?.toLowerCase().replace(/\s/g, "-") || "",
      text: el.textContent || "",
    }));
    setHeadings(items);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="mt-8 rounded-2xl bg-[#F5F0EB] p-6 border-l-4 border-[#C49A7C]">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#6B7560]">
        Содержание
      </p>
      <nav className="mt-3">
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index}>
              <a
                href={`#${heading.id}`}
                className="text-sm text-[#59544D] hover:text-[#53614D] transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}