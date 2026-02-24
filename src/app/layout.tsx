import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cero Humo | Agencia de SEO Local en Colombia",
    template: "%s | Cero Humo",
  },
  description:
    "Agencia de SEO Local en Colombia. Hacemos que tus clientes te encuentren en Google. Sin humo, puro resultado. Escríbenos por WhatsApp.",
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Cero Humo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cero Humo",
    url: SITE_URL,
    telephone: "+573053476462",
    description:
      "Agencia de SEO Local en Colombia. Hacemos que tus clientes te encuentren en Google.",
    areaServed: [
      { "@type": "City", name: "Bogotá" },
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Barranquilla" },
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
