'use client';

import Layout from '../components/layout';

export default function Professional() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Cabeçalho */}
        <header className="p-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold">Página em desenvolvimento...</h1>

          {/* Botão para baixar o currículo */}
          <div className="mt-4">
            <a 
              href="/CVLauraJaneAntunes.pdf" 
              download 
              className="inline-block px-6 py-3 mt-4 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
            >
              📄 Baixar Currículo
            </a>
          </div>
        </header>

        {/* Experiências Profissionais */}
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Experiências Profissionais</h2>
          <ul className="list-disc pl-6">
            <li>📞 Operador de Telemarketing Receptivo</li>
            <li>🛒 Repositor de Estoque</li>
            <li>💳 Operador de Caixa e Crediário</li>
            <li>🎯 Especialista em Captação de Clientes</li>
            <li>🐾 Auxiliar de Veterinário</li>
            <li>📦 Gerenciamento e Entrega de Delivery</li>
            <li>👨‍🍳 Auxiliar de Cozinha e Merenda</li>
            <li>🚪 Vendas Porta a Porta</li>
            <li>📅 Organização e Controle de Agenda de Médicos Veterinários</li>
          </ul>

          {/* Empresas */}
          <h2 className="text-3xl font-semibold mt-8 mb-4">Empresas</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Operador de Telemarketing Receptivo</h3>
              <p className="text-lg">Fidelity Services, Itu, Brasil</p>
              <p className="text-sm text-gray-600">Fev 2009 - Ago 2012</p>
              <p className="mt-2">- Prestava atendimento ao cliente por meio de chamadas receptivas, resolvendo questões de forma eficiente.</p>
              <p>- Treinei novos membros da equipe para melhorar a qualidade do serviço e a eficiência operacional.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet</p>
              <p className="text-sm text-gray-600">Set 2012 - Dez 2014</p>
              <p className="mt-2">- Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
