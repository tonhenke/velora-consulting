import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-brand-light px-6 py-14 md:py-20 border-t border-gray-800">
            <div className="container mx-auto max-w-[1180px]">
                
                {/* Fechamento */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-end pb-12 border-b border-gray-800">
                    <div>
                        <div className="mb-4">
                           <Logo />
                        </div>
                        <p className="text-lg md:text-[17px] leading-relaxed text-gray-400 max-w-[34ch] mt-5">
                            Diagnosticamos e operamos sistemas de aquisição B2B. Profundidade de consultoria, velocidade de agência.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl md:text-[22px] font-medium leading-tight max-w-[26ch]">
                            Quer saber onde seu funil está perdendo receita?
                        </p>
                        <Link to="/diagnostico" className="inline-block bg-brand-neon text-black font-bold px-6 py-3 rounded-sm hover:bg-[#d9ff3d] transition-colors duration-200">
                            Agendar diagnóstico
                        </Link>
                    </div>
                </div>

                {/* Colunas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1fr] gap-10 lg:gap-16 py-12">
                    
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[15px] mb-4 text-brand-light">Porto Alegre</h3>
                        <address className="text-gray-400 not-italic text-[15px] leading-relaxed mb-4 max-w-[30ch]">
                            Av. Carlos Gomes, 700 - Auxiliadora<br />
                            Porto Alegre/RS<br />
                        </address>
                        <div className="flex flex-col gap-1 text-[15px] mb-6">
                            <a href="mailto:contato@veloraconsulting.com.br" className="text-brand-light hover:text-brand-neon transition-colors">contato@veloraconsulting.com.br</a>
                        </div>
                        <div className="flex gap-2 mt-auto">
                            <a href="https://www.linkedin.com/company/growth-with-velora/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-sm hover:border-brand-neon hover:text-brand-neon text-gray-400 transition-colors" aria-label="Velora no LinkedIn">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/growth.with.velora/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-sm hover:border-brand-neon hover:text-brand-neon text-gray-400 transition-colors" aria-label="Velora no Instagram">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.14 4 12 4zm0 3.04a4.96 4.96 0 1 1 0 9.92 4.96 4.96 0 0 1 0-9.92zm0 1.8a3.16 3.16 0 1 0 0 6.32 3.16 3.16 0 0 0 0-6.32zm5.15-2.13a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z"/></svg>
                            </a>
                        </div>
                    </div>

                    <nav className="flex flex-col" aria-label="Serviços">
                        <h3 className="font-bold text-[15px] mb-4 text-brand-light">O que fazemos</h3>
                        <ul className="flex flex-col gap-3 text-[15px]">
                            <li><Link to="/diagnostico" className="text-gray-400 hover:text-brand-neon transition-colors">Diagnóstico de aquisição</Link></li>
                            <li><span className="text-gray-400">Estruturação de Marketing</span></li>
                            <li><span className="text-gray-400">Mídia paga B2B e B2C</span></li>
                            <li><span className="text-gray-400">CRM e operação de receita</span></li>
                            <li><span className="text-gray-400">Otimização da conversão</span></li>
                            <li><span className="text-gray-400">Inteligência de dados</span></li>
                        </ul>
                    </nav>

                    <nav className="flex flex-col" aria-label="Método e conteúdo">
                        <h3 className="font-bold text-[15px] mb-4 text-brand-light">Como fazemos</h3>
                        <ul className="flex flex-col gap-3 text-[15px]">
                            <li><span className="text-gray-400">Account-based Marketing</span></li>
                            <li><span className="text-gray-400">RevOps</span></li>
                            <li><span className="text-gray-400">Projetos de Growth</span></li>
                            <li><Link to="/glaas-empresas" className="text-gray-400 hover:text-brand-neon transition-colors">Growth Leader As a Service</Link></li>
                            <li><span className="text-gray-400">Growth & Data Strategy</span></li>
                            <li><a href="/#methodology" className="text-gray-400 hover:text-brand-neon transition-colors">RHOI Metod</a></li>
                        </ul>
                    </nav>

                    <nav className="flex flex-col" aria-label="Institucional">
                        <h3 className="font-bold text-[15px] mb-4 text-brand-light">Quem somos</h3>
                        <ul className="flex flex-col gap-3 text-[15px]">
                            <li><a href="/#about" className="text-gray-400 hover:text-brand-neon transition-colors">A Velora</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-brand-neon transition-colors">Falar com um sócio</a></li>
                        </ul>
                    </nav>

                </div>

                {/* Base legal */}
                <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 pt-7 border-t border-gray-800 text-[13px]">
                    <div className="font-mono text-[#5c5c56] leading-relaxed">
                        <strong className="font-normal text-gray-400">Velora Growth &amp; Beyond Ltda.</strong><br />
                        © {new Date().getFullYear()} Todos os direitos reservados
                    </div>
                    {/* Placeholder para links legais futuros
                    <div className="flex flex-wrap gap-6">
                        <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-brand-neon transition-colors">Política de privacidade</Link>
                        <Link to="/termos-de-uso" className="text-gray-400 hover:text-brand-neon transition-colors">Termos de uso</Link>
                    </div>
                    */}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
