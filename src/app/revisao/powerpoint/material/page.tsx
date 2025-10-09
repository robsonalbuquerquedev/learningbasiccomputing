"use client";

import { motion } from "framer-motion";
import {
    FaFilePowerpoint,
    FaCloud,
    FaUsers,
    FaMagic,
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
                    ferramentas &mdash; como a aba <strong>&quot;Página Inicial&quot;</strong> e{" "}
                    <strong>&quot;Inserir&quot;</strong>. Cada <strong>slide</strong> é uma nova
                    página da sua história!
                </p>
                <p className="mt-3 text-gray-600">
                    Você pode reorganizar os slides, adicionar comentários e deixar
                    tudo no seu estilo. 😉
                </p>
            </motion.div>
        </main>
    );
}
