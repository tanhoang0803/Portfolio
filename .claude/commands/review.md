# /review — Code Review Checklist

Run a structured review before committing or deploying.

## Usage
```
/review
/review src/components/sections/Contact.tsx
```

## Review Checklist

### Security
- [ ] No secrets or API keys hardcoded
- [ ] All env vars accessed via `process.env.NEXT_PUBLIC_*` for client, server-only for sensitive
- [ ] Form inputs validated at boundary
- [ ] No XSS vectors (avoid `dangerouslySetInnerHTML` unless sanitized)

### Performance
- [ ] Images use `next/image` with proper `alt`, `width`, `height`
- [ ] Dynamic imports for heavy components
- [ ] No unnecessary `useEffect` / `useState` (prefer Server Components)
- [ ] No layout thrash in animations

### Accessibility
- [ ] All interactive elements are keyboard-navigable
- [ ] ARIA labels on icon-only buttons
- [ ] Color contrast meets WCAG AA
- [ ] Focus ring visible

### TypeScript
- [ ] No `any` types unless unavoidable
- [ ] Interfaces defined in `src/types/`
- [ ] Props typed explicitly

### Tailwind / Styling
- [ ] Dark theme consistent (bg-gray-900/black, text-white/gray)
- [ ] Cyan accent used consistently for highlights/CTAs
- [ ] Responsive breakpoints: mobile → tablet → desktop

### Next.js
- [ ] `"use client"` only where needed
- [ ] Metadata defined in `layout.tsx` or page
- [ ] No unused imports

## Auto-fix
```bash
npm run lint -- --fix
npm run type-check
```
