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
  MessageSquare,
  Bot
} from "lucide-react";
import React, { useRef, useState } from "react";
import { cn } from "./lib/utils";
import { ProjectModal } from "./components/ProjectModal";

const Logo = () => (
<svg width="36" height="36" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <polygon points="15,90 35,90 55,20 35,20" fill="#0056B3" />
    <polygon points="50,90 70,90 90,20 70,20" fill="#0056B3" />
    <polygon points="90,20 110,20 110,90 90,90" fill="#0056B3" />
    <polygon points="35,20 55,20 75,90 55,90" fill="#3B82F6" />
  </svg>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass border-b-0">
    <div className="flex items-center gap-2">
      <Logo />
      <span className="font-display font-bold text-xl tracking-tight">Aimaks</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-900/80">
      <a href="#services" className="hover:text-slate-900 transition-colors">Услуги</a>
      <a href="#work" className="hover:text-slate-900 transition-colors">Работы</a>
      <a href="#process" className="hover:text-slate-900 transition-colors">Процесс</a>
      <a href="#contact" className="hover:text-slate-900 transition-colors">Контакты</a>
    </div>
    <a href="#contact" className="px-5 py-2 bg-white text-slate-900 shadow-sm border border-slate-900/10 text-sm font-bold rounded-full hover:bg-accent transition-all hover:scale-105 active:scale-95 inline-block">
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
          <span className="text-xs font-medium tracking-wider uppercase text-slate-900/90">Максимум AI</span>
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
          className="text-lg md:text-xl text-slate-900/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Мы команда специалистов, создающая интеллектуальные системы на заказ, которые трансформируют индустрии. От генеративных моделей до автономных агентов.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 shadow-sm border border-slate-900/10 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent transition-all group">
            Связаться
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#work" className="w-full sm:w-auto px-8 py-4 glass text-slate-900 font-bold rounded-xl hover:bg-slate-900/10 transition-all flex items-center justify-center">
            Смотреть работы
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-6 h-10 border-2 border-slate-900 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-900 rounded-full" />
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
    className="p-8 rounded-2xl glass hover:bg-slate-900/5 transition-all group cursor-default"
  >
    <div className="w-12 h-12 bg-slate-900/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
      <Icon className="w-6 h-6 text-slate-900 group-hover:text-accent transition-colors" />
    </div>
    <h3 className="text-xl font-display font-bold mb-4">{title}</h3>
    <p className="text-slate-900/70 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="mb-20">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">НАША ЭКСПЕРТИЗА</h2>
      <p className="text-slate-900/70 max-w-xl">Мы объединяем передовые исследования с практической инженерией для создания ИИ-решений, которые действительно работают.</p>
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
        icon={Bot} 
        title="Агенты и нейро-сотрудники" 
        description="Создание автономных ИИ-агентов и цифровых сотрудников для автоматизации сложных бизнес-задач и рутины."
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

const ProjectCard = ({ title, category, projectId, link, advantages }: { title: string, category: string, projectId: string, link: string, advantages: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="flex flex-col rounded-3xl overflow-hidden group cursor-pointer bg-white border border-slate-900/5 shadow-sm hover:shadow-lg transition-all"
  >
    <a href={link} target="_blank" rel="noopener noreferrer" className="aspect-video w-full overflow-hidden bg-slate-100 block">
      <img src={`/projects/${projectId}/1.png`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </a>
    <div className="p-8">
      <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">{category}</p>
      <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
      <ul className="mb-6 space-y-2">
        {advantages.map((adv, i) => (
          <li key={i} className="flex items-center text-sm text-slate-900/80">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
            {adv}
          </li>
        ))}
      </ul>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-sm font-medium text-slate-900/70 group-hover:text-accent transition-colors"
        onClick={e => e.stopPropagation()}
      >
        Смотреть фото проекта <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const Work = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ИЗБРАННЫЕ РАБОТЫ</h2>
          <p className="text-slate-900/70 max-w-xl">Взгляд на интеллектуальные системы, которые мы создали для лидеров индустрии.</p>
        </div>
        <button className="px-8 py-4 glass rounded-xl font-bold hover:bg-slate-900/10 transition-all">
          Все проекты
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          title="AI Content Maker" 
          category="Генерация контента" 
          projectId="AIContentMaker"
          link="https://aicontent.aimaks.ru"
          advantages={["Автоматизация генерации контента", "Снижение маркетинговых затрат", "Рост вовлеченности аудитории"]}
          onOpenModal={() => setSelectedProjectId("AIContentMaker")}
        />
        <ProjectCard 
          title="Нейро-продавец" 
          category="B2B Услуги для бизнеса" 
          projectId="NeuroSeller"
          link="https://b2bsale.aimaks.ru"
          advantages={["Определение решений для бизнеса", "Повышение конверсии продаж", "Анализ покупательского поведения"]}
          onOpenModal={() => setSelectedProjectId("NeuroSeller")}
        />
        <ProjectCard 
          title="SellSmart - AI Аукцион" 
          category="Умные торги" 
          projectId="SellSmart"
          link="https://auction.aimaks.ru"
          advantages={["Динамическое ценообразование", "Автоматизация управления запасами", "Точное прогнозирование спроса"]}
          onOpenModal={() => setSelectedProjectId("SellSmart")}
        />
      </div>
      {selectedProjectId && (
        <ProjectModal 
          projectId={selectedProjectId} 
          isOpen={!!selectedProjectId} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}
    </section>
  );
};

const ProcessStep = ({ number, title, description, duration }: { number: string, title: string, description: string, duration: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative flex gap-6 md:gap-10 group"
  >
    {/* Timeline line */}
    <div className="absolute left-[15px] md:left-[39px] top-14 bottom-[-2rem] w-[2px] bg-slate-900/5 group-last:hidden" />
    
    {/* Number indicator */}
    <div className="relative z-10 flex-shrink-0 w-[32px] h-[32px] md:w-[80px] md:h-[80px] rounded-full md:rounded-2xl glass flex items-center justify-center text-accent font-display font-bold text-sm md:text-2xl bg-bg">
      {number}
    </div>

    {/* Content */}
    <div className="flex-grow pb-12 md:pb-16 pt-1 md:pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <h3 className="text-xl md:text-2xl font-display font-bold">{title}</h3>
        <span className="text-accent text-xs md:text-sm font-mono bg-accent/10 px-3 py-1 rounded-full w-fit whitespace-nowrap">
          {duration}
        </span>
      </div>
      <p className="text-slate-900/70 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  </motion.div>
);

const Process = () => (
  <section id="process" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ПРОЦЕСС РАЗРАБОТКИ</h2>
        <p className="text-slate-900/70 mb-12">Прозрачный процесс, предсказуемые сроки и фиксированный бюджет для вашего спокойствия.</p>
        
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border-l-4 border-l-accent">
            <div className="text-sm text-slate-900/70 mb-1">Средний бюджет</div>
            <div className="text-3xl font-display font-bold">от 150 000 ₽</div>
            <div className="text-sm text-slate-900/60 mt-2">Зависит от сложности ИИ-моделей и интеграций</div>
          </div>
          <div className="glass p-6 rounded-2xl border-l-4 border-l-accent-purple">
            <div className="text-sm text-slate-900/70 mb-1">Сроки реализации</div>
            <div className="text-3xl font-display font-bold">1 — 3 месяца</div>
            <div className="text-sm text-slate-900/60 mt-2">От первой встречи до запуска MVP</div>
          </div>
        </div>
      </div>
      
      <div className="lg:w-2/3">
        <div className="space-y-0">
          <ProcessStep 
            number="01"
            title="Аналитика и стратегия"
            duration="1-2 недели"
            description="Погружаемся в бизнес-процессы, определяем участки, которые решит ИИ. Формируем техническое задание, подбираем оптимальные модели (LLM, CV и др.) и утверждаем архитектуру."
          />
          <ProcessStep 
            number="02"
            title="Прототипирование (MVP)"
            duration="1-2 недели"
            description="Создаем базовую версию системы для проверки гипотез. Обучаем или дообучаем (fine-tuning) модели на ваших данных, настраиваем промпты и базовый интерфейс."
          />
          <ProcessStep 
            number="03"
            title="Разработка и интеграция"
            duration="2-4 недель"
            description="Полноценная разработка продукта. Интегрируем ИИ-ядро с вашими текущими CRM/ERP системами, настраиваем безопасность данных и масштабируемую инфраструктуру (MLOps)."
          />
          <ProcessStep 
            number="04"
            title="Тестирование и запуск"
            duration="1-2 недели"
            description="Нагрузочное тестирование, проверка безопасности (red teaming) и устранение галлюцинаций моделей. Плавный релиз и обучение вашей команды работе с новой системой."
          />
        </div>
      </div>
    </div>
  </section>
);

const PrivacyPolicyModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-display">Политика конфиденциальности</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
          ✕
        </button>
      </div>
      <div className="prose prose-sm text-slate-900/80">
        <p>Дата последнего обновления: 9 июня 2026 г.</p>
        <p>Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем персональные данные пользователей при использовании сервисов Aimaks.</p>
        <h3 className="font-bold mt-4 mb-2">1. Сбор данных</h3>
        <p>Мы собираем только те данные, которые вы добровольно предоставляете через формы на нашем сайте (имя, email, телефон, Telegram, краткое описание проекта). Эти данные используются исключительно для связи с вами и обсуждения потенциального сотрудничества.</p>
        <h3 className="font-bold mt-4 mb-2">2. Использование данных</h3>
        <p>Предоставляя нам свои персональные данные, вы соглашаетесь на их обработку в целях оказания услуг, информирования о наших продуктах и предложениях, а также для выполнения наших договорных обязательств.</p>
        <h3 className="font-bold mt-4 mb-2">3. Защита данных</h3>
        <p>Мы принимаем все необходимые технические и организационные меры для защиты вашей информации от несанкционированного доступа, изменения или раскрытия. Мы не передаем ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.</p>
        <h3 className="font-bold mt-4 mb-2">4. Ваши права</h3>
        <p>Вы имеете право отозвать свое согласие на обработку персональных данных в любое время, направив нам соответствующий запрос по адресу электронной почты info@aimaks.ru.</p>
        <p>Использование нашего сайта означает ваше полное согласие с настоящей Политикой конфиденциальности.</p>
      </div>
    </div>
  </div>
);

const TermsOfUseModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm" onClick={onClose}>
    <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-display">Условия использования</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
          ✕
        </button>
      </div>
      <div className="prose prose-sm text-slate-900/80">
        <p>Дата последнего обновления: 9 июня 2026 г.</p>
        <h3 className="font-bold mt-4 mb-2">1. Общие положения</h3>
        <p>Использование настоящего сайта означает согласие с данными Условиями. Если вы не согласны с ними, пожалуйста, покиньте сайт.</p>
        <h3 className="font-bold mt-4 mb-2">2. Интеллектуальная собственность</h3>
        <p>Все права на контент, дизайн и программное обеспечение сайта принадлежат Aimaks. Копирование без согласия запрещено.</p>
        <h3 className="font-bold mt-4 mb-2">3. Отказ от ответственности</h3>
        <p>Сервисы предоставляются "как есть". Aimaks не несет ответственности за любые прямые или косвенные убытки, возникшие в результате использования сайта.</p>
        <h3 className="font-bold mt-4 mb-2">4. Изменения условий</h3>
        <p>Aimaks оставляет за собой право вносить изменения в данные Условия в любое время без уведомления.</p>
        <h3 className="font-bold mt-4 mb-2">5. Применимое право</h3>
        <p>Все споры решаются в соответствии с законодательством Российской Федерации.</p>
      </div>
    </div>
  </div>
);

const Footer = ({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void, onOpenTerms: () => void }) => (
  <footer className="py-20 px-6 border-t border-slate-900/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-8">
          <Logo />
          <span className="font-display font-bold text-xl tracking-tight">Aimaks</span>
        </div>
        <p className="text-slate-900/70 max-w-sm">
          Определяем новые границы сотрудничества человека и машины. Мы создаем инструменты для будущего.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold mb-6">НАВИГАЦИЯ</h4>
        <ul className="space-y-4 text-sm text-slate-900/70">
          <li><a href="#services" className="hover:text-slate-900 transition-colors">Услуги</a></li>
          <li><a href="#work" className="hover:text-slate-900 transition-colors">Работы</a></li>
          <li><a href="#process" className="hover:text-slate-900 transition-colors">Процесс</a></li>
          <li><a href="#contact" className="hover:text-slate-900 transition-colors">Контакты</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold mb-6">КОНТАКТЫ</h4>
        <ul className="space-y-4 text-sm text-slate-900/70">
          <li>info@aimaks.ru</li>
          <li>Москва, Россия</li>
          <li>+7 937 3828282</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-900/50">
      <p>© 2026 Aimaks. Все права защищены.</p>
      <div className="flex gap-8">
        <button onClick={onOpenPrivacy} className="hover:text-slate-900 transition-colors">Политика конфиденциальности</button>
        <button onClick={onOpenTerms} className="hover:text-slate-900 transition-colors">Условия использования</button>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('idle');
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };
  return (
    <div className="min-h-screen selection:bg-accent selection:text-black relative">
      {/* Background Image Setup */}
      {/* To use your own image: 1. Create a 'public' folder. 2. Upload your image as 'bg.png'. 3. Change the URL below to '/bg.png' */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("bg.png")' }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        
        {/* CTA Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-accent/5 -z-10" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">ГОТОВЫ НАЧАТЬ <br /> ВАШ ПУТЬ В ИИ?</h2>
            <p className="text-slate-900/70 mb-12 max-w-xl mx-auto text-lg">
              Оставьте заявку, и наша команда свяжется с вами для обсуждения проекта.
            </p>
            
            {status === 'success' ? (
              <div className="text-center py-16 glass rounded-2xl">
                 <h3 className="text-3xl font-bold font-display text-accent">Заявка отправлена!</h3>
                 <p className="text-slate-900/70 mt-4 text-lg">Спасибо за обращение. Мы скоро с вами свяжемся.</p>
              </div>
            ) : (
              <form className="max-w-2xl mx-auto text-left space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900/90 ml-1">Имя <span className="text-accent">*</span></label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Ваше имя" 
                      required
                      onInvalid={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.validity.valueMissing) target.setCustomValidity('Пожалуйста, заполните это поле');
                        else target.setCustomValidity('Пожалуйста, исправьте ошибку');
                      }}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                      className="w-full bg-slate-900/5 border border-slate-900/10 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900/90 ml-1">Email <span className="text-accent">*</span></label>
                    <input 
                      type="text" 
                      name="email"
                      placeholder="ваш@email.com" 
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onInvalid={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.validity.valueMissing) {
                          target.setCustomValidity('Пожалуйста, заполните это поле');
                        } else if (target.validity.patternMismatch) {
                          target.setCustomValidity('Пожалуйста, введите корректный email');
                        } else {
                          target.setCustomValidity('Пожалуйста, введите корректные данные');
                        }
                      }}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                      className="w-full bg-slate-900/5 border border-slate-900/10 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900/90 ml-1">Телефон <span className="text-accent">*</span></label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+7 (999) 000-00-00" 
                      required
                      onInvalid={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.validity.valueMissing) target.setCustomValidity('Пожалуйста, заполните это поле');
                        else target.setCustomValidity('Пожалуйста, исправьте ошибку');
                      }}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                      className="w-full bg-slate-900/5 border border-slate-900/10 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900/90 ml-1">Telegram</label>
                    <input 
                      type="text" 
                      name="telegram"
                      placeholder="@ваш_ник" 
                      className="w-full bg-slate-900/5 border border-slate-900/10 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900/90 ml-1">О проекте (кратко)</label>
                  <textarea 
                    rows={3} 
                    name="description"
                    placeholder="Опишите вашу задачу..." 
                    className="w-full bg-slate-900/5 border border-slate-900/10 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-900/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full px-12 py-4 mt-4 bg-accent text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(0,242,255,0.2)] disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Отправка...' : 'Отправить заявку'}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer onOpenPrivacy={() => setShowPrivacyPolicy(true)} onOpenTerms={() => setShowTerms(true)} />
      {showPrivacyPolicy && <PrivacyPolicyModal onClose={() => setShowPrivacyPolicy(false)} />}
      {showTerms && <TermsOfUseModal onClose={() => setShowTerms(false)} />}
    </div>
  );
}
