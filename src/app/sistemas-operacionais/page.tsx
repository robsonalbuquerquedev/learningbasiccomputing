"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMicrochip, FaArrowLeft } from "react-icons/fa";

export default function SistemasOperacionaisTipos() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-emerald-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-emerald-200 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-emerald-700">
                    <Link href="/" className="underline hover:no-underline">
                        Início
                    </Link>{" "}
                    / <span className="font-semibold">Sistemas Operacionais</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaMicrochip className="text-emerald-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-emerald-900">
                        💻 Conheça os Tipos de Sistemas Operacionais
                    </h1>
                </div>
                <p className="mt-2 text-gray-700 max-w-3xl">
                    Entenda como os sistemas operacionais evoluíram e conheça seus principais tipos: monoprogramáveis, multiprogramáveis e multiprocessadores.
                </p>
            </header>

            {/* Vídeo */}
            <section className="px-6 md:px-12 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 text-center"
                >
                    <h2 className="text-xl font-bold text-emerald-800 mb-4">
                        🎥 Assista: Tipos de Sistemas Operacionais
                    </h2>
                    <div className="flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/44P_feaO1EU?si=H_CtyD7CpXsXhnlO"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl shadow-md w-full md:w-[560px] h-[315px]"
                        ></iframe>
                    </div>
                </motion.div>
            </section>

            {/* Conteúdo explicativo */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-emerald-100 p-6 leading-relaxed"
                >
                    <h2 className="text-xl font-bold text-emerald-800 mb-3">🧠 Evolução e Tipos de Sistemas Operacionais</h2>
                    <p className="text-sm text-gray-700 mb-4">
                        Os sistemas operacionais evoluíram junto com o hardware e as aplicações.
                        Basicamente, eles são divididos em **três tipos principais**:
                    </p>

                    {/* Monoprogramável */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-emerald-700 mb-2">1️⃣ Monoprogramáveis ou Monotarefa</h3>
                        <p className="text-sm text-gray-700">
                            Como o próprio nome sugere, são sistemas projetados para executar **apenas um programa por vez**.
                            Enquanto uma aplicação é executada, as demais precisam aguardar sua conclusão.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Isso fazia com que o processador e a memória ficassem dedicados exclusivamente a uma tarefa, gerando desperdício de recursos.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            💡 <strong>Exemplo:</strong> <em>MS-DOS</em>, um sistema antigo da Microsoft, é um clássico exemplo de sistema monoprogramável.
                        </p>
                    </div>

                    {/* Multiprogramável */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-emerald-700 mb-2">2️⃣ Multiprogramáveis ou Multitarefas</h3>
                        <p className="text-sm text-gray-700">
                            Esses sistemas permitem que **vários programas sejam executados ao mesmo tempo**, compartilhando o processador, a memória e outros recursos.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Isso significa que, enquanto um programa espera por um evento (como um clique do mouse), outros podem continuar sendo processados.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            💡 <strong>Exemplo:</strong> Windows, Linux e macOS são sistemas multitarefas modernos.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            ✅ <strong>Vantagens:</strong> menor tempo de resposta, melhor aproveitamento de recursos e custo computacional reduzido.
                        </p>
                    </div>

                    {/* Multiprocessador */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-emerald-700 mb-2">3️⃣ Sistemas Multiprocessadores</h3>
                        <p className="text-sm text-gray-700">
                            Esses sistemas possuem **dois ou mais processadores** interligados, que trabalham de forma simultânea e cooperativa.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Isso permite que vários programas sejam executados ao mesmo tempo, ou que um mesmo programa seja dividido em partes para ser processado mais rapidamente.
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            💡 <strong>Aplicações:</strong> sistemas de pesquisa científica, modelagem 3D, exploração espacial, simulações e inteligência artificial.
                        </p>
                    </div>

                    <p className="text-sm text-gray-700">
                        ⚙️ Em resumo, os sistemas operacionais evoluíram para **tornar os computadores mais rápidos, eficientes e multitarefa**, permitindo que façamos várias coisas ao mesmo tempo.
                    </p>
                </motion.article>

                {/* Navegação */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-emerald-800 hover:text-emerald-900 underline"
                    >
                        <FaArrowLeft /> Voltar ao Início
                    </Link>

                    <Link
                        href="/revisao/sistemas-operacionais/material"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition"
                    >
                        Ir para Material de Revisão
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-emerald-900/80">
                <p>
                    Dica do professor: quanto mais você entende os tipos de sistemas operacionais, mais fácil fica compreender como o computador pensa e trabalha! 💚💻
                </p>
            </footer>
        </main>
    );
}
