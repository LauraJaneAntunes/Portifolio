'use client'
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
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
      description: "Front-End do Projeto **em desenvolvimento** para o Projeto Integrador do 1º semestre de 2025.",
      demoLink: "https://lpappmobileecosrev.netlify.app/",
      codeLink: "https://github.com/LauraJaneAntunes/appMobile",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-black text-white text-center">
        <h1 className="text-4xl font-bold">Laura Jane Antunes</h1>
        <p className="mt-2">Desenvolvedor Front-End Web e Mobile</p>
      </header>

      {/* Sobre Mim */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Sobre Mim</h2>
        <p>
          Apaixonado por tecnologia, focado em criar experiências digitais
          usando React e React Native. Em constante aprendizado e aprimoramento
          para desenvolver soluções eficientes.
        </p>
      </section>

      {/* Projetos */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projetos</h2>
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
                >
                  Ver Projeto
                </a>
                <a
                  href={project.codeLink}
                  className="text-blue-600 hover:underline"
                >
                  Código Fonte
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <footer className="p-8 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Contato</h2>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://github.com/LauraJaneAntunes/" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/laura-jane-antunes-904b1267/" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
