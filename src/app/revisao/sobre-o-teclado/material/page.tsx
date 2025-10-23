"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaKeyboard, FaArrowLeft, FaPlayCircle } from "react-icons/fa";

export default function SobreOTecladoMaterial() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-blue-200 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-blue-700">
                    <Link href="/revisao" className="underline hover:no-underline">
                        Revisão
                    </Link>{" "}
                    / <span className="font-semibold">Sobre o Teclado</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaKeyboard className="text-blue-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                        🎹 Domine o Teclado
                    </h1>
                </div>
                <p className="mt-2 text-gray-600 max-w-3xl">
                    Aprenda como o teclado funciona, conheça os tipos mais comuns e descubra o significado de cada tecla —
                    daquelas com nome até as “misteriosas” que assustam os iniciantes!
                </p>
            </header>

            {/* Introdução */}
            <section className="px-6 md:px-12 py-10">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-md border border-blue-100 p-6"
                >
                    <h2 className="text-xl font-bold text-blue-800 mb-2">⌨️ O que é o Teclado</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        O teclado é o principal dispositivo de entrada usado para digitar letras, números e comandos em um computador.
                        Ele serve para **comunicar informações ao sistema** — assim como a caneta serve para escrever no papel.
                    </p>
                    <p className="mt-3 text-sm text-gray-700">
                        Existem **vários modelos** de teclado: os de **computador de mesa** e os de **notebook**, que têm pequenas diferenças
                        no tamanho e na quantidade de teclas.
                    </p>
                </motion.article>
            </section>

            {/* Teclado tradicional */}
            <section className="px-6 md:px-12 pb-12 grid md:grid-cols-2 gap-8">
                <motion.article
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center"
                >
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                        🖥️ Teclado Tradicional (Desktop)
                    </h3>
                    <Image
                        src="/tecladobg.png"
                        alt="Teclado tradicional"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-md mb-4 border border-blue-100"
                    />
                    <p className="text-sm text-gray-700 leading-relaxed">
                        No teclado tradicional há a parte das **letras**, a parte **numérica** (geralmente à direita)
                        e as **teclas de função** na parte superior.
                        Algumas teclas não têm nome, o que pode causar dúvidas em iniciantes.
                    </p>
                    <ul className="mt-3 list-disc text-left text-sm text-gray-700 space-y-1 pl-5">
                        <li><strong>Backspace:</strong> apaga o caractere anterior.</li>
                        <li><strong>Enter:</strong> confirma um comando ou quebra linha.</li>
                        <li><strong>Shift:</strong> permite escrever letras maiúsculas temporariamente.</li>
                        <li><strong>Caps Lock:</strong> mantém as letras maiúsculas ativas.</li>
                        <li><strong>Espaço:</strong> cria espaço entre palavras.</li>
                    </ul>
                </motion.article>

                {/* Teclado de notebook */}
                <motion.article
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center"
                >
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">
                        💻 Teclado de Notebook
                    </h3>
                    <Image
                        src="/tecladonotebook.png"
                        alt="Teclado de notebook"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-md mb-4 border border-blue-100"
                    />
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Os teclados de notebook são mais compactos e, por isso, algumas teclas têm **dupla ou tripla função**.
                        Eles também possuem teclas especiais que ajudam em tarefas rápidas.
                    </p>
                    <ul className="mt-3 list-disc text-left text-sm text-gray-700 space-y-1 pl-5">
                        <li><strong>Ctrl</strong> e <strong>Alt:</strong> usadas para **atalhos** (ex: <code>Alt + F4</code> fecha uma janela).</li>
                        <li><strong>Fn:</strong> ativa funções extras (como ajustar o brilho ou volume).</li>
                        <li><strong>F1 a F12:</strong> executam ações rápidas, como abrir ajuda ou atualizar páginas.</li>
                    </ul>
                </motion.article>
            </section>

            {/* Atalhos e curiosidades */}
            <section className="px-6 md:px-12 pb-12">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-blue-100"
                >
                    <h2 className="text-xl font-bold text-blue-800 mb-2">⚙️ Dicas e Atalhos Úteis</h2>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        Usar o teclado com eficiência aumenta sua produtividade.
                        Veja alguns atalhos que podem facilitar o dia a dia:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li><code>Ctrl + C</code> → Copiar.</li>
                        <li><code>Ctrl + V</code> → Colar.</li>
                        <li><code>Ctrl + Z</code> → Desfazer.</li>
                        <li><code>Alt + Tab</code> → Alternar entre janelas abertas.</li>
                        <li><code>Alt + F4</code> → Fechar o programa atual.</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        Praticar esses atalhos ajuda o aluno a ganhar **agilidade e segurança** no uso do computador.
                    </p>
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
                        href="/revisao/sobre-o-teclado/atividade"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
                    >
                        <FaPlayCircle /> Ir para Atividade
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-blue-900/80">
                <p>
                    Dica do professor: o teclado é seu principal instrumento no mundo digital.
                    Domine-o, e você dominará o computador! 🎹✨
                </p>
            </footer>
        </main>
    );
}
