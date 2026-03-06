import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-brand-gray py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Logo />
                    <p className="text-gray-500 text-sm mt-4">© {new Date().getFullYear()} Velora Growth. Todos os direitos reservados.</p>
                    <a href="mailto:contato@veloraconsulting.com.br" className="text-gray-500 text-sm mt-1 hover:text-brand-light transition-colors">contato@veloraconsulting.com.br</a>
                </div>

                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/company/growth-with-velora/" target="_blank" rel="noopener noreferrer" className="text-brand-light/60 hover:text-brand-light transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/growth.with.velora/" target="_blank" rel="noopener noreferrer" className="text-brand-light/60 hover:text-brand-light transition-colors">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
