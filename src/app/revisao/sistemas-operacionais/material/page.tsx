"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMicrochip, FaArrowLeft, FaPlayCircle } from "react-icons/fa";

export default function SistemasOperacionaisMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-green-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-green-200 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-green-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Sistemas Operacionais</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaMicrochip className="text-green-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-green-900">
                        💻 O que é um Sistema Operacional?
                    </h1>
                </div>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Entenda o papel do sistema operacional no funcionamento do computador e conheça seus principais tipos e exemplos.
                </p>
            </header>

            {/* Introdução com vídeo */}
            <section className="px-6 md:px-12 py-10">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-green-100 p-6"
                >
                    <h2 className="text-xl font-bold text-green-800 mb-3">
                        🎥 O que é um Sistema Operacional e exemplos
                    </h2>

                    <div className="flex justify-center mb-6">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/yjfB-asZVF4?si=hxnc4r69xV3YXmhH"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl shadow-md w-full md:w-[560px] h-[315px]"
                        ></iframe>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Um computador precisa de **hardware** e **software** para funcionar.
                        E o sistema operacional é o **software essencial** — o primeiro programa executado quando ligamos o computador.
                    </p>

                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                        Ele pode ser entendido como uma **ponte entre o usuário e o computador**.
                        Sua principal função é **traduzir a linguagem da máquina** (binária) para uma linguagem compreensível pelos humanos.
                    </p>
                </motion.article>
            </section>

            {/* Funções principais */}
            <section className="px-6 md:px-12 pb-12 grid md:grid-cols-2 gap-8">
                <motion.article
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-green-100"
                >
                    <h3 className="text-lg font-semibold text-green-800 mb-2">⚙️ Funções do Sistema Operacional</h3>
                    <ul className="list-disc text-sm text-gray-700 pl-5 space-y-1">
                        <li>Gerenciar os recursos do computador (memória, processador, dispositivos).</li>
                        <li>Controlar o uso do teclado, mouse e periféricos.</li>
                        <li>Gerenciar a execução de programas.</li>
                        <li>Traduzir os comandos do usuário para o computador.</li>
                        <li>Oferecer uma interface amigável para interação.</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        Sem o sistema operacional, o computador seria muito difícil de usar, exigindo conhecimento técnico avançado em comandos.
                    </p>
                </motion.article>

                <motion.article
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-green-100"
                >
                    <h3 className="text-lg font-semibold text-green-800 mb-2">🌐 Exemplos de Sistemas Operacionais</h3>
                    <ul className="list-disc text-sm text-gray-700 pl-5 space-y-2">
                        <li><strong>Windows:</strong> o mais popular em computadores pessoais.</li>
                        <li><strong>Linux:</strong> sistema livre e muito usado em servidores e programadores.</li>
                        <li><strong>macOS:</strong> sistema exclusivo dos computadores da Apple.</li>
                        <li><strong>Android:</strong> sistema do Google, usado em smartphones de várias marcas.</li>
                        <li><strong>iOS:</strong> sistema da Apple para iPhones e iPads.</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        Cada um tem sua aparência, funções e público específico, mas todos cumprem o mesmo papel:
                        **fazer a ponte entre o usuário e o computador**.
                    </p>
                </motion.article>
            </section>

            {/* Conceitos importantes */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-green-100"
                >
                    <h2 className="text-xl font-bold text-green-800 mb-2">🧩 Objetivos do Sistema Operacional</h2>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Todo sistema operacional tem **dois objetivos principais**:
                    </p>
                    <ul className="list-decimal pl-5 text-sm text-gray-700 space-y-1 mt-2">
                        <li><strong>Abstração:</strong> simplificar o uso do computador, escondendo detalhes complexos do hardware.</li>
                        <li><strong>Gerência de recursos:</strong> administrar o uso da memória, processador e dispositivos de forma equilibrada.</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        Esses objetivos garantem que o computador funcione de maneira eficiente e fácil para o usuário.
                    </p>
                </motion.article>

                {/* Navegação */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        href="/revisao"
                        className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 underline"
                    >
                        <FaArrowLeft /> Voltar à Revisão
                    </Link>

                    <Link
                        href="/revisao/sistemas-operacionais/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition"
                    >
                        <FaPlayCircle /> Ir para Atividade
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-green-900/80">
                <p>
                    Dica do professor: o sistema operacional é o coração do computador — sem ele, todo o hardware seria apenas um monte de peças. 💚💻
                </p>
            </footer>
        </main>
    );
}
