// dashboardPage.js — Controller do dashboard principal
// Renderiza metricas, atividades e graficos com dados do state.js
// TODO: substituir getMetricas() e atividades por chamadas a API REST

import { query, queryAll, createElement } from '../../core/dom.js';
import { getMetricas, atividades } from '../../core/state.js';
import { criarCardMetrica } from '../components/Card.js';
import { criarBadge } from '../components/Badge.js';

/**
 * Inicializa o dashboard
 * Deve ser chamado no DOMContentLoaded do dashboard.html
 */
export function inicializarDashboard() {
  verificarSessao();
  renderizarNomeUsuario();
  renderizarMetricas();
  renderizarAtividades();
}

/**
 * Redireciona para login se nao houver sessao ativa
 */
function verificarSessao() {
  const usuario = sessionStorage.getItem('nhc_usuario');
  // TODO: substituir por verificacao de token JWT com a API
  if (!usuario) {
    window.location.href = './login.html';
  }
}

/**
 * Exibe o nome do usuario logado no topbar
 */
function renderizarNomeUsuario() {
  const usuario = JSON.parse(sessionStorage.getItem('nhc_usuario') || '{}');
  const el = query('#usuario-nome');
  if (el && usuario.nome) {
    el.textContent = usuario.nome;
  }
}

/**
 * Renderiza os cards de metricas no container de metricas
 * TODO: buscar dados de GET /api/dashboard/metricas
 */
function renderizarMetricas() {
  const container = query('#metricas-grid');
  if (!container) return;

  const metricas = getMetricas();

  const config = [
    { titulo: 'Total de Modelos', valor: metricas.total, icone: '👤', cor: 'primary' },
    { titulo: 'Aprovados', valor: metricas.aprovados, icone: '✅', cor: 'success' },
    { titulo: 'Em Analise', valor: metricas.analise, icone: '🔍', cor: 'warning' },
    { titulo: 'Novos este mes', valor: metricas.novosMes, icone: '✨', cor: 'info' }
  ];

  container.innerHTML = '';
  config.forEach(({ titulo, valor, icone, cor }) => {
    container.appendChild(criarCardMetrica(titulo, valor, icone, cor));
  });
}

/**
 * Renderiza a lista de atividades recentes
 * TODO: buscar dados de GET /api/dashboard/atividades
 */
function renderizarAtividades() {
  const lista = query('#atividades-lista');
  if (!lista) return;

  lista.innerHTML = '';

  atividades.forEach((ativ) => {
    const item = createElement('li', { className: 'atividade-item' });

    const badge = criarBadge(ativ.cor, 'sm');

    const texto = createElement('span', {
      className: 'atividade-item__texto',
      textContent: ativ.texto
    });

    const tempo = createElement('small', {
      className: 'atividade-item__tempo',
      textContent: ativ.tempo
    });

    item.appendChild(badge);
    item.appendChild(texto);
    item.appendChild(tempo);
    lista.appendChild(item);
  });
}

// Auto-inicializa ao carregar o script
inicializarDashboard();
