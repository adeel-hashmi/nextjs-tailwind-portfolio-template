# Next.js Tailwind Portfolio Template

A portfolio starter built with Next.js 15.5.28, React, TypeScript, Tailwind CSS, and Framer Motion. It includes example content and unfinished integrations; review the limitations below before using it as a public portfolio.

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

Use Git, npm, and Node.js 22.19+ within the 22.x line or Node.js 24.x. These are the supported CI matrix lines; the Lighthouse tooling requires Node.js 22.19 or newer. The package manifest declares this runtime range. Local verification used Node.js 24.13.0 and npm 11.6.2; Node.js 22 was not rerun locally for this update.

The calendar dependency uses `react-day-picker@8.10.1` with compatible `date-fns@3.6.0`. The complete npm lockfile records the resolved dependency tree. A clean install and production build were verified on 2026-10-21 with Node.js 24.13.0 and npm 11.6.2; see the check results below.

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
| `npm test` | Run notification behavior and Lighthouse failure-detection tests with the Node.js test runner |
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

That earlier check did not include browser interaction, end-to-end, or production deployment verification.

## Presentation cleanup verification — 21 October 2026

A separate local review copy passed the locked install (`npm ci --ignore-scripts`), type checking, lint, all three existing tests and a production build. HTTP checks passed for the home page, project index, three sample project pages, blog index and three sample articles; those pages carry the demo notice and no inspected action points to a placeholder domain, old social handle or missing resume. The homepage fragment links resolve. The robots and sitemap URLs use the demo domain.

At that presentation-only checkpoint, the unchanged lockfile reported 28 affected packages in the full audit and 9 with `--omit=dev`. The dependency update below supersedes those counts; the presentation cleanup alone did not resolve them.

## Public demo boundaries

The hosted demo labels its profiles, employers, project case studies, metrics and proficiency values as illustrative sample content. It uses a generic profile and links to this repository for source and setup. Sample project deployments, social/contact destinations and a resume are not supplied. The resume control is disabled with an explanation; other unfinished contact actions, feedback submission, WhatsApp and simulated visitor widgets are not mounted in the demo.

The example integration components and API routes remain in the source for review; hiding a widget does not implement its backend or remove its route. Replace the examples, configure real destinations and verify delivery before enabling them. Keep the demo notice until all fictional content has been replaced. No particular person's experience or measured results should be inferred from the sample pages.

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

Replace sample employers, dates, project metrics, performance badges, social links, email addresses, and deployment URLs with your own supported content. The supplied numbers are not verified outcomes. `public/resume.pdf` is not supplied: the demo disables the resume action. Add an approved resume and wire a verified link before enabling it. Review duplicate content in section components as well as the active homepage.

The previously documented `data/skills.ts` and `data/blog.ts` files do not exist. There is no configured CMS.

## Integration limitations

- **Visitor counts:** [app/api/visits/route.ts](app/api/visits/route.ts) uses seeded, process-memory counters and a random daily increment. Counts reset with the process and do not represent reliable unique visitors or historical analytics.
- **Feedback:** [app/api/feedback/route.ts](app/api/feedback/route.ts) validates a message, logs submitted data, and returns a demonstration success response. It does not persist feedback or deliver email. Do not submit sensitive information to this demo.
- **Contact forms:** [components/contact-form.tsx](components/contact-form.tsx) calls `/api/contact`, but that route is absent. [components/sections/contact-section.tsx](components/sections/contact-section.tsx) simulates submission with a delay. Neither is evidence of message delivery; the active demo instead links to the repository setup instructions and does not mount these forms.
- **Analytics:** helper functions call `window.gtag` or `window.plausible` only if those globals exist. No provider script is loaded by the inspected layout. Lighthouse records local lab reports for the configured routes; no general Core Web Vitals field result, uptime, or security grade is established.

## Dependency security update — 21 October 2026

Next.js and its ESLint configuration are now pinned to 15.5.28. This includes the 15.5.27 fixes for the upstream [SSG/ISR cache-poisoning advisory](https://github.com/advisories/GHSA-4jqv-mc3x-m676) and [related cache-poisoning advisory](https://github.com/advisories/GHSA-mcj8-r9mp-w47p). React 18, Tailwind 3 and the compatible calendar pair retain their installed versions. No application component, route, type contract, lint rule or CI permission changed in this dependency update.

Two temporary dependency overrides avoid vulnerable older nested packages: Next.js uses the same pinned PostCSS 8.5.31 as the build tooling, and Tailwind/postcss-nested use postcss-selector-parser 7.1.7. The selector-parser override crosses a major version; its [changelog](https://github.com/postcss/postcss-selector-parser/blob/main/CHANGELOG.md) describes the iteration change and CPU-exhaustion fix. Both generated production CSS files are byte-for-byte identical to the pre-update review build. Revisit these overrides when upstream dependency ranges include patched releases; do not remove them without repeating the audit and compatibility checks.

The outdated Lighthouse CI wrapper was replaced with Lighthouse 13.5.0 and Chrome Launcher, using the [documented Node API](https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/docs/readme.md#using-programmatically). The same three routes and five required audits remain. A responsive-viewport audit is also required. Missing, failed or unscored audits, runtime errors and unexpected redirects fail the command. Reports remain local; the workflow command is still `npm run lighthouse`.

Verified in the separate review copy with Node.js 24.13.0 and npm 11.6.2:

- Clean `npm ci --ignore-scripts --no-fund`: passed without force or peer-dependency bypasses.
- Type check, zero-warning lint and all 11 tests: passed, including the three unchanged notification tests and eight Lighthouse assertion tests.
- Production build: passed with integrated type/lint checks and all 14 static pages generated.
- Lighthouse: all six required checks passed on the homepage, project index and blog index.
- Full dependency audit: **7 high affected-package entries**, down from 28. Production dependency audit: **5 high entries**, down from 9. Both have zero critical, moderate or low findings.

The remaining entries all trace to [the unpatched braces stack-exhaustion advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). They propagate through micromatch/fast-glob into Next's ESLint plugin and through Tailwind's glob/watcher dependencies. Tailwind is also reached through a production dependency's peer requirement, so `--omit=dev` does not remove this chain. These counts describe affected packages, not seven separate root vulnerabilities or a demonstrated deployed exploit. The audit still exits nonzero; this is not a zero-vulnerability result. Keep the finding visible and review an upstream fix or a separately tested tooling migration when available.

The earlier Next.js 14-to-15 migration already updated asynchronous route parameters and request headers. This patch update adds no new framework-major migration.

## Build and deployment

After resolving setup and check failures, a server-based production preview uses:

```sh
npm run build
npm run start
```

The current configuration uses Next.js server routes, including POST handlers. It does not set `output: 'export'` and does not produce an `out` directory for drag-and-drop static hosting. Static export would require a separate design change that removes or replaces unsupported server behavior; `next export` is not available in Next.js 14. See the official [deployment guide](https://nextjs.org/docs/14/app/building-your-application/deploying) and [static-export limitations](https://nextjs.org/docs/14/app/building-your-application/deploying/static-exports).

GitHub Actions runs validation checks; the connected Vercel integration handles deployments. The workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs a locked install, type checking, linting, tests, and a build on Node.js 22 and 24. The Node.js 24 job also runs Lighthouse against the local homepage, project list, and blog index. Dependencies are pinned by the npm lockfile. Workflow actions use readable major-version tags (`actions/checkout@v4` and `actions/setup-node@v4`); these tags can receive upstream updates and should be reviewed during maintenance. No Lighthouse report is uploaded to temporary public storage.

## Lighthouse scope

Install Chrome locally and run `npm run build` followed by `npm run lighthouse`. Reports stay in ignored `.lighthouseci/`; no upload command is configured. The configuration in [lighthouse.config.mjs](lighthouse.config.mjs) retains checks for HTTP status, browser console errors, document title, HTML language and unrestricted viewport zoom, and adds a responsive viewport check. Each required audit must score 1 on all three pages; missing results also fail. The runner starts its own loopback-only production server and stops that server and its temporary Chrome process afterward. One lab run per URL records performance data without claiming a stable performance budget, complete accessibility, or Core Web Vitals field results. Review reports before agreeing to additional budgets.

## Contributing and license

Use the [contribution guide](CONTRIBUTING.md) and [GitHub issues](https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template/issues). Report the exact checks you ran and their results. Do not claim passing tests, measurements, or delivery integrations from the presence of sample code.

The repository includes an [MIT license](LICENSE). Review third-party asset permissions before reusing or publishing them.
