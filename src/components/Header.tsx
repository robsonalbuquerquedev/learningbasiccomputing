"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBookOpen, FaGlobe, FaUser, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Início", href: "/", icon: <FaHome /> },
        { name: "Revisão", href: "/revisao", icon: <FaBookOpen /> },
        { name: "Novos assuntos", href: "/novos-assuntos", icon: <FaGlobe /> },
        { name: "Sobre o desenvolvedor", href: "/sobre-mim", icon: <FaUser /> },
    ];

    return (
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
                {/* Logo / Título */}
                <h1 className="text-lg md:text-2xl font-bold">Learning Basic Computing</h1>

                {/* Botão de menu hambúrguer (aparece só no mobile) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Menu desktop */}
                <ul className="hidden md:flex gap-4 md:gap-6 items-center">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition ${pathname === link.href
                                        ? "bg-white text-blue-600 font-semibold"
                                        : "hover:bg-blue-500"
                                    }`}
                            >
                                {link.icon} {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menu mobile (abre quando clica no hambúrguer) */}
            {menuOpen && (
                <div className="md:hidden bg-blue-700 px-6 py-4 space-y-3">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${pathname === link.href
                                    ? "bg-white text-blue-600 font-semibold"
                                    : "hover:bg-blue-500 text-white"
                                }`}
                            onClick={() => setMenuOpen(false)} // fecha o menu ao clicar
                        >
                            {link.icon} {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
