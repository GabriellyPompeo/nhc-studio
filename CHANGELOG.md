# Changelog — NHC Studio

Todas as mudancas notaveis neste projeto serao documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Unreleased]

### Adicionado
- Estrutura modular de pastas: `public/`, `assets/css/`, `assets/js/core/`, `assets/js/ui/components/`, `assets/js/ui/pages/`
- Design System em `assets/css/base.css` com tokens de cor, tipografia e espacamento
- Shell Layout (Sidebar + Topbar) em `assets/css/layout.css`
- Componentes CSS: `buttons.css`, `cards.css`, `forms.css`, `badges.css`, `tables.css`, `modals.css`
- CSS de pagina: `login.css`, `dashboard.css`
- Utilitarios JS em `assets/js/core/dom.js` (helpers de query, criacao, eventos)
- Dados mock e computed em `assets/js/core/state.js`
- Componentes JS: `Card.js`, `Badge.js`, `Modal.js`, `Tabs.js`
- Controllers de pagina: `loginPage.js`, `dashboardPage.js`
- Templates HTML: `public/login.html`, `public/dashboard.html`

### Alterado
- Refatoracao da estrutura de pastas para arquitetura modular orientada a componentes
- Separacao de responsabilidades entre CSS global, componentes e paginas

### Proximos passos (TODO)
- Substituir dados mock do `state.js` por chamadas REST a uma API backend
- Implementar autenticacao real com JWT em `loginPage.js`
- Adicionar paginas: `modelos.html`, `castings.html`, `empresas.html`, `agenda.html`
- Implementar grafico de linha de cadastros por mes no dashboard
- Considerar migracao para React/Vite mantendo os componentes atuais como base

---

## [0.1.0] — Estrutura inicial

### Adicionado
- Repositorio criado com estrutura inicial do CRM NHC Studio
- Versao monolitica inicial (pre-refatoracao)
