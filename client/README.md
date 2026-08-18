## YouTube integration

The homepage "Latest From The Channel" section pulls live from the Pastor Pilot
channel instead of a hardcoded list. It takes the channel's most recent uploads,
ranks them by view count, and shows the top 3.

### Setup

1. In the [Google Cloud console](https://console.cloud.google.com/), create (or pick)
   a project and enable **YouTube Data API v3**.
2. Under **APIs & Services -> Credentials**, create an **API key**. Restrict it to the
   YouTube Data API v3.
3. Copy `.env.example` to `.env.local` and set `YOUTUBE_API_KEY`.
4. On Vercel, add the same variable under **Project Settings -> Environment Variables**
   for Production, Preview, and Development.

### Changing the three videos by hand

Until an API key is set, the section shows a hand-picked list. To swap the videos,
edit `FALLBACK_IDS` at the top of `src/app/api/youtube/top/route.js`:

```js
const FALLBACK_IDS = ["-fOSwehRX90", "ERYv7SVqZao", "8X4aDcc5e5E"];
```

Each id is the part of a share link after `youtu.be/`, dropping anything from `?`
onward. For `https://youtu.be/-fOSwehRX90?si=adxirIaG...` the id is `-fOSwehRX90`.
They appear on the page in the order listed.

Titles and thumbnails for these are looked up automatically through YouTube’s public
oEmbed endpoint, so no key is needed to keep them accurate — only the view counts
require the Data API.

This list is also the safety net once the API key is in place: if YouTube errors out,
the section falls back to it rather than rendering empty.

### How it works

- `src/app/api/youtube/top/route.js` talks to YouTube and is cached for 6 hours
  (`revalidate`), so normal traffic costs no extra API quota. A refresh costs 3 quota
  units out of the default 10,000/day.
- Cards render as thumbnails; the YouTube iframe only loads once a visitor clicks one,
  which keeps the homepage fast.
- Tunables at the top of the route: `RECENT_POOL` (how many recent uploads to rank),
  `TOP_N` (how many to show), and `EXCLUDE_SHORTS` (Shorts are skipped by default
  because the grid is 16:9).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
