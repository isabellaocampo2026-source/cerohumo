import Link from "next/link";
import { SITE_URL } from "@/lib/data";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const allItems = [{ label: "Inicio", href: "/" }, ...items];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${SITE_URL}${item.href}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <nav aria-label="Breadcrumb" className="py-4">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    {allItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            {index > 0 && <span className="text-border">/</span>}
                            {index < allItems.length - 1 ? (
                                <Link href={item.href} className="hover:text-white transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
