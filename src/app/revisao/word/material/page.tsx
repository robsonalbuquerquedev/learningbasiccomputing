"use client";

import { motion } from "framer-motion";
import { FaFileWord, FaPrint } from "react-icons/fa";

export default function WordMaterial() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="max-w-4xl mx-auto px-4 py-10">
            {/* Título */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-blue-600 mb-6 text-center flex items-center justify-center gap-3"
            >
                <FaFileWord className="text-blue-600 text-4xl" />
                Explorando o Microsoft Word
            </motion.h1>

            {/* Botão de Impressão */}
            <div className="flex justify-center mb-6 no-print">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
                >
                    <FaPrint className="text-lg" />
                    Imprimir Página
                </button>
            </div>

            {/* Apresentação */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-6 text-justify"
            >
                O Microsoft Word é um dos editores de texto mais utilizados no mundo.
                Ele nos ajuda a escrever trabalhos, relatórios, histórias e até bilhetes.
                Mas o que muita gente não sabe é que o Word possui <span className="font-semibold">atalhos e truques secretos</span>
                que tornam nosso dia a dia mais fácil e rápido. Vamos descobrir alguns deles!
            </motion.p>

            {/* Lista de Dicas */}
            <motion.ol
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="list-decimal pl-6 space-y-4 text-gray-700"
            >
                <li>
                    <span className="font-semibold">Gerar texto automático:</span>{" "}
                    digite <code>=rand(2,3)</code> ou <code>=lorem(2,4)</code> e pressione <kbd>Enter</kbd>.
                </li>
                <li>
                    <span className="font-semibold">Aumentar ou diminuir letras:</span>{" "}
                    <kbd>Ctrl</kbd> + <kbd>[</kbd> (diminuir) ou <kbd>Ctrl</kbd> + <kbd>]</kbd> (aumentar).
                    Outra forma: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&gt;</kbd> (aumentar) ou
                    <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> (diminuir).
                </li>
                <li>
                    <span className="font-semibold">Limpar a formatação:</span>{" "}
                    pressione <kbd>Ctrl</kbd> + <kbd>Espaço</kbd>.
                </li>
                <li>
                    <span className="font-semibold">Apagar palavra inteira:</span>{" "}
                    pressione <kbd>Ctrl</kbd> + <kbd>Backspace</kbd>.
                </li>
                <li>
                    <span className="font-semibold">Área de transferência:</span>{" "}
                    copie várias palavras e cole usando a opção em{" "}
                    <span className="italic">Página Inicial &gt; Área de Transferência</span>.
                </li>
                <li>
                    <span className="font-semibold">Símbolos automáticos:</span>{" "}
                    digite <code>(c)</code> → © ou <code>(r)</code> → ®.
                </li>
                <li>
                    <span className="font-semibold">Criar tabelas rapidamente:</span>{" "}
                    pressione a tecla <kbd>+</kbd>, depois <kbd>Tab</kbd> para gerar colunas e linhas.
                </li>
                <li>
                    <span className="font-semibold">Adicionar fórmulas:</span>{" "}
                    vá em <span className="italic">Inserir &gt; Equação</span> ou use{" "}
                    <span className="italic">Equação à Tinta</span>.
                </li>
            </motion.ol>

            {/* Conclusão */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 text-center text-gray-700 italic"
            >
                “Dominar o Word é como ter uma super ferramenta mágica para escrever
                e organizar ideias de forma criativa e rápida!”
            </motion.p>
        </main>
    );
}
