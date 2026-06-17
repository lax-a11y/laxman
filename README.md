# Playwright TypeScript Framework

This repository contains a minimal Playwright + TypeScript framework scaffold.

Quick start

```powershell
npm install
npx playwright install --with-deps
npm test
```

Structure

- `playwright.config.ts` — Playwright configuration
- `src/tests` — test files
- `src/pages` — Page Object Model classes
- `src/fixtures` — custom fixtures
- `.github/workflows/ci.yml` — CI workflow for GitHub Actions

Next steps

- Run `npm install` to install dependencies.
- Customize `playwright.config.ts` for timeouts, reporters, and browsers.
- Add more Page Objects and fixtures as needed.
