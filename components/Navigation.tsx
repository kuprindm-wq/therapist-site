import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-8 text-sm font-medium text-[#7B705F]">
      <a href="#about" className="transition-colors hover:text-[#53614D]">
        Обо мне
      </a>

      <a href="#requests" className="transition-colors hover:text-[#53614D]">
        Направления
      </a>

      {/* НОВЫЕ СТРАНИЦЫ */}
      <Link href="/psychologist-for-relationships" className="transition-colors hover:text-[#53614D]">
        Психолог по отношениям
      </Link>

      <Link href="/couple-therapy" className="transition-colors hover:text-[#53614D]">
        Психолог для пары
      </Link>

      <Link href="/panic-attacks" className="transition-colors hover:text-[#53614D]">
        Панические атаки
      </Link>

      <a href="#articles" className="transition-colors hover:text-[#53614D]">
        Статьи
      </a>

      <a href="#contact" className="transition-colors hover:text-[#53614D]">
        Контакты
      </a>
    </nav>
  );
}