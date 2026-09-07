import { useEffect } from 'react';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-24 text-brand-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
        <p className="text-brand-light/60 mb-12">Última atualização: 07 de Setembro de 2026</p>

        <div className="space-y-8 text-brand-light/80 leading-relaxed">
          <p>
            A Velora Growth &amp; Beyond Ltda. (CNPJ 59.588.823/0001-22, Av. Carlos Gomes, 700 - Auxiliadora, Porto Alegre/RS) é uma empresa de aquisição B2B. Usamos dados de contato profissional para identificar empresas que se encaixam nos nossos serviços, conversar com elas e medir nossas campanhas. Esta política explica como fazemos isso.
          </p>
          <p>
            <strong>Contato para assuntos de privacidade:</strong> privacidade@veloraconsulting.com.br
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quais dados tratamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Os que você nos dá:</strong> nome, e-mail, telefone, empresa, cargo e mensagem, quando você preenche um formulário, baixa um material ou nos escreve.</li>
            <li><strong>Os de navegação:</strong> IP, dispositivo, páginas visitadas e origem do acesso, coletados por cookies.</li>
            <li><strong>Os de contato profissional obtidos de fontes públicas e bases B2B licenciadas:</strong> nome, cargo, empresa, e-mail corporativo e perfil em redes profissionais, usados para primeiro contato comercial.</li>
          </ul>
          <p>Não tratamos dados sensíveis nem dados de crianças e adolescentes.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Por que tratamos</h2>
          <p>
            Para responder contatos e entregar o que você pediu, fazer prospecção comercial B2B, mensurar e personalizar campanhas de mídia, executar contratos e cumprir obrigações legais.
          </p>
          <p>
            Marketing recorrente e cookies de análise e de anúncio dependem do seu consentimento. Prospecção comercial com dados de contato profissional se apoia em legítimo interesse — e você pode se opor a qualquer momento pelo e-mail acima.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Com quem compartilhamos</h2>
          <p>
            Não vendemos dados. Compartilhamos apenas com fornecedores que nos prestam serviço sob contrato: CRM e automação de marketing, plataformas de mídia e análise (Google, Meta, LinkedIn), ferramentas de e-mail e prospecção, hospedagem em nuvem e assessorias contábil e jurídica. Também atendemos requisições legais de autoridades. Parte desses fornecedores fica fora do Brasil, com garantias contratuais compatíveis com a LGPD.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Armazenamento e segurança</h2>
          <p>
            Os dados ficam em ambientes de nuvem com padrão de segurança de mercado, com acesso restrito por credencial individual, autenticação em duas etapas e criptografia em trânsito. Mantemos contrato de tratamento de dados com nossos fornecedores. Guardamos os dados enquanto durar a finalidade que motivou a coleta e pelos prazos exigidos em lei. Havendo incidente de segurança com risco relevante, comunicamos os afetados e a ANPD.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Seus direitos</h2>
          <p>
            Você pode pedir confirmação e acesso aos seus dados, correção, eliminação, portabilidade, informação sobre compartilhamento, revogação de consentimento e oposição ao tratamento feito por legítimo interesse.
          </p>
          <p>
            Escreva para <strong>privacidade@veloraconsulting.com.br</strong>. Respondemos em até 15 dias e podemos pedir informações para confirmar sua identidade. Você também pode reclamar à Autoridade Nacional de Proteção de Dados.
          </p>
          <p>
            Como agente de tratamento de pequeno porte, a Velora não mantém encarregado formalmente indicado; este e-mail é o canal oficial para todas as solicitações.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cookies</h2>
          <p>
            Usamos cookies necessários para o site funcionar e, mediante consentimento, cookies de análise (para entender o uso do site) e de marketing (para mensurar campanhas e apresentar anúncios, inclusive remarketing). Você escolhe no banner da primeira visita, pode rever em <strong>Preferências de cookies</strong> no rodapé e pode bloquear ou apagar cookies nas configurações do navegador — o que pode afetar o funcionamento do site.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Alterações</h2>
          <p>
            Podemos atualizar esta política. A data da última revisão fica sempre no topo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
