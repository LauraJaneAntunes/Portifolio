'use client';

import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detecta scroll para mudar aparência do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links de navegação
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projetos" },
    { path: "/academic", label: "Acadêmico" },
    { path: "/professional", label: "Profissional" },
    { path: "/about", label: "Sobre" },
    { path: "/contact", label: "Contato" }
  ];
  
  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-4"
        }`} 
        style={{
          backgroundColor: 'var(--nav-bg)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl font-bold transition-transform hover:scale-105 flex-shrink-0">
            <Link href="/" className="flex items-center gap-1">
              <motion.span 
                className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >L</motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >J</motion.span>
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >A</motion.span>
            </Link>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:flex justify-center gap-3 lg:gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`animated-underline px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === link.path ? 
                  "bg-gradient-to-r from-primary-light/20 to-secondary/20 text-white font-medium" : 
                  "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Botão do Menu Mobile */}
          <motion.button 
            className="md:hidden p-2 rounded-lg bg-primary/30 text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "var(--primary-light)" }}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>          {/* Menu Mobile - Simples com fundo branco sólido e links pretos */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 z-40 flex flex-col items-center pt-20 bg-white"
                style={{ 
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "none"
                }}
              >
                <div className="mb-6 w-full px-4">
                  <h3 className="text-xl font-bold text-black text-center">
                    Menu
                  </h3>
                </div>
                  <nav className="flex flex-col items-center gap-4 w-full">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-black text-lg px-6 py-3 w-4/5 text-center transition-all duration-200 rounded-md ${
                        pathname === link.path ? 
                        "font-bold border-b-2 border-primary bg-gray-100" : 
                        "hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-220px)]">{children}</main>

      {/* Link de Retorno a Home */}
      {pathname !== "/" && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex justify-center"
        >          <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Voltar para a Página Inicial</span>
          </Link>
        </motion.div>
      )}

      {/* Links de Contato */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center gap-8 text-3xl my-8"
      >        <motion.a 
          href="https://github.com/LauraJaneAntunes/" 
          className="p-3 rounded-full bg-gray-800 hover:bg-primary/80 hover:scale-110 transition-all duration-300" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/laura-jane-antunes-904b1267/" 
          className="p-3 rounded-full bg-gray-800 hover:bg-primary/80 hover:scale-110 transition-all duration-300" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>      {/* Footer */}
      <footer className="p-6 text-center" style={{ backgroundColor: 'var(--nav-bg)', backdropFilter: 'none' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-80">
              © 2025 Laura Jane Antunes. Todos os direitos reservados.
            </div>
            <div className="text-sm">
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text font-semibold">
                Desenvolvedora Front-End • UI/UX Designer
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
