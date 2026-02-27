import { motion } from 'framer-motion';

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
    return (
        <section className="py-32 bg-black text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        E os clientes falam por nós
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Confira alguns feedbacks que chancelam a nossa entrega.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Profile Image */}
                            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 overflow-hidden mb-6 flex items-center justify-center">
                                {testimonial.image ? (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/5" />
                                )}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Name and Role */}
                            <p className="font-bold text-white text-base">
                                {testimonial.name}
                            </p>
                            {testimonial.role && (
                                <p className="text-gray-500 text-sm mt-1">
                                    {testimonial.role}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
