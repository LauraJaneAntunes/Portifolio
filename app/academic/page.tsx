'use client';

import Layout from '../components/layout';
import { motion } from "framer-motion";
import { FaUniversity, FaCalendarAlt, FaGlobe, FaAward, FaCertificate } from "react-icons/fa";
import Image from 'next/image';

const academicData = [
	{
		icon: '💻',
		title: 'Ensino Superior de Desenvolvimento de Software Multiplataforma',
		institution: 'Fatec Votorantim',
		period: '(Cursando - Conclusão em dez/2025)',
		englishTitle: "Bachelor's in Multiplatform Software Development",
		englishPeriod: '(Current)',
		logo: '/images/logo-fatec.png',
		site: 'https://fatecvotorantim.cps.sp.gov.br/',
		current: true,
		description: 'Curso focado no desenvolvimento de software para diversas plataformas, incluindo web, mobile e desktop. Tecnologias estudadas incluem Java, JavaScript, React, Node.js, e bancos de dados.'
	},
	{
		icon: '🐾',
		title: 'Ensino Técnico de Veterinária',
		institution: 'Grupo Hamaida - pólo da Unifael Votorantim',
		period: 'Conclusão 2022',
		englishTitle: 'Veterinary Technical Degree',
		englishPeriod: '2022',
		logo: '/images/logo-hamada.avif',
		site: 'https://www.grupohamada.com/',
		current: false,
		description: 'Formação técnica em veterinária, com foco em cuidados com animais, procedimentos clínicos básicos e assistência a médicos veterinários.'
	},
	{
		icon: '📚',
		title: 'Ensino Técnico em Administração',
		institution: 'IFSP Sorocaba',
		period: 'Conclusão em 2018',
		englishTitle: 'Technical Degree in Administration',
		englishPeriod: '2018',
		logo: '/images/logo-ifsp.png',
		site: 'https://sor.ifsp.edu.br/',
		current: false,
		description: 'Curso técnico em administração, abordando tópicos como gestão empresarial, contabilidade básica, recursos humanos e marketing.'
	},
	{
		icon: '🔬',
		title: 'Ensino Superior em Ciências Biológicas',
		institution: 'Ceunsp Itu',
		period: '(Incompleto, 2009 - 2012)',
		englishTitle: "Bachelor's in Biological Sciences (Incomplete)",
		englishPeriod: '(2009 - 2012)',
		logo: '/images/logo-ceunsp.png',
		site: 'https://www.ceunsp.edu.br',
		current: false,
		description: 'Curso superior em ciências biológicas com ênfase em ecologia e conservação ambiental. Não concluído.'
	},
	{
		icon: '🏛',
		title: 'Ensino Médio completo',
		institution: 'ETEC Fernando Prestes',
		period: 'Conclusão em 2006',
		englishTitle: 'High School Diploma',
		englishPeriod: '2006',
		logo: '/images/logo-etec.png',
		site: 'https://etecfernandoprestes.cps.sp.gov.br/',
		current: false,
		description: 'Ensino médio regular com foco em preparação para o vestibular e mercado de trabalho.'
	}
];

export default function Academic() {
	// Animação para o container
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	// Animação para os itens
	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 }
		}
	};

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
						Formação Acadêmica
					</h1>
					<p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
						Meu percurso educacional e qualificações obtidas ao longo dos anos
					</p>
				</motion.header>

				{/* Introdução */}
				<motion.div
					className="px-6 text-center max-w-3xl mx-auto mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<p className="text-lg leading-relaxed opacity-90">
						Minha trajetória educacional reflete meu interesse em diferentes áreas do conhecimento,
						culminando na atual formação em tecnologia. Cada etapa trouxe aprendizados valiosos
						que contribuem para uma visão multidisciplinar na resolução de problemas.
					</p>
				</motion.div>

				{/* Lista de Formações */}
				<section className="px-4 py-8 max-w-5xl mx-auto">
					<motion.div
						className="grid gap-8"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{academicData.map((item, index) => (
							<motion.div
								key={index}
								className={`glass-card overflow-hidden ${item.current ? 'border-2 border-primary/30' : ''}`}
								variants={itemVariants}
							>
								<div className="md:flex">
									{/* Coluna da esquerda com logo */}
									<div className="md:w-1/4 bg-white/5 flex items-center justify-center p-6">
										<div className="relative w-full aspect-square max-w-[180px]">
											<Image
												src={item.logo}
												alt={item.institution}
												width={180}
												height={180}
												className="p-4 object-contain"
											/>
										</div>
									</div>

									{/* Coluna da direita com informações */}
									<div className="p-6 md:w-3/4">
										{/* Tag de "Atual" se for o curso atual */}
										{item.current && (
											<div className="mb-3">
												<span className="px-3 py-1 rounded-full bg-primary/20 text-sm font-medium">
													Atual
												</span>
											</div>
										)}

										{/* Título */}
										<h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2">
											<span className="text-xl">{item.icon}</span>
											<span>{item.title}</span>
										</h3>

										{/* Informações da instituição */}
										<div className="space-y-2 mb-4">
											<div className="flex items-center gap-2">
												<FaUniversity className="text-primary opacity-70" />
												<span className="opacity-90">{item.institution}</span>
											</div>

											<div className="flex items-center gap-2">
												<FaCalendarAlt className="text-primary opacity-70" />
												<span className="opacity-90">{item.period}</span>
											</div>

											<div className="opacity-70 text-sm">
												{item.englishTitle} - {item.englishPeriod}
											</div>
										</div>

										{/* Descrição */}
										<p className="opacity-90 mb-4">
											{item.description}
										</p>

										{/* Link para o site */}
										{item.site && (
											<motion.a
												href={item.site}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 text-primary hover:underline"
												whileHover={{ x: 5 }}
												transition={{ type: "spring", stiffness: 400, damping: 10 }}
											>
												<FaGlobe className="text-sm" />
												<span>Visitar o site</span>
											</motion.a>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</section>

				{/* Certificações e Cursos */}
				<motion.div
					className="glass-card p-8 text-center max-w-3xl mx-auto mb-16 mt-8 overflow-hidden"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="flex items-center justify-center gap-3 mb-4">
						<FaCertificate className="text-2xl text-primary" />
						<h2 className="text-2xl font-bold">Certificações e Cursos Complementares</h2>
					</div>

					<p className="opacity-90 mb-6">
						Além da formação acadêmica formal, busco constantemente aprimorar meus conhecimentos
						através de cursos online e certificações, especialmente na área de desenvolvimento web.
					</p>

					<motion.div
						className="flex flex-wrap justify-center gap-4 mt-6"
					>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>HTML & CSS</span>
						</motion.div>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>JavaScript</span>
						</motion.div>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>React.js</span>
						</motion.div>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>Next.js</span>
						</motion.div>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>TypeScript</span>
						</motion.div>
						<motion.div
							className="bg-white/10 backdrop-blur px-4 py-2 rounded-full"
							whileHover={{ y: -5 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
						>
							<span>Tailwind CSS</span>
						</motion.div>
					</motion.div>

					<motion.a
						href="/contact"
						className="btn-modern inline-flex items-center gap-2 mt-8"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<FaAward className="text-sm" />
						<span>Entre em contato</span>
					</motion.a>
				</motion.div>
			</div>
		</Layout>
	);
}
