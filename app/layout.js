import { bellota, noto } from "./lib/fonts";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "MOE HATANAKA - Portfolio",
  description: "Portfolio site of MOE HATANAKA, an aspiring web engineer",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "MOE HATANAKA - Portfolio",
    description: "Portfolio site of MOE HATANAKA",
    url: "https://moe-pf.vercel.app/",
    siteName: "MOE HATANAKA Portfolio",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${noto.variable} ${bellota.variable}`}>
      <body className="font-body antialiased bg-background1 text-fc1">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
