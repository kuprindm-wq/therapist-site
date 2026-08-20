"use client";

import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contactType: "phone",
    contact: "",
    format: "online",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (!formData.contact.trim()) {
      setError("Пожалуйста, укажите контакт для связи.");
      return;
    }

    setLoading(true);
    setError("");

    const controller = new AbortController();

    const timeout = window.setTimeout(() => {
      controller.abort();
    }, 15000);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              "e9541cda-95b4-4806-af3a-e90f54878e21",

            subject:
              "Новая заявка с сайта Марии Куприной",

            from_name:
              "Сайт Марии Куприной",

            name:
              formData.name || "Не указано",

            contact_type:
              getContactTypeLabel(
                formData.contactType
              ),

            contact:
              formData.contact,

            format:
              formData.format === "online"
                ? "Онлайн"
                : "Очно",

            message:
              formData.message || "Не указано",
          }),
          signal: controller.signal,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Не удалось отправить форму");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(
        "Ошибка отправки формы:",
        err
      );

      setError(
        "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь со мной напрямую."
      );
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  function getContactTypeLabel(value: string) {
    const labels: Record<string, string> = {
      phone: "Телефон",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      max: "MAX",
      email: "Email",
    };

    return labels[value] || value;
  }

  if (submitted) {
    return (
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A8072]">
          Готово
        </p>

        <h2 className="mt-4 text-3xl leading-tight text-[#2E2B27] md:text-4xl">
          Спасибо!
        </h2>

        <p className="mt-8 max-w-md leading-8 text-[#5E564E]">
          Ваша заявка успешно отправлена.
          <br />
          <br />
          Я свяжусь с вами в течение одного рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A8072]">
          Запись на консультацию
        </p>

        <h2 className="mt-4 text-3xl leading-tight text-[#2E2B27] md:text-4xl">
          Давайте познакомимся
        </h2>

        <p className="mt-5 max-w-xl leading-8 text-[#5E564E]">
          Заполните форму ниже, чтобы рассказать немного о себе
          и выбрать удобный способ связи.
        </p>
      </div>

      <div>
        <label className="mb-3 block text-sm text-[#746D64]">
          Ваше имя{" "}
          <span className="text-[#A69D92]">
            (необязательно)
          </span>
        </label>

        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          placeholder="Как к вам обращаться"
          className="w-full border-0 border-b border-[#DDD4C8] bg-transparent px-0 py-3 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-4 block text-sm text-[#746D64]">
          Как с вами удобнее связаться?
        </label>

        <div className="grid grid-cols-2 gap-3">
          {[
            ["phone", "Телефон"],
            ["telegram", "Telegram"],
            ["whatsapp", "WhatsApp"],
            ["max", "MAX"],
            ["email", "Email"],
          ].map(([value, label]) => (
            <label
              key={value}
              className={`cursor-pointer rounded-xl border border-[#E5DDD3] px-4 py-3 transition hover:border-[#53614D] ${
                value === "email"
                  ? "col-span-2"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="contact"
                  checked={
                    formData.contactType === value
                  }
                  onChange={() =>
                    setFormData({
                      ...formData,
                      contactType: value,
                    })
                  }
                />

                <span>{label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm text-[#746D64]">
          Телефон, ник или адрес электронной почты
        </label>

        <input
          type="text"
          required
          value={formData.contact}
          onChange={(e) =>
            setFormData({
              ...formData,
              contact: e.target.value,
            })
          }
          placeholder="Контакт для связи"
          className="w-full border-0 border-b border-[#DDD4C8] bg-transparent px-0 py-3 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-4 block text-sm text-[#746D64]">
          Формат встречи
        </label>

        <div className="grid grid-cols-2 gap-3">
          {[
            ["online", "Онлайн"],
            ["offline", "Очно"],
          ].map(([value, label]) => (
            <label
              key={value}
              className="cursor-pointer rounded-xl border border-[#E5DDD3] px-5 py-4 transition hover:border-[#53614D]"
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="format"
                  checked={
                    formData.format === value
                  }
                  onChange={() =>
                    setFormData({
                      ...formData,
                      format: value,
                    })
                  }
                />

                <span>{label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm text-[#746D64]">
          О чём вы хотели бы поговорить?{" "}
          <span className="text-[#A69D92]">
            (необязательно)
          </span>
        </label>

        <textarea
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          placeholder="Если хотите, можете коротко описать ситуацию..."
          className="w-full resize-none rounded-2xl border border-[#E5DDD3] bg-transparent p-5 leading-8 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
        />
      </div>

      <div className="space-y-5">
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#53614D] py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#465341] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Отправка..."
            : "Записаться"}
        </button>

        <p className="text-center text-sm leading-7 text-[#8A8177]">
          Обычно я отвечаю в течение одного рабочего дня.
          Если сообщение отправлено вечером или в выходной,
          ответ может прийти немного позже.
        </p>
      </div>
    </form>
  );
}