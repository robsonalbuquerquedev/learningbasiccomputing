"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaPrint, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function RelatorioHorasAulas() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const relatorios = [
        {
            titulo: "1º Relatório de Horas/Aulas",
            periodo: "30/09 a 10/10",
            aulas: [
                "30/09 = 2 horas - Primeiro dia - História do computador",
                "03/10 = 2 horas - Explorando a Internet",
                "07/10 = 2 horas - Aplicações da Informática e da Internet",
                "10/10 = 2 horas - Explorando o Microsoft Word",
            ],
            total: "8 horas",
        },
        // Depois você pode adicionar novos relatórios aqui:
        // {
        //   titulo: "2º Relatório de Horas/Aulas",
        //   periodo: "11/10 a 20/10",
        //   aulas: [ ... ],
        //   total: "xx horas",
        // },
    ];

    const handlePrint = (index: number) => {
        const content = document.getElementById(`relatorio-${index}`);
        if (!content) return;

        const printWindow = window.open("", "", "width=800,height=600");
        printWindow?.document.write(`
      <html>
        <head>
          <title>${relatorios[index].titulo}</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h2 { color: #4338ca; text-align: center; }
            ul { line-height: 1.8; font-size: 14px; }
            li { margin-bottom: 6px; }
            strong { color: #4f46e5; }
            p { text-align: center; margin-top: 10px; font-weight: bold; }
          </style>
        </head>
        <body>
          <h2>${relatorios[index].titulo}</h2>
          <p>Período: ${relatorios[index].periodo}</p>
          <ul>
            ${relatorios[index].aulas.map((aula) => `<li>${aula}</li>`).join("")}
          </ul>
          <p>Total: ${relatorios[index].total}</p>
        </body>
      </html>
    `);
        printWindow?.document.close();
        printWindow?.print();
    };

    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-indigo-200 min-h-screen text-gray-800">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <FaFileAlt className="text-indigo-700 text-6xl mx-auto mb-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-800">
                    📘 Relatórios de Horas/Aulas
                </h1>
                <p className="mt-3 text-gray-700 text-lg">
                    Aqui você pode registrar, visualizar e imprimir seus relatórios de horas/aulas.
                    Ideal para enviar à coordenação no dia 10 de cada mês. 🗓️
                </p>
            </motion.div>

            {/* Lista de Relatórios */}
            <div className="space-y-6 max-w-3xl mx-auto">
                {relatorios.map((relatorio, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-indigo-100"
                    >
                        {/* Cabeçalho do Card */}
                        <div
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex justify-between items-center p-5 cursor-pointer hover:bg-indigo-50 transition"
                        >
                            <h2 className="font-bold text-lg text-indigo-700 flex items-center gap-2">
                                <FaFileAlt /> {relatorio.titulo}
                            </h2>
                            {openIndex === index ? (
                                <FaChevronUp className="text-indigo-700" />
                            ) : (
                                <FaChevronDown className="text-indigo-700" />
                            )}
                        </div>

                        {/* Conteúdo do Card */}
                        {openIndex === index && (
                            <div id={`relatorio-${index}`} className="p-5 border-t border-indigo-100">
                                <p className="font-semibold text-gray-700 mb-2">
                                    📅 Período: <span className="text-indigo-700">{relatorio.periodo}</span>
                                </p>
                                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                                    {relatorio.aulas.map((aula, i) => (
                                        <li key={i}>{aula}</li>
                                    ))}
                                </ul>
                                <p className="mt-3 font-bold text-indigo-700">⏱️ Total: {relatorio.total}</p>

                                {/* Botão de impressão */}
                                <button
                                    onClick={() => handlePrint(index)}
                                    className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md transition flex items-center gap-2"
                                >
                                    <FaPrint /> Imprimir Relatório
                                </button>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
