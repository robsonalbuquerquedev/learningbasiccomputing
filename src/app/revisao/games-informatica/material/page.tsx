"use client";

import { motion } from "framer-motion";
import {
    FaGamepad,
    FaPuzzlePiece,
    FaRocket,
    FaGlobe,
    FaFlag,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GamesInformaticaAtividade() {
    const router = useRouter();

    const handleQuizRedirect = () => {
        router.push("/revisao/games-informatica/atividade");
    };

    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-indigo-200 min-h-screen text-gray-800">
            {/* Animação do Título */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex justify-center mb-4"
                >
                    <FaGamepad className="text-purple-600 text-6xl" />
                </motion.div>
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
                    🎮 Games e Informática
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Nesta aula especial da Semana das Crianças, vamos descobrir como os jogos e a informática
                    caminham lado a lado! Aprender brincando é a melhor parte! 🧠💻✨
                </p>
            </motion.div>

            {/* Seções principais */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* JOGOS EDUCATIVOS */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
                >
                    <FaPuzzlePiece className="text-green-500 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">Jogos Educativos</h2>
                    <p>
                        Aprender se divertindo! 🧩 Existem jogos que ensinam matemática, inglês,
                        lógica e até programação.
                    </p>
                    <p className="mt-3 text-sm text-gray-500">
                        Exemplos: <strong>ABCya</strong>, <strong>CoolMath</strong>, <strong>Code.org</strong>.
                    </p>

                    <Link
                        href="https://code.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                        🌐 Explorar Jogos Educativos
                    </Link>
                </motion.div>

                {/* LISTA DE JOGOS INTERATIVOS */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center"
                >
                    <FaGlobe className="text-purple-500 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">Jogos Online Interativos</h2>
                    <p>
                        Explore sites incríveis onde você pode aprender e jogar ao mesmo tempo! 🌍🎯
                    </p>

                    <ul className="text-left mt-4 space-y-2 text-gray-700">
                        <li>
                            🎨 <strong>Quick, Draw!</strong> – Jogo da Google que usa IA para adivinhar o que você desenha.{" "}
                            <Link
                                href="https://quickdraw.withgoogle.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                        <li>
                            🔢 <strong>Math Playground</strong> – Jogos de matemática com desafios divertidos.{" "}
                            <Link
                                href="https://www.mathplayground.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                        <li>
                            💡 <strong>Typing Club</strong> – Aprenda a digitar rápido brincando!{" "}
                            <Link
                                href="https://www.typingclub.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                        <li>
                            🧠 <strong>Kahoot!</strong> – Crie e participe de quizzes interativos com os colegas.{" "}
                            <Link
                                href="https://kahoot.it/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* JOGOS BRASILEIROS */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center md:col-span-2"
                >
                    <FaFlag className="text-green-600 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">Jogos Educativos Brasileiros 🇧🇷</h2>
                    <p>
                        Explore jogos feitos no Brasil, em português, que ensinam brincando! São ótimos
                        para crianças de todas as idades. 🧒🎨📚
                    </p>

                    <ul className="text-left mt-4 space-y-2 text-gray-700">
                        <li>
                            🦜 <strong>Escola Games</strong> – Jogos educativos sobre português, matemática e ciências.{" "}
                            <Link
                                href="https://www.escolagames.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                        <li>
                            🧩 <strong>DigiPuzzle</strong> – Jogos educativos para treinar matemática, lógica, geografia e muito mais.{" "}
                            <Link
                                href="https://www.digipuzzle.net/pt/jogoseducativos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Acessar
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* CRIAÇÃO DE JOGOS */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center md:col-span-2"
                >
                    <FaRocket className="text-pink-500 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">Você também pode criar jogos!</h2>
                    <p>
                        Sabia que programar também é brincar? Plataformas como{" "}
                        <strong>Scratch</strong> e <strong>Roblox Studio</strong> permitem criar
                        seus próprios jogos de forma simples e divertida. 🎨👾
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link
                            href="https://scratch.mit.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
                        >
                            🧠 Criar no Scratch
                        </Link>

                        <button
                            onClick={handleQuizRedirect}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition cursor-pointer"
                        >
                            🧩 Fazer o Quiz sobre Jogos e Informática
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mensagem final */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-center text-gray-700 mt-10"
            >
                💬 Dica: Todos os grandes criadores de jogos começaram brincando! Que tal começar hoje?
            </motion.p>
        </main>
    );
}
