/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  Globe, 
  Cpu, 
  Layers, 
  ChevronRight, 
  Crown,
  Circle,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";
import { useRef } from "react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute -top-4 text-light-blue"
    >
      <Crown size={32} fill="currentColor" />
    </motion.div>
    <div className="relative flex items-center justify-center">
      <Circle size={80} className="text-neon-blue stroke-[1.5]" />
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Stylized Peace Symbol */}
        <div className="relative w-12 h-12 border-2 border-neon-blue rounded-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-neon-blue" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-neon-blue origin-top rotate-45" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-1/2 bg-neon-blue origin-top -rotate-45" />
        </div>
      </div>
      {/* Drip Effect */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ height: [8, 16, 8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-1 bg-neon-blue rounded-full"
          />
        ))}
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="p-8 rounded-3xl bg-dark-blue/20 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-vibrant-blue/10 flex items-center justify-center mb-6 group-hover:bg-vibrant-blue/30 transition-colors">
      <Icon className="text-neon-blue" size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/50 text-base leading-relaxed">{description}</p>
  </motion.div>
);

const ProjectCard = ({ title, category, image }: { title: string, category: string, image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-dark-blue/40 border border-white/5"
  >
    <img 
      src={image} 
      alt={title} 
      className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-transparent opacity-80" />
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <p className="text-neon-blue text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
      <h4 className="text-2xl font-bold text-white flex items-center justify-between">
        {title}
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </h4>
    </div>
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="min-h-screen bg-deep-blue text-white selection:bg-neon-blue/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(47,91,255,0.05),transparent_70%)]" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-vibrant-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-neon-blue/5 blur-[150px] rounded-full" />
        
        {/* Tech Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-deep-blue/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-neon-blue flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Crown size={20} className="text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter">SAKIDILA<span className="text-neon-blue">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase text-white/60">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <button className="px-6 py-2.5 bg-white text-deep-blue rounded-full hover:bg-neon-blue hover:text-white transition-all">
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-40 pb-32 flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 text-center z-10"
        >
          <Logo className="mb-12" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
              INOVAÇÃO QUE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-light-blue to-vibrant-blue">TRANSFORMA.</span>
            </h1>
            <p className="text-neon-blue font-black tracking-[0.5em] text-sm md:text-lg mb-10 uppercase">
              NGA SAKIDILA KYAVULU — GRATIDÃO EM CADA LINHA DE CÓDIGO
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A Sakidila Tech é uma software house angolana focada em excelência digital. 
            Transformamos visões ambiciosas em produtos escaláveis que impactam o mercado global.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-10 py-5 bg-neon-blue rounded-full font-black text-lg flex items-center gap-3 hover:shadow-[0_0_40px_rgba(76,123,255,0.4)] transition-all">
              Iniciar Projeto
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/10 rounded-full font-black text-lg hover:bg-white/5 transition-all">
              Ver Portfólio
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-neon-blue font-bold tracking-widest uppercase text-sm mb-4">Nossas Especialidades</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter">SOLUÇÕES DIGITAIS DE PONTA A PONTA.</h3>
            </div>
            <p className="text-white/40 max-w-xs text-lg italic">
              "A tecnologia é o meio, a excelência é o nosso destino."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              delay={0.1}
              icon={Code2}
              title="Software Sob Medida"
              description="Desenvolvemos sistemas ERP, CRM e softwares complexos focados na eficiência operacional do seu negócio."
            />
            <ServiceCard 
              delay={0.2}
              icon={Globe}
              title="Web Experience"
              description="Websites de alta performance e aplicações web (PWAs) que oferecem experiências imersivas aos usuários."
            />
            <ServiceCard 
              delay={0.3}
              icon={Layers}
              title="Plataformas Mobile"
              description="Apps nativos e híbridos (iOS/Android) com foco em UX/UI intuitivo e escalabilidade garantida."
            />
            <ServiceCard 
              delay={0.4}
              icon={Cpu}
              title="Consultoria Tech"
              description="Modernização de infraestrutura, cloud computing e integração de IA para otimizar processos."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-dark-blue/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-neon-blue font-bold tracking-widest uppercase text-sm mb-4">Impacto Real</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">PROJETOS EM DESTAQUE.</h3>
            <div className="w-20 h-1 bg-neon-blue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Kwanza Pay"
              category="Fintech / Mobile App"
              image="https://picsum.photos/seed/fintech/800/1000"
            />
            <ProjectCard 
              title="Angola Logística"
              category="Supply Chain / Dashboard"
              image="https://picsum.photos/seed/logistics/800/1000"
            />
            <ProjectCard 
              title="Educa+ Digital"
              category="EdTech / Platform"
              image="https://picsum.photos/seed/education/800/1000"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-blue/20 blur-[100px] rounded-full" />
              <img 
                src="https://picsum.photos/seed/team/800/600" 
                alt="Sakidila Team" 
                className="rounded-3xl border border-white/10 relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 p-8 bg-neon-blue rounded-3xl z-20 shadow-2xl">
                <p className="text-4xl font-black">50+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Projetos Entregues</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-neon-blue font-bold tracking-widest uppercase text-sm mb-4">Quem Somos</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">CULTURA DE GRATIDÃO E RESULTADO.</h3>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                Nascemos com o propósito de elevar o padrão tecnológico em Angola. O nome <strong>Sakidila</strong> reflete nossa filosofia: somos gratos pela oportunidade de inovar e pela confiança de nossos parceiros.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Time multidisciplinar de engenheiros e designers.",
                  "Metodologias ágeis focadas em entrega contínua.",
                  "Compromisso com segurança e escalabilidade.",
                  "Foco total na experiência do usuário final."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="text-neon-blue" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-4 border border-neon-blue text-neon-blue rounded-full font-bold hover:bg-neon-blue hover:text-white transition-all">
                Conheça Nossa História
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-vibrant-blue to-dark-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8">PRONTO PARA O PRÓXIMO NÍVEL?</h2>
              <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                Vamos conversar sobre como a Sakidila Tech pode impulsionar sua transformação digital hoje.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="mailto:contato@sakidila.tech" className="flex items-center gap-3 text-2xl font-bold hover:text-light-blue transition-colors">
                  <Mail size={32} />
                  contato@sakidila.tech
                </a>
                <div className="w-2 h-2 bg-white/20 rounded-full hidden sm:block" />
                <a href="tel:+244900000000" className="flex items-center gap-3 text-2xl font-bold hover:text-light-blue transition-colors">
                  <Phone size={32} />
                  +244 900 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-deep-blue relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-blue flex items-center justify-center">
                  <Crown size={20} className="text-white" />
                </div>
                <span className="font-black text-2xl tracking-tighter">SAKIDILA<span className="text-neon-blue">.</span></span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                Transformando o ecossistema digital angolano através de engenharia de software de classe mundial e design centrado no humano.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon-blue transition-all"><Github size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-neon-blue">Links Rápidos</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfólio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-neon-blue">Localização</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0" />
                  Luanda, Angola <br /> Edifício Sky Center, Piso 4
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} />
                  info@sakidila.tech
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-xs">© 2026 Sakidila Tech. Todos os direitos reservados.</p>
            <div className="flex gap-8 text-white/20 text-xs uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
