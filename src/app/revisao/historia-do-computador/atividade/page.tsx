"use client";

import { useState } from "react";
import Link from "next/link";

export default function HistoriaComputadorAtividade() {
    const questions = [
        {
            question: "Qual foi o primeiro instrumento de cálculo?",
            options: ["Ábaco", "ENIAC", "Smartphone"],
            answer: "Ábaco",
        },
        {
            question: "Em que ano foi criado o ENIAC?",
            options: ["1946", "1980", "2005"],
            answer: "1946",
        },
        {
            question: "Em que década os computadores começaram a chegar nas casas?",
            options: ["Década de 80", "Década de 50", "Década de 2000"],
            answer: "Década de 80",
        },
        {
            question: "Qual geração de computadores introduziu os circuitos integrados?",
            options: ["1ª geração", "3ª geração", "5ª geração"],
            answer: "3ª geração",
        },
        {
            question: "O que causou o termo 'bug' no contexto dos computadores?",
            options: ["Um inseto preso em uma máquina", "Um vírus de computador", "Erro humano"],
            answer: "Um inseto preso em uma máquina",
        },
    ];

    const [current, setCurrent] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleAnswer = (option: string) => {
        if (option === questions[current].answer) {
            setFeedback("✅ Acertou!");
            setTimeout(() => {
                setFeedback("");
                setCurrent((prev) =>
                    prev + 1 < questions.length ? prev + 1 : questions.length
                );
            }, 800);
        } else {
            setFeedback("❌ Tente novamente!");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 flex flex-col items-center p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                🧠 Atividade: História do Computador
            </h1>

            {current < questions.length ? (
                <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl w-full text-center">
                    <p className="text-xl font-medium text-green-800 mb-6">
                        {questions[current].question}
                    </p>
                    <div className="flex flex-col gap-4">
                        {questions[current].options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                className="bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition cursor-pointer"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {feedback && (
                        <p className="mt-4 text-lg font-semibold text-green-900">
                            {feedback}
                        </p>
                    )}
                </div>
            ) : (
                <div className="bg-green-100 rounded-2xl shadow-lg p-6 text-center flex flex-col items-center gap-4 max-w-xl">
                    <p className="text-2xl font-bold text-green-800">
                        🎉 Parabéns! Você completou o quiz!
                    </p>
                    <p className="text-lg text-green-700">
                        Agora você conhece melhor a História do Computador!
                    </p>

                    <div className="mt-4 text-center">
                        <h2 className="text-xl font-semibold text-green-900 mb-2">Sugestão de filmes</h2>
                        <ul className="list-disc list-inside text-green-700">
                            <li>🎬 O Jogo da Imitação (The Imitation Game)</li>
                            <li>🎬 Jobs (Steve Jobs)</li>
                            <li>🎬 Piratas do Vale do Silício (Pirates of Silicon Valley)</li>
                            <li>🎬 A Rede Social (The Social Network)</li>
                            <li>🎬 Estrelas Além do Tempo (Hidden Figures)</li>
                        </ul>
                    </div>

                    <Link href="/revisao">
                        <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition cursor-pointer">
                            ← Voltar para Revisão
                        </button>
                    </Link>
                </div>
            )}
        </main>
    );
}
