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
        prompt: "O que é um sistema operacional?",
        options: [
            "Um programa de edição de texto usado para criar documentos.",
            "Um software que faz a comunicação entre o usuário e o computador.",
            "Um tipo de hardware responsável pelo armazenamento de dados.",
            "Um aplicativo usado para navegar na internet.",
        ],
        correctIndex: 1,
        help: "O sistema operacional é o software que conecta o usuário ao hardware.",
    },
    {
        id: 2,
        prompt: "Qual é a principal função de um sistema operacional?",
        options: [
            "Executar cálculos matemáticos complexos.",
            "Gerenciar os recursos do computador e permitir o uso de programas.",
            "Aumentar a velocidade do processador.",
            "Proteger o computador contra vírus.",
        ],
        correctIndex: 1,
        help: "O SO gerencia memória, dispositivos e programas.",
    },
    {
        id: 3,
        prompt: "Qual das opções a seguir é um exemplo de sistema operacional?",
        options: ["Google Chrome", "Linux", "Microsoft Office", "Adobe Photoshop"],
        correctIndex: 1,
        help: "Linux, Windows e macOS são exemplos de sistemas operacionais.",
    },
    {
        id: 4,
        prompt: "O Android é um sistema operacional utilizado em:",
        options: [
            "Computadores de mesa (desktop).",
            "Servidores de banco de dados.",
            "Smartphones e tablets.",
            "Impressoras e roteadores.",
        ],
        correctIndex: 2,
        help: "Android é o SO mais usado em celulares e tablets.",
    },
    {
        id: 5,
        prompt: "O que o sistema operacional faz logo após ligar o computador?",
        options: [
            "Executa os programas do usuário automaticamente.",
            "Realiza o carregamento e inicialização dos componentes do sistema.",
            "Apaga todos os arquivos temporários.",
            "Conecta automaticamente à internet.",
        ],
        correctIndex: 1,
        help: "O SO é o primeiro programa a ser executado, inicializando o sistema.",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        concept: "Windows",
        options: ["Computadores pessoais", "Smartphones da Apple", "Servidores corporativos", "TVs inteligentes"],
        correct: "Computadores pessoais",
    },
    {
        id: "pair-2",
        concept: "iOS",
        options: ["Celulares Android", "iPhones e iPads", "Computadores com Linux", "Servidores web"],
        correct: "iPhones e iPads",
    },
    {
        id: "pair-3",
        concept: "Linux",
        options: ["Apenas celulares", "Usado em servidores e PCs", "Sistema exclusivo da Apple", "Apenas videogames"],
        correct: "Usado em servidores e PCs",
    },
    {
        id: "pair-4",
        concept: "Android",
        options: ["Celulares da Samsung, Motorola, LG e outros", "Dispositivos da Apple", "Somente em notebooks", "Tablets com Windows"],
        correct: "Celulares da Samsung, Motorola, LG e outros",
    },
];

export default function SistemasOperacionaisAtividade() {
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
        <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 text-gray-800">
            {/* Cabeçalho */}
            <header className="px-6 md:px-12 py-8 border-b border-green-100 bg-white/70 backdrop-blur">
                <nav className="text-sm text-green-700">
                    <Link href="/revisao/sistemas-operacionais/material" className="underline hover:no-underline">
                        Sistemas Operacionais — Material
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaMicrochip className="text-green-600 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-green-800">
                        💻 Atividade — Sistemas Operacionais
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Teste seus conhecimentos sobre os sistemas operacionais e suas funções no computador e nos celulares.
                </p>
            </header>

            {/* Quiz */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-green-900 mb-3">1) Quiz Rápido</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quizQuestions.map((q) => (
                        <motion.article
                            key={q.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-green-100 p-5"
                        >
                            <p className="font-medium text-green-800">{q.id}. {q.prompt}</p>
                            <fieldset className="mt-3 space-y-2">
                                {q.options.map((opt, idx) => {
                                    const selected = answers[q.id] === idx;
                                    const correct = showResult && idx === q.correctIndex;
                                    const incorrect = showResult && selected && idx !== q.correctIndex;
                                    return (
                                        <label
                                            key={opt}
                                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer border 
                        ${selected ? "border-green-300 bg-green-50" : "border-gray-200"} 
                        ${correct ? "ring-2 ring-green-300" : ""} 
                        ${incorrect ? "ring-2 ring-rose-300" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${q.id}`}
                                                checked={selected || false}
                                                onChange={() => selectAnswer(q.id, idx)}
                                                className="accent-green-600"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver resultado
                    </button>
                    <button
                        onClick={resetQuiz}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-green-800 border border-green-200 hover:bg-green-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer quiz
                    </button>
                    {showResult && (
                        <span className="text-sm text-green-900 font-semibold">
                            Pontuação: {correctCount} / {quizQuestions.length}
                        </span>
                    )}
                </div>
            </section>

            {/* Associação */}
            <section className="px-6 md:px-12 py-6">
                <h2 className="text-xl font-bold text-green-900 mb-3">2) Relacione o Sistema ao Dispositivo</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {matchPairs.map((p) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-sm border border-green-100 p-5"
                        >
                            <p className="font-medium text-green-800">{p.concept}</p>
                            <select
                                className="mt-3 w-full border border-green-200 rounded-lg px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 text-white hover:bg-green-800 transition cursor-pointer"
                    >
                        <FaCheckCircle /> Ver correções
                    </button>
                    <button
                        onClick={resetMatch}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-green-800 border border-green-200 hover:bg-green-50 transition cursor-pointer"
                    >
                        <FaUndo /> Refazer relação
                    </button>
                    {showMatchResult && (
                        <span className="text-sm text-green-900 font-semibold">
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
                    className="bg-white rounded-xl shadow-sm border border-green-100 p-5"
                >
                    <h2 className="text-lg font-semibold text-green-800">3) Ação Prática</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        Observe o seu dispositivo (computador, celular ou tablet) e identifique:
                    </p>
                    <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Qual é o **sistema operacional** que ele usa?</li>
                        <li>Como é a **interface gráfica** (menus, ícones, janelas)?</li>
                        <li>Quais **funções** ele realiza automaticamente (ex: conexão com Wi-Fi, som, arquivos)?</li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                        Dica: descubra o sistema operacional do seu computador indo em <strong>Configurações → Sobre</strong> ou em <strong>Meu Computador → Propriedades</strong>.
                    </p>
                </motion.article>

                <div className="mt-6">
                    <Link
                        href="/revisao/sistemas-operacionais/material"
                        className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 underline"
                    >
                        <FaArrowLeft /> Voltar para o Material
                    </Link>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="px-6 md:px-12 py-6 text-xs text-green-900/80">
                <p>
                    Dica do professor: conhecer o sistema operacional é o primeiro passo para dominar qualquer tecnologia! 💚💻
                </p>
            </footer>
        </main>
    );
}
