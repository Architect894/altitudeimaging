import { Inter, Inter_Tight } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";
import AnalyticsWrapper from '@/components/AnalyticsWrapper';
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Self-hosted at build time by next/font — no runtime request to Google.
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-display",
});

const TITLE = "Aircraft Listing Films for Brokers & Dealers | Altitude Imaging";
const DESCRIPTION =
  "By aviators, for aviators. Cinematic listing films and video marketing for aircraft brokers, dealers, makers, and flight schools that sell the aircraft before the first phone call.";

export const metadata = {
  metadataBase: new URL("https://www.altitudeimaging.org"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Altitude Imaging",
    type: "website",
    images: [{ url: "/og-kodiak.jpg", width: 1200, height: 630, alt: "Kodiak 900 on the ramp" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#0a0d12",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark" className={`${body.variable} ${display.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        {/* Without JS the scroll-reveal observer never runs, so show everything up front */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="custom-layout">
        <DropMenu />
        <main>{children}</main>
        <Footer />
        <AnalyticsWrapper />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
