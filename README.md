This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📄 Projeto: Doutores da Esperança

O projeto **Doutores da Esperança** é uma plataforma web desenvolvida para a gestão de voluntários. O sistema permite o cadastro de novos membros, gerenciamento de perfis, acompanhamento de inscrições em atividades, envio de anexos e aceitação de termos de uso. O objetivo é centralizar e facilitar a organização das atividades dos voluntários em um ambiente seguro e intuitivo.

## 🛠️ Bibliotecas e Dependências

### Core
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (ícones)

### Banco de Dados & Autenticação
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [Neon Database](https://neon.tech/) (PostgreSQL Serverless)
- **Auth:** [NextAuth.js v5](https://authjs.dev/)
- **Validação:** [Zod](https://zod.dev/)

### UI & UX
- **Componentes:** [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Carrossel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Utilitários:** `clsx`, `tailwind-merge`, `class-variance-authority`

## 📂 Estrutura de Pastas

```text
src/
├── app/                  # Rotas e páginas da aplicação (App Router)
│   ├── (dashboard-area)/ # Área administrativa do voluntário
│   ├── (login-area)/     # Páginas de autenticação (Login, Cadastro)
│   ├── api/              # Endpoints da API
│   └── globals.css       # Estilos globais
├── components/           # Componentes React reutilizáveis
│   └── UI/               # Componentes de interface (Cards, Forms, Sidebar)
├── db/                   # Configuração do banco de dados e schemas (Drizzle)
├── hooks/                # Hooks customizados
├── lib/                  # Lógica compartilhada, Server Actions e utilitários
└── types/                # Definições de tipos TypeScript
public/                   # Ativos estáticos (imagens, ícones)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
