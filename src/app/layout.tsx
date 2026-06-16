import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — Soluções em TI para todo o Brasil`,
    template: `%s | ${COMPANY.fullName}`,
  },
  description: COMPANY.description,
  keywords: ["ZTHA","tecnologia","TI","suporte técnico","CFTV","monitoramento",
    "cabeamento estruturado","backup nuvem","desenvolvimento software",
    "infraestrutura redes","Serrinha","Bahia","Brasil"],
  authors: [{ name: COMPANY.fullName }],
  creator: COMPANY.fullName,
  openGraph: {
    type: "website", locale: "pt_BR", siteName: COMPANY.fullName,
    title: `${COMPANY.fullName} — Soluções em TI para todo o Brasil`,
    description: COMPANY.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
