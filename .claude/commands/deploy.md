# /deploy — Deploy to Vercel

Trigger a production deployment of the portfolio.

## Usage
```
/deploy
/deploy --preview
```

## Steps

1. **Pre-flight checks**
   - Run `npm run build` locally to catch build errors
   - Verify `.env.local` keys are set in Vercel dashboard
   - Check `git status` — no uncommitted secrets

2. **Deploy**
   ```bash
   # Preview deployment
   vercel

   # Production deployment
   vercel --prod
   ```

3. **Post-deploy**
   - Verify live URL loads correctly
   - Test contact form (Formspree)
   - Check all section links and social icons
   - Confirm Contentful content loads (if CMS enabled)

## Environment Variables to Confirm on Vercel
- `NEXT_PUBLIC_FORMSPREE_ID`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`
- `OPENAI_API_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL` → set to production URL

## Rollback
```bash
vercel rollback
```
