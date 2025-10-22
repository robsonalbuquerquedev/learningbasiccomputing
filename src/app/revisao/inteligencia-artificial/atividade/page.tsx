// app/revisao/inteligencia-artificial/atividade/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRobot, FaCheckCircle, FaUndo, FaArrowLeft } from "react-icons/fa";

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
        prompt:
            "Qual ferramenta é indicada para criar vídeos com narração em vários idiomas usando IA?",
        options: ["Scholar GPT", "Video AI by InVideo", "Wolfram", "Resume AI"],
        correctIndex: 1,
        help: "A pista está em 'vídeos' e 'narração' — é a InVideo.",
    },
    {
        id: 2,
        prompt:
            "Se você precisa pesquisar artigos científicos e obter leitura crítica, qual escolher?",
        options: ["Canva", "Humanize AI", "Scholar GPT", "DesignerGPT"],
        correctIndex: 2,
        help: "Scholar GPT foi feito para bases como Google Scholar e PubMed.",
    },
    {
        id: 3,
        prompt:
            "Para criar fluxogramas, mapas mentais e ERDs rapidamente, qual seção agrupa essas IAs?",
        options: ["Estilo de Vida", "Produtividade", "DALL·E (Imagens)", "Programação"],
        correctIndex: 1,
        help: "Produtividade reúne Diagrams, ShowMe, Presentation etc.",
    },
    {
        id: 4,
        prompt:
            "Qual opção é mais adequada para cálculos e conhecimento científico curado?",
        options: ["Wolfram", "R Wizard", "Expedia", "Glibatree Art Designer"],
        correctIndex: 0,
        help: "Wolfram / Wolfram|Alpha é referência para isso.",
    },
    {
        id: 5,
        prompt:
            "Você quer transformar uma descrição de texto em imagens originais. Qual seção visitar?",
        options: [
            "Pesquisa e Análise",
            "Educação",
            "DALL·E — Criação de Imagens com IA",
            "Programação e Desenvolvimento",
        ],
        correctIndex: 2,
        help: "DALL·E (Imagens) é o hub para geradores de imagens.",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        tool: "TurboScribe Transcription",
        categories: ["Produtividade", "Pesquisa e Análise", "Estilo de Vida"],
        correct: "Produtividade",
    },
    {
        id: "pair-2",
        tool: "Consensus",
        categories: ["Pesquisa e Análise", "DALL·E (Imagens)", "Programação"],
        correct: "Pesquisa e Análise",
    },
    {
        id: "pair-3",
        tool: "Glibatree Art Designer",
        categories: ["DALL·E (Imagens)", "Estilo de Vida", "Educação"],
        correct: "DALL·E (Imagens)",
    },
];

export default function InteligenciaArtificialAtividadePage() {
    const [answers, setAnswers] = useState<Record<number, number | null>>(
        () => Object.fromEntries(quizQuestions.map((q) => [q.id, null]))
    );
    const [showResult, setShowResult] = useState(false);

    const [matchSelections, setMatchSelections] = useState<Record<string, string>>(
        () => Object.fromEntries(matchPairs.map((p) => [p.id, ""]))
    );
    const [showMatchResult, setShowMatchResult] = useState(false);

    const correctCount = useMemo(() => {
        return quizQuestions.reduce((acc, q) => {
            const userIndex = answers[q.id];
            return acc + (userIndex === q.correctIndex ? 1 : 0);
        }, 0);
    }, [answers]);

    const matchCorrectCount = useMemo(() => {
        return matchPairs.reduce((acc, p) => {
            return acc + (matchSelections[p.id] === p.correct ? 1 : 0);
        }, 0);
    }, [matchSelections]);

    function selectAnswer(qid: number, idx: number) {
        setAnswers((prev) => ({ ...prev, [qid]: idx }));
    }

    function resetQuiz() {
        setAnswers(Object.fromEntries(quizQuestions.map((q) => [q.id, null])));
        setShowResult(false);
    }

    function resetMatch() {
        setMatchSelections(Object.fromEntries(matchPairs.map((p) => [p.id, ""])));
        setShowMatchResult(false);
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-200 text-gray-800">
            <header className="px-6 md:px-12 py-8 border-b border-indigo-100 bg-white/70 backdrop-blur">
                <nav aria-label="breadcrumb" className="text-sm text-indigo-700">
                    <Link href="/revisao/inteligencia-artificial/material" className="underline hover:no-underline">
                        Inteligência Artificial — Ferramentas em Destaque
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>
                <div className="mt-4 flex items-center gap-3">
                    <FaRobot className="text-indigo-700 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">
                        Atividade Prática — Fixação de Conteúdo
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Exercícios rápidos para consolidar o que você viu nas seções (Produtividade, Pesquisa e
                    Análise, Educação, Estilo de Vida, DALL·E e Programação).
                </p>
            </header>

            {/* Intro / objetivo */}
            <section className="px-6 md:px-12 py-6">
                <article className="bg-white rounded-xl shadow-sm border border-indigo-100 p-5">
                    <h2 className="text-lg font-semibold text-indigo-800">Como funciona</h2>
                    <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                        <li>Responda o quiz de múltipla escolha (5 questões).</li>
                        <li>Relacione ferramenta ↔ categoria correta.</li>
                        <li>Ao final, veja sua pontuação e revise onde precisar.</li>
                    </ul>
                </article>
            </section>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-4">
                <h2 className="text-xl font-bold text-indigo-900 mb-3">1) Quiz Rápido</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quizQuestions.map((q) => (
                        <motion.article
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-indigo-100 p-5"
                        >
                            <p className="font-medium text-indigo-800">{q.id}. {q.prompt}</p>
                            <fieldset className="mt-3 space-y-2">
                                {q.options.map((opt, idx) => {
                                    const selected = answers[q.id] === idx;
                                    const correct = showResult && idx === q.correctIndex;
                                    const incorrect = showResult && selected && idx !== q.correctIndex;

                                    return (
                                        <label
                                            key={opt}
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border 
                        ${selected ? "border-indigo-300 bg-indigo-50" : "border-gray-200"} 
                        ${correct ? "ring-2 ring-green-300" : ""} 
                        ${incorrect ? "ring-2 ring-rose-300" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                className="accent-indigo-600"
                                                checked={selected || false}
                                                onChange={() => selectAnswer(q.id, idx)}
                                                aria-checked={selected || false}
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver resultado
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer quiz
                    </button>
                    {showResult && (
                        <span className="text-sm text-indigo-900 font-semibold">
                            Pontuação: {correctCount} / {quizQuestions.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Matching */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-indigo-900 mb-3">2) Relacione Ferramenta ↔ Categoria</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {matchPairs.map((p) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-indigo-100 p-5"
                        >
                            <p className="font-medium text-indigo-800">{p.tool}</p>
                            <label htmlFor={p.id} className="sr-only">
                                Selecione a categoria para {p.tool}
                            </label>
                            <select
                                id={p.id}
                                className="mt-3 w-full border border-indigo-200 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                value={matchSelections[p.id]}
                                onChange={(e) =>
                                    setMatchSelections((prev) => ({ ...prev, [p.id]: e.target.value }))
                                }
                            >
                                <option value="">Selecione a categoria...</option>
                                {p.categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>

                            {showMatchResult && (
                                <p
                                    className={`mt-3 text-sm ${matchSelections[p.id] === p.correct ? "text-green-700" : "text-rose-700"
                                        }`}
                                >
                                    {matchSelections[p.id] === p.correct
                                        ? "✅ Correto!"
                                        : `❌ Categoria correta: ${p.correct}`}
                                </p>
                            )}
                        </motion.article>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                        onClick={() => setShowMatchResult(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver correções
                    </button>
                    <button
                        onClick={resetMatch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer relação
                    </button>
                    {showMatchResult && (
                        <span className="text-sm text-indigo-900 font-semibold">
                            Acertos: {matchCorrectCount} / {matchPairs.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Ação prática / CTA para revisão */}
            <section className="px-6 md:px-12 pb-10">
                <article className="bg-white rounded-xl shadow-sm border border-indigo-100 p-5">
                    <h2 className="text-lg font-semibold text-indigo-800">3) Ação Rápida</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Abra a rota de revisão para escolher uma ferramenta e testar por 5 minutos. Volte aqui e
                        marque onde você teve mais dúvidas.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                        <Link
                            href="/revisao/inteligencia-artificial/material"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-800 transition"
                        >
                            Revisar conteúdo
                        </Link>
                        <a
                            href="https://invideo.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-800 border border-indigo-200 hover:bg-indigo-50 transition"
                        >
                            Testar InVideo (vídeos)
                        </a>
                    </div>
                </article>

                <div className="mt-6">
                    <Link
                        href="/revisao/inteligencia-artificial/material"
                        className="inline-flex items-center gap-2 text-indigo-800 hover:text-indigo-900 underline"
                    >
                        <FaArrowLeft /> Voltar para “Ferramentas em Destaque”
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-indigo-900/80">
                <p>
                    Dica do professor: acertei tudo? Ótimo. Errei algo? Volte na seção pertinente e refaça o
                    quiz. Aprender é iterar. 🚀
                </p>
            </footer>
        </main>
    );
}
