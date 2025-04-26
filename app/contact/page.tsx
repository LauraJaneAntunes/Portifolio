'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/layout';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwdwreg");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
        const timer = setTimeout(() => {
            router.push('/');
          }, 3000)
          return () => clearTimeout(timer);
        }
    }, [state.succeeded, router]);
  
    if (state.succeeded) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-[#ededed]">
          <h2 className="text-4xl font-bold text-center text-[#8a2be2]">Obrigado pela mensagem! ✨</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
        {/* Cabeçalho */}
        <header className="p-6 text-center">
          <h1 className="text-4xl font-bold text-[#8a2be2]">Página em desenvolvimento...</h1>
        </header>

        {/* Formulário de Contato */}
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-[#8a2be2]">Formulário de Contato / Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#ededed]">Nome / Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="mt-1 block w-full p-3 bg-transparent border border-[#8a2be2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#ededed]">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 block w-full p-3 bg-transparent border border-[#8a2be2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#ededed]">Mensagem / Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="mt-1 block w-full p-3 bg-transparent border border-[#8a2be2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FFFF]" 
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button 
              type="submit" 
              disabled={state.submitting}
              className="px-6 py-3 bg-[#8a2be2] hover:bg-[#00FFFF] text-[#0a0a0a] font-bold rounded-md transition-all duration-300 disabled:opacity-50"
            >
              {state.submitting ? 'Enviando...' : 'Enviar / Send'}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
}