import { motion } from 'framer-motion';

const WhoWeAre = () => {
    const team = [
        {
            name: "Bernardo Costa",
            role: "Liderança & Estratégia",
            bio: "Bernardo Costa, 20 anos de carreira, 10 como líder, professor de MBA Conquer por mais 7 anos. Graduado pela PUCRS e MBA de Projetos Digitais na ESPM.",
            image: "/bernardo-costa.webp"
        },
        {
            name: "Everton Henke",
            role: "Growth Hacking",
            bio: "Everton Henke é profissional com mais de 10 anos de experiência em negócios digitais, referência em Growth Hacking no Brasil, liderando projetos à frente de grandes empresas de diversos setores. É professor da ESPM e do MBA em Inovação e Marketing da UniSenac.",
            image: "/everton-henke.webp"
        },
        {
            name: "Leonardo Martha",
            role: "Advisor",
            bio: "Executivo de vendas com 20+ anos impulsionando crescimento, o Leo entra para somar como advisor apoiando a área comercial, escalabilidade de receitas recorrentes e desenvolvimento de equipes de alta performance.",
            image: "/leonardo-martha.webp"
        }
    ];

    return (
        <section className="py-32 bg-brand-dark text-brand-light border-t border-brand-light/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Centered Neon Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon text-brand-light/5 rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-brand-light">
                        Quem faz <span className="text-brand-neon">acontecer</span>
                    </h2>
                    <p className="text-brand-light/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
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
                            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] border border-brand-light/10 hover:border-brand-neon/30 transition-all duration-500 h-full flex flex-col items-center text-center pt-8">
                                <div className="relative w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-2xl shadow-brand-neon/5 group-hover:shadow-brand-neon/10 transition-all duration-500">
                                    {/* Image with fallback */}
                                    <div className="w-full h-full bg-neutral-900 border border-brand-light/5">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                                if (e.currentTarget.parentElement) {
                                                    e.currentTarget.parentElement.innerHTML = `<span class="text-brand-light/20 text-4xl font-bold">${member.name.charAt(0)}</span>`;
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col w-full">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-brand-light mb-1 group-hover:text-brand-neon transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <span className="text-sm font-medium text-brand-light/50 uppercase tracking-wider">
                                            {member.role}
                                        </span>
                                    </div>
                                    <p className="text-brand-light/70 text-sm leading-relaxed flex-1 text-center">
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
