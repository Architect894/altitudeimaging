import Head from "next/head";
import { Inter, Sora } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";

// The App Router layout loads these on the homepage. These routes live in the
// Pages Router, so they need their own copy of the same two families.
const body = Inter({ subsets: ["latin"], display: "swap" });
const display = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });

// --ai-font-* in global.css resolves against :root, so the variables have to be
// declared there too — a wrapper element would be too deep to be picked up.
const fontVars = `:root { --font-body: ${body.style.fontFamily}; --font-display: ${display.style.fontFamily}; }`;

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <style>{fontVars}</style>
            </Head>
            <div className="custom-layout">
                <Component {...pageProps} />
            </div>
        </>
    );
}
