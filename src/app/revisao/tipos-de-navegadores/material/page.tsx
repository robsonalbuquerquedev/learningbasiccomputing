"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGlobe, FaArrowLeft, FaPlayCircle } from "react-icons/fa";

export default function TiposDeNavegadoresMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-blue-200 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-blue-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Tipos de Navegadores</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaGlobe className="text-blue-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                        🌐 Navegadores Web
                    </h1>
                </div>
                <p className="mt-2 text-gray-600 max-w-3xl">
                    Descubra o que são os navegadores, quais são os mais populares e como eles permitem que você explore o mundo da internet!
                </p>
            </header>

            {/* Introdução com vídeo */}
            <section className="px-6 md:px-12 py-10">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-blue-100 p-6"
                >
                    <h2 className="text-xl font-bold text-blue-800 mb-4">
                        O que são Navegadores Web
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Para navegar na internet, é necessário um software específico conhecido como **navegador web**.
                        Ele é responsável por interpretar os códigos das páginas e exibi-las de forma visual e interativa para o usuário.
                    </p>
                    <p className="mt-3 text-sm text-gray-700">
                        Atualmente, existem diversos navegadores desenvolvidos por diferentes empresas, cada um com suas características e vantagens.
                    </p>
                </motion.article>
            </section>

            {/* Principais Navegadores */}
            <section className="px-6 md:px-12 pb-12 grid md:grid-cols-3 gap-8">
                {/* Chrome */}
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center"
                >
                    <Image
                        src="/logochrome.png"
                        alt="Logo Google Chrome"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Google Chrome</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Desenvolvido pelo <strong>Google</strong> em 2008, é o navegador mais usado do mundo, com quase 70% dos usuários.
                        É conhecido por sua **velocidade, segurança e integração** com os serviços do Google.
                    </p>
                </motion.article>

                {/* Firefox */}
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center"
                >
                    <Image
                        src="/logofirefox.png"
                        alt="Logo Mozilla Firefox"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Mozilla Firefox</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Lançado em 2004 pela <strong>Mozilla Foundation</strong>, é um navegador de **código aberto** e alternativa livre ao Chrome.
                        Permite que seu código seja auditado, garantindo **transparência e segurança**.
                    </p>
                </motion.article>

                {/* Edge */}
                <motion.article
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center"
                >
                    <Image
                        src="/logoedge.png"
                        alt="Logo Microsoft Edge"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Microsoft Edge</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Lançado em 2015 pela <strong>Microsoft</strong>, é a evolução do antigo Internet Explorer.
                        Baseado no motor <strong>Chromium</strong>, oferece compatibilidade com extensões do Chrome e integração com o **Windows**.
                    </p>
                </motion.article>
            </section>

            {/* Recursos e elementos do navegador */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
                >
                    <h2 className="text-xl font-bold text-blue-800 mb-3">
                        🧭 Principais Elementos de um Navegador Web
                    </h2>

                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                        <li>
                            <strong>Barra de Endereço:</strong> onde digitamos as URLs (endereços das páginas da web).
                            Exemplo: <em>https://www.google.com</em>
                        </li>
                        <li>
                            <strong>Guia (Aba):</strong> permite abrir várias páginas dentro da mesma janela do navegador.
                        </li>
                        <li>
                            <strong>Perfil do Usuário:</strong> exibe o usuário autenticado e sincroniza favoritos, histórico e senhas.
                        </li>
                        <li>
                            <strong>Opções de Controle:</strong> permitem acessar histórico, downloads, favoritos, extensões e configurações.
                        </li>
                        <li>
                            <strong>Sincronização:</strong> conecta o mesmo perfil em diferentes dispositivos, mantendo os dados salvos.
                        </li>
                    </ul>
                </motion.article>

                {/* Navegação */}
                <div className="mt-8 flex justify-between items-center">
                    <Link
                        href="/revisao"
                        className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 underline"
                    >
                        <FaArrowLeft /> Voltar à Revisão
                    </Link>

                    <Link
                        href="/revisao/tipos-de-navegadores/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                    >
                        <FaPlayCircle /> Ir para Atividade
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-blue-900/80">
                <p>
                    Dica do professor: o navegador é a sua janela para o mundo digital — conheça-o bem, e você navegará com confiança e segurança! 🌍💻
                </p>
            </footer>
        </main>
    );
}
