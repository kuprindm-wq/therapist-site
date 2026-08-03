"use client";

const links = [
  {
    name: "Обо мне",
    href: "#about",
  },
  {
    name: "Направления",
    href: "#work",
  },
  {
    name: "Контакты",
    href: "#contact",
  },
];

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[#59544D] transition-colors duration-200 hover:text-[#53614D]"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}