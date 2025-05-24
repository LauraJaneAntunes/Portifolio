'use client';

import Layout from '../components/layout';
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaDownload, FaBuilding, FaGraduationCap } from "react-icons/fa";

export default function Professional() {
  // Array com as experiências profissionais
  const experiences = [
    {
      title: "Operador de Telemarketing Receptivo",
      company: "Fidelity Services",
      location: "Itu, Brasil",
      period: "Fev 2009 - Ago 2012",
      description: [
        "Prestava atendimento ao cliente por meio de chamadas receptivas, resolvendo questões de forma eficiente.",
        "Treinei novos membros da equipe para melhorar a qualidade do serviço e a eficiência operacional."
      ],
      icon: "📞"
    },
    {
      title: "Repositor de Estoque",
      company: "Supermercado Local",
      location: "Itu, Brasil",
      period: "Set 2012 - Dez 2014",
      description: [
        "Responsável pelo controle e reposição de produtos nas prateleiras.",
        "Organização do estoque e verificação de validade de produtos."
      ],
      icon: "🛒"
    },
    {
      title: "Operador de Caixa e Crediário",
      company: "Loja de Departamento",
      location: "Itu, Brasil",
      period: "Jan 2015 - Mar 2017",
      description: [
        "Atendimento ao cliente e operação de caixa.",
        "Análise e aprovação de crediário para clientes."
      ],
      icon: "💳"
    },
    {
      title: "Auxiliar de Veterinário",
      company: "Clínica Veterinária",
      location: "Itu, Brasil",
      period: "Mar 2017 - Dez 2019",
      description: [
        "Auxílio em procedimentos veterinários.",
        "Organização e controle de agenda de médicos veterinários."
      ],
      icon: "🐾"
    },
    {
      title: "Especialista em Captação de Clientes",
      company: "Empresa de Marketing",
      location: "Itu, Brasil",
      period: "Jan 2020 - Dez 2021",
      description: [
        "Estratégias de captação de novos clientes.",
        "Vendas porta a porta e apresentação de produtos/serviços."
      ],
      icon: "🎯"
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
