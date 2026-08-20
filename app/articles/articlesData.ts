// app/articles/articlesData.ts
export interface ArticleMeta {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
}

export const articlesData: ArticleMeta[] = [
  // Детско-родительские
  {
    slug: "child-motivation",
    category: "Детско-родительские отношения",
    categorySlug: "parent-child",
    title: "Ребёнок потерял мотивацию: что делать?",
    description: "Как вернуть подростку право хотеть, а не просто «должен».",
  },
  {
    slug: "letter-mother-son",
    category: "Детско-родительские отношения",
    categorySlug: "parent-child",
    title: "Письмо мамы взрослому сыну",
    description: "Почему иногда отпустить — значит продолжать любить.",
  },
  {
    slug: "mother-did-everything",
    category: "Детско-родительские отношения",
    categorySlug: "parent-child",
    title: "Мама сделала для меня всё, но почему-то не хватило",
    description: "Как признать благодарность и одновременно свою боль.",
  },
  {
    slug: "parental-control",
    category: "Детско-родительские отношения",
    categorySlug: "parent-child",
    title: "Родительский контроль: забота или тревога?",
    description: "Как отличить здоровую заботу от контроля, который душит.",
  },
  // Отношения
  {
    slug: "similar-partners",
    category: "Отношения",
    categorySlug: "relations",
    title: "Почему мы выбираем одних и тех же партнёров?",
    description: "Как детский опыт определяет наш выбор, и можно ли это изменить.",
  },
  {
    slug: "proof-of-love-after-conflict",
    category: "Отношения",
    categorySlug: "relations",
    title: "Доказательства любви после ссоры",
    description: "Как перестать требовать гарантий и научиться выдерживать неопределённость.",
  },
  {
    slug: "man-never-angry",
    category: "Отношения",
    categorySlug: "relations",
    title: "Мужчина, который никогда не злится",
    description: "Что скрывается за вечным спокойствием и как вернуть себе право на злость.",
  },
  {
    slug: "good-girl",
    category: "Отношения",
    categorySlug: "relations",
    title: "Хорошая девочка: удобная стратегия, которая перестала работать",
    description: "Как привычка быть удобной мешает жить своей жизнью.",
  },
  // Психотерапия
  {
    slug: "normal-life-no-desire",
    category: "Психотерапия",
    categorySlug: "therapy",
    title: "Нормальная жизнь без желания",
    description: "Когда всё хорошо, но внутри пусто — и как это менять.",
  },
  {
    slug: "cannot-rest",
    category: "Психотерапия",
    categorySlug: "therapy",
    title: "Не умею отдыхать: как перестать быть вечным солдатом",
    description: "Когда тело выключается раньше, чем ты разрешаешь себе остановку.",
  },
  {
    slug: "leave-me-alone",
    category: "Психотерапия",
    categorySlug: "therapy",
    title: "Оставьте меня в покое: просьба, за которой стоит усталость",
    description: "Как перестать быть спасателем и разрешить себе не быть нужным каждую минуту.",
  },
  {
    slug: "question-no-one-upset",
    category: "Психотерапия",
    categorySlug: "therapy",
    title: "Вопрос, который редко задают: «А если никто не расстроится?»",
    description: "Как страх разочаровать других мешает нам выбирать себя.",
  },
];