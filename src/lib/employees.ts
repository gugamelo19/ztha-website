export interface Employee {
  slug: string;
  nome: string;
  cargo: string;
  foto: string; // caminho em public/images/team/
  email?: string;
  whatsapp?: string;
  linkedin?: string;
  instagram?: string;
}

export const EMPLOYEES: Employee[] = [
  {
    slug: "gustavo-melo",
    nome: "Gustavo Oliveira Melo",
    cargo: "Coordenador de T.I",
    foto: "/images/team/gustavo-melo.jpg",
    email: "gustavo@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "https://linkedin.com/in/gustavo-melo-eng",
    instagram: "https://instagram.com/gugamelo__",
  },
  {
    slug: "vagner-costa",
    nome: "Vagner Costa",
    cargo: "Gerente Comercial",
    foto: "/images/team/vagner-costa.jpg",
    email: "vagner@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/vaguineh",
  },
  {
    slug: "ana-celia",
    nome: "Ana Célia",
    cargo: "Gerente Financeiro",
    foto: "/images/team/ana-celia.jpg",
    email: "anacelia@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/anacelia.loc",
  },
  {
    slug: "cleriston-lima",
    nome: "Cleriston Lima",
    cargo: "CEO",
    foto: "/images/team/cleriston-lima.jpg",
    email: "cleriston@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/cleriston_lo",
  },
  {
    slug: "douglas-brito",
    nome: "Douglas Brito",
    cargo: "Técnico T.I",
    foto: "/images/team/douglas-brito.jpg",
    email: "douglas@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "",
  },
  {
    slug: "glayson-cruz",
    nome: "Glayson Cruz",
    cargo: "Técnico T.I",
    foto: "/images/team/glayson-cruz.jpg",
    email: "glayson@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "",
  },
  {
    slug: "guilherme-marques",
    nome: "Guilherme Marques",
    cargo: "Técnico T.I",
    foto: "/images/team/guilherme-marques.jpg",
    email: "guilherme@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/vaguineh",
  },
  {
    slug: "lucas-ramos",
    nome: "Lucas Ramos",
    cargo: "Técnico de T.I",
    foto: "/images/team/lucas-ramos.jpg",
    email: "lucas@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/lucas_ramosr",
  },
  {
    slug: "glecy-lima",
    nome: "Glecy Lima",
    cargo: "Gerente Financeiro",
    foto: "/images/team/glecy-lima.jpg",
    email: "glecy@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/lglecy",
  },
  {
    slug: "luis-gustavo",
    nome: "Luis Gustavo",
    cargo: "Engenheiro de Software",
    foto: "/images/team/luis-gustavo.jpg",
    email: "luisgustavo@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/_gomesluis",
  },
    {
    slug: "thales-reis",
    nome: "Thales Reis",
    cargo: "Técnico de T.I",
    foto: "/images/team/thales-reis.jpg",
    email: "thales@ztha.com.br",
    whatsapp: "5575999999999",
    linkedin: "",
    instagram: "https://instagram.com/thalesregibus",
  },
];

export function getEmployeeBySlug(slug: string): Employee | undefined {
  return EMPLOYEES.find((e) => e.slug === slug);
}