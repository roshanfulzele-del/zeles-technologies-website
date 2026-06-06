# Zeles Technologies — Corporate Website

Official website of **Zeles Technologies Pvt. Ltd.** (zelestech.com) — an Indian enterprise cybersecurity, cloud, and infrastructure solutions company headquartered in Nagpur, Maharashtra.

---

## Live Site

[zelestech.com](https://zelestech.com)

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Routing | Wouter |
| Forms | React Hook Form + Zod |
| Monorepo | pnpm workspaces |
| Node | 24.x |

---

## Repository Structure

```
zeles-technologies-website/
├── artifacts/
│   ├── zeles-tech/          # Main React + Vite website
│   │   ├── src/
│   │   │   ├── assets/      # Logo and static images
│   │   │   ├── components/  # Shared UI components
│   │   │   │   ├── layout/  # Navbar, Footer, PageLayout
│   │   │   │   └── ui/      # shadcn/ui primitives
│   │   │   ├── pages/       # All route pages
│   │   │   │   ├── home.tsx
│   │   │   │   ├── about.tsx
│   │   │   │   ├── services/
│   │   │   │   ├── industries.tsx
│   │   │   │   ├── technology.tsx
│   │   │   │   ├── case-studies.tsx
│   │   │   │   ├── blog.tsx
│   │   │   │   ├── careers.tsx
│   │   │   │   └── contact.tsx
│   │   │   ├── lib/         # Utilities (cn, etc.)
│   │   │   ├── index.css    # Global styles + theme tokens
│   │   │   ├── App.tsx      # Router setup
│   │   │   └── main.tsx     # Entry point
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── package.json
│   └── api-server/          # Express API server (optional backend)
├── lib/                     # Shared TypeScript libraries
├── scripts/                 # Utility scripts
├── pnpm-workspace.yaml      # Workspace config
├── tsconfig.json            # Root TypeScript solution config
└── package.json             # Root dev tooling
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services overview, cyber threat visualization, and CTA |
| `/about` | Company story, leadership, timeline, and values |
| `/services` | All services landing page |
| `/services/cybersecurity` | Cybersecurity consulting |
| `/services/data-security` | Data protection & DLP |
| `/services/cloud-security` | Cloud security (AWS, Azure) |
| `/services/network-infrastructure` | Network & SD-WAN |
| `/services/sase-zero-trust` | SASE & Zero Trust Architecture |
| `/services/managed-security` | Managed SOC & SIEM |
| `/services/software-development` | Secure software development |
| `/industries` | Industry verticals served |
| `/technology` | Technology partners |
| `/case-studies` | Client case studies |
| `/blog` | Blog & insights |
| `/careers` | Open positions |
| `/contact` | Contact form and office details |

---

## Local Development

### Prerequisites

- [Node.js 24+](https://nodejs.org/)
- [pnpm 9+](https://pnpm.io/installation)

```bash
npm install -g pnpm
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
# Website only
pnpm --filter @workspace/zeles-tech run dev

# With API server
pnpm --filter @workspace/api-server run dev
```

The site runs at `http://localhost:<PORT>` (PORT is set by the run environment).

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PORT` | Yes (dev) | Port for the Vite dev server |
| `BASE_PATH` | Yes (dev) | Base path prefix for asset routing |
| `SESSION_SECRET` | API only | Secret for session signing |
| `DATABASE_URL` | API only | PostgreSQL connection string |

Copy `.env.example` and fill in values:

```bash
cp .env.example .env
```

> **Never commit `.env` to version control.** It is listed in `.gitignore`.

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code — deployed to live site |
| `development` | Integration branch — PRs merge here first |
| `feature/*` | Individual feature branches off `development` |
| `hotfix/*` | Critical production fixes branched from `main` |

**Workflow:**

```
feature/xyz → development → (PR review) → main → deploy
```

---

## Deployment

### Replit (recommended)

This project is configured for one-click deployment on Replit:

1. Open the Replit project
2. Click **Deploy** → **Publish**
3. The site will be live at `https://<slug>.replit.app` or a custom domain

### Manual / Self-hosted

```bash
# 1. Install dependencies
pnpm install

# 2. Build all packages
pnpm run build

# 3. Serve the static output
# Output is in: artifacts/zeles-tech/dist/public/
npx serve artifacts/zeles-tech/dist/public
```

### Docker (optional)

```dockerfile
FROM node:24-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build
EXPOSE 3000
CMD ["npx", "serve", "artifacts/zeles-tech/dist/public", "-l", "3000"]
```

---

## Contact

**Zeles Technologies Pvt. Ltd.**
504 Dahilia Shiv, Elite Phase 3
KH No 67/2, Khapri, Nagpur
Maharashtra, India – 441108

- Email: [admin@zelestech.com](mailto:admin@zelestech.com)
- Phone: [+91 71240 63788](tel:+917124063788)
- Web: [zelestech.com](https://zelestech.com)

---

## License

Proprietary — All rights reserved © Zeles Technologies Pvt. Ltd.
