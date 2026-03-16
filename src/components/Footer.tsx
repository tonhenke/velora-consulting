import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-brand-gray py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3">
                    <Logo />
                    <p className="text-gray-400 text-sm mt-4 text-center lg:text-left">
                        © {new Date().getFullYear()} Velora Growth. Todos os direitos reservados.
                    </p>
                </div>

                <div className="flex flex-col items-center text-gray-400 text-sm text-center w-full lg:w-1/3">
                    <p className="hidden md:block">Av. Carlos Gomes, 700 - Auxiliadora | Porto Alegre - RS</p>
                    <p className="block md:hidden">Av. Carlos Gomes, 700 - Auxiliadora<br />Porto Alegre - RS</p>
                    <a href="mailto:contato@veloraconsulting.com.br" className="mt-2 lg:mt-1 hover:text-brand-light transition-colors">
                        contato@veloraconsulting.com.br
                    </a>
                </div>

                <div className="flex justify-center lg:justify-end space-x-6 w-full lg:w-1/3">
                    <a href="https://www.linkedin.com/company/growth-with-velora/" target="_blank" rel="noopener noreferrer" className="text-brand-light/60 hover:text-brand-light transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/growth.with.velora/" target="_blank" rel="noopener noreferrer" className="text-brand-light/60 hover:text-brand-light transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
