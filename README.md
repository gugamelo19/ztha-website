# ZTHA Website

Site institucional da ZTHA Tecnologia — Next.js 14, TypeScript, Tailwind CSS.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS
- **Fontes:** Space Grotesk (display) + Inter (body) via next/font
- **Ícones:** Lucide React
- **Animações:** Framer Motion + CSS nativo

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Estrutura

```
src/
├── app/              # Rotas (App Router)
│   ├── layout.tsx    # Layout raiz (fontes, metadata)
│   ├── page.tsx      # Home
│   └── globals.css   # Estilos globais + tokens
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Services, Coverage, Partners, CTA
│   └── ui/           # Botões, Cards, Badge (componentes reutilizáveis)
└── lib/
    ├── constants.ts  # Dados da empresa, serviços, parceiros, nav
    └── utils.ts      # Helpers (cn, etc.)
```

## Deploy

Configurado para deploy na Vercel. Basta conectar o repositório.

## Cores da marca

| Token | Hex |
|---|---|
| Teal (primário) | `#4DB89E` |
| Teal dark | `#3AA88E` |
| Teal light | `#F0FAF7` |
| Grafite | `#555F6B` |
| Dark | `#1A2236` |
