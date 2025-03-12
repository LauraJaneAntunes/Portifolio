'use client';

import Layout from '../components/layout';

const academicData = [
  {
    icon: '💻',
    title: 'Ensino Superior de Desenvolvimento de Software Multiplataforma',
    institution: 'Fatec Votorantim',
    period: '(Cursando - Conclusão em dez/2025)',
    englishTitle: "Bachelor's in Multiplatform Software Development",
    englishPeriod: '(Current)',
    logo: '/images/logo-fatec.png',
    site: 'https://fatecvotorantim.cps.sp.gov.br/'
  },
  {
    icon: '🐾',
    title: 'Ensino Técnico de Veterinária',
    institution: 'Grupo Hamaida - pólo da Unifael Votorantim',
    period: 'Conclusão 2022',
    englishTitle: 'Veterinary Technical Degree',
    englishPeriod: '2022',
    logo: '/images/logo-hamada.avif',
    site: 'https://www.grupohamada.com/'
  },
  {
    icon: '📚',
    title: 'Ensino Técnico em Administração',
    institution: 'IFSP Sorocaba',
    period: 'Conclusão em 2018',
    englishTitle: 'Technical Degree in Administration',
    englishPeriod: '2018',
    logo: '/images/logo-ifsp.png',
    site: 'https://sor.ifsp.edu.br/'
  },
  {
    icon: '🔬',
    title: 'Ensino Superior em Ciências Biológicas',
    institution: 'Ceunsp Itu',
    period: '(Incompleto, 2009 - 2012)',
    englishTitle: 'Bachelor’s in Biological Sciences (Incomplete)',
    englishPeriod: '(2009 - 2012)',
    logo: '/images/logo-ceunsp.png',
    site: 'https://www.ceunsp.edu.br'
  },
  {
    icon: '🏛',
    title: 'Ensino Médio completo',
    institution: 'ETEC Fernando Prestes',
    period: 'Conclusão em 2006',
    englishTitle: 'Higlogoh School Diploma',
    englishPeriod: '2006',
    logo: '/images/logo-etec.png',
    site: 'https://etecfernandoprestes.cps.sp.gov.br/'
  }
];

export default function Academic() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Cabeçalho */}
        <header className="p-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold">Formação Acadêmica</h1>
        </header>

        
        <section className="p-8 max-w-4xl mx-auto">
          <div className="grid gap-8">
            {academicData.map((item, index) => (
              <div key={index} className={`flex bg-white shadow-lg rounded-2xl overflow-hidden ${index === 0 ? 'border-4 border-black' : ''}`}>
                <img src={item.logo} alt={item.institution} className="w-64 h-32 object-contain p-4" />
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.icon} {item.title}</h3>
                  <p className="text-md text-gray-800 mb-1">{item.institution} - {item.period}</p>
                  <p className="text-sm text-gray-600">{item.englishTitle} - {item.englishPeriod}</p>
                  {item.site && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-2 block"
                    >
                      Visitar o site
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>        
        </section>
      </div>
    </Layout>
  );
}
