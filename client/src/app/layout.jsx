import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";
import AnalyticsWrapper from '@/components/AnalyticsWrapper'; // 👈 THIS replaces your old Analytics import

export const metadata = {
  title: "Altitude Imaging",
  description: "Altitude Imaging - Elevate Your Visual Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
      <body className="custom-layout">
        <DropMenu />
        {children}
        <Footer />
        <AnalyticsWrapper /> {/* 👈 Place this once at the bottom of the body */}
      </body>
    </html>
  );
}
