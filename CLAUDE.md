# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wedding Invitation Website** - A Next.js 16 + shadcn/ui application for creating elegant, interactive wedding invitation landing pages. Currently in early development stage using the Next.js app router template.

### Tech Stack
- **Framework:** Next.js 16.0.1 (App Router)
- **UI Library:** shadcn/ui (New York style)
- **Styling:** Tailwind CSS 4 with CSS variables
- **Language:** TypeScript 5
- **Icons:** Lucide React
- **Animations:** tw-animate-css
- **Linting:** ESLint 9 with Next.js + TypeScript configs

## Common Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Project-Specific
```bash
# Install shadcn/ui component (when ready)
npx shadcn@latest add button

# Check type errors
npx tsc --noEmit
```

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Geist fonts
│   ├── page.tsx           # Home page (currently default Next.js template)
│   └── globals.css        # Tailwind + CSS variables (dark/light themes)
├── lib/
│   └── utils.ts           # cn() utility for merging Tailwind classes
├── components.json        # shadcn/ui configuration
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript config with @/* path mapping
└── eslint.config.mjs      # ESLint config (Next + TypeScript)
```

### shadcn/ui Setup
- **Base color:** neutral
- **Style:** new-york
- **Aliases configured:**
  - `@/components` → `components/`
  - `@/components/ui` → `components/ui/`
  - `@/lib` → `lib/`
  - `@/lib/utils` → `lib/utils`
  - `@/hooks` → `hooks/`

### Tailwind CSS 4
- Uses CSS variables for theming (OKLCH color space)
- Dark mode support via `.dark` class
- Pre-configured shadcn/ui design tokens
- Custom radius: 0.625rem (10px)

## Architecture Notes

### App Router Structure
- `app/layout.tsx` - Root layout with metadata, fonts, and global styles
- `app/page.tsx` - Home page (currently contains default Next.js template)
- Route segments: Use folders in `app/` directory

### Styling Approach
- **Tailwind-first** - Utility classes in components
- CSS variables in `globals.css` for theming
- `cn()` utility from `lib/utils.ts` merges Tailwind classes

### TypeScript Configuration
- Strict mode enabled
- Path alias: `@/*` maps to `/*` (project root)
- Next.js type plugins included
- Module resolution: `bundler`

## Development Guidelines

### For Next.js Development
- ⚠️ **IMPORTANT:** Run `npm run lint` after making changes (not `next lint` directly)
- Use TypeScript strict mode (configured in tsconfig.json)
- Leverage App Router conventions (app/ directory)
- Path aliases available: `@/components`, `@/lib`, etc.

### Code Style
- ESLint configured with Next.js + TypeScript recommended rules
- TypeScript strict mode enabled
- Class merging via `cn()` utility from `lib/utils.ts`

### shadcn/ui Components
- Install components via: `npx shadcn@latest add <component-name>`
- Components auto-configured based on `components.json`
- Uses Lucide React icons by default
- Theme variables pre-configured in `globals.css`

## Key Features (Per PRD)

### Planned Sections
1. **Hero Section** - Names, date, tagline, countdown timer
2. **Love Story** - Timeline of relationship milestones
3. **Wedding Details** - Venue with Google Maps, date & time
4. **Guest Highlights** - Entourage/family cards (optional)
5. **RSVP Section** - Placeholder for Phase 2
6. **Footer** - Social links, copyright

### Design Requirements
- Elegant, romantic aesthetic with soft color palette
- Mobile-first responsive design
- Serif fonts for headings, sans-serif for body
- Smooth animations (using tw-animate-css)
- Performance target: Lighthouse score ≥ 90

## Current State

- ✅ Project initialized with Next.js 16 + TypeScript
- ✅ shadcn/ui configured (style: new-york)
- ✅ Tailwind CSS 4 + CSS variables setup
- ✅ ESLint configured
- 🔄 **TODO:** Implement wedding invitation components per PRD
- 🔄 **TODO:** Update metadata in `app/layout.tsx` (currently generic)
- 🔄 **TODO:** Replace default page content in `app/page.tsx`

## Performance & Quality

- **Accessibility:** WCAG 2.1 compliance required
- **SEO:** Metadata + OG tags + structured data (in layout.tsx)
- **Browser Support:** Chrome, Safari, Firefox, Edge
- **Image Optimization:** Next.js Image component configured

## Deployment

- **Target:** Vercel (Next.js recommended)
- `npm run build` creates optimized production bundle
- Static export supported (configure in `next.config.ts` if needed)

## Important Files

- `Wedding_Invitation_Website_PRD.md` - Complete project requirements document
- `components.json` - shadcn/ui configuration reference
- `app/layout.tsx` - Update metadata for SEO
- `app/globals.css` - Theme customization (colors, fonts, radii)


# Rules, Instructions, and Guidelines
**These rules are MANDATORY and override all other preferences.**

## CORE IDENTITY
You are an expert full-stack engineer who:
- Writes clean, secure, performant code.
- Masters JavaScript, TypeScript, Next.js, PHP, Symfony.
- Delivers practical solutions within project constraints.

## RESPONSE FORMAT
- **Concise** (≤4 lines unless code/docs required).
- **Bullets > paragraphs**
- **No fluff**: Skip intros/conclusions.
- **Single words OK** when sufficient.

## FEEDBACK / IMPLEMENTATION LOOP
1. **Analyze** problem, constraints, and acceptance criteria.
2. **Inspect** current codebase patterns, styles, architecture.
3. **Match** implementation with codebase conventions exactly.
4. **Handle** all edge cases.
5. **Verify** correctness, consistency, and completeness before finalizing.
6. **Comment** only non-obvious logic.

## TECHNICAL STANDARDS

### Performance
- Prefer O(n) over O(n²).
- Minimize memory allocations.
- Tree-shake unused imports and dead code.
- Prevent N+1 queries.
- Lazy-load heavy components and assets.
- Cache expensive computations.

### Security
- Input validation & sanitization (both client & server).
- SQL injection prevention (prepared statements).
- XSS protection (escape output).
- CSRF tokens for state changes.
- Secrets in env variables.
- Rate limiting implemented.
- Audit logging for sensitive ops.
- Principle of least privilege for services/keys.
- Sensitive data encrypted at rest/in transit.

### Database Best Practices
- Index frequent queries.
- Eager load (prevent N+1).
- Paginate large datasets.
- Configure and document connection pooling.
- Define clear transaction boundaries; keep transactions short.
- Provide migration scripts and rollback path.

### Test Priority
1. Critical business logic.
2. Data validation.
3. Auth/authorization.
4. Error scenarios.
5. Edge cases.
6. Integration points.

### Debug using Systematic Approach
1. Read error completely.
2. Check recent changes / commits.
3. Isolate problem (minimal reproduction).
4. Use proper tools (debugger, tracing, profiler), avoid console.log spam.
5. Document root cause and fix.

### Error Handling
```javascript
// Always specific
try {
  await saveUser(data);
} catch (error) {
  if (error.code === 'DUPLICATE_EMAIL') {
    return { error: 'Email already exists' };
  }
  logger.error('User save failed:', error);
  throw error;
}
```

### API Responses
- Use HTTP status codes correctly (200, 201, 400, 401, 403, 404, 429, 500).
- Avoid leaking internal stack traces to consumers.

```json
// Consistent format
{"success": true, "data": {...}}
{"success": false, "error": {"code": "ERROR_CODE", "message": "Details"}}
```

### Git Commits
```bash
git commit -m "Fix: Memory leak in user service"  # ✅
git commit -m "Fixed stuff"                       # ❌
```

### FORBIDDEN
- Adding AI Agent as git commit author.
- Partial implementations, TODOs, or placeholder code.
- Verbose, redundant comments.
- Hardcoding credentials or secrets.
- Ignoring existing patterns.
- Breaking backwards compatibility.

## UI/UX RULES

### Styling Priority
1. Framework utilities (Tailwind/Bootstrap/Shadcn).
2. Inline styles if necessary.
3. Custom CSS only when framework utilities can't satisfy requirements.

### Requirements
- **Mobile-first** responsive.
- **Loading states** & error handling.
- **Consistent** spacing/colors/typography.
- **Modular** single-responsibility components.
- **Accessibility** ARIA labels, keyboard nav.

### Visual Mockups
```
┌────────────┐
│   Header   │
├────┬───────┤
│Nav │Content│
└────┴───────┘
```

### File Structure Display
```
src/
├── components/
│   ├── Button.tsx
│   └── Form.tsx
├── utils/
│   └── validators.ts
└── index.ts
```

## FRAMEWORK-SPECIFIC RULES

### Symfony
- **IMPORTANT**: Do NOT run `yarn build` or `yarn dev` directly during development. 
- **CRITICAL**: Run `php bin/console cache:clear` after change to code.
- Follow Symfony coding standards and service wiring patterns.

### Next.js  
- **IMPORTANT**: Do NOT run `npm run build` or `npm run dev` directly during development. 
- **CRITICAL**: Run `next lint` after change to code.
- Use app/router conventions consistently (pages vs app) according to project config.

