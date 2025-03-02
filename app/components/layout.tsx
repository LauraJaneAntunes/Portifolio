'use client';

import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-black text-white flex items-center justify-between">
        <div className="text-4xl font-bold">LJA</div>
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projetos</Link>
          <Link href="/academic" className="hover:underline">Acadêmico</Link>
          <Link href="/professional" className="hover:underline">Profissional</Link>
          <Link href="/about" className="hover:underline">Sobre</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

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