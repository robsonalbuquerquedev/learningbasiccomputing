"use client";

import { motion } from "framer-motion";
import {
    FaFilePowerpoint,
    FaCloud,
    FaUsers,
    FaMagic,
    FaKeyboard,
} from "react-icons/fa";
import Link from "next/link";

export default function PowerPointMaterial() {
    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-indigo-200 min-h-screen text-gray-800">
            {/* Título e introdução */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <FaFilePowerpoint className="text-orange-600 text-6xl mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
                    🧑‍🏫 Aprendendo PowerPoint
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    O <strong>PowerPoint</strong> faz parte do pacote{" "}
                    <strong>Microsoft Office</strong> e é usado para criar
                    apresentações cheias de ideias, imagens e criatividade! 🎨✨
                </p>
            </motion.div>

            {/* Blocos de conteúdo principais */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Sobre o PowerPoint */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                >
                    <FaFilePowerpoint className="text-orange-600 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">
                        O que é o PowerPoint?
                    </h2>
                    <p>
                        É um programa que permite{" "}
                        <strong>criar e editar apresentações</strong> para mostrar
                        suas ideias, trabalhos escolares e muito mais!
                    </p>
                    <p className="mt-3 text-sm text-gray-500">
                        Disponível para computador, celular ou online em:{" "}
                        <Link
                            href="https://www.office.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            www.office.com
                        </Link>
                    </p>
                </motion.div>

                {/* Recursos principais */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                >
                    <FaMagic className="text-purple-600 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">
                        O que dá pra fazer?
                    </h2>
                    <ul className="text-left list-disc pl-6 space-y-2">
                        <li>Criar apresentações do zero ou com modelos prontos.</li>
                        <li>Adicionar textos, imagens, vídeos e artes.</li>
                        <li>Aplicar transições e animações divertidas!</li>
                        <li>Escolher designs e temas profissionais.</li>
                    </ul>
                </motion.div>

                {/* Organização e colaboração */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                >
                    <FaUsers className="text-green-600 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">
                        Trabalhando em equipe
                    </h2>
                    <p>
                        Você pode <strong>compartilhar</strong> sua apresentação com
                        amigos e colegas, adicionar comentários e criar juntos! 🤝💬
                    </p>
                </motion.div>

                {/* Salvamento e acesso */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                >
                    <FaCloud className="text-blue-500 text-5xl mb-3" />
                    <h2 className="font-bold text-xl mb-2">
                        Salvando e acessando
                    </h2>
                    <p>
                        Salve seu trabalho no <strong>OneDrive</strong> e acesse de
                        qualquer lugar: computador, tablet ou celular. Assim, você
                        nunca perde suas ideias! ☁️💾
                    </p>
                </motion.div>
            </div>

            {/* Dica final */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 text-center bg-white p-6 rounded-xl shadow-md"
            >
                <h3 className="font-bold text-xl text-indigo-700 mb-3">
                    🎯 Dica Extra
                </h3>
                <p>
                    Assim como no Word, o PowerPoint tem a{" "}
                    <strong>Faixa de Opções (Ribbon)</strong>, onde ficam todas as
                    ferramentas — como a aba <strong>"Página Inicial"</strong> e{" "}
                    <strong>"Inserir"</strong>. Cada <strong>slide</strong> é uma nova
                    página da sua história!
                </p>
                <p className="mt-3 text-gray-600">
                    Você pode reorganizar os slides, adicionar comentários e deixar
                    tudo no seu estilo. 😉
                </p>
            </motion.div>

            {/* Dicas e atalhos úteis */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 bg-white p-6 rounded-xl shadow-md"
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <FaKeyboard className="text-indigo-600 text-4xl mr-3" />
                        <h3 className="text-2xl font-bold text-indigo-700">
                            ⌨️ Dicas e Atalhos Úteis do PowerPoint
                        </h3>
                    </div>

                    {/* Botão de impressão */}
                    <button
                        onClick={() => {
                            const content = document.getElementById("atalhos-section");
                            if (!content) return;
                            const printWindow = window.open("", "", "width=800,height=600");
                            printWindow?.document.write(`
                                <html>
                                    <head>
                                        <title>Atalhos do PowerPoint</title>
                                        <style>
                                            body { font-family: Arial; padding: 20px; }
                                            h3 { color: #4f46e5; text-align: center; }
                                            ul { line-height: 1.8; font-size: 14px; }
                                            li { margin-bottom: 6px; }
                                            strong { color: #4338ca; }
                                        </style>
                                    </head>
                                    <body>
                                        <h3>⌨️ Dicas e Atalhos Úteis do PowerPoint</h3>
                                        ${content.innerHTML}
                                        <p>💡 Dica: explore os atalhos — eles tornam o trabalho muito mais rápido e divertido!</p>
                                    </body>
                                </html>
                            `);
                            printWindow?.document.close();
                            printWindow?.print();
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition print:hidden cursor-pointer"
                    >
                        🖨️ Imprimir Atalhos
                    </button>
                </div>

                {/* Lista de atalhos */}
                <ul
                    id="atalhos-section"
                    className="list-decimal list-inside space-y-2 text-gray-700"
                >
                    <li><strong>Ctrl + M</strong> → Insere um novo slide rapidamente.</li>
                    <li><strong>Ctrl + D</strong> → Duplica o slide atual.</li>
                    <li><strong>Ctrl + Shift + &gt;</strong> / <strong>Ctrl + Shift + &lt;</strong> → Aumenta ou diminui o tamanho da fonte.</li>
                    <li><strong>Ctrl + G</strong> → Agrupa objetos selecionados.</li>
                    <li><strong>Ctrl + Shift + G</strong> → Desagrupa objetos.</li>
                    <li><strong>F5</strong> → Inicia a apresentação do começo.</li>
                    <li><strong>Shift + F5</strong> → Inicia a apresentação do slide atual.</li>
                    <li><strong>Esc</strong> → Encerra a apresentação de slides.</li>
                    <li><strong>Ctrl + K</strong> → Insere um link (hiperlink).</li>
                    <li><strong>Ctrl + S</strong> → Salva a apresentação.</li>
                    <li><strong>Ctrl + A</strong> → Seleciona todos os elementos do slide.</li>
                    <li><strong>Ctrl + C</strong> / <strong>Ctrl + V</strong> → Copia e cola objetos.</li>
                    <li><strong>Ctrl + X</strong> → Recorta o elemento selecionado.</li>
                    <li><strong>Ctrl + Z</strong> → Desfaz a última ação.</li>
                    <li><strong>Ctrl + Y</strong> → Refaz a última ação desfeita.</li>
                    <li><strong>Ctrl + T</strong> → Seleciona todo o texto no slide.</li>
                    <li><strong>Ctrl + Alt + F</strong> → Cria nota de rodapé.</li>
                    <li><strong>Tab</strong> → Aumenta o recuo do parágrafo.</li>
                    <li><strong>Shift + Tab</strong> → Diminui o recuo do parágrafo.</li>
                    <li><strong>Alt + Shift + ↑ / ↓</strong> → Move o slide para cima ou para baixo na ordem.</li>
                    <li><strong>Ctrl + P</strong> → Abre a janela de impressão.</li>
                    <li><strong>Ctrl + Shift + C / Ctrl + Shift + V</strong> → Copia e aplica a formatação de objetos.</li>
                    <li><strong>Ctrl + L / E / R / J</strong> → Alinha o texto à esquerda, centro, direita ou justificado.</li>
                    <li><strong>Ctrl + Shift + H / U</strong> → Aplica ocultar texto / sublinhado.</li>
                    <li><strong>Ctrl + Alt + Shift + G</strong> → Agrupa gráficos e objetos complexos.</li>
                    <li><strong>Alt + N, P</strong> → Inserir imagem do computador.</li>
                    <li><strong>Alt + N, X</strong> → Inserir gráfico.</li>
                    <li><strong>Alt + H, S, C</strong> → Aplicar estilos rápidos ao texto.</li>
                </ul>

                <p className="mt-4 text-indigo-700 font-semibold">
                    💡 Dica: explore os atalhos — eles tornam o trabalho mais rápido, eficiente e divertido!
                </p>
            </motion.div>

            {/* Estilo global para impressão */}
            <style jsx global>{`
                @media print {
                    body * {
                        visibility: hidden;
                    }
                    #atalhos-section, #atalhos-section * {
                        visibility: visible;
                    }
                    #atalhos-section {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                }
            `}</style>
        </main>
    );
}
