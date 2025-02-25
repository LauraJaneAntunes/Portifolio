'use client'
import Link from "next/link";

export default function Academic() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Cabeçalho */}
      <header className="p-6 bg-black text-white text-center">
        <h1 className="text-4xl font-bold">Formação Acadêmica</h1>
      </header>

      {/* Seção Acadêmica */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Educação</h2>
        <ul className="list-disc pl-6">
          <li>📌 Tecnólogo em Desenvolvimento de Software Multiplataforma - Fatec (Em andamento)</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Experiências Profissionais</h2>
        <ul className="list-disc pl-6">
          <li>📞 Telemarketing Receptivo</li>
          <li>🛒 Reposição de Estoque</li>
          <li>💳 Operação de Caixa e Crediário</li>
          <li>🎯 Captação de Clientes</li>
          <li>🐾 Auxiliar de Veterinário</li>
          <li>📦 Gerenciamento e Entrega de Delivery</li>
          <li>👨‍🍳 Auxiliar de Cozinha e Merenda</li>
          <li>🚪 Vendas Porta a Porta</li>
          <li>📅 Organização e Controle de Agenda de Médicos Veterinários</li>
        </ul>

{/*         <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Voltar para a Página Inicial
          </Link>
        </div> */}
      </section>
    </div>
  );
}
