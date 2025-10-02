"use client";

import { motion } from "framer-motion";
import {
    FaGlobe, FaShieldAlt, FaHistory,
    FaServer, FaNetworkWired, FaChrome
} from "react-icons/fa";

export default function InternetPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            {/* Título principal */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-10"
            >
                🌐 Explorando a Internet
            </motion.h1>

            {/* O que é a internet */}
            <motion.section
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaGlobe /> O que é a Internet?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Imagine a internet como uma <span className="font-semibold">cidade gigante</span>!
                    Cada site é como uma casa ou prédio, as estradas são os cabos e sinais Wi-Fi,
                    e o navegador é o ônibus que você pega para visitar os lugares.
                    Ela conecta milhões de computadores e pessoas no mundo todo!
                </p>
            </motion.section>

            {/* História da internet */}
            <motion.section
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaHistory /> Como surgiu a Internet?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    A internet nasceu durante a <span className="font-semibold">Guerra Fria</span>.
                    Em 1957, a União Soviética lançou o satélite <span className="italic">Sputnik</span>,
                    o que assustou os Estados Unidos. Para se proteger e garantir comunicação
                    mesmo em caso de guerra, os EUA criaram a agência <span className="font-semibold">DARPA</span>,
                    que desenvolveu a <span className="font-semibold">ARPANET</span>, a “avó” da internet.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                    No começo, a comunicação usava o protocolo <span className="font-semibold">NCP</span>,
                    mas depois surgiu o famoso <span className="font-semibold">TCP/IP</span>,
                    que até hoje organiza como os computadores conversam entre si.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Com o tempo, a ARPANET cresceu, conectando universidades e centros militares.
                    Esse foi o primeiro passo para a internet gigante que usamos hoje.
                </p>
            </motion.section>

            {/* Como funciona hoje */}
            <motion.section
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaServer /> Como funciona a Internet hoje?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Hoje, quando você acessa um site, acontece uma conversa entre dois pontos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Ponto A:</span> Você (o cliente)</li>
                    <li><span className="font-semibold">Ponto B:</span> O servidor (ex.: Google, YouTube)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                    A comunicação viaja por <a href="https://www.submarinecablemap.com/" target="_blank" className="text-blue-600 underline">cabos submarinos</a> que passam por baixo do oceano e interligam todos os continentes!
                    É como se o planeta inteiro estivesse conectado por fios invisíveis.
                </p>
            </motion.section>

            {/* WWW vs Internet */}
            <motion.section
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaNetworkWired /> Internet x WWW
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Muitas pessoas confundem: a <span className="font-semibold">Internet</span> é o conjunto de todas as redes do mundo. Já a <span className="font-semibold">World Wide Web (WWW)</span> é uma parte da internet, criada por <span className="font-semibold">Tim Berners-Lee</span> nos anos 90.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    A internet inclui vários serviços diferentes como:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>📨 E-mails (SMTP, POP3, IMAP)</li>
                    <li>📂 Transferência de arquivos (FTP)</li>
                    <li>🌍 Navegação em sites (HTTP → WWW)</li>
                </ul>
            </motion.section>

            {/* Navegadores */}
            <motion.section
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaChrome /> Os Navegadores
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    No início, a internet não era nada atraente — apenas telas pretas com letras verdes
                    usando o protocolo <span className="font-semibold">Gopher</span>.
                    Depois surgiu o primeiro navegador gráfico, o <span className="font-semibold">Mosaic</span>,
                    que abriu as portas para a web colorida que conhecemos hoje.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Hoje usamos navegadores modernos como <span className="font-semibold">Chrome, Edge, Firefox e Opera</span>.
                </p>
            </motion.section>

            {/* Segurança */}
            <motion.section
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
                    <FaShieldAlt /> Segurança na Internet
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    A internet é incrível, mas também precisamos usá-la com cuidado.
                    Aqui vão algumas dicas importantes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>🚫 Nunca compartilhe sua senha ou dados pessoais</li>
                    <li>👨‍👩‍👧‍👦 Sempre peça ajuda de um adulto se receber mensagens estranhas</li>
                    <li>🔒 Use a internet de forma responsável e segura</li>
                </ul>
            </motion.section>

            {/* Vídeo explicativo */}
            <motion.section
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-10"
            >
                <h2 className="text-2xl font-semibold text-blue-500 mb-4">🎥 Assista e aprenda mais</h2>
                <div className="aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/S7d371WsIt0?si=p5tkfG9tEFoOEfCy"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </motion.section>

            {/* Encerramento divertido */}
            <motion.section
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <p className="text-lg font-semibold text-gray-800">
                    A internet é como um universo infinito: cheia de descobertas, histórias e possibilidades.
                    Agora você já conhece sua origem, como funciona e como usá-la com segurança! 🚀
                </p>
            </motion.section>
        </main>
    );
}
