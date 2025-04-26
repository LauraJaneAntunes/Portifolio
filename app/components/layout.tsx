'use client';

import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-black text-white flex items-center justify-between">
        <div className="text-4xl font-bold">
          <span className="text-blueviolet">L</span>
          <span className="text-blueviolet">J</span>
          <span>A</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="animated-underline">Home</Link>
          <Link href="/projects" className="animated-underline">Projetos</Link>
          <Link href="/academic" className="animated-underline">Acadêmico</Link>
          <Link href="/professional" className="animated-underline">Profissional</Link>
          <Link href="/about" className="animated-underline">Sobre</Link>
          <Link href="/contact" className="seus-estilos-aqui">Contato</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Link de Retorno a Home */}
      {pathname !== "/" && (
        <div className="mt-6 flex justify-center">
            <Link href="/" className="text-blue-600 hover:underline">
              ← Voltar para a Página Inicial / Back to Home Page
            </Link>
        </div>
      )}

      {/* Links de Contato */}
      <div className="flex justify-center gap-8 text-3xl my-8">
        <a href="https://github.com/LauraJaneAntunes/" className="hover:text-gray-700" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/laura-jane-antunes-904b1267/" className="hover:text-gray-700" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-black text-white text-center">
        © 2025 Laura Jane Antunes. Todos os direitos reservados.
      </footer>
    </div>
  );
}
