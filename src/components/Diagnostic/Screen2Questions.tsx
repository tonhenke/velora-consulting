import { useState } from 'react';
import { motion } from 'framer-motion';

interface Screen2Props {
  onUpdateScore: (category: 'aquisicao' | 'ativacao' | 'retencao' | 'receita' | 'indicacao', score: number) => void;
  onFinish: () => void;
}

const blocks = [
  {
    tag: 'AQUISIÇÃO',
    categoryKey: 'aquisicao' as const,
    q1: 'Você sabe com clareza qual canal traz os leads de maior qualidade, não só maior volume?',
    q2: 'Você testa variações de mensagem, segmentação ou canal de forma sistemática e documentada?',
  },
  {
    tag: 'ATIVAÇÃO',
    categoryKey: 'ativacao' as const,
    q1: 'Você tem definido qual ação específica indica que um novo usuário ou cliente foi ativado?',
    q2: 'Você monitora onde as pessoas abandonam antes de chegar nesse momento de valor?',
  },
  {
    tag: 'RETENÇÃO',
    categoryKey: 'retencao' as const,
    q1: 'Você consegue identificar sinais de que um cliente está prestes a cancelar ou sumir, antes que isso aconteça?',
    q2: 'Você tem comunicação estruturada baseada no comportamento do cliente, não só em datas ou campanhas genéricas?',
  },
  {
    tag: 'RECEITA',
    categoryKey: 'receita' as const,
    q1: 'Você testa ativamente variações de oferta, preço ou upsell com sua base de clientes atual?',
    q2: 'Você sabe qual perfil de cliente tem maior valor de longo prazo e direciona esforços estratégicos para ele?',
  },
  {
    tag: 'INDICAÇÃO',
    categoryKey: 'indicacao' as const,
    q1: 'Você tem um mecanismo estruturado para gerar indicações, ou elas acontecem por acaso quando acontecem?',
    q2: 'Você monitora ativamente o nível de satisfação dos seus clientes de forma sistemática?',
  },
];

const answerPoints = {
  'Não fazemos isso': 0,
  'Fazemos parcialmente': 1,
  'Fazemos bem': 2,
};

const Screen2Questions = ({ onUpdateScore, onFinish }: Screen2Props) => {
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [answers, setAnswers] = useState<{ q1?: number; q2?: number }>({});

  const isCurrentBlockComplete = answers.q1 !== undefined && answers.q2 !== undefined;
  const isLastBlock = currentBlockIndex === blocks.length - 1;

  const currentBlock = blocks[currentBlockIndex];

  const handleNext = () => {
    // Send scores for this block to the parent
    const totalBlockScore = (answers.q1 || 0) + (answers.q2 || 0);
    onUpdateScore(currentBlock.categoryKey, totalBlockScore);

    if (isLastBlock) {
      onFinish();
    } else {
      setAnswers({});
      setCurrentBlockIndex((prev) => prev + 1);
    }
  };

  return (
    <motion.div
      key={currentBlockIndex}
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

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-neon/20 border border-brand-neon/50 text-brand-neon font-bold text-sm tracking-wider mb-8">
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

      <div className="pt-4 flex justify-between items-center">
        <div className="flex space-x-2">
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
          className={`flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
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
