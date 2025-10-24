"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaArrowLeft } from "react-icons/fa";

export default function CodigoBinarioMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-slate-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-slate-300 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-slate-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Código Binário</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaCode className="text-slate-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                        💻 O que é Código Binário e Como Funciona
                    </h1>
                </div>
                <p className="mt-2 text-gray-600 max-w-3xl">
                    Entenda como os computadores representam informações usando apenas dois números: 0 e 1.
                </p>
            </header>

            {/* Vídeo explicativo */}
            <section className="px-6 md:px-12 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-slate-200 p-6 text-center"
                >
                    <h2 className="text-xl font-bold text-slate-800 mb-4">
                        🎥 Assista: O que é Código Binário
                    </h2>
                    <div className="flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/FRW02uGCrCA?si=HJ22lGHcDlxk9a0N"
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

            {/* Explicação teórica */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-slate-200 p-6 leading-relaxed"
                >
                    <h2 className="text-xl font-bold text-slate-800 mb-3">📖 Introdução ao Sistema Binário</h2>
                    <p className="text-sm text-gray-700 mb-4">
                        Já imaginou representar todos os números usando apenas **dois símbolos**: 0 e 1?
                        Isso é exatamente o que o **filósofo alemão Gottfried Leibniz** propôs em 1703,
                        ao criar a <strong>teoria da aritmética binária</strong>.
                    </p>

                    <p className="text-sm text-gray-700 mb-4">
                        Diferente do sistema **decimal (base 10)** — que usa os números de 0 a 9 —,
                        o **sistema binário (base 2)** usa apenas dois dígitos: 0 e 1.
                    </p>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">🔢 Comparando os Sistemas</h3>
                    <p className="text-sm text-gray-700 mb-2">
                        No sistema decimal:
                        <br />• 1ª coluna → unidade (0 a 9)
                        <br />• 2ª coluna → dezena (10 a 99)
                        <br />• 3ª coluna → centena (100 a 999)
                    </p>
                    <p className="text-sm text-gray-700 mb-4">
                        Já no sistema binário, temos apenas os dígitos 0 e 1 para representar todos os números,
                        e cada nova coluna representa uma potência de 2.
                    </p>

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-sm border border-slate-200 rounded-lg text-center">
                            <thead className="bg-slate-100 text-slate-800 font-semibold">
                                <tr>
                                    <th className="border px-3 py-2">Decimal</th>
                                    <th className="border px-3 py-2">Binário</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border px-3 py-2">0</td><td className="border px-3 py-2">0</td></tr>
                                <tr><td className="border px-3 py-2">1</td><td className="border px-3 py-2">1</td></tr>
                                <tr><td className="border px-3 py-2">2</td><td className="border px-3 py-2">10</td></tr>
                                <tr><td className="border px-3 py-2">3</td><td className="border px-3 py-2">11</td></tr>
                                <tr><td className="border px-3 py-2">4</td><td className="border px-3 py-2">100</td></tr>
                                <tr><td className="border px-3 py-2">5</td><td className="border px-3 py-2">101</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-gray-700 mb-4">
                        A quantidade máxima de combinações possíveis depende do número de colunas (ou bits).
                        Essa quantidade é dada pela fórmula:
                    </p>

                    <p className="text-center text-base font-semibold text-slate-800 mb-6">
                        2ⁿ = quantidade de combinações possíveis
                    </p>

                    <p className="text-sm text-gray-700 mb-4">
                        Por exemplo:
                        <br />• 1 bit → 2¹ = 2 combinações (0 e 1)
                        <br />• 2 bits → 2² = 4 combinações (00, 01, 10, 11)
                        <br />• 3 bits → 2³ = 8 combinações
                    </p>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">⚡ Aplicação na Eletrônica e Computadores</h3>
                    <p className="text-sm text-gray-700 mb-4">
                        Com o surgimento da **eletrônica digital**, o código binário se tornou essencial, pois
                        os computadores funcionam com circuitos que só reconhecem dois estados:
                    </p>

                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                        <li>🔴 <strong>0</strong> — circuito desligado (sem tensão elétrica)</li>
                        <li>🟢 <strong>1</strong> — circuito ligado (com 5 volts contínuos)</li>
                    </ul>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
                        <Image
                            src="/circuitoeletronico.png"
                            alt="Circuito eletrônico"
                            width={300}
                            height={200}
                            className="rounded-lg border border-slate-200 shadow-sm"
                        />
                        <Image
                            src="/led.png"
                            alt="LED representando estado binário"
                            width={160}
                            height={160}
                            className="rounded-lg border border-slate-200 shadow-sm"
                        />
                    </div>

                    <p className="text-sm text-gray-700">
                        Assim, cada operação feita pelo computador é uma sequência enorme de **0s e 1s** — que representam
                        instruções, dados, imagens, sons e muito mais. 💾
                    </p>
                </motion.article>

                {/* Navegação */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        href="/revisao"
                        className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-900 underline"
                    >
                        <FaArrowLeft /> Voltar à Revisão
                    </Link>

                    <Link
                        href="/revisao/codigo-binario/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-800 transition"
                    >
                        Ir para Atividade ➜
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-slate-700/80">
                <p>
                    Dica do professor: tudo o que o computador faz — de tocar música a abrir um site — começa com o código binário! 🧠💾
                </p>
            </footer>
        </main>
    );
}
