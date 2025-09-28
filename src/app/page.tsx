"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6 md:p-12">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-6"
      >
        💻 Learning Basic Computing
      </motion.h1>

      {/* Descrição */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-blue-800 text-center max-w-3xl mb-10"
      >
        Descubra o universo da informática de forma divertida e prática! Explore computadores, internet, redes, softwares e recursos tecnológicos, aprendendo passo a passo aquilo que é essencial para o seu crescimento digital. Novos assuntos serão apresentados conforme o aprendizado, conectando teoria e prática de maneira envolvente.
      </motion.p>

      {/* Imagem ilustrativa */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-10"
      >
        <Image
          src="/computer-home.png" // você pode trocar para uma imagem divertida ou GIF
          alt="Ilustração de computador"
          width={400}
          height={250}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Botões de navegação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <Link href="/revisao">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold cursor-pointer"
          >
            📘 Revisão de conteúdos
          </motion.button>
        </Link>

        <Link href="/novos-assuntos">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold cursor-pointer"
          >
            🌐 Novos assuntos
          </motion.button>
        </Link>
      </motion.div>

      {/* Frase motivacional */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 text-blue-800 text-center text-lg md:text-xl max-w-2xl"
      >
        Vamos explorar o mundo dos computadores juntos! 🚀
      </motion.p>
    </main>
  );
}
