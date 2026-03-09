
import { Search, Brain, Rocket, UserCheck, Target, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        title: 'Imersão de Growth',
        description: 'Diagnóstico profundo de marketing, vendas e produto. Mapeamento de funil, dados, ICP, gargalos e oportunidades. Entregável com roadmap priorizado de crescimento.',
        icon: Search
    },
    {
        title: 'Educação em Growth',
        description: 'Capacitação do time para pensar growth. Metodologias, frameworks, cultura de experimentação, leitura de dados e tomada de decisão orientada a impacto.',
        icon: Brain
    },
    {
        title: 'Projetos de Growth',
        description: 'Consultoria estratégica de Growth com foco em desafios específicos: aquisição, conversão, retenção ou monetização. Início, meio e fim com métricas claras.',
        icon: Rocket
    },
    {
        title: 'GLaaS - Growth Leader as a Service',
        description: 'Liderança de Growth para acompanhamento dos times de marketing interno, atuando de forma integrada com a área conduzindo e guiando o processo de experimentação.',
        icon: UserCheck
    },
    {
        title: 'Growth & Data Strategy',
        description: 'Estruturação de métricas, tracking, dashboards e modelos de decisão. Definição de KPIs, OKRs e leitura integrada de marketing, vendas e produtos.',
        icon: Target
    },
    {
        title: 'Growth Squads',
        description: 'Alocação de perfis chave para a operação de Growth. Acompanhamento contínuo com rituais de Growth, backlog de testes, análise de dados e otimização constante.',
        icon: Users
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-brand-light mb-6 tracking-tighter max-w-4xl">
                        Como podemos <span className="text-gray-600 user-select-none">trabalhar juntos</span>
                    </h2>
                    <p className="text-xl text-brand-light/60 max-w-2xl">
                        Não somos uma agência tradicional. Somos parceiros de crescimento que implementam sistemas, não apenas slides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            {...service}
                        />
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-brand-light text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                    >
                        Quero gerar mais resultados
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
