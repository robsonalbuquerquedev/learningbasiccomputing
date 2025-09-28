"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBookOpen, FaGlobe, FaUser } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { name: "Início", href: "/", icon: <FaHome /> },
        { name: "Revisão", href: "/revisao", icon: <FaBookOpen /> },
        { name: "Novos assuntos", href: "/novos-assuntos", icon: <FaGlobe /> },
        { name: "Sobre o desenvolvedor", href: "/sobre-mim", icon: <FaUser /> },
    ];

    return (
        <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-6">
                <h1 className="text-xl md:text-2xl font-bold">Learning Basic Computing</h1>
                <ul className="flex gap-4 md:gap-6 items-center">
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
        </header>
    );
}
