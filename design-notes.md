# Design Notes — Mishab Portfolio

## Overall vibe
Dark, minimal, monochrome. The whole site is black with charcoal `#1A1A1A` cards stacked on top of it. Content is centered, sectioned, and breathes — not dense. White text and white accents only; no gradients, no photo overlays, no glass effects.

## Color palette
| Role                | Value              | Where it shows up                                              |
|---------------------|--------------------|----------------------------------------------------------------|
| Page background     | `#000000` (black)  | `<body>`, every section, navbar                                |
| Card surface        | `#1A1A1A`          | Skill cards, project cards, about/experience/education boxes, contact form bg, social-icon tiles |
| Primary text        | `#FFFFFF`          | Headings, body copy, button labels                             |
| Muted text          | `rgb(226,226,226)` | Form placeholders                                              |
| Bar track           | `#FFFFFF`          | Skill progress bar container                                   |
| Bar fill            | `rgb(142,142,142)` | Skill bar fill, contact-form input background                  |
| Section divider     | `#1A1A1A`          | 1px top border on the copyright bar                            |
| Error text          | `gray`             | Form validation messages                                       |

## Typography
- One typeface throughout: **Josefin Sans** (Google Fonts), normal style.
- Applied globally to `h1, h2, h3, h5, p, span, a` plus form inputs/textarea.
- Hero `h1` is large, uppercase-feeling but sentence-case ("Muhammed Mishab"); the role tag below it (`h3`) is `20px`.
- Section headings follow a consistent two-line pattern:
  - small light-weight intro `<p>` ("Get To Know More", "Explore My", "Browse My Recent", "Get In Touch", "Stay in Touch")
  - bold white `<h1>` underneath ("About Me", "Software Skills", "Projects", "Contact Me", "Join Me Online")
- Skill card labels and project card labels are `text-transform: uppercase`.

## Layout
- Single-page scrolling site with anchor links: `#about`, `#skills`, `#projects`, `#conatct-section` (note: typo preserved in the legacy markup; cleaned to `#contact` in the KB).
- Built on Bootstrap 5 grid: `col-md-6` two-up for About / Contact, `col-md-4` three-up for Skills / Projects.
- Hero (`section-one`): two-column flex, 80vh tall, copy left / circular avatar right; collapses to a single column under 480px.
- Every other section (`section-two`) is full-width black with `pt-4 pb-4` (or `pt-5 pb-5`) vertical rhythm and a centered Bootstrap container inside.
- Cards are uniform-height blocks with `display:flex; flex-direction:column; align-items:center; justify-content:space-evenly` — content is vertically distributed inside, never crammed at the top.

### Card sizes
- Skill card: 200px tall, 40×40 icon, label, then horizontal progress bar (80% width, 15px tall, 10px radius).
- Project card: 350px tall, image fills 70% width contained, uppercase title, outline pill button.
- About/Experience/Education boxes: auto height, 40×40 icon at the top.
- Address card: row layout, 30×30 icon left, two-line text right.

## Buttons
Two recurring shapes:
1. **Pill outline** — 50×130, `border-radius: 25px`, 2px white border, transparent (or black) bg, white text. Used for "Download CV" and project "View Live" (slightly smaller: 40×150, 20px radius).
2. **Pill solid** — same dims, white background, black text, no border. Used for "Contact Info" hero CTA.
3. Form submit button is a flat white rectangle (150×40, no radius, uppercase) with `#1A1A1A` text — intentionally squarer than the pill buttons.

## Imagery
- Hero avatar sits inside a circular `dp-main` mask (`border-radius: 50%`, overflow hidden).
- About-section profile photo is also circular.
- Skill / contact / social icons are tiny PNG glyphs (30–40px), mostly monochrome white-on-dark.
- Project card images are screenshots of the actual sites, contained (not cropped) so the whole layout shows.
- Social icon tiles: 60×60 (50×50 on mobile) `#1A1A1A` squares with the brand glyph centered — not circular, not on a colored brand background.

## Spacing & rhythm
- Bootstrap gutters `gx-4 gy-4` between cards.
- Each section uses `pt-4 pb-4` or `pt-5 pb-5` (Bootstrap spacing scale) — generous breathing room.
- Container padding `px-4` on inner rows keeps content off the edge.

## Animations / interactions
Deliberately restrained — there is exactly one hover effect in the legacy CSS:
- `.skill-card:hover { background-color: black; cursor: pointer; }` (transitions via `transition: all 0.3s ease`).
- `.project-card` has the same `transition: all 0.3s ease` declared but no hover rule firing — leaves room to add a subtle lift/glow in the rebuild without breaking the aesthetic.
- No keyframe animations, no scroll reveals, no parallax.
- Navigation is pure anchor scrolling (browser default jump).

Suggested tasteful additions for the Next.js version (kept optional):
- Smooth-scroll on anchor clicks (`scroll-behavior: smooth` on `html`).
- Fade-up-on-view for section content via Framer Motion (`whileInView`, 0.4s, 20px translate).
- Project card hover: scale 1.02 + border lights up to white.
- Skill bar fills with a width transition the first time it scrolls into view.

## Navigation
- Desktop: 80px black bar with the logo image only — no links rendered. (Section anchors are reachable via the hero CTA and via mobile nav.)
- Mobile (≤480px): black bar, logo left, hamburger right opening a Bootstrap right-side offcanvas with a custom background image (`offcanvas-bg.jpg`) and white-on-dark text links: phone, email, WhatsApp, LinkedIn.

## Forms
- Contact form posts to web3forms with hidden `access_key` + `subject`.
- Inputs are flat gray (`rgb(142,142,142)`), no border, no radius, 40px tall, white-ish placeholders.
- Client-side validation: name required, regex-checked email, phone required and ≤10 chars, error text in gray below each field.
- Success: `alert('Thank You for Contacting Me!')` and form reset.

## Footer
- "Stay in Touch" → "Join Me Online" section with five social tiles (LinkedIn, GitHub, WhatsApp, Instagram, X/Twitter).
- Black copyright bar with a 1px `#1A1A1A` top border: `Copyright © 2026 | By Mdes&co | All rights reserved`.

## What to preserve in the Next.js rebuild
1. Black + `#1A1A1A` palette and Josefin Sans typeface — non-negotiable.
2. Two-line section header pattern ("Get To Know More" / "About Me").
3. Pill buttons (outline + solid) and the squarer flat submit button.
4. Skill bars with the same percentage values as the KB (90/90/80/75/90/65).
5. Card layouts with even vertical distribution — the cards should look like the originals at a glance.
6. Mobile-first single column collapse for the hero and a slide-in nav drawer on small screens.

## What's safe to modernize
- Replace inline JS form validation with React state + minimal helpers.
- Use `next/image` for project shots and avatars (sizes are known, image dims preserve aspect).
- Use Tailwind utilities instead of Bootstrap grid; map `col-md-6` → `md:col-span-6`, `col-md-4` → `md:col-span-4` on a 12-col grid (or `md:grid-cols-2` / `md:grid-cols-3`).
- Drop Font Awesome + Bootstrap JS bundle; use lucide-react (or react-icons) for the few glyphs needed.
- Add `scroll-behavior: smooth` and gentle Framer Motion fade-ups (optional).
