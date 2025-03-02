'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from './components/layout';

const typingTexts = [
  "Sou uma estudante de programação",
  "Sou front-end"
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const typingSpeed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? currentText.substring(0, prev.length - 1) : currentText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="p-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Foto */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/me.jpg"
            alt="Laura Jane Antunes"
            className="rounded-full w-64 h-64 md:w-full md:h-auto shadow-lg border-4"
            style={{
              boxShadow: '0 0 15px blueviolet',
              borderColor: 'blueviolet',
              aspectRatio: '1 / 1',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Texto com animação */}
        <div className="w-full md:w-2/3 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Olá, eu sou Laura Jane Antunes</h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl mt-4"
          >
            {displayText}
            <span className="animate-blink">|</span>
          </motion.p>

          {/* Resumo */}
          <div className="p-8 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              Apaixonada por tecnologia, focada em criar experiências digitais usando React e React Native.  
              Estou em constante aprendizado para desenvolver soluções eficientes e inovadoras.
            </p>

            <div className="mt-6">
              <Link href="/projects" className="text-blue-600 hover:underline text-xl">
                Ver Projetos Principais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
