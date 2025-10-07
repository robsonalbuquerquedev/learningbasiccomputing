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
                Mas o que muita gente não sabe é que o Word possui <span className="font-semibold">atalhos e truques secretos</span> que tornam nosso dia a dia mais fácil e rápido. Vamos descobrir alguns deles!
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
                    Outra forma: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&gt;</kbd> (aumentar) ou <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&lt;</kbd> (diminuir).
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
                <li>
                    <span className="font-semibold">Salvar documento:</span>{" "}
                    pressione <span className="italic">Ctrl + B</span> (versão em português) ou{" "}
                    <span className="italic">Ctrl + S</span> (versão em inglês).
                </li>
                <li>
                    <span className="font-semibold">Desfazer ação:</span>{" "}
                    pressione <span className="italic">Ctrl + Z</span> (funciona tanto em português quanto em inglês).
                </li>

                <li>
                    <span className="font-semibold">Refazer ação:</span>{" "}
                    pressione <span className="italic">Ctrl + R</span> (versão em português) ou{" "}
                    <span className="italic">Ctrl + Y</span> (versão em inglês).
                </li>
                <li>
                    <span className="font-semibold">Diga-me o que fazer:</span>{" "}
                    pressione <span className="italic">Alt + G</span> para ativar a barra de pesquisa{" "}
                    <span className="italic">&quot;Diga-me o que você deseja fazer&quot;</span> no Word.
                </li>
                <li>
                    <span className="font-semibold">Navegar pela Faixa de Opções:</span>{" "}
                    pressione apenas <span className="italic">Alt</span> e o Word exibirá letras e números
                    sobre cada guia/comando da <span className="italic">Ribbon</span>. Em seguida,
                    pressione a letra correspondente para acessar a guia ou comando desejado,
                    sem precisar do mouse.
                </li>
                <li>
                    <span className="font-semibold">Selecionar texto no Word:</span>{" "}
                    Existem várias maneiras de selecionar o texto:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>A forma mais comum: use o mouse, posicione no início do texto, segure o botão e arraste até o final.</li>
                        <li>Selecionar uma linha inteira: mova o mouse um pouco para a esquerda até que ele vire uma seta e clique — a linha inteira será selecionada.</li>
                        <li>Selecionar um parágrafo inteiro: clique três vezes no meio do parágrafo.</li>
                        <li>Selecionar frases específicas: clique no meio da frase, segure <kbd>Ctrl</kbd> e clique novamente.</li>
                        <li>Quando há uma imagem, selecione o texto segurando <kbd>Alt</kbd> + mouse, assim o texto será selecionado sem que a imagem atrapalhe.</li>
                    </ul>
                </li>
                <li>
                    <span className="font-semibold">Selecionar todo o texto:</span>{" "}
                    pressione <kbd>Ctrl + T</kbd> (ou <kbd>Ctrl + A</kbd> na versão em inglês) para selecionar rapidamente todo o conteúdo do documento.
                </li>
                <li>
                    <span className="font-semibold">Formatar texto com atalhos:</span>{" "}
                    Use os seguintes atalhos para aplicar formatações rapidamente:
                    <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li><kbd>Ctrl + N</kbd> (ou <kbd>Ctrl + B</kbd> na versão em inglês) → Negrito</li>
                        <li><kbd>Ctrl + I</kbd> → Itálico</li>
                        <li><kbd>Ctrl + S</kbd> (ou <kbd>Ctrl + U</kbd> na versão em inglês) → Sublinhado</li>
                        <li><kbd>Ctrl + Shift + =</kbd> → Sobrescrito</li>
                        <li><kbd>Ctrl + =</kbd> → Subscrito</li>
                    </ul>
                </li>

                <li>
                    <span className="font-semibold">Copiar formatação:</span>{" "}
                    Use o <span className="italic">Pincel de Formatação</span> para copiar o estilo de um texto e aplicar em outro. É rápido e evita refazer toda a formatação manualmente.
                </li>
                <li>
                    <span className="font-semibold">Mostrar tudo:</span>{" "}
                    pressione <span className="italic">Ctrl + Shift + 8</span> para exibir os símbolos de parágrafo, espaços e quebras ocultas.
                    Isso ajuda a visualizar a estrutura do texto e corrigir formatações indesejadas.
                </li>

                <li>
                    <span className="font-semibold">Quebra de página:</span>{" "}
                    use <span className="italic">Ctrl + Enter</span> para inserir uma nova página rapidamente, sem precisar pressionar várias vezes a tecla Enter.
                </li>
                <li>
                    <span className="font-semibold">Criar nota de rodapé:</span>{" "}
                    pressione <span className="italic">Ctrl + Alt + F</span> para adicionar uma nota de rodapé no documento.
                    Ela aparece no final da página e serve para incluir explicações, referências ou observações sem poluir o texto principal.
                </li>
                <li>
                    <span className="font-semibold">Criar nota de rodapé:</span>{" "}
                    pressione <span className="italic">Ctrl + Alt + F</span> para adicionar uma nota de rodapé no documento.
                    Ela aparece no final da página e serve para incluir explicações, referências ou observações sem poluir o texto principal.
                </li>

                <li>
                    <span className="font-semibold">Criar nota de fim:</span>{" "}
                    pressione <span className="italic">Ctrl + Alt + D</span> para adicionar uma nota de fim no documento.
                    Diferente da nota de rodapé, ela é exibida apenas ao final do texto, geralmente em relatórios ou trabalhos acadêmicos.
                </li>

                <li>
                    <span className="font-semibold">Aumentar e diminuir recuo:</span>{" "}
                    pressione <span className="italic">Tab</span> para aumentar o recuo do parágrafo ou{" "}
                    <span className="italic">Shift + Tab</span> para diminuir.
                    Essa técnica ajuda a organizar listas, citações e textos hierarquizados com mais clareza.
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
