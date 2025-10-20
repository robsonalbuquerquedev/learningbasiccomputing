"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";

export default function InteligenciaArtificialMaterial() {
    return (
        <main className="p-6 md:p-12 bg-gradient-to-b from-blue-100 to-indigo-200 min-h-screen text-gray-800">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10"
            >
                <FaRobot className="text-indigo-700 text-6xl mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-bold text-indigo-800">
                    🤖 Inteligência Artificial — Ferramentas em Destaque
                </h1>
                <p className="mt-3 text-gray-700 text-lg max-w-3xl mx-auto">
                    Descubra como a Inteligência Artificial está transformando a forma
                    como criamos, pesquisamos, escrevemos e aprendemos.
                    Explore abaixo as principais ferramentas, tendências e inovações do mundo da IA!
                </p>
            </motion.div>

            {/* 🌟 Destaques da Semana */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🌟 Destaques da Semana</h2>
                <p className="text-gray-600 mb-6">Seleção especial das melhores IAs em destaque nesta semana.</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Video AI by InVideo",
                            desc: "🎬 Crie vídeos envolventes com narração em qualquer idioma usando IA — impulsionado pelo Sora 2!",
                            site: "https://invideo.io/",
                            logo: "/logoinvideo.png",
                            author: "invideo.io",
                        },
                        {
                            title: "Expedia",
                            desc: "✈️ Organize sua viagem com IA — planeje rotas, hotéis e passeios com facilidade.",
                            site: "https://www.expedia.com/",
                            logo: "/logoexpedia.jpg",
                            author: "expedia.com",
                        },
                        {
                            title: "Canva",
                            desc: "🎨 Crie apresentações, logotipos e posts com o poder da IA — fácil e rápido!",
                            site: "https://www.canva.com/",
                            logo: "/logocanva.png",
                            author: "canva.com",
                        },
                        {
                            title: "Scholar AI",
                            desc: "📚 Assistente de pesquisa com acesso a 200M+ artigos científicos, patentes e livros.",
                            site: "https://scholarai.io/",
                            logo: "/scholar.png",
                            author: "community builder",
                        },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-5 rounded-xl shadow-md border border-indigo-100 flex gap-4 cursor-pointer hover:shadow-lg transition-shadow">
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                    <p className="text-sm text-gray-500 mt-1">Por <span className="italic">{item.author}</span></p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 🔥 Tendências da Comunidade */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🔥 Tendências da Comunidade</h2>
                <p className="text-gray-600 mb-6">As ferramentas mais usadas e queridas pela comunidade global.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Humanize AI",
                            desc: "💬 Transforma textos gerados por IA em conteúdos com estilo humano natural.",
                            site: "https://gptinf.com/",
                            logo: "/logohumanize.png",
                            author: "gptinf.com",
                        },
                        {
                            title: "Scholar GPT",
                            desc: "🔍 Pesquise e leia artigos científicos com acesso direto a bases como Google Scholar e PubMed.",
                            site: "https://awesomegpts.ai/",
                            logo: "/scholar.png",
                            author: "awesomegpts.ai",
                        },
                        {
                            title: "Canva",
                            desc: "🌈 Design assistido por IA — apresentações, postagens e materiais em poucos cliques.",
                            site: "https://www.canva.com/",
                            logo: "/logocanva.png",
                            author: "canva.com",
                        },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-5 rounded-xl shadow-md flex gap-4 border border-indigo-100 hover:shadow-lg transition-shadow cursor-pointer">
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                    <p className="text-sm text-gray-500 mt-1">Por <span className="italic">{item.author}</span></p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 💡 Criados pelo ChatGPT */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">💡 Criados pelo ChatGPT</h2>
                <p className="text-gray-600 mb-6">GPTs oficiais criados pela equipe do ChatGPT e pela comunidade.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "DALL·E", desc: "Gerador de imagens da OpenAI — crie ilustrações e artes originais.", site: "https://openai.com/dall-e", logo: "/logodalle.jpg" },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-5 rounded-xl shadow-md flex gap-4 border border-indigo-100 hover:shadow-lg transition-shadow cursor-pointer">
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ✍️ Ferramentas para Escrita com IA */}
            <section>
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">✍️ Ferramentas para Escrita com IA</h2>
                <p className="text-gray-600 mb-6">
                    Aumente sua produtividade e criatividade com IAs que ajudam a escrever melhor.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Cover Letter AI", desc: "Crie cartas de apresentação personalizadas para entrevistas.", site: "https://coverletter-ai.com/", logo: "/logocoverletter.png" },
                        { title: "CV & Resume AI", desc: "Gere currículos profissionais prontos para ATS.", site: "https://resume-ai.com/", logo: "/logoresume.png" },
                        { title: "Copywriter GPT", desc: "Produza textos publicitários envolventes com base em IA.", site: "https://copywriter.ai/", logo: "/logocopywriter.jpeg" },
                        { title: "Text to Video Maker", desc: "Crie vídeos com roteiro automático e narração natural.", site: "https://texttovideo.ai/", logo: "/logotexttovideo.jpg" },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div whileHover={{ scale: 1.03 }} className="bg-white p-5 rounded-xl shadow-md flex gap-4 border border-indigo-100 hover:shadow-lg transition-shadow cursor-pointer">
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
