import { motion } from 'framer-motion';

import logo1 from '../../assets/brands/media__1772149986259.png';
import logo2 from '../../assets/brands/media__1772149986270.png';
import logo3 from '../../assets/brands/media__1772149986277.png';
import logo5 from '../../assets/brands/media__1772149986392.png';
import logo6 from '../../assets/brands/media__1772150446864.png';
import logo9 from '../../assets/brands/media__1772150446880.png';
import logo11 from '../../assets/brands/media__1772150481285.png';
import logo13 from '../../assets/brands/media__1772150481317.png';

const brands = [
  { name: 'Azul', src: logo1 },
  { name: 'Banco do Brasil', src: logo2 },
  { name: 'Ciser', src: logo3 },
  { name: 'Conquer', src: logo5 },
  { name: 'ESPM', src: logo6 },
  { name: 'KPMG', src: logo9 },
  { name: 'Sabemi', src: logo11 },
  { name: 'Tecnisa', src: logo13 },
];

const WorkshopInstructor = () => (
  <section className="py-24 md:py-32 bg-brand-light text-brand-dark relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-neon/10 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-dark/10 bg-white text-sm text-brand-dark/60 font-bold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
          Quem vai ensinar
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#5c5c5c]">
          Conheça seu <span className="text-brand-neon drop-shadow-sm">instrutor</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-neon/20 rounded-3xl blur-3xl scale-90 -z-10" />
          <div className="relative overflow-hidden rounded-2xl border border-brand-dark/10 shadow-md">
            <img
              src="/everton-henke-presenting.png"
              alt="Everton Henke — Instrutor do Workshop Growth Engine"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
              <h3 className="text-2xl font-bold text-brand-light">Everton Henke</h3>
              <p className="text-brand-neon text-sm font-semibold">Co-founder · Velora Consulting</p>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-brand-dark/80 leading-relaxed mb-6">
            Co-founder da Velora Consulting, responsável pela condução de projetos de crescimento 
            acelerado, estruturação de programas de experimentação e planejamento estratégico 
            orientado à performance. Atua no desenvolvimento e liderança de iniciativas de growth 
            para empresas de diferentes portes e setores.
          </p>
          <p className="text-lg text-brand-dark/80 leading-relaxed mb-6">
            Palestrante, professor de Growth Hacking na ESPM e no MBA da UniSenac. Acumula mais de 
            uma década de experiência em negócios digitais, apoiando organizações na criação de 
            sistemas de crescimento escaláveis e orientados por dados.
          </p>
          <p className="text-base text-brand-dark/60 leading-relaxed italic mb-8">
            Fora do escritório, é um apaixonado por boxe — esporte que equilibra sua rotina e 
            alimenta a disciplina que leva para o trabalho.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-brand-neon/10 border border-brand-neon/20 rounded-full text-sm font-semibold text-brand-dark">
              +218 negócios impactados
            </span>
            <span className="px-4 py-2 bg-white border border-brand-dark/10 rounded-full text-sm font-semibold text-brand-dark/70 shadow-sm">
              Professor ESPM & UniSenac
            </span>
            <span className="px-4 py-2 bg-white border border-brand-dark/10 rounded-full text-sm font-semibold text-brand-dark/70 shadow-sm">
              +10 anos em growth
            </span>
          </div>
        </motion.div>
      </div>

      {/* Brand logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <p className="text-center text-sm font-bold text-brand-dark/40 uppercase tracking-widest mb-8">
          Marcas que já atuei
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.src}
              alt={b.name}
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WorkshopInstructor;
