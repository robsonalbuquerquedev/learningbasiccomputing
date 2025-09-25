// src/app/computer/page.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaMicrochip,
    FaMemory,
    FaHdd,
    FaTv,
    FaKeyboard,
    FaMouse,
    FaNetworkWired,
} from "react-icons/fa";

/**
 * ComputerPage
 * - Hero: full computer image (computador.png)
 * - Grid: cards for components (icon + real image)
 * - Video: YouTube embed
 * - QuizSection: interactive quiz
 */
export default function ComputerPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center p-6 md:p-10">
            {/* HERO: full computer image */}
            <figure className="w-full max-w-4xl mb-8">
                <Image
                    src="/computador.png"
                    alt="Computador completo - visão externa"
                    width={1200}
                    height={600}
                    priority
                    className="w-full h-auto rounded-2xl shadow-lg object-contain"
                />
                <figcaption className="text-center text-blue-800 mt-4 text-lg md:text-xl">
                    Este é um computador por fora — agora vamos abrir e conhecer as peças!
                </figcaption>
            </figure>

            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 md:mb-10">
                💻 O que é um Computador?
            </h1>

            <p className="text-lg md:text-xl text-center max-w-3xl mb-8 text-blue-800">
                O computador é como uma pessoa: cada parte tem uma função. Vamos ver as
                principais peças com imagens e explicar de forma simples.
            </p>

            {/* COMPONENTS GRID */}
            <section
                aria-label="Computer components"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
            >
                <AnimatedCard
                    icon={<FaNetworkWired size={72} />}
                    image="/placamae.png"
                    title="Placa-Mãe"
                    description="O 'corpo' do computador, onde tudo se conecta."
                />

                <AnimatedCard
                    icon={<FaMicrochip size={72} />}
                    image="/processador.png"
                    title="Processador"
                    description="O cérebro: faz os cálculos e decisões."
                />

                <AnimatedCard
                    icon={<FaMemory size={72} />}
                    image="/memoriaram.png"
                    title="Memória RAM"
                    description="Memória de curto prazo: guarda coisas temporárias."
                />

                <AnimatedCard
                    icon={<FaHdd size={72} />}
                    image="/HD.png"
                    title="HD / SSD"
                    description="Memória de longo prazo: guarda arquivos e programas."
                />

                <AnimatedCard
                    icon={<FaTv size={72} />}
                    image="/monitor.png"
                    title="Monitor"
                    description="Os olhos: mostram o que o computador está fazendo."
                />

                <AnimatedCard
                    icon={<FaKeyboard size={72} />}
                    image="/teclado.png"
                    title="Teclado"
                    description="Uma das mãos: para digitar e enviar comandos."
                />

                <AnimatedCard
                    icon={<FaMouse size={72} />}
                    image="/mouse.png"
                    title="Mouse"
                    description="Outra mão: para apontar, clicar e controlar."
                />
            </section>

            {/* VIDEO SECTION */}
            <section className="mt-16 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">
                    🎥 Veja na prática!
                </h2>
                <div className="w-full rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative" style={{ paddingTop: "56.25%" }}>
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/yAfR9q9RNB8?si=Ctg-XBx0mRk_a3Js"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* QUIZ SECTION */}
            <QuizSection />
        </main>
    );
}

function AnimatedCard({
    icon,
    image,
    title,
    description,
}: {
    icon: React.ReactNode;
    image: string;
    title: string;
    description: string;
}) {
    return (
        <motion.figure
            whileHover={{ scale: 1.04, rotate: 0.8 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
            <div className="text-blue-600 mb-3">{icon}</div>

            <Image
                src={image}
                alt={`${title} - imagem do componente`}
                width={160}
                height={120}
                className="mb-4 object-contain"
            />

            <figcaption>
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">{title}</h3>
                <p className="text-blue-700">{description}</p>
            </figcaption>
        </motion.figure>
    );
}

// QUIZ SECTION
function QuizSection() {
    const questions = [
        {
            question: "Qual peça é conhecida como o cérebro do computador?",
            options: ["Memória RAM", "Processador", "HD"],
            answer: "Processador",
        },
        {
            question: "Onde ficam guardados os arquivos de longo prazo?",
            options: ["Memória RAM", "HD / SSD", "Placa-Mãe"],
            answer: "HD / SSD",
        },
        {
            question: "Qual peça usamos para digitar letras e números?",
            options: ["Mouse", "Monitor", "Teclado"],
            answer: "Teclado",
        },
        {
            question: "Qual peça permite que você mova o cursor e clique em objetos na tela?",
            options: ["Mouse", "Teclado", "Monitor"],
            answer: "Mouse",
        },
        {
            question: "Qual peça funciona como os olhos do computador?",
            options: ["Monitor", "Processador", "HD"],
            answer: "Monitor",
        },
        {
            question: "Qual peça conecta todos os componentes do computador?",
            options: ["Placa-Mãe", "Memória RAM", "Teclado"],
            answer: "Placa-Mãe",
        },
        {
            question: "Qual memória guarda informações temporárias enquanto você usa o computador?",
            options: ["HD / SSD", "Memória RAM", "Processador"],
            answer: "Memória RAM",
        },
        {
            question: "Qual dessas peças não é necessária para o computador funcionar?",
            options: ["Processador", "Teclado", "Placa-Mãe"],
            answer: "Teclado",
        },
        {
            question: "Qual peça armazena os programas e arquivos mesmo quando o computador está desligado?",
            options: ["Memória RAM", "HD / SSD", "Processador"],
            answer: "HD / SSD",
        },
    ];
    
    const [current, setCurrent] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleAnswer = (option: string) => {
        if (option === questions[current].answer) {
            setFeedback("✅ Acertou!");
            setTimeout(() => {
                setFeedback("");
                setCurrent((prev) => prev + 1); // agora pode chegar em questions.length
            }, 1000);
        } else {
            setFeedback("❌ Tente novamente!");
        }
    };

    return (
        <section className="mt-20 w-full max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">🧠 Quiz Final</h2>

            {current < questions.length ? (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <p className="text-xl font-medium text-blue-800 mb-6">
                        {questions[current].question}
                    </p>
                    <div className="flex flex-col gap-4">
                        {questions[current].options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition cursor-pointer"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {feedback && (
                        <p className="mt-4 text-lg font-semibold text-blue-900">{feedback}</p>
                    )}
                </div>
            ) : (
                <div className="bg-green-100 rounded-2xl shadow-lg p-6">
                    <p className="text-2xl font-bold text-green-800 mb-4">
                        🎉 Parabéns! Você completou o quiz!
                    </p>
                    <p className="text-lg text-green-700">
                        Agora você conhece as partes básicas de um computador!
                    </p>
                </div>
            )}
        </section>
    );
}
