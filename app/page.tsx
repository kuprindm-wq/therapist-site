"use client";

import { useState, useEffect } from "react"; // ← добавлен useEffect
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Requests from "@/components/Requests";
import About from "@/components/About";
import Education from "@/components/Education";
import Therapy from "@/components/Therapy";
import Format from "@/components/Format";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { articlesData } from "./articles/articlesData";
// ... остальные импорты

const categories = [ /* ... как было */ ];

const getColorByCategory = (categorySlug: string) => { /* ... как было */ };

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  // === НОВЫЙ ЭФФЕКТ ДЛЯ ПРОКРУТКИ К ЯКОРЮ ===
  useEffect(() => {
    // Проверяем, есть ли якорь в URL
    const hash = window.location.hash;
    if (hash === "#requests") {
      // Ищем элемент с id="requests"
      const element = document.getElementById("requests");
      if (element) {
        // Плавно прокручиваем к элементу
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []); // Пустой массив — эффект сработает только один раз при загрузке

  // ... остальной код (фильтрация статей и т.д.)
}