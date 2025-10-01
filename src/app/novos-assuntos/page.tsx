// src/app/novos-assuntos/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLaptop, FaNetworkWired, FaRobot, FaAppStore } from "react-icons/fa";

const newTopics = [
    { name: "Computador", slug: "computer", icon: <FaLaptop className="text-white w-8 h-8" />, color: "bg-blue-500" },
    { name: "Internet", slug: "internet", icon: <FaNetworkWired className="text-white w-8 h-8" />, color: "bg-purple-500" },
    { name: "Aplicações", slug: "aplicacoes", icon: <FaAppStore className="text-white w-8 h-8" />, color: "bg-yellow-500" },
    { name: "Redes", slug: "redes", icon: <FaNetworkWired className="text-white w-8 h-8" />, color: "bg-green-500" },
    { name: "Inteligência Artificial", slug: "inteligencia-artificial", icon: <FaRobot className="text-white w-8 h-8" />, color: "bg-pink-500" },
];

export default function NovosAssuntosPage() {
    return (
        <main className="min-h-screen bg-green-50 flex flex-col items-center p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-8 text-center">
                🌐 Novos Assuntos
            </h1>
            <p className="text-lg md:text-xl text-green-800 text-center max-w-3xl mb-10">
                Aqui você encontra conteúdos novos e interessantes de informática e tecnologia. Escolha um tema e explore!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {newTopics.map((topic, index) => (
                    <Link key={topic.slug} href={`/${topic.slug}`}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg cursor-pointer ${topic.color}`}
                        >
                            <div className="mb-4">{topic.icon}</div>
                            <h2 className="text-2xl font-bold text-white">{topic.name}</h2>
                            <p className="text-white text-center mt-2">
                                Clique para aprender sobre {topic.name} de forma divertida e fácil!
                            </p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
