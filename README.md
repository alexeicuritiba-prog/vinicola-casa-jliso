# Vinícola Casa J Liso

Site institucional da [Vinícola Casa J Liso](https://vinicolacasajliso.com.br), em Mirassol, São Paulo. Página única em português (pt-BR), feita com Vite, React, TypeScript e Tailwind CSS.

Instagram: [instagram.com/vinicolacasaj.liso](https://www.instagram.com/vinicolacasaj.liso/)

## Rodar localmente

Requisitos: Node.js 22+ e npm.

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe em `http://localhost:5173`.

Outros comandos:

```bash
npm run build    # compilação de produção em dist/
npm run preview  # serve o build localmente
npm run lint     # oxlint
```

## Deploy na Vercel

A Vercel deve publicar a partir da branch `main`.

1. Importe o repositório no [dashboard da Vercel](https://vercel.com/new).
2. Framework preset: **Vite** (detectado automaticamente).
3. Build command: `npm run build`
4. Output directory: `dist`
5. Production branch: `main`

Domínio previsto: `vinicolacasajliso.com.br`.
