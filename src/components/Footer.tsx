import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-brand-gray py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <Logo />
                    <p className="text-gray-500 text-sm mt-4">© {new Date().getFullYear()} Velora Growth. Todos os direitos reservados.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
