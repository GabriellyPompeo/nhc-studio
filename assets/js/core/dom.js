/**
 * NHC Studio — dom.js
 * Core: Helpers para manipulação do DOM
 * Ponto de futura integração: substituir por React/Vue quando migrar
 */

// ── Query helpers ──

/** Seleciona um elemento no DOM */
export function qs(selector, root = document) {
  return root.querySelector(selector);
}

/** Seleciona todos os elementos no DOM */
export function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

/** Seleciona elemento por ID */
export function byId(id) {
  return document.getElementById(id);
}

// ── Criação de elementos ──

/**
 * Cria um elemento HTML com atributos e filhos
 * @param {string} tag
 * @param {object} attrs
 * @param {...(string|HTMLElement)} children
 */
export function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'class') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dKey, dVal]) => {
        element.dataset[dKey] = dVal;
      });
    } else if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
  });

  return element;
}

// ── Classes ──

export function addClass(el, ...classes) {
  el.classList.add(...classes);
}

export function removeClass(el, ...classes) {
  el.classList.remove(...classes);
}

export function toggleClass(el, cls, force) {
  el.classList.toggle(cls, force);
}

export function hasClass(el, cls) {
  return el.classList.contains(cls);
}

// ── Atributos ──

export function setAttr(el, attr, value) {
  el.setAttribute(attr, value);
}

export function getAttr(el, attr) {
  return el.getAttribute(attr);
}

export function removeAttr(el, attr) {
  el.removeAttribute(attr);
}

// ── Conteúdo ──

export function setText(el, text) {
  el.textContent = text;
}

export function setHTML(el, html) {
  el.innerHTML = html;
}

export function empty(el) {
  el.innerHTML = '';
}

// ── Visibilidade ──

export function show(el) {
  el.style.display = '';
  removeClass(el, 'hidden');
}

export function hide(el) {
  el.style.display = 'none';
}

export function toggle(el, condition) {
  if (condition === undefined) {
    el.style.display = el.style.display === 'none' ? '' : 'none';
  } else {
    condition ? show(el) : hide(el);
  }
}

// ── Eventos ──

/**
 * Adiciona listener com suporte a delegação de eventos
 * @param {HTMLElement} parent - Elemento pai
 * @param {string} event - Tipo do evento
 * @param {string} selector - Seletor CSS do alvo
 * @param {Function} handler - Função de callback
 */
export function on(parent, event, selector, handler) {
  if (typeof selector === 'function') {
    // Sem delegação
    parent.addEventListener(event, selector);
    return;
  }
  // Com delegação
  parent.addEventListener(event, (e) => {
    const target = e.target.closest(selector);
    if (target && parent.contains(target)) {
      handler.call(target, e);
    }
  });
}

/** Remove listener */
export function off(el, event, handler) {
  el.removeEventListener(event, handler);
}

// ── Formulários ──

/** Pega o valor de um input */
export function val(input) {
  return input.value.trim();
}

/** Reseta todos os campos de um formulário */
export function resetForm(form) {
  form.reset();
  qsa('.form-input.error, .form-textarea.error', form).forEach(el => {
    removeClass(el, 'error');
  });
  qsa('.form-error', form).forEach(el => empty(el));
}

// ── Utilitarios de DOM ──

/** Aguarda o DOM estar pronto */
export function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/** Escapa HTML para evitar XSS */
export function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
