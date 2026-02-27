import { motion } from 'framer-motion';

const WhoWeAre = () => {
    const team = [
        {
            name: "Bernardo Costa",
            role: "Liderança & Estratégia",
            bio: "Bernardo Costa, 20 anos de carreira, 10 como líder, professor de MBA Conquer por mais 7 anos. Graduado pela PUCRS e MBA de Projetos Digitais na ESPM.",
            image: "/bernardo-costa.png"
        },
        {
            name: "Everton Henke",
            role: "Growth Hacking",
            bio: "Everton Henke, Referência em Growth Hacking no Brasil, atuando frente a grandes empresas dos mais diversos setores. Professor de MBA da ESPM há mais 4 anos.",
            image: "/everton-henke.png"
        },
        {
            name: "Leonardo Martha",
            role: "Vendas e Receita",
            bio: "Executivo de Vendas com 20+ anos em crescimento B2B. Especialista em estruturar processos, escalar receitas recorrentes e desenvolver equipes de alta performance com metodologias como SPIN, Challenger e Winning by Design. Growth disciplinado, previsível e sustentável.",
            image: "/leonardo-martha.png"
        }
    ];

    return (
        <section className="py-32 bg-black text-white border-t border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        Quem faz <span className="text-brand-accent">acontecer</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Nascemos da insatisfação com o mercado tradicional. <br className="hidden md:block" />
                        Unimos experiência e visão para transformar negócios.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-brand-accent/30 transition-all duration-500 h-full flex flex-col items-center text-center pt-8">
                                <div className="relative w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-2xl shadow-brand-accent/10 group-hover:shadow-brand-accent/20 transition-all duration-500">
                                    {/* Image with fallback */}
                                    <div className="w-full h-full bg-neutral-900">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                if (e.currentTarget.parentElement) {
                                                    e.currentTarget.parentElement.innerHTML = `<span class="text-white/20 text-4xl font-bold">${member.name.charAt(0)}</span>`;
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col w-full">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            {member.role}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-1 text-center">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
