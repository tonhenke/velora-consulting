import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DiagnosticProvider } from './DiagnosticContext';
import Screen1Context from './Screen1Context';
import Screen2Questions from './Screen2Questions';
import Screen3Result from './Screen3Result';
import Screen4Capture from './Screen4Capture';
import Screen5Success from './Screen5Success';

const DiagnosticLayout = () => {
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

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <DiagnosticProvider>
          <Routes>
            <Route path="/" element={<Screen1Context />} />
            <Route path="aquisicao" element={<Screen2Questions />} />
            <Route path="ativacao" element={<Screen2Questions />} />
            <Route path="retencao" element={<Screen2Questions />} />
            <Route path="receita" element={<Screen2Questions />} />
            <Route path="indicacao" element={<Screen2Questions />} />
            <Route path="resultado" element={<Screen3Result />} />
            <Route path="formulario" element={<Screen4Capture />} />
            <Route path="formulario-sucesso" element={<Screen5Success />} />
            <Route path="*" element={<Navigate to="/diagnostico" replace />} />
          </Routes>
        </DiagnosticProvider>
      </div>
    </div>
  );
};

export default DiagnosticLayout;

