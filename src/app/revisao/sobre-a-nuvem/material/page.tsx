export default function MaterialNuvemPage() {
    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
                Material: Sobre a Nuvem
            </h1>
            <p className="text-gray-700 mb-4">
                Aqui você poderá explorar vídeos, textos e exemplos sobre computação em nuvem.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>📄 Texto: O que é a nuvem e como funciona</li>
                <li>🎥 Vídeo: Exemplos de serviços em nuvem</li>
                <li>🔗 Link: Artigos de introdução à cloud computing</li>
            </ul>
        </main>
    );
}
