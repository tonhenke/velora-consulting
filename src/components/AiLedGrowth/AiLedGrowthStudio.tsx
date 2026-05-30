import { motion } from 'framer-motion';
import { Film, Radio, Award, Play } from 'lucide-react';

const pipelineSteps = [
  { num: "01", name: "Estratégia e brief", desc: "Objetivo, audiência, canais, formatos, tom e métricas de sucesso." },
  { num: "02", name: "Roteiro e storyboard", desc: "Roteiro gerado e refinado com LLM. Storyboard visual com IA generativa." },
  { num: "03", name: "Captação", desc: "Filmagem real quando necessário. Direção alinhada ao brief Velora." },
  { num: "04", name: "Pós-produção", desc: "Edição, color grade, trilha, narração com IA (ElevenLabs), VFX leves." },
  { num: "05", name: "Variações e entrega", desc: "Adaptação para formatos, cortes de performance, legendas, thumbnails." }
];

const studioModules = [
  {
    title: "Conteúdo de marca: vídeo institucional e cases",
    desc: "Vídeos de posicionamento, depoimentos de clientes, cases de resultado e apresentações comerciais. Produção híbrida com filmagem real + assets gerados por IA quando cabível.",
    specs: ["1–3 min", "Roteiro via LLM", "Narração ElevenLabs", "Assets Midjourney/Runway"],
    icon: Award
  },
  {
    title: "Conteúdo de performance: ads e variações para mídia paga",
    desc: "Vídeos curtos para Meta, YouTube e TikTok com múltiplas variações de hook, CTA e mensagem. IA acelera a geração de variações sem refazer a produção base.",
    specs: ["6–30s", "Múltiplas variações", "Hooks via LLM", "Edição IA", "Adaptação de formato"],
    icon: Play
  },
  {
    title: "Reels e conteúdo orgânico recorrente",
    desc: "Produção de lotes de conteúdo para redes sociais com identidade visual consistente, usando IA para gerar roteiros, legendas, thumbnails e adaptações de formato em escala.",
    specs: ["Lotes mensais", "Instagram / TikTok / LinkedIn", "Roteiro em lote via LLM", "Thumbnail IA"],
    icon: Radio
  },
  {
    title: "Asset expansion, reaproveitamento de material",
    desc: "O cliente já tem vídeos gravados mas subutilizados. A Velora reprocessa o material com IA: cortes, remontagem, narração, legendas, adaptações, sem nova filmagem.",
    specs: ["Material existente", "Edição/Remontagem com IA", "Narração ElevenLabs", "Tradução & Legendas auto"],
    icon: Film
  }
];

const AiLedGrowthStudio = () => {
  return (
    <section className="py-24 bg-brand-dark/95 relative overflow-hidden border-t border-brand-light/5">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <span className="text-brand-neon text-sm font-semibold tracking-wider uppercase block mb-3">
            Audiovisual em Escala
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light tracking-tight mb-6">
            Velora AI Content Studio
          </h2>
          <p className="text-brand-light/75 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Qualidade cinematográfica no prazo e custo de uma produção ágil, com IA como acelerador em cada etapa.
          </p>
          <p className="text-brand-light/50 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Para empresas que precisam de conteúdo de marca e performance com consistência e velocidade, entregamos produção audiovisual profissional usando IA para acelerar roteiro, edição e geração de assets, sem os custos elevados e prazos de uma grande produtora tradicional.
          </p>
        </div>

        {/* Pipeline de Produção (Timeline) */}
        <div className="mb-24">
          <h3 className="text-lg font-bold text-brand-neon tracking-widest uppercase text-center mb-12">
            Pipeline de Produção
          </h3>

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-5 gap-6 relative">
            {/* Connector Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-brand-light/10 z-0" />

            {pipelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center relative z-10 group"
              >
                {/* Step circle */}
                <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-light/10 group-hover:border-brand-neon text-brand-light/50 group-hover:text-brand-neon flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(198,240,0,0.15)] font-bold text-lg">
                  {step.num}
                </div>
                <h4 className="font-bold text-brand-light mb-3 text-sm tracking-wide uppercase transition-colors group-hover:text-brand-neon">
                  {step.name}
                </h4>
                <p className="text-brand-light/60 text-xs leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8 relative pl-6">
            <div className="absolute top-4 bottom-4 left-3.5 w-[1px] bg-brand-light/10" />
            
            {pipelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 relative items-start"
              >
                <div className="w-8 h-8 rounded-full bg-brand-dark border border-brand-light/15 text-brand-neon flex items-center justify-center font-bold text-sm z-10 flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-bold text-brand-light text-sm uppercase tracking-wide mb-1">
                    {step.name}
                  </h4>
                  <p className="text-brand-light/60 text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {studioModules.map((mod, idx) => {
            const IconComponent = mod.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-light/5 border border-brand-light/10 hover:border-brand-neon/30 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_30px_rgba(198,240,0,0.03)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-brand-neon/10 text-brand-neon rounded-xl group-hover:bg-brand-neon group-hover:text-black transition-colors duration-300">
                      <IconComponent size={22} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-brand-light">
                      {mod.title}
                    </h4>
                  </div>
                  
                  <p className="text-brand-light/70 text-sm md:text-base leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                {/* Module Specs Footer */}
                <div className="mt-8 pt-4 border-t border-brand-light/5 flex flex-wrap gap-2">
                  {mod.specs.map((spec, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-brand-light/5 border border-brand-light/10 text-brand-light/75 px-3 py-1 rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stat Highlights Card */}
        <div className="max-w-4xl mx-auto bg-brand-neon text-black p-8 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-xl pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
            <div>
              <span className="text-[10px] tracking-widest uppercase font-black bg-black text-brand-neon px-3 py-1 rounded-full inline-block mb-3">
                Eficiência Criativa
              </span>
              <h4 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                Aceleramos a produção, reduzimos o custo final.
              </h4>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-around items-center border-t md:border-t-0 md:border-l border-black/10 pt-6 md:pt-0 md:pl-8">
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-black tracking-tight block">5–10×</span>
                <span className="text-xs font-bold uppercase opacity-85">mais variações geradas</span>
              </div>
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-black tracking-tight block">-60%</span>
                <span className="text-xs font-bold uppercase opacity-85">tempo de pós-produção</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiLedGrowthStudio;
