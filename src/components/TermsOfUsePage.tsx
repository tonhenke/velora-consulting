import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfUsePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 text-brand-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
        <p className="text-brand-light/60 mb-12">Última atualização: 07 de Setembro de 2026</p>

        <div className="space-y-8 text-brand-light/80 leading-relaxed">
          <p>
            Este site pertence à Velora Growth &amp; Beyond Ltda., CNPJ 59.588.823/0001-22, Av. Carlos Gomes, 700 - Auxiliadora, Porto Alegre/RS. Ao navegar, você concorda com estes termos.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Conteúdo informativo</h2>
          <p>
            Textos, materiais, benchmarks e diagnósticos gratuitos publicados aqui têm caráter informativo. Não constituem consultoria formal nem garantia de resultado. Resultados em cases se referem a contextos e períodos específicos e não devem ser lidos como projeção para outra empresa. Entregas contratadas são regidas exclusivamente pelo contrato entre as partes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Propriedade intelectual</h2>
          <p>
            Marca, identidade visual, método RHOI, textos, materiais e código deste site pertencem à Velora. Você pode ler, baixar e compartilhar nossos materiais mantendo a autoria e sem alterá-los. Reprodução em produto próprio, revenda e extração automatizada em massa dependem de autorização prévia por escrito.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Uso do site</h2>
          <p>
            Você se compromete a fornecer informações verdadeiras nos formulários e a não tentar acesso não autorizado, interferir na disponibilidade do site ou coletar dados de terceiros a partir dele.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Disponibilidade</h2>
          <p>
            O site é oferecido no estado em que se encontra e pode ser alterado ou suspenso a qualquer momento. Na máxima extensão permitida em lei, a Velora não responde por danos indiretos ou lucros cessantes decorrentes do uso ou da indisponibilidade dos conteúdos gratuitos. Links para sites de terceiros seguem regras próprias e não implicam endosso.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Dados pessoais</h2>
          <p>
            Regidos pela nossa <Link to="/politica-de-privacidade" className="text-brand-neon hover:underline">Política de Privacidade</Link>, que integra estes termos.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Foro</h2>
          <p>
            Lei brasileira e foro da Comarca de Porto Alegre/RS.
          </p>

          <p className="mt-8">
            Dúvidas: <strong>contato@veloraconsulting.com.br</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
