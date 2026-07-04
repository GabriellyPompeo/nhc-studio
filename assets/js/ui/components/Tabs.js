// Tabs.js — Componente de abas (tabs) reutilizavel
// Gerencia a navegacao entre paineis de conteudo
// TODO: futuramente persistir aba ativa via URL hash ou localStorage

import { createElement, on, query, queryAll } from '../../core/dom.js';

/**
 * Inicializa um componente de tabs em um container
 * @param {HTMLElement} container - Elemento pai que contem as tabs
 * @param {Array} abas - Array de {id, rotulo, conteudo (HTMLElement|string)}
 * @param {number} [abaAtiva=0] - Indice da aba inicialmente ativa
 */
export function inicializarTabs(container, abas, abaAtiva = 0) {
  const nav = createElement('nav', { className: 'tabs__nav' });
  const paineis = createElement('div', { className: 'tabs__paineis' });

  abas.forEach((aba, i) => {
    // Botao de aba
    const btn = createElement('button', {
      className: `tabs__btn${i === abaAtiva ? ' tabs__btn--ativo' : ''}`,
      textContent: aba.rotulo,
      type: 'button'
    });
    btn.dataset.tabIndex = i;

    on(btn, 'click', () => ativarAba(container, i));
    nav.appendChild(btn);

    // Painel de conteudo
    const painel = createElement('div', {
      className: `tabs__painel${i === abaAtiva ? ' tabs__painel--ativo' : ''}`,
    });
    painel.dataset.tabIndex = i;

    if (typeof aba.conteudo === 'string') {
      painel.innerHTML = aba.conteudo;
    } else {
      painel.appendChild(aba.conteudo);
    }

    paineis.appendChild(painel);
  });

  container.appendChild(nav);
  container.appendChild(paineis);
}

/**
 * Ativa uma aba pelo indice dentro de um container
 * @param {HTMLElement} container
 * @param {number} indice
 */
export function ativarAba(container, indice) {
  // Botoes
  queryAll('.tabs__btn', container).forEach((btn) => {
    btn.classList.toggle('tabs__btn--ativo', Number(btn.dataset.tabIndex) === indice);
  });

  // Paineis
  queryAll('.tabs__painel', container).forEach((painel) => {
    painel.classList.toggle('tabs__painel--ativo', Number(painel.dataset.tabIndex) === indice);
  });
}
