import { motion } from 'framer-motion';
import { Database, Users, ListTodo, Rocket, LineChart, BookOpen } from 'lucide-react';

const steps = [
    { num: "01", title: "DATA-DRIVEN INSIGHTS", desc: "Construir hipóteses a partir de dados para solucioná-lo.", icon: Database },
    { num: "02", title: "BRAINSTORMING", desc: "Etapa de desdobramento de experimentos com a squad.", icon: Users },
    { num: "03", title: "EXPERIMENTOS", desc: "Priorizar, detalhar e documentar experimentos.", icon: ListTodo },
    { num: "04", title: "IMPLEMENTAÇÃO", desc: "Implementar os experimentos e testar.", icon: Rocket },
    { num: "05", title: "ANÁLISE DE RESULTADOS", desc: "Avaliar sucesso e documentar aprendizados.", icon: LineChart },
    { num: "06", title: "SISTEMATIZAÇÃO", desc: "Transformar resultados em insights acionáveis.", icon: BookOpen }
];

const CircularWheel = () => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] z-0">
            {/* Background solid wheel */}
            <div className="absolute inset-0 bg-zinc-100/5 rounded-full border border-brand-dark/10" />

            {/* Rotating SVG Gear */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]">
                <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C6F000" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1E1E1E" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {/* Thin inner track */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="30" />
                {/* Segmented gear track */}
                <circle
                    cx="200" cy="200" r="160" fill="none"
                    stroke="url(#ringGrad)" strokeWidth="30"
                    strokeDasharray="145 22.5"
                    strokeLinecap="round"
                />
            </svg>

            {/* Center text block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-brand-light w-[260px] h-[260px] rounded-full flex flex-col items-center justify-center border border-brand-dark/20 shadow-[0_0_50px_rgba(198,240,0,0.3)] z-20">
                <span className="text-5xl font-black tracking-tighter text-brand-dark mb-1">RHOI</span>
                <span className="text-xl font-medium tracking-widest text-[#5c5c5c] font-bold uppercase">method</span>
            </div>

            {/* Connection lines from center radiating outwards */}
            <div className="absolute inset-0 -z-10 animate-[spin_60s_linear_infinite_reverse]">
                {[0, 60, 120, 180, 240, 300].map(deg => (
                    <div key={deg} className="absolute top-1/2 left-1/2 w-[340px] h-[1px] bg-gradient-to-r from-brand-dark/20 to-transparent" style={{ transform: `translateY(-50%) rotate(${deg}deg)`, transformOrigin: '0 50%' }} />
                ))}
            </div>
        </div>
    );
};

const DesktopLayout = () => {
    return (
        <div className="hidden lg:block relative w-full h-[760px] max-w-6xl mx-auto mt-20">
            <CircularWheel />

            {steps.map((step, index) => {
                // Determine alignment: index 0 (Top Left), 4 (Bottom Left), 5 (Middle Left) align explicitly right
                // 1 (Top Right), 2 (Middle Right), 3 (Bottom Right) align left
                const isLeftColumn = index === 0 || index === 4 || index === 5;
                const align = isLeftColumn ? 'right' : 'left';

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className={`absolute flex flex-col w-[300px] z-10 ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}
                        style={
                            index === 0 ? { top: '8%', right: '58%' } :
                                index === 1 ? { top: '8%', left: '58%' } :
                                    index === 2 ? { top: '42%', left: '72%', transform: 'translateY(-50%)' } :
                                        index === 3 ? { bottom: '8%', left: '58%' } :
                                            index === 4 ? { bottom: '8%', right: '58%' } :
                                                { top: '42%', right: '72%', transform: 'translateY(-50%)' }
                        }
                    >
                        <div className={`flex items-center gap-4 mb-3 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
                            <span className="text-5xl font-black text-brand-dark/20 select-none">{step.num}</span>
                            <div className="p-3 bg-brand-light border border-brand-dark/20 rounded-2xl text-[#1E1E1E] shadow-sm backdrop-blur-sm">
                                <step.icon size={26} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2 tracking-tight drop-shadow-sm">{step.title}</h3>
                        <p className="text-sm text-brand-dark/80 font-medium leading-relaxed pr-0">{step.desc}</p>
                    </motion.div>
                );
            })}
        </div>
    );
};

const MobileLayout = () => {
    return (
        <div className="lg:hidden mt-16 flex flex-col gap-8 relative max-w-md mx-auto">
            {/* Central Badge for Mobile */}
            <div className="flex justify-center mb-6">
                <div className="bg-brand-light border border-brand-dark/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] rounded-full w-48 h-48 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Spinning ring inside mobile badge */}
                    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] opacity-50">
                        <circle cx="100" cy="100" r="90" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="40 10" strokeLinecap="round" />
                    </svg>
                    <span className="text-3xl font-black tracking-tighter text-brand-dark z-10">RHOI</span>
                    <span className="text-sm font-medium tracking-widest text-[#5c5c5c] font-bold uppercase z-10">method</span>
                </div>
            </div>

            {/* Vertical timeline connector */}
            <div className="absolute top-[260px] bottom-10 left-[41px] w-[2px] bg-gradient-to-b from-[#1E1E1E]/50 via-brand-dark/10 to-transparent z-0" />

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-24 z-10"
                >
                    <div className="absolute left-[42px] top-6 w-5 h-5 rounded-full bg-brand-light border-[3px] border-[#1E1E1E] flex items-center justify-center -translate-x-1/2 outline outline-4 outline-brand-light" />
                    <div className="bg-brand-light border border-brand-dark/20 rounded-2xl p-6 relative overflow-hidden group shadow-sm">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                            <span className="text-8xl font-black text-brand-dark">{step.num}</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="p-2.5 rounded-xl bg-zinc-100 text-[#1E1E1E] border border-brand-dark/10 shadow-sm">
                                <step.icon size={22} />
                            </div>
                            <h3 className="text-md font-bold text-brand-dark tracking-tight">{step.title}</h3>
                        </div>
                        <p className="text-sm text-brand-dark/80 font-medium leading-relaxed relative z-10">{step.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const Methodology = () => {
    return (
        <section className="py-32 bg-brand-light text-brand-dark relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-dark/20 bg-brand-light text-sm text-[#1E1E1E] font-bold shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                        Engrenagem de Crescimento
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight text-brand-dark">
                        Metodologia proprietária de Growth,{' '}
                        <span className="text-[#5c5c5c] block mt-2">RHOI Method</span>
                    </h2>
                    <p className="text-brand-dark text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        O método que permite a orquestração das iniciativas de crescimento e entrega ROI real, mensurável e sustentável.
                    </p>
                </div>

                <DesktopLayout />
                <MobileLayout />
            </div>
        </section>
    );
};

export default Methodology;
