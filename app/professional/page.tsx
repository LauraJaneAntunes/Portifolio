'use client';

import Layout from '../components/layout';
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaDownload, FaBuilding, FaGraduationCap } from "react-icons/fa";

export default function Professional() {
  // Array com as experiências profissionais
  const experiences = [
  {
    title: "Recepcionista e Auxiliar Financeiro",
    company: "Culturetec (Familiar - sem registro)",
    location: "Sorocaba, Brasil",
    period: "Out 2007 - Mar 2009",
    description: [
      "Atendimento presencial e telefônico.",
      "Auxílio nas rotinas administrativas e financeiras."
    ],
    icon: "🏢"
  },
  {
    title: "Operadora de Atendimento",
    company: "Fidelity Processadora e Serviços",
    location: "Itu, Brasil",
    period: "Mai 2009 - Nov 2012",
    description: [
      "Atendimento (passivo) ao cliente via telefone, oferecendo suporte e resolução de problemas.",
      "Foco em metas de vendas de seguro."
    ],
    icon: "📞"
  },
  {
    title: "Operadora de Caixa e Atendimento",
    company: "Lojas Avenida",
    location: "Sorocaba, Brasil",
    period: "Ago 2013 - Abr 2015",
    description: [
      "Operação de caixa, abertura e fechamento de caixa. Oferta de serviços como: seguros, convênio odontológico e financeiros.",
      "Atendimento ao cliente,  e assessoramento no setor infantil.",
      "Captação externa de clientes antes da inauguração da loja para emissão de cartão.",
      "Análise e aprovação de crediário.",
      "Atuação desde a inauguração até o encerramento da loja."
    ],
    icon: "💳"
  },
  {
    title: "Operadora de Caixa (Temporário)",
    company: "Maison Bertin",
    location: "Sorocaba, Brasil",
    period: "Out 2015 - Jan 2016",
    description: [
      "Operação de caixa e atendimento ao cliente.",
      "Auxílio nas rotinas de loja durante período sazonal."
    ],
    icon: "🛍️"
  },
  {
    title: "Auxiliar de Cozinha e Operadora de Caixa (Horista)",
    company: "Restaurante Container FIT",
    location: "Sorocaba, Brasil",
    period: "Mar 2017 - Set 2018 | Mar 2019 - Jun 2019",
    description: [
      "Gerenciamento do setor de delivery",
      "Preparação de alimentos, organização da cozinha e atendimento no caixa.",
      "Controle de pedidos e apoio geral no restaurante."
    ],
    icon: "🍽️"
  },
  {
    title: "Auxiliar de Cozinha e Merendeira (Temporário)",
    company: "Restaurante Juriti",
    location: "Sorocaba, Brasil",
    period: "Out 2019 - Dez 2019",
    description: [
      "Auxílio na preparação de alimentos e organização da cozinha.",
      "Atendimento na linha de montagem e serviço de merenda."
    ],
    icon: "🥗"
  },
  {
    title: "Recepcionista",
    company: "AcumedVet",
    location: "Sorocaba, Brasil",
    period: "Set 2020 - Mar 2021",
    description: [
      "Atendimento presencial e telefônico aos clientes da clínica veterinária.",
      "Agendamento de consultas e organização administrativa da recepção."
    ],
    icon: "🐾"
  },
  {
    title: "Estagiária de Auxiliar Veterinária",
    company: "Clínica Veterinária Quatro Patas",
    location: "Votorantim, Brasil",
    period: "Nov 2022 - Dez 2022",
    description: [
      "Auxílio nos cuidados com os animais, higienização, organização dos ambientes e apoio em procedimentos simples.",
      "Apoio aos médicos veterinários e atendimento aos tutores dos pets."
    ],
    icon: "🐶"
  }
];

  // Array com as habilidades profissionais
  const skills = [
    { name: "Atendimento ao Cliente", level: 90 },
    { name: "Gestão de Tempo", level: 85 },
    { name: "Trabalho em Equipe", level: 95 },
    { name: "Organização", level: 88 },
    { name: "Comunicação", level: 92 },
    { name: "Resolução de Problemas", level: 87 }
  ];

  // Animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Animação para os itens
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Cabeçalho */}
        <motion.header 
          className="pt-8 pb-4 text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Experiência Profissional
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Meu histórico profissional e habilidades adquiridas ao longo da carreira
          </p>

          {/* Botão para baixar o currículo */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="/CVLauraJaneAntunes.pdf" 
              download 
              className="btn-modern inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-sm" />
              <span>Baixar Currículo</span>
            </motion.a>
          </motion.div>
        </motion.header>

        {/* Introdução */}
        <motion.div 
          className="px-6 text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed opacity-90">
            Minha trajetória profissional é diversificada e rica em experiências que contribuíram para o desenvolvimento
            de habilidades fundamentais como comunicação, organização e resolução de problemas.
            Atualmente, estou em transição de carreira para a área de tecnologia.
          </p>
        </motion.div>

        <div className="px-4 py-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna de experiências profissionais */}
            <div className="lg:col-span-2">
              <motion.div
                className="glass-card p-8 h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaBriefcase className="text-2xl text-primary" />
                  <h2 className="text-2xl font-bold">Experiências Profissionais</h2>
                </div>

                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-8 border-l-2 border-primary/30"
                      variants={itemVariants}
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center">
                        <span className="text-sm">{exp.icon}</span>
                      </div>

                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-2 text-sm opacity-80">
                        <div className="flex items-center gap-1">
                          <FaBuilding className="text-xs opacity-70" />
                          <span>{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs opacity-70" />
                          <span>{exp.location}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs opacity-70" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-1 mt-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="opacity-90">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Coluna de habilidades e formação */}
            <div>
              {/* Habilidades */}
              <motion.div 
                className="glass-card p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-2xl text-primary" />
                  <h2 className="text-2xl font-bold">Habilidades</h2>
                </div>

                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm opacity-70">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div 
                          className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Formação em Progresso */}
              <motion.div 
                className="glass-card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-2xl text-primary" />
                  <h2 className="text-2xl font-bold">Formação em Andamento</h2>
                </div>

                <div className="relative pl-8 border-l-2 border-secondary/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary/20 backdrop-blur flex items-center justify-center">
                    <span className="text-sm">🎓</span>
                  </div>

                  <h3 className="text-xl font-bold">Análise e Desenvolvimento de Sistemas</h3>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-2 text-sm opacity-80">
                    <div className="flex items-center gap-1">
                      <FaBuilding className="text-xs opacity-70" />
                      <span>FATEC - Faculdade de Tecnologia</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs opacity-70" />
                      <span>2022 - 2025</span>
                    </div>
                  </div>
                  
                  <p className="mt-3 opacity-90">
                    Formação tecnológica em desenvolvimento de sistemas, com foco em programação, 
                    banco de dados, análise de sistemas e desenvolvimento web.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Seção de contato */}
        <motion.div 
          className="glass-card p-8 text-center max-w-3xl mx-auto mb-16 mt-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Interessado em trabalhar comigo?
          </h2>
          <p className="opacity-90 mb-6">
            Estou em busca de novas oportunidades na área de tecnologia. Entre em contato para conversarmos sobre como posso contribuir para o seu time.
          </p>
          <motion.a
            href="/contact"
            className="btn-modern inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase className="text-sm" />
            <span>Entre em contato</span>
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
}
