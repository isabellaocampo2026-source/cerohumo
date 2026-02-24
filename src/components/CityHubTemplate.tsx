import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { WHATSAPP_LINK } from "@/lib/data";
import type { CityHubData } from "@/lib/data";

interface CityHubTemplateProps {
    data: CityHubData;
}

export default function CityHubTemplate({ data }: CityHubTemplateProps) {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumbs items={[{ label: data.city, href: `/${data.slug}` }]} />
            </div>

            {/* Hero */}
            <section className="py-16 sm:py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] animate-fade-in-up">
                        {data.h1}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                        {data.subtitle}
                    </p>
                </div>
            </section>

            {/* Text */}
            <AnimatedSection className="py-12 sm:py-16 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <p className="text-muted text-base sm:text-lg leading-relaxed">
                        {data.text}
                    </p>
                </div>
            </AnimatedSection>

            {/* Services */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">
                        Servicios disponibles en {data.city}
                    </h2>
                    <div className="space-y-4">
                        {data.services.map((service, i) => (
                            <Link
                                key={i}
                                href={service.href}
                                className="block border border-border rounded-xl p-6 hover:border-white hover:bg-white/5 transition-all duration-300 group"
                            >
                                <span className="text-lg font-semibold group-hover:text-white transition-colors">
                                    {service.label}
                                </span>
                                <span className="text-muted ml-2">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Other cities */}
            <AnimatedSection className="py-16 sm:py-20 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
                        También estamos en
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {["bogota", "medellin", "barranquilla"]
                            .filter((c) => c !== data.slug)
                            .map((slug) => {
                                const label =
                                    slug === "bogota"
                                        ? "Bogotá"
                                        : slug === "medellin"
                                            ? "Medellín"
                                            : "Barranquilla";
                                return (
                                    <Link
                                        key={slug}
                                        href={`/${slug}`}
                                        className="border border-border rounded-full px-6 py-3 text-sm font-medium text-muted hover:text-white hover:border-white transition-all duration-200"
                                    >
                                        {label} →
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA */}
            <section className="py-20 sm:py-28 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                        ¿Quieres más clientes en {data.city}?
                    </h2>
                    <p className="mt-6 text-lg text-muted">
                        Escríbenos. Sin compromiso. Sin humo.
                    </p>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center bg-white text-black font-semibold px-10 py-4 rounded-full text-lg hover:bg-black hover:text-white border border-white transition-all duration-200"
                    >
                        Escribir por WhatsApp →
                    </a>
                </div>
            </section>
        </>
    );
}
