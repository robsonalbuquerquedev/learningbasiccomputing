"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCloud, FaArrowLeft, FaPlayCircle } from "react-icons/fa";

export default function SobreANuvemMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-sky-100 to-indigo-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-indigo-100 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-indigo-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Sobre a Nuvem</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaCloud className="text-sky-600 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-800">
                        ☁️ O que é Computação em Nuvem
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Entenda de forma simples o conceito de Cloud Computing, sua importância,
                    funcionamento e benefícios no mundo digital.
                </p>
            </header>

            {/* Seção de vídeo */}
            <section className="px-6 md:px-12 py-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg border border-sky-200"
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ymZo-ZwXFw8?si=wtLvLJWDGWXYEP86"
                        title="O que é Cloud Computing e como funciona?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                <p className="mt-3 text-sm text-gray-600 italic">
                    🎥 Vídeo: “O que é Cloud Computing e como funciona?”
                </p>
            </section>

            {/* Conteúdo principal */}
            <section className="px-6 md:px-12 pb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* O que é */}
                    <motion.article
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                    >
                        <h2 className="text-xl font-bold text-sky-800 mb-2">
                            💭 O que é Computação em Nuvem
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            A Computação em Nuvem (ou Cloud Computing) é o uso da internet para
                            armazenar, gerenciar e processar dados, em vez de usar o disco rígido
                            de um computador local. Ela permite acessar arquivos, aplicativos e
                            serviços de qualquer lugar, a qualquer hora.
                        </p>
                    </motion.article>

                    {/* Importância */}
                    <motion.article
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                    >
                        <h2 className="text-xl font-bold text-sky-800 mb-2">
                            🌍 A importância da Computação em Nuvem
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            A nuvem revolucionou a forma como empresas e pessoas lidam com a
                            tecnologia. Ela traz economia de custos, flexibilidade, segurança e
                            escalabilidade, permitindo que negócios cresçam sem depender de
                            servidores físicos caros.
                        </p>
                    </motion.article>

                    {/* Por que usar */}
                    <motion.article
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                    >
                        <h2 className="text-xl font-bold text-sky-800 mb-2">
                            🚀 Por que usar Computação em Nuvem
                        </h2>
                        <ul className="text-sm text-gray-700 list-disc pl-4 leading-relaxed space-y-1">
                            <li>Acesso remoto a arquivos e sistemas de qualquer dispositivo.</li>
                            <li>Backup automático e sincronização de dados.</li>
                            <li>Redução de custos com infraestrutura física.</li>
                            <li>Atualizações automáticas e seguras.</li>
                        </ul>
                    </motion.article>

                    {/* Armazenamento */}
                    <motion.article
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 rounded-xl shadow-md border border-sky-100"
                    >
                        <h2 className="text-xl font-bold text-sky-800 mb-2">
                            💾 O que é Armazenamento em Nuvem
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            É um serviço que permite guardar dados e arquivos em servidores
                            online, em vez de mantê-los no computador local. Exemplos populares
                            incluem Google Drive, Dropbox e OneDrive.
                        </p>
                    </motion.article>
                </div>

                {/* Como funciona */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 mt-8 rounded-xl shadow-md border border-sky-100"
                >
                    <h2 className="text-xl font-bold text-sky-800 mb-2">
                        ⚙️ Como a Computação em Nuvem funciona
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        A nuvem é formada por uma rede de servidores que hospedam e processam
                        dados via internet. Quando você envia um arquivo para o Google Drive,
                        por exemplo, ele é armazenado em um desses servidores remotos. Ao
                        acessar novamente, o arquivo é baixado de volta, tudo de forma
                        transparente e rápida.
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
                        href="/revisao/sobre-a-nuvem/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition"
                    >
                        <FaPlayCircle /> Ir para Atividade
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-sky-900/80">
                <p>
                    Dica do professor: a nuvem é invisível, mas está em todo lugar — nos apps,
                    nas fotos, nos vídeos e até nas nossas conversas. ☁️💬
                </p>
            </footer>
        </main>
    );
}
