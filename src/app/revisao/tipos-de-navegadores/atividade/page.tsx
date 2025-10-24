"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGlobe, FaCheckCircle, FaUndo, FaArrowLeft } from "react-icons/fa";

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
        prompt: "O que é um navegador web?",
        options: [
            "Um programa usado para editar textos e planilhas.",
            "Um software que permite acessar e visualizar páginas da internet.",
            "Um aplicativo usado apenas para e-mails.",
            "Um sistema operacional completo do computador.",
        ],
        correctIndex: 1,
        help: "O navegador é o programa responsável por acessar e exibir páginas da web.",
    },
    {
        id: 2,
        prompt: "Qual é o navegador desenvolvido pela Google?",
        options: ["Mozilla Firefox", "Safari", "Google Chrome", "Microsoft Edge"],
        correctIndex: 2,
        help: "O Chrome foi lançado pela Google em 2008 e é o mais usado no mundo.",
    },
    {
        id: 3,
        prompt: "O Mozilla Firefox é conhecido por ser:",
        options: [
            "Um navegador fechado e proprietário.",
            "Um navegador de código aberto e independente.",
            "Um navegador exclusivo para Windows.",
            "Um navegador usado apenas em celulares.",
        ],
        correctIndex: 1,
        help: "O Firefox é de código aberto, criado pela Mozilla Foundation.",
    },
    {
        id: 4,
        prompt: "O Microsoft Edge substituiu qual antigo navegador?",
        options: ["Opera", "Internet Explorer", "Safari", "Netscape"],
        correctIndex: 1,
        help: "O Edge é o sucessor do antigo Internet Explorer da Microsoft.",
    },
    {
        id: 5,
        prompt: "A barra de endereços serve para:",
        options: [
            "Digitar os endereços (URLs) dos sites.",
            "Ouvir música no navegador.",
            "Salvar senhas automaticamente.",
            "Aumentar o brilho da tela.",
        ],
        correctIndex: 0,
        help: "Na barra de endereços, digitamos o endereço de um site (URL).",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        concept: "Google Chrome",
        options: ["Desenvolvido pela Google", "Código aberto", "Substituiu o Internet Explorer"],
        correct: "Desenvolvido pela Google",
    },
    {
        id: "pair-2",
        concept: "Mozilla Firefox",
        options: ["Desenvolvido pela Microsoft", "Desenvolvido pela Mozilla Foundation", "Desenvolvido pela Google"],
        correct: "Desenvolvido pela Mozilla Foundation",
    },
    {
        id: "pair-3",
        concept: "Microsoft Edge",
        options: ["Usa o motor Chromium", "Código aberto e livre", "Desenvolvido pela Apple"],
        correct: "Usa o motor Chromium",
    },
    {
        id: "pair-4",
        concept: "Barra de Endereço",
        options: ["Área onde digitamos as URLs", "Botão de fechar a guia", "Menu de histórico"],
        correct: "Área onde digitamos as URLs",
    },
];

export default function TiposDeNavegadoresAtividade() {
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
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-blue-100 bg-white/70 backdrop-blur">
                <nav className="text-sm text-blue-700">
                    <Link href="/revisao/tipos-de-navegadores/material" className="underline hover:no-underline">
                        Tipos de Navegadores — Material
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaGlobe className="text-blue-600 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
                        🌐 Atividade — Navegadores Web
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Teste seus conhecimentos sobre os navegadores da internet e suas principais características!
                </p>
            </header>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-blue-900 mb-3">1) Quiz Rápido</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quizQuestions.map((q) => (
                        <motion.article
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-blue-100 p-5"
                        >
                            <p className="font-medium text-blue-800">{q.id}. {q.prompt}</p>
                            <fieldset className="mt-3 space-y-2">
                                {q.options.map((opt, idx) => {
                                    const selected = answers[q.id] === idx;
                                    const correct = showResult && idx === q.correctIndex;
                                    const incorrect = showResult && selected && idx !== q.correctIndex;
                                    return (
                                        <label
                                            key={opt}
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border 
                        ${selected ? "border-blue-300 bg-blue-50" : "border-gray-200"} 
                        ${correct ? "ring-2 ring-green-300" : ""} 
                        ${incorrect ? "ring-2 ring-rose-300" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                checked={selected || false}
                                                onChange={() => selectAnswer(q.id, idx)}
                                                className="accent-blue-600"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver resultado
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-800 border border-blue-200 hover:bg-blue-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer quiz
                    </button>
                    {showResult && (
                        <span className="text-sm text-blue-900 font-semibold">
                            Pontuação: {correctCount} / {quizQuestions.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Associação */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-blue-900 mb-3">2) Relacione o Conceito à Descrição</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {matchPairs.map((p) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-blue-100 p-5"
                        >
                            <p className="font-medium text-blue-800">{p.concept}</p>
                            <select
                                className="mt-3 w-full border border-blue-200 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver correções
                    </button>
                    <button
                        onClick={resetMatch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-800 border border-blue-200 hover:bg-blue-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer relação
                    </button>
                    {showMatchResult && (
                        <span className="text-sm text-blue-900 font-semibold">
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
                    className="bg-white rounded-xl shadow-sm border border-blue-100 p-5"
                >
                    <h2 className="text-lg font-semibold text-blue-800">3) Ação Prática</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Observe o navegador que você está usando agora e responda:
                    </p>
                    <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Qual é o nome do navegador?</li>
                        <li>Ele tem perfil de usuário sincronizado?</li>
                        <li>Você consegue encontrar a barra de endereço?</li>
                        <li>Quantas guias estão abertas neste momento?</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        💡 Dica: abra as opções do navegador e explore o histórico, downloads e favoritos.
                    </p>
                </motion.article>

                <div className="mt-6">
                    <Link
                        href="/revisao/tipos-de-navegadores/material"
                        className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 underline"
                    >
                        <FaArrowLeft /> Voltar para o Material
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-blue-900/80">
                <p>
                    Dica do professor: o navegador é sua porta de entrada para o conhecimento — quanto melhor você o dominar, mais longe poderá ir! 🌍💻
                </p>
            </footer>
        </main>
    );
}
