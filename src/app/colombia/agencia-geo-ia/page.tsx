import type { Metadata } from "next";
import { getLanding, SITE_URL } from "@/lib/data";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { notFound } from "next/navigation";

const landing = getLanding("colombia", "agencia-geo-ia");

export const metadata: Metadata = {
    title: landing?.title || "Agencia de Búsqueda con IA",
    description: landing?.metaDescription,
    alternates: { canonical: `${SITE_URL}/colombia/agencia-geo-ia` },
    openGraph: {
        title: landing?.title,
        description: landing?.metaDescription,
        url: `${SITE_URL}/colombia/agencia-geo-ia`,
        type: "article",
    },
};

export default function AgenciaGeOIA() {
    if (!landing) return notFound();
    return <LandingPageTemplate data={landing} />;
}
