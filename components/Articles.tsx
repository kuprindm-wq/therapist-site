const articles = [
  {
    href: "/articles/need-therapist",
    category: "Психотерапия",
    title: "Как понять, что нужен психотерапевт",
    description:
      "Не обязательно ждать кризиса. Иногда самое важное — вовремя заметить, что привычный способ справляться с жизнью больше не работает.",
  },
  {
    href: "/articles/child-anger",
    category: "Детско-родительские отношения",
    title: "Когда ребёнок злится на родителей",
    description:
      "За детской злостью не всегда стоит проблема поведения. Иногда за ней оказывается потребность в самостоятельности, доверии и близости.",
  },
  {
    href: "/articles/parent-guilt",
    category: "Родительство",
    title: "Почему родители так часто чувствуют себя виноватыми",
    description:
      "Родительство легко превращается в бесконечный экзамен на правильность. Но ребёнку нужен не идеальный родитель, а живой человек, к которому можно возвращаться.",
  },
  {
    href: "/articles/parental-control",
    category: "Детско-родительские отношения",
    title: "Когда забота превращается в контроль",
    description:
      "Иногда за проверками, запретами и тревогой стоит не недоверие к ребёнку, а страх самого родителя.",
  },
  {
    href: "/articles/similar-partners",
    category: "Отношения",
    title: "Почему мы снова выбираем похожих партнёров",
    description:
      "Новый человек, новые отношения — а через некоторое время всё снова оказывается удивительно знакомым.",
  },
  {
    href: "/articles/family-stop-hearing",
    category: "Семейные отношения",
    title: "Почему в семье мы перестаём слышать друг друга",
    description:
      "Иногда люди много разговаривают, но всё меньше чувствуют, что их действительно слышат.",
  },
];

const categories = [
  "Все",
  "Отношения",
  "Семейные отношения",
  "Детско-родительские отношения",
  "Родительство",
  "Психотерапия",
];

export default function Articles() {
  return (
    <section id="articles" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="mb-14 max-w-3xl">
        <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#7B705F]">
          Статьи
        </p>

        <h2 className="text-4xl leading-tight text-[#2E2B27] md:text-5xl">
          О психологии,
          <br />
          отношениях и семье
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#716B63]">
          Здесь я разбираю не только психологические понятия, но и ситуации,
          в которых человек может узнать себя, свои отношения или свою семью.
        </p>
      </div>

      <div className="mb-14 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <span
            key={category}
            className={
              index === 0
                ? "rounded-full bg-[#53614D] px-5 py-2.5 text-sm text-white"
                : "rounded-full border border-[#D5CCBE] px-5 py-2.5 text-sm text-[#716B63]"
            }
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            className="group block border-t border-[#D5CCBE] pt-7"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#8A8072]">
              {article.category}
            </p>

            <h3 className="mb-5 max-w-xl text-2xl leading-tight text-[#2E2B27] transition-colors duration-300 group-hover:text-[#53614D] md:text-3xl">
              {article.title}
            </h3>

            <p className="max-w-xl text-base leading-7 text-[#716B63]">
              {article.description}
            </p>

            <p className="mt-6 text-sm font-medium text-[#53614D]">
              Читать статью →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}