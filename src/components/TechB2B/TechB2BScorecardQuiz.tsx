import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ClipboardCheck } from 'lucide-react';

const questions = [
  "Sabemos qual fatia do spend atinge contas com fit e intenção.",
  "Medimos CAC ratio por origem, não apenas CPL.",
  "Win rate, ticket e ciclo aparecem junto do custo de mídia.",
  "Marketing e Vendas compartilham a definição de conta prioritária.",
  "Identificamos mais de um participante do buying group no Tier 1.",
  "O handoff tem critério, dado mínimo, responsável e SLA.",
  "Medimos time-to-value com a disciplina com que medimos pipeline.",
  "Sabemos qual fatia do net new ARR vem de expansão da base.",
  "O white space por conta é mapeado e revisado periodicamente.",
  "A mesma conta é reconhecida em mídia, CRM, produto, CS e financeiro."
];

const options = [
  { value: 0, label: "Não sabemos" },
  { value: 1, label: "Temos indício" },
  { value: 2, label: "Medimos" },
  { value: 3, label: "Decidimos com isso" }
];

const TechB2BScorecardQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
  const [email, setEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (val: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = val;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < 9) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowEmailCapture(true);
      }
    }, 400); // slight delay for visual feedback
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulating sending to webhook/API
    // console.log("Scorecard Lead Captured:", email, answers);
    
    setShowEmailCapture(false);
    setShowResult(true);
  };

  const calculateResult = () => {
    const total = answers.reduce((acc, curr) => acc + (curr > -1 ? curr : 0), 0);
    
    if (total <= 12) {
      return {
        title: "Operação por atividade",
        desc: "O crescimento é explicado por volume. É preciso instrumentar origem, conta e economia antes de aumentar investimento."
      };
    } else if (total <= 21) {
      return {
        title: "Operação por funil",
        desc: "Há medição, mas a leitura para nas conversões. É necessário conectar aquisição a ticket, ciclo, retenção e expansão."
      };
    } else {
      return {
        title: "Operação por economia",
        desc: "A decisão já é econômica. O próximo passo é avançar em alocação por conta, motores de expansão e governança de dados."
      };
    }
  };

  const scoreResult = calculateResult();
  const totalScore = answers.reduce((acc, curr) => acc + (curr > -1 ? curr : 0), 0);

  return (
    <section className="py-32 bg-brand-light border-t border-brand-dark/5 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-brand-dark/10 text-sm font-bold uppercase tracking-widest text-brand-dark/50"
          >
            <ClipboardCheck size={16} className="text-brand-neon" />
            Diagnóstico Interativo
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-brand-dark">
            Dez perguntas antes <br />
            <span className="text-brand-dark/40">do próximo real.</span>
          </h2>
          <p className="text-brand-dark/70 text-lg max-w-2xl mx-auto">
            Avalie o nível de maturidade da sua operação Tech B2B e descubra onde o seu crescimento está travado.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-dark/5 min-h-[400px] flex flex-col justify-center relative">
          
          <AnimatePresence mode="wait">
            {!showEmailCapture && !showResult && (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-brand-dark/40 font-bold uppercase tracking-widest text-sm">
                    Pergunta {currentStep + 1} de 10
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= currentStep ? 'bg-brand-neon' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10 leading-tight">
                  {questions[currentStep]}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(opt.value)}
                      className={`p-6 text-left rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group
                        ${answers[currentStep] === opt.value 
                          ? 'border-brand-neon bg-brand-neon/5' 
                          : 'border-brand-dark/10 hover:border-brand-dark/30 hover:bg-zinc-50'}`}
                    >
                      <span className="font-bold text-brand-dark text-lg">{opt.label}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                        ${answers[currentStep] === opt.value ? 'border-brand-neon bg-brand-neon' : 'border-brand-dark/20'}`}>
                        {answers[currentStep] === opt.value && <div className="w-2 h-2 bg-brand-dark rounded-full" />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {showEmailCapture && (
              <motion.div
                key="email-capture"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center max-w-lg mx-auto"
              >
                <div className="w-20 h-20 bg-brand-neon/20 text-brand-neon rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClipboardCheck size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-brand-dark">Diagnóstico Concluído!</h3>
                <p className="text-brand-dark/70 mb-8">
                  Para ver o resultado da sua operação e o seu grau de maturidade, insira seu e-mail corporativo abaixo.
                </p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    required
                    placeholder="seu@emailcorporativo.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-xl border border-brand-dark/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-neon focus:border-transparent text-lg text-brand-dark placeholder:text-brand-dark/30 w-full"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-neon hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Ver meu resultado
                    <ChevronRight size={20} />
                  </button>
                </form>
              </motion.div>
            )}

            {showResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="inline-block p-8 bg-brand-dark rounded-3xl shadow-2xl mb-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon opacity-20 blur-3xl pointer-events-none" />
                   
                   <p className="text-brand-light/60 font-bold uppercase tracking-widest text-sm mb-4">Seu Score</p>
                   <div className="text-7xl font-black text-brand-neon mb-2">{totalScore}<span className="text-3xl text-brand-light/20">/30</span></div>
                   <div className="h-2 w-full bg-brand-light/10 rounded-full overflow-hidden mt-6">
                      <div className="h-full bg-brand-neon" style={{ width: `${(totalScore/30)*100}%` }} />
                   </div>
                </div>

                <h3 className="text-3xl font-bold text-brand-dark mb-4">
                  Resultado: {scoreResult.title}
                </h3>
                <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed mb-10">
                  {scoreResult.desc}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-neon text-black font-bold px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-colors duration-300 shadow-lg"
                >
                  Falar com um sócio sobre meu resultado
                </a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default TechB2BScorecardQuiz;
