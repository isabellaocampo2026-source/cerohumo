import type { Metadata } from "next";
import { getLanding, SITE_URL } from "@/lib/data";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { notFound } from "next/navigation";

const landing = getLanding("medellin", "agencia-de-marketing-digital");

export const metadata: Metadata = {
    title: landing?.title,
    description: landing?.metaDescription,
    alternates: { canonical: `${SITE_URL}/medellin/agencia-de-marketing-digital` },
    openGraph: {
        title: landing?.title,
        description: landing?.metaDescription,
        url: `${SITE_URL}/medellin/agencia-de-marketing-digital`,
    },
};

export default function MedellinAgenciaMarketingDigital() {
    if (!landing) return notFound();
    return <LandingPageTemplate data={landing} />;
}
