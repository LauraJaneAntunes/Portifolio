'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/layout';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import './contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwdwreg");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, router]);
  
  if (state.succeeded) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-12 text-center max-w-md mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: 2 }}
              className="text-6xl text-primary mx-auto mb-6 flex justify-center"
            >
              <FaPaperPlane />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Mensagem Enviada!
            </h2>
            <p className="text-lg opacity-80 mb-6">
              Obrigado pelo seu contato. Responderei o mais breve possível.
            </p>
            <p className="text-sm">
              Redirecionando para a página inicial em alguns segundos...
            </p>
          </motion.div>
        </div>
      </Layout>
    );
  }

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
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Dúvidas, propostas ou apenas quer dizer olá? Ficarei feliz em conversar.
          </p>
        </motion.header>

        {/* Conteúdo principal */}
        <div className="max-w-5xl mx-auto px-4 mb-16">
          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Informações de contato resumidas */}
                <div className="w-full md:w-1/3">
                  <div className="p-6 bg-primary/20 backdrop-blur rounded-lg">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaEnvelope className="text-primary" /> Como me encontrar
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-lg text-primary mt-1" />
                        <span>Votorantim/SP, Brasil</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaEnvelope className="text-lg text-primary" />
                        <a href="mailto:laurajaneantunes@gmail.com" className="hover:text-primary transition-colors">
                          laurajaneantunes@gmail.com
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaLinkedin className="text-lg text-primary" />
                        <a href="https://www.linkedin.com/in/laura-jane-antunes-904b1267/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <FaGithub className="text-lg text-primary" />
                        <a href="https://github.com/LauraJaneAntunes/" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </li>
                    </ul>
                    <motion.div
                      className="mt-6 pt-4 border-t border-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-sm opacity-80">
                        Para mais informações sobre mim e meus serviços, visite a página <a href="/about" className="text-primary hover:underline">Sobre</a>.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Formulário de Contato */}
                <div className="w-full md:w-2/3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium opacity-80 mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Seu nome completo"
                        className="w-full p-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium opacity-80 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="seu.email@exemplo.com"
                        className="w-full p-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium opacity-80 mb-1">Assunto</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        placeholder="Assunto da mensagem"
                        className="w-full p-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium opacity-80 mb-1">Mensagem</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        placeholder="Escreva sua mensagem aqui..."
                        className="w-full p-3 bg-white/10 backdrop-blur border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <motion.button 
                        type="submit" 
                        disabled={state.submitting}
                        className="btn-modern flex items-center gap-2 px-8 py-3"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {state.submitting ? 'Enviando...' : 'Enviar Mensagem'} 
                        <FaPaperPlane />
                      </motion.button>
                      {state.errors && (
                        <p className="text-red-500 mt-2">Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
