import { Inter, Sora } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";
import AnalyticsWrapper from '@/components/AnalyticsWrapper';

// Self-hosted at build time by next/font — no runtime request to Google.
const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "Altitude Imaging — Aviation Video Marketing",
  description:
    "By aviators, for aviators. Video marketing for flight schools, dealers, and charter operators that earns trust before the first phone call.",
  openGraph: {
    title: "Altitude Imaging — Aviation Video Marketing",
    description:
      "Video marketing for flight schools, dealers, and charter operators that earns trust before the first phone call.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#05080f",
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
    </html>
  );
}
