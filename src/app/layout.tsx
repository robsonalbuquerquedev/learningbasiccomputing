import type { Metadata } from "next";
import "./globals.css";

// Importando Header e Footer
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Learning Basic Computing",
  description:
    "Um jeito divertido e simples de aprender informática! Descubra como os computadores funcionam e explore conteúdos criados especialmente para crianças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header fixo no topo */}
        <Header />

        {/* Conteúdo principal cresce para ocupar o espaço restante */}
        <main className="flex-grow">{children}</main>

        {/* Footer fixo no final */}
        <Footer />
      </body>
    </html>
  );
}
