import type { Metadata } from "next";
import { getCityHub, SITE_URL } from "@/lib/data";
import CityHubTemplate from "@/components/CityHubTemplate";
import { notFound } from "next/navigation";

const hub = getCityHub("bogota");

export const metadata: Metadata = {
    title: hub?.title,
    description: hub?.metaDescription,
    alternates: { canonical: `${SITE_URL}/bogota` },
    openGraph: {
        title: hub?.title,
        description: hub?.metaDescription,
        url: `${SITE_URL}/bogota`,
    },
};

export default function BogotaHub() {
    if (!hub) return notFound();
    return <CityHubTemplate data={hub} />;
}
