"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMicrochip, FaDatabase, FaNetworkWired, FaMemory, FaArrowLeft, FaPlayCircle } from "react-icons/fa";

export default function RecursosComputacionaisMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-sky-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-sky-100 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-sky-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Recursos Computacionais</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaMicrochip className="text-sky-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-900">
                        💻 Recursos Computacionais — A Base da Tecnologia
                    </h1>
                </div>

                <p className="mt-2 text-gray-600 max-w-3xl">
                    Entenda o que são recursos computacionais, por que são essenciais para o funcionamento da
                    Computação em Nuvem e como eles estão presentes em nosso dia a dia.
                </p>
            </header>

            {/* Introdução */}
            <section className="px-6 md:px-12 py-10">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-sky-100 p-6"
                >
                    <h2 className="text-xl font-bold text-sky-800 mb-2">🔍 O que são Recursos Computacionais</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        São todos os **elementos físicos e lógicos** utilizados para processar, armazenar e
                        transmitir informações em um sistema de computação. Em outras palavras, são os
                        **ingredientes fundamentais** que fazem o computador e a nuvem funcionarem.
                    </p>
                    <p className="mt-3 text-sm text-gray-700">
                        Eles se dividem em **recursos de hardware, software, rede e armazenamento** — cada um com
                        um papel essencial dentro da infraestrutura tecnológica.
                    </p>
                </motion.article>
            </section>

            {/* Tipos de Recursos Computacionais */}
            <section className="px-6 md:px-12 pb-10 grid md:grid-cols-2 gap-8">
                {/* Hardware */}
                <motion.article
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                >
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-sky-800 mb-2">
                        <FaMemory className="text-sky-600" /> Hardware
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        O hardware representa a parte **física** do computador — como processador (CPU), memória,
                        disco rígido e placa-mãe.
                        É responsável por executar as operações e processar os dados.
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>CPU — Processamento das instruções.</li>
                        <li>Memória RAM — Execução de tarefas temporárias.</li>
                        <li>HD/SSD — Armazenamento de dados permanentes.</li>
                    </ul>
                </motion.article>

                {/* Software */}
                <motion.article
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                >
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-sky-800 mb-2">
                        <FaDatabase className="text-sky-600" /> Software
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        O software é a **parte lógica** — os programas, sistemas operacionais e aplicativos que
                        dão instruções ao hardware.
                        É o cérebro que organiza o funcionamento de tudo.
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Sistemas operacionais (Windows, Linux, macOS).</li>
                        <li>Aplicativos (Google Docs, Canva, etc.).</li>
                        <li>Serviços de nuvem e banco de dados.</li>
                    </ul>
                </motion.article>

                {/* Rede */}
                <motion.article
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                >
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-sky-800 mb-2">
                        <FaNetworkWired className="text-sky-600" /> Rede
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        A rede é o conjunto de **conexões e dispositivos** que permitem a comunicação entre
                        computadores.
                        É ela que possibilita o acesso à internet e à computação em nuvem.
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Roteadores, cabos e modems.</li>
                        <li>Protocolos de comunicação (TCP/IP).</li>
                        <li>Internet e redes locais (LAN/WAN).</li>
                    </ul>
                </motion.article>

                {/* Armazenamento */}
                <motion.article
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                >
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-sky-800 mb-2">
                        <FaDatabase className="text-sky-600" /> Armazenamento
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        É o espaço onde as informações são guardadas.
                        Pode ser local (HD/SSD) ou em nuvem (Google Drive, OneDrive, Dropbox).
                        O armazenamento é essencial para o funcionamento da Computação em Nuvem.
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Armazenamento físico — local e limitado.</li>
                        <li>Armazenamento em nuvem — remoto e expansível.</li>
                        <li>Backup e recuperação de dados.</li>
                    </ul>
                </motion.article>
            </section>

            {/* Conexão com a Computação em Nuvem */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                >
                    <h2 className="text-xl font-bold text-sky-800 mb-2">
                        ☁️ Como os Recursos Computacionais se Conectam à Nuvem
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        A Computação em Nuvem utiliza todos esses recursos de forma integrada.
                        O **hardware** fornece o poder de processamento,
                        o **software** controla as operações,
                        a **rede** conecta usuários aos servidores,
                        e o **armazenamento** mantém os dados disponíveis de qualquer lugar.
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                        Essa combinação torna possível acessar serviços online como o Google Drive, YouTube,
                        e-mails e até sistemas complexos sem precisar de computadores potentes localmente.
                    </p>
                </motion.article>

                {/* Navegação */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        href="/revisao"
                        className="inline-flex items-center gap-2 text-sky-800 hover:text-sky-900 underline"
                    >
                        <FaArrowLeft /> Voltar à Revisão
                    </Link>

                    <Link
                        href="/revisao/recursos-computacionais/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition"
                    >
                        <FaPlayCircle /> Ir para Atividade
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-sky-900/80">
                <p>
                    Dica do professor: toda “nuvem” precisa de uma base — e essa base são os recursos
                    computacionais. Sem eles, a tecnologia simplesmente não existiria. 💾⚙️
                </p>
            </footer>
        </main>
    );
}
