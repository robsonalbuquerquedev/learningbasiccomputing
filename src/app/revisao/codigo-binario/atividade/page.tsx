"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode, FaCheckCircle, FaUndo, FaArrowLeft } from "react-icons/fa";

type Question = {
    id: number;
    prompt: string;
    options: string[];
    correctIndex: number;
    help?: string;
};

const quizQuestions: Question[] = [
    {
        id: 1,
        prompt: "O sistema binário é composto por quais dois números?",
        options: ["0 e 1", "1 e 2", "8 e 9", "0 e 9"],
        correctIndex: 0,
        help: "O sistema binário usa apenas dois símbolos: 0 e 1.",
    },
    {
        id: 2,
        prompt: "Quem criou a teoria da aritmética binária em 1703?",
        options: ["Isaac Newton", "Albert Einstein", "Gottfried Leibniz", "Alan Turing"],
        correctIndex: 2,
        help: "O filósofo alemão Gottfried Leibniz propôs o sistema binário.",
    },
    {
        id: 3,
        prompt: "Quantas combinações possíveis existem com 3 bits?",
        options: ["4", "6", "8", "16"],
        correctIndex: 2,
        help: "Cada bit dobra as combinações possíveis: 2³ = 8.",
    },
    {
        id: 4,
        prompt: "No sistema binário, o número decimal 2 é representado como:",
        options: ["01", "10", "11", "100"],
        correctIndex: 1,
        help: "Em binário, 10 representa o número 2 no sistema decimal.",
    },
    {
        id: 5,
        prompt: "No computador, o número 1 representa:",
        options: [
            "Um circuito desligado",
            "Um circuito ligado",
            "Um som de erro",
            "Um número negativo",
        ],
        correctIndex: 1,
        help: "No mundo digital, 1 é igual a ‘ligado’ (tensão presente).",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        concept: "Sistema Decimal",
        options: ["Base 10, usa 0 a 9", "Base 2, usa 0 e 1", "Base 16, usa 0 a F"],
        correct: "Base 10, usa 0 a 9",
    },
    {
        id: "pair-2",
        concept: "Sistema Binário",
        options: ["Base 8", "Base 2, usa 0 e 1", "Base 12"],
        correct: "Base 2, usa 0 e 1",
    },
    {
        id: "pair-3",
        concept: "Bit",
        options: ["Menor unidade de informação", "Um número decimal", "Um tipo de cabo de rede"],
        correct: "Menor unidade de informação",
    },
    {
        id: "pair-4",
        concept: "2ⁿ",
        options: [
            "Fórmula para calcular combinações possíveis",
            "Quantidade de bytes em 1GB",
            "Número de circuitos de um processador",
        ],
        correct: "Fórmula para calcular combinações possíveis",
    },
];

export default function CodigoBinarioAtividade() {
    const [answers, setAnswers] = useState<Record<number, number | null>>(
        () => Object.fromEntries(quizQuestions.map((q) => [q.id, null]))
    );
    const [showResult, setShowResult] = useState(false);

    const [matches, setMatches] = useState<Record<string, string>>(
        () => Object.fromEntries(matchPairs.map((p) => [p.id, ""]))
    );
    const [showMatchResult, setShowMatchResult] = useState(false);

    const correctCount = useMemo(() => {
        return quizQuestions.reduce((acc, q) => {
            const userAnswer = answers[q.id];
            return acc + (userAnswer === q.correctIndex ? 1 : 0);
        }, 0);
    }, [answers]);

    const matchCorrectCount = useMemo(() => {
        return matchPairs.reduce((acc, p) => acc + (matches[p.id] === p.correct ? 1 : 0), 0);
    }, [matches]);

    function selectAnswer(qid: number, idx: number) {
        setAnswers((prev) => ({ ...prev, [qid]: idx }));
    }

    function resetQuiz() {
        setAnswers(Object.fromEntries(quizQuestions.map((q) => [q.id, null])));
        setShowResult(false);
    }

    function resetMatch() {
        setMatches(Object.fromEntries(matchPairs.map((p) => [p.id, ""])));
        setShowMatchResult(false);
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-slate-200 bg-white/70 backdrop-blur">
                <nav className="text-sm text-slate-700">
                    <Link href="/revisao/codigo-binario/material" className="underline hover:no-underline">
                        Código Binário — Material
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaCode className="text-slate-800 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                        💾 Atividade — Código Binário
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Teste seu raciocínio e veja se você consegue pensar como um computador!
                </p>
            </header>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-slate-800 mb-3">1️⃣ Quiz sobre o Código Binário</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quizQuestions.map((q) => (
                        <motion.article
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-5"
                        >
                            <p className="font-medium text-slate-900">{q.id}. {q.prompt}</p>
                            <fieldset className="mt-3 space-y-2">
                                {q.options.map((opt, idx) => {
                                    const selected = answers[q.id] === idx;
                                    const correct = showResult && idx === q.correctIndex;
                                    const incorrect = showResult && selected && idx !== q.correctIndex;
                                    return (
                                        <label
                                            key={opt}
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border 
                        ${selected ? "border-slate-400 bg-slate-50" : "border-gray-200"} 
                        ${correct ? "ring-2 ring-green-300" : ""} 
                        ${incorrect ? "ring-2 ring-rose-300" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                checked={selected || false}
                                                onChange={() => selectAnswer(q.id, idx)}
                                                className="accent-slate-700"
                                            />
                                            <span className="text-sm">{opt}</span>
                                        </label>
                                    );
                                })}
                            </fieldset>
                            {showResult && answers[q.id] !== q.correctIndex && q.help && (
                                <p className="mt-3 text-xs text-rose-600">💡 Dica: {q.help}</p>
                            )}
                        </motion.article>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => setShowResult(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver resultado
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer quiz
                    </button>
                    {showResult && (
                        <span className="text-sm text-slate-900 font-semibold">
                            Pontuação: {correctCount} / {quizQuestions.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Associação */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-slate-800 mb-3">2️⃣ Relacione os Conceitos</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {matchPairs.map((p) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-slate-200 p-5"
                        >
                            <p className="font-medium text-slate-900">{p.concept}</p>
                            <select
                                className="mt-3 w-full border border-slate-300 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                value={matches[p.id]}
                                onChange={(e) =>
                                    setMatches((prev) => ({ ...prev, [p.id]: e.target.value }))
                                }
                            >
                                <option value="">Selecione...</option>
                                {p.options.map((o) => (
                                    <option key={o} value={o}>{o}</option>
                                ))}
                            </select>
                            {showMatchResult && (
                                <p
                                    className={`mt-3 text-sm ${matches[p.id] === p.correct ? "text-green-700" : "text-rose-700"
                                        }`}
                                >
                                    {matches[p.id] === p.correct
                                        ? "✅ Correto!"
                                        : `❌ Correto: ${p.correct}`}
                                </p>
                            )}
                        </motion.article>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => setShowMatchResult(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver correções
                    </button>
                    <button
                        onClick={resetMatch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer relação
                    </button>
                    {showMatchResult && (
                        <span className="text-sm text-slate-900 font-semibold">
                            Acertos: {matchCorrectCount} / {matchPairs.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Ação prática */}
            <section className="px-6 md:px-12 pb-10">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 p-5"
                >
                    <h2 className="text-lg font-semibold text-slate-900">3️⃣ Ação Prática</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Vamos colocar o cérebro para trabalhar como um computador:
                    </p>
                    <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Escreva os números 0 a 7 em binário.</li>
                        <li>Pesquise o que significa a palavra <strong>bit</strong> e <strong>byte</strong>.</li>
                        <li>Descubra quantos bits tem 1 byte e quantos bytes há em 1 KB.</li>
                        <li>Observe o LED do seu computador ou teclado — ele também representa 0 (desligado) e 1 (ligado).</li>
                    </ul>
                </motion.article>

                <div className="mt-6">
                    <Link
                        href="/revisao/codigo-binario/material"
                        className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-900 underline"
                    >
                        <FaArrowLeft /> Voltar para o Material
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-slate-700/80">
                <p>
                    Dica do professor: pense como um computador — com apenas 0 e 1, você pode representar o mundo inteiro! 💾🧠
                </p>
            </footer>
        </main>
    );
}
