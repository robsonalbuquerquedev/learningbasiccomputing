"use client";

import { motion } from "framer-motion";
import {
    FaFileWord, FaChrome, FaGamepad, FaEnvelope,
    FaLaptop, FaNetworkWired, FaRobot, FaTable, FaRegImages
} from "react-icons/fa";
import Link from "next/link";

export default function Aplicacoes() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-10">
            {/* Título */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-blue-600 mb-6 text-center"
            >
                Aplicações da Informática e da Internet
            </motion.h1>

            {/* Introdução */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-6 text-justify"
            >
                Já aprendemos como os computadores surgiram e como a internet mudou o
                mundo. Agora vamos ver como usamos tudo isso no dia a dia!
                Os softwares e os serviços da internet são como ferramentas que dão vida ao computador,
                permitindo que a gente estude, se comunique, jogue e até crie coisas novas.
            </motion.p>

            {/* Vídeo explicativo */}
            <div className="flex justify-center mb-10">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WULwZ6v_Ai8?si=u_dYygx97nh37jKt"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                ></iframe>
            </div>

            {/* Conceito de Computador */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="p-6 bg-blue-50 rounded-xl mb-10"
            >
                <h2 className="text-xl font-bold text-blue-600 mb-4">O que é um Computador?</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    O computador é uma máquina ou dispositivo capaz de executar uma sequência
                    de instruções definidas pelo ser humano para gerar um determinado resultado.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Essa sequência de instruções é chamada de <span className="font-semibold">algoritmo</span>.
                    A analogia mais popular é a <span className="italic">receita de bolo</span>: uma lista de passos que,
                    se seguidos corretamente, levam a um resultado esperado.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Todo computador é formado por duas partes principais:
                    <span className="font-semibold"> hardware </span> e
                    <span className="font-semibold"> software</span>.
                    O <span className="text-blue-600 font-semibold">hardware</span> é a parte física do computador
                    (tudo aquilo que podemos tocar, como teclado, mouse, monitor e processador).
                    Já o <span className="text-green-600 font-semibold">software</span> é a parte lógica, ou seja,
                    os programas como Word, WhatsApp e YouTube.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                    Um software é formado por vários algoritmos (pequenos trechos de código) que juntos resolvem
                    um problema maior. O software precisa do hardware para ser executado, e o hardware necessita
                    das instruções fornecidas pelo software. <strong>Ou seja, um depende do outro!</strong>
                </p>
                <div className="mt-4">
                    <Link
                        href="/computer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Saiba mais sobre hardware clicando aqui!
                    </Link>
                </div>
            </motion.div>

            {/* Ligações com os temas anteriores */}
            <section className="grid gap-6 md:grid-cols-3 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-blue-100 rounded-xl shadow-md flex items-center gap-4">
                    <FaLaptop className="text-blue-600 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Computador</h2>
                        <p className="text-gray-600 text-sm">
                            A base de tudo! Sem ele, nada funcionaria. É a “caixa mágica” que
                            processa informações e executa programas.
                        </p>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-purple-100 rounded-xl shadow-md flex items-center gap-4">
                    <FaNetworkWired className="text-purple-600 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Internet e Redes</h2>
                        <p className="text-gray-600 text-sm">
                            Conecta o mundo inteiro! Graças às redes podemos conversar,
                            estudar e até trabalhar à distância.
                        </p>
                    </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-pink-100 rounded-xl shadow-md flex items-center gap-4">
                    <FaRobot className="text-pink-600 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Inteligência Artificial</h2>
                        <p className="text-gray-600 text-sm">
                            Máquinas que aprendem! A IA já ajuda em jogos, pesquisas,
                            tradução de idiomas e até na criação de imagens.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Exemplos de Softwares */}
            <section className="grid gap-6 md:grid-cols-2">
                {/* Editor de Texto */}
                <Link
                    href="/revisao/word/material"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4 cursor-pointer"
                    >
                        <FaFileWord className="text-blue-600 text-4xl" />
                        <div>
                            <h2 className="font-semibold text-lg">Editor de Texto</h2>
                            <p className="text-gray-600 text-sm">
                                Usado para escrever trabalhos, histórias ou até bilhetes.
                                Exemplos: Word, Google Docs.
                            </p>
                        </div>
                    </motion.div>
                </Link>

                {/* Navegador */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4"
                >
                    <FaChrome className="text-green-500 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Navegador</h2>
                        <p className="text-gray-600 text-sm">
                            Porta de entrada para a internet! Exemplos: Google Chrome, Edge, Firefox.
                        </p>
                    </div>
                </motion.div>

                {/* Planilhas */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4"
                >
                    <FaTable className="text-green-600 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Planilhas</h2>
                        <p className="text-gray-600 text-sm">
                            Usadas para cálculos e organização de dados.
                            Exemplos: Excel, Google Sheets.
                        </p>
                    </div>
                </motion.div>

                {/* Apresentações */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4"
                >
                    <FaRegImages className="text-orange-500 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">Apresentações</h2>
                        <p className="text-gray-600 text-sm">
                            Criar slides para apresentar ideias e trabalhos.
                            Exemplos: PowerPoint, Google Slides.
                        </p>
                    </div>
                </motion.div>

                {/* Jogos Educativos */}
                <Link
                    href="/revisao/games-informatica/material"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4 cursor-pointer"
                    >
                        <FaGamepad className="text-purple-600 text-4xl" />
                        <div>
                            <h2 className="font-semibold text-lg">Jogos Educativos</h2>
                            <p className="text-gray-600 text-sm">
                                Aprender se divertindo! Existem jogos que ensinam matemática, inglês e lógica.
                            </p>
                        </div>
                    </motion.div>
                </Link>
                
                {/* E-mail */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-white rounded-xl shadow-md flex items-center gap-4"
                >
                    <FaEnvelope className="text-red-500 text-4xl" />
                    <div>
                        <h2 className="font-semibold text-lg">E-mail</h2>
                        <p className="text-gray-600 text-sm">
                            Ferramenta de comunicação usada no mundo todo.
                            É como enviar cartas digitais!
                        </p>
                    </div>
                </motion.div>
            </section>


            {/* Serviços da Internet */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10 p-6 bg-blue-50 rounded-xl"
            >
                <h2 className="text-xl font-bold text-blue-600 mb-4">Serviços Populares</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><span className="font-semibold">YouTube:</span> vídeos de música, estudo e diversão.</li>
                    <li><span className="font-semibold">WhatsApp:</span> conversar com amigos e família.</li>
                    <li><span className="font-semibold">Google:</span> pesquisar qualquer assunto.</li>
                </ul>
            </motion.div>

            {/* Conclusão */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gray-700 leading-relaxed mt-8 italic text-center"
            >
                “Os softwares e serviços da internet são as portas mágicas que tornam os
                computadores nossos melhores aliados no estudo, na comunicação e na
                diversão!”
            </motion.p>
        </main>
    );
}
