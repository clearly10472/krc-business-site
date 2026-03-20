import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_JP, Klee_One } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const notoJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});
const kleeOne = Klee_One({
  variable: "--font-klee",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowBoost Lab | AIで、仕事を軽くする",
  description: "あなたの「面倒」を、AIが半分にします。SNS運用・集客文章・業務時短を、地域の中小企業向けにサポート。",
  openGraph: {
    title: "FlowBoost Lab | AIで、仕事を軽くする",
    description: "あなたの「面倒」を、AIが半分にします。SNS運用・集客文章・業務時短を、地域の中小企業向けにサポート。",
    type: "website",
    images: [{ url: "/generated/hero.jpg", width: 1440, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geist.variable} ${notoJP.variable} ${kleeOne.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
