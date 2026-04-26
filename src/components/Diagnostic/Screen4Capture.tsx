import { useState } from 'react';
import { motion } from 'framer-motion';
import { DiagnosticState } from './Diagnostic';

interface Screen4Props {
  state: DiagnosticState;
  onSuccess: () => void;
}

const Screen4Capture = ({ state, onSuccess }: Screen4Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate slight delay to ensure iframe captured it
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-neon/20 border border-brand-neon/50 text-brand-neon font-bold text-sm tracking-wider">
            PRÓXIMO PASSO
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tight">
            Sessão estratégica <span className="text-brand-neon">gratuita</span>
          </h2>
          
          <p className="text-xl text-white/80 leading-relaxed">
            Tenho vagas limitadas para uma sessão de 30 minutos onde analisamos juntos as causas reais do seu gargalo de <strong className="text-white">{state.bottleneck}</strong> e o que faz sentido atacar primeiro.
          </p>

          <div className="space-y-6 pt-4">
            <h3 className="font-bold text-lg">O que acontece na sessão:</h3>
            <ul className="space-y-4">
              {[
                `Mapeamos as causas reais do gargalo identificado no seu negócio`,
                'Identificamos qual movimento estratégico gera mais resultado no menor tempo',
                'Você sai com clareza e direção, não com uma apresentação genérica'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-neon/20 text-brand-neon flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column - Form */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-neon/5 blur-[80px] rounded-full ptr-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Preencha seus dados</h3>
            
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }} 
            />

            <form 
              // Real Brevo URL from original embed
              action="https://88bfd1c8.sibforms.com/serve/MUIFAPQu-c1iqxiRcF4hpQldwRnFU543sp9Ibjylta3_TmFtsRfBX_7lF7PkdRKdGIsPFKmwb9TAYaF0jB8DZlcUZd6qj7oLR7-ADqi7qSsjXhU22QSeow4vUdZQ8XR6osvXEQPycEdFsxyr_ZpjMfqvexGQcKzYwKshmc1JoScujOVnEh3xFI6nse8eygAmvkVofTuiiyiLX7CMZw==" 
              method="POST" 
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Native Fields required by Brevo */}
              <div>
                <label className="block text-sm font-bold text-white/80 mb-2" htmlFor="NOME">
                  Qual o seu nome?
                </label>
                <input 
                  type="text" 
                  id="NOME" 
                  name="NOME" 
                  required 
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white/80 mb-2" htmlFor="EMAIL">
                  Qual o seu e-mail corporativo?
                </label>
                <input 
                  type="email" 
                  id="EMAIL" 
                  name="EMAIL" 
                  required 
                  className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors"
                  placeholder="email@empresa.com.br"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white/80 mb-2" htmlFor="SMS">
                  Qual o seu WhatsApp?
                </label>
                <div className="flex gap-2">
                  <select 
                    name="SMS__COUNTRY_CODE" 
                    className="bg-black/50 border border-white/20 rounded-xl px-2 py-3.5 text-white focus:outline-none focus:border-brand-neon transition-colors w-24"
                    defaultValue="+55"
                  >
                    <option value="+55">+55 BR</option>
                  </select>
                  <input 
                    type="text" 
                    id="SMS" 
                    name="SMS" 
                    required 
                    className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              {/* Bot detection and metadata for Brevo */}
              <input type="text" name="email_address_check" value="" className="hidden" />
              <input type="hidden" name="locale" value="pt" />

              {/* Custom hidden fields required in the instructions */}
              <input type="hidden" name="tamanho_time" value={state.teamSize} />
              <input type="hidden" name="estagio_negocio" value={state.companyStage} />
              <input type="hidden" name="gargalo_identificado" value={state.bottleneck} />

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-neon text-black font-bold text-lg rounded-xl py-4 flex justify-center items-center gap-2 hover:shadow-[0_0_25px_rgba(42,255,166,0.2)] transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-wait"
              >
                {isSubmitting ? 'Enviando...' : 'Agendar sessão gratuita →'}
              </button>
            </form>
            <p className="text-xs text-white/40 text-center mt-4">
              Seus dados estão seguros conosco. Não enviamos spam.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Screen4Capture;
