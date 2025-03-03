'use client';

import Layout from '../components/layout';

export default function Professional() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Cabeçalho */}
        <header className="p-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold">Página em desenvolvimento...</h1>
        </header>

        {/* Experiências Profissionais */}
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Experiências Profissionais / Work Experience</h2>
          <ul className="list-disc pl-6">
            <li>📞 Operador de Telemarketing Receptivo / Inbound Customer Service Representative</li>
            <li>🛒 Repositor de Estoque / Stock Clerk</li>
            <li>💳 Operador de Caixa e Crediário / Cashier and Credit Operations</li>
            <li>🎯 Especialista em Captação de Clientes / Customer Acquisition Specialist</li>
            <li>🐾 Auxiliar de Veterinário / Veterinary Assistant</li>
            <li>📦 Gerenciamento e Entrega de Delivery / Delivery Management and Logistics</li>
            <li>👨‍🍳 Auxiliar de Cozinha e Merenda / Kitchen and School Meal Assistant</li>
            <li>🚪 Vendas Porta a Porta / Door-to-Door Sales Representative</li>
            <li>📅 Organização e Controle de Agenda de Médicos Veterinários / Medical Schedule Coordinator (Veterinary)</li>
          </ul>

          {/* Empresas */}
          <h2 className="text-3xl font-semibold mt-8 mb-4">Empresas / Companies</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Operador de Telemarketing Receptivo / Inbound Customer Service Representative</h3>
              <p className="text-lg">Fidelity Services, Itu, Brasil / Brazil</p>
              <p className="text-sm text-gray-600">Fev 2009 - Ago 2012 / Feb 2009 - Aug 2012</p>
              <p className="mt-2">- Prestava atendimento ao cliente por meio de chamadas receptivas, resolvendo questões de forma eficiente. / Provided exceptional customer service by handling inbound calls efficiently and resolving customer issues promptly.</p>
              <p>- Treinei novos membros da equipe para melhorar a qualidade do serviço e a eficiência operacional. / Trained new team members to improve service quality and operational efficiency.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet</p>
              <p className="text-sm text-gray-600">Set 2012 - Dez 2014 / Sep 2012 - Dec 2014</p>
              <p className="mt-2">- Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
