export default function AtividadeNuvemPage() {
    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">
                Atividade: Sobre a Nuvem
            </h1>
            <p className="text-gray-700 mb-6">
                Aqui você encontrará exercícios e desafios para revisar conceitos sobre a nuvem.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
                <p className="mb-2">Pergunta: Qual é a principal função da computação em nuvem?</p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Armazenar e acessar dados pela internet</li>
                    <li>Fazer cálculos matemáticos offline</li>
                    <li>Conectar periféricos localmente</li>
                </ul>
            </div>
        </main>
    );
}
