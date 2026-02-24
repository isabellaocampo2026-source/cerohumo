import type { Metadata } from "next";
import { getLanding, SITE_URL } from "@/lib/data";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { notFound } from "next/navigation";

const landing = getLanding("bogota", "agencia-de-marketing-digital");

export const metadata: Metadata = {
    title: landing?.title,
    description: landing?.metaDescription,
    alternates: { canonical: `${SITE_URL}/bogota/agencia-de-marketing-digital` },
    openGraph: {
        title: landing?.title,
        description: landing?.metaDescription,
        url: `${SITE_URL}/bogota/agencia-de-marketing-digital`,
    },
};

export default function BogotaAgenciaMarketingDigital() {
    if (!landing) return notFound();
    return <LandingPageTemplate data={landing} />;
}
