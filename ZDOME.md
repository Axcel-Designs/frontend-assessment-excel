Checkit Take-Home Technical Assessment
Frontend Engineer Role
Next.js · TypeScript · React · Cloudflare Workers

Please read all instructions carefully before writing any code.

1. Overview

This assessment is designed to evaluate your skills as a Frontend Engineer. You will build a small but production- quality web application that exercises the core competencies relevant to our stack: Next.js (App Router), TypeScript, server-side data fetching, performance optimization, and clean component architecture.
We are not looking for a feature-complete product. We are looking for evidence of engineering judgment: the decisions you make, the trade-offs you document, and the quality of code you ship.

1. The Brief — Content Explorer App

Build a "Content Explorer": a small web application that fetches data from a public API and presents it in a browsable, searchable interface. The content topic is flexible; choose whichever public API interests you most from the list below.

2.1 Suggested Public APIs
You are not limited to this list. Any stable, free, paginated public API is acceptable. Document your choice in the README.
•       The Movie Database (TMDB) — <https://developer.themoviedb.org/docs> — movies, TV shows, cast
•    OpenLibrary — <https://openlibrary.org/developers/api> — books and authors
•       NASA APOD — <https://api.nasa.gov> — astronomy picture of the day archive
•    DummyJSON — <https://dummyjson.com> — products, posts, users (no key required)
•       PokéAPI — <https://pokeapi.co> — Pokémon data (no key required)

2.2 Required Features
The following features are mandatory and will be assessed against the scoring rubric:
F-1   Listing Page
•       Server-side rendered (SSR) or statically generated (SSG/ISR) listing page displaying at least 20 items
•    Each card must show: title/name, an image (with graceful fallback), and at least two metadata fields
•    Responsive grid layout — adapts cleanly to mobile (1 col), tablet (2 col), and desktop (3–4 col)
•    Pagination or infinite scroll (choose one and justify the decision in your README)
F-2   Detail Page
•       Dynamic route (e.g. /items/[id]) with full item detail
•    Data fetched at the server level (Server Component or getServerSideProps/generateStaticParams)
•    Correct Next.js metadata export (title, description, og:image) for the detail page
•    Breadcrumb navigation back to the listing
F-3   Search & Filtering
•       Client-side or URL-driven search input with debounce (≥300ms)
•       At least one additional filter (e.g., category, year, rating), either client-side or via API query param
•    URL reflects current search/filter state (use Next.js useSearchParams or equivalent) so results are shareable
F-4   Loading, Error & Empty States

•       Skeleton loaders or loading.tsx during data fetching — no bare spinners
•       error.tsx boundary that renders a friendly, actionable error message
•    A dedicated empty-state UI when search/filter returns no results
F-5   Deployment
•       Deployed to Cloudflare Workers (preferred) or Vercel.
•    Live URL submitted alongside the repository link
Cloudflare Workers is preferred as it matches our production hosting. Using it instead of Vercel earns partial bonus credit. If you still prefer to use Vercel, give a good reason for your choice in your README.

1. Technical Requirements

3.1 Stack Constraints
•       Next.js 14, 15, or 16 with the App Router — no Pages Router
•    TypeScript — strict mode enabled; no any except where genuinely unavoidable (comment why)
•    Styling — Tailwind CSS or CSS Modules. No UI component library (shadcn, MUI, Chakra, etc.) — we want to see your CSS skills.
•       State management — React built-ins (useState, useReducer, Context) or Redux/Zustand for global state.
•    Data fetching — native fetch with Next.js cache options, or TanStack Query for client-side data; SWR is acceptable, but TanStack Query is preferred.
•       Testing — at least two meaningful tests (Vitest or Jest + React Testing Library). You don’t need to test the
whole application. You can write tests that pass with 100% coverage for at least 2 components.

3.2 Performance Expectations
Your submission will be run through Lighthouse and PageSpeed Insights. We expect:

Metric
Target
Minimum
Largest Contentful Paint (LCP)
< 2.5 s
< 4.0 s
Cumulative Layout Shift (CLS)
< 0.1
< 0.25
First Input Delay / INP
< 100 ms
< 200 ms
Lighthouse Performance Score
≥ 90
≥ 75

To achieve these targets, you are expected to demonstrate at least three of the following optimizations — and document them in your README:
•       next/image for all images with explicit width/height and priority on above-the-fold images
•    Route-level code splitting via dynamic imports for heavy client components
•    Appropriate Next.js fetch cache settings (force-cache, no-store, revalidate: N) — explain each choice
•       Font optimization using next/font
•    Cloudflare Cache-Control headers for static assets (Cache-Control: public, max-age=31536000, immutable)

3.3 Code Architecture
We assess architecture at the folder, component, and module level. Structure your project as follows or justify any deviation:

Additional architecture expectations:
•       Co-locate styles with components — no global stylesheet spaghetti
•    API layer abstracted behind lib/ functions — components should not call fetch() directly
•       No business logic in JSX — extract to hooks or utility functions
•    All shared types defined in types/ — no inline type definitions for reused shapes

1. Bonus Tasks (Optional, +10 points)

Bonus tasks are truly optional. A strong core submission beats a rushed bonus implementation.

B-1    Cloudflare Workers Edge Caching with OpenNext (+4 pts)
•    Using the OpenNext Cloudflare adapter, implement edge-level caching for the listing page via the Workers Cache API (caches.default) or by passing a cf object with cacheTtl / cacheEverything options on upstream fetch calls
•    Demonstrate awareness of how OpenNext maps Next.js fetch cache semantics (revalidate, force-cache) to the Workers runtime; document this mapping in your README
•    Add a visible x-cache-status header (HIT / MISS) to listing page responses so caching behaviour can be verified with curl or DevTools

B-2    React 18 Streaming with Suspense (+3 pts)
•       Wrap one slow server data-fetch in a Suspense boundary with a meaningful fallback
•       Use Next.js streaming (no client-side loading state for this particular fetch)

B-3    Accessibility Audit (+3 pts)
•       Run axe-core or Lighthouse accessibility audit and achieve a score of ≥ 95
•    Document the findings, any issues you fixed, and any known remaining issues with justification

1. Deliverables
5.1 Repository
•       Public GitHub repository named frontend-assessment-[your-name]
•    Clean commit history: we will read your commits; squashing everything into one is a red flag
•    A .env.example file with all required environment variable keys (no values)
5.2 README.md
Your README is part of the assessment. It must include:
•       Setup instructions (clone → install → dev server in under 5 commands)
•    Architecture decisions — why you structured it the way you did
•    Performance optimizations applied — what, where, and why
•    Trade-offs and known limitations — what you would do differently with more time
•       Any bonus tasks attempted and how to verify them
5.3 Live URL
•       A publicly accessible deployment link
•    The deployment must reflect the final commit — no work-in-progress deployments

2. Scoring Rubric

Criterion
Max Points
Notes
UI Implementation & Pixel Accuracy
25
Fidelity to spec, responsiveness, attention to detail
State Management & Data Fetching
25
Architecture clarity, loading/error/empty states
Performance & Optimization
25
Core Web Vitals, lazy loading, bundle awareness
Code Architecture & Best Practices
25
Folder structure, typing, reusability, readability, testing.
Bonus Tasks (optional)
10
Edge caching, Suspense, accessibility audit
TOTAL
100 + 10 bonus

Area
Excellent (90–
100%)
Good (70–89%)
Adequate (50–
69%)
Below Bar (<50%)
UI Accuracy
Matches spec exactly; flawless responsiveness
Minor visual deviations; responsive
Some layout issues; partial responsiveness
Significant UI gaps
State & Data
Clean async logic; all states handled; optimistic updates
Most states handled; minor gaps
Loading state only; no error handling
Ad hoc data fetching; no state management
Performance
LCP <2.5s; lazy loading; no layout shifts; Cloudflare- aware caching headers
Good scores with minor issues
Passes basic checks; no optimization effort
No performance awareness
Architecture
Feature-based structure; strict TypeScript; fully composable components; well-written tests passing with full coverage
Logical structure; typed with minor gaps, well-written tests
Flat structure; partial types, some tests pass
Monolithic files; no TypeScript, no tests

Scores are assigned after code review, README review, and running Lighthouse on the live deployment.

1. What We Are Not Looking For

To help calibrate your effort, here is what will not improve your score:
•       Feature quantity — five half-baked features score lower than two excellent ones
•    Third-party UI libraries — we want to evaluate your CSS and component composition skills
•    AI-generated boilerplate pasted wholesale — we will ask about any section of your code
•    A perfect Lighthouse score at the expense of code quality — optimizations must be readable and maintainable

1. Process & Expectations

•       You may use any reference material, documentation, or AI tooling you would normally use on the job —
cite significant non-trivial AI-generated blocks in comments
•    If you get stuck on a specific technical constraint, document the blocker in your README rather than silently dropping the feature
•       We may schedule a 30–45 minute code review call after submission to walk through your decisions

•       Please do not publicly advertise this assessment brief or share it in forums
9.   Submission
When ready, submit the following:

1.  GitHub repository URL
2.  Live deployment URL
3.  Brief note (2–3 sentences) on what you would tackle next if given another 2 hours
