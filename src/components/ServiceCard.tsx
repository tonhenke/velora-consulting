import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col justify-between bg-brand-dark border border-brand-light/10 p-8 md:p-10 rounded-2xl hover:border-brand-neon/50 transition-all duration-300 h-full"
        >
            <div>
                <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-brand-neon/10 rounded-lg text-brand-neon group-hover:bg-brand-neon group-hover:text-brand-dark transition-colors">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-mono text-gray-600">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-brand-light mb-4 tracking-tight">{title}</h3>
                <p className="text-brand-light/60 text-base leading-relaxed mb-8">
                    {description}
                </p>
            </div>

            <a href="#contact" className="inline-flex items-center text-sm font-semibold text-brand-light group-hover:text-brand-neon transition-colors">
                Saiba mais
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
        </motion.div>
    );
};

export default ServiceCard;
