"use client";

import { motion } from "framer-motion";
import { FaFileWord } from "react-icons/fa";

export default function WordAtividade() {
    const atividades = [
        { titulo: "💾 Salvar o documento", descricao: "Aprenda a salvar seu arquivo no formato .docx.", dificuldade: "Fácil" },
        { titulo: "📄 Abrir e editar PDF", descricao: "Abra um arquivo PDF e edite como se fosse um documento do Word.", dificuldade: "Fácil" },
        { titulo: "🎨 Formatação baseada em Estilo", descricao: "Use estilos prontos para deixar o texto mais bonito e organizado.", dificuldade: "Fácil" },
        { titulo: "✨ Criar um estilo", descricao: "Crie e personalize seus próprios estilos para aplicar rapidamente a qualquer texto.", dificuldade: "Médio" },
        { titulo: "🖼️ Adicionar imagens", descricao: "Insira imagens no documento e ajuste o posicionamento delas.", dificuldade: "Fácil" },
        { titulo: "📏 Marcas de tabulação", descricao: "Organize textos em colunas com alinhamento preciso usando tabulações.", dificuldade: "Médio" },
        { titulo: "📄 Configurações da página", descricao: "Ajuste margens, tamanho do papel e orientação do documento.", dificuldade: "Médio" },
        { titulo: "📰 Texto em colunas", descricao: "Transforme seu texto em formato de jornal ou revista.", dificuldade: "Médio" },
        { titulo: "↩️ Quebras de texto", descricao: "Controle onde o texto muda de linha, página ou seção.", dificuldade: "Médio" },
        { titulo: "🖋️ Cabeçalho e Rodapé", descricao: "Adicione informações no topo e no final de cada página.", dificuldade: "Médio" },
        { titulo: "🏗️ Estruturas avançadas", descricao: "Crie documentos longos com divisões, seções e partes diferentes.", dificuldade: "Difícil" },
        { titulo: "📘 Folha de rosto", descricao: "Crie a capa do seu trabalho escolar com título, autor e data.", dificuldade: "Fácil" },
        { titulo: "🎨 Componentes de design", descricao: "Use elementos visuais para deixar o documento mais atraente.", dificuldade: "Médio" },
        { titulo: "📚 Sumário automático", descricao: "Gere um sumário com base nos títulos do documento.", dificuldade: "Difícil" },
        { titulo: "🧾 Bibliografia ABNT automática", descricao: "Insira citações e gere referências formatadas automaticamente.", dificuldade: "Difícil" },
        { titulo: "💬 Notas de rodapé e comentários", descricao: "Adicione explicações e observações no rodapé do texto.", dificuldade: "Médio" },
        { titulo: "📝 Listas no Word", descricao: "Crie listas numeradas, com marcadores ou hierárquicas.", dificuldade: "Fácil" },
        { titulo: "📊 Tabelas no Word", descricao: "Monte tabelas para organizar informações em linhas e colunas.", dificuldade: "Médio" },
        { titulo: "➗ Fórmulas e Equações", descricao: "Insira expressões matemáticas com símbolos e formatação adequada.", dificuldade: "Difícil" },
    ];

    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen text-gray-800">
            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <FaFileWord className="text-blue-600 text-6xl mx-auto mb-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
                    💻 Atividades Práticas no Word
                </h1>
                <p className="mt-3 text-gray-700 text-lg">
                    Explore estas atividades em ordem de dificuldade — do básico ao avançado — e se torne um mestre no Word! ✨
                </p>
            </motion.div>

            {/* Lista de atividades */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {atividades.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-xl p-5 shadow-md border border-blue-100 hover:shadow-lg transition flex flex-col justify-between"
                    >
                        <h2 className="font-bold text-lg text-blue-700 mb-2">{item.titulo}</h2>
                        <p className="text-gray-700 mb-3">{item.descricao}</p>
                        <span
                            className={`inline-block px-3 py-1 text-sm rounded-full w-fit ${item.dificuldade === "Fácil"
                                    ? "bg-green-100 text-green-700"
                                    : item.dificuldade === "Médio"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                        >
                            {item.dificuldade}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Mensagem final */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-center text-gray-700 mt-10"
            >
                💡 Dica: comece pelas atividades fáceis e avance conforme se sentir mais confiante!
            </motion.p>
        </main>
    );
}
