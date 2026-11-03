import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { COMPANY } from "@/lib/constants";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import CookieBanner from "@/components/ui/CookieBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-var",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ZTHA Tecnologia — Soluções em Tecnologia para todo o Brasil",
    template: "%s | ZTHA Tecnologia",
  },
  description: COMPANY.description,
  keywords: ["ZTHA","tecnologia","TI","suporte técnico","CFTV","monitoramento",
    "cabeamento estruturado","backup nuvem","desenvolvimento software",
    "infraestrutura redes","Serrinha","Bahia","Brasil"],
  authors: [{ name: COMPANY.fullName }],
  creator: COMPANY.fullName,
  openGraph: {
    type: "website", locale: "pt_BR", siteName: COMPANY.fullName,
    title: `${COMPANY.fullName} — Soluções em Tecnologia para todo o Brasil`,
    description: COMPANY.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  verification: {
    google: "TqicIVH0Q0EnUR3kxQoa0zIoKA7o-1EOkkgCdLe-XFY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '6320579417960596');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=6320579417960596&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
