import type { Metadata } from "next";
import { getCityHub, SITE_URL } from "@/lib/data";
import CityHubTemplate from "@/components/CityHubTemplate";
import { notFound } from "next/navigation";

const hub = getCityHub("medellin");

export const metadata: Metadata = {
    title: hub?.title,
    description: hub?.metaDescription,
    alternates: { canonical: `${SITE_URL}/medellin` },
    openGraph: {
        title: hub?.title,
        description: hub?.metaDescription,
        url: `${SITE_URL}/medellin`,
    },
};

export default function MedellinHub() {
    if (!hub) return notFound();
    return <CityHubTemplate data={hub} />;
}
