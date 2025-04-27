'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from '../components/layout';

export default function Projects() {
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
      reflection: "Este projeto foi desenvolvido para o meu estágio. O objetivo foi desenvolver o front-end de uma plataforma para facilitar a contratação de eventos. Trabalhei em colaboração com uma colega, fortalecendo minhas habilidades em criação de páginas responsivas e práticas de desenvolvimento colaborativo. ",
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
      reflection: "Este projeto foi desenvolvido em grupo, com o objetivo de criar uma plataforma que promove o descarte correto de resíduos eletroeletrônicos, oferecendo recompensas. Eu fui responsável pelo desenvolvimento do front-end, utilizando React e Next.js. Essa experiência consolidou meus conhecimentos nessas tecnologias e me proporcionou uma visão mais ampla sobre a construção de aplicações full-stack."
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
      reflection: "Este projeto foi desenvolvido com o objetivo de promover o aplicativo em desenvolvimento para incentivar o descarte correto de resíduos eletroeletrônicos. Essa experiência me permitiu aprimorar minhas habilidades em React e Next.js, além de reforçar a importância de uma boa apresentação para um produto digital."
    },
  ]);
  // Ícones de https://simpleicons.org/
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Cabeçalho */}
        <header className="p-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold">Projetos</h1>
        </header>

        {/* Introdução */}
        <div className="p-6 text-center max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Estes são alguns dos projetos em que participei. <br /> 
            Abaixo, apresento uma breve descrição de cada projeto, as ferramentas tecnológicas utilizadas, imagens, links para repositórios e uma reflexão sobre conhecimentos adiquiridos. <br />
            
            Para visualizar meus demais projetos, acesse: &nbsp; 
            <a 
              href="https://github.com/LauraJaneAntunes?tab=repositories" 
              className="text-blue-600 hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Meus Portifólios no GitHub
            </a>.
          </p>
        </div>

        <section className="p-8 max-w-4xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail do projeto ${project.title}`}
                  className="w-full h-40 object-cover rounded-xl mb-4 border-4 border-blueviolet"
                />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 mb-4">{project.description}</p>
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                {/* Reflexão */}
                <p className="mt-4 text-sm italic text-gray-600">
                  {project.reflection}
                </p>
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demoLink}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Projeto
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Código Fonte
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
