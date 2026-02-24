import type { Metadata } from "next";
import { getCityHub, SITE_URL } from "@/lib/data";
import CityHubTemplate from "@/components/CityHubTemplate";
import { notFound } from "next/navigation";

const hub = getCityHub("barranquilla");

export const metadata: Metadata = {
    title: hub?.title,
    description: hub?.metaDescription,
    alternates: { canonical: `${SITE_URL}/barranquilla` },
    openGraph: {
        title: hub?.title,
        description: hub?.metaDescription,
        url: `${SITE_URL}/barranquilla`,
    },
};

export default function BarranquillaHub() {
    if (!hub) return notFound();
    return <CityHubTemplate data={hub} />;
}
