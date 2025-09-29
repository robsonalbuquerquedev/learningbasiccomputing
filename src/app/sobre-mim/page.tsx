"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SobreMim() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-center md:text-left space-y-16">

            {/* Foto + Nome */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center gap-6"
            >
                <Image
                    src="/robson.png"
                    alt="Foto de Robson Albuquerque"
                    width={160}
                    height={160}
                    className="rounded-full border-4 border-blue-600 shadow-lg"
                />
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="text-3xl font-bold text-blue-600">Robson Albuquerque</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        26 anos • Desenvolvedor & Educador em Formação
                    </p>
                    <p className="text-gray-600 mt-4 italic">
                        “Esta é minha primeira experiência como professor.
                        Pensei em unir minha formação em tecnologia com a vontade de ensinar,
                        e foi assim que nasceu este site: um espaço para aprender a ensinar de forma única,
                        misturando aquilo que eu gosto com o que estou vivendo nessa nova etapa.”
                    </p>
                </motion.div>
            </motion.div>

            {/* Formação Acadêmica */}
            <motion.section
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Formação Acadêmica</h2>
                <ul className="space-y-3 text-gray-700">
                    <li>🎓 Curso Superior em <b>Análise e Desenvolvimento de Sistemas</b> (2022.2 – 2025)</li>
                    <li>💻 Curso Técnico em <b>Informática para Internet</b> (2020 – 2022.1)</li>
                    <li>🌐 Curso Técnico em <b>Redes de Computadores</b> (2018 – 2019)</li>
                </ul>
            </motion.section>

            {/* Propósito do Site / Minha Jornada */}
            <motion.section
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Minha Jornada</h2>
                <p className="text-gray-700 leading-relaxed">
                    Este site nasceu como minha primeira experiência em ensinar.
                    Em vez de usar apenas slides ou métodos tradicionais, decidi criar algo
                    diferente: um espaço dinâmico, interativo e moderno, onde posso misturar
                    minha paixão por tecnologia com a missão de educar.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Estou unindo minha formação acadêmica em Análise e Desenvolvimento de Sistemas,
                    Redes de Computadores e Informática para Internet a esta nova etapa: ser educador.
                    É um aprendizado duplo — ensino e aprendo ao mesmo tempo.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
                    Minha primeira aula oficial foi no dia <span className="text-blue-600">01/10/2025</span>,
                    um marco que simboliza o início da minha caminhada como professor e desenvolvedor.
                </p>
            </motion.section>

            {/* Visão para o Futuro */}
            <motion.section
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Visão para o Futuro</h2>
                <p className="text-gray-700 leading-relaxed">
                    Quero que este site cresça continuamente, recebendo novos conteúdos e recursos.
                    Assim, além de ajudar meus alunos, ele pode se tornar uma plataforma de aprendizado acessível para qualquer pessoa que deseja aprender informática básica de forma prática e divertida.
                </p>
            </motion.section>
        </main>
    );
}
