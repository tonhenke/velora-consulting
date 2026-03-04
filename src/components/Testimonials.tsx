import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Carolina de Oliveira",
        role: "Marketing Manager - KPMG",
        text: "Everton, muito obrigada pela dedicação e por aceitar desbravar este desafio imenso que é trabalhar nossa estratégia digital com as alavancas de growth. Inovar em uma grande corporação sempre muito desafiador, mas você tem nos ajudado com maestria a construir esta história de sucesso. A jaqueta é um mero detalhe, seu sangue também já é azul. 💙",
        image: "/carolina-oliveira.jpg"
    },
    {
        name: "Lorem ipsum dolor sit amet",
        role: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: null
    },
    {
        name: "Lorem ipsum dolor sit amet",
        role: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: null
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-32 bg-brand-dark text-brand-light border-t border-brand-light/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        E os clientes falam por nós
                    </h2>
                    <p className="text-brand-light/60 text-lg">
                        Confira alguns feedbacks que chancelam a nossa entrega.
                    </p>
                </div>

                {/* Mobile Slider View */}
                <div className="md:hidden relative px-8 pb-12">
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-[40%] text-brand-neon/70 hover:text-brand-neon transition-colors p-1"
                    >
                        <ChevronLeft size={36} strokeWidth={1.5} />
                    </button>

                    <div className="overflow-hidden min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center text-center px-4"
                            >
                                {/* Profile Image */}
                                <div className="w-32 h-32 shrink-0 rounded-full bg-brand-light/5 border border-brand-light/10 overflow-hidden mb-6 flex items-center justify-center">
                                    {testimonials[activeIndex].image ? (
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-brand-light/10" />
                                    )}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-brand-light/80 text-sm leading-relaxed mb-6 italic">
                                    "{testimonials[activeIndex].text}"
                                </p>

                                {/* Name and Role */}
                                <div className="mt-auto">
                                    <p className="font-bold text-brand-light text-base">
                                        {testimonials[activeIndex].name}
                                    </p>
                                    {testimonials[activeIndex].role && (
                                        <p className="text-brand-light/60 text-sm mt-1">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-[40%] text-brand-neon/70 hover:text-brand-neon transition-colors p-1"
                    >
                        <ChevronRight size={36} strokeWidth={1.5} />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? 'bg-brand-neon' : 'bg-brand-light/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center h-full"
                        >
                            {/* Profile Image */}
                            <div className="w-32 h-32 shrink-0 rounded-full bg-brand-light/5 border border-brand-light/10 overflow-hidden mb-6 flex items-center justify-center">
                                {testimonial.image ? (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-brand-light/10" />
                                )}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-brand-light/80 text-sm leading-relaxed mb-6 italic flex-grow">
                                "{testimonial.text}"
                            </p>

                            {/* Name and Role */}
                            <div className="mt-auto">
                                <p className="font-bold text-brand-light text-base">
                                    {testimonial.name}
                                </p>
                                {testimonial.role && (
                                    <p className="text-brand-light/60 text-sm mt-1">
                                        {testimonial.role}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
