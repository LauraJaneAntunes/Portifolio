'use client'

import Layout from '../components/layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGraduationCap, FaBrain, FaUserAlt, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaBriefcase, FaCoffee, FaDesktop } from 'react-icons/fa';

export default function About() {
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
                        Sobre Mim
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                        Conheça um pouco mais sobre minha jornada, habilidades e quem eu sou.
                    </p>
                </motion.header>
                
                {/* Perfil principal */}
                <section className="py-8 px-4 max-w-6xl mx-auto">
                    <div className="glass-card p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                            {/* Foto de perfil */}
                            <motion.div
                                className="w-full md:w-1/3 flex flex-col items-center"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
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
                                    <Image 
                                        src="/images/me.jpg" 
                                        alt="Laura Jane Antunes" 
                                        width={400} 
                                        height={400}
                                        className="relative rounded-full w-64 h-64 object-cover border-2 border-white/20"
                                    />
                                </div>
                                
                                <div className="mt-6 flex flex-col items-center">
                                    <h2 className="text-2xl font-bold mb-1">Laura Jane Antunes</h2>
                                    <p className="text-lg text-primary-light mb-4">Desenvolvedora Front-end</p>
                                    
                                    <div className="flex gap-4 mt-2">
                                        <motion.a 
                                            href="https://github.com/LauraJaneAntunes/" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaGithub className="text-xl" />
                                        </motion.a>
                                        <motion.a 
                                            href="https://www.linkedin.com/in/laura-jane-antunes-904b1267/" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaLinkedin className="text-xl" />
                                        </motion.a>
                                        <motion.a 
                                            href="mailto:laurajaneantunes@gmail.com"
                                            className="p-3 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                                            whileHover={{ y: -5 }}
                                        >
                                            <FaEnvelope className="text-xl" />
                                        </motion.a>
                                    </div>

                                    <motion.a 
                                        href="/CVLauraJaneAntunes.pdf" 
                                        target="_blank"
                                        className="flex items-center gap-2 mt-6 px-5 py-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <FaDownload /> Currículo
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Texto de biografia */}
                            <motion.div
                                className="w-full md:w-2/3"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="space-y-6">                                    <div>
                                        <h3 className="text-2xl font-semibold flex items-center gap-2 mb-3">
                                            <FaUserAlt className="text-primary" /> Quem sou eu
                                        </h3>
                                        <p className="text-lg leading-relaxed opacity-90 mb-4">
                                            Sou uma desenvolvedora front-end apaixonada por criar interfaces bonitas e funcionais.
                                            Com formação em programação e experiência em React e React Native, tenho me dedicado
                                            a criar experiências digitais que combinam estética e usabilidade.
                                            Estou sempre em busca de novos desafios e oportunidades para aplicar e expandir meus conhecimentos.
                                        </p>
                                        <p className="text-lg leading-relaxed opacity-90">
                                            Posso me comunicar em português nativo e inglês avançado, facilitando colaborações internacionais 
                                            e o trabalho com equipes multiculturais.
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">React</span>
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">React Native</span>
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">TypeScript</span>
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                                            <span className="bg-primary/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                                        </div>
                                    </div>
                                
                                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium flex items-center gap-2 mb-2">
                                                <FaMapMarkerAlt className="text-primary" /> Localização
                                            </h4>
                                            <p className="opacity-80">
                                                São Paulo, Brasil<br />
                                                Disponível para trabalhos remotos e híbridos
                                            </p>
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium flex items-center gap-2 mb-2">
                                                <FaLaptopCode className="text-primary" /> Disponibilidade
                                            </h4>
                                            <p className="opacity-80">
                                                Disponível para projetos freelance,<br />
                                                oportunidades de trabalho e colaborações
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                
                {/* Seções adicionais */}
                <section className="py-8 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Habilidades */}
                    <motion.div 
                        className="glass-card p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <FaCode className="text-primary" />
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                Habilidades
                            </span>
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">Front-end</span>
                                    <span className="text-sm opacity-80">90%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <motion.div 
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "90%" }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">UI/UX Design</span>
                                    <span className="text-sm opacity-80">85%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <motion.div 
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">Back-end</span>
                                    <span className="text-sm opacity-80">70%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <motion.div 
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "70%" }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-medium">Mobile Development</span>
                                    <span className="text-sm opacity-80">75%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <motion.div 
                                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Idiomas e Educação */}
                    <motion.div 
                        className="glass-card p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <FaGraduationCap className="text-primary" />
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                Educação e Idiomas
                            </span>
                        </h3>

                        <div className="mb-6">
                            <h4 className="text-lg font-medium mb-4">Idiomas</h4>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span>Português</span>
                                        <span className="text-sm opacity-80">Nativo</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <motion.div 
                                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span>Inglês</span>
                                        <span className="text-sm opacity-80">Avançado</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <motion.div 
                                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            transition={{ duration: 1, delay: 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-lg font-medium mb-4">Formação</h4>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <FaBrain className="text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium">Análise e Desenvolvimento de Sistemas</h5>
                                        <p className="text-sm opacity-80">FATEC - Faculdade de Tecnologia</p>
                                        <p className="text-xs opacity-60">2022 - Atual</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <FaBrain className="text-primary" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium">Cursos Especializados</h5>
                                        <p className="text-sm opacity-80">React, JavaScript, UI/UX Design</p>
                                        <p className="text-xs opacity-60">2020 - Atual</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </section>
                  {/* Experiência e Disponibilidade */}
                <motion.section 
                    className="py-8 px-4 max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <FaBriefcase className="text-primary" />
                            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                Experiência e Disponibilidade
                            </span>
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                className="bg-white/10 backdrop-blur p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                    Disponibilidade
                                </h4>
                                <p className="opacity-90 leading-relaxed">
                                    Estou disponível para projetos freelance, oportunidades de trabalho e colaborações. 
                                    Se você tem um projeto interessante ou uma oportunidade, ficarei feliz em conversar.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-green-400 text-sm font-medium">Disponível para novas oportunidades</span>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="bg-white/10 backdrop-blur p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                                    Serviços
                                </h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <FaDesktop className="text-primary" />
                                        <span>Desenvolvimento de interfaces web</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaLaptopCode className="text-primary" />
                                        <span>Desenvolvimento front-end com React</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCoffee className="text-primary" />
                                        <span>Aplicações web completas (front e back)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <FaCode className="text-primary" />
                                        <span>Consultoria em desenvolvimento web</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>                </motion.section>
            </div>
        </Layout>
    )
}