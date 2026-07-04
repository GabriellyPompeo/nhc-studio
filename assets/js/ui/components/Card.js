// Card.js — Componente de card reutilizavel
// Gera elementos de card para metricas, modelos, etc.
// TODO: futuramente receber dados da API em vez do state.js

import { createElement } from '../../core/dom.js';

/**
 * Cria um card de metrica do dashboard
 * @param {string} titulo - Titulo do card
 * @param {string|number} valor - Valor principal
 * @param {string} icone - Emoji ou icone
 * @param {string} cor - Variante de cor (primary, success, warning, info)
 * @returns {HTMLElement}
 */
export function criarCardMetrica(titulo, valor, icone, cor = 'primary') {
  const card = createElement('div', {
    className: `card card--metrica card--${cor}`
  });

  const iconEl = createElement('span', {
    className: 'card__icone',
    textContent: icone
  });

  const corpo = createElement('div', { className: 'card__corpo' });

  const tituloEl = createElement('p', {
    className: 'card__titulo',
    textContent: titulo
  });

  const valorEl = createElement('h2', {
    className: 'card__valor',
    textContent: valor
  });

  corpo.appendChild(tituloEl);
  corpo.appendChild(valorEl);
  card.appendChild(iconEl);
  card.appendChild(corpo);

  return card;
}

/**
 * Cria um card de modelo (perfil)
 * @param {Object} modelo - Objeto modelo do state.js
 * @returns {HTMLElement}
 */
export function criarCardModelo(modelo) {
  const card = createElement('div', {
    className: 'card card--modelo'
  });

  const avatar = createElement('div', {
    className: 'card__avatar',
    textContent: modelo.nome.charAt(0).toUpperCase()
  });

  const info = createElement('div', { className: 'card__info' });

  const nome = createElement('h3', {
    className: 'card__nome',
    textContent: modelo.nome
  });

  const status = createElement('span', {
    className: `badge badge--${modelo.status}`,
    textContent: modelo.status
  });

  info.appendChild(nome);
  info.appendChild(status);
  card.appendChild(avatar);
  card.appendChild(info);

  return card;
}
