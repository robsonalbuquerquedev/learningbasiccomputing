"use client";

import { motion } from "framer-motion";
import { FaFilePowerpoint } from "react-icons/fa";

export default function PowerPointAtividade() {
    const atividades = [
        { titulo: "🖼️ Criar uma nova apresentação", descricao: "Aprenda a criar uma apresentação do zero e salvar no formato .pptx.", dificuldade: "Fácil" },
        { titulo: "🎨 Escolher um tema", descricao: "Use temas prontos para deixar seus slides mais bonitos e padronizados.", dificuldade: "Fácil" },
        { titulo: "📝 Adicionar e organizar slides", descricao: "Insira novos slides, copie, mova e exclua conforme sua necessidade.", dificuldade: "Fácil" },
        { titulo: "💬 Inserir textos e títulos", descricao: "Adicione caixas de texto e títulos para deixar sua apresentação mais clara.", dificuldade: "Fácil" },
        { titulo: "🖼️ Inserir imagens e ícones", descricao: "Inclua imagens, formas e ícones para ilustrar suas ideias.", dificuldade: "Fácil" },
        { titulo: "📊 Inserir gráficos e tabelas", descricao: "Transforme dados em elementos visuais usando gráficos e tabelas.", dificuldade: "Médio" },
        { titulo: "🎬 Aplicar transições entre slides", descricao: "Adicione efeitos de transição suaves e profissionais entre os slides.", dificuldade: "Médio" },
        { titulo: "✨ Criar animações em objetos", descricao: "Dê vida aos elementos do slide com animações personalizadas.", dificuldade: "Médio" },
        { titulo: "🎙️ Adicionar narração ou áudio", descricao: "Grave narrações ou insira sons de fundo em sua apresentação.", dificuldade: "Médio" },
        { titulo: "📽️ Modo de Apresentação", descricao: "Use o modo de exibição de slides para apresentar de forma fluida.", dificuldade: "Fácil" },
        { titulo: "🧩 Inserir vídeos", descricao: "Inclua vídeos locais ou online e ajuste o tempo de reprodução.", dificuldade: "Médio" },
        { titulo: "📐 Alinhamento e guias", descricao: "Use guias inteligentes para alinhar os elementos com precisão.", dificuldade: "Médio" },
        { titulo: "🪄 Criar modelo mestre de slides", descricao: "Personalize o modelo mestre para aplicar o mesmo layout a todos os slides.", dificuldade: "Difícil" },
        { titulo: "📤 Exportar como PDF ou vídeo", descricao: "Transforme sua apresentação em arquivo PDF ou vídeo para compartilhar.", dificuldade: "Médio" },
        { titulo: "👥 Colaboração online", descricao: "Compartilhe sua apresentação e trabalhe com colegas em tempo real.", dificuldade: "Difícil" },
        { titulo: "📦 Inserir SmartArt", descricao: "Crie diagramas e fluxos visuais prontos para uso.", dificuldade: "Médio" },
        { titulo: "🎯 Criar um pitch rápido", descricao: "Monte uma apresentação curta e objetiva com até 5 slides.", dificuldade: "Fácil" },
        { titulo: "📑 Inserir hiperlinks", descricao: "Adicione links para outros slides, sites ou documentos.", dificuldade: "Médio" },
        { titulo: "📸 Capturas e gravações de tela", descricao: "Insira capturas ou grave a tela diretamente no PowerPoint.", dificuldade: "Difícil" },
    ];

    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-indigo-200 min-h-screen text-gray-800">
            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <FaFilePowerpoint className="text-orange-600 text-6xl mx-auto mb-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">
                    🎥 Atividades Práticas no PowerPoint
                </h1>
                <p className="mt-3 text-gray-700 text-lg">
                    Explore estas atividades em ordem de dificuldade — do básico ao avançado — e se torne um craque nas apresentações! 🚀
                </p>
            </motion.div>

            {/* Lista de atividades */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {atividades.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-xl p-5 shadow-md border border-indigo-100 hover:shadow-lg transition flex flex-col justify-between"
                    >
                        <h2 className="font-bold text-lg text-indigo-700 mb-2">{item.titulo}</h2>
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
                💡 Dica: comece pelas atividades mais simples e vá aumentando o desafio à medida que dominar as ferramentas!
            </motion.p>
        </main>
    );
}
