// Modal.js — Componente de modal reutilizavel
// Gerencia abertura, fechamento e conteudo de modais
// TODO: futuramente conectar acoes de modal com chamadas de API

import { createElement, on } from '../../core/dom.js';

let _modalAtivo = null;

/**
 * Cria e exibe um modal
 * @param {Object} opcoes
 * @param {string} opcoes.titulo - Titulo do modal
 * @param {string|HTMLElement} opcoes.conteudo - Conteudo do corpo
 * @param {Array} [opcoes.acoes] - Botoes de acao [{texto, classe, callback}]
 * @returns {HTMLElement} - Elemento do modal
 */
export function abrirModal({ titulo, conteudo, acoes = [] }) {
  fecharModal(); // fecha qualquer modal aberto

  const overlay = createElement('div', { className: 'modal-overlay modal-overlay--ativo' });
  const modal = createElement('div', { className: 'modal' });

  // Header
  const header = createElement('div', { className: 'modal__header' });
  const tituloEl = createElement('h2', { className: 'modal__titulo', textContent: titulo });
  const btnFechar = createElement('button', {
    className: 'modal__fechar btn btn--icon',
    textContent: 'x',
    type: 'button'
  });
  on(btnFechar, 'click', fecharModal);
  header.appendChild(tituloEl);
  header.appendChild(btnFechar);

  // Body
  const body = createElement('div', { className: 'modal__body' });
  if (typeof conteudo === 'string') {
    body.innerHTML = conteudo;
  } else {
    body.appendChild(conteudo);
  }

  // Footer com acoes
  const footer = createElement('div', { className: 'modal__footer' });
  acoes.forEach(({ texto, classe = 'btn--primary', callback }) => {
    const btn = createElement('button', {
      className: `btn ${classe}`,
      textContent: texto,
      type: 'button'
    });
    on(btn, 'click', callback);
    footer.appendChild(btn);
  });

  modal.appendChild(header);
  modal.appendChild(body);
  if (acoes.length) modal.appendChild(footer);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Fechar ao clicar no overlay
  on(overlay, 'click', (e) => {
    if (e.target === overlay) fecharModal();
  });

  _modalAtivo = overlay;
  return overlay;
}

/**
 * Fecha o modal atualmente aberto
 */
export function fecharModal() {
  if (_modalAtivo) {
    _modalAtivo.remove();
    _modalAtivo = null;
  }
}
