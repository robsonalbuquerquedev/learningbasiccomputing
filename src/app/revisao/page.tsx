"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaCheckCircle } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

// lista de tópicos com slug
const topics = [
    { name: "História do computador", slug: "historia-do-computador" },
    { name: "Sobre a nuvem", slug: "sobre-a-nuvem" },
    { name: "Recursos computacionais", slug: "recursos-computacionais" },
    { name: "Word", slug: "word" },
    { name: "Excel", slug: "excel" },
    { name: "PowerPoint", slug: "powerpoint" },
    { name: "Inteligência artificial e os infinitos recursos", slug: "inteligencia-artificial" },
    { name: "Criando marcas", slug: "criando-marcas" },
    { name: "Digitação", slug: "digitacao" },
    { name: "Sobre o teclado", slug: "sobre-o-teclado" },
    { name: "Sistemas operacionais", slug: "sistemas-operacionais" },
    { name: "Tipos de navegadores", slug: "tipos-de-navegadores" },
    { name: "Código Binário", slug: "codigo-binario" },
    { name: "Área de trabalho / Criando novas pastas", slug: "area-de-trabalho" },
    { name: "Recursos do Google", slug: "recursos-do-google" },
    { name: "Games informática", slug: "games-informatica" },
    { name: "Enviando diferentes e-mails", slug: "enviando-emails" },
    { name: "Sistema drive", slug: "sistema-drive" },
    { name: "Recursos periféricos de entrada", slug: "perifericos-entrada" },
    { name: "Recursos periféricos de saída", slug: "perifericos-saida" },
    { name: "História do teclado e como usá-lo, conhecendo às diferentes teclas", slug: "historia-do-teclado" },
    { name: "Algoritmos", slug: "algoritmos" },
    { name: "Tipos de Dados", slug: "tipos-de-dados" },
    { name: "Elaboração de documentos no Word", slug: "elaboracao-word" },
    { name: "Como montar um ofício", slug: "como-montar-oficio" },
    { name: "Criando logomarcas com a inteligência artificial", slug: "criando-logomarcas-ia" },
];

export default function RevisaoPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const router = useRouter();

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
                📘 Revisão de Conteúdos
            </h1>
            <div className="max-w-4xl mx-auto grid gap-6">
                {topics.map((topic, index) => (
                    <div
                        key={topic.slug}
                        className="bg-white shadow-md rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-semibold text-blue-800 hover:bg-blue-50 transition cursor-pointer"
                        >
                            <span className="flex items-center gap-3">
                                <FaBookOpen className="text-blue-600" /> {topic.name}
                            </span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="px-6 pb-4"
                                >
                                    <p className="text-blue-700 text-base leading-relaxed">
                                        Aqui você poderá revisar e conversar sobre o tema{" "}
                                        <strong>{topic.name}</strong>.
                                    </p>
                                    <div className="mt-4 flex gap-3">
                                        <button
                                            onClick={() =>
                                                router.push(`/revisao/${topic.slug}/atividade`)
                                            }
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                                        >
                                            <FaCheckCircle /> Iniciar atividade
                                        </button>
                                        <button
                                            onClick={() =>
                                                router.push(`/revisao/${topic.slug}/material`)
                                            }
                                            className="flex items-center gap-2 bg-gray-200 text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
                                        >
                                            <MdMenuBook /> Ver material
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </main>
    );
}
