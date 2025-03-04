"use client";
import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Palavras específicas do mundo da programação e estudos
    const words = [
      "HTML", "CSS", "JavaScript", "Python", "Java", "React", "Node.js", "Express", "Estrutura de Dados", "Modelagem de Banco de Dados", 
      "SQL", "NoSQL", "MongoDB", "MySQL", "POO", "API", "MVC", "Git", "Docker", "Algoritmos", "Lógica de Programação", "Desing Digital",
      "Embarcados", "Gestão Ágil", "SCRUM", "Engenharia de Software", "Interação Humano Computador", "UI/UX", "Jests", "SOLID", "Nest",
      "SpringBoot", "Microsserviços", "Inglês", "Segurança", "JWT", "IOT", "C#", "MMVC", "JSON", "XML", "NPM", "Expo", "React Native",
      "Nodemon", "ORM", "GitFlow", "Pipeline", "Sequelize", "Prisma", "PHP", "Angular", "Typescript", "Álgebra Linear", "Matrizes",
      "Estatística Aplicada", "Tuplas", "Matemática para Computação", "Redes e S.O.", "Tailwind", "Sass", "Landing Page", "Postman",
      "Visual Studio Code", 

    ];

    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);

    // Cada coluna começa com uma palavra aleatória transformada em array de letras
    const drops = Array.from({ length: columns }, () => {
      const word = words[Math.floor(Math.random() * words.length)];
      return word.split("");
    });

    // Posições de cada coluna
    const positions = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((wordArray, x) => {
        const charIndex = positions[x] % wordArray.length;
        const char = wordArray[charIndex];

        // Destacar algumas palavras aleatoriamente
        const isHighlighted = Math.random() > 0.67;

        ctx.fillStyle = isHighlighted ? "#8A2BE2" : "blueviolet"; // Cor blueviolet e destaque
        ctx.font = isHighlighted ? `${fontSize * 1.5}px monospace` : `${fontSize}px monospace`;

        // Desenha a letra
        ctx.fillText(char, x * fontSize, positions[x] * fontSize);

        // Move para a próxima posição
        positions[x]++;

        // Reinicia a posição após a altura total ou final da palavra
        if (positions[x] * fontSize > canvas.height && Math.random() > 0.975) {
          positions[x] = 0;
          drops[x] = words[Math.floor(Math.random() * words.length)].split("");
        }
      });
    };

    const interval = setInterval(draw, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default MatrixRain;
