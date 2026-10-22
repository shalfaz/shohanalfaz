# Shohan Hossain Alfaz — Portfolio

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run typecheck` for TypeScript validation and `npm run build` for a production build.

## Personalize

- Update contact details, social profiles, project URLs, verified project descriptions and technology stacks, and activity details in [`src/data/portfolio.ts`](./src/data/portfolio.ts).
- Replace the preview artwork in `public/projects/` with your project screenshots and update each image path in the portfolio data.
- Put your PDF at `public/shohan-hossain-alfaz-cv.pdf`, then set `cvDownloadUrl` in the portfolio data to `/shohan-hossain-alfaz-cv.pdf`. Until then, the download button serves the clearly marked placeholder instructions.

## Deploy to Vercel

Push the project to GitHub, import that repository in Vercel, and keep the detected Next.js framework settings and default build command. Deploy; Vercel will build and host the site. No environment variables or backend services are required.
