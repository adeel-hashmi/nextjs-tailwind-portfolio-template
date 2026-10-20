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

Use Git, npm, and Node.js 22 or 24. These are the CI matrix versions. Verification used Node.js 24.13.0 and npm 11.6.2. The installed Next.js package declares Node.js `^18.18.0 || ^19.8.0 || >=20.0.0`; this repository does not pin a runtime.

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
| `npm run lint` | Run ESLint with Next.js Core Web Vitals and TypeScript rules; warnings fail the check |
| `npm run lint:fix` | Apply ESLint fixes and fail on remaining warnings; this modifies files |
| `npm test` | Run three notification behavior tests with the Node.js test runner |
| `npm run lighthouse` | Check three local production pages in Chrome; requires a successful build |
| `npm run format` | Format files with Prettier; this modifies files |
| `npm run build` | Create the Next.js production build after dependencies are installed |
| `npm run start` | Serve a successful production build with `next start` |

There is no configured bundle analyzer or Husky hook setup. The former `analyze` script was removed because it called the removed `next export` command and an undeclared analyzer through `npx`.

The production build validates TypeScript; the former `ignoreBuildErrors` bypass was removed. Build-time linting is enabled as well; image optimization remains disabled. A successful build does not establish optimized images or production readiness. Run separate checks and report their actual results.

## Verified checks — 2026-10-20

- `npm ci --ignore-scripts --no-audit --no-fund`: passed with the updated lint/browser tooling dependency tree.
- `npm ls date-fns react-day-picker --depth=1`: passed; the calendar shares date-fns 3.6.0 without a peer conflict.
- `NEXT_TELEMETRY_DISABLED=1 npm run build`: passed; generated 14 static pages and the configured dynamic routes. Type validation and linting are enabled. A warning remains about missing `metadataBase`; output-file tracing is scoped to this repository to avoid parent-lockfile inference.
- `npm run lint`: passed with zero warnings; no lint rule is disabled. Generated output and the existing nested local worktree are excluded, while application sources remain included.
- `npm test`: three behavior tests passed, covering newest-notification replacement, update preservation, and dismissal before removal for exit animation.
- `npm run type-check -- --incremental false`: passed with zero diagnostics after typing the animation variants and deriving toast state from the component props. No TypeScript suppression or contract weakening was added.
- `npm audit --json`: reported zero critical advisories after upgrading Next.js to 15.5.25. The expanded development-tooling tree has 28 advisory entries (19 high, seven moderate, two low), including a moderate finding attributed to Next.js. These include transitive tooling dependencies; production and development findings still require separate review. No forced audit upgrade was applied.

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
- **Analytics:** helper functions call `window.gtag` or `window.plausible` only if those globals exist. No provider script is loaded by the inspected layout. Lighthouse records local lab reports for the configured routes; no general Core Web Vitals field result, uptime, or security grade is established.

## Framework security update

Next.js was upgraded from 14.2.16 to 15.5.25. The upstream [Windows server advisory](https://github.com/vercel/next.js/security/advisories/GHSA-p293-qw3h-jr36) and [AVIF image advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4) identify 15.5.24 as a patched release; the selected later patch is verified by the current audit. Project route parameters and request headers now use asynchronous access, and the client blog page reads its slug through `useParams`, following the [Next.js 15 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-15). React 18 remains within the installed framework's published peer range; no React/calendar major migration was performed.

## Build and deployment

After resolving setup and check failures, a server-based production preview uses:

```sh
npm run build
npm run start
```

The current configuration uses Next.js server routes, including POST handlers. It does not set `output: 'export'` and does not produce an `out` directory for drag-and-drop static hosting. Static export would require a separate design change that removes or replaces unsupported server behavior; `next export` is not available in Next.js 14. See the official [deployment guide](https://nextjs.org/docs/14/app/building-your-application/deploying) and [static-export limitations](https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports).

GitHub Actions runs validation checks; the connected Vercel integration handles deployments. The workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs a locked install, type checking, linting, notification tests, and a build on Node.js 22 and 24. The Node.js 24 job also runs Lighthouse against the local homepage, project list, and blog index. Dependencies are pinned by the npm lockfile. Workflow actions use readable major-version tags (`actions/checkout@v4` and `actions/setup-node@v4`); these tags can receive upstream updates and should be reviewed during maintenance. No Lighthouse report is uploaded to temporary public storage.

## Lighthouse scope

Install Chrome locally and run `npm run build` followed by `npm run lighthouse`. Reports stay in ignored `.lighthouseci/`; no upload command is configured. The check fails on bad HTTP status, browser console errors, missing document title, missing HTML language, or missing viewport metadata across three pages. One lab run per URL records performance data without claiming a stable performance budget, complete accessibility, or Core Web Vitals field results. Review reports before agreeing to additional budgets.

## Contributing and license

Use the [contribution guide](CONTRIBUTING.md) and [GitHub issues](https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template/issues). Report the exact checks you ran and their results. Do not claim passing tests, measurements, or delivery integrations from the presence of sample code.

The repository includes an [MIT license](LICENSE). Review third-party asset permissions before reusing or publishing them.
