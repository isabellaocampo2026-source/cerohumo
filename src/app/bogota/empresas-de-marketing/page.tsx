import type { Metadata } from "next";
import { getLanding, SITE_URL } from "@/lib/data";
import LandingPageTemplate from "@/components/LandingPageTemplate";
import { notFound } from "next/navigation";

const landing = getLanding("bogota", "empresas-de-marketing");

export const metadata: Metadata = {
    title: landing?.title,
    description: landing?.metaDescription,
    alternates: { canonical: `${SITE_URL}/bogota/empresas-de-marketing` },
    openGraph: {
        title: landing?.title,
        description: landing?.metaDescription,
        url: `${SITE_URL}/bogota/empresas-de-marketing`,
    },
};

export default function BogotaEmpresasMarketing() {
    if (!landing) return notFound();
    return <LandingPageTemplate data={landing} />;
}
