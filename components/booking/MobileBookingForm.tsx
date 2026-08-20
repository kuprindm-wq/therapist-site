"use client";

import { useState } from "react";

type MobileBookingFormProps = {
  onClose: () => void;
};

export default function MobileBookingForm({
  onClose,
}: MobileBookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contactType: "phone",
    contact: "",
    format: "online",
  });

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
              getContactTypeLabel(formData.contactType),

            contact:
              formData.contact,

            format:
              formData.format === "online"
                ? "Онлайн"
                : "Очно",
          }),
          signal: controller.signal,
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Не удалось отправить форму"
        );
      }

      setSubmitted(true);
    } catch (err) {
      console.error(
        "Ошибка отправки мобильной формы:",
        err
      );

      if (
        err instanceof DOMException &&
        err.name === "AbortError"
      ) {
        setError(
          "Запрос выполняется слишком долго. Проверьте интернет-соединение и попробуйте ещё раз."
        );
      } else {
        setError(
          "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь со мной напрямую."
        );
      }
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col bg-[#FCFAF6] p-6">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5CCBE] text-xl leading-none text-[#59544D] transition hover:border-[#53614D] hover:text-[#53614D]"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A8072]">
            Готово
          </p>

          <h2 className="mt-4 text-3xl leading-tight text-[#2E2B27]">
            Спасибо!
          </h2>

          <p className="mt-6 leading-7 text-[#5E564E]">
            Ваша заявка успешно отправлена.
          </p>

          <p className="mt-4 leading-7 text-[#5E564E]">
            Я свяжусь с вами в течение одного рабочего дня.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-8 w-full rounded-full bg-[#53614D] py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-[#465341]"
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col bg-[#FCFAF6]">
      <div className="flex shrink-0 items-start justify-between p-6 pb-0">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A8072]">
            Запись
          </p>

          <h2 className="mt-2 text-2xl leading-tight text-[#2E2B27]">
            Оставьте контакты
          </h2>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5CCBE] text-xl leading-none text-[#59544D] transition hover:border-[#53614D] hover:text-[#53614D]"
        >
          ×
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-7 flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-6"
      >
        <div>
          <label className="mb-2 block text-sm text-[#746D64]">
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
            className="w-full border-0 border-b border-[#DDD4C8] bg-transparent px-0 py-2.5 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="mb-3 block text-sm text-[#746D64]">
            Как с вами связаться?
          </label>

          <div className="grid grid-cols-2 gap-2">
            {[
              ["phone", "Телефон"],
              ["telegram", "Telegram"],
              ["whatsapp", "WhatsApp"],
              ["max", "MAX"],
              ["email", "Email"],
            ].map(([value, label]) => (
              <label
                key={value}
                className={`cursor-pointer rounded-lg border border-[#E5DDD3] px-3 py-2.5 text-sm text-[#59544D] transition hover:border-[#53614D] ${
                  value === "email"
                    ? "col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mobile-contact"
                    value={value}
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

        <div className="mt-5">
          <label className="mb-2 block text-sm text-[#746D64]">
            Контакт для связи
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
            placeholder="Телефон, ник или email"
            className="w-full border-0 border-b border-[#DDD4C8] bg-transparent px-0 py-2.5 text-[#2E2B27] placeholder:text-[#A89E92] focus:border-[#53614D] focus:outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="mb-3 block text-sm text-[#746D64]">
            Формат встречи
          </label>

          <div className="grid grid-cols-2 gap-2">
            {[
              ["online", "Онлайн"],
              ["offline", "Очно"],
            ].map(([value, label]) => (
              <label
                key={value}
                className="cursor-pointer rounded-lg border border-[#E5DDD3] px-4 py-2.5 text-sm text-[#59544D] transition hover:border-[#53614D]"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="mobile-format"
                    value={value}
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

        {error && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs leading-5 text-red-700">
            {error}
          </p>
        )}

        <div className="mt-auto pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#53614D] py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-[#465341] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Отправка..." : "Записаться"}
          </button>

          <p className="mt-3 text-center text-xs leading-5 text-[#8A8177]">
            Отвечу в течение одного рабочего дня.
          </p>
        </div>
      </form>
    </div>
  );
}
