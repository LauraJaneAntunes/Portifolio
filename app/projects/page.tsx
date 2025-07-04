'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from '../components/layout';
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects] = useState([
    {
      title: "Iniciação Científica",
      description: "Landing Page desenvolvido para a minha Iniciação Científica da Fatec de Votorantim - 2 e 3º semestre (2022 / 2023).",
      demoLink: "https://ljainiciacaocientifica.netlify.app/",
      codeLink: "https://github.com/LauraJaneAntunes/IC",
      thumbnail: "/images/ic.png",
      technologies: [
        { name: "HTML", icon: "/icons/html5.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
      ],
      reflection: "Este projeto foi desenvolvido com o objetivo de criar uma página simples para exibir o meu trabalho de Iniciação Científica no lugar de uma apresentação formal. Essa experiência me proporcionou um melhor entendimento da estrutura de páginas estásticas e aprofundou meu domínio em HTML e CSS.",
      category: "web"
    },
    {
      title: "Eventos Express",
      description: "Front-End do Projeto desenvolvido para estágio em parceria com o curso de Eventos da Fatec de Itu - 2 e 3º semestre (2022 / 2023).",
      demoLink: "https://eventos-express.netlify.app/",
      codeLink: "https://github.com/Evento-Express/Plataforma-Eventos-Express",
      thumbnail: "/images/eventos-express.png",
      technologies: [
        { name: "Figma", icon: "/icons/figma.svg" },
        { name: "HTML", icon: "/icons/html5.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap.svg" }
      ],      
      reflection: "Este projeto foi desenvolvido para o meu estágio. O objetivo foi desenvolver o front-end de uma plataforma para facilitar a contratação de eventos. Trabalhei em colaboração com uma colega, fortalecendo minhas habilidades em criação de páginas responsivas e práticas de desenvolvimento colaborativo.",
      category: "web"
    },
    {
      title: "Plataforma Ecosrev",
      description: "Projeto full-stack desenvolvido como parte do Projeto Integrador do 4º semestre (2024).",
      demoLink: "https://ecos-rev-pi.vercel.app/",
      codeLink: "https://github.com/LauraJaneAntunes/EcosRev-PI4sem",
      thumbnail: "/images/web-ecosrev.png",
      technologies: [
        { name: "Figma", icon: "/icons/figma.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextdotjs.svg" },
        { name: "Node.js", icon: "/icons/nodedotjs.svg" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "Swagger", icon: "/icons/swagger.svg" },
        { name: "Jest", icon: "/icons/jest.svg" },
      ],
      reflection: "Este projeto foi desenvolvido em grupo, com o objetivo de criar uma plataforma que promove o descarte correto de resíduos eletroeletrônicos, oferecendo recompensas. Eu fui responsável pelo desenvolvimento do front-end, utilizando React e Next.js. Essa experiência consolidou meus conhecimentos nessas tecnologias e me proporcionou uma visão mais ampla sobre a construção de aplicações full-stack.",
      category: "fullstack"
    },
    {
      title: "App Mobile Ecosrev",
      description: "Landing Page do Projeto em desenvolvimento do aplicativo mobile para o Projeto Integrador -  [ATUAL] 5º semestre de 2025.",
      demoLink: "https://lpappmobileecosrev.netlify.app/",
      codeLink: "https://github.com/LauraJaneAntunes/LPAppMobile",
      thumbnail: "/images/mobile-ecosrev.png",
      technologies: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextdotjs.svg" }
      ],
      reflection: "Este projeto foi desenvolvido com o objetivo de promover o aplicativo em desenvolvimento para incentivar o descarte correto de resíduos eletroeletrônicos. Essa experiência me permitiu aprimorar minhas habilidades em React e Next.js, além de reforçar a importância de uma boa apresentação para um produto digital.",
      category: "web"
    },
    
  ]);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Categorias de filtro
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

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
            Meus Projetos
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos recentes em desenvolvimento web e aplicações
          </p>
        </motion.header>

        {/* Introdução */}
        <motion.div 
          className="px-6 text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed opacity-90">
            Conheça alguns dos projetos em que trabalhei como desenvolvedora front-end e full stack.
            Cada projeto representa um desafio único e uma oportunidade de aprendizado.
            <br /><br />
            Para ver mais trabalhos, visite meu&nbsp;
            <a 
              href="https://github.com/LauraJaneAntunes?tab=repositories" 
              className="text-primary hover:underline font-medium transition-colors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-primary/80 to-secondary/80 text-white font-medium"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projetos */}
        <section className="px-4 py-8 max-w-6xl mx-auto mb-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Thumbnail com overlay */}
                <div className="relative overflow-hidden h-48 w-full">
                  <Image
                    src={project.thumbnail}
                    alt={`Thumbnail do projeto ${project.title}`}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                
                {/* Conteúdo */}
                <div className="p-6">
                  <p className="mb-4 opacity-90 text-sm md:text-base">{project.description}</p>
                  
                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-1 bg-white/10 backdrop-blur px-2 py-1 rounded-full text-xs">
                        <img src={tech.icon} alt={tech.name} className="w-3 h-3" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Divisor */}
                  <div className="mt-4 mb-4 border-t border-white/10"></div>
                  
                  {/* Reflexão - oculta em dispositivos pequenos, aparece em hover */}
                  <div className="hidden md:block overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                    <p className="text-sm opacity-70 italic">
                      {project.reflection}
                    </p>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 mt-4 justify-between">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoLink}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.codeLink}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-xs" />
                        <span className="text-sm">Código</span>
                      </motion.a>
                    </div>
                    
                    {/* Botão para exibir detalhes - apenas mobile */}
                    <motion.button
                      className="md:hidden flex items-center gap-1 text-primary text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Detalhes</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Seção de contato */}
        <motion.div 
          className="glass-card p-8 text-center max-w-3xl mx-auto mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Interessado em trabalhar comigo?
          </h2>
          <p className="opacity-90 mb-6">
            Estou sempre aberta a novos projetos e colaborações. Entre em contato e vamos conversar sobre como posso contribuir para o seu próximo projeto.
          </p>
          <motion.a
            href="/contact"
            className="btn-modern inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="text-sm" />
            <span>Entre em contato</span>
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
}
