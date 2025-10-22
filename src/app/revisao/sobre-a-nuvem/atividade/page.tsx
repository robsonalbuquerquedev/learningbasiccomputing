"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCloud, FaCheckCircle, FaUndo, FaArrowLeft } from "react-icons/fa";

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
        prompt: "O que é Computação em Nuvem?",
        options: [
            "Um serviço que exige computadores locais potentes para funcionar",
            "Um modelo que usa a internet para armazenar e processar dados remotamente",
            "Um software instalado no computador para backup manual de dados",
            "Um tipo de cabo de rede de alta velocidade",
        ],
        correctIndex: 1,
        help: "A nuvem utiliza servidores online acessados pela internet.",
    },
    {
        id: 2,
        prompt: "Qual das opções é uma vantagem da Computação em Nuvem?",
        options: [
            "Custo mais alto com servidores físicos",
            "Acesso limitado a arquivos",
            "Acesso remoto e economia de recursos",
            "Maior risco de perda de dados",
        ],
        correctIndex: 2,
        help: "A nuvem é conhecida pela flexibilidade e redução de custos.",
    },
    {
        id: 3,
        prompt: "O que significa 'armazenamento em nuvem'?",
        options: [
            "Guardar dados apenas no disco rígido local",
            "Salvar dados em servidores na internet",
            "Backup automático em pendrives",
            "Sincronização com dispositivos via cabo USB",
        ],
        correctIndex: 1,
        help: "Os dados são salvos em servidores remotos, acessíveis pela internet.",
    },
    {
        id: 4,
        prompt: "Qual serviço abaixo é um exemplo de armazenamento em nuvem?",
        options: ["Google Drive", "Microsoft Word", "Visual Studio", "Notepad"],
        correctIndex: 0,
        help: "Google Drive é um exemplo clássico de armazenamento em nuvem.",
    },
    {
        id: 5,
        prompt: "Como a Computação em Nuvem funciona?",
        options: [
            "Os dados são processados apenas em um único computador local",
            "Ela utiliza uma rede de servidores remotos conectados à internet",
            "Funciona apenas quando o usuário está offline",
            "Depende de dispositivos físicos conectados diretamente",
        ],
        correctIndex: 1,
        help: "A nuvem depende de servidores remotos para processar e armazenar informações.",
    },
];

const matchPairs = [
    {
        id: "pair-1",
        concept: "Flexibilidade",
        options: ["Escalabilidade", "Acesso remoto", "Custo elevado"],
        correct: "Acesso remoto",
    },
    {
        id: "pair-2",
        concept: "Armazenamento em nuvem",
        options: [
            "Guardar arquivos em servidores online",
            "Usar HDs locais",
            "Manter cópias físicas de documentos",
        ],
        correct: "Guardar arquivos em servidores online",
    },
    {
        id: "pair-3",
        concept: "Backup automático",
        options: [
            "Cópias de segurança feitas de forma manual",
            "Cópias salvas automaticamente em servidores online",
            "Exclusão definitiva de arquivos",
        ],
        correct: "Cópias salvas automaticamente em servidores online",
    },
];

export default function SobreANuvemAtividade() {
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
        <main className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-200 text-gray-800">
            <header className="px-6 md:px-12 py-8 border-b border-sky-100 bg-white/70 backdrop-blur">
                <nav className="text-sm text-sky-700">
                    <Link href="/revisao/sobre-a-nuvem/material" className="underline hover:no-underline">
                        Computação em Nuvem — Material
                    </Link>{" "}
                    / <span className="font-semibold">Atividade</span>
                </nav>

                <div className="mt-4 flex items-center gap-3">
                    <FaCloud className="text-sky-600 text-3xl" />
                    <h1 className="text-2xl md:text-3xl font-bold text-sky-800">
                        ☁️ Atividade — Computação em Nuvem
                    </h1>
                </div>
                <p className="mt-2 text-gray-600">
                    Vamos revisar o que você aprendeu sobre Cloud Computing com perguntas e desafios práticos!
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
                <h2 className="text-xl font-bold text-sky-900 mb-3">2) Relacione o Conceito à Explicação</h2>
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
                        Acesse o Google Drive e envie um arquivo pequeno (ex: imagem ou documento). Observe:
                        você consegue abri-lo em outro dispositivo? Isso é a nuvem em ação!
                    </p>
                    <div className="mt-3 flex gap-3 flex-wrap">
                        <Link
                            href="/revisao/sobre-a-nuvem/material"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition"
                        >
                            Revisar conteúdo
                        </Link>
                        <a
                            href="https://drive.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-sky-800 border border-sky-200 hover:bg-sky-50 transition"
                        >
                            Testar no Google Drive
                        </a>
                    </div>
                </motion.article>

                <div className="mt-6">
                    <Link
                        href="/revisao/sobre-a-nuvem/material"
                        className="inline-flex items-center gap-2 text-sky-800 hover:text-sky-900 underline"
                    >
                        <FaArrowLeft /> Voltar para o Material
                    </Link>
                </div>
            </section>

            <footer className="px-6 md:px-12 py-6 text-xs text-sky-900/80">
                <p>
                    Dica do professor: a nuvem só parece mágica — na verdade, é engenharia + internet + curiosidade! ☁️✨
                </p>
            </footer>
        </main>
    );
}
