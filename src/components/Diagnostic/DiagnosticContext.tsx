import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type CompanyStage = 
  | 'Validando produto e mercado'
  | 'Crescendo — já tenho clientes e quero escalar'
  | 'Escalando — operação rodando, buscando eficiência'
  | 'Empresa estabelecida buscando reaceleração';

export type DiagnosticState = {
  teamSize: string;
  companyStage: CompanyStage | '';
  scores: {
    aquisicao: number;
    ativacao: number;
    retencao: number;
    receita: number;
    indicacao: number;
  };
  bottleneck: string;
};

interface DiagnosticContextProps {
  state: DiagnosticState;
  setState: React.Dispatch<React.SetStateAction<DiagnosticState>>;
  handleUpdateScore: (category: keyof DiagnosticState['scores'], score: number) => void;
  calculateBottleneck: () => void;
}

const DiagnosticContext = createContext<DiagnosticContextProps | undefined>(undefined);

export const DiagnosticProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<DiagnosticState>({
    teamSize: '',
    companyStage: '',
    scores: {
      aquisicao: 0,
      ativacao: 0,
      retencao: 0,
      receita: 0,
      indicacao: 0,
    },
    bottleneck: '',
  });

  const handleUpdateScore = (category: keyof DiagnosticState['scores'], score: number) => {
    setState((prev) => ({
      ...prev,
      scores: {
        ...prev.scores,
        [category]: prev.scores[category] + score,
      },
    }));
  };

  const calculateBottleneck = () => {
    // Ordem de desempate: Retenção → Ativação → Receita → Aquisição → Indicação
    const order: Array<keyof DiagnosticState['scores']> = ['retencao', 'ativacao', 'receita', 'aquisicao', 'indicacao'];
    let minScore = Infinity;
    let worstCategory = order[0];

    order.forEach((category) => {
      const score = state.scores[category];
      if (score < minScore) {
        minScore = score;
        worstCategory = category;
      }
    });

    // Formatting category name
    const formattedCategories: Record<string, string> = {
      retencao: 'RETENÇÃO',
      ativacao: 'ATIVAÇÃO',
      receita: 'RECEITA',
      aquisicao: 'AQUISIÇÃO',
      indicacao: 'INDICAÇÃO',
    };

    const finalBottleneck = formattedCategories[worstCategory];
    setState((prev) => ({ ...prev, bottleneck: finalBottleneck }));
  };

  return (
    <DiagnosticContext.Provider value={{ state, setState, handleUpdateScore, calculateBottleneck }}>
      {children}
    </DiagnosticContext.Provider>
  );
};

export const useDiagnosticContext = () => {
  const context = useContext(DiagnosticContext);
  if (context === undefined) {
    throw new Error('useDiagnosticContext must be used within a DiagnosticProvider');
  }
  return context;
};
