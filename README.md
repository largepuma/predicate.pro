# Predicate

Official website for [predicate.pro](https://predicate.pro).

Predicate builds privacy-first AI access and inference tools for Chinese-speaking users, creators, and developers.

## Current Website Direction

The site is intentionally a single English landing page for the new company direction:

- Private AI access for Chinese-speaking creators and builders
- Chinese-first model routing with Qwen and DeepSeek
- Global model fallback through providers such as OpenRouter
- Minimal data retention and clearer privacy boundaries
- Developer-ready inference infrastructure through a Privacy API Gateway

## Product Tracks

| Track | Audience | Description |
| --- | --- | --- |
| Private Chat | Chinese-speaking AI users and creators | A Chinese-first Venice-like AI chat experience with stable access, localized payments, and user-controlled memory. |
| Creative SaaS | Writers, roleplay users, and creator communities | Long-memory characters, bilingual role libraries, worldbuilding state, and workflows for fiction, RPGs, and interactive storytelling. |
| Privacy API Gateway | Developers and AI product teams | An OpenAI-compatible inference proxy with routing, fallback, project isolation, cost attribution, and minimal prompt retention. |
| Enterprise Privacy Inference | Regulated teams in legal, finance, healthcare, and enterprise AI | High-touch private deployment, auditability, and verifiable privacy pilots where concrete customer demand exists. |

## Strategic Notes

The detailed business direction is documented in [`docs/business-areas.md`](docs/business-areas.md).

Recommended build order:

1. Build the Privacy API Gateway foundation.
2. Validate Chinese-first private chat as the consumer-facing entry point.
3. Test one focused creative writing or roleplay vertical.
4. Keep enterprise privacy inference as a high-touch pilot track until there is a concrete customer use case.

## Tech Stack

- [Next.js](https://nextjs.org) App Router
- React
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production Build

```bash
npm run build
```

## Contact

[contact@predicate.pro](mailto:contact@predicate.pro)
