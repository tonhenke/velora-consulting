import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDiagnosticContext } from './DiagnosticContext';

const blocks = [
  {
    tag: 'AQUISIÇÃO',
    categoryKey: 'aquisicao' as const,
    q1: 'Você sabe com clareza qual canal traz os leads de maior qualidade, não só maior volume?',
    q2: 'Você testa variações de mensagem, segmentação ou canal de forma sistemática e documentada?',
    nextRoute: '/diagnostico/ativacao',
  },
  {
    tag: 'ATIVAÇÃO',
    categoryKey: 'ativacao' as const,
    q1: 'Você tem definido qual ação específica indica que um novo usuário ou cliente foi ativado?',
    q2: 'Você monitora onde as pessoas abandonam antes de chegar nesse momento de valor?',
    nextRoute: '/diagnostico/retencao',
  },
  {
    tag: 'RETENÇÃO',
    categoryKey: 'retencao' as const,
    q1: 'Você consegue identificar sinais de que um cliente está prestes a cancelar ou sumir, antes que isso aconteça?',
    q2: 'Você tem comunicação estruturada baseada no comportamento do cliente, não só em datas ou campanhas genéricas?',
    nextRoute: '/diagnostico/receita',
  },
  {
    tag: 'RECEITA',
    categoryKey: 'receita' as const,
    q1: 'Você testa ativamente variações de oferta, preço ou upsell com sua base de clientes atual?',
    q2: 'Você sabe qual perfil de cliente tem maior valor de longo prazo e direciona esforços estratégicos para ele?',
    nextRoute: '/diagnostico/indicacao',
  },
  {
    tag: 'INDICAÇÃO',
    categoryKey: 'indicacao' as const,
    q1: 'Você tem um mecanismo estruturado para gerar indicações, ou elas acontecem por acaso quando acontecem?',
    q2: 'Você monitora ativamente o nível de satisfação dos seus clientes de forma sistemática?',
    nextRoute: '/diagnostico/resultado',
  },
];

const answerPoints = {
  'Não fazemos isso': 0,
  'Fazemos parcialmente': 1,
  'Fazemos bem': 2,
};

const Screen2Questions = () => {
  const { handleUpdateScore, calculateBottleneck } = useDiagnosticContext();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPathSegment = location.pathname.split('/').pop() || '';
  const currentBlockIndex = blocks.findIndex(b => b.categoryKey === currentPathSegment);
  const currentBlock = blocks[currentBlockIndex] || blocks[0];

  const [answers, setAnswers] = useState<{ q1?: number; q2?: number }>({});

  const isCurrentBlockComplete = answers.q1 !== undefined && answers.q2 !== undefined;
  const isLastBlock = currentBlockIndex === blocks.length - 1;

  // Scroll to top whenever the block changes or on first mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset answers when route changes
    setAnswers({});
  }, [currentBlock.categoryKey]);

  const handleNext = () => {
    const totalBlockScore = (answers.q1 || 0) + (answers.q2 || 0);
    handleUpdateScore(currentBlock.categoryKey, totalBlockScore);

    if (isLastBlock) {
      calculateBottleneck();
      navigate(currentBlock.nextRoute);
    } else {
      navigate(currentBlock.nextRoute);
    }
  };

  return (
    <motion.div
      key={currentBlock.categoryKey}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Responda com base na realidade atual do seu negócio — <span className="text-brand-neon">não no que você gostaria que fosse.</span>
        </h2>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-neon/20 border border-brand-neon/50 text-brand-neon font-bold text-sm tracking-wider mb-6 md:mb-8">
          {currentBlock.tag}
        </div>

        <div className="space-y-12">
          {/* Question 1 */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-medium">{currentBlock.q1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(answerPoints).map(([label, points]) => (
                <button
                  key={label}
                  onClick={() => setAnswers((prev) => ({ ...prev, q1: points }))}
                  className={`py-4 px-6 rounded-xl border text-center transition-all duration-200 ${
                    answers.q1 === points
                      ? 'border-brand-neon bg-brand-neon/10 text-white shadow-[0_0_15px_rgba(42,255,166,0.15)] font-bold'
                      : 'border-white/10 text-white/70 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-medium">{currentBlock.q2}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(answerPoints).map(([label, points]) => (
                <button
                  key={label}
                  onClick={() => setAnswers((prev) => ({ ...prev, q2: points }))}
                  className={`py-4 px-6 rounded-xl border text-center transition-all duration-200 ${
                    answers.q2 === points
                      ? 'border-brand-neon bg-brand-neon/10 text-white shadow-[0_0_15px_rgba(42,255,166,0.15)] font-bold'
                      : 'border-white/10 text-white/70 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex space-x-2 justify-center sm:justify-start">
          {blocks.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentBlockIndex ? 'bg-brand-neon w-6' : i < currentBlockIndex ? 'bg-brand-neon/50' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          disabled={!isCurrentBlockComplete}
          className={`w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            isCurrentBlockComplete
              ? 'bg-brand-neon text-black hover:shadow-[0_0_30px_rgba(42,255,166,0.3)] hover:scale-105 cursor-pointer'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          {isLastBlock ? 'Ver meu diagnóstico →' : 'Próximo →'}
        </button>
      </div>
    </motion.div>
  );
};

export default Screen2Questions;
