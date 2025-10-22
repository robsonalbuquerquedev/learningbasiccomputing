"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMicrochip, FaCheckCircle, FaUndo, FaArrowLeft } from "react-icons/fa";

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
        prompt: "O que são recursos computacionais?",
        options: [
            "Apenas os aplicativos instalados no computador",
            "Os elementos físicos e lógicos que tornam possível o funcionamento de sistemas de computação",
            "Somente os cabos de rede que conectam os computadores à internet",
            "Dispositivos usados apenas em jogos e simulações",
        ],
        correctIndex: 1,
        help: "Recursos computacionais incluem hardware, software, rede e armazenamento.",
    },
    {
        id: 2,
        prompt: "Qual das opções representa um exemplo de hardware?",
        options: [
            "Google Drive",
            "Memória RAM",
            "Sistema Operacional Windows",
            "Microsoft Word",
        ],
        correctIndex: 1,
        help: "A memória RAM é um componente físico do computador.",
    },
    {
        id: 3,
        prompt: "O que é software?",
        options: [
            "A parte física do computador, como o processador e a memória",
            "Os programas e sistemas que dão instruções ao hardware",
            "Um tipo de cabo de conexão de dados",
            "Um equipamento que armazena informações",
        ],
        correctIndex: 1,
        help: "O software é a parte lógica que orienta o hardware.",
    },
    {
        id: 4,
        prompt: "Qual é a principal função da rede em um sistema computacional?",
        options: [
            "Conectar diferentes dispositivos e permitir a troca de informações",
            "Executar cálculos matemáticos complexos",
            "Armazenar arquivos localmente",
            "Controlar o funcionamento do sistema operacional",
        ],
        correctIndex: 0,
        help: "A rede é responsável pela comunicação entre dispositivos.",
    },
    {
        id: 5,
        prompt: "O que é armazenamento em nuvem?",
        options: [
            "Um tipo de memória RAM do computador",
            "Um local físico para guardar pen drives",
            "Um serviço que armazena arquivos em servidores online acessíveis pela internet",
            "Um aplicativo de edição de texto",
        ],
        correctIndex: 2,
        help: "O armazenamento em nuvem mantém os arquivos em servidores remotos.",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        concept: "Hardware",
        options: [
            "Parte física do computador (CPU, memória, HD)",
            "Programas e sistemas que controlam o hardware",
            "Serviços online de armazenamento",
        ],
        correct: "Parte física do computador (CPU, memória, HD)",
    },
    {
        id: "pair-2",
        concept: "Software",
        options: [
            "Componentes eletrônicos responsáveis pelo processamento",
            "Parte lógica: programas e sistemas operacionais",
            "Canais de comunicação e dados",
        ],
        correct: "Parte lógica: programas e sistemas operacionais",
    },
    {
        id: "pair-3",
        concept: "Rede",
        options: [
            "Permite a comunicação entre dispositivos e acesso à internet",
            "Responsável pelo armazenamento de longo prazo",
            "Interface de controle do processador",
        ],
        correct: "Permite a comunicação entre dispositivos e acesso à internet",
    },
    {
        id: "pair-4",
        concept: "Armazenamento",
        options: [
            "Área destinada a guardar informações permanentemente",
            "Memória usada apenas para jogos e simulações",
            "Parte que processa cálculos matemáticos",
        ],
        correct: "Área destinada a guardar informações permanentemente",
    },
];

export default function RecursosComputacionaisAtividade() {
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
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-sky-100 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-sky-100 bg-white/70 backdrop-blur">
                <nav className="text-sm text-sky-700">
                    <Link href="/revisao/recursos-computacionais/material" className="underline hover:no-underline">
                        Recursos Computacionais — Material
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaMicrochip className="text-sky-600 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-800">
                        💻 Atividade — Recursos Computacionais
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Teste seus conhecimentos sobre os principais recursos que tornam a tecnologia e a nuvem possíveis.
                </p>
            </header>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-sky-900 mb-3">1) Quiz Rápido</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quizQuestions.map((q) => (
                        <motion.article
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-sky-100 p-5"
                        >
                            <p className="font-medium text-sky-800">{q.id}. {q.prompt}</p>
                            <fieldset className="mt-3 space-y-2">
                                {q.options.map((opt, idx) => {
                                    const selected = answers[q.id] === idx;
                                    const correct = showResult && idx === q.correctIndex;
                                    const incorrect = showResult && selected && idx !== q.correctIndex;
                                    return (
                                        <label
                                            key={opt}
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border 
                        ${selected ? "border-sky-300 bg-sky-50" : "border-gray-200"} 
                        ${correct ? "ring-2 ring-green-300" : ""} 
                        ${incorrect ? "ring-2 ring-rose-300" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                checked={selected || false}
                                                onChange={() => selectAnswer(q.id, idx)}
                                                className="accent-sky-600"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver resultado
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-800 border border-sky-200 hover:bg-sky-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer quiz
                    </button>
                    {showResult && (
                        <span className="text-sm text-sky-900 font-semibold">
                            Pontuação: {correctCount} / {quizQuestions.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Relacionar */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-sky-900 mb-3">2) Relacione o Conceito à Descrição</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {matchPairs.map((p) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-sky-100 p-5"
                        >
                            <p className="font-medium text-sky-800">{p.concept}</p>
                            <select
                                className="mt-3 w-full border border-sky-200 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver correções
                    </button>
                    <button
                        onClick={resetMatch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-800 border border-sky-200 hover:bg-sky-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer relação
                    </button>
                    {showMatchResult && (
                        <span className="text-sm text-sky-900 font-semibold">
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
                    className="bg-white rounded-xl shadow-sm border border-sky-100 p-5"
                >
                    <h2 className="text-lg font-semibold text-sky-800">3) Ação Prática</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Observe seu computador ou celular: identifique um exemplo de hardware (como o processador),
                        um software (como o navegador), a rede (Wi-Fi) e o armazenamento (Google Drive, por exemplo).
                        Pense como todos esses recursos se conectam quando você envia um arquivo para a nuvem.
                    </p>
                </motion.article>

                <div className="mt-6">
                    <Link
                        href="/revisao/recursos-computacionais/material"
                        className="inline-flex items-center gap-2 text-sky-800 hover:text-sky-900 underline"
                    >
                        <FaArrowLeft /> Voltar para o Material
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-sky-900/80">
                <p>
                    Dica do professor: todo sistema de nuvem só é possível porque há hardware, software, rede e armazenamento trabalhando juntos. ⚙️☁️
                </p>
            </footer>
        </main>
    );
}
