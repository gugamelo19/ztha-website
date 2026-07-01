// ─── Identidade Visual ────────────────────────────────────────────────────────
export const COLORS = {
  teal: "#4DB89E",
  tealDark: "#3AA88E",
  tealLight: "#F0FAF7",
  tealBorder: "#C8EDE4",
  graphite: "#555F6B",
  dark: "#1A2236",
  darkMid: "#4B5A72",
  muted: "#6B7A93",
  border: "#E8EBF0",
  bg: "#F7F8FA",
  white: "#FFFFFF",
} as const;

// ─── Empresa ──────────────────────────────────────────────────────────────────
export const COMPANY = {
  name: "ZTHA",
  fullName: "ZTHA Tecnologia",
  tagline: "Soluções completas em Tecnologia da Informação",
  description:
    "Soluções completas em TI para empresas e pessoas físicas — do suporte técnico ao desenvolvimento de software, com atendimento em todo o Brasil.",
  city: "Serrinha",
  state: "Bahia",
  country: "Brasil",
  whatsapp: "https://wa.me/557521370002", 
  email: "contato@ztha.com.br",
  yearsInBusiness: 10,
} as const;

// ─── Serviços ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "cftv",
    name: "CFTV",
    description:
      "Câmeras de segurança e monitoramento visual para residências e empresas com equipamentos de última geração.",
    icon: "video",
  },
  {
    id: "monitoramento",
    name: "Monitoramento 24h",
    description:
      "Central de monitoramento ativa todos os dias, sem interrupção. Segurança real para o seu patrimônio.",
    icon: "shield-check",
  },
  {
    id: "backup",
    name: "Backup em Nuvem",
    description:
      "Seus dados protegidos com redundância e recuperação garantida. Nunca perca informações críticas.",
    icon: "cloud-upload",
  },
  {
    id: "cabeamento",
    name: "Cabeamento Estruturado",
    description:
      "Infraestrutura de rede lógica e física com padrão profissional para ambientes corporativos e residenciais.",
    icon: "plug-connected",
  },
  {
    id: "software",
    name: "Desenvolvimento de Software",
    description:
      "Sistemas e plataformas digitais construídos sob medida para as necessidades do seu negócio.",
    icon: "code",
  },
  {
    id: "redes",
    name: "Infraestrutura de Redes",
    description:
      "Projetos e implantação de redes corporativas e domésticas com suporte técnico especializado.",
    icon: "server-2",
  },
] as const;

// ─── Parceiros ────────────────────────────────────────────────────────────────
export const PARTNERS = [
  { id: "lenovo",    name: "Lenovo" },
  { id: "dell",      name: "Dell" },
  { id: "hp",        name: "HP" },
  { id: "intelbras", name: "Intelbras" },
  { id: "hikvision", name: "Hikvision" },
] as const;

// ─── Navegação ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Serviços",  href: "/servicos" },
  { label: "Sobre",     href: "/sobre" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Cobertura", href: "/cobertura" },
  { label: "Contato",   href: "/contato" },
] as const;
