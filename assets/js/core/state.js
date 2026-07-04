/**
 * NHC Studio — state.js
 * Core: Estado global em memória (mock)
 * FUTURO: Substituir por chamadas de API REST quando backend estiver pronto
 */

// ── Dados mock: Modelos ──
export const modelos = [
  {
    id: 1,
    nome: 'Ana Clara Silva',
    email: 'ana.silva@email.com',
    telefone: '(51) 9 9876-5432',
    dataNascimento: '2001-03-15',
    idade: 24,
    cidade: 'Porto Alegre',
    estado: 'RS',
    altura: 1.72,
    peso: 58,
    olhos: 'Castanhos',
    cabelo: 'Castanho',
    pe: 37,
    camiseta: 'P',
    calca: 36,
    status: 'aprovado',
    dataCadastro: '2025-01-10',
    disponibilidade: true,
    observacoes: 'Excelente desenvoltura, experiencia com passarela.',
    foto: null,
  },
  {
    id: 2,
    nome: 'Beatriz Fernandes',
    email: 'beatriz.f@email.com',
    telefone: '(51) 9 9123-4567',
    dataNascimento: '2003-07-22',
    idade: 21,
    cidade: 'Caxias do Sul',
    estado: 'RS',
    altura: 1.68,
    peso: 55,
    olhos: 'Verdes',
    cabelo: 'Loiro',
    pe: 36,
    camiseta: 'PP',
    calca: 34,
    status: 'analise',
    dataCadastro: '2025-02-18',
    disponibilidade: false,
    observacoes: 'Primeira experiência, muito potencial.',
    foto: null,
  },
  {
    id: 3,
    nome: 'Camila Rocha',
    email: 'camila.r@email.com',
    telefone: '(51) 9 9555-0011',
    dataNascimento: '1999-11-05',
    idade: 26,
    cidade: 'Pelotas',
    estado: 'RS',
    altura: 1.75,
    peso: 62,
    olhos: 'Azuis',
    cabelo: 'Ruivo',
    pe: 38,
    camiseta: 'M',
    calca: 38,
    status: 'aprovado',
    dataCadastro: '2025-01-25',
    disponibilidade: true,
    observacoes: 'Portfolio extenso, experiente em editoriais.',
    foto: null,
  },
  {
    id: 4,
    nome: 'Daniela Costa',
    email: 'daniela.c@email.com',
    telefone: '(51) 9 9321-7654',
    dataNascimento: '2004-05-30',
    idade: 20,
    cidade: 'Santa Maria',
    estado: 'RS',
    altura: 1.65,
    peso: 53,
    olhos: 'Castanhos',
    cabelo: 'Preto',
    pe: 35,
    camiseta: 'PP',
    calca: 34,
    status: 'reprovado',
    dataCadastro: '2025-03-01',
    disponibilidade: true,
    observacoes: 'Necessita desenvolver portfólio.',
    foto: null,
  },
  {
    id: 5,
    nome: 'Elis Miranda',
    email: 'elis.m@email.com',
    telefone: '(51) 9 9987-3322',
    dataNascimento: '2002-09-14',
    idade: 22,
    cidade: 'Porto Alegre',
    estado: 'RS',
    altura: 1.70,
    peso: 57,
    olhos: 'Castanhos',
    cabelo: 'Castanho',
    pe: 37,
    camiseta: 'P',
    calca: 36,
    status: 'talento',
    dataCadastro: '2025-02-05',
    disponibilidade: true,
    observacoes: 'Banco de talentos. Perfil para campanhas de luxo.',
    foto: null,
  },
  {
    id: 6,
    nome: 'Fernanda Lopes',
    email: 'fernanda.l@email.com',
    telefone: '(54) 9 9111-2233',
    dataNascimento: '2000-12-20',
    idade: 25,
    cidade: 'Novo Hamburgo',
    estado: 'RS',
    altura: 1.73,
    peso: 60,
    olhos: 'Verdes',
    cabelo: 'Loiro',
    pe: 38,
    camiseta: 'M',
    calca: 38,
    status: 'analise',
    dataCadastro: '2025-03-10',
    disponibilidade: false,
    observacoes: 'Aguardando fotos atualizadas.',
    foto: null,
  },
];

// ── Dados mock: Castings ──
export const castings = [
  {
    id: 1,
    titulo: 'Campanha Primavera/Verão 2025',
    empresa: 'Renner',
    data: '2025-04-15',
    local: 'Porto Alegre',
    status: 'aberto',
    vagasTotal: 10,
    vagasPreenchidas: 4,
    descricao: 'Campanha de moda para coleção primavera/verão.',
    criado: '2025-03-01',
  },
  {
    id: 2,
    titulo: 'Editorial Revista Glamour RS',
    empresa: 'Glamour RS',
    data: '2025-04-20',
    local: 'São Paulo',
    status: 'encerrado',
    vagasTotal: 5,
    vagasPreenchidas: 5,
    descricao: 'Editorial para edição de maio.',
    criado: '2025-02-15',
  },
  {
    id: 3,
    titulo: 'Desfile Semana de Moda Gaucha',
    empresa: 'FIERGS',
    data: '2025-05-10',
    local: 'Porto Alegre',
    status: 'aberto',
    vagasTotal: 20,
    vagasPreenchidas: 8,
    descricao: 'Desfile principal da Semana de Moda Gaúcha.',
    criado: '2025-03-05',
  },
];

// ── Dados mock: Empresas ──
export const empresas = [
  { id: 1, nome: 'Renner', segmento: 'Moda', cidade: 'Porto Alegre', contato: 'casting@renner.com.br' },
  { id: 2, nome: 'Glamour RS', segmento: 'Mídia', cidade: 'Porto Alegre', contato: 'editorial@glamourrs.com' },
  { id: 3, nome: 'FIERGS', segmento: 'Eventos', cidade: 'Porto Alegre', contato: 'moda@fiergs.org.br' },
];

// ── Dados mock: Atividades recentes ──
export const atividades = [
  { id: 1, tipo: 'aprovado', texto: 'Ana Clara Silva foi aprovada', tempo: 'agora mesmo', cor: 'success' },
  { id: 2, tipo: 'casting', texto: 'Casting Semana de Moda Gaucha criado', tempo: 'ha 2 horas', cor: 'accent' },
  { id: 3, tipo: 'cadastro', texto: 'Fernanda Lopes se cadastrou', tempo: 'ha 5 horas', cor: 'primary' },
  { id: 4, tipo: 'analise', texto: 'Beatriz Fernandes em analise', tempo: 'ontem', cor: 'warning' },
  { id: 5, tipo: 'empresa', texto: 'FIERGS cadastrada como empresa', tempo: 'ha 2 dias', cor: 'info' },
];

// ── Computed: Métricas do dashboard ──
export function getMetricas() {
  return {
    total: modelos.length,
    aprovados: modelos.filter(m => m.status === 'aprovado').length,
    analise: modelos.filter(m => m.status === 'analise').length,
    reprovados: modelos.filter(m => m.status === 'reprovado').length,
    talentos: modelos.filter(m => m.status === 'talento').length,
    novosMes: modelos.filter(m => {
      const d = new Date(m.dataCadastro);
      const agora = new Date();
      return d.getMonth() === agora.getMonth() && d.getFullYear() === agora.getFullYear();
    }).length,
  };
}

// ── Computed: Cadastros por mês (para o gráfico de linhas) ──
export function getCadastrosPorMes() {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const counts = new Array(12).fill(0);
  modelos.forEach(m => {
    const mes = new Date(m.dataCadastro).getMonth();
    counts[mes]++;
  });
  return meses.map((label, i) => ({ label, value: counts[i] }));
}
