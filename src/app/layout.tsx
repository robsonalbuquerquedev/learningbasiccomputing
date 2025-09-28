import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Basic Computing",
  description: "Um jeito divertido e simples de aprender informática! Descubra como os computadores funcionam e explore conteúdos criados especialmente para crianças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
