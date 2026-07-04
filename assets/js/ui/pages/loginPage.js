// loginPage.js — Controller da pagina de login
// Gerencia o formulario de autenticacao
// TODO: substituir mock por chamada real a API de autenticacao

import { query, on } from '../../core/dom.js';

// Credenciais mock — remover quando API de auth estiver pronta
const USUARIOS_MOCK = [
  { email: 'admin@nhcstudio.com', senha: 'admin123', nome: 'Admin NHC', role: 'admin' },
  { email: 'gestor@nhcstudio.com', senha: 'gestor123', nome: 'Gestor NHC', role: 'gestor' }
];

/**
 * Inicializa a pagina de login
 * Deve ser chamado no DOMContentLoaded do login.html
 */
export function inicializarLogin() {
  const form = query('#form-login');
  const msgErro = query('#login-erro');

  if (!form) return;

  on(form, 'submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim().toLowerCase();
    const senha = form.senha.value;

    const usuario = autenticar(email, senha);

    if (usuario) {
      // Salva sessao no sessionStorage
      // TODO: substituir por JWT/token da API
      sessionStorage.setItem('nhc_usuario', JSON.stringify(usuario));
      window.location.href = './dashboard.html';
    } else {
      if (msgErro) {
        msgErro.textContent = 'Email ou senha invalidos.';
        msgErro.hidden = false;
      }
    }
  });
}

/**
 * Valida credenciais contra o mock
 * @param {string} email
 * @param {string} senha
 * @returns {Object|null} usuario autenticado ou null
 */
function autenticar(email, senha) {
  // TODO: substituir por fetch POST /api/auth/login
  return USUARIOS_MOCK.find(u => u.email === email && u.senha === senha) || null;
}

// Auto-inicializa ao carregar o script
inicializarLogin();
