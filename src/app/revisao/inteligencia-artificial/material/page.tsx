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
            <section className="mb-12">
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

            {/* 💼 Produtividade */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">💼 Produtividade</h2>
                <p className="text-gray-600 mb-6">Aumente sua eficiência com as melhores ferramentas de IA.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "ShowMe - Gerador de Apresentações e Diagramas",
                            desc: "Crie automaticamente fluxogramas, UMLs, mindmaps, Gantt charts e slides profissionais.",
                            site: "https://helpful.dev/",
                            logo: "/logoshowme.jpeg",
                            author: "helpful.dev",
                        },
                        {
                            title: "Resume AI",
                            desc: "Aprimore seu currículo com IA — compatível com ATS e personalizado para cada vaga.",
                            site: "https://jobright.ai/",
                            logo: "/logoresume.png",
                            author: "community builder",
                        },
                        {
                            title: "Video AI by InVideo",
                            desc: "Crie vídeos com narração natural em qualquer idioma usando IA — powered by Sora 2.",
                            site: "https://invideo.io/",
                            logo: "/logoinvideo.png",
                            author: "invideo.io",
                        },
                        {
                            title: "TurboScribe Transcription",
                            desc: "Transcreva, resuma e converse com áudios e vídeos diretamente usando IA.",
                            site: "https://turboscribe.ai/",
                            logo: "/logoturboscribe.png",
                            author: "turboscribe.ai",
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

            {/* 🔍 Pesquisa e Análise */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🔍 Pesquisa e Análise</h2>
                <p className="text-gray-600 mb-6">Pesquise, avalie e visualize informações com precisão e rapidez.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Scholar GPT",
                            desc: "Acesse mais de 200 milhões de artigos científicos e bases como Google Scholar e PubMed.",
                            site: "https://scholargpt.com/",
                            logo: "/scholar.png",
                            author: "community builder",
                        },
                        {
                            title: "AskYourPDF Research Assistant",
                            desc: "Analise PDFs, artigos e gere citações automáticas com IA.",
                            site: "https://askyourpdf.com/",
                            logo: "/logoaskpdf.png",
                            author: "community builder",
                        },
                        {
                            title: "Consensus",
                            desc: "Converse diretamente com a literatura científica e encontre fontes acadêmicas confiáveis.",
                            site: "https://consensus.app/",
                            logo: "/logoconsensus.png",
                            author: "consensus.app",
                        },
                        {
                            title: "Finance & Economics",
                            desc: "Explore dados de mercado, criptomoedas e economia de forma educativa.",
                            site: "https://finllms.com/",
                            logo: "/logofinance.jpg",
                            author: "finllms.com",
                        },
                        {
                            title: "Wolfram",
                            desc: "Realize cálculos e análises científicas com o poder do Wolfram Alpha.",
                            site: "https://www.wolframalpha.com/",
                            logo: "/logowolfram.png",
                            author: "community builder",
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

            {/* 🎓 Educação */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🎓 Educação</h2>
                <p className="text-gray-600 mb-6">Aprenda novos conceitos, revise conteúdos e desenvolva habilidades com IA.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Math Solver",
                            desc: "Resolva problemas matemáticos passo a passo e aprenda o raciocínio por trás.",
                            site: "https://studyx.ai/",
                            logo: "/logomathsolver.png",
                            author: "studyx.ai",
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

            {/* 🌍 Estilo de Vida */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🌍 Estilo de Vida</h2>
                <p className="text-gray-600 mb-6">Dicas de viagem, bem-estar, estilo e desenvolvimento pessoal.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Expedia", desc: "Planeje suas viagens com facilidade — rotas, hotéis e passeios.", site: "https://www.expedia.com/", logo: "/logoexpedia.jpg", author: "expedia.com" },
                        { title: "Guia de Viagens", desc: "Conheça destinos, roteiros e dicas de viagem personalizadas.", site: "https://capchair.com/", logo: "/logotravelguide.png", author: "capchair.com" },
                        { title: "Mia AI", desc: "Sua coach de vida por voz — mais de 1,2 milhão de conversas!", site: "https://heymia.ai/", logo: "/logomia.png", author: "heymia.ai" },
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

            {/* 🎨 DALL·E – Criação de Imagens com IA */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🎨 DALL·E — Criação de Imagens com IA</h2>
                <p className="text-gray-600 mb-6">
                    Transforme suas ideias em imagens incríveis com o poder da inteligência artificial.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Glibatree Art Designer",
                            desc: "Gere artes detalhadas a partir de suas ideias — quatro imagens melhores do que você imaginava.",
                            site: "https://glibatree.com/",
                            logo: "/logoglibatree.png",
                            author: "glibatree.com",
                        },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-white p-5 rounded-xl shadow-md flex gap-4 border border-indigo-100 hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Por <span className="italic">{item.author}</span>
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 💻 Programação e Desenvolvimento */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">💻 Programação e Desenvolvimento</h2>
                <p className="text-gray-600 mb-6">
                    Escreva código, depure erros, gere sites e aprenda novas linguagens com o auxílio da IA.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Website Generator",
                            desc: "Gere e publique sites completos em segundos — design, código e conteúdo prontos!",
                            site: "https://b12.io/",
                            logo: "/logowebgen.png",
                            author: "community builder",
                        },
                    ].map((item) => (
                        <Link key={item.title} href={item.site} target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="bg-white p-5 rounded-xl shadow-md flex gap-4 border border-indigo-100 hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <Image src={item.logo} alt={item.title} width={60} height={60} className="rounded-md" />
                                <div>
                                    <h3 className="font-bold text-lg text-indigo-700">{item.title}</h3>
                                    <p className="text-gray-700 text-sm">{item.desc}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Por <span className="italic">{item.author}</span>
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
