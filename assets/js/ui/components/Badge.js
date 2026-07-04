// Badge.js — Componente de badge/tag de status
// Usado para indicar status de modelos, castings, etc.
// TODO: futuramente mapear status vindos da API

import { createElement } from '../../core/dom.js';

// Mapa de labels para exibicao amigavel
const LABELS = {
  aprovado: 'Aprovado',
  reprovado: 'Reprovado',
  analise: 'Em Analise',
  talento: 'Talento',
  pendente: 'Pendente',
  ativo: 'Ativo',
  inativo: 'Inativo'
};

/**
 * Cria um badge de status
 * @param {string} status - Chave do status (ex: 'aprovado', 'analise')
 * @param {string} [tamanho='md'] - Tamanho do badge: 'sm', 'md', 'lg'
 * @returns {HTMLElement}
 */
export function criarBadge(status, tamanho = 'md') {
  const label = LABELS[status] || status;

  const badge = createElement('span', {
    className: `badge badge--${status} badge--${tamanho}`,
    textContent: label
  });

  return badge;
}

/**
 * Atualiza o status de um badge ja existente no DOM
 * @param {HTMLElement} badgeEl - Elemento badge existente
 * @param {string} novoStatus - Novo status a aplicar
 */
export function atualizarBadge(badgeEl, novoStatus) {
  // Remove classes de status anteriores
  badgeEl.className = badgeEl.className.replace(/badge--[a-z]+(?= |$)/g, '').trim();
  badgeEl.classList.add(`badge--${novoStatus}`);
  badgeEl.textContent = LABELS[novoStatus] || novoStatus;
}
