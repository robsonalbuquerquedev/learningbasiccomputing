"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HistoriaComputadorMaterial() {
    const generations = [
        {
            title: "1ª Geração (1940-1956)",
            image: "/eniac.png",
            description: "Usavam válvulas e cartões perfurados. Computadores enormes e lentos.",
            details: "Inventor famoso: John Presper Eckert. Componentes: válvulas, cartões perfurados.",
        },
        {
            title: "2ª Geração (1956-1963)",
            image: "/transistor.png",
            description: "Substituíram as válvulas por transistores, tornando os computadores menores e mais confiáveis.",
            details: "Transistores substituem válvulas. Inventores: Bell Labs.",
        },
        {
            title: "3ª Geração (1964-1971)",
            image: "/computer-3rd-gen.png",
            description: "Introdução de circuitos integrados, mais velocidade e menor tamanho.",
            details: "Circuitos integrados reduzem tamanho e custo. Computadores comerciais começam a surgir.",
        },
        {
            title: "4ª Geração (1971-1980)",
            image: "/processador-4004.png",
            description: "Chegam os microprocessadores e computadores pessoais, mais acessíveis.",
            details: "Microprocessador Intel 4004. Popularização dos PCs nas empresas e residências.",
        },
        {
            title: "5ª Geração (1980 até hoje)",
            image: "/tiposdecomputadores.png",
            description: "Uso de IA, notebooks, tablets e celulares poderosos.",
            details: "Inteligência artificial, redes de computadores, internet, computadores móveis.",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex flex-col items-center p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-10 text-center">
                📜 História do Computador
            </h1>

            <p className="text-lg md:text-xl text-center max-w-3xl text-blue-800 mb-12 hidden md:block">
                Vamos conhecer como os computadores surgiram e evoluíram ao longo do tempo!
                Passe o mouse sobre cada geração para mais detalhes.
            </p>

            <p className="text-lg text-center max-w-3xl text-blue-800 mb-12 md:hidden">
                Vamos conhecer como os computadores surgiram e evoluíram ao longo do tempo!
            </p>
            
            {/* TIMELINE INTERATIVA */}
            <section className="relative w-full max-w-5xl">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-300" />

                {generations.map((gen, index) => (
                    <motion.div
                        key={index}
                        className={`mb-12 w-full flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-sm relative cursor-pointer"
                        >
                            {/* Circle indicator */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-white z-10" />

                            <Image
                                src={gen.image}
                                alt={gen.title}
                                width={300}
                                height={200}
                                className="mx-auto mb-4 rounded-lg object-contain"
                            />
                            <h2 className="text-2xl font-semibold text-blue-900 mb-2">{gen.title}</h2>
                            <p className="text-blue-700">{gen.description}</p>

                            {/* DETALHES EXTRAS AO PASSAR O MOUSE */}
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                whileHover={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="mt-3 overflow-hidden bg-blue-50 rounded-lg p-3 text-blue-800"
                            >
                                {gen.details}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}

                {/* Curiosidade final */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: generations.length * 0.3 }}
                    className="mb-12 w-full flex flex-col md:flex-row justify-center gap-6"
                >
                    {/* Curiosidade Bug */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-md text-center">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Curiosidade!</h2>
                        <Image
                            src="/bug.png"
                            alt="Bug - Mariposa"
                            width={150}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <p className="text-blue-700">
                            A palavra <strong>“bug”</strong> veio de um inseto real! Uma mariposa ficou presa dentro de um computador antigo, causando problemas e inspirando o termo para indicar erros.
                        </p>
                    </div>

                    {/* Curiosidade Ábaco */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-md text-center">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Curiosidade!</h2>
                        <Image
                            src="/abaco.png"
                            alt="Ábaco"
                            width={150}
                            height={100}
                            className="mx-auto mb-4"
                        />
                        <p className="text-blue-700">
                            O <strong>ábaco</strong> é um dos primeiros dispositivos de cálculo da história, usado há milhares de anos para auxiliar em operações matemáticas.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* VIDEO */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl mb-12"
            >
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">🎥 Veja na prática!</h2>
                <div
                    className="relative w-full rounded-2xl overflow-hidden shadow-lg"
                    style={{ paddingTop: "56.25%" }}
                >
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/sz6JMMMSOkM?si=Bwc2SlnTbMG2rIc5"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.section>

            {/* BACK BUTTON */}
            <Link href="/revisao">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    ← Voltar para Revisão
                </motion.button>
            </Link>
        </main>
    );
}
