import logo1 from '../assets/brands/media__1772149986259.png';
import logo2 from '../assets/brands/media__1772149986270.png';
import logo3 from '../assets/brands/media__1772149986277.png';
import logo4 from '../assets/brands/media__1772149986387.png';
import logo5 from '../assets/brands/media__1772149986392.png';
import logo6 from '../assets/brands/media__1772150446864.png';
import logo7 from '../assets/brands/media__1772150446872.png';
import logo8 from '../assets/brands/media__1772150446876.png';
import logo9 from '../assets/brands/media__1772150446880.png';
import logo11 from '../assets/brands/media__1772150481285.png';
import logo12 from '../assets/brands/media__1772150481307.png';
import logo13 from '../assets/brands/media__1772150481317.png';
import logo14 from '../assets/brands/media__1772150481321.png';
import logo15 from '../assets/brands/media__1772150481323.png';

const logos = [
    { name: "Azul", src: logo1 },
    { name: "Banco do Brasil", src: logo2 },
    { name: "Ciser", src: logo3 },
    { name: "CNP Seguradora", src: logo4 },
    { name: "Conquer", src: logo5 },
    { name: "ESPM", src: logo6 },
    { name: "Vibra", src: logo7 },
    { name: "Vivo", src: logo8 },
    { name: "KPMG", src: logo9 },
    { name: "Sabemi", src: logo11 },
    { name: "Senior", src: logo12 },
    { name: "Tecnisa", src: logo13 },
    { name: "TKE", src: logo14 },
    { name: "Unimed", src: logo15 },
];

const LogoMarquee = () => {
    return (
        <section className="py-24 bg-black border-b border-brand-dark/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
                    Marcas que alavancamos
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Marquee Content */}
                <div className="flex animate-marquee whitespace-nowrap items-center" style={{ willChange: 'transform' }}>
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`marquee1-${index}`} className="mx-12 flex items-center justify-center min-w-[120px]">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                loading="eager"
                                className="h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap items-center" style={{ willChange: 'transform' }}>
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`marquee2-${index}`} className="mx-12 flex items-center justify-center min-w-[120px]">
                            <img
                                src={logo.src}
                                alt={logo.name}
                                loading="eager"
                                className="h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
