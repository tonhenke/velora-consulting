import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Dynamic Google Tag Manager Injection
const hostname = window.location.hostname;
const gtmId = hostname.includes('dotsdc.com.br') ? 'GTM-T4Z5KQX' : 'GTM-MP836X72';

// 1. Inject Head GTM Script
const gtmScript = document.createElement('script');
gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l':'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
document.head.appendChild(gtmScript);

// 2. Inject Body GTM Noscript (fallback)
const gtmNoscript = document.createElement('noscript');
const iframe = document.createElement('iframe');
iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
iframe.height = '0';
iframe.width = '0';
iframe.style.display = 'none';
iframe.style.visibility = 'hidden';
iframe.title = 'Google Tag Manager';
gtmNoscript.appendChild(iframe);
document.body.insertBefore(gtmNoscript, document.body.firstChild);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
