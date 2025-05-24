'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from './components/layout';
import MatrixRain from './components/matrixRain';

const typingTexts = [
  "Sou uma estudante de programação",
  "Sou front-end"
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Texto digitado com efeito
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

  // Oculta o indicador de scroll quando o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Layout>
      <div className="relative min-h-screen">
        <MatrixRain />
        
        {/* Hero Section */}
        <section className="relative z-10 pt-12 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >            {/* Foto com borda animada */}
            <motion.div 
              className="relative z-10 w-full md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-1 rounded-full bg-primary opacity-70 blur-md"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
                <img
                  src="/images/me.jpg"
                  alt="Laura Jane Antunes"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-white/20"
                />
              </div>
            </motion.div>

            {/* Conteúdo de texto */}
            <motion.div 
              className="relative z-10 w-full md:w-3/5 text-center md:text-left text-white px-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-glow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  Olá, eu sou
                </span>
                <br />Laura Jane Antunes
              </motion.h1>

              <motion.div
                className="flex items-center justify-center md:justify-start my-4 h-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.p className="text-2xl md:text-3xl font-light">
                  {displayText}
                  <span className="animate-blink ml-1">|</span>
                </motion.p>
              </motion.div>

              {/* Resumo */}
              <motion.p 
                className="text-lg md:text-xl leading-relaxed my-6 max-w-2xl md:mx-0 mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Sou apaixonada por tecnologia, focada em criar experiências digitais usando React e React Native.  
                Estou em constante aprendizado para desenvolver soluções inovadoras e eficientes.
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Link 
                  href="/projects" 
                  className="btn-modern flex items-center gap-2"
                >
                  <span>Ver Projetos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Contato</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Indicador de scroll */}
          {showScrollIndicator && (
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ 
                opacity: { duration: 1, delay: 2 },
                y: { duration: 1.5, repeat: Infinity }
              }}
            >
              <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          )}
        </section>
          {/* Seção de tecnologias */}
        <motion.section 
          className="relative z-10 py-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Principais Tecnologias
            </h2>
            
            <div className="glass-card p-8 md:p-12">                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                {[
                  { icon: '/icons/html5.svg', name: 'HTML5', color: '#E44D26' },
                  { icon: '/icons/css.svg', name: 'CSS3', color: '#1572B6' },
                  { icon: '/icons/javascript.svg', name: 'JavaScript', color: '#F7DF1E' },
                  { icon: '/icons/typescript.svg', name: 'TypeScript', color: '#3178C6' },
                  { icon: '/icons/react.svg', name: 'React', color: '#61DAFB' },
                  { icon: '/icons/nextdotjs.svg', name: 'Next.js', color: '#444444' },
                  { icon: '/icons/nodedotjs.svg', name: 'Node.js', color: '#339933' },
                  { icon: '/icons/mongodb.svg', name: 'MongoDB', color: '#47A248' },
                  { icon: '/icons/figma.svg', name: 'Figma', color: '#F24E1E' },
                  { icon: '/icons/jest.svg', name: 'Jest', color: '#C21325' },
                  { icon: '/icons/swagger.svg', name: 'Swagger', color: '#85EA2D' },
                  { icon: '/icons/express.svg', name: 'Express', color: '#444444' },
                ].map((tech, index) => (<motion.div 
                    key={tech.name}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    variants={{
                      hover: {
                        y: -5,
                        boxShadow: `0 10px 25px rgba(0,0,0,0.2)`
                      }
                    }}
                  ><div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-3 p-3 relative"
                      style={{ 
                        background: `rgba(255, 255, 255, 0.95)`,
                        boxShadow: `0 4px 15px rgba(0, 0, 0, 0.15)`
                      }}
                    >                      {/* Borda colorida mais visível */}
                      <motion.div 
                        className="absolute inset-0 rounded-xl z-0"
                        style={{
                          border: `3px solid ${tech.color}`,
                          opacity: tech.color === '#444444' ? 0.7 : 0.9,
                          boxShadow: `inset 0 0 10px ${tech.color}25`
                        }}
                        whileHover={{
                          opacity: 1,
                          boxShadow: `inset 0 0 15px ${tech.color}50, 0 0 15px ${tech.color}40`
                        }}
                      ></motion.div>
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="h-full w-full object-contain relative z-10" 
                      />                    </div>
                    <span 
                      className="font-medium text-sm mt-2 px-3 py-1 rounded-full" 
                      style={{ 
                        background: 'rgba(0, 0, 0, 0.2)', 
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
