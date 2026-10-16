'use strict';

/* =========================================================
   Ícones
   ========================================================= */
const ICONS = {
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  money: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  more: '<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  up: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  down: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
  gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  print: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  left: '<polyline points="15 18 9 12 15 6"/>',
  right: '<polyline points="9 18 15 12 9 6"/>',
  back: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  card: '<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  tooth: '<path d="M12 3c-2 0-3.2.8-4.5.8S5 3 4.2 4.2C3.2 5.8 3.6 8.4 4.3 11c.6 2.4.9 9.5 3.1 9.5 1.6 0 1.8-4 2.3-5.6.3-1 .9-1.6 2.3-1.6s2 .6 2.3 1.6c.5 1.6.7 5.6 2.3 5.6 2.2 0 2.5-7.1 3.1-9.5.7-2.6 1.1-5.2.1-6.8C19 3 17.8 3.8 16.5 3.8S14 3 12 3z"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="22" x2="9" y2="18"/><line x1="15" y1="22" x2="15" y2="18"/><line x1="8" y1="6" x2="8.01" y2="6"/><line x1="12" y1="6" x2="12.01" y2="6"/><line x1="16" y1="6" x2="16.01" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/><line x1="8" y1="14" x2="8.01" y2="14"/><line x1="12" y1="14" x2="12.01" y2="14"/><line x1="16" y1="14" x2="16.01" y2="14"/>'
};
const icon = (n) => `<svg viewBox="0 0 24 24">${ICONS[n] || ''}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    if (!el.dataset.done) { el.innerHTML = icon(el.dataset.icon); el.dataset.done = '1'; }
  });
}

/* =========================================================
   Constantes de domínio
   ========================================================= */
const APPT_STATUS = {
  agendado: { label: 'Agendado', cls: 'b-teal' },
  confirmado: { label: 'Confirmado', cls: 'b-blue' },
  concluido: { label: 'Concluído', cls: 'b-green' },
  cancelado: { label: 'Cancelado', cls: 'b-red' },
  faltou: { label: 'Faltou', cls: 'b-orange' }
};
const TREAT_STATUS = {
  planejado: { label: 'Planejado', cls: 'b-gray' },
  andamento: { label: 'Em andamento', cls: 'b-orange' },
  concluido: { label: 'Concluído', cls: 'b-green' }
};
const TOOTH_STATUS = {
  higido: { label: 'Hígido', abbr: '', cls: 'b-gray' },
  carie: { label: 'Cárie', abbr: 'C', cls: 'b-red' },
  restaurado: { label: 'Restaurado', abbr: 'R', cls: 'b-blue' },
  canal: { label: 'Canal', abbr: 'TC', cls: 'b-purple' },
  coroa: { label: 'Coroa', abbr: 'CO', cls: 'b-orange' },
  implante: { label: 'Implante', abbr: 'I', cls: 'b-green' },
  extracao: { label: 'Extração indicada', abbr: 'X', cls: 'b-red' },
  ausente: { label: 'Ausente', abbr: 'A', cls: 'b-gray' }
};
const CONDITIONS = [
  'Hipertensão', 'Diabetes', 'Cardiopatia', 'Asma / Bronquite', 'Hepatite', 'HIV',
  'Epilepsia', 'Problemas de coagulação', 'Gestante', 'Fumante', 'Anemia', 'Problemas renais',
  'Osteoporose', 'Uso de anticoagulante', 'Alergia a anestésico', 'Alergia a penicilina',
  'Bruxismo', 'Sangramento gengival'
];
const INSURANCES = ['Particular', 'Amil Dental', 'OdontoPrev', 'Bradesco Dental', 'SulAmérica Odonto', 'Unimed Odonto', 'MetLife', 'Porto Seguro Odonto', 'Outro'];
const UFS = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const PAY_METHODS = ['PIX', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Boleto', 'Transferência', 'Convênio'];
const TX_CATEGORIES = {
  receita: ['Tratamento', 'Consulta', 'Convênio', 'Outros'],
  despesa: ['Materiais', 'Aluguel', 'Salários', 'Laboratório', 'Impostos', 'Equipamentos', 'Marketing', 'Contas (água/luz/internet)', 'Outros']
};
const AVATAR_COLORS = ['#0e9f9a', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#ef4444', '#6366f1', '#14b8a6', '#f97316'];
const UPPER_TEETH = [[18, 17, 16, 15, 14, 13, 12, 11], [21, 22, 23, 24, 25, 26, 27, 28]];
const LOWER_TEETH = [[48, 47, 46, 45, 44, 43, 42, 41], [31, 32, 33, 34, 35, 36, 37, 38]];

/* =========================================================
   Banco de dados (localStorage)
   ========================================================= */
const DB_KEY = 'odontoclinic_db_v1';
function defaultDB() {
  return {
    settings: {
      clinicName: 'OdontoClinic', cro: '', phone: '', email: '', address: '', cnpj: '',
      dentists: ['Dr(a). Responsável'],
      procedures: [
        ['Consulta / Avaliação', 150], ['Limpeza (Profilaxia)', 200], ['Aplicação de flúor', 80],
        ['Restauração em resina', 250], ['Tratamento de canal', 900], ['Extração simples', 250],
        ['Extração de siso', 500], ['Raspagem periodontal', 300], ['Clareamento dental', 1200],
        ['Coroa de porcelana', 1800], ['Implante dentário', 3500], ['Prótese total', 2500],
        ['Manutenção ortodôntica', 180], ['Instalação de aparelho', 1500], ['Radiografia panorâmica', 120]
      ].map(([name, price]) => ({ id: uid(), name, price }))
    },
    patients: [], appointments: [], treatments: [], transactions: []
  };
}
function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      const def = defaultDB();
      return { ...def, ...data, settings: { ...def.settings, ...(data.settings || {}) } };
    }
  } catch (e) { console.error(e); }
  return defaultDB();
}
function saveDB() {
  try { localStorage.setItem(DB_KEY, JSON.stringify(db)); }
  catch (e) { toast('Não foi possível salvar os dados: ' + e.message, 'error'); }
}

/* =========================================================
   Utilitários
   ========================================================= */
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = (n) => String(n).padStart(2, '0');
const toISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const todayISO = () => toISO(new Date());
const parseISO = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const fmtDate = (s) => (s ? s.split('-').reverse().join('/') : '-');
const money = (v) => (Number(v) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const digits = (s) => String(s || '').replace(/\D/g, '');
const monthKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}`;
const shiftMonth = (ym, delta) => { const [y, m] = ym.split('-').map(Number); return monthKey(new Date(y, m - 1 + delta, 1)); };
const monthLabel = (ym) => { const [y, m] = ym.split('-').map(Number); return new Date(y, m - 1, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); };
const longDate = (iso) => parseISO(iso).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
const timeToMin = (t) => { const [h, m] = (t || '0:0').split(':').map(Number); return h * 60 + m; };

function age(birth) {
  if (!birth) return null;
  const b = parseISO(birth), t = new Date();
  let a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return a;
}
function initials(name) {
  const parts = String(name || '?').trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}
function avatarColor(name) {
  let h = 0;
  for (const c of String(name)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}
const avatar = (name, lg = false) => `<div class="avatar${lg ? ' lg' : ''}" style="background:${avatarColor(name)}">${esc(initials(name))}</div>`;

const MASKS = {
  cpf: (v) => {
    v = digits(v).slice(0, 11);
    return v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  },
  phone: (v) => {
    v = digits(v).slice(0, 11);
    if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    if (v.length > 6) return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    if (v.length > 2) return v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    return v.length ? '(' + v : '';
  },
  cep: (v) => digits(v).slice(0, 8).replace(/(\d{5})(\d{1,3})/, '$1-$2'),
  cnpj: (v) => {
    v = digits(v).slice(0, 14);
    return v.replace(/(\d{2})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2').replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
};
function validCPF(cpf) {
  const c = digits(cpf);
  if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
  for (let t = 9; t < 11; t++) {
    let s = 0;
    for (let i = 0; i < t; i++) s += Number(c[i]) * (t + 1 - i);
    if (((10 * s) % 11) % 10 !== Number(c[t])) return false;
  }
  return true;
}

const getPatient = (id) => db.patients.find((p) => p.id === id);
const patientName = (id) => getPatient(id)?.name || '—';
const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
const apptSort = (a, b) => (a.date + a.time).localeCompare(b.date + b.time);
function nextAppt(pid) {
  const now = todayISO();
  return db.appointments.filter((a) => a.patientId === pid && a.date >= now && ['agendado', 'confirmado'].includes(a.status)).sort(apptSort)[0];
}
function lastVisit(pid) {
  return db.appointments.filter((a) => a.patientId === pid && a.status === 'concluido').sort(apptSort).pop();
}
const badge = (map, key) => { const s = map[key] || { label: key, cls: 'b-gray' }; return `<span class="badge ${s.cls}">${esc(s.label)}</span>`; };
const emptyState = (ic, text) => `<div class="empty">${icon(ic)}<div>${text}</div></div>`;
const whatsLink = (phone) => { const d = digits(phone); return d.length >= 10 ? `https://wa.me/55${d}` : null; };
function isOverdue(t) { return t.status === 'pendente' && t.date < todayISO(); }

/* =========================================================
   Estado e UI base
   ========================================================= */
let db = loadDB();
const state = {
  view: 'dashboard',
  patientId: null,
  patientTab: 'resumo',
  patientsMode: localStorage.getItem('oc_mode') || 'grid',
  patientsSort: 'name',
  patientsCare: 'ativo',
  brush: 'carie',
  agendaDate: todayISO(),
  calMonth: monthKey(),
  financeMonth: monthKey(),
  financeType: 'all',
  financeStatus: 'all'
};

function isActiveCare(p) { return (p.careStatus || 'ativo') !== 'historico'; }
function patientTreatmentsOf(id) { return db.treatments.filter((t) => t.patientId === id); }
function hasOpenTreatments(id) { return patientTreatmentsOf(id).some((t) => t.status !== 'concluido'); }
function lastFinishedTreat(id) {
  return patientTreatmentsOf(id).filter((t) => t.status === 'concluido')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))[0] || null;
}

function toast(msg, type = 'ok') {
  const el = document.createElement('div');
  el.className = 'toast ' + (type === 'ok' ? '' : type);
  el.innerHTML = `${icon(type === 'ok' ? 'check' : 'alert')}<span>${esc(msg)}</span>`;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = '.3s'; }, 2800);
  setTimeout(() => el.remove(), 3200);
}

function openModal({ title, body, footer = '', size = '' }) {
  $('#modal').className = 'modal ' + size;
  $('#modalTitle').textContent = title;
  $('#modalBody').innerHTML = body;
  $('#modalFooter').innerHTML = footer;
  $('#modalBackdrop').classList.add('open');
  hydrateIcons($('#modal'));
  const first = $('#modalBody input:not([type=hidden]):not([type=checkbox]), #modalBody select, #modalBody textarea');
  if (first) setTimeout(() => first.focus(), 50);
}
function closeModal() { $('#modalBackdrop').classList.remove('open'); }

let confirmCallback = null;
function confirmDialog(message, onYes, { okText = 'Excluir', danger = true, title = 'Confirmação' } = {}) {
  confirmCallback = onYes;
  openModal({
    title, size: 'sm',
    body: `<p>${message}</p>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button>
             <button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-action="confirm-yes">${esc(okText)}</button>`
  });
}

/* Helpers de formulário */
function field(name, label, { col = 6, type = 'text', value = '', req = false, mask = '', placeholder = '', options = null, attrs = '', hint = '' } = {}) {
  const v = esc(value ?? '');
  let input;
  if (options) {
    input = `<select class="input" name="${name}" id="f_${name}" ${attrs}>${options.map((o) => {
      const [val, lab] = Array.isArray(o) ? o : [o, o];
      return `<option value="${esc(val)}" ${String(val) === String(value ?? '') ? 'selected' : ''}>${esc(lab)}</option>`;
    }).join('')}</select>`;
  } else if (type === 'textarea') {
    input = `<textarea class="input" name="${name}" id="f_${name}" placeholder="${esc(placeholder)}" ${attrs}>${v}</textarea>`;
  } else {
    input = `<input class="input" type="${type}" name="${name}" id="f_${name}" value="${v}" placeholder="${esc(placeholder)}" ${mask ? `data-mask="${mask}"` : ''} ${attrs}>`;
  }
  return `<div class="field col-${col}"><label for="f_${name}">${esc(label)}${req ? ' <span class="req">*</span>' : ''}</label>${input}${hint ? `<div class="hint">${hint}</div>` : ''}</div>`;
}
function formData(sel) {
  const form = $(sel);
  const fd = new FormData(form);
  const data = {};
  for (const [k, v] of fd.entries()) data[k] = typeof v === 'string' ? v.trim() : v;
  return { data, fd, form };
}
function markInvalid(name, msg) {
  const el = $(`#f_${name}`);
  if (el) {
    el.classList.add('invalid');
    const panel = el.closest('[data-panel]');
    if (panel) activateTab(panel.closest('.modal-body, .card'), panel.dataset.panel);
    el.focus();
  }
  toast(msg, 'error');
}
function activateTab(container, tab) {
  if (!container) return;
  $$('.tab[data-tab]', container).forEach((t) => t.classList.toggle('active', t.dataset.tab === tab));
  $$('[data-panel]', container).forEach((p) => p.classList.toggle('active', p.dataset.panel === tab));
}
const patientOptions = (withEmpty = false) => [
  ...(withEmpty ? [['', '— Nenhum —']] : [['', 'Selecione o paciente...']]),
  ...sortByName(db.patients).map((p) => [p.id, p.name])
];
const dentistOptions = (current) => {
  const list = [...db.settings.dentists];
  if (current && !list.includes(current)) list.push(current);
  return list.length ? list : ['—'];
};
const procedureOptions = (current) => {
  const list = db.settings.procedures.map((p) => p.name);
  if (current && !list.includes(current)) list.push(current);
  return list;
};

/* =========================================================
   Roteamento
   ========================================================= */
const VIEWS = {
  dashboard: { title: 'Painel', sub: 'Visão geral do consultório', render: renderDashboard },
  patients: { title: 'Pacientes', sub: 'Cadastro e gerenciamento de pacientes', render: renderPatients, after: renderPatientsList },
  patient: { title: 'Prontuário do paciente', sub: 'Dados, anamnese, odontograma e histórico', render: renderPatient },
  agenda: { title: 'Agenda', sub: 'Consultas e horários', render: renderAgenda },
  finance: { title: 'Financeiro', sub: 'Receitas, despesas e contas a receber', render: renderFinance },
  settings: { title: 'Configurações', sub: 'Dados da clínica, equipe, procedimentos e backup', render: renderSettings }
};
function go(view, opts = {}) {
  Object.assign(state, opts);
  state.view = view;
  render();
  window.scrollTo(0, 0);
}
function render() {
  const v = VIEWS[state.view] || VIEWS.dashboard;
  $('#pageTitle').textContent = v.title;
  $('#pageSubtitle').textContent = v.sub;
  $('#content').innerHTML = v.render();
  if (v.after) v.after();
  hydrateIcons($('#content'));
  const navView = state.view === 'patient' ? 'patients' : state.view;
  $$('#nav a').forEach((a) => a.classList.toggle('active', a.dataset.view === navView));
  $('#brandName').textContent = db.settings.clinicName || 'OdontoClinic';
  document.title = `${db.settings.clinicName || 'OdontoClinic'} - ${v.title}`;
  $('#sidebar').classList.remove('open');
}

/* =========================================================
   PAINEL
   ========================================================= */
function statCard(ic, color, label, value, hint = '') {
  return `<div class="stat-card"><div class="stat-icon ${color}">${icon(ic)}</div>
    <div><div class="stat-label">${label}</div><div class="stat-value">${value}</div>${hint ? `<div class="stat-hint">${hint}</div>` : ''}</div></div>`;
}
function renderDashboard() {
  const today = todayISO();
  const mk = monthKey();
  const newThisMonth = db.patients.filter((p) => (p.createdAt || '').startsWith(mk)).length;
  const todayAppts = db.appointments.filter((a) => a.date === today).sort(apptSort);
  const activeToday = todayAppts.filter((a) => a.status !== 'cancelado');
  const confirmed = todayAppts.filter((a) => a.status === 'confirmado').length;
  const income = db.transactions.filter((t) => t.type === 'receita' && t.status === 'pago' && (t.paidDate || t.date).startsWith(mk)).reduce((s, t) => s + Number(t.value), 0);
  const expense = db.transactions.filter((t) => t.type === 'despesa' && t.status === 'pago' && (t.paidDate || t.date).startsWith(mk)).reduce((s, t) => s + Number(t.value), 0);
  const receivable = db.transactions.filter((t) => t.type === 'receita' && t.status === 'pendente');
  const overdue = receivable.filter(isOverdue).length;
  const ongoing = db.treatments.filter((t) => t.status !== 'concluido');

  const curMonth = new Date().getMonth();
  const birthdays = db.patients.filter((p) => p.birth && parseISO(p.birth).getMonth() === curMonth)
    .sort((a, b) => parseISO(a.birth).getDate() - parseISO(b.birth).getDate());

  const upcoming = db.appointments.filter((a) => a.date > today && ['agendado', 'confirmado'].includes(a.status)).sort(apptSort).slice(0, 6);

  return `
  <div class="stats">
    ${statCard('users', 'c-teal', 'Pacientes cadastrados', db.patients.length, `${newThisMonth} novo(s) este mês`)}
    ${statCard('calendar', 'c-blue', 'Consultas hoje', activeToday.length, `${confirmed} confirmada(s)`)}
    ${statCard('up', 'c-green', 'Receita do mês', money(income), `Despesas: ${money(expense)}`)}
    ${statCard('wallet', 'c-orange', 'A receber', money(receivable.reduce((s, t) => s + Number(t.value), 0)), overdue ? `<span style="color:var(--danger)">${overdue} vencido(s)</span>` : 'Nenhum vencido')}
    ${statCard('activity', 'c-purple', 'Tratamentos em aberto', ongoing.length, `${db.treatments.filter((t) => t.status === 'concluido').length} concluído(s) no total`)}
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><h3>${icon('clock')} Agenda de hoje</h3>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm" data-action="nav" data-view="agenda">Ver agenda</button>
          <button class="btn btn-sm btn-primary" data-action="new-appt" data-date="${today}">${icon('plus')} Agendar</button>
        </div>
      </div>
      <div class="card-body">
        ${todayAppts.length ? todayAppts.map((a) => `
          <div class="list-item">
            <div class="time-pill">${esc(a.time)}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;cursor:pointer" data-action="open-patient" data-id="${a.patientId}">${esc(patientName(a.patientId))}</div>
              <div class="small muted">${esc(a.procedure)} · ${esc(a.dentist)}</div>
            </div>
            ${badge(APPT_STATUS, a.status)}
          </div>`).join('') : emptyState('calendar', 'Nenhuma consulta agendada para hoje.')}
      </div>
    </div>

    <div class="card">
      <div class="card-header"><h3>${icon('gift')} Aniversariantes do mês</h3><span class="badge b-teal">${birthdays.length}</span></div>
      <div class="card-body">
        ${birthdays.length ? birthdays.slice(0, 8).map((p) => {
          const d = parseISO(p.birth);
          const isToday = d.getDate() === new Date().getDate();
          const verb = d.getDate() < new Date().getDate() ? 'fez' : 'faz';
          const wa = whatsLink(p.mobile);
          return `<div class="list-item">
            ${avatar(p.name)}
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;cursor:pointer" data-action="open-patient" data-id="${p.id}">${esc(p.name)}</div>
              <div class="small muted">${pad(d.getDate())}/${pad(d.getMonth() + 1)} · ${verb} ${new Date().getFullYear() - d.getFullYear()} anos ${isToday ? '<span class="badge b-green">Hoje!</span>' : ''}</div>
            </div>
            ${wa ? `<a class="btn-icon" title="Enviar parabéns no WhatsApp" target="_blank" href="${wa}?text=${encodeURIComponent(`Olá ${p.name.split(' ')[0]}! A equipe ${db.settings.clinicName} deseja um feliz aniversário!`)}">${icon('message')}</a>` : ''}
          </div>`;
        }).join('') : emptyState('gift', 'Nenhum aniversariante neste mês.')}
      </div>
    </div>
  </div>

  <div class="grid-2" style="margin-top:22px">
    <div class="card">
      <div class="card-header"><h3>${icon('money')} Receitas x Despesas (últimos 6 meses)</h3>
        <div class="legend"><span class="l-in">Receitas</span><span class="l-out">Despesas</span></div>
      </div>
      <div class="card-body">${renderChart()}</div>
    </div>
    <div class="card">
      <div class="card-header"><h3>${icon('calendar')} Próximas consultas</h3></div>
      <div class="card-body">
        ${upcoming.length ? upcoming.map((a) => `
          <div class="list-item">
            <div class="time-pill" style="min-width:74px">${fmtDate(a.date).slice(0, 5)}<br><span class="small">${esc(a.time)}</span></div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;cursor:pointer" data-action="open-patient" data-id="${a.patientId}">${esc(patientName(a.patientId))}</div>
              <div class="small muted">${esc(a.procedure)}</div>
            </div>
            ${badge(APPT_STATUS, a.status)}
          </div>`).join('') : emptyState('calendar', 'Sem consultas futuras.')}
      </div>
    </div>
  </div>

  <div class="card" style="margin-top:22px">
    <div class="card-header"><h3>${icon('userPlus')} Pacientes recentes</h3>
      <button class="btn btn-sm" data-action="nav" data-view="patients">Ver todos</button></div>
    <div class="table-wrap">
      ${db.patients.length ? `<table><thead><tr><th>Paciente</th><th>Celular</th><th>Cidade</th><th>Convênio</th><th>Cadastro</th></tr></thead><tbody>
        ${[...db.patients].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')).slice(0, 5).map((p) => `
          <tr style="cursor:pointer" data-action="open-patient" data-id="${p.id}">
            <td><div style="display:flex;gap:10px;align-items:center">${avatar(p.name)}<strong>${esc(p.name)}</strong></div></td>
            <td>${esc(p.mobile || p.phone || '-')}</td>
            <td>${esc([p.city, p.state].filter(Boolean).join(' / ') || '-')}</td>
            <td>${esc(p.insurance || 'Particular')}</td>
            <td>${fmtDate(p.createdAt)}</td>
          </tr>`).join('')}
      </tbody></table>` : `<div class="card-body">${emptyState('users', 'Nenhum paciente cadastrado ainda.<br><br><button class="btn btn-primary" data-action="new-patient">Cadastrar primeiro paciente</button> <button class="btn" data-action="sample-data">Carregar dados de exemplo</button>')}</div>`}
    </div>
  </div>`;
}
function renderChart() {
  const months = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - i);
    const k = monthKey(d);
    const sum = (type) => db.transactions.filter((t) => t.type === type && t.status === 'pago' && (t.paidDate || t.date).startsWith(k)).reduce((s, t) => s + Number(t.value), 0);
    months.push({ label: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''), inc: sum('receita'), exp: sum('despesa') });
  }
  const max = Math.max(1, ...months.flatMap((m) => [m.inc, m.exp]));
  return `<div class="chart">${months.map((m) => `
    <div class="bar-col">
      <div class="bar-pair">
        <div class="bar in" style="height:${(m.inc / max) * 100}%" title="Receitas: ${money(m.inc)}"></div>
        <div class="bar out" style="height:${(m.exp / max) * 100}%" title="Despesas: ${money(m.exp)}"></div>
      </div>
      <div class="bar-label">${m.label}</div>
    </div>`).join('')}</div>`;
}

/* =========================================================
   PACIENTES
   ========================================================= */
function renderPatients() {
  const activeN = db.patients.filter(isActiveCare).length;
  const histN = db.patients.filter((p) => !isActiveCare(p)).length;
  const isHist = state.patientsCare === 'historico';
  return `
  <div class="care-switch">
    <button class="${!isHist ? 'active' : ''}" data-action="set-care" data-care="ativo">${icon('activity')} Em atendimento <span class="badge ${!isHist ? 'b-teal' : 'b-gray'}">${activeN}</span></button>
    <button class="${isHist ? 'active' : ''}" data-action="set-care" data-care="historico">${icon('database')} Histórico <span class="badge ${isHist ? 'b-green' : 'b-gray'}">${histN}</span></button>
  </div>
  ${isHist ? `<div class="card history-banner" style="margin-bottom:18px">
    <div class="card-body" style="display:flex;gap:14px;align-items:flex-start">
      ${icon('database')}
      <div>
        <strong>Histórico de pacientes com tratamento finalizado</strong>
        <p class="muted small" style="margin:6px 0 0">Aqui ficam os pacientes cujo atendimento foi concluído. Ao retornar, use <strong>Retomar atendimento</strong> para movê-los de volta à área Em atendimento, com todo o prontuário e histórico preservados.</p>
      </div>
    </div>
  </div>` : ''}
  <div class="toolbar">
    <input class="input" id="patientFilter" data-input="patient-filter" placeholder="Filtrar por nome, CPF, telefone ou cidade..." value="${esc(state.patientsFilter || '')}">
    <select class="input" style="max-width:200px" data-change="patient-sort">
      <option value="name" ${state.patientsSort === 'name' ? 'selected' : ''}>Ordenar: Nome (A-Z)</option>
      <option value="recent" ${state.patientsSort === 'recent' ? 'selected' : ''}>Ordenar: Mais recentes</option>
    </select>
    <div class="view-switch">
      <button class="${state.patientsMode === 'grid' ? 'active' : ''}" data-action="set-mode" data-mode="grid" title="Cards">${icon('grid')}</button>
      <button class="${state.patientsMode === 'table' ? 'active' : ''}" data-action="set-mode" data-mode="table" title="Lista">${icon('list')}</button>
    </div>
    <span class="muted" id="patientCount"></span>
    ${!isHist ? `<button class="btn btn-primary" style="margin-left:auto" data-action="new-patient">${icon('userPlus')} Cadastrar paciente</button>` : '<div style="margin-left:auto"></div>'}
  </div>
  <div id="patientsList"></div>`;
}
function renderPatientsList() {
  const q = (state.patientsFilter || '').toLowerCase().trim();
  const qd = digits(q);
  const wantHist = state.patientsCare === 'historico';
  let list = db.patients.filter((p) => wantHist ? !isActiveCare(p) : isActiveCare(p));
  list = list.filter((p) => !q
    || p.name.toLowerCase().includes(q)
    || (p.city || '').toLowerCase().includes(q)
    || (p.email || '').toLowerCase().includes(q)
    || (qd && (digits(p.cpf).includes(qd) || digits(p.mobile).includes(qd) || digits(p.phone).includes(qd))));
  list = state.patientsSort === 'recent'
    ? list.sort((a, b) => ((wantHist ? b.archivedAt : b.createdAt) || '').localeCompare((wantHist ? a.archivedAt : a.createdAt) || ''))
    : sortByName(list);

  $('#patientCount').textContent = `${list.length} paciente(s)`;
  const box = $('#patientsList');
  if (!list.length) {
    const emptyMsg = wantHist
      ? 'Nenhum paciente no histórico.<br>Ao finalizar o tratamento, use <strong>Finalizar e salvar no histórico</strong> no prontuário.'
      : (db.patients.length
        ? 'Nenhum paciente em atendimento para o filtro.'
        : 'Nenhum paciente cadastrado.<br><br><button class="btn btn-primary" data-action="new-patient">Cadastrar paciente</button> <button class="btn" data-action="sample-data">Carregar dados de exemplo</button>');
    box.innerHTML = `<div class="card"><div class="card-body">${emptyState(wantHist ? 'database' : 'users', emptyMsg)}</div></div>`;
    return;
  }
  if (state.patientsMode === 'grid') {
    box.innerHTML = `<div class="patient-grid">${list.map((p) => {
      const na = nextAppt(p.id);
      const a = age(p.birth);
      const alerts = (p.conditions || []).length || p.allergies;
      const finished = lastFinishedTreat(p.id);
      const openN = patientTreatmentsOf(p.id).filter((t) => t.status !== 'concluido').length;
      return `<div class="patient-card" data-action="open-patient" data-id="${p.id}">
        <div class="patient-top">${avatar(p.name)}
          <div style="min-width:0;flex:1">
            <div class="patient-name">${esc(p.name)}</div>
            <div class="small muted">${a !== null ? a + ' anos' : 'Idade não informada'}${p.gender ? ' · ' + esc(p.gender) : ''}</div>
          </div>
          ${alerts ? `<span class="badge b-red" title="Possui alertas de saúde">${icon('alert')}</span>` : ''}
        </div>
        <div class="patient-meta">
          <div>${icon('phone')} ${esc(p.mobile || p.phone || 'Sem telefone')}</div>
          <div>${icon('mail')} ${esc(p.email || 'Sem e-mail')}</div>
          <div>${icon('pin')} ${esc([p.district, p.city, p.state].filter(Boolean).join(', ') || 'Endereço não informado')}</div>
          <div>${icon('card')} ${esc(p.insurance || 'Particular')}</div>
          ${wantHist
            ? `<div>${icon('clipboard')} ${finished ? esc(finished.procedure) + ' · ' + fmtDate(finished.date) : 'Sem procedimentos concluídos'}</div>`
            : `<div>${icon('activity')} ${openN} tratamento(s) em aberto</div>`}
        </div>
        <div>${wantHist
          ? `<span class="badge b-green">${icon('check')} Finalizado${p.archivedAt ? ' em ' + fmtDate(p.archivedAt) : ''}</span>`
          : (na ? `<span class="badge b-blue">${icon('clock')} Próxima: ${fmtDate(na.date)} às ${esc(na.time)}</span>` : '<span class="badge b-gray">Sem consulta agendada</span>')}</div>
        <div class="patient-actions">
          ${wantHist
            ? `<button class="btn btn-sm btn-primary" data-action="restore-patient" data-id="${p.id}">${icon('back')} Retomar atendimento</button>`
            : `<button class="btn btn-sm" data-action="new-appt" data-patient="${p.id}">${icon('calendar')} Agendar</button>
               <button class="btn btn-sm" data-action="archive-patient" data-id="${p.id}" title="Salvar no histórico">${icon('check')} Histórico</button>`}
          <button class="btn-icon" title="Editar" data-action="edit-patient" data-id="${p.id}">${icon('edit')}</button>
          <button class="btn-icon danger" title="Excluir" data-action="delete-patient" data-id="${p.id}">${icon('trash')}</button>
        </div>
      </div>`;
    }).join('')}</div>`;
  } else {
    box.innerHTML = `<div class="card"><div class="table-wrap"><table>
      <thead><tr><th>Paciente</th><th>CPF</th><th>Celular</th><th>${wantHist ? 'Último tratamento' : 'Cidade/UF'}</th><th>${wantHist ? 'Finalizado em' : 'Convênio'}</th><th>${wantHist ? 'Procedimentos' : 'Última visita'}</th><th></th></tr></thead>
      <tbody>${list.map((p) => {
        const lv = lastVisit(p.id);
        const finished = lastFinishedTreat(p.id);
        const treats = patientTreatmentsOf(p.id);
        return `<tr style="cursor:pointer" data-action="open-patient" data-id="${p.id}">
          <td><div style="display:flex;gap:10px;align-items:center">${avatar(p.name)}<div><strong>${esc(p.name)}</strong><div class="small muted">${esc(p.email || '')}</div></div></div></td>
          <td>${esc(p.cpf || '-')}</td>
          <td>${esc(p.mobile || p.phone || '-')}</td>
          <td>${wantHist ? esc(finished?.procedure || '-') : esc([p.city, p.state].filter(Boolean).join(' / ') || '-')}</td>
          <td>${wantHist ? (p.archivedAt ? fmtDate(p.archivedAt) : '-') : esc(p.insurance || 'Particular')}</td>
          <td>${wantHist ? `${treats.filter((t) => t.status === 'concluido').length} concluído(s)` : (lv ? fmtDate(lv.date) : '-')}</td>
          <td class="td-actions">
            ${wantHist
              ? `<button class="btn btn-sm btn-primary" data-action="restore-patient" data-id="${p.id}">${icon('back')} Retomar</button>`
              : `<button class="btn-icon" title="Agendar" data-action="new-appt" data-patient="${p.id}">${icon('calendar')}</button>
                 <button class="btn-icon" title="Salvar no histórico" data-action="archive-patient" data-id="${p.id}">${icon('check')}</button>`}
            <button class="btn-icon" title="Editar" data-action="edit-patient" data-id="${p.id}">${icon('edit')}</button>
            <button class="btn-icon danger" title="Excluir" data-action="delete-patient" data-id="${p.id}">${icon('trash')}</button>
          </td></tr>`;
      }).join('')}</tbody></table></div></div>`;
  }
}

function patientFormModal(id, startTab = 't1') {
  const p = id ? getPatient(id) : {};
  const cond = p.conditions || [];
  const tab = (k, ic, label) => `<div class="tab ${startTab === k ? 'active' : ''}" data-tab="${k}">${icon(ic)} ${label}</div>`;
  const panel = (k, html) => `<div class="tab-panel ${startTab === k ? 'active' : ''}" data-panel="${k}"><div class="form-grid">${html}</div></div>`;
  openModal({
    title: id ? `Editar paciente — ${p.name}` : 'Cadastrar novo paciente',
    body: `
    <div class="tabs">
      ${tab('t1', 'user', 'Dados pessoais')}
      ${tab('t2', 'pin', 'Endereço')}
      ${tab('t3', 'heart', 'Saúde / Anamnese')}
      ${tab('t4', 'card', 'Convênio e responsável')}
    </div>
    <form id="patientForm" autocomplete="off" onsubmit="return false">
      ${panel('t1', `
        ${field('name', 'Nome completo', { col: 8, value: p.name, req: true, placeholder: 'Nome e sobrenome' })}
        ${field('birth', 'Data de nascimento', { col: 4, type: 'date', value: p.birth })}
        ${field('cpf', 'CPF', { col: 4, value: p.cpf, mask: 'cpf', placeholder: '000.000.000-00' })}
        ${field('rg', 'RG', { col: 4, value: p.rg })}
        ${field('gender', 'Sexo', { col: 4, value: p.gender, options: ['', 'Feminino', 'Masculino', 'Outro'] })}
        ${field('civil', 'Estado civil', { col: 4, value: p.civil, options: ['', 'Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União estável'] })}
        ${field('profession', 'Profissão', { col: 4, value: p.profession })}
        ${field('referral', 'Como conheceu a clínica', { col: 4, value: p.referral, options: ['', 'Indicação', 'Instagram', 'Google', 'Facebook', 'Convênio', 'Passou em frente', 'Outro'] })}
        <div class="form-section-title">Contato</div>
        ${field('mobile', 'Celular / WhatsApp', { col: 4, value: p.mobile, mask: 'phone', placeholder: '(00) 00000-0000' })}
        ${field('phone', 'Telefone fixo', { col: 4, value: p.phone, mask: 'phone', placeholder: '(00) 0000-0000' })}
        ${field('email', 'E-mail', { col: 4, type: 'email', value: p.email, placeholder: 'email@exemplo.com' })}
      `)}
      ${panel('t2', `
        <div class="field col-4"><label for="f_cep">CEP</label>
          <div class="input-group"><input class="input" name="cep" id="f_cep" value="${esc(p.cep || '')}" data-mask="cep" data-input="cep" placeholder="00000-000">
          <button type="button" class="btn" data-action="cep-lookup" title="Buscar endereço pelo CEP">${icon('search')}</button></div>
          <div class="hint" id="cepHint">Digite o CEP para preencher automaticamente.</div>
        </div>
        ${field('street', 'Logradouro (rua, avenida...)', { col: 8, value: p.street })}
        ${field('number', 'Número', { col: 3, value: p.number })}
        ${field('complement', 'Complemento', { col: 5, value: p.complement, placeholder: 'Apto, bloco, sala...' })}
        ${field('district', 'Bairro', { col: 4, value: p.district })}
        ${field('city', 'Cidade', { col: 8, value: p.city })}
        ${field('state', 'UF', { col: 4, value: p.state, options: ['', ...UFS] })}
      `)}
      ${panel('t3', `
        <div class="field col-12"><label>Condições de saúde / histórico médico</label>
          <div class="check-grid">${CONDITIONS.map((c) => `<label class="check"><input type="checkbox" name="conditions" value="${esc(c)}" ${cond.includes(c) ? 'checked' : ''}> ${esc(c)}</label>`).join('')}</div>
        </div>
        ${field('allergies', 'Alergias', { col: 6, type: 'textarea', value: p.allergies, placeholder: 'Medicamentos, látex, alimentos...' })}
        ${field('medications', 'Medicamentos em uso', { col: 6, type: 'textarea', value: p.medications, placeholder: 'Nome e dosagem' })}
        ${field('complaint', 'Queixa principal', { col: 6, type: 'textarea', value: p.complaint, placeholder: 'Motivo da procura pelo consultório' })}
        ${field('notes', 'Observações clínicas', { col: 6, type: 'textarea', value: p.notes })}
        ${field('bloodType', 'Tipo sanguíneo', { col: 4, value: p.bloodType, options: ['', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] })}
        ${field('lastDentist', 'Última ida ao dentista', { col: 4, value: p.lastDentist, options: ['', 'Menos de 6 meses', '6 meses a 1 ano', '1 a 2 anos', 'Mais de 2 anos', 'Nunca foi'] })}
        ${field('brushing', 'Escovações por dia', { col: 4, value: p.brushing, options: ['', '1', '2', '3', '4 ou mais'] })}
      `)}
      ${panel('t4', `
        <div class="form-section-title">Convênio odontológico</div>
        ${field('insurance', 'Convênio', { col: 6, value: p.insurance || 'Particular', options: INSURANCES })}
        ${field('insuranceNumber', 'Nº da carteirinha', { col: 6, value: p.insuranceNumber })}
        ${field('insuranceValid', 'Validade', { col: 6, type: 'date', value: p.insuranceValid })}
        ${field('insurancePlan', 'Plano', { col: 6, value: p.insurancePlan })}
        <div class="form-section-title">Responsável (menores de idade)</div>
        ${field('guardian', 'Nome do responsável', { col: 6, value: p.guardian })}
        ${field('guardianRelation', 'Parentesco', { col: 3, value: p.guardianRelation, options: ['', 'Mãe', 'Pai', 'Avó/Avô', 'Tio(a)', 'Tutor(a)', 'Outro'] })}
        ${field('guardianPhone', 'Telefone', { col: 3, value: p.guardianPhone, mask: 'phone' })}
        ${field('guardianCpf', 'CPF do responsável', { col: 6, value: p.guardianCpf, mask: 'cpf' })}
      `)}
    </form>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button>
             <button class="btn btn-primary" data-action="save-patient" data-id="${id || ''}">${icon('check')} Salvar paciente</button>`
  });
}

async function lookupCEP() {
  const input = $('#f_cep');
  const hint = $('#cepHint');
  const cep = digits(input.value);
  if (cep.length !== 8) { hint.textContent = 'CEP deve ter 8 dígitos.'; return; }
  hint.textContent = 'Buscando endereço...';
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if (data.erro) { hint.innerHTML = '<span style="color:var(--danger)">CEP não encontrado.</span>'; return; }
    $('#f_street').value = data.logradouro || '';
    $('#f_district').value = data.bairro || '';
    $('#f_city').value = data.localidade || '';
    $('#f_state').value = data.uf || '';
    hint.innerHTML = '<span style="color:var(--success)">Endereço preenchido! Informe o número.</span>';
    $('#f_number').focus();
  } catch {
    hint.innerHTML = '<span style="color:var(--warning)">Sem conexão com a internet — preencha manualmente.</span>';
  }
}

function savePatient(id) {
  const { data, fd } = formData('#patientForm');
  data.conditions = fd.getAll('conditions');
  $$('#patientForm .invalid').forEach((e) => e.classList.remove('invalid'));
  if (!data.name) return markInvalid('name', 'Informe o nome do paciente.');
  if (data.cpf && !validCPF(data.cpf)) return markInvalid('cpf', 'CPF inválido.');
  if (data.cpf && db.patients.some((p) => p.cpf === data.cpf && p.id !== id)) return markInvalid('cpf', 'Já existe um paciente com este CPF.');
  if (data.guardianCpf && !validCPF(data.guardianCpf)) return markInvalid('guardianCpf', 'CPF do responsável inválido.');
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) return markInvalid('email', 'E-mail inválido.');
  if (data.birth && data.birth > todayISO()) return markInvalid('birth', 'Data de nascimento no futuro.');

  if (id) {
    Object.assign(getPatient(id), data, { updatedAt: todayISO() });
    toast('Paciente atualizado com sucesso.');
  } else {
    const p = { id: uid(), ...data, odontogram: {}, createdAt: todayISO() };
    db.patients.push(p);
    toast('Paciente cadastrado com sucesso.');
    state.patientId = p.id;
  }
  saveDB();
  closeModal();
  if (!id) go('patient', { patientId: state.patientId, patientTab: 'resumo' });
  else render();
}

function deletePatient(id) {
  const p = getPatient(id);
  confirmDialog(`Excluir o paciente <strong>${esc(p.name)}</strong>? Todas as consultas, tratamentos e lançamentos vinculados também serão removidos. Esta ação não pode ser desfeita.`, () => {
    db.patients = db.patients.filter((x) => x.id !== id);
    db.appointments = db.appointments.filter((x) => x.patientId !== id);
    db.treatments = db.treatments.filter((x) => x.patientId !== id);
    db.transactions = db.transactions.filter((x) => x.patientId !== id);
    saveDB();
    toast('Paciente excluído.');
    if (state.view === 'patient') go('patients'); else render();
  });
}

/* =========================================================
   PRONTUÁRIO DO PACIENTE
   ========================================================= */
function infoItem(k, v) { return `<div class="info-item"><div class="k">${k}</div><div class="v">${v ? esc(v) : '<span class="muted">—</span>'}</div></div>`; }

function renderPatient() {
  const p = getPatient(state.patientId);
  if (!p) { state.view = 'patients'; return renderPatients(); }
  const a = age(p.birth);
  const wa = whatsLink(p.mobile);
  const tabs = [['resumo', 'user', 'Resumo'], ['anamnese', 'heart', 'Anamnese'], ['odontograma', 'tooth', 'Odontograma'], ['tratamentos', 'clipboard', 'Tratamentos'], ['consultas', 'calendar', 'Consultas'], ['financeiro', 'money', 'Financeiro']];
  const hasAlert = (p.conditions || []).length || p.allergies;
  const panels = { resumo: patientResumo, anamnese: patientAnamnese, odontograma: patientOdonto, tratamentos: patientTreatments, consultas: patientAppointments, financeiro: patientFinance };

  const active = isActiveCare(p);
  return `
  <div class="no-print" style="margin-bottom:14px"><button class="btn btn-sm" data-action="nav" data-view="patients">${icon('back')} Voltar para pacientes</button></div>
  <div class="card">
    <div class="profile-head">
      ${avatar(p.name, true)}
      <div>
        <h2>${esc(p.name)}</h2>
        <div class="profile-tags">
          ${active ? '<span class="badge b-orange">Em atendimento</span>' : '<span class="badge b-green">Histórico</span>'}
          ${a !== null ? `<span class="badge b-teal">${a} anos</span>` : ''}
          ${p.gender ? `<span class="badge b-gray">${esc(p.gender)}</span>` : ''}
          <span class="badge b-blue">${icon('card')} ${esc(p.insurance || 'Particular')}</span>
          ${p.cpf ? `<span class="badge b-gray">CPF ${esc(p.cpf)}</span>` : ''}
          <span class="badge b-gray">Paciente desde ${fmtDate(p.createdAt)}</span>
          ${!active && p.archivedAt ? `<span class="badge b-gray">Finalizado em ${fmtDate(p.archivedAt)}</span>` : ''}
        </div>
      </div>
      <div class="profile-actions no-print">
        ${active
          ? `<button class="btn btn-primary" data-action="new-appt" data-patient="${p.id}">${icon('calendar')} Agendar</button>
             <button class="btn" data-action="archive-patient" data-id="${p.id}">${icon('check')} Finalizar e salvar no histórico</button>`
          : `<button class="btn btn-primary" data-action="restore-patient" data-id="${p.id}">${icon('back')} Retomar atendimento</button>`}
        ${wa ? `<a class="btn" target="_blank" href="${wa}">${icon('message')} WhatsApp</a>` : ''}
        <button class="btn" data-action="edit-patient" data-id="${p.id}">${icon('edit')} Editar</button>
        <button class="btn" data-action="print">${icon('print')} Imprimir</button>
        <button class="btn-icon danger" title="Excluir paciente" data-action="delete-patient" data-id="${p.id}">${icon('trash')}</button>
      </div>
    </div>
  </div>
  ${hasAlert ? `<div class="alert-box">${icon('alert')}<div><strong>Atenção — alertas de saúde:</strong>
    ${(p.conditions || []).map(esc).join(', ')}${p.allergies ? `${(p.conditions || []).length ? ' · ' : ''}Alergias: ${esc(p.allergies)}` : ''}</div></div>` : ''}
  <div class="tabs no-print">${tabs.map(([k, ic, l]) => `<div class="tab ${state.patientTab === k ? 'active' : ''}" data-action="patient-tab" data-tab-name="${k}">${icon(ic)} ${l}</div>`).join('')}</div>
  ${(panels[state.patientTab] || patientResumo)(p)}`;
}

function patientResumo(p) {
  const appts = db.appointments.filter((a) => a.patientId === p.id);
  const txs = db.transactions.filter((t) => t.patientId === p.id && t.type === 'receita');
  const paid = txs.filter((t) => t.status === 'pago').reduce((s, t) => s + Number(t.value), 0);
  const pending = txs.filter((t) => t.status === 'pendente').reduce((s, t) => s + Number(t.value), 0);
  const na = nextAppt(p.id);
  const address = [p.street && `${p.street}${p.number ? ', ' + p.number : ''}`, p.complement, p.district, p.city && `${p.city}${p.state ? ' - ' + p.state : ''}`, p.cep && `CEP ${p.cep}`].filter(Boolean).join(' · ');
  return `
  <div class="stats">
    ${statCard('calendar', 'c-blue', 'Consultas', appts.length, `${appts.filter((a) => a.status === 'concluido').length} concluída(s)`)}
    ${statCard('clock', 'c-teal', 'Próxima consulta', na ? fmtDate(na.date) : '—', na ? `${esc(na.time)} · ${esc(na.procedure)}` : 'Nenhuma agendada')}
    ${statCard('check', 'c-green', 'Total pago', money(paid))}
    ${statCard('wallet', pending ? 'c-red' : 'c-orange', 'Em aberto', `<span style="color:${pending ? 'var(--danger)' : 'inherit'}">${money(pending)}</span>`)}
  </div>
  <div class="grid-equal">
    <div class="card"><div class="card-header"><h3>${icon('user')} Dados pessoais</h3></div>
      <div class="card-body info-grid">
        ${infoItem('Nome', p.name)}${infoItem('Nascimento', p.birth ? fmtDate(p.birth) : '')}
        ${infoItem('CPF', p.cpf)}${infoItem('RG', p.rg)}
        ${infoItem('Sexo', p.gender)}${infoItem('Estado civil', p.civil)}
        ${infoItem('Profissão', p.profession)}${infoItem('Origem', p.referral)}
      </div></div>
    <div class="card"><div class="card-header"><h3>${icon('pin')} Contato e endereço</h3></div>
      <div class="card-body info-grid">
        ${infoItem('Celular', p.mobile)}${infoItem('Telefone', p.phone)}
        ${infoItem('E-mail', p.email)}${infoItem('CEP', p.cep)}
        <div class="info-item" style="grid-column:1/-1"><div class="k">Endereço completo</div><div class="v">${address ? esc(address) : '<span class="muted">—</span>'}</div></div>
      </div></div>
    <div class="card"><div class="card-header"><h3>${icon('card')} Convênio</h3></div>
      <div class="card-body info-grid">
        ${infoItem('Convênio', p.insurance || 'Particular')}${infoItem('Plano', p.insurancePlan)}
        ${infoItem('Carteirinha', p.insuranceNumber)}${infoItem('Validade', p.insuranceValid ? fmtDate(p.insuranceValid) : '')}
      </div></div>
    <div class="card"><div class="card-header"><h3>${icon('users')} Responsável</h3></div>
      <div class="card-body info-grid">
        ${infoItem('Nome', p.guardian)}${infoItem('Parentesco', p.guardianRelation)}
        ${infoItem('Telefone', p.guardianPhone)}${infoItem('CPF', p.guardianCpf)}
      </div></div>
  </div>`;
}

function patientAnamnese(p) {
  const cond = p.conditions || [];
  return `<div class="card">
    <div class="card-header"><h3>${icon('heart')} Anamnese</h3>
      <button class="btn btn-sm no-print" data-action="edit-patient" data-id="${p.id}" data-tab="t3">${icon('edit')} Editar anamnese</button></div>
    <div class="card-body">
      <div class="info-item" style="margin-bottom:16px"><div class="k">Condições de saúde</div>
        <div class="profile-tags">${cond.length ? cond.map((c) => `<span class="badge b-red">${esc(c)}</span>`).join('') : '<span class="badge b-green">Nenhuma condição relatada</span>'}</div></div>
      <div class="info-grid">
        ${infoItem('Alergias', p.allergies)}${infoItem('Medicamentos em uso', p.medications)}
        ${infoItem('Queixa principal', p.complaint)}${infoItem('Observações clínicas', p.notes)}
        ${infoItem('Tipo sanguíneo', p.bloodType)}${infoItem('Última ida ao dentista', p.lastDentist)}
        ${infoItem('Escovações por dia', p.brushing)}
      </div>
    </div></div>`;
}

function toothHTML(p, n, lower) {
  const st = p.odontogram?.[n] || 'higido';
  return `<div class="tooth ${lower ? 'lower' : ''} st-${st}" data-action="tooth" data-num="${n}" title="Dente ${n} — ${TOOTH_STATUS[st].label}">
    ${lower ? `<div class="shape">${TOOTH_STATUS[st].abbr}</div><div class="num">${n}</div>` : `<div class="num">${n}</div><div class="shape">${TOOTH_STATUS[st].abbr}</div>`}
  </div>`;
}
function patientOdonto(p) {
  const row = (halves, lower) => `<div class="odonto-row">${halves[0].map((n) => toothHTML(p, n, lower)).join('')}<div class="odonto-sep"></div>${halves[1].map((n) => toothHTML(p, n, lower)).join('')}</div>`;
  const counts = {};
  Object.values(p.odontogram || {}).forEach((s) => { counts[s] = (counts[s] || 0) + 1; });
  return `<div class="card">
    <div class="card-header"><h3>${icon('tooth')} Odontograma</h3>
      <span class="muted small no-print">Escolha uma condição na legenda e clique nos dentes para marcar. Clique novamente para desmarcar.</span></div>
    <div class="card-body">
      <div class="odonto-wrap"><div class="odonto">
        <div class="small muted" style="text-align:center">Arcada superior</div>
        ${row(UPPER_TEETH, false)}
        <div class="odonto-divider"></div>
        ${row(LOWER_TEETH, true)}
        <div class="small muted" style="text-align:center">Arcada inferior</div>
      </div></div>
      <div class="odonto-legend no-print">
        ${Object.entries(TOOTH_STATUS).map(([k, s]) => `<span class="badge ${s.cls} ${state.brush === k ? 'sel' : ''}" data-action="brush" data-status="${k}">${s.abbr ? `<strong>${s.abbr}</strong> ` : ''}${s.label}</span>`).join('')}
      </div>
      <div class="profile-tags" style="justify-content:center;margin-top:16px">
        ${Object.keys(counts).length ? Object.entries(counts).map(([k, c]) => `<span class="badge b-gray">${TOOTH_STATUS[k]?.label}: ${c}</span>`).join('') : '<span class="muted small">Nenhuma marcação registrada.</span>'}
      </div>
      <div class="field" style="margin-top:18px"><label for="odontoNotes">Observações do odontograma</label>
        <textarea class="input" id="odontoNotes" data-change="odonto-notes" data-id="${p.id}" placeholder="Anotações sobre o exame clínico...">${esc(p.odontoNotes || '')}</textarea></div>
    </div></div>`;
}

function treatRows(list) {
  return list.map((t) => `<tr>
    <td>${fmtDate(t.date)}</td>
    <td><strong>${esc(t.procedure)}</strong>${t.notes ? `<div class="small muted">${esc(t.notes)}</div>` : ''}</td>
    <td>${esc(t.tooth || '-')}</td>
    <td>${esc(t.dentist || '-')}</td>
    <td>${money(t.value)}</td>
    <td>${badge(TREAT_STATUS, t.status)}</td>
    <td class="td-actions no-print">
      <button class="btn-icon" title="Editar" data-action="edit-treat" data-id="${t.id}">${icon('edit')}</button>
      <button class="btn-icon danger" title="Excluir" data-action="delete-treat" data-id="${t.id}">${icon('trash')}</button>
    </td></tr>`).join('');
}
function patientTreatments(p) {
  const list = patientTreatmentsOf(p.id).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const open = list.filter((t) => t.status !== 'concluido');
  const doneList = list.filter((t) => t.status === 'concluido');
  const total = list.reduce((s, t) => s + Number(t.value || 0), 0);
  const done = doneList.reduce((s, t) => s + Number(t.value || 0), 0);
  const active = isActiveCare(p);
  const table = (rows) => rows.length ? `<div class="table-wrap"><table>
    <thead><tr><th>Data</th><th>Procedimento</th><th>Dente/Região</th><th>Dentista</th><th>Valor</th><th>Status</th><th></th></tr></thead>
    <tbody>${treatRows(rows)}</tbody></table></div>` : `<div class="card-body">${emptyState('clipboard', 'Nenhum procedimento nesta lista.')}</div>`;

  return `
  <div class="card" style="margin-bottom:18px">
    <div class="card-header"><h3>${icon('clipboard')} Plano de tratamento${active ? '' : ' · Histórico'}</h3>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
        <span class="muted small">Total: <strong>${money(total)}</strong> · Realizado: <strong>${money(done)}</strong></span>
        ${active
          ? `<button class="btn btn-sm btn-primary no-print" data-action="new-treat" data-patient="${p.id}">${icon('plus')} Adicionar procedimento</button>
             <button class="btn btn-sm no-print" data-action="archive-patient" data-id="${p.id}" title="Salvar no histórico">${icon('check')} Finalizar e salvar no histórico</button>`
          : `<button class="btn btn-sm btn-primary no-print" data-action="restore-patient" data-id="${p.id}">${icon('back')} Retomar atendimento</button>`}
      </div>
    </div>
    <div class="card-body" style="padding-bottom:8px">
      <h4 style="margin:0 0 10px;font-size:14px">${icon('activity')} Em atendimento <span class="badge b-orange">${open.length}</span></h4>
    </div>
    ${table(open)}
  </div>
  <div class="card">
    <div class="card-header"><h3>${icon('database')} Histórico de tratamentos finalizados</h3>
      <span class="badge b-green">${doneList.length} concluído(s)</span></div>
    ${table(doneList)}
  </div>`;
}

function patientAppointments(p) {
  const list = db.appointments.filter((a) => a.patientId === p.id).sort(apptSort).reverse();
  return `<div class="card">
    <div class="card-header"><h3>${icon('calendar')} Histórico de consultas</h3>
      <button class="btn btn-sm btn-primary no-print" data-action="new-appt" data-patient="${p.id}">${icon('plus')} Nova consulta</button></div>
    <div class="table-wrap">${list.length ? apptTable(list, false) : `<div class="card-body">${emptyState('calendar', 'Nenhuma consulta registrada.')}</div>`}</div></div>`;
}
function apptTable(list, showPatient = true) {
  return `<table><thead><tr><th>Data</th><th>Horário</th>${showPatient ? '<th>Paciente</th>' : ''}<th>Procedimento</th><th>Dentista</th><th>Status</th><th></th></tr></thead>
    <tbody>${list.map((a) => `<tr>
      <td>${fmtDate(a.date)}</td><td>${esc(a.time)}</td>
      ${showPatient ? `<td><a style="cursor:pointer;font-weight:600" data-action="open-patient" data-id="${a.patientId}">${esc(patientName(a.patientId))}</a></td>` : ''}
      <td>${esc(a.procedure)}</td><td>${esc(a.dentist)}</td><td>${badge(APPT_STATUS, a.status)}</td>
      <td class="td-actions no-print">
        <button class="btn-icon" title="Editar" data-action="edit-appt" data-id="${a.id}">${icon('edit')}</button>
        <button class="btn-icon danger" title="Excluir" data-action="delete-appt" data-id="${a.id}">${icon('trash')}</button>
      </td></tr>`).join('')}</tbody></table>`;
}

function patientFinance(p) {
  const list = db.transactions.filter((t) => t.patientId === p.id).sort((a, b) => b.date.localeCompare(a.date));
  const paid = list.filter((t) => t.type === 'receita' && t.status === 'pago').reduce((s, t) => s + Number(t.value), 0);
  const pending = list.filter((t) => t.type === 'receita' && t.status === 'pendente').reduce((s, t) => s + Number(t.value), 0);
  return `
  <div class="stats" style="margin-bottom:18px">
    ${statCard('check', 'c-green', 'Recebido', money(paid))}
    ${statCard('wallet', pending ? 'c-red' : 'c-orange', 'Pendente', `<span style="color:${pending ? 'var(--danger)' : 'inherit'}">${money(pending)}</span>`)}
  </div>
  <div class="card">
    <div class="card-header"><h3>${icon('money')} Financeiro do paciente</h3>
      <button class="btn btn-sm btn-primary no-print" data-action="new-tx" data-patient="${p.id}" data-type="receita">${icon('plus')} Novo lançamento</button></div>
    <div class="table-wrap">${list.length ? txTable(list, false) : `<div class="card-body">${emptyState('money', 'Nenhum lançamento financeiro.')}</div>`}</div></div>`;
}

/* =========================================================
   TRATAMENTOS
   ========================================================= */
function treatFormModal(id, patientId) {
  const t = id ? db.treatments.find((x) => x.id === id) : { patientId, date: todayISO(), status: 'planejado', dentist: db.settings.dentists[0] };
  const firstProc = db.settings.procedures[0];
  openModal({
    title: id ? 'Editar procedimento' : 'Adicionar procedimento ao plano',
    size: 'md',
    body: `<form id="treatForm" onsubmit="return false"><div class="form-grid">
      ${field('procedure', 'Procedimento', { col: 8, value: t.procedure || firstProc?.name, options: procedureOptions(t.procedure), attrs: 'data-change="proc-price"', req: true })}
      ${field('value', 'Valor (R$)', { col: 4, type: 'number', value: t.value ?? firstProc?.price ?? 0, attrs: 'step="0.01" min="0"' })}
      ${field('tooth', 'Dente / Região', { col: 4, value: t.tooth, placeholder: 'Ex.: 16, 21 ou Arcada sup.' })}
      ${field('dentist', 'Dentista', { col: 8, value: t.dentist, options: dentistOptions(t.dentist) })}
      ${field('date', 'Data', { col: 6, type: 'date', value: t.date })}
      ${field('status', 'Status', { col: 6, value: t.status, options: Object.entries(TREAT_STATUS).map(([k, s]) => [k, s.label]) })}
      ${field('notes', 'Observações', { col: 12, type: 'textarea', value: t.notes })}
      ${!id ? `<label class="check col-12"><input type="checkbox" name="genTx" checked> Gerar lançamento financeiro (a receber) para este procedimento</label>` : ''}
    </div></form>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button>
             <button class="btn btn-primary" data-action="save-treat" data-id="${id || ''}" data-patient="${t.patientId}">${icon('check')} Salvar</button>`
  });
}
function saveTreat(id, patientId) {
  const { data } = formData('#treatForm');
  if (!data.procedure) return markInvalid('procedure', 'Selecione o procedimento.');
  const genTx = data.genTx === 'on';
  delete data.genTx;
  data.value = Number(data.value) || 0;
  let pid = patientId;
  if (id) {
    const cur = db.treatments.find((x) => x.id === id);
    Object.assign(cur, data);
    pid = cur.patientId;
  } else {
    const t = { id: uid(), patientId, ...data };
    db.treatments.push(t);
    if (genTx && data.value > 0) {
      db.transactions.push({
        id: uid(), type: 'receita', category: 'Tratamento', description: `${data.procedure}${data.tooth ? ' (dente ' + data.tooth + ')' : ''}`,
        patientId, value: data.value, date: data.date || todayISO(), status: 'pendente', method: '', treatmentId: t.id
      });
    }
  }
  saveDB(); closeModal(); toast('Procedimento salvo.'); render();
  const p = getPatient(pid);
  if (p && isActiveCare(p) && data.status === 'concluido' && !hasOpenTreatments(pid)) {
    confirmDialog(
      `Todos os tratamentos de <strong>${esc(p.name)}</strong> estão concluídos.<br><br>Deseja salvar o paciente no <strong>histórico</strong>? Você poderá retomá-lo quando ele retornar.`,
      () => archivePatient(pid, false),
      { okText: 'Salvar no histórico', danger: false, title: 'Tratamento finalizado' }
    );
  }
}

function archivePatient(id, ask = true) {
  const p = getPatient(id);
  if (!p) return;
  const run = () => {
    p.careStatus = 'historico';
    p.archivedAt = todayISO();
    saveDB();
    toast(`${p.name} salvo no histórico.`);
    state.patientsCare = 'historico';
    if (state.view === 'patient') render();
    else go('patients');
  };
  if (!ask) return run();
  const open = hasOpenTreatments(id);
  confirmDialog(
    open
      ? `<strong>${esc(p.name)}</strong> ainda possui tratamento(s) em aberto.<br><br>Deseja mesmo finalizar e salvar no histórico?`
      : `Finalizar atendimento de <strong>${esc(p.name)}</strong> e salvar no histórico?<br><br>O prontuário e os tratamentos concluídos ficam preservados para quando o paciente retornar.`,
    run,
    { okText: 'Salvar no histórico', danger: false, title: 'Salvar no histórico' }
  );
}
function restorePatient(id) {
  const p = getPatient(id);
  if (!p) return;
  confirmDialog(
    `Retomar atendimento de <strong>${esc(p.name)}</strong>?<br><br>O paciente voltará para a área <strong>Em atendimento</strong> com todo o histórico preservado.`,
    () => {
      p.careStatus = 'ativo';
      delete p.archivedAt;
      saveDB();
      toast(`${p.name} retomado no atendimento.`);
      state.patientsCare = 'ativo';
      if (state.view === 'patient') render();
      else go('patients');
    },
    { okText: 'Retomar atendimento', danger: false, title: 'Retomar atendimento' }
  );
}

/* =========================================================
   AGENDA
   ========================================================= */
function renderAgenda() {
  const d = state.agendaDate;
  const list = db.appointments.filter((a) => a.date === d).sort(apptSort);
  const counts = Object.keys(APPT_STATUS).map((k) => [k, list.filter((a) => a.status === k).length]);
  const week = db.appointments.filter((a) => {
    const diff = (parseISO(a.date) - parseISO(todayISO())) / 86400000;
    return diff >= 0 && diff < 7 && a.status !== 'cancelado';
  }).length;

  return `<div class="agenda-layout">
    <div>
      <div class="card"><div class="card-body calendar">${renderCalendar()}</div></div>
      <div class="card"><div class="card-header"><h3>${icon('activity')} Resumo do dia</h3></div>
        <div class="card-body">
          ${counts.map(([k, c]) => `<div style="display:flex;justify-content:space-between;padding:5px 0">${badge(APPT_STATUS, k)}<strong>${c}</strong></div>`).join('')}
          <div style="border-top:1px solid var(--border);margin-top:8px;padding-top:10px" class="small muted">Próximos 7 dias: <strong>${week}</strong> consulta(s)</div>
        </div></div>
    </div>
    <div class="card" style="margin-bottom:0">
      <div class="card-header">
        <h3 style="text-transform:capitalize">${icon('calendar')} ${longDate(d)}</h3>
        <div style="display:flex;gap:8px">
          <button class="btn btn-sm" data-action="agenda-today">Hoje</button>
          <button class="btn btn-sm btn-primary" data-action="new-appt" data-date="${d}">${icon('plus')} Nova consulta</button>
        </div>
      </div>
      <div class="card-body">
        ${list.length ? list.map((a) => {
          const p = getPatient(a.patientId);
          const end = timeToMin(a.time) + Number(a.duration || 30);
          const wa = p && whatsLink(p.mobile);
          const msg = p ? encodeURIComponent(`Olá ${p.name.split(' ')[0]}! Confirmamos sua consulta na ${db.settings.clinicName} em ${fmtDate(a.date)} às ${a.time}. Responda SIM para confirmar.`) : '';
          return `<div class="slot s-${a.status}">
            <div class="slot-time">${esc(a.time)}<div class="small muted" style="font-weight:500">até ${pad(Math.floor(end / 60) % 24)}:${pad(end % 60)}</div></div>
            <div class="slot-info">
              <div style="font-weight:700;cursor:pointer" data-action="open-patient" data-id="${a.patientId}">${esc(patientName(a.patientId))}</div>
              <div class="small muted">${esc(a.procedure)} · ${esc(a.dentist)}${p?.mobile ? ' · ' + esc(p.mobile) : ''}</div>
              ${a.notes ? `<div class="small" style="margin-top:2px">${esc(a.notes)}</div>` : ''}
            </div>
            <select class="input" style="width:auto" data-change="appt-status" data-id="${a.id}">
              ${Object.entries(APPT_STATUS).map(([k, s]) => `<option value="${k}" ${a.status === k ? 'selected' : ''}>${s.label}</option>`).join('')}
            </select>
            ${wa ? `<a class="btn-icon" title="Enviar confirmação por WhatsApp" target="_blank" href="${wa}?text=${msg}">${icon('message')}</a>` : ''}
            <button class="btn-icon" title="Editar" data-action="edit-appt" data-id="${a.id}">${icon('edit')}</button>
            <button class="btn-icon danger" title="Excluir" data-action="delete-appt" data-id="${a.id}">${icon('trash')}</button>
          </div>`;
        }).join('') : emptyState('calendar', 'Nenhuma consulta neste dia.')}
      </div>
    </div>
  </div>`;
}
function renderCalendar() {
  const [y, m] = state.calMonth.split('-').map(Number);
  const first = new Date(y, m - 1, 1);
  const start = new Date(y, m - 1, 1 - first.getDay());
  const busy = new Set(db.appointments.filter((a) => a.status !== 'cancelado').map((a) => a.date));
  const today = todayISO();
  let cells = '';
  for (let i = 0; i < 42; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const iso = toISO(d);
    const cls = ['cal-day', d.getMonth() !== m - 1 && 'other', iso === today && 'today', iso === state.agendaDate && 'sel', busy.has(iso) && 'has'].filter(Boolean).join(' ');
    cells += `<div class="${cls}" data-action="cal-day" data-date="${iso}">${d.getDate()}</div>`;
  }
  return `<div class="cal-head">
      <button class="btn-icon" data-action="cal-shift" data-delta="-1">${icon('left')}</button>
      <strong>${monthLabel(state.calMonth)}</strong>
      <button class="btn-icon" data-action="cal-shift" data-delta="1">${icon('right')}</button>
    </div>
    <div class="cal-grid">${['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((x) => `<div class="cal-dow">${x}</div>`).join('')}${cells}</div>`;
}

function apptFormModal(id, { patientId = '', date = '' } = {}) {
  if (!db.patients.length) { toast('Cadastre um paciente antes de agendar.', 'warn'); return patientFormModal(); }
  const a = id ? db.appointments.find((x) => x.id === id)
    : { patientId, date: date || state.agendaDate || todayISO(), time: '09:00', duration: 30, status: 'agendado', dentist: db.settings.dentists[0], procedure: db.settings.procedures[0]?.name };
  openModal({
    title: id ? 'Editar consulta' : 'Agendar consulta',
    size: 'md',
    body: `<form id="apptForm" onsubmit="return false"><div class="form-grid">
      ${field('patientId', 'Paciente', { col: 12, value: a.patientId, options: patientOptions(), req: true })}
      ${field('date', 'Data', { col: 4, type: 'date', value: a.date, req: true })}
      ${field('time', 'Horário', { col: 4, type: 'time', value: a.time, req: true, attrs: 'step="300"' })}
      ${field('duration', 'Duração', { col: 4, value: a.duration, options: [[15, '15 min'], [30, '30 min'], [45, '45 min'], [60, '1 hora'], [90, '1h30'], [120, '2 horas']] })}
      ${field('procedure', 'Procedimento', { col: 6, value: a.procedure, options: procedureOptions(a.procedure) })}
      ${field('dentist', 'Dentista', { col: 6, value: a.dentist, options: dentistOptions(a.dentist) })}
      ${field('status', 'Status', { col: 6, value: a.status, options: Object.entries(APPT_STATUS).map(([k, s]) => [k, s.label]) })}
      ${field('notes', 'Observações', { col: 12, type: 'textarea', value: a.notes })}
    </div></form>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button>
             <button class="btn btn-primary" data-action="save-appt" data-id="${id || ''}">${icon('check')} Salvar consulta</button>`
  });
}
function saveAppt(id) {
  const { data } = formData('#apptForm');
  $$('#apptForm .invalid').forEach((e) => e.classList.remove('invalid'));
  if (!data.patientId) return markInvalid('patientId', 'Selecione o paciente.');
  if (!data.date) return markInvalid('date', 'Informe a data.');
  if (!data.time) return markInvalid('time', 'Informe o horário.');
  data.duration = Number(data.duration);

  if (data.status !== 'cancelado') {
    const s = timeToMin(data.time), e = s + data.duration;
    const clash = db.appointments.find((a) => a.id !== id && a.date === data.date && a.dentist === data.dentist && a.status !== 'cancelado'
      && s < timeToMin(a.time) + Number(a.duration || 30) && timeToMin(a.time) < e);
    if (clash) {
      confirmDialog(`Conflito de horário: <strong>${esc(data.dentist)}</strong> já tem consulta com <strong>${esc(patientName(clash.patientId))}</strong> às ${esc(clash.time)} neste dia. Deseja agendar mesmo assim?`,
        () => persistAppt(id, data), { okText: 'Agendar mesmo assim', danger: false, title: 'Conflito de horário' });
      return;
    }
  }
  persistAppt(id, data);
}
function persistAppt(id, data) {
  if (id) Object.assign(db.appointments.find((x) => x.id === id), data);
  else db.appointments.push({ id: uid(), ...data, createdAt: todayISO() });
  saveDB(); closeModal(); toast('Consulta salva.');
  if (state.view === 'agenda') { state.agendaDate = data.date; state.calMonth = data.date.slice(0, 7); }
  render();
}

/* =========================================================
   FINANCEIRO
   ========================================================= */
function txTable(list, showPatient = true) {
  return `<table><thead><tr><th>Vencimento</th><th>Descrição</th>${showPatient ? '<th>Paciente</th>' : ''}<th>Categoria</th><th>Forma</th><th>Valor</th><th>Status</th><th></th></tr></thead>
  <tbody>${list.map((t) => {
    const overdue = isOverdue(t);
    return `<tr>
      <td>${fmtDate(t.date)}</td>
      <td><strong>${esc(t.description)}</strong>${t.paidDate && t.status === 'pago' ? `<div class="small muted">Pago em ${fmtDate(t.paidDate)}</div>` : ''}</td>
      ${showPatient ? `<td>${t.patientId ? `<a style="cursor:pointer" data-action="open-patient" data-id="${t.patientId}">${esc(patientName(t.patientId))}</a>` : '<span class="muted">—</span>'}</td>` : ''}
      <td>${esc(t.category || '-')}</td>
      <td>${esc(t.method || '-')}</td>
      <td style="font-weight:700;color:${t.status === 'pago' ? 'var(--success)' : 'var(--danger)'}">${t.type === 'receita' ? '+' : '−'} ${money(t.value)}</td>
      <td>${t.status === 'pago' ? '<span class="badge b-green">Pago</span>' : overdue ? '<span class="badge b-red">Vencido</span>' : '<span class="badge b-orange">Pendente</span>'}</td>
      <td class="td-actions no-print">
        ${t.status !== 'pago' ? `<button class="btn btn-sm" data-action="pay-tx" data-id="${t.id}">${icon('check')} Baixar</button>` : ''}
        <button class="btn-icon" title="Editar" data-action="edit-tx" data-id="${t.id}">${icon('edit')}</button>
        <button class="btn-icon danger" title="Excluir" data-action="delete-tx" data-id="${t.id}">${icon('trash')}</button>
      </td></tr>`;
  }).join('')}</tbody></table>`;
}
function renderFinance() {
  const mk = state.financeMonth;
  const inMonth = db.transactions.filter((t) => t.date.startsWith(mk));
  const sum = (arr) => arr.reduce((s, t) => s + Number(t.value), 0);
  const inc = sum(inMonth.filter((t) => t.type === 'receita' && t.status === 'pago'));
  const exp = sum(inMonth.filter((t) => t.type === 'despesa' && t.status === 'pago'));
  const recv = sum(inMonth.filter((t) => t.type === 'receita' && t.status === 'pendente'));
  const payable = sum(inMonth.filter((t) => t.type === 'despesa' && t.status === 'pendente'));
  const overdueAll = db.transactions.filter((t) => t.type === 'receita' && isOverdue(t));

  let list = inMonth;
  if (state.financeType !== 'all') list = list.filter((t) => t.type === state.financeType);
  if (state.financeStatus === 'vencido') list = list.filter(isOverdue);
  else if (state.financeStatus !== 'all') list = list.filter((t) => t.status === state.financeStatus);
  list = [...list].sort((a, b) => b.date.localeCompare(a.date));

  const byMethod = {};
  inMonth.filter((t) => t.type === 'receita' && t.status === 'pago').forEach((t) => { const k = t.method || 'Não informado'; byMethod[k] = (byMethod[k] || 0) + Number(t.value); });

  return `
  <div class="toolbar">
    <button class="btn-icon" data-action="fin-shift" data-delta="-1">${icon('left')}</button>
    <strong style="text-transform:capitalize;min-width:150px;text-align:center">${monthLabel(mk)}</strong>
    <button class="btn-icon" data-action="fin-shift" data-delta="1">${icon('right')}</button>
    <select class="input" style="max-width:160px" data-change="fin-type">
      <option value="all" ${state.financeType === 'all' ? 'selected' : ''}>Todos os tipos</option>
      <option value="receita" ${state.financeType === 'receita' ? 'selected' : ''}>Receitas</option>
      <option value="despesa" ${state.financeType === 'despesa' ? 'selected' : ''}>Despesas</option>
    </select>
    <select class="input" style="max-width:160px" data-change="fin-status">
      <option value="all" ${state.financeStatus === 'all' ? 'selected' : ''}>Todos os status</option>
      <option value="pago" ${state.financeStatus === 'pago' ? 'selected' : ''}>Pagos</option>
      <option value="pendente" ${state.financeStatus === 'pendente' ? 'selected' : ''}>Pendentes</option>
      <option value="vencido" ${state.financeStatus === 'vencido' ? 'selected' : ''}>Vencidos</option>
    </select>
    <div style="margin-left:auto;display:flex;gap:8px">
      <button class="btn" data-action="new-tx" data-type="despesa">${icon('down')} Nova despesa</button>
      <button class="btn btn-primary" data-action="new-tx" data-type="receita">${icon('up')} Nova receita</button>
    </div>
  </div>
  <div class="stats">
    ${statCard('up', 'c-green', 'Receitas recebidas', money(inc))}
    ${statCard('down', 'c-red', 'Despesas pagas', money(exp))}
    ${statCard('wallet', inc - exp >= 0 ? 'c-teal' : 'c-red', 'Saldo do mês', money(inc - exp))}
    ${statCard('clock', 'c-orange', 'A receber no mês', money(recv), `A pagar: ${money(payable)}`)}
    ${statCard('alert', 'c-red', 'Vencidos (geral)', money(sum(overdueAll)), `${overdueAll.length} lançamento(s)`)}
  </div>
  <div class="grid-2">
    <div class="card"><div class="card-header"><h3>${icon('list')} Lançamentos</h3><span class="muted small">${list.length} registro(s)</span></div>
      <div class="table-wrap">${list.length ? txTable(list) : `<div class="card-body">${emptyState('money', 'Nenhum lançamento para os filtros selecionados.')}</div>`}</div></div>
    <div class="card"><div class="card-header"><h3>${icon('card')} Recebimentos por forma de pagamento</h3></div>
      <div class="card-body">${Object.keys(byMethod).length ? Object.entries(byMethod).sort((a, b) => b[1] - a[1]).map(([k, v]) => `
        <div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between"><span>${esc(k)}</span><strong>${money(v)}</strong></div>
        <div style="height:8px;background:var(--bg);border-radius:4px;margin-top:4px"><div style="height:100%;width:${(v / inc) * 100}%;background:var(--primary);border-radius:4px"></div></div></div>`).join('')
        : emptyState('card', 'Sem recebimentos no mês.')}</div></div>
  </div>`;
}
function txFormModal(id, { type = 'receita', patientId = '' } = {}) {
  const t = id ? db.transactions.find((x) => x.id === id) : { type, patientId, date: todayISO(), status: type === 'receita' ? 'pago' : 'pendente', method: 'PIX', category: TX_CATEGORIES[type][0] };
  openModal({
    title: id ? 'Editar lançamento' : (t.type === 'receita' ? 'Nova receita' : 'Nova despesa'),
    size: 'md',
    body: `<form id="txForm" onsubmit="return false"><div class="form-grid">
      ${field('type', 'Tipo', { col: 4, value: t.type, options: [['receita', 'Receita'], ['despesa', 'Despesa']], attrs: 'data-change="tx-type"' })}
      ${field('category', 'Categoria', { col: 4, value: t.category, options: TX_CATEGORIES[t.type] })}
      ${field('value', 'Valor (R$)', { col: 4, type: 'number', value: t.value, req: true, attrs: 'step="0.01" min="0"' })}
      ${field('description', 'Descrição', { col: 12, value: t.description, req: true, placeholder: 'Ex.: Restauração dente 16 / Compra de resinas' })}
      ${field('patientId', 'Paciente (opcional)', { col: 12, value: t.patientId, options: patientOptions(true) })}
      ${field('date', 'Vencimento', { col: 4, type: 'date', value: t.date, req: true })}
      ${field('status', 'Status', { col: 4, value: t.status, options: [['pago', 'Pago'], ['pendente', 'Pendente']] })}
      ${field('method', 'Forma de pagamento', { col: 4, value: t.method, options: ['', ...PAY_METHODS] })}
      ${field('paidDate', 'Data do pagamento', { col: 4, type: 'date', value: t.paidDate || '' , hint: 'Se vazio e pago, usa a data de hoje.' })}
      ${field('notes', 'Observações', { col: 8, type: 'textarea', value: t.notes })}
    </div></form>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button>
             <button class="btn btn-primary" data-action="save-tx" data-id="${id || ''}">${icon('check')} Salvar</button>`
  });
}
function saveTx(id) {
  const { data } = formData('#txForm');
  $$('#txForm .invalid').forEach((e) => e.classList.remove('invalid'));
  data.value = Number(data.value);
  if (!data.value || data.value <= 0) return markInvalid('value', 'Informe um valor maior que zero.');
  if (!data.description) return markInvalid('description', 'Informe a descrição.');
  if (!data.date) return markInvalid('date', 'Informe o vencimento.');
  if (data.status === 'pago' && !data.paidDate) data.paidDate = todayISO();
  if (data.status === 'pendente') data.paidDate = '';
  if (id) Object.assign(db.transactions.find((x) => x.id === id), data);
  else db.transactions.push({ id: uid(), ...data });
  saveDB(); closeModal(); toast('Lançamento salvo.'); render();
}

/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */
function renderSettings() {
  const s = db.settings;
  return `
  <div class="grid-equal">
    <div class="card"><div class="card-header"><h3>${icon('building')} Dados da clínica</h3></div>
      <div class="card-body"><form id="clinicForm" onsubmit="return false"><div class="form-grid">
        ${field('clinicName', 'Nome da clínica', { col: 12, value: s.clinicName, req: true })}
        ${field('cnpj', 'CNPJ', { col: 6, value: s.cnpj, mask: 'cnpj' })}
        ${field('cro', 'CRO responsável técnico', { col: 6, value: s.cro })}
        ${field('phone', 'Telefone', { col: 6, value: s.phone, mask: 'phone' })}
        ${field('email', 'E-mail', { col: 6, type: 'email', value: s.email })}
        ${field('address', 'Endereço', { col: 12, value: s.address })}
        <div class="col-12" style="text-align:right"><button class="btn btn-primary" data-action="save-clinic">${icon('check')} Salvar dados</button></div>
      </div></form></div></div>

    <div class="card"><div class="card-header"><h3>${icon('users')} Dentistas / Equipe</h3></div>
      <div class="card-body">
        <div class="input-group" style="margin-bottom:12px">
          <input class="input" id="newDentist" placeholder="Ex.: Dra. Maria Silva - CRO 12345">
          <button class="btn btn-primary" data-action="add-dentist">${icon('plus')} Adicionar</button>
        </div>
        ${s.dentists.length ? s.dentists.map((d, i) => `<div class="list-item">${avatar(d)}<div style="flex:1">${esc(d)}</div>
          <button class="btn-icon danger" data-action="remove-dentist" data-index="${i}" title="Remover">${icon('trash')}</button></div>`).join('') : emptyState('users', 'Nenhum dentista cadastrado.')}
      </div></div>
  </div>

  <div class="card" style="margin-top:22px"><div class="card-header"><h3>${icon('clipboard')} Procedimentos e valores</h3>
    <button class="btn btn-sm btn-primary" data-action="new-proc">${icon('plus')} Novo procedimento</button></div>
    <div class="table-wrap"><table><thead><tr><th>Procedimento</th><th>Valor padrão</th><th></th></tr></thead><tbody>
      ${s.procedures.map((p) => `<tr><td>${esc(p.name)}</td><td>${money(p.price)}</td>
        <td class="td-actions"><button class="btn-icon" data-action="edit-proc" data-id="${p.id}" title="Editar">${icon('edit')}</button>
        <button class="btn-icon danger" data-action="delete-proc" data-id="${p.id}" title="Excluir">${icon('trash')}</button></td></tr>`).join('')}
    </tbody></table></div></div>

  <div class="card"><div class="card-header"><h3>${icon('database')} Backup e dados</h3></div>
    <div class="card-body">
      <p class="muted" style="margin-bottom:14px">Os dados ficam salvos neste computador, no navegador. Faça backups periódicos exportando o arquivo e guarde em local seguro (pendrive, nuvem).</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn btn-primary" data-action="export">${icon('download')} Exportar backup</button>
        <button class="btn" data-action="import">${icon('upload')} Importar backup</button>
        <button class="btn" data-action="export-csv">${icon('download')} Exportar pacientes (CSV/Excel)</button>
        <button class="btn" data-action="sample-data">${icon('database')} Carregar dados de exemplo</button>
        <button class="btn btn-danger" data-action="clear-data">${icon('trash')} Apagar todos os dados</button>
        <input type="file" id="importFile" accept=".json,application/json" style="display:none">
      </div>
      <p class="small muted" style="margin-top:14px">Resumo: ${db.patients.length} pacientes · ${db.appointments.length} consultas · ${db.treatments.length} procedimentos · ${db.transactions.length} lançamentos</p>
    </div></div>`;
}
function procFormModal(id) {
  const p = id ? db.settings.procedures.find((x) => x.id === id) : { name: '', price: 0 };
  openModal({
    title: id ? 'Editar procedimento' : 'Novo procedimento', size: 'sm',
    body: `<form id="procForm" onsubmit="return false"><div class="form-grid">
      ${field('name', 'Nome', { col: 12, value: p.name, req: true })}
      ${field('price', 'Valor padrão (R$)', { col: 12, type: 'number', value: p.price, attrs: 'step="0.01" min="0"' })}
    </div></form>`,
    footer: `<button class="btn" data-action="close-modal">Cancelar</button><button class="btn btn-primary" data-action="save-proc" data-id="${id || ''}">Salvar</button>`
  });
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function exportCSV() {
  const cols = [['name', 'Nome'], ['cpf', 'CPF'], ['rg', 'RG'], ['birth', 'Nascimento'], ['gender', 'Sexo'], ['mobile', 'Celular'], ['phone', 'Telefone'], ['email', 'E-mail'],
    ['cep', 'CEP'], ['street', 'Logradouro'], ['number', 'Número'], ['complement', 'Complemento'], ['district', 'Bairro'], ['city', 'Cidade'], ['state', 'UF'],
    ['insurance', 'Convênio'], ['insuranceNumber', 'Carteirinha'], ['createdAt', 'Cadastro']];
  const q = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [cols.map((c) => q(c[1])).join(';'), ...sortByName(db.patients).map((p) => cols.map(([k]) => q(k === 'birth' || k === 'createdAt' ? (p[k] ? fmtDate(p[k]) : '') : p[k])).join(';'))];
  download(`pacientes_${todayISO()}.csv`, '\uFEFF' + rows.join('\r\n'), 'text/csv;charset=utf-8');
  toast('Planilha de pacientes exportada.');
}

/* =========================================================
   Dados de exemplo
   ========================================================= */
function genCPF() {
  const n = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  for (let t = 9; t < 11; t++) {
    let s = 0;
    for (let i = 0; i < t; i++) s += n[i] * (t + 1 - i);
    n.push(((10 * s) % 11) % 10);
  }
  return MASKS.cpf(n.join(''));
}
function loadSampleData() {
  const rnd = (a) => a[Math.floor(Math.random() * a.length)];
  const rint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const base = defaultDB();
  base.settings = { ...db.settings, dentists: ['Dra. Camila Andrade - CRO 45210', 'Dr. Rafael Moreira - CRO 38877'] };
  if (base.settings.clinicName === 'OdontoClinic') Object.assign(base.settings, { phone: '(11) 3456-7890', email: 'contato@odontoclinic.com.br', address: 'Av. Paulista, 1000 - Sala 52 - Bela Vista, São Paulo - SP' });
  const people = [
    ['Ana Beatriz Souza', 'Feminino'], ['Carlos Eduardo Lima', 'Masculino'], ['Mariana Costa Alves', 'Feminino'], ['João Pedro Martins', 'Masculino'],
    ['Fernanda Ribeiro Dias', 'Feminino'], ['Ricardo Gomes Pereira', 'Masculino'], ['Juliana Ferreira Santos', 'Feminino'], ['Lucas Oliveira Rocha', 'Masculino'],
    ['Patrícia Mendes Cardoso', 'Feminino'], ['Gabriel Araújo Nunes', 'Masculino'], ['Beatriz Carvalho', 'Feminino'], ['Thiago Barbosa Freitas', 'Masculino']
  ];
  const places = [
    ['01310-100', 'Avenida Paulista', 'Bela Vista', 'São Paulo', 'SP'], ['04538-132', 'Avenida Brigadeiro Faria Lima', 'Itaim Bibi', 'São Paulo', 'SP'],
    ['05407-002', 'Rua Cardeal Arcoverde', 'Pinheiros', 'São Paulo', 'SP'], ['09015-000', 'Rua Coronel Oliveira Lima', 'Centro', 'Santo André', 'SP'],
    ['06454-000', 'Alameda Rio Negro', 'Alphaville', 'Barueri', 'SP'], ['07010-000', 'Rua Dom Pedro II', 'Centro', 'Guarulhos', 'SP']
  ];
  const today = new Date();
  people.forEach(([name, gender], i) => {
    const pl = rnd(places);
    const first = name.split(' ')[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const birth = new Date(rint(1958, 2014), rint(0, 11), rint(1, 28));
    if (i < 2) birth.setMonth(today.getMonth());
    const created = new Date(today); created.setDate(created.getDate() - rint(0, 300));
    const odontogram = {};
    const allTeeth = [...UPPER_TEETH.flat(), ...LOWER_TEETH.flat()];
    for (let k = 0; k < rint(1, 6); k++) odontogram[rnd(allTeeth)] = rnd(['carie', 'restaurado', 'restaurado', 'canal', 'coroa', 'ausente', 'implante']);
    base.patients.push({
      id: uid(), name, gender, birth: toISO(birth), cpf: genCPF(), rg: `${rint(10, 59)}.${rint(100, 999)}.${rint(100, 999)}-${rint(0, 9)}`,
      civil: rnd(['Solteiro(a)', 'Casado(a)', 'Divorciado(a)']), profession: rnd(['Professor(a)', 'Engenheiro(a)', 'Advogado(a)', 'Estudante', 'Empresário(a)', 'Analista', 'Autônomo(a)']),
      mobile: `(11) 9${rint(1000, 9999)}-${rint(1000, 9999)}`, phone: Math.random() > .6 ? `(11) 3${rint(100, 999)}-${rint(1000, 9999)}` : '',
      email: `${first}${rint(10, 99)}@email.com`, cep: pl[0], street: pl[1], number: String(rint(10, 2500)), complement: Math.random() > .6 ? `Apto ${rint(11, 152)}` : '',
      district: pl[2], city: pl[3], state: pl[4], insurance: rnd(INSURANCES.slice(0, 6)), insuranceNumber: String(rint(100000000, 999999999)),
      referral: rnd(['Indicação', 'Instagram', 'Google', 'Convênio']),
      conditions: Math.random() > .6 ? [rnd(CONDITIONS)] : [], allergies: Math.random() > .8 ? 'Dipirona' : '', medications: Math.random() > .7 ? 'Losartana 50mg' : '',
      complaint: rnd(['Dor ao mastigar', 'Sensibilidade ao frio', 'Revisão periódica', 'Deseja clarear os dentes', 'Sangramento na gengiva']),
      bloodType: rnd(['A+', 'O+', 'B+', 'O-', 'AB+']), lastDentist: rnd(['Menos de 6 meses', '6 meses a 1 ano', '1 a 2 anos']), brushing: rnd(['2', '3']),
      odontogram, createdAt: toISO(created)
    });
  });

  const times = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
  const procs = base.settings.procedures.length ? base.settings.procedures : defaultDB().settings.procedures;
  for (let off = -170; off <= 20; off++) {
    const d = new Date(today); d.setDate(d.getDate() + off);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    const used = new Set();
    const n = off === 0 ? 5 : rint(0, 3);
    for (let k = 0; k < n; k++) {
      let time = rnd(times);
      if (used.has(time)) continue;
      used.add(time);
      const proc = rnd(procs);
      const p = rnd(base.patients);
      const iso = toISO(d);
      let status;
      if (off < 0) status = Math.random() > .12 ? 'concluido' : rnd(['faltou', 'cancelado']);
      else if (off === 0) status = rnd(['confirmado', 'agendado', 'concluido']);
      else status = Math.random() > .5 ? 'confirmado' : 'agendado';
      const dentist = rnd(base.settings.dentists);
      base.appointments.push({ id: uid(), patientId: p.id, date: iso, time, duration: rnd([30, 30, 45, 60]), dentist, procedure: proc.name, status, notes: '' });
      if (status === 'concluido') {
        const paid = off < -10 || Math.random() > .3;
        base.transactions.push({ id: uid(), type: 'receita', category: 'Tratamento', description: proc.name, patientId: p.id, value: proc.price, date: iso,
          status: paid ? 'pago' : 'pendente', paidDate: paid ? iso : '', method: paid ? rnd(PAY_METHODS) : '' });
        if (Math.random() > .5) base.treatments.push({ id: uid(), patientId: p.id, procedure: proc.name, tooth: String(rnd([...UPPER_TEETH.flat(), ...LOWER_TEETH.flat()])), dentist, value: proc.price, date: iso, status: 'concluido', notes: '' });
      }
    }
  }
  base.patients.forEach((p) => {
    if (Math.random() > .4) {
      const proc = rnd(procs);
      base.treatments.push({ id: uid(), patientId: p.id, procedure: proc.name, tooth: String(rnd(UPPER_TEETH.flat())), dentist: rnd(base.settings.dentists), value: proc.price, date: todayISO(), status: rnd(['planejado', 'andamento']), notes: '' });
    }
  });
  for (let m = 5; m >= 0; m--) {
    const d = new Date(today.getFullYear(), today.getMonth() - m, 5);
    const iso = (day) => toISO(new Date(d.getFullYear(), d.getMonth(), day));
    const isPast = m > 0;
    [['Aluguel do consultório', 'Aluguel', 3500, 5], ['Salários da equipe', 'Salários', 6200, 5], ['Materiais odontológicos', 'Materiais', rint(800, 2200), 12],
     ['Laboratório de prótese', 'Laboratório', rint(600, 1800), 18], ['Energia, água e internet', 'Contas (água/luz/internet)', rint(450, 750), 20]].forEach(([desc, cat, val, day]) => {
      const date = iso(day);
      const paid = isPast || date <= todayISO();
      base.transactions.push({ id: uid(), type: 'despesa', category: cat, description: desc, patientId: '', value: val, date, status: paid ? 'pago' : 'pendente', paidDate: paid ? date : '', method: paid ? rnd(['PIX', 'Boleto', 'Transferência']) : '' });
    });
  }
  db = base;
  saveDB();
  toast('Dados de exemplo carregados.');
  go('dashboard');
}

/* =========================================================
   Ações (delegação de eventos)
   ========================================================= */
const ACTIONS = {
  'nav': (d) => go(d.view),
  'close-modal': closeModal,
  'confirm-yes': () => { const cb = confirmCallback; confirmCallback = null; closeModal(); if (cb) cb(); },
  'print': () => window.print(),

  'new-patient': () => patientFormModal(),
  'edit-patient': (d) => patientFormModal(d.id, d.tab || 't1'),
  'delete-patient': (d) => deletePatient(d.id),
  'save-patient': (d) => savePatient(d.id || null),
  'open-patient': (d) => go('patient', { patientId: d.id, patientTab: 'resumo' }),
  'patient-tab': (d) => { state.patientTab = d.tabName; render(); },
  'set-mode': (d) => { state.patientsMode = d.mode; localStorage.setItem('oc_mode', d.mode); render(); },
  'set-care': (d) => { state.patientsCare = d.care; state.patientsFilter = ''; render(); },
  'archive-patient': (d) => archivePatient(d.id),
  'restore-patient': (d) => restorePatient(d.id),
  'cep-lookup': lookupCEP,

  'brush': (d) => { state.brush = d.status; render(); },
  'tooth': (d) => {
    const p = getPatient(state.patientId);
    p.odontogram = p.odontogram || {};
    const cur = p.odontogram[d.num];
    if (cur === state.brush || state.brush === 'higido') delete p.odontogram[d.num];
    else p.odontogram[d.num] = state.brush;
    saveDB(); render();
  },

  'new-treat': (d) => treatFormModal(null, d.patient),
  'edit-treat': (d) => treatFormModal(d.id),
  'save-treat': (d) => saveTreat(d.id || null, d.patient),
  'delete-treat': (d) => confirmDialog('Excluir este procedimento do plano de tratamento?', () => {
    db.treatments = db.treatments.filter((t) => t.id !== d.id); saveDB(); toast('Procedimento excluído.'); render();
  }),

  'new-appt': (d) => apptFormModal(null, { patientId: d.patient || '', date: d.date || '' }),
  'edit-appt': (d) => apptFormModal(d.id),
  'save-appt': (d) => saveAppt(d.id || null),
  'delete-appt': (d) => confirmDialog('Excluir esta consulta?', () => {
    db.appointments = db.appointments.filter((a) => a.id !== d.id); saveDB(); toast('Consulta excluída.'); render();
  }),
  'cal-day': (d) => { state.agendaDate = d.date; state.calMonth = d.date.slice(0, 7); render(); },
  'cal-shift': (d) => { state.calMonth = shiftMonth(state.calMonth, Number(d.delta)); render(); },
  'agenda-today': () => { state.agendaDate = todayISO(); state.calMonth = monthKey(); render(); },

  'new-tx': (d) => txFormModal(null, { type: d.type || 'receita', patientId: d.patient || '' }),
  'edit-tx': (d) => txFormModal(d.id),
  'save-tx': (d) => saveTx(d.id || null),
  'pay-tx': (d) => {
    const t = db.transactions.find((x) => x.id === d.id);
    t.status = 'pago'; t.paidDate = todayISO(); if (!t.method) t.method = 'PIX';
    saveDB(); toast('Pagamento registrado.'); render();
  },
  'delete-tx': (d) => confirmDialog('Excluir este lançamento financeiro?', () => {
    db.transactions = db.transactions.filter((t) => t.id !== d.id); saveDB(); toast('Lançamento excluído.'); render();
  }),
  'fin-shift': (d) => { state.financeMonth = shiftMonth(state.financeMonth, Number(d.delta)); render(); },

  'save-clinic': () => {
    const { data } = formData('#clinicForm');
    if (!data.clinicName) return markInvalid('clinicName', 'Informe o nome da clínica.');
    Object.assign(db.settings, data); saveDB(); toast('Dados da clínica salvos.'); render();
  },
  'add-dentist': () => {
    const v = $('#newDentist').value.trim();
    if (!v) return toast('Informe o nome do dentista.', 'warn');
    db.settings.dentists.push(v); saveDB(); toast('Dentista adicionado.'); render();
  },
  'remove-dentist': (d) => confirmDialog(`Remover <strong>${esc(db.settings.dentists[d.index])}</strong> da equipe?`, () => {
    db.settings.dentists.splice(Number(d.index), 1); saveDB(); render();
  }, { okText: 'Remover' }),
  'new-proc': () => procFormModal(),
  'edit-proc': (d) => procFormModal(d.id),
  'save-proc': (d) => {
    const { data } = formData('#procForm');
    if (!data.name) return markInvalid('name', 'Informe o nome do procedimento.');
    data.price = Number(data.price) || 0;
    if (d.id) Object.assign(db.settings.procedures.find((p) => p.id === d.id), data);
    else db.settings.procedures.push({ id: uid(), ...data });
    saveDB(); closeModal(); toast('Procedimento salvo.'); render();
  },
  'delete-proc': (d) => confirmDialog('Excluir este procedimento da tabela?', () => {
    db.settings.procedures = db.settings.procedures.filter((p) => p.id !== d.id); saveDB(); render();
  }),
  'export': () => { download(`backup_odontoclinic_${todayISO()}.json`, JSON.stringify(db, null, 2), 'application/json'); toast('Backup exportado.'); },
  'export-csv': exportCSV,
  'import': () => $('#importFile').click(),
  'sample-data': () => {
    if (db.patients.length) confirmDialog('Carregar dados de exemplo irá <strong>substituir</strong> os dados atuais. Deseja continuar?', loadSampleData, { okText: 'Substituir', danger: true });
    else loadSampleData();
  },
  'clear-data': () => confirmDialog('Tem certeza que deseja <strong>apagar todos os dados</strong>? Recomendamos exportar um backup antes.', () => {
    db = defaultDB(); saveDB(); toast('Todos os dados foram apagados.'); go('dashboard');
  }, { okText: 'Apagar tudo' })
};

const CHANGES = {
  'patient-sort': (el) => { state.patientsSort = el.value; renderPatientsList(); hydrateIcons($('#content')); },
  'appt-status': (el) => {
    const a = db.appointments.find((x) => x.id === el.dataset.id);
    a.status = el.value; saveDB(); toast(`Status alterado para "${APPT_STATUS[el.value].label}".`); render();
  },
  'fin-type': (el) => { state.financeType = el.value; render(); },
  'fin-status': (el) => { state.financeStatus = el.value; render(); },
  'proc-price': (el) => {
    const proc = db.settings.procedures.find((p) => p.name === el.value);
    if (proc && $('#f_value')) $('#f_value').value = proc.price;
  },
  'tx-type': (el) => {
    $('#f_category').innerHTML = TX_CATEGORIES[el.value].map((c) => `<option>${esc(c)}</option>`).join('');
  },
  'odonto-notes': (el) => { getPatient(el.dataset.id).odontoNotes = el.value; saveDB(); toast('Observações salvas.'); }
};
const INPUTS = {
  'patient-filter': (el) => { state.patientsFilter = el.value; renderPatientsList(); hydrateIcons($('#content')); },
  'cep': (el) => { if (digits(el.value).length === 8) lookupCEP(); }
};

document.addEventListener('click', (e) => {
  if (e.target.closest('a[href]')) return;
  const tab = e.target.closest('.tab[data-tab]');
  if (tab) { activateTab(tab.closest('.modal-body, .card'), tab.dataset.tab); return; }
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const fn = ACTIONS[el.dataset.action];
  if (fn) { e.preventDefault(); e.stopPropagation(); fn(el.dataset, el, e); }
});
document.addEventListener('change', (e) => {
  const el = e.target.closest('[data-change]');
  if (el && CHANGES[el.dataset.change]) CHANGES[el.dataset.change](el, e);
});
document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.dataset.mask && MASKS[el.dataset.mask]) el.value = MASKS[el.dataset.mask](el.value);
  if (el.dataset.input && INPUTS[el.dataset.input]) INPUTS[el.dataset.input](el);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $('#modalBackdrop').classList.contains('open')) closeModal();
  if (e.key === 'Enter' && e.target.id === 'newDentist') ACTIONS['add-dentist']();
});

/* Navegação lateral, busca global e importação */
$$('#nav a').forEach((a) => a.addEventListener('click', () => go(a.dataset.view)));
$('#menuToggle').addEventListener('click', () => {
  if (state.view !== 'dashboard') go('dashboard');
  else $('#sidebar').classList.toggle('open');
});
$('#quickNewPatient').addEventListener('click', () => patientFormModal());
$('#modalClose').addEventListener('click', closeModal);
$('#modalBackdrop').addEventListener('mousedown', (e) => { if (e.target.id === 'modalBackdrop') closeModal(); });

$('#overviewMenuBtn').addEventListener('click', () => go('dashboard'));

const gs = $('#globalSearch'), gr = $('#searchResults');
gs.addEventListener('input', () => {
  const q = gs.value.toLowerCase().trim(), qd = digits(q);
  if (!q) { gr.classList.remove('open'); return; }
  const res = db.patients.filter((p) => p.name.toLowerCase().includes(q) || (qd.length >= 3 && (digits(p.cpf).includes(qd) || digits(p.mobile).includes(qd) || digits(p.phone).includes(qd)))).slice(0, 8);
  gr.innerHTML = res.length ? res.map((p) => `<div class="search-item" data-action="open-patient" data-id="${p.id}">${avatar(p.name)}<div><strong>${esc(p.name)}</strong><div class="small muted">${esc(p.mobile || p.cpf || '')}</div></div></div>`).join('')
    : '<div class="search-item muted">Nenhum paciente encontrado</div>';
  gr.classList.add('open');
});
gr.addEventListener('click', () => { gr.classList.remove('open'); gs.value = ''; });
gs.addEventListener('blur', () => setTimeout(() => gr.classList.remove('open'), 200));

document.addEventListener('change', (e) => {
  if (e.target.id !== 'importFile') return;
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.patients) || !data.settings) throw new Error('Arquivo inválido');
      confirmDialog(`Importar backup com <strong>${data.patients.length}</strong> paciente(s)? Os dados atuais serão substituídos.`, () => {
        const def = defaultDB();
        db = { ...def, ...data, settings: { ...def.settings, ...data.settings } };
        saveDB(); toast('Backup importado com sucesso.'); go('dashboard');
      }, { okText: 'Importar', danger: false });
    } catch {
      toast('Arquivo de backup inválido.', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

/* Relógio digital e data ao vivo */
function updateLiveClock() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });
  const timeStr = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  const liveDate = $('#liveDate');
  const liveClock = $('#liveClock');
  const todayDate = $('#todayDate');
  if (liveDate) liveDate.textContent = dateStr;
  if (liveClock) liveClock.textContent = timeStr;
  if (todayDate) todayDate.textContent = now.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
}

/* Inicialização */
updateLiveClock();
setInterval(updateLiveClock, 1000);
hydrateIcons();
render();
