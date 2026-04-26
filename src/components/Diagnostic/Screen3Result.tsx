import { motion } from 'framer-motion';

interface Screen3Props {
  bottleneck: string; // "AQUISIÇÃO" | "ATIVAÇÃO" | "RETENÇÃO" | "RECEITA" | "INDICAÇÃO"
  onNext: () => void;
}

const resultData: Record<string, { symptoms: string[], context: string }> = {
  'AQUISIÇÃO': {
    symptoms: [
      'Você investe em canais mas não tem clareza sobre o que realmente gera resultado qualificado',
      'Os leads chegam com volume inconsistente, ou chegam mas não convertem',
      'Cada novo canal testado parece promissor no início e decepciona com o tempo',
    ],
    context: 'O problema de Aquisição é o mais visível, mas raramente o mais urgente. Na maioria dos casos, investir mais em aquisição sem resolver a estratégia por trás é como empurrar água com peneira. O que falta não é mais verba ou mais canal. É clareza sobre quem você quer atrair, por qual mensagem e com qual critério de qualidade. Sem isso, escalar aquisição só escala o custo.',
  },
  'ATIVAÇÃO': {
    symptoms: [
      'Leads chegam mas demoram para entender o valor do que você oferece, ou não entendem',
      'A conversão de lead para cliente ativo está abaixo do potencial',
      'O time investe em trazer gente nova mas perde boa parte antes de monetizar',
    ],
    context: 'Ativação é o gargalo mais silencioso do funil, e o mais caro. Cada lead que não ativa representa dinheiro gasto em aquisição que não retornou. O problema quase sempre não é o produto. É a ausência de uma jornada clara que leve o cliente do primeiro contato até o momento em que ele percebe valor de verdade. Sem essa clareza, nenhum investimento em aquisição vai se pagar.',
  },
  'RETENÇÃO': {
    symptoms: [
      'Clientes somem sem avisar, e você só percebe quando já é tarde demais',
      'A base de clientes cresce mas a receita não acompanha no mesmo ritmo',
      'Você não tem clareza sobre por que os melhores clientes ficam nem por que os outros saem',
    ],
    context: 'Retenção é onde o crescimento sustentável é construído, ou destruído. Uma melhora de 5% na retenção pode impactar o valor do negócio em até 95%. O problema quase sempre não é satisfação, é ausência de sistema. Sem um processo claro para monitorar engajamento, identificar risco e agir no momento certo, a retenção vira dependente de sorte e relacionamento individual. Isso não escala.',
  },
  'RECEITA': {
    symptoms: [
      'Você tem clientes satisfeitos mas não está monetizando o potencial que eles representam',
      'Upsell e cross-sell acontecem por acaso, não por estratégia',
      'O ticket médio está estagnado mesmo com a base de clientes crescendo',
    ],
    context: 'O dinheiro mais barato de um negócio vem de quem já é cliente. Mas a maioria dos times não tem processo para explorar isso de forma sistemática. O problema não é falta de oportunidade, é falta de visibilidade sobre quem está pronto para comprar mais, o quê e quando. Sem essa estratégia, você deixa receita na mesa todos os meses sem perceber.',
  },
  'INDICAÇÃO': {
    symptoms: [
      'Clientes satisfeitos existem mas não indicam de forma previsível ou consistente',
      'Você não tem um mecanismo que transforma satisfação em crescimento real',
      'Seu custo de aquisição poderia cair significativamente se indicação funcionasse como canal',
    ],
    context: 'Indicação é o canal com maior taxa de conversão e menor custo de aquisição em qualquer negócio. Mas só funciona quando é um sistema, não um acidente. O problema quase sempre não é falta de clientes satisfeitos. É ausência de um processo que identifique quem tem propensão a indicar, crie o contexto certo e facilite o ato de indicar. Satisfação não vira indicação sozinha. Estratégia sim.',
  },
};

const Screen3Result = ({ bottleneck, onNext }: Screen3Props) => {
  const data = resultData[bottleneck] || resultData['RETENÇÃO']; // Fallback just in case

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-neon/10 blur-[100px] rounded-full" />
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <p className="text-lg text-white/70 font-medium mb-4 uppercase tracking-widest">
            Seu maior gargalo de crescimento está em:
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-brand-neon tracking-tight">
            {bottleneck}
          </h2>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </span>
              Principais Sintomas
            </h3>
            <ul className="space-y-4">
              {data.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-white/80 leading-relaxed">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6 bg-black/40 rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-bold flex items-center gap-3 text-brand-neon">
              <span className="w-8 h-8 rounded-full bg-brand-neon/20 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Contexto Estratégico
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {data.context}
            </p>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={onNext}
            className="group flex items-center justify-center px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 bg-brand-neon text-black hover:shadow-[0_0_40px_rgba(42,255,166,0.4)] hover:-translate-y-1"
          >
            Quero resolver esse gargalo 
            <svg 
              className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Screen3Result;
