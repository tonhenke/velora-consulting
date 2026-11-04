import React, { useEffect } from 'react';
import './velora-v10.css';

const HomeV10: React.FC = () => {
  useEffect(() => {
    document.title = 'Velora | Aquisição B2B com método, do mercado ao contrato';
    document.documentElement.classList.add('js');

    var doc = document;
    var root = doc.documentElement;
    var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    var temIO = 'IntersectionObserver' in window;
    var cleanupFns: Array<() => void> = [];

    /* ---------- Menu no celular ---------- */
    function iniciarMenu() {
      var botao = doc.querySelector('[data-menu-botao]');
      var menu = doc.querySelector('[data-menu]') as HTMLElement | null;
      if (!botao || !menu) return;
      var texto = botao.querySelector('[data-menu-texto]');

      function definir(aberto: boolean) {
        botao?.setAttribute('aria-expanded', String(aberto));
        if (menu) menu.hidden = !aberto;
        root.classList.toggle('menu-aberto', aberto);
        if (texto) texto.textContent = aberto ? 'Fechar' : 'Menu';
        if (aberto) {
          var primeiro = menu?.querySelector('a');
          if (primeiro) (primeiro as HTMLElement).focus();
        }
      }

      var onBotaoClick = function () {
        definir(botao?.getAttribute('aria-expanded') !== 'true');
      };
      var onMenuClick = function (e: MouseEvent) {
        if ((e.target as HTMLElement).closest('a')) definir(false);
      };
      var onKeyDown = function (e: KeyboardEvent) {
        if (e.key === 'Escape' && botao?.getAttribute('aria-expanded') === 'true') {
          definir(false);
          (botao as HTMLElement).focus();
        }
      };
      var mql = window.matchMedia('(min-width: 1200px)');
      var onMqlChange = function (m: MediaQueryListEvent) {
        if (m.matches) definir(false);
      };

      botao.addEventListener('click', onBotaoClick);
      menu.addEventListener('click', onMenuClick as EventListener);
      doc.addEventListener('keydown', onKeyDown);
      mql.addEventListener('change', onMqlChange);

      cleanupFns.push(() => {
        botao?.removeEventListener('click', onBotaoClick);
        menu?.removeEventListener('click', onMenuClick as EventListener);
        doc.removeEventListener('keydown', onKeyDown);
        mql.removeEventListener('change', onMqlChange);
        root.classList.remove('menu-aberto');
      });
    }

    /* ---------- Um ponto Acid por tela ---------- */
    function iniciarCtaDiscreto() {
      var cab = doc.querySelector('[data-cabecalho]');
      var principais = doc.querySelectorAll('[data-cta-principal], [data-foco-acid]');
      if (!cab || !principais.length || !temIO) return;
      var visiveis = new Set();
      var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          if (en.isIntersecting) visiveis.add(en.target); else visiveis.delete(en.target);
        });
        cab?.classList.toggle('cabecalho--discreto', visiveis.size > 0);
      }, { rootMargin: '-72px 0px 0px 0px' });
      principais.forEach(function (el) { io.observe(el); });

      cleanupFns.push(() => {
        io.disconnect();
      });
    }

    /* ---------- Navegação: marca a seção em que o leitor está ---------- */
    function iniciarSecaoAtual() {
      var links = doc.querySelectorAll('[data-nav-secao]');
      if (!links.length || !temIO) return;
      var ids: string[] = [];
      links.forEach(function (a) {
        var id = a.getAttribute('data-nav-secao');
        if (id && ids.indexOf(id) === -1) ids.push(id);
      });
      var secoes = ids.map(function (id) { return doc.getElementById(id); }).filter(Boolean) as HTMLElement[];
      var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          var id = en.target.id;
          links.forEach(function (a) {
            if (a.getAttribute('data-nav-secao') !== id) return;
            if (en.isIntersecting) a.setAttribute('data-atual', ''); else a.removeAttribute('data-atual');
          });
        });
      }, { rootMargin: '-45% 0px -54% 0px' });
      secoes.forEach(function (s) { io.observe(s); });

      cleanupFns.push(() => {
        io.disconnect();
      });
    }

    /* ---------- Entrada de seções e desenho de diagramas ---------- */
    function iniciarEntradas() {
      var alvos = doc.querySelectorAll('.revelar, .desenhar, .revela-foto, .rotulo-secao, [data-rodape-simbolo]');
      if (!temIO || reduzMovimento.matches) {
        alvos.forEach(function (el) { el.classList.add('is-visivel'); });
        return;
      }
      var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add('is-visivel');
          io.unobserve(en.target);
          en.target.dispatchEvent(new CustomEvent('velora:visivel'));
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
      alvos.forEach(function (el) { io.observe(el); });

      cleanupFns.push(() => {
        io.disconnect();
      });
    }

    /* ---------- Circuito do sistema ---------- */
    function iniciarCircuito() {
      var circuito = doc.querySelector('[data-circuito]');
      if (!circuito) return;
      var etapas = Array.prototype.slice.call(circuito.querySelectorAll('[data-etapa]')) as HTMLElement[];
      var timers: number[] = [];
      var PADRAO = '1';

      function acender(n: string) {
        circuito?.setAttribute('data-ativa', n);
        etapas.forEach(function (e) { e.classList.toggle('is-ativa', e.getAttribute('data-etapa') === n); });
      }
      function parar() {
        timers.forEach(window.clearTimeout);
        timers = [];
      }

      var mouseEnterHandlers: Array<[HTMLElement, () => void]> = [];
      var mouseLeaveHandlers: Array<[HTMLElement, () => void]> = [];

      etapas.forEach(function (e) {
        var onEnter = function () { parar(); acender(e.getAttribute('data-etapa') || ''); };
        var onLeave = function () { acender(PADRAO); };
        e.addEventListener('mouseenter', onEnter);
        e.addEventListener('mouseleave', onLeave);
        mouseEnterHandlers.push([e, onEnter]);
        mouseLeaveHandlers.push([e, onLeave]);
      });

      var onVisivel = function () {
        parar();
        acender('');
        for (var i = 1; i <= etapas.length + 1; i++) {
          (function (k) {
            timers.push(window.setTimeout(function () { acender(String(k > etapas.length ? PADRAO : k)); }, 700 + (k - 1) * 760));
          })(i);
        }
      };

      if (!(!temIO || reduzMovimento.matches)) {
        circuito.addEventListener('velora:visivel', onVisivel, { once: true });
      }

      cleanupFns.push(() => {
        parar();
        circuito?.removeEventListener('velora:visivel', onVisivel);
        mouseEnterHandlers.forEach(([el, h]) => el.removeEventListener('mouseenter', h));
        mouseLeaveHandlers.forEach(([el, h]) => el.removeEventListener('mouseleave', h));
      });
    }

    /* ---------- Medição sem dados pessoais ---------- */
    function registrar(evento: string, form: HTMLFormElement) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: evento, form_id: form.id });
    }

    /* ---------- Formulários ---------- */
    function iniciarFormularios() {
      doc.querySelectorAll<HTMLFormElement>('[data-form]').forEach(function (form) {
        var status = form.querySelector('[data-status]') as HTMLElement | null;
        var botao = form.querySelector('[type="submit"]') as HTMLButtonElement | null;
        var campos = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea')).filter(function (c: any) { return c.name; }) as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];

        function marcarCampo(c: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
          var ok = c.checkValidity();
          c.setAttribute('aria-invalid', ok ? 'false' : 'true');
          var caixa = c.closest('.campo');
          if (caixa) caixa.classList.toggle('is-invalido', !ok);
          return ok;
        }
        function mostrar(msg: string) {
          if (status) status.textContent = msg;
        }

        var iniciado = false;
        var onFocusIn = function () {
          if (iniciado) return;
          iniciado = true;
          registrar('velora_form_inicio', form);
        };
        form.addEventListener('focusin', onFocusIn);

        var vista: IntersectionObserver | null = null;
        if (temIO) {
          vista = new IntersectionObserver(function (entradas) {
            if (!entradas.some(function (en) { return en.isIntersecting; })) return;
            registrar('velora_form_visualizacao', form);
            vista?.disconnect();
          }, { threshold: 0.3 });
          vista.observe(form);
        }

        var fieldHandlers: Array<[Element, string, EventListener]> = [];
        campos.forEach(function (c) {
          var evento = c.tagName === 'SELECT' ? 'change' : 'input';
          var onFieldEvent = function () {
            if (c.getAttribute('aria-invalid') === 'true') marcarCampo(c);
            if (!form.querySelector('[aria-invalid="true"]') && status?.textContent === form.dataset.msgValidacao) mostrar('');
          };
          c.addEventListener(evento, onFieldEvent);
          fieldHandlers.push([c, evento, onFieldEvent]);
        });

        var onSubmit = async function (e: Event) {
          e.preventDefault();
          var invalidos = campos.filter(function (c) { return !marcarCampo(c); });
          if (invalidos.length) {
            mostrar(form.dataset.msgValidacao || '');
            invalidos[0].focus();
            return;
          }

          if (botao) botao.disabled = true;
          form.setAttribute('aria-busy', 'true');
          mostrar('');

          try {
            var rawFormData = new FormData(form);
            var nome = String(rawFormData.get('nome') || '').trim();
            var email = String(rawFormData.get('email') || '').trim();
            var empresa = String(rawFormData.get('empresa') || '').trim();
            var cargo = String(rawFormData.get('cargo') || '').trim();
            var faixaFaturamento = String(rawFormData.get('faixa_faturamento') || '').trim();
            var principalDesafio = String(rawFormData.get('principal_desafio') || '').trim();
            var whatsapp = String(rawFormData.get('whatsapp') || '').replace(/\D/g, '');

            if (whatsapp.startsWith('55') && (whatsapp.length === 12 || whatsapp.length === 13)) {
              whatsapp = whatsapp.slice(2);
            }

            var faturamentoMap: Record<string, string> = {
              'Até R$ 5 milhões': '4',
              'R$ 5 milhões a R$ 20 milhões': '5',
              'R$ 20 milhões a R$ 50 milhões': '6',
              'R$ 50 milhões a R$ 100 milhões': '6',
              'Acima de R$ 100 milhões': '6',
            };
            var brevoFaturamento = faturamentoMap[faixaFaturamento] || '5';

            var BREVO_ENDPOINT =
              'https://88bfd1c8.sibforms.com/serve/MUIFAKXPzr3Oinuo78iic8A0FuDYg7wfqEnrD4KLy-RSNw9IanHflp1CVqmgmsv-CG1ECv2S6hbaC-T-kK9Y2Cr_nl0ZAimJ72D7RpfEQBb9uC9_htCq-zxb2Nd057wx458HPDvv9Wsj0Tn0NQ1wUP5hQKIVV3vScSeugAvsE2_EYfrRzxjqtiN3mWZtOxKGU5yt4PoOVi-9OjLVcg==?isAjax=1';

            var brevoPayload = new FormData();
            brevoPayload.append('NOME', nome);
            brevoPayload.append('EMAIL', email);
            brevoPayload.append('EMPRESA', cargo ? `${empresa} (${cargo})` : empresa);
            brevoPayload.append('SMS', whatsapp);
            brevoPayload.append('SMS__COUNTRY_CODE', '+55');
            brevoPayload.append('FATURAMENTO', brevoFaturamento);
            brevoPayload.append('SEGMENTO', '8');
            brevoPayload.append('SITE', '');
            brevoPayload.append('email_address_check', '');
            brevoPayload.append('locale', 'pt');

            var resp = await fetch(BREVO_ENDPOINT, {
              method: 'POST',
              body: brevoPayload,
              headers: { Accept: 'application/json' },
            });

            var resData = await resp.json().catch(() => ({}));
            if (!resp.ok || resData.success === false) {
              var errMsg = resData.errors ? Object.values(resData.errors)[0] : resData.message;
              throw new Error(typeof errMsg === 'string' ? errMsg : 'Não foi possível validar o envio.');
            }

            // GTM DataLayer
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
              event: 'velora_form_envio_valido',
              form_id: form.id,
              lead_nome: nome,
              lead_email: email,
              lead_empresa: empresa,
              lead_cargo: cargo,
              lead_whatsapp: whatsapp,
              lead_faturamento: faixaFaturamento,
              lead_desafio: principalDesafio,
            });

            form.classList.add('is-enviado');
            mostrar(form.dataset.msgSucesso || '');
            status?.focus();

            var agenda = form.getAttribute('data-agenda');
            if (agenda) {
              var targetAgenda = agenda;
              (window as any).dataLayer.push({ event: 'velora_agenda_aberta', form_id: form.id });
              window.setTimeout(function () {
                window.location.assign(targetAgenda);
              }, 1200);
            }
          } catch (err: any) {
            console.error('[Brevo Submit Error]', err);
            mostrar(err?.message || form.dataset.msgErro || 'Não foi possível enviar agora. Confira os campos e tente novamente.');
            if (botao) botao.disabled = false;
          } finally {
            form.removeAttribute('aria-busy');
          }
        };

        form.addEventListener('submit', onSubmit);

        cleanupFns.push(() => {
          form.removeEventListener('focusin', onFocusIn);
          form.removeEventListener('submit', onSubmit);
          vista?.disconnect();
          fieldHandlers.forEach(([el, evt, h]) => el.removeEventListener(evt, h));
        });
      });
    }

    /* ---------- Cabeçalho: progresso, scroll hide/show ---------- */
    function iniciarCabecalho() {
      var cab = doc.querySelector('[data-cabecalho]') as HTMLElement | null;
      var barra = doc.querySelector('[data-progresso]') as HTMLElement | null;
      var menuBotao = doc.querySelector('[data-menu-botao]');
      if (!cab) return;
      var ultimo = window.scrollY, pendente = false;
      function atualizar() {
        pendente = false;
        var y = window.scrollY;
        var max = Math.max(1, root.scrollHeight - window.innerHeight);
        if (barra) barra.style.setProperty('--progresso', Math.min(1, y / max).toFixed(4));
        cab?.classList.toggle('cabecalho--topo', y < 24);
        var menuAberto = menuBotao && menuBotao.getAttribute('aria-expanded') === 'true';
        var focoDentro = cab?.contains(doc.activeElement) && doc.activeElement !== doc.body;
        if (!reduzMovimento.matches && !menuAberto && !focoDentro && y > 480 && y > ultimo + 4) cab?.classList.add('cabecalho--oculto');
        else if (y < ultimo - 4 || y <= 480 || menuAberto || focoDentro) cab?.classList.remove('cabecalho--oculto');
        ultimo = y;
      }
      var onScroll = function () {
        if (!pendente) { pendente = true; window.requestAnimationFrame(atualizar); }
      };
      var onFocusIn = function () {
        cab?.classList.remove('cabecalho--oculto');
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', atualizar);
      cab.addEventListener('focusin', onFocusIn);
      atualizar();

      cleanupFns.push(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', atualizar);
        cab?.removeEventListener('focusin', onFocusIn);
      });
    }

    /* ---------- Navegação: traço indicador deslizante ---------- */
    function iniciarIndicador() {
      var ind = doc.querySelector('[data-nav-indicador]') as HTMLElement | null;
      if (!ind) return;
      var lista = ind.parentElement;
      if (!lista) return;
      var links = Array.prototype.slice.call(lista.querySelectorAll<HTMLElement>('.nav__link'));
      function mover(a?: HTMLElement | null) {
        if (!ind) return;
        if (!a) { ind.classList.remove('is-ativo'); return; }
        ind.style.width = a.offsetWidth + 'px';
        ind.style.transform = 'translateX(' + (a.offsetLeft) + 'px)';
        ind.classList.add('is-ativo');
      }
      function atual() { return links.filter(function (a) { return a.hasAttribute('data-atual'); })[0]; }

      var linkHandlers: Array<[HTMLElement, string, EventListener]> = [];
      links.forEach(function (a) {
        var onEnter = function () { mover(a); };
        var onFocus = function () { mover(a); };
        a.addEventListener('mouseenter', onEnter);
        a.addEventListener('focus', onFocus);
        linkHandlers.push([a, 'mouseenter', onEnter]);
        linkHandlers.push([a, 'focus', onFocus]);
      });

      var onMouseLeave = function () { mover(atual()); };
      lista.addEventListener('mouseleave', onMouseLeave);

      var observer: MutationObserver | null = null;
      if ('MutationObserver' in window) {
        observer = new MutationObserver(function () { mover(atual()); });
        observer.observe(lista, { subtree: true, attributes: true, attributeFilter: ['data-atual'] });
      }
      var onResize = function () { mover(atual()); };
      window.addEventListener('resize', onResize);

      cleanupFns.push(() => {
        linkHandlers.forEach(([el, evt, h]) => el.removeEventListener(evt, h));
        lista?.removeEventListener('mouseleave', onMouseLeave);
        observer?.disconnect();
        window.removeEventListener('resize', onResize);
      });
    }

    /* ---------- Dados de mercado: contadores numéricos ---------- */
    function iniciarContadores() {
      if (reduzMovimento.matches) return;
      doc.querySelectorAll('.evidencias, .caso').forEach(function (bloco) {
        var nums = Array.prototype.slice.call(bloco.querySelectorAll('.dado__n, .metrica__n')) as HTMLElement[];
        nums.forEach(function (n) { n.setAttribute('data-final', n.textContent || ''); });
        var animId: number | null = null;
        function rodar() {
          var t0: number | null = null, dur = 1500;
          function quadro(t: number) {
            if (t0 === null) t0 = t;
            var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
            nums.forEach(function (n) {
              var fim = n.getAttribute('data-final') || '';
              n.textContent = k >= 1 ? fim : fim.replace(/\d+(?:,\d+)?/g, function (m) {
                var casas = m.indexOf(',') > -1 ? m.split(',')[1].length : 0;
                return (parseFloat(m.replace(',', '.')) * e).toFixed(casas).replace('.', ',');
              });
            });
            if (k < 1) animId = window.requestAnimationFrame(quadro);
          }
          animId = window.requestAnimationFrame(quadro);
        }
        bloco.addEventListener('velora:visivel', rodar, { once: true });

        cleanupFns.push(() => {
          if (animId) window.cancelAnimationFrame(animId);
          bloco.removeEventListener('velora:visivel', rodar);
        });
      });
    }

    iniciarMenu();
    iniciarCabecalho();
    iniciarIndicador();
    iniciarContadores();
    iniciarCtaDiscreto();
    iniciarSecaoAtual();
    iniciarCircuito();
    iniciarEntradas();
    iniciarFormularios();

    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  return (
    <div className="velora-v10-root">

<a className="pular" href="#conteudo">Pular para o conteúdo</a>
<header className="cabecalho cabecalho--topo" data-cabecalho>
  <div className="cabecalho__progresso" aria-hidden="true"><span data-progresso></span></div>
  <div className="wrap cabecalho__barra">
    <a className="marca" href="#inicio" aria-label="Velora · Growth &amp; Beyond, início da página">
      <img className="marca__logo" src="/v10/images/logo.webp" alt="" width="420" height="118" decoding="async" />
    </a>
    <nav className="nav" aria-label="Principal">
      <ul className="nav__lista"><li><a className="nav__link" href="#sistema" data-nav-secao="sistema">O sistema</a></li><li><a className="nav__link" href="#entregas" data-nav-secao="entregas">O que entregamos</a></li><li><a className="nav__link" href="#como-trabalhamos" data-nav-secao="como-trabalhamos">Como trabalhamos</a></li><li><a className="nav__link" href="#para-quem" data-nav-secao="para-quem">Para quem</a></li><li><a className="nav__link" href="#resultados" data-nav-secao="resultados">Resultados</a></li><li className="nav__indicador" aria-hidden="true" data-nav-indicador></li></ul>
    </nav>
    <a className="botao botao--primario cabecalho__cta" href="#conversa"><span>Agendar conversa</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a>
    <button className="cabecalho__menu" type="button" aria-expanded="false" aria-controls="menu-movel" data-menu-botao>
      <span className="cabecalho__menu-icone" aria-hidden="true"></span><span data-menu-texto>Menu</span>
    </button>
  </div>
  <div className="menu-movel" id="menu-movel" data-menu hidden>
    <div className="wrap">
      <nav aria-label="Principal, celular">
        <ul className="menu-movel__lista"><li><a className="menu-movel__link" href="#sistema" data-nav-secao="sistema">O sistema</a></li><li><a className="menu-movel__link" href="#entregas" data-nav-secao="entregas">O que entregamos</a></li><li><a className="menu-movel__link" href="#como-trabalhamos" data-nav-secao="como-trabalhamos">Como trabalhamos</a></li><li><a className="menu-movel__link" href="#para-quem" data-nav-secao="para-quem">Para quem</a></li><li><a className="menu-movel__link" href="#resultados" data-nav-secao="resultados">Resultados</a></li></ul>
      </nav>
      <a className="botao botao--primario menu-movel__cta" href="#conversa"><span>Agendar conversa</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a>
    </div>
  </div>
</header>
<main id="conteudo">
<section className="secao tema-escuro secao--topo hero" id="inicio">
    <div className="hero__foto"><img className="" src="/v10/images/hero-reuniao.webp" alt="Visto através de uma parede de vidro, um consultor de pé conduz uma reunião com cinco pessoas sentadas à mesa, enquanto outra pessoa passa em movimento em primeiro plano." width="1400" height="1738" fetchPriority="high" decoding="async" /></div>
    <div className="wrap hero__conteudo">
      <p className="rotulo-secao"><span>Aquisição B2B · Estratégia e execução</span></p>
      <h1 className="display-xl hero__titulo"><span className="hero__titulo-1">Crescimento não trava por falta de esforço.</span> <span className="hero__titulo-2">Trava por falta de sistema.</span></h1>
      <p className="lead hero__lead">Conectamos inteligência de mercado, abordagem, marketing e vendas para transformar oportunidades em contratos, com prioridades claras e execução acompanhada.</p>
      <div className="acoes hero__acoes">
        <a className="botao botao--primario " href="#conversa" data-cta-principal><span>Agendar conversa de diagnóstico</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a>
        <a className="link-seta " href="#entregas"><span>Ver o que entregamos</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a>
      </div>
    </div></section><section className="marcas" aria-labelledby="marcas-titulo">
  <h2 className="marcas__titulo" id="marcas-titulo">Marcas que já contaram com o nosso time</h2>
  <div className="marcas__trilho">
    <div className="marcas__faixa"><ul className="marcas__lista"><li className="marcas__item"><img src="/v10/images/clientes/tecnisa.webp" alt="Tecnisa" width="233" height="96" style={{ height: '38.2px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/tke.webp" alt="TKE" width="206" height="96" style={{ height: '40.6px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/unimed.webp" alt="Unimed" width="540" height="96" style={{ height: '25.1px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/vr.webp" alt="VR Benefícios" width="108" height="96" style={{ height: '46px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/ciser.webp" alt="Ciser" width="256" height="96" style={{ height: '36.4px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/senior.webp" alt="Senior" width="295" height="96" style={{ height: '33.9px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/espm.webp" alt="ESPM" width="299" height="96" style={{ height: '33.7px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/conquer.webp" alt="Conquer Business School" width="329" height="96" style={{ height: '32.1px' } as React.CSSProperties} loading="lazy" decoding="async" /></li></ul><ul className="marcas__lista" aria-hidden="true"><li className="marcas__item"><img src="/v10/images/clientes/tecnisa.webp" alt="" width="233" height="96" style={{ height: '38.2px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/tke.webp" alt="" width="206" height="96" style={{ height: '40.6px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/unimed.webp" alt="" width="540" height="96" style={{ height: '25.1px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/vr.webp" alt="" width="108" height="96" style={{ height: '46px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/ciser.webp" alt="" width="256" height="96" style={{ height: '36.4px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/senior.webp" alt="" width="295" height="96" style={{ height: '33.9px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/espm.webp" alt="" width="299" height="96" style={{ height: '33.7px' } as React.CSSProperties} loading="lazy" decoding="async" /></li><li className="marcas__item"><img src="/v10/images/clientes/conquer.webp" alt="" width="329" height="96" style={{ height: '32.1px' } as React.CSSProperties} loading="lazy" decoding="async" /></li></ul></div>
  </div>
</section><section className="secao tema-claro onde-trava" id="onde-trava">
    <div className="wrap">
      <p className="rotulo-secao"><span>Onde a aquisição trava</span></p>
      <h2 className="titulo-2 titulo-2--grande cabeca">Sua empresa sabe entregar valor. O desafio é repetir o caminho até o próximo contrato.</h2>
    </div>
    <div className="sangra">
      <figure className="sangra__foto sangra__foto--esq onde-trava__foto revela-foto foto revelar"><img className="" src="/v10/images/onde-trava.webp" alt="Três pessoas debruçadas sobre uma mesa de concreto analisam juntas plantas e documentos impressos." width="2304" height="1536" loading="lazy" decoding="async" /></figure>
      <div className="sangra__texto sangra__texto--dir">
        <p className="lead revelar">Os sintomas mudam. A causa costuma ser a mesma: mercado, marketing e vendas decidindo cada um por si.</p>
        <ul className="dores">
          <li className="dor revelar">
            <h3 className="titulo-3 dor__titulo">Depende de indicação</h3>
            <p className="dor__texto">As indicações funcionam, mas não abrem novas contas e mercados sozinhas.</p>
          </li><li className="dor revelar">
            <h3 className="titulo-3 dor__titulo">Marketing e vendas desconectados</h3>
            <p className="dor__texto">Cada área trabalha, mas sem as mesmas prioridades de contas e oportunidades.</p>
          </li><li className="dor revelar">
            <h3 className="titulo-3 dor__titulo">Investimento que não vira pipeline</h3>
            <p className="dor__texto">Campanhas, conteúdo e eventos geram atividade, não oportunidades.</p>
          </li><li className="dor revelar">
            <h3 className="titulo-3 dor__titulo">Números que não explicam o resultado</h3>
            <p className="dor__texto">Há reuniões e propostas, mas ninguém sabe ao certo o que faz uma venda avançar ou travar.</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="wrap">
      <div className="evidencias tema-escuro revelar" data-foco-acid>
        <h3 className="titulo-2 evidencias__titulo">A decisão de compra começa antes da conversa comercial.</h3>
        <ul className="dados">
          <li className="dado dado--foco">
            <p className="dado__n">~80%</p>
            <p className="dado__texto">Das compras B2B são vencidas pelo fornecedor que já era favorito antes do primeiro contato com vendas.</p>
            <p className="dado__fonte"><a href="https://6sense.com/science-of-b2b/getting-to-yes-why-vendors-win-and-how-buying-groups-agree" rel="noopener">6sense · Buyer Experience Research, 2025</a></p>
          </li><li className="dado">
            <p className="dado__n">5–16</p>
            <p className="dado__texto">Pessoas participam de uma decisão de compra B2B complexa.</p>
            <p className="dado__fonte"><a href="https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-sales-survey-finds-74-percent-of-b2b-buyer-teams-demonstrate-unhealthy-conflict-during-the-decision-process" rel="noopener">Gartner · Sales Survey, 2025</a></p>
          </li><li className="dado">
            <p className="dado__n">49%</p>
            <p className="dado__texto">Dos líderes de vendas dizem que vendas e marketing definem lead qualificado de formas muito diferentes.</p>
            <p className="dado__fonte"><a href="https://www.gartner.com/en/newsroom/press-releases/2025-05-21-gartner-survey-reveals-less-than-half-of-csos-report-their-organization-met-several-2024-strategic-goals" rel="noopener">Gartner · CSO Survey, 2025</a></p>
          </li><li className="dado">
            <p className="dado__n">2×</p>
            <p className="dado__texto">É o custo de cada real de receita vinda de cliente novo, comparado à receita de expansão da base.</p>
            <p className="dado__fonte">Benchmarkit · B2B SaaS &amp; AI-Native Metrics, 2026</p>
          </li>
        </ul>
      </div>
    </div></section><section className="secao tema-escuro sistema" id="sistema">
  <div className="wrap">
    <p className="rotulo-secao"><span>O sistema</span></p>
    <h2 className="titulo-2 titulo-2--grande cabeca">Como a Velora gera resultado: cinco etapas, uma entrega concreta em cada.</h2>
    <p className="lead sistema__abertura revelar">Começamos no mercado e terminamos no contrato. Em cada etapa, seu time recebe algo que já pode usar, e a etapa seguinte parte dele.</p>
    <ol className="circuito desenhar" data-circuito data-ativa="1" data-foco-acid>
      <li className="circuito__etapa is-ativa" id="etapa-inteligencia" data-etapa="1" style={{ '--i': '0' } as React.CSSProperties}>
        <span className="circuito__no" aria-hidden="true"></span>
        <span className="circuito__liga" aria-hidden="true"></span>
        <p className="circuito__n">01</p>
        <h3 className="titulo-3 circuito__nome">Inteligência</h3>
        <p className="circuito__texto">Definimos ICP, mercados e contas com dados de mercado e os sinais de compra do Velora Radar.</p>
        <p className="circuito__entrega"><span>Entrega</span> Contas priorizadas</p>
      </li><li className="circuito__etapa" id="etapa-acesso" data-etapa="2" style={{ '--i': '1' } as React.CSSProperties}>
        <span className="circuito__no" aria-hidden="true"></span>
        <span className="circuito__liga" aria-hidden="true"></span>
        <p className="circuito__n">02</p>
        <h3 className="titulo-3 circuito__nome">Acesso</h3>
        <p className="circuito__texto">Mapeamos o comitê de compra e abrimos conversas com cadências de outbound e LinkedIn.</p>
        <p className="circuito__entrega"><span>Entrega</span> Conversas iniciadas</p>
      </li><li className="circuito__etapa" id="etapa-demanda" data-etapa="3" style={{ '--i': '2' } as React.CSSProperties}>
        <span className="circuito__no" aria-hidden="true"></span>
        <span className="circuito__liga" aria-hidden="true"></span>
        <p className="circuito__n">03</p>
        <h3 className="titulo-3 circuito__nome">Demanda</h3>
        <p className="circuito__texto">Conteúdo, LinkedIn e mídia que aquecem as contas antes e durante a negociação.</p>
        <p className="circuito__entrega"><span>Entrega</span> Contas aquecidas</p>
      </li><li className="circuito__etapa" id="etapa-conversao" data-etapa="4" style={{ '--i': '3' } as React.CSSProperties}>
        <span className="circuito__no" aria-hidden="true"></span>
        <span className="circuito__liga" aria-hidden="true"></span>
        <p className="circuito__n">04</p>
        <h3 className="titulo-3 circuito__nome">Conversão</h3>
        <p className="circuito__texto">Funil, critérios de qualificação, materiais e CRM para levar cada oportunidade ao contrato.</p>
        <p className="circuito__entrega"><span>Entrega</span> Oportunidades que avançam</p>
      </li><li className="circuito__etapa" id="etapa-medicao" data-etapa="5" style={{ '--i': '4' } as React.CSSProperties}>
        <span className="circuito__no" aria-hidden="true"></span>
        <span className="circuito__liga" aria-hidden="true"></span>
        <p className="circuito__n">05</p>
        <h3 className="titulo-3 circuito__nome">Medição</h3>
        <p className="circuito__texto">Painéis de origem, conversão e receita que mostram o que funcionou e realimentam a Inteligência.</p>
        <p className="circuito__entrega"><span>Entrega</span> Aprendizado para o próximo ciclo</p>
      </li>
    </ol></div>
</section><section className="secao tema-claro entregas" id="entregas">
  <div className="wrap">
    <p className="rotulo-secao"><span>O que entregamos</span></p>
    <h2 className="titulo-2 titulo-2--grande cabeca">O sistema, na prática.</h2>
    <p className="lead entregas__abertura revelar">Frentes de growth e receita que se combinam conforme o que o diagnóstico mostrar.</p>
    <div className="entregas__grade">
      <article className="frente frente--01 revelar" style={{ '--i': '0' } as React.CSSProperties}>
    <h3 className="titulo-3 frente__titulo">Inteligência comercial</h3>
    <p className="frente__texto">Encontrar as oportunidades que merecem atenção e entender por que abordá-las.</p>
    <ul className="entregaveis"><li>Perfil de cliente ideal e mapeamento de mercado.</li><li>Contas priorizadas por aderência e contexto.</li><li>Oportunidades em novos segmentos ou na carteira atual.</li></ul>
  </article>
      <aside className="radar-painel tema-escuro revelar" aria-labelledby="velora-radar" data-foco-acid>
        <div className="radar-painel__texto">
          <h4 className="radar-painel__titulo" id="velora-radar">Velora Radar</h4>
          <p className="radar-painel__descricao">Nossa ferramenta de inteligência reúne sinais observáveis sobre empresas e apoia a priorização de contas e decisores. A análise transforma esses sinais em contexto para abordagens comerciais.</p>
          
        </div>
        <div className="radar-painel__visual"><figure className="radar desenhar" role="img" aria-label="Ilustração: um radar com empresas como pontos; algumas, priorizadas, aparecem em destaque, uma delas com sinais ao redor e pessoas ligadas a ela.">
    <svg className="radar__svg" viewBox="0 0 600 600" aria-hidden="true">
      <circle className="radar__anel" cx="300" cy="300" r="72"/><circle className="radar__anel" cx="300" cy="300" r="144"/><circle className="radar__anel" cx="300" cy="300" r="216"/><circle className="radar__anel radar__anel--externo" cx="300" cy="300" r="280"/>
      <path className="radar__cruz" d="M300 14V586M14 300H586M497.99 102.01L102.01 497.99M497.99 497.99L102.01 102.01"/>
      <circle className="radar__conta" cx="284.92" cy="506.71" r="3.4" style={{ '--atraso': '1.13s' } as React.CSSProperties}/><circle className="radar__conta" cx="163.77" cy="468.7" r="3.4" style={{ '--atraso': '1.34s' } as React.CSSProperties}/><circle className="radar__conta" cx="131.86" cy="176.58" r="3.4" style={{ '--atraso': '1.87s' } as React.CSSProperties}/><circle className="radar__conta" cx="399.92" cy="118.31" r="3.4" style={{ '--atraso': '0.18s' } as React.CSSProperties}/><circle className="radar__conta" cx="178.66" cy="451" r="3.4" style={{ '--atraso': '1.34s' } as React.CSSProperties}/><circle className="radar__conta" cx="331.59" cy="550.6" r="3.4" style={{ '--atraso': '1.06s' } as React.CSSProperties}/><circle className="radar__conta" cx="410.28" cy="500.52" r="3.4" style={{ '--atraso': '0.92s' } as React.CSSProperties}/><circle className="radar__conta" cx="182.35" cy="353.99" r="3.4" style={{ '--atraso': '1.5s' } as React.CSSProperties}/><circle className="radar__conta" cx="443.28" cy="230.94" r="3.4" style={{ '--atraso': '0.39s' } as React.CSSProperties}/><circle className="radar__conta" cx="409.58" cy="442.96" r="3.4" style={{ '--atraso': '0.87s' } as React.CSSProperties}/><circle className="radar__conta" cx="241.05" cy="403.34" r="3.4" style={{ '--atraso': '1.28s' } as React.CSSProperties}/><circle className="radar__conta" cx="423.93" cy="520.21" r="3.4" style={{ '--atraso': '0.92s' } as React.CSSProperties}/><circle className="radar__conta" cx="71.86" cy="217.24" r="3.4" style={{ '--atraso': '1.77s' } as React.CSSProperties}/><circle className="radar__conta" cx="502.15" cy="391.44" r="3.4" style={{ '--atraso': '0.7s' } as React.CSSProperties}/><circle className="radar__conta" cx="390.43" cy="300.95" r="3.4" style={{ '--atraso': '0.55s' } as React.CSSProperties}/><circle className="radar__conta" cx="31.11" cy="315.37" r="3.4" style={{ '--atraso': '1.63s' } as React.CSSProperties}/><circle className="radar__conta" cx="419.73" cy="336.29" r="3.4" style={{ '--atraso': '0.65s' } as React.CSSProperties}/><circle className="radar__conta" cx="125.9" cy="307.06" r="3.4" style={{ '--atraso': '1.64s' } as React.CSSProperties}/><circle className="radar__conta" cx="229.24" cy="502.74" r="3.4" style={{ '--atraso': '1.22s' } as React.CSSProperties}/><circle className="radar__conta" cx="97.84" cy="153.69" r="3.4" style={{ '--atraso': '1.87s' } as React.CSSProperties}/><circle className="radar__conta" cx="347.68" cy="353.88" r="3.4" style={{ '--atraso': '0.85s' } as React.CSSProperties}/><circle className="radar__conta" cx="416.97" cy="76.45" r="3.4" style={{ '--atraso': '0.17s' } as React.CSSProperties}/><circle className="radar__conta" cx="303.56" cy="506.6" r="3.4" style={{ '--atraso': '1.09s' } as React.CSSProperties}/><circle className="radar__conta" cx="500.96" cy="325.94" r="3.4" style={{ '--atraso': '0.59s' } as React.CSSProperties}/><circle className="radar__conta" cx="195.55" cy="310.39" r="3.4" style={{ '--atraso': '1.62s' } as React.CSSProperties}/><circle className="radar__conta" cx="233.49" cy="352.2" r="3.4" style={{ '--atraso': '1.42s' } as React.CSSProperties}/><circle className="radar__conta" cx="376.36" cy="510.18" r="3.4" style={{ '--atraso': '0.98s' } as React.CSSProperties}/><circle className="radar__conta" cx="281.4" cy="111.18" r="3.4" style={{ '--atraso': '2.17s' } as React.CSSProperties}/><circle className="radar__conta" cx="337" cy="471.44" r="3.4" style={{ '--atraso': '1.03s' } as React.CSSProperties}/><circle className="radar__conta" cx="371.04" cy="73.04" r="3.4" style={{ '--atraso': '0.11s' } as React.CSSProperties}/><circle className="radar__conta" cx="500.78" cy="365.77" r="3.4" style={{ '--atraso': '0.66s' } as React.CSSProperties}/><circle className="radar__conta" cx="506.24" cy="445.58" r="3.4" style={{ '--atraso': '0.77s' } as React.CSSProperties}/><circle className="radar__conta" cx="397.97" cy="237.97" r="3.4" style={{ '--atraso': '0.35s' } as React.CSSProperties}/><circle className="radar__conta" cx="137.99" cy="451.7" r="3.4" style={{ '--atraso': '1.39s' } as React.CSSProperties}/><circle className="radar__conta" cx="483.87" cy="490.02" r="3.4" style={{ '--atraso': '0.83s' } as React.CSSProperties}/><circle className="radar__conta" cx="200.58" cy="463.02" r="3.4" style={{ '--atraso': '1.29s' } as React.CSSProperties}/><circle className="radar__conta" cx="313.89" cy="43.02" r="3.4" style={{ '--atraso': '0.02s' } as React.CSSProperties}/><circle className="radar__conta" cx="476.36" cy="359.26" r="3.4" style={{ '--atraso': '0.66s' } as React.CSSProperties}/><circle className="radar__conta" cx="370.89" cy="227.75" r="3.4" style={{ '--atraso': '0.27s' } as React.CSSProperties}/><circle className="radar__conta" cx="90.48" cy="306.45" r="3.4" style={{ '--atraso': '1.64s' } as React.CSSProperties}/><circle className="radar__conta" cx="290.23" cy="410.08" r="3.4" style={{ '--atraso': '1.13s' } as React.CSSProperties}/><circle className="radar__conta" cx="122.45" cy="100.11" r="3.4" style={{ '--atraso': '1.95s' } as React.CSSProperties}/>
      <line className="radar__elo" x1="212.31" y1="221.04" x2="178.31" y2="199.04" style={{ '--atraso': '1.91s' } as React.CSSProperties}/><line className="radar__elo" x1="212.31" y1="221.04" x2="242.31" y2="191.04" style={{ '--atraso': '1.91s' } as React.CSSProperties}/><line className="radar__elo" x1="212.31" y1="221.04" x2="204.31" y2="255.04" style={{ '--atraso': '1.91s' } as React.CSSProperties}/>
      <circle className="radar__pessoa" cx="178.31" cy="199.04" r="4.5" style={{ '--atraso': '1.91s' } as React.CSSProperties}/><circle className="radar__pessoa" cx="242.31" cy="191.04" r="4.5" style={{ '--atraso': '1.91s' } as React.CSSProperties}/><circle className="radar__pessoa" cx="204.31" cy="255.04" r="4.5" style={{ '--atraso': '1.91s' } as React.CSSProperties}/>
      <circle className="radar__sinal" cx="432.28" cy="180.89" r="16" style={{ '--atraso': '0.29s' } as React.CSSProperties}/>
      <circle className="radar__sinal radar__sinal--2" cx="432.28" cy="180.89" r="27" style={{ '--atraso': '0.29s' } as React.CSSProperties}/>
      <circle className="radar__prioritaria" cx="212.31" cy="221.04" r="7" style={{ '--atraso': '1.91s' } as React.CSSProperties}/><circle className="radar__prioritaria" cx="432.28" cy="180.89" r="7" style={{ '--atraso': '0.29s' } as React.CSSProperties}/><circle className="radar__prioritaria" cx="320.38" cy="395.86" r="7" style={{ '--atraso': '1.03s' } as React.CSSProperties}/>
      <g className="radar__varredura"><line x1="300" y1="300" x2="300" y2="20"/></g>
      <circle className="radar__centro" cx="300" cy="300" r="3"/>
    </svg>
  </figure></div>
      </aside>
      <article className="frente frente--02 revelar" style={{ '--i': '1' } as React.CSSProperties}>
    <h3 className="titulo-3 frente__titulo">ABM<span className="ri__dp"> —</span> <span className="frente__complemento">Marketing baseado em contas</span></h3>
    <p className="frente__texto">Marketing e vendas trabalhando nas mesmas empresas, com abordagens adequadas a cada contexto.</p>
    <ul className="entregaveis"><li>Mapeamento de decisores e participantes da compra.</li><li>Mensagens e conteúdos por grupo de contas.</li><li>Cadências de contato e ações coordenadas no LinkedIn.</li></ul>
  </article><article className="frente frente--03 revelar" style={{ '--i': '2' } as React.CSSProperties}>
    <h3 className="titulo-3 frente__titulo">Processo comercial</h3>
    <p className="frente__texto">Criar continuidade entre a primeira conversa, a oportunidade e o contrato.</p>
    <ul className="entregaveis"><li>Critérios de qualificação e etapas do funil.</li><li>Materiais de apoio à conversa e à proposta.</li><li>Rotinas de acompanhamento e revisão do pipeline.</li></ul>
  </article><article className="frente frente--04 revelar" style={{ '--i': '3' } as React.CSSProperties}>
    <h3 className="titulo-3 frente__titulo">RevOps<span className="ri__dp"> —</span> <span className="frente__complemento">Operações de receita</span></h3>
    <p className="frente__texto">Conectar processos, dados e ferramentas para apoiar melhores decisões comerciais.</p>
    <ul className="entregaveis"><li>Estrutura e qualidade de dados no CRM.</li><li>Acompanhamento da origem à evolução das oportunidades.</li><li>Indicadores de conversão e motivos de ganho ou perda.</li></ul>
  </article>
      <div className="glaas tema-escuro revelar">
        <div className="glaas__cabeca">
          <p className="glaas__rotulo">Liderança de growth · em todas as frentes</p>
          <h3 className="glaas__titulo" lang="en">Growth Leader as a Service</h3>
        </div>
        <p className="glaas__texto">Um líder de growth sênior da Velora define prioridades, coordena marketing, vendas e operação e mantém o sistema rodando, sem você precisar contratar um head de growth.</p>
      </div>
    </div></div>
</section><section className="secao tema-escuro como" id="como-trabalhamos">
    <div className="sangra sangra--topo">
      <div className="sangra__texto sangra__texto--esq">
        <p className="rotulo-secao"><span>Como trabalhamos</span></p>
        <h2 className="titulo-2 titulo-2--grande">Um método para decidir, executar e aprender.</h2>
        <p className="lead como__abertura revelar">O RHOI organiza o trabalho em ciclos curtos, com decisões construídas junto à liderança e às equipes.</p>
      </div>
      <figure className="sangra__foto sangra__foto--dir como__foto revela-foto foto revelar"><img className="" src="/v10/images/como-trabalhamos.webp" alt="Em uma sala de concreto, uma consultora de pé conduz a conversa com a equipe sentada ao longo de uma mesa com papéis e garrafas de água." width="1400" height="1738" loading="lazy" decoding="async" /></figure>
    </div>
    <div className="wrap">
      <div className="rhoi desenhar">
    <ol className="rhoi__lista">
      <li className="rhoi__passo" style={{ '--i': '0' } as React.CSSProperties}>
        <p className="rhoi__letra" aria-hidden="true">R</p>
        <h3 className="rhoi__nome"><span lang="en">Review</span> — Entender</h3>
        <p className="rhoi__texto">Analisamos mercado, operação e dados para localizar os principais obstáculos.</p>
      </li><li className="rhoi__passo" style={{ '--i': '1' } as React.CSSProperties}>
        <p className="rhoi__letra" aria-hidden="true">H</p>
        <h3 className="rhoi__nome"><span lang="en">Hypothesis</span> — Priorizar</h3>
        <p className="rhoi__texto">Definimos hipóteses e escolhemos o que merece atenção primeiro.</p>
      </li><li className="rhoi__passo" style={{ '--i': '2' } as React.CSSProperties}>
        <p className="rhoi__letra" aria-hidden="true">O</p>
        <h3 className="rhoi__nome"><span lang="en">Operationalize</span> — Executar</h3>
        <p className="rhoi__texto">Conduzimos as iniciativas com os responsáveis, em ciclos de duas a três semanas.</p>
      </li><li className="rhoi__passo" style={{ '--i': '3' } as React.CSSProperties}>
        <p className="rhoi__letra" aria-hidden="true">I</p>
        <h3 className="rhoi__nome"><span lang="en">Inspection</span> — Aprender</h3>
        <p className="rhoi__texto">Avaliamos a resposta do mercado e decidimos o que manter, ajustar ou interromper.</p>
      </li>
    </ol>
  </div>
    </div></section><section className="secao tema-claro para-quem" id="para-quem">
  <div className="wrap">
    <p className="rotulo-secao"><span>Para quem</span></p>
    <h2 className="titulo-2 titulo-2--grande cabeca">Para empresas que já provaram valor e querem tornar a aquisição mais consistente.</h2>
    <div className="cards-icp">
      <article className="card-icp card-icp--destaque revelar">
    <figure className="card-icp__foto foto revela-foto"><img className="" src="/v10/images/para-quem.webp" alt="Homem com um notebook nas mãos conversa com colegas em um escritório de empresa de tecnologia." width="1856" height="1237" loading="lazy" decoding="async" /></figure>
    <div className="card-icp__corpo">
      <p className="card-icp__selo">Nosso foco</p>
      <h3 className="card-icp__segmento">Tecnologia B2B</h3>
      <p className="card-icp__texto">Empresas de software e serviços de tecnologia que já têm clientes e querem crescer além das indicações.</p>
      <ul className="entregaveis card-icp__sinais"><li>Produto validado e base de clientes ativa.</li><li>Venda consultiva, com mais de um decisor.</li><li>Espaço para novas contas, segmentos ou regiões.</li></ul>
    </div>
  </article>
      <article className="card-icp revelar">
    
    <div className="card-icp__corpo">
      <h3 className="card-icp__segmento">Serviços profissionais</h3>
      <p className="card-icp__texto">Operações jurídicas, contábeis e tributárias, nas quais confiança e múltiplos envolvidos influenciam a decisão.</p>
    </div>
  </article>
      <article className="card-icp revelar">
    
    <div className="card-icp__corpo">
      <h3 className="card-icp__segmento">Serviços financeiros</h3>
      <p className="card-icp__texto">Negócios com ofertas complexas, ciclos comerciais longos e necessidade de acompanhamento das oportunidades.</p>
    </div>
  </article>
    </div>
    {/*  Reservado: dois casos verificáveis (config.mjs → casos), âncora #casos  */}</div>
</section><section className="secao tema-escuro formatos-secao" id="formatos">
  <div className="wrap">
    <p className="rotulo-secao"><span>Formas de trabalhar</span></p>
    <h2 className="titulo-2 titulo-2--grande cabeca">Um ponto de partida claro. Caminhos diferentes para executar.</h2>
    <ul className="formatos desenhar">
      <li className="formatos__item" style={{ '--i': '0' } as React.CSSProperties}>
        <p className="formatos__selo" data-foco-acid>Ponto de partida</p>
        <h3 className="titulo-3 formatos__titulo">Diagnóstico de Aquisição</h3>
        <p className="formatos__texto">Um projeto de análise e priorização que identifica obstáculos, oportunidades e um plano inicial de ação.</p>
      </li><li className="formatos__item" style={{ '--i': '1' } as React.CSSProperties}>
        <h3 className="titulo-3 formatos__titulo">Programas direcionados</h3>
        <p className="formatos__texto">Projetos com escopo e prazo definidos para implementar iniciativas específicas de aquisição.</p>
      </li><li className="formatos__item" style={{ '--i': '2' } as React.CSSProperties}>
        <h3 className="titulo-3 formatos__titulo" lang="en">Growth Leader as a Service</h3>
        <p className="formatos__texto">Modelo de acompanhamento continuado para conduzir prioridades e projetos junto à liderança da empresa.</p>
      </li>
    </ul></div>
</section><section className="secao tema-claro resultados" id="resultados">
  <div className="wrap">
    <p className="rotulo-secao"><span>Resultados</span></p>
    <h2 className="titulo-2 titulo-2--grande cabeca">O sistema em operação, com números de projetos reais.</h2>
    <p className="lead resultados__abertura revelar">Metas superadas, receita multiplicada e custo de aquisição menor quando as etapas passam a trabalhar juntas.</p>
    <div className="casos">
      <article className="caso revelar" style={{ '--i': '0' } as React.CSSProperties}>
        <p className="caso__segmento">Consultoria · Produtos B2B Enterprise</p>
        <h3 className="caso__nome">KPMG</h3>
        <p className="caso__escopo">GTM · Geração de demanda</p>
        <p className="caso__texto">Estratégia de go-to-market e geração de demanda para o time comercial de produtos B2B Enterprise. Todas as metas do ano para MQL, SQL e reuniões agendadas foram superadas.</p>
        <ul className="caso__metricas"><li className="metrica"><p className="metrica__n">+31%</p><p className="metrica__rotulo">KPMG Watch · acima da meta</p></li><li className="metrica"><p className="metrica__n">+37%</p><p className="metrica__rotulo">KPMG Krast · acima da meta</p></li><li className="metrica"><p className="metrica__n">+19%</p><p className="metrica__rotulo">KPMG Upright · acima da meta</p></li><li className="metrica"><p className="metrica__n">+370%</p><p className="metrica__rotulo">KPMG NPL · acima da meta</p></li></ul>
      </article>
      <article className="caso revelar" style={{ '--i': '1' } as React.CSSProperties}>
        <p className="caso__segmento">Serviços financeiros · Canal digital</p>
        <h3 className="caso__nome">Sabemi</h3>
        <p className="caso__escopo">Produto digital · Aquisição</p>
        <p className="caso__texto">Apoiamos o desenvolvimento de um novo super app para ampliar as vendas da Sabemi no canal digital. Resultados em 9 meses de projeto:</p>
        <ul className="caso__metricas"><li className="metrica"><p className="metrica__n">+9×</p><p className="metrica__rotulo">crescimento da receita no período</p></li><li className="metrica"><p className="metrica__n">+4%</p><p className="metrica__rotulo">na taxa de conversão</p></li><li className="metrica"><p className="metrica__n">ROI +7,2</p><p className="metrica__rotulo">retorno sobre o investimento</p></li><li className="metrica"><p className="metrica__n">−64%</p><p className="metrica__rotulo">no custo de aquisição de clientes (CAC)</p></li></ul>
      </article>
    </div>
  </div>
</section><section className="secao tema-escuro lideranca" id="lideranca">
  <div className="wrap">
    <p className="rotulo-secao"><span>Liderança</span></p>
    <div className="lideranca__cabeca">
      <h2 className="titulo-2 titulo-2--grande">Experiência que entra em campo com você.</h2>
      <p className="lead lideranca__abertura revelar">Estratégia, growth e vendas conectados por quem conhece os desafios de crescer e trabalha ao seu lado para transformar oportunidades em resultados.</p>
    </div>
    <ul className="lideres"><li className="lider revelar" style={{ '--i': '0' } as React.CSSProperties}>
        <div className="lider__topo">
          <img className="lider__foto" src="/v10/images/lideranca/bernardo-costa.webp" alt="Retrato de Bernardo Costa" width="112" height="112" loading="lazy" decoding="async" />
          <div><h3 className="lider__nome">Bernardo Costa</h3><p className="lider__papel">Estratégia &amp; Negócios</p></div>
        </div>
        <p className="lider__texto">Ajuda sua empresa a enxergar as melhores oportunidades de crescimento e conecta estratégia, marketing e vendas para definir prioridades e transformar planos em execução.</p>
      </li><li className="lider revelar" style={{ '--i': '1' } as React.CSSProperties}>
        <div className="lider__topo">
          <img className="lider__foto" src="/v10/images/lideranca/everton-henke.webp" alt="Retrato de Everton Henke" width="112" height="112" loading="lazy" decoding="async" />
          <div><h3 className="lider__nome">Everton Henke</h3><p className="lider__papel">Growth &amp; Performance</p></div>
        </div>
        <p className="lider__texto">Transforma dados e experimentação em crescimento: atrai oportunidades mais qualificadas, melhora conversões e estrutura uma operação de aquisição que evolui sempre.</p>
      </li><li className="lider revelar" style={{ '--i': '2' } as React.CSSProperties}>
        <div className="lider__topo">
          <img className="lider__foto" src="/v10/images/lideranca/leonardo-wartha.webp" alt="Retrato de Leonardo Wartha" width="112" height="112" loading="lazy" decoding="async" />
          <div><h3 className="lider__nome">Leonardo Wartha</h3><p className="lider__papel">Sales Advisor</p></div>
        </div>
        <p className="lider__texto">Atua com as lideranças comerciais para fortalecer processos, gestão e equipes, aproveitar melhor o pipeline e construir receitas mais previsíveis e recorrentes.</p>
      </li></ul>
  </div>
</section><section className="secao tema-claro conversa" id="conversa">
    <div className="sangra sangra--conversa">
      <figure className="sangra__foto sangra__foto--esq conversa__foto revela-foto foto"><img className="" src="/v10/images/conversa/elevador.webp" alt="Dois executivos conversam e sorriem dentro de um elevador de vidro, com o átrio de um edifício corporativo ao fundo." width="1200" height="1490" loading="lazy" decoding="async" /></figure>
      <div className="sangra__texto sangra__texto--dir conversa__coluna">
        <p className="rotulo-secao"><span>Conversa inicial</span></p>
        <h2 className="titulo-2 titulo-2--grande">Onde sua aquisição está travando?</h2>
        <p className="lead conversa__texto">Em 45 minutos, analisamos o caminho do mercado ao contrato e apontamos por onde começar.</p>
        {/*  Reservado: equipe validada (config.mjs → equipe), âncora #equipe  */}
        <div className="conversa__form"><form className="form" id="form-conversa" data-form noValidate
    data-msg-sucesso="Recebemos suas informações. O próximo passo é combinar a conversa inicial." data-msg-erro="Não foi possível enviar agora. Confira os campos e tente novamente." data-msg-validacao="Revise os campos destacados para continuar.">
    <div className="form__campos">
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-nome">Nome</label>
    <input className="campo__entrada" id="form-conversa-nome" name="nome" type="text" required autoComplete="name" />
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-email">E-mail corporativo</label>
    <input className="campo__entrada" id="form-conversa-email" name="email" type="email" required autoComplete="email" />
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-empresa">Empresa</label>
    <input className="campo__entrada" id="form-conversa-empresa" name="empresa" type="text" required autoComplete="organization" />
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-cargo">Cargo</label>
    <input className="campo__entrada" id="form-conversa-cargo" name="cargo" type="text" required autoComplete="organization-title" />
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-faturamento">Faixa de faturamento</label>
    <select className="campo__entrada campo__entrada--selecao" id="form-conversa-faturamento" name="faixa_faturamento">
      <option value="" selected></option>
      <option value="Até R$ 5 milhões">Até R$ 5 milhões</option><option value="R$ 5 milhões a R$ 20 milhões">R$ 5 milhões a R$ 20 milhões</option><option value="R$ 20 milhões a R$ 50 milhões">R$ 20 milhões a R$ 50 milhões</option><option value="R$ 50 milhões a R$ 100 milhões">R$ 50 milhões a R$ 100 milhões</option><option value="Acima de R$ 100 milhões">Acima de R$ 100 milhões</option>
    </select>
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-desafio">Principal desafio</label>
    <select className="campo__entrada campo__entrada--selecao" id="form-conversa-desafio" name="principal_desafio" required>
      <option value="" disabled selected></option>
      <option value="Abrir novas contas ou mercados">Abrir novas contas ou mercados</option><option value="Conectar marketing e vendas">Conectar marketing e vendas</option><option value="Melhorar conversão comercial">Melhorar conversão comercial</option><option value="Medir aquisição e pipeline">Medir aquisição e pipeline</option><option value="Expandir negócios na base">Expandir negócios na base</option><option value="Outro">Outro</option>
    </select>
  </div>
      <div className="campo">
    <label className="campo__rotulo" htmlFor="form-conversa-whatsapp">WhatsApp profissional</label>
    <input className="campo__entrada" id="form-conversa-whatsapp" name="whatsapp" type="tel" required autoComplete="tel" placeholder="(00) 00000-0000" />
  </div>
    </div>
    <div className="form__acoes">
      <button className="botao botao--primario" type="submit" data-cta-principal><span>Agendar conversa de diagnóstico</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></button>
      <p className="form__micro">Conversa inicial, sem compromisso de contratação.</p>
    </div>
    
    <p className="form__status" data-status role="status" aria-live="polite" tabIndex={-1}></p>
  </form></div>
        
      </div>
    </div></section>
</main>
<footer className="rodape tema-escuro" aria-labelledby="rodape-titulo">
  <h2 className="sr-only" id="rodape-titulo">Rodapé</h2>
  <img className="rodape__simbolo" src="/v10/images/rodape/simbolo.webp" alt="" width="720" height="720" loading="lazy" decoding="async" data-rodape-simbolo />
  <div className="wrap">
    <div className="rodape__topo">
      <div className="rodape__marca revelar">
        <a className="rodape__logo-link" href="#inicio" aria-label="Velora · Growth &amp; Beyond, voltar ao início">
          <img className="rodape__logo" src="/v10/images/rodape/logo.webp" alt="Velora · Growth &amp; Beyond" width="640" height="191" loading="lazy" decoding="async" />
        </a>
        <p className="rodape__descricao">Diagnosticamos e operamos sistemas de aquisição B2B. Profundidade de consultoria, velocidade de agência.</p>
      </div>
      <div className="rodape__chamada revelar" style={{ '--i': '1' } as React.CSSProperties}>
        <p className="rodape__chamada-titulo">Quer saber onde seu funil está perdendo receita?</p>
        <a className="botao botao--primario" href="#conversa"><span>Agendar diagnóstico</span><svg className="seta" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M1.5 8h12M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a>
      </div>
    </div>

    <div className="rodape__colunas">
      <div className="rodape__coluna revelar" style={{ '--i': '0' } as React.CSSProperties}>
        <h3 className="rodape__titulo">Porto Alegre</h3>
        <address className="rodape__endereco">
          <a href="https://www.google.com/maps/search/?api=1&amp;query=Av.+Carlos+Gomes%2C+700+-+Auxiliadora%2C+Porto+Alegre+-+RS" target="_blank" rel="noopener">Av. Carlos Gomes, 700 – Auxiliadora<br />Porto Alegre/RS</a>
          <a className="rodape__email" href="mailto:contato@veloraconsulting.com.br">contato@veloraconsulting.com.br</a>
        </address>
        {/* Links oficiais LinkedIn e Instagram da Velora */}
        <ul className="rodape__redes">
          <li><a href="https://www.linkedin.com/company/growth-with-velora" target="_blank" rel="noopener noreferrer" data-rede="linkedin" aria-label="Velora no LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 13.4c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58.98-3.02 1.67V8.5h-3.38c.04.96 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.69.89-1.4 1.94-1.4 1.37 0 1.92 1.05 1.92 2.58V20h3.38v-6.6Z" fill="currentColor"/></svg></a></li>
          <li><a href="https://www.instagram.com/growth.with.velora/" target="_blank" rel="noopener noreferrer" data-rede="instagram" aria-label="Velora no Instagram"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" strokeWidth="1.6"/><circle cx="17.1" cy="6.9" r="1.1" fill="currentColor"/></svg></a></li>
        </ul>
      </div>
      <nav className="rodape__coluna revelar" style={{ '--i': '1' } as React.CSSProperties} aria-labelledby="rodape-fazemos">
        <h3 className="rodape__titulo" id="rodape-fazemos">O que fazemos</h3>
        <ul className="rodape__links"><li><a href="#formatos">Diagnóstico de aquisição</a></li><li><a href="#entregas">Estruturação de Marketing</a></li><li><a href="#entregas">Mídia paga B2B e B2C</a></li><li><a href="#entregas">CRM e operação de receita</a></li><li><a href="#etapa-conversao">Otimização da conversão</a></li><li><a href="#etapa-medicao">Inteligência de dados</a></li></ul>
      </nav>
      <nav className="rodape__coluna revelar" style={{ '--i': '2' } as React.CSSProperties} aria-labelledby="rodape-como">
        <h3 className="rodape__titulo" id="rodape-como">Como fazemos</h3>
        <ul className="rodape__links"><li><a href="#entregas">Account-Based Marketing</a></li><li><a href="#entregas">RevOps</a></li><li><a href="#formatos">Projetos de Growth</a></li><li><a href="#formatos"><span lang="en">Growth Leader as a Service</span></a></li><li><a href="#sistema">Growth &amp; Data Strategy</a></li><li><a href="#como-trabalhamos">Método RHOI</a></li></ul>
      </nav>
      <nav className="rodape__coluna revelar" style={{ '--i': '3' } as React.CSSProperties} aria-labelledby="rodape-quem">
        <h3 className="rodape__titulo" id="rodape-quem">Quem somos</h3>
        <ul className="rodape__links"><li><a href="#inicio">A Velora</a></li><li><a href="#resultados">Resultados</a></li><li><a href="#lideranca">Liderança</a></li><li><a href="#conversa">Falar com um sócio</a></li></ul>
      </nav>
    </div>

    <div className="rodape__base">
      <div className="rodape__legal">
        <p className="rodape__razao">Velora Growth &amp; Beyond Ltda.</p>
        <p className="rodape__cnpj">CNPJ 59.588.823/0001-22<span className="rodape__sep" aria-hidden="true">|</span>© 2026 Todos os direitos reservados</p>
      </div>
      <ul className="rodape__politicas"><li><a href="/politica-de-privacidade">Política de privacidade</a></li><li><a href="/termos-de-uso">Termos de uso</a></li><li><a className="rodape__subir" href="#inicio">Voltar ao topo<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 13.5V2.5M3.5 7 8 2.5 12.5 7" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg></a></li></ul>
    </div>
  </div>
</footer>

    </div>
  );
};

export default HomeV10;
