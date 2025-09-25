import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O que é um Computador?",
  description: "O computador é como uma pessoa: cada parte tem uma função.",
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
