import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
});


const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Мария Куприна — психолог",
  description:
    "Парный терапевт и гештальт-терапевт. Индивидуальные консультации и работа с отношениями.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">

      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >

        {children}

      </body>

    </html>
  );
}