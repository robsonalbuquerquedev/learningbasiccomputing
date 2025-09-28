export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white mt-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
                <p className="text-center md:text-left text-sm md:text-base">
                    © {new Date().getFullYear()} Learning Basic Computing. Todos os direitos reservados.
                </p>
                <p className="text-center md:text-right text-sm md:text-base mt-2 md:mt-0">
                    Feito com ❤️ por Robson Albuquerque
                </p>
            </div>
        </footer>
    );
}
