"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints"; // ← новый импорт
import Requests from "@/components/Requests";
import About from "@/components/About";
import Education from "@/components/Education";
import Therapy from "@/components/Therapy";
import Format from "@/components/Format";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { articlesData } from "./articles/articlesData";
import ArticleVisual from "@/components/ArticleVisual";

const categories = [
  { title: "Все статьи", slug: "all" },
  { title: "Отношения", slug: "relations" },
  { title: "Детско-родительские отношения", slug: "parent-child" },
  { title: "Психотерапия", slug: "therapy" },
];

const getColorByCategory = (categorySlug: string) => {
  switch (categorySlug) {
    case "relations":
      return "bg-[#F0E6E0] text-[#A67B6E]";
    case "parent-child":
      return "bg-[#E0EAE5] text-[#6E8F82]";
    case "therapy":
      return "bg-[#E6E0F0] text-[#7B6EA6]";
    default:
      return "bg-[#F0EAE0] text-[#A68B6E]";
  }
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles =
    activeCategory === "all"
      ? articlesData
      : articlesData.filter((a) => a.categorySlug === activeCategory);

  return (
    <main className="bg-[#FDFBF7] text-[#2D2D2D]">
      <Header />
      <Hero />
      <PainPoints /> {/* ← новый блок */}
      <About />
      <Requests />
      <Education />
      <Therapy />
      <Format />

      {/* ===== БЛОК СТАТЕЙ ===== */}
      <section id="articles" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-serif text-4xl text-[#2E2B27] md:text-5xl">
            Статьи
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#716B63]">
            Размышления о психологии, отношениях и семье
          </p>

          <nav className="mt-8 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={[
                  "rounded-full border px-5 py-2.5 text-sm transition-all",
                  activeCategory === cat.slug
                    ? "border-[#53614D] bg-[#53614D] text-white"
                    : "border-[#D8CEC1] bg-[#FBF8F3] text-[#625C54] hover:border-[#AFA292] hover:text-[#53614D]",
                ].join(" ")}
              >
                {cat.title}
              </button>
            ))}
          </nav>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group rounded-2xl border border-[#DED5CA] bg-[#FBF8F3] p-6 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(65,55,45,0.08)]"
              >
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3 ${getColorByCategory(
                    article.categorySlug
                  )}`}
                >
                  {article.category}
                </span>

                <h3 className="mt-3 text-2xl font-serif text-[#2E2B27]">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="transition-colors hover:text-[#53614D]"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[#716B63]">{article.description}</p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-[#53614D] transition-colors hover:text-[#2E2B27]"
                >
                  Читать →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/articles"
              className="inline-block rounded-full border border-[#B9AD9C] px-8 py-3.5 text-sm font-medium text-[#53614D] transition-colors hover:bg-[#53614D] hover:text-white"
            >
              Читать все статьи →
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}