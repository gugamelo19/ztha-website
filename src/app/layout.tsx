import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
