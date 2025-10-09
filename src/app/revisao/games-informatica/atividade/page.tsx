"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGamepad, FaTrophy } from "react-icons/fa";

export default function GamesInformaticaQuiz() {
    const questions = [
        {
            question: "1️⃣ O que são jogos educativos?",
            options: [
                "Jogos criados apenas para adultos",
                "Jogos que ensinam e divertem ao mesmo tempo",
                "Jogos sem regras nem objetivos",
            ],
            answer: 1,
        },
        {
            question: "2️⃣ Qual destas plataformas permite criar seus próprios jogos?",
            options: ["Netflix", "Scratch", "YouTube"],
            answer: 1,
        },
        {
            question: "3️⃣ O que os jogos podem ajudar a desenvolver?",
            options: [
                "Coordenação motora e raciocínio",
                "Sono e preguiça",
                "Apenas distração",
            ],
            answer: 0,
        },
        {
            question: "4️⃣ Qual dessas opções é um exemplo de jogo educativo?",
            options: ["ABCya", "Instagram", "TikTok"],
            answer: 0,
        },
        {
            question: "5️⃣ O que precisamos para jogar no computador?",
            options: ["Um teclado e um monitor", "Um livro e uma caneta", "Um celular e uma TV"],
            answer: 0,
        },
        {
            question: "6️⃣ O que o Scratch ensina de forma divertida?",
            options: [
                "Como cozinhar",
                "Como programar e criar jogos",
                "Como assistir filmes",
            ],
            answer: 1,
        },
        {
            question: "7️⃣ Qual tecla geralmente usamos para mover um personagem em jogos?",
            options: ["Teclas W, A, S, D", "Ctrl + Alt + Del", "Shift + Esc"],
            answer: 0,
        },
        {
            question: "8️⃣ O que significa 'informática'?",
            options: [
                "Estudo e uso dos computadores para resolver problemas",
                "Somente redes sociais",
                "Apenas jogar videogame",
            ],
            answer: 0,
        },
        {
            question: "9️⃣ Qual destas opções é usada para aprender brincando?",
            options: ["Jogos educativos", "Propagandas", "Mensagens de texto"],
            answer: 0,
        },
        {
            question: "🔟 O que acontece quando unimos diversão e tecnologia?",
            options: [
                "Ficamos entediados",
                "Temos aprendizado divertido!",
                "Desligamos o computador",
            ],
            answer: 1,
        },
    ];

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (index: number) => {
        if (index === questions[current].answer) {
            setScore(score + 1);
        }
        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            setFinished(true);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-6">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-6"
            >
                <FaGamepad className="text-purple-600 text-6xl mx-auto mb-3 animate-bounce" />
                <h1 className="text-3xl font-bold text-indigo-700">
                    Quiz: Games e Informática 🎮
                </h1>
                <p className="text-gray-700 mt-2">
                    Responda as perguntas e veja o quanto você sabe sobre o mundo dos jogos!
                </p>
            </motion.div>

            {/* Conteúdo do Quiz */}
            {!finished ? (
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg text-center"
                >
                    <h2 className="font-semibold text-lg text-gray-800 mb-4">
                        {questions[current].question}
                    </h2>

                    <div className="grid gap-3">
                        {questions[current].options.map((opt, index) => (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                            >
                                {opt}
                            </motion.button>
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-gray-600">
                        Pergunta {current + 1} de {questions.length}
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-2xl shadow-lg p-8 text-center w-full max-w-md"
                >
                    <FaTrophy className="text-yellow-500 text-6xl mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Parabéns!</h2>
                    <p className="text-gray-700 mb-4">
                        Você acertou <strong>{score}</strong> de {questions.length} perguntas!
                    </p>
                    {score >= 7 ? (
                        <p className="text-green-600 font-semibold">
                            🏆 Excelente! Você entende tudo sobre games e informática!
                        </p>
                    ) : (
                        <p className="text-blue-600 font-semibold">
                            💪 Continue jogando e aprendendo, você está indo muito bem!
                        </p>
                    )}

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-600 transition"
                    >
                        🔁 Jogar novamente
                    </button>
                </motion.div>
            )}

            {/* Rodapé */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-6 text-gray-600 text-sm text-center"
            >
                Desenvolvido com 💜 para a Semana das Crianças — Aprender pode ser tão divertido quanto jogar!
            </motion.p>
        </main>
    );
}
