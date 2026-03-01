import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/data";
import type { LandingPageData } from "@/lib/data";

interface LandingPageTemplateProps {
    data: LandingPageData;
}

export default function LandingPageTemplate({ data }: LandingPageTemplateProps) {
    const cityLabel =
        data.citySlug === "bogota"
            ? "Bogotá"
            : data.citySlug === "medellin"
                ? "Medellín"
                : "Barranquilla";

    // Schema: LocalBusiness
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: data.schemaName,
        url: data.schemaUrl,
        telephone: "+573053476462",
        address: {
            "@type": "PostalAddress",
            addressLocality: data.city,
            addressCountry: "CO",
        },
        areaServed: data.city,
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "05:30",
            closes: "21:00",
        },
    };

    // Schema: FAQPage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Breadcrumbs
                    items={[
                        { label: cityLabel, href: `/${data.citySlug}` },
                        { label: data.h1, href: `/${data.citySlug}/${data.slug}` },
                    ]}
                />
            </div>

            {/* ===== HERO ===== */}
            <section className="py-16 sm:py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] animate-fade-in-up">
                        {data.h1}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                        {data.subtitle}
                    </p>
                    <div className="mt-8 animate-fade-in-up delay-200">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full text-base hover:bg-black hover:text-white border border-white transition-all duration-200"
                        >
                            Escríbenos por WhatsApp →
                        </a>
                    </div>
                    <p className="mt-5 text-sm text-muted animate-fade-in-up delay-300">
                        {data.trustText}
                    </p>
                </div>
            </section>

            {/* ===== PROBLEMA ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                        {data.problemTitle}
                    </h2>
                    {data.problemText.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </AnimatedSection>

            {/* ===== QUÉ HACEMOS ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                        {data.servicesTitle}
                    </h2>
                    <ul className="mt-8 sm:mt-10 space-y-5">
                        {data.services.map((service, i) => (
                            <li key={i} className="flex items-start gap-4 text-base sm:text-lg">
                                <span className="text-white font-bold text-xl shrink-0 mt-0.5">✓</span>
                                <span>{service.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimatedSection>

            {/* ===== RESULTADOS ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                        {data.resultsTitle}
                    </h2>
                    <div className="mt-8 sm:mt-10 space-y-6">
                        {data.cases.map((c, i) => (
                            <div
                                key={i}
                                className="border border-border rounded-xl p-6 sm:p-8"
                            >
                                <p className="text-muted text-base leading-relaxed italic">
                                    &ldquo;{c.text}&rdquo;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* ===== TESTIMONIOS ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center">
                        Lo que dicen nuestros clientes
                    </h2>
                    <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="border border-border rounded-xl p-6 sm:p-8"
                            >
                                <p className="text-sm text-yellow-400 mb-3">⭐⭐⭐⭐⭐</p>
                                <p className="text-muted text-sm leading-relaxed italic">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                    <p className="text-xs text-muted mt-1">{t.business}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* ===== FAQ ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
                        Preguntas frecuentes
                    </h2>
                    <FaqAccordion items={data.faqs} />
                </div>
            </AnimatedSection>

            {/* ===== NAP + MAPA ===== */}
            <AnimatedSection className="py-16 sm:py-24 px-4 border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Info */}
                        <div>
                            <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
                                {data.nap.name}
                            </h2>
                            <div className="space-y-4 text-muted text-sm">
                                <div>
                                    <p className="text-white font-semibold mb-1">Dirección</p>
                                    <p>{data.nap.address}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-1">Teléfono</p>
                                    <p>{data.nap.phone}</p>
                                </div>
                                <div>
                                    <p className="text-white font-semibold mb-1">Horarios</p>
                                    <p>{data.nap.hours}</p>
                                </div>
                            </div>
                        </div>
                        {/* Map placeholder */}
                        <div className="rounded-xl overflow-hidden border border-border min-h-[250px]">
                            <iframe
                                src={`https://www.google.com/maps?q=${encodeURIComponent(data.nap.mapQuery)}&output=embed`}
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: 250 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Mapa de ${data.city}`}
                            />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* ===== OTROS SERVICIOS ===== */}
            {data.otherServicesInCity.length > 0 && (
                <AnimatedSection className="py-16 sm:py-20 px-4 border-t border-border">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-6">
                            Otros servicios en {data.city}
                        </h2>
                        <ul className="space-y-3">
                            {data.otherServicesInCity.map((s, i) => (
                                <li key={i}>
                                    <Link
                                        href={s.href}
                                        className="text-muted hover:text-white transition-colors text-base underline underline-offset-4"
                                    >
                                        {s.label} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            )}

            {/* ===== CTA FINAL ===== */}
            <section className="py-20 sm:py-28 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                        {data.ctaTitle}
                    </h2>
                    <p className="mt-6 text-lg text-muted">{data.ctaSubtitle}</p>
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
