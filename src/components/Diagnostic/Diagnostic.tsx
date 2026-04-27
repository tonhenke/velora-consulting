import { useState, useEffect } from 'react';
import Screen1Context from './Screen1Context';
import Screen2Questions from './Screen2Questions';
import Screen3Result from './Screen3Result';
import Screen4Capture from './Screen4Capture';
import Screen5Success from './Screen5Success';

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

const Diagnostic = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
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

  useEffect(() => {
    // SEO setup
    document.title = 'Diagnóstico de Growth - Velora Consulting';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Descubra em 3 minutos onde sua estratégia de growth está deixando resultado na mesa.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Descubra em 3 minutos onde sua estratégia de growth está deixando resultado na mesa.';
      document.head.appendChild(meta);
    }
  }, []);

  const handleNextScreen = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen((prev) => prev + 1);
  };

  const handleUpdateScores = (category: keyof DiagnosticState['scores'], score: number) => {
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
    handleNextScreen();
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {currentScreen === 1 && (
          <Screen1Context 
            state={state} 
            setState={setState} 
            onNext={handleNextScreen} 
          />
        )}
        {currentScreen === 2 && (
          <Screen2Questions 
            onUpdateScore={handleUpdateScores} 
            onFinish={calculateBottleneck} 
          />
        )}
        {currentScreen === 3 && (
          <Screen3Result 
            bottleneck={state.bottleneck} 
            onNext={handleNextScreen} 
          />
        )}
        {currentScreen === 4 && (
          <Screen4Capture 
            state={state} 
            onSuccess={handleNextScreen} 
          />
        )}
        {currentScreen === 5 && (
          <Screen5Success />
        )}
      </div>
    </div>
  );
};

export default Diagnostic;
