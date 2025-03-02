'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from '../components/layout';

export default function Projects() {
  const [projects] = useState([
    {
      title: "Landing Page",
      description: "Aplicação em HTML + CSS + JavaScript para o projeto de Iniciação Científica.",
      demoLink: "https://ljainiciacaocientifica.netlify.app/",
      codeLink: "https://github.com/LauraJaneAntunes/IC",
    },
    {
      title: "Eventos Express",
      description: "Front-End do Projeto desenvolvido para estágio em parceria com o curso de Eventos da Fatec de Itu.",
      demoLink: "https://eventos-express.netlify.app/",
      codeLink: "https://github.com/Evento-Express/Plataforma-Eventos-Express",
    },
    {
      title: "Plataforma Ecosrev",
      description: "Front-End do Projeto em desenvolvido em React para o Projeto Integrador do 2º semestre de 2024.",
      demoLink: "https://ecos-rev-pi.vercel.app/",
      codeLink: "https://github.com/LauraJaneAntunes/EcosRev-PI4sem",
    },
    {
      title: "App Mobile Ecosrev",
      description: "Front-End do Projeto em desenvolvimento para o Projeto Integrador do 1º semestre de 2025.",
      demoLink: "https://lpappmobileecosrev.netlify.app/",
      codeLink: "https://github.com/LauraJaneAntunes/appMobile",
    },
  ]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Cabeçalho */}
        <header className="p-6 bg-black text-white text-center">
          <h1 className="text-4xl font-bold">Projetos</h1>
        </header>
  
        <section className="p-8 max-w-4xl mx-auto">
          
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 mb-4">{project.description}</p>
                <div className="flex gap-4">
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
