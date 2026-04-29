# Mishab Portfolio — Next.js

A frontend-only Next.js 14 (App Router) rebuild of the original HTML/CSS portfolio. TypeScript + Tailwind CSS + Framer Motion. Single source of truth in `lib/data.ts`. Deployable on Vercel as a static-friendly site.

## Quick start

```bash
cd portfolio-next
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — Next.js / ESLint check

## Project structure

```
portfolio-next/
├── app/
│   ├── globals.css        # Tailwind + Josefin Sans + base resets
│   ├── layout.tsx         # Metadata, fonts, body
│   └── page.tsx           # Composes the page sections
├── components/
│   ├── Navbar.tsx         # Sticky nav + mobile drawer
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx    # web3forms integration
│   ├── Social.tsx
│   ├── Footer.tsx
│   └── SectionHeading.tsx
├── lib/
│   └── data.ts            # ⭐ Edit content here
├── public/
│   └── img/               # All images, icons, and PDFs
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Editing content — `lib/data.ts`

Everything that shows up on the page is exported from `lib/data.ts`. Edit there and save — the page reflects the change.

| Want to change…           | Edit this export in `lib/data.ts`                       |
|---------------------------|---------------------------------------------------------|
| Name, title, bio, phones, email, location | `personal`                              |
| CV PDF                    | `personal.cvFile` (drop the new file in `public/img/`)  |
| Hero / about photos       | `personal.heroImage`, `personal.aboutImage`             |
| Social links              | `social`                                                |
| Skill list & percentages  | `skills[0].items` (`name`, `level`, `icon`)             |
| Projects                  | `projects` (each has `title`, `description`, `tech`, `image`, `liveUrl`, `repoUrl`) |
| Experience entries        | `experience`                                            |
| Education entries         | `education`                                             |
| Top-nav items / anchors   | `navigation`                                            |
| Contact form (web3forms)  | `contactConfig` (`formAccessKey`, `formSubject`)        |
| Footer text               | `copyright`                                             |

### Adding a new project

```ts
{
  title: "My New Site",
  description: "What it is.",
  tech: ["React", "Tailwind"],
  image: "/img/my-new-site.png",   // place file in public/img/
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/you/repo",  // or null
}
```

### Adding a new image

1. Drop the file into `public/img/`.
2. Reference it in `lib/data.ts` as `/img/your-file.png` (the leading slash matters — paths are public-relative, not filesystem-relative).

### Adjusting a skill bar

```ts
{ name: "TypeScript", level: 85, icon: "/img/ts.png" }
```

`level` is a 0–100 integer that drives the progress-bar width.

## Deploying to Vercel

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js**. Root directory: `portfolio-next` (if the repo also contains the legacy site at the root).
4. Click **Deploy**. No env vars needed — there is no backend.

Subsequent pushes to `main` redeploy automatically.

### Custom domain

In the Vercel project → Settings → Domains, add your domain and follow the DNS instructions.

## Notes

- **Web3forms** — the contact form posts directly to `api.web3forms.com` using the existing access key. To rotate, change `contactConfig.formAccessKey` in `lib/data.ts`.
- **No backend** — every page renders statically; nothing runs on a server at request time.
- **Images** — use `next/image` everywhere; `public/img/` is served as-is.
- **Animations** — Framer Motion drives the subtle fade-up on each section and the skill bar fill. Remove `motion.*` calls if you'd prefer the original's restraint.

## License

Personal portfolio — content © Muhammed Mishab.
