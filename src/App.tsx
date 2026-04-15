/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Infinity, 
  Zap, 
  Brain, 
  Layers, 
  ArrowRight, 
  Github, 
  Twitter, 
  Linkedin, 
  ChevronRight,
  Sparkles,
  Code,
  Globe,
  MessageSquare
} from "lucide-react";
import { useRef } from "react";
import { cn } from "./lib/utils";

const Logo = () => (
  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center relative overflow-hidden">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
      {/* Letter M (Background/Base) */}
      <path d="M3 20V6L12 14L21 6V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Letter A (Overlay) */}
      <path d="M12 4L6 18M12 4L18 18M9 13H15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Letter I (Accent dot) */}
      <circle cx="12" cy="8" r="2" fill="#050505" />
    </svg>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass border-b-0">
    <div className="flex items-center gap-2">
      <Logo />
      <span className="font-display font-bold text-xl tracking-tight">Aimaks</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
      <a href="#services" className="hover:text-white transition-colors">Услуги</a>
      <a href="#work" className="hover:text-white transition-colors">Работы</a>
      <a href="#about" className="hover:text-white transition-colors">О нас</a>
      <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
    </div>
    <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-accent transition-all hover:scale-105 active:scale-95 inline-block">
      Начать
    </a>
  </nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />
      
      <motion.div 
        style={{ y, opacity }}
        className="text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium tracking-wider uppercase text-white/70">Максимум AI</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter"
        >
          СОЗДАЕМ <br />
          <span className="text-accent-gradient">БУДУЩЕЕ ИИ</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Мы команда специалистов, создающая интеллектуальные системы на заказ, которые трансформируют индустрии. От генеративных моделей до автономных агентов.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition-all group">
            Связаться
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#work" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-2xl glass hover:bg-white/5 transition-all group cursor-default"
  >
    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
      <Icon className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
    </div>
    <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="mb-20">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">НАША ЭКСПЕРТИЗА</h2>
      <p className="text-white/50 max-w-xl">Мы объединяем передовые исследования с практической инженерией для создания ИИ-решений, которые действительно работают.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard 
        icon={Brain} 
        title="Генеративный ИИ" 
        description="Кастомные LLM, генерация изображений и мультимодальные системы под нужды вашего бизнеса."
        delay={0.1}
      />
      <ServiceCard 
        icon={Layers} 
        title="ИИ-Автоматизация" 
        description="Интеллектуальные рабочие процессы, автоматизирующие сложные решения и повышающие эффективность."
        delay={0.2}
      />
      <ServiceCard 
        icon={Code} 
        title="MLOps и Инфраструктура" 
        description="Масштабируемая инфраструктура для обучения и развертывания моделей с высокой надежностью."
        delay={0.3}
      />
      <ServiceCard 
        icon={Globe} 
        title="ИИ-Стратегия" 
        description="Помогаем руководству ориентироваться в сфере ИИ и строить устойчивую дорожную карту инноваций."
        delay={0.4}
      />
      <ServiceCard 
        icon={MessageSquare} 
        title="Разговорный ИИ" 
        description="Чат-боты и голосовые ассистенты нового поколения с пониманием контекста и живым общением."
        delay={0.5}
      />
      <ServiceCard 
        icon={Zap} 
        title="Аналитика в реальном времени" 
        description="Обработка огромных потоков данных в реальном времени для получения ценных инсайтов и прогнозов."
        delay={0.6}
      />
    </div>
  </section>
);

const ProjectCard = ({ title, category, image }: { title: string, category: string, image: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
        Смотреть кейс <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

const Work = () => (
  <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ИЗБРАННЫЕ РАБОТЫ</h2>
        <p className="text-white/50 max-w-xl">Взгляд на интеллектуальные системы, которые мы создали для лидеров индустрии.</p>
      </div>
      <button className="px-8 py-4 glass rounded-xl font-bold hover:bg-white/10 transition-all">
        Все проекты
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard 
        title="Нейро-Коммерция" 
        category="ИИ для E-commerce" 
        image="https://picsum.photos/seed/ai1/800/1000"
      />
      <ProjectCard 
        title="Aether Vision" 
        category="Компьютерное зрение" 
        image="https://picsum.photos/seed/ai2/800/1000"
      />
      <ProjectCard 
        title="Synthetix Lab" 
        category="Генеративные модели" 
        image="https://picsum.photos/seed/ai3/800/1000"
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <Logo />
          <span className="font-display font-bold text-xl tracking-tight">Aimaks</span>
        </div>
        <p className="text-white/50 max-w-sm mb-8">
          Определяем новые границы сотрудничества человека и машины. Мы создаем инструменты для будущего.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-black transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-black transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-black transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold mb-6">СТУДИЯ</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Наш процесс</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold mb-6">КОНТАКТЫ</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li>hello@aimaks.studio</li>
          <li>Москва, Россия</li>
          <li>+7 (999) 000-00-00</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
      <p>© 2026 Aimaks. Все права защищены.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        <a href="#" className="hover:text-white transition-colors">Условия использования</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        
        {/* CTA Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -z-10" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">ГОТОВЫ НАЧАТЬ <br /> ВАШ ПУТЬ В ИИ?</h2>
            <p className="text-white/50 mb-12 max-w-xl mx-auto text-lg">
              Оставьте заявку, и наша команда свяжется с вами для обсуждения проекта.
            </p>
            
            <form className="max-w-2xl mx-auto text-left space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Имя <span className="text-accent">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Email <span className="text-accent">*</span></label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Телефон <span className="text-accent">*</span></label>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 000-00-00" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Telegram</label>
                  <input 
                    type="text" 
                    placeholder="@username" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 ml-1">О проекте (кратко)</label>
                <textarea 
                  rows={3} 
                  placeholder="Опишите вашу задачу..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-12 py-4 mt-4 bg-accent text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(0,242,255,0.2)]"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
