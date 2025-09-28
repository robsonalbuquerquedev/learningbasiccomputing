"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white mt-12">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Coluna 1 - Sobre */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Learning Basic Computing</h2>
                    <p className="text-sm text-blue-100">
                        Um jeito divertido e simples de aprender informática!
                    </p>
                </div>

                {/* Coluna 2 - Links rápidos */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Navegação</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:underline">Início</Link>
                        </li>
                        <li>
                            <Link href="/revisao" className="hover:underline">Revisão</Link>
                        </li>
                        <li>
                            <Link href="/novos-assuntos" className="hover:underline">Novos assuntos</Link>
                        </li>
                        <li>
                            <Link href="/sobre-mim" className="hover:underline">Sobre o desenvolvedor</Link>
                        </li>
                    </ul>
                </div>

                {/* Coluna 3 - Contato / Redes */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Contato</h2>
                    <div className="flex justify-center md:justify-start gap-4 text-xl">
                        <Link href="https://github.com/robsonalbuquerquedev" target="_blank" aria-label="GitHub">
                            <FaGithub className="hover:text-blue-300 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/robson-monteiro-de-albuquerque-8b3853230/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin className="hover:text-blue-300 transition" />
                        </Link>
                        <Link href="https://www.instagram.com/robson.albuquerque_cm" target="_blank" aria-label="Instagram">
                            <FaInstagram className="hover:text-blue-300 transition" />
                        </Link>
                        <Link
                            href="https://wa.me/5581971168633"
                            target="_blank"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="hover:text-blue-300 transition" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Linha final */}
            <div className="bg-blue-700 text-center text-sm py-4">
                © {new Date().getFullYear()} Learning Basic Computing. Todos os direitos reservados.
            </div>
        </footer>
    );
}
