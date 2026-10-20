# Next.js Tailwind Portfolio Template

A portfolio starter built with Next.js 15.5.25, React, TypeScript, Tailwind CSS, and Framer Motion. It includes example content and unfinished integrations; review the limitations below before using it as a public portfolio.

[Repository](https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template) · [Issues and feature requests](https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template/issues) · [Contributing](CONTRIBUTING.md) · [MIT license](LICENSE)

![Portfolio preview](public/preview.gif)

The preview is a supplied asset, not evidence that the current revision has passed browser, performance, or accessibility checks.

## Included implementation

- App Router pages for the homepage, project list, project details, and sample blog posts.
- Responsive Tailwind styles, Framer Motion animations, and reusable UI components.
- A `next-themes` provider and theme toggle, including system-theme configuration. Full light/dark coverage still needs visual verification.
- TypeScript strict mode, a type-check command, and a Prettier formatting command.
- Demonstration visitor-count and feedback routes. These are not production analytics or a working message-delivery service.

## Local setup

Use Git, npm, and a maintained Node.js LTS release compatible with Next.js 15.5.25. Verification used Node.js 24.13.0 and npm 11.6.2. The installed Next.js package declares Node.js `^18.18.0 || ^19.8.0 || >=20.0.0`; this repository does not pin a runtime.

The calendar dependency uses `react-day-picker@8.10.1` with compatible `date-fns@3.6.0`. The complete npm lockfile records the resolved dependency tree. A clean install and production build were verified on 2026-10-20 with Node.js 24.13.0 and npm 11.6.2; see the check results below.

```sh
git clone https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template.git
cd nextjs-tailwind-portfolio-template
npm ci --ignore-scripts
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the development server with Ctrl+C.

No environment file or analytics account is needed for the included demo routes. Google Analytics script loading is not configured; setting `NEXT_PUBLIC_GA_ID` alone does not enable tracking.

Use npm with the supplied `package-lock.json`; the previous settings-only pnpm stub was removed. `npm ci --ignore-scripts` installs the locked tree without dependency lifecycle scripts; the build was verified with that installation. Several manifest entries still use `latest`, but `npm ci` uses the lockfile rather than resolving them again. Update dependencies deliberately with a reviewed lockfile change. No `--force` or `--legacy-peer-deps` flags are required.

## Commands and checks

| Command | Purpose and current limitation |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run type-check` | Run TypeScript separately; also enforced during the production build |
| `npm run lint` | Run `next lint`; ESLint dependencies and configuration are not supplied in this checkout |
| `npm run lint:fix` | Run `next lint --fix`, with the same setup limitation |
| `npm run format` | Format files with Prettier; this modifies files |
| `npm run build` | Create the Next.js production build after dependencies are installed |
| `npm run start` | Serve a successful production build with `next start` |

There is no `test` script, configured bundle analyzer, or Husky hook setup. The former `analyze` script was removed because it called the removed `next export` command and an undeclared analyzer through `npx`.

The production build validates TypeScript; the former `ignoreBuildErrors` bypass was removed. `next.config.mjs` still skips ESLint during builds and disables image optimization. A successful build therefore does not establish lint cleanliness, optimized images, or production readiness. Run separate checks and report their actual results.

## Verified checks — 2026-10-20

- `npm ci --ignore-scripts --no-audit --no-fund`: passed from an absent `node_modules` directory; installed 405 packages.
- `npm ls date-fns react-day-picker --depth=1`: passed; the calendar shares date-fns 3.6.0 without a peer conflict.
- `NEXT_TELEMETRY_DISABLED=1 npm run build`: passed; generated 13 static pages and the configured dynamic routes. Type validation is enabled; linting remains skipped. Warnings remain about missing `metadataBase` and workspace-root inference caused by a parent lockfile.
- `npm run type-check -- --incremental false`: passed with zero diagnostics after typing the animation variants and deriving toast state from the component props. No TypeScript suppression or contract weakening was added.
- `npm audit --json`: reported zero critical advisories after upgrading Next.js to 15.5.25. Nine high/moderate dependency findings remain (six high, three moderate), including a moderate finding attributed to Next.js. No forced audit upgrade was applied.

- Local production-server HTTP smoke checks passed for the homepage, a project detail page, a blog article, and the visits API. The migrated POST handler correctly excluded a bot request; an unknown project produced the framework's streamed not-found response. The local server was stopped afterward.

No browser interaction, end-to-end, or production deployment verification is claimed.

## Customize the actual content sources

Content is spread across several files; changing `lib/config.ts` does not update the whole site.

| Content | Files to review |
| --- | --- |
| Homepage text, experience, featured projects, and blog summaries | [app/page.tsx](app/page.tsx) |
| Project list and detail-page data | [data/projects.ts](data/projects.ts) |
| Homepage skills and proficiency displays | [components/skills-section.tsx](components/skills-section.tsx) |
| Blog index and article content | [app/blog/page.tsx](app/blog/page.tsx), [app/blog/[slug]/page.tsx](app/blog/%5Bslug%5D/page.tsx) |
| Shared configuration and SEO helpers | [lib/config.ts](lib/config.ts), [utils/seo.ts](utils/seo.ts) |
| Page metadata and search-engine URLs | [app/layout.tsx](app/layout.tsx), [app/robots.ts](app/robots.ts), [app/sitemap.ts](app/sitemap.ts) |
| Images and other public files | [public/](public/) |

Replace sample employers, dates, project metrics, performance badges, social links, email addresses, and deployment URLs with your own supported content. The supplied numbers are not verified outcomes. `public/resume.pdf` is not supplied: add an approved resume or remove its links before publishing. Review duplicate content in section components as well as the active homepage.

The previously documented `data/skills.ts` and `data/blog.ts` files do not exist. There is no configured CMS.

## Integration limitations

- **Visitor counts:** [app/api/visits/route.ts](app/api/visits/route.ts) uses seeded, process-memory counters and a random daily increment. Counts reset with the process and do not represent reliable unique visitors or historical analytics.
- **Feedback:** [app/api/feedback/route.ts](app/api/feedback/route.ts) validates a message, logs submitted data, and returns a demonstration success response. It does not persist feedback or deliver email. Do not submit sensitive information to this demo.
- **Contact forms:** [components/contact-form.tsx](components/contact-form.tsx) calls `/api/contact`, but that route is absent. [components/sections/contact-section.tsx](components/sections/contact-section.tsx) simulates submission with a delay. Neither is evidence of message delivery; the active homepage uses contact links and a separate feedback form.
- **Analytics:** helper functions call `window.gtag` or `window.plausible` only if those globals exist. No provider script is loaded by the inspected layout. No Lighthouse score, Core Web Vitals result, uptime, or security grade has been verified for this cleanup.

## Framework security update

Next.js was upgraded from 14.2.16 to 15.5.25. The upstream [Windows server advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36) and [AVIF image advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4) identify 15.5.24 as a patched release; the selected later patch is verified by the current audit. Project route parameters and request headers now use asynchronous access, and the client blog page reads its slug through `useParams`, following the [Next.js 15 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-15). React 18 remains within the installed framework's published peer range; no React/calendar major migration was performed.

## Build and deployment

After resolving setup and check failures, a server-based production preview uses:

```sh
npm run build
npm run start
```

The current configuration uses Next.js server routes, including POST handlers. It does not set `output: 'export'` and does not produce an `out` directory for drag-and-drop static hosting. Static export would require a separate design change that removes or replaces unsupported server behavior; `next export` is not available in Next.js 14. See the official [deployment guide](https://nextjs.org/docs/14/app/building-your-application/deploying) and [static-export limitations](https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports).

Choose a host with Next.js server support only after a successful local build and integration review. No deployment is performed by these local commands. The existing workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) includes a Vercel production-deployment job on main, so review it before pushing or enabling its credentials. Its checks also reference `npm ci`, a missing `test` script, and a missing Lighthouse configuration; this cleanup does not establish passing CI or repair the deployment workflow.

## Contributing and license

Use the [contribution guide](CONTRIBUTING.md) and [GitHub issues](https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template/issues). Report the exact checks you ran and their results. Do not claim passing tests, measurements, or delivery integrations from the presence of sample code.

The repository includes an [MIT license](LICENSE). Review third-party asset permissions before reusing or publishing them.
