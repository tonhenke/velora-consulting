import { Dispatch, SetStateAction } from 'react';
import { DiagnosticState } from './Diagnostic';
import { motion } from 'framer-motion';

interface Screen1Props {
  state: DiagnosticState;
  setState: Dispatch<SetStateAction<DiagnosticState>>;
  onNext: () => void;
}

const teamSizeOptions = [
  'Só eu',
  '2 a 5 pessoas',
  '6 a 15 pessoas',
  'Mais de 15 pessoas',
];

const stageOptions = [
  'Validando produto e mercado',
  'Crescendo — já tenho clientes e quero escalar',
  'Escalando — operação rodando, buscando eficiência',
  'Empresa estabelecida buscando reaceleração',
];

const Screen1Context = ({ state, setState, onNext }: Screen1Props) => {
  const isComplete = state.teamSize !== '' && state.companyStage !== '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Vamos identificar onde sua estratégia de growth está <span className="text-brand-neon">deixando resultado na mesa.</span>
        </h1>
        <p className="text-xl text-white/60">
          2 perguntas rápidas para personalizar seu diagnóstico.
        </p>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Qual é o tamanho do seu time de marketing ou growth?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamSizeOptions.map((option) => (
              <button
                key={option}
                onClick={() => setState((prev) => ({ ...prev, teamSize: option }))}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 ${
                  state.teamSize === option
                    ? 'border-brand-neon bg-brand-neon/10 shadow-[0_0_20px_rgba(42,255,166,0.15)]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    state.teamSize === option ? 'border-brand-neon' : 'border-white/30'
                  }`}>
                    {state.teamSize === option && <div className="w-2.5 h-2.5 rounded-full bg-brand-neon" />}
                  </div>
                  <span className={`font-medium ${state.teamSize === option ? 'text-white' : 'text-white/80'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Em qual estágio está seu negócio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stageOptions.map((option) => (
              <button
                key={option}
                onClick={() => setState((prev) => ({ ...prev, companyStage: option as any }))}
                className={`p-6 rounded-2xl border text-left transition-all duration-200 ${
                  state.companyStage === option
                    ? 'border-brand-neon bg-brand-neon/10 shadow-[0_0_20px_rgba(42,255,166,0.15)]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-5 h-5 mt-0.5 rounded-full border flex-shrink-0 flex items-center justify-center ${
                    state.companyStage === option ? 'border-brand-neon' : 'border-white/30'
                  }`}>
                    {state.companyStage === option && <div className="w-2.5 h-2.5 rounded-full bg-brand-neon" />}
                  </div>
                  <span className={`font-medium ${state.companyStage === option ? 'text-white' : 'text-white/80'}`}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!isComplete}
          className={`flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            isComplete
              ? 'bg-brand-neon text-black hover:shadow-[0_0_30px_rgba(42,255,166,0.3)] hover:scale-105 cursor-pointer'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          Iniciar diagnóstico →
        </button>
      </div>
    </motion.div>
  );
};

export default Screen1Context;
