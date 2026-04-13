// Funções para formatar e validar diferentes tipos de input

export const formatters = {
  // CPF: 123.456.789-00
  cpf: (value: string): string => {
    const clean = value.replace(/\D/g, '').slice(0, 11);
    if (clean.length <= 3) return clean;
    if (clean.length <= 6) return `${clean.slice(0, 3)}.${clean.slice(3)}`;
    if (clean.length <= 9) return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6)}`;
    return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6, 9)}-${clean.slice(9)}`;
  },

  // Telefone: (11) 9999-9999 ou (11) 9999-99999
  telefone: (value: string): string => {
    const clean = value.replace(/\D/g, '').slice(0, 11);
    if (clean.length <= 2) return clean;
    if (clean.length <= 7) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`;
  },

  // CEP: 12345-678
  cep: (value: string): string => {
    const clean = value.replace(/\D/g, '').slice(0, 8);
    if (clean.length <= 5) return clean;
    return `${clean.slice(0, 5)}-${clean.slice(5)}`;
  },

  // Data: 01/01/2026
  data: (value: string): string => {
    let clean = value.replace(/\D/g, '').slice(0, 8);
    if (clean.length <= 2) return clean;
    if (clean.length <= 4) return `${clean.slice(0, 2)}/${clean.slice(2)}`;
    return `${clean.slice(0, 2)}/${clean.slice(2, 4)}/${clean.slice(4)}`;
  },

  // Email: apenas remove espaços
  email: (value: string): string => {
    return value.toLowerCase().trim();
  },

  // Nome: apenas letras e espaços
  nome: (value: string): string => {
    return value.replace(/[^a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, '');
  },

  // Password: sem formatação específica
  password: (value: string): string => {
    return value;
  },
};

// Validações
export const validadores = {
  cpf: (value: string): boolean => {
    const clean = value.replace(/\D/g, '');
    return clean.length === 11;
  },

  telefone: (value: string): boolean => {
    const clean = value.replace(/\D/g, '');
    return clean.length === 10 || clean.length === 11;
  },

  cep: (value: string): boolean => {
    const clean = value.replace(/\D/g, '');
    return clean.length === 8;
  },

  data: (value: string): boolean => {
    const clean = value.replace(/\D/g, '');
    if (clean.length !== 8) return false;
    
    const dia = parseInt(clean.slice(0, 2));
    const mes = parseInt(clean.slice(2, 4));
    const ano = parseInt(clean.slice(4));
    
    if (mes < 1 || mes > 12) return false;
    if (dia < 1 || dia > 31) return false;
    if (ano < 1900) return false;
    
    return true;
  },

  email: (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  },

  nome: (value: string): boolean => {
    return value.trim().length >= 3;
  },

  password: (value: string): boolean => {
    return value.length >= 6;
  },
};

// Tipos de input suportados
export type InputType = 'text' | 'cpf' | 'telefone' | 'cep' | 'data' | 'email' | 'nome' | 'date' | 'password';
// Configuração de máximos caracteres por tipo
export const maxLengthByType: Record<InputType, number> = {
  text: 255,
  cpf: 14, // 123.456.789-00
  telefone: 18, // (11) 99999-9999
  cep: 9, // 12345-678
  data: 10, // 01/01/2026
  email: 255,
  nome: 100,
  date: 10,
  password: 255,
};

// Placeholders por tipo
export const placeholderByType: Record<InputType, string> = {
  text: '',
  cpf: '000.000.000-00',
  telefone: '(00) 9999-9999',
  cep: '00000-000',
  data: 'dd/mm/aaaa',
  email: 'seu@email.com',
  nome: 'Digite seu nome',
  date: 'dd/mm/aaaa',
  password: '',
};
