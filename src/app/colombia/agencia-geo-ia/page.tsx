import type { Metadata } from "next";
import { getLanding, SITE_URL, WHATSAPP_LINK } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import { notFound } from "next/navigation";

// Optional: you can extract this data or keep it here for the mega landing
const landing = getLanding("colombia", "agencia-geo-ia");

export const metadata: Metadata = {
    title: landing?.title || "Agencia de Búsqueda con IA (GEO) en Colombia",
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

    // Fan-Out FAQs expanded specifically for this page
    const megaFaqs = [
        ...landing.faqs,
        {
            question: "¿Cómo integran herramientas como OpenAI o Gemini en sus procesos de búsqueda?",
            answer: "No usamos IA genérica para 'escribir artículos'. Integramos APIs de LLMs para analizar la relevancia semántica de tu contenido, extraer entidades de tu negocio y estructurar tus datos (JSON-LD) de modo que los motores de IA (ChatGPT, Google SGE) te lean como la máxima autoridad. Usamos IA para ingeniería de datos, no para relleno."
        },
        {
            question: "¿Cuál es la diferencia de ROI entre búsqueda tradicional y búsqueda asistida por IA?",
            answer: "El SEO viejo (tratar de rankear por 1 palabra clave) cada vez tiene menos clics, porque las IAs responden directo. El ROI en GEO radica en la 'recomendación transaccional': cuando un usuario le pregunta a ChatGPT '¿Qué agencia recomiendas para mi caso X?', tú eres la respuesta directa. Es tráfico 100% pre-calificado y con una intención de compra altísima."
        },
        {
            question: "¿Por qué elegir una agencia de IA local (Colombia) vs una agencia global?",
            answer: "La IA se alimenta del contexto cultural y lingüístico. Una agencia global lanza plantillas en 'español neutro'. Nosotros estructuramos tu grafo de conocimiento (Knowledge Graph) adaptado a las intenciones de búsqueda, modismos y geografía de Bogotá, Medellín, Barranquilla o cualquier ciudad colombiana, dándote hiper-personalización que los algoritmos premian."
        },
        {
            question: "¿Qué certificaciones o frameworks utiliza Cero Humo?",
            answer: "Nuestra metodología se basa en los lineamientos técnicos de Google E-E-A-T, Google AI Overviews documentation y la optimización para motores híbridos (RAG - Retrieval-Augmented Generation). Esto garantiza que tu negocio cumpla con las políticas de calidad para ser citado por modelos de lenguaje."
        },
        {
            question: "¿Cómo garantizan la veracidad de datos y evitan alucinaciones de la IA?",
            answer: "El mayor riesgo actual es que la IA 'invente' (alucine) datos sobre tu empresa. Lo evitamos construyendo tu propia Autoridad Topológica y un Knowledge Graph cerrado y estructurado en tu sitio web. Esto obliga a la IA a citar tu fuente directamente como 'verdad absoluta', protegiendo tu reputación y compliance."
        }
    ];

    return (
        <article className="min-h-screen">
            {/* INJECT SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        name: landing.title,
                        description: landing.metaDescription,
                        publisher: {
                            "@type": "Organization",
                            name: "Cero Humo",
                            url: SITE_URL
                        }
                    }),
                }}
            />
            {/* FAQ Schema para Fan-Out */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: megaFaqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />

            {/* HERO SECTION - GEO FOCUSED */}
            <section className="relative py-24 sm:py-32 px-4 overflow-hidden border-b border-border">
                {/* Visual grid in background to convey "network/AI" */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-wide uppercase text-white/80">Generative Engine Optimization (GEO)</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] animate-fade-in-up delay-100">
                        El SEO tradicional murió.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Tus clientes ahora le preguntan a la IA.
                        </span>
                    </h1>
                    <p className="mt-8 text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {landing.subtitle}
                    </p>
                    <div className="mt-10 animate-fade-in-up delay-300">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-black hover:text-white border border-white transition-all duration-300 hover:scale-105"
                        >
                            Audita tu marca frente a la IA →
                        </a>
                        <p className="mt-6 text-sm font-medium text-muted">
                            {landing.trustText}
                        </p>
                    </div>
                </div>
            </section>

            {/* THE PARADIGM SHIFT (SEO vs GEO) */}
            <AnimatedSection className="py-20 sm:py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                            De Directorio a Motor de Significado
                        </h2>
                        <p className="mt-6 text-xl text-muted max-w-2xl mx-auto">
                            Completitud Semántica vs. Palabras Clave Aisladas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* SEO Tradicional */}
                        <div className="bg-black border border-red-900/40 p-10 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-red-500/20"></div>
                            <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center gap-3">
                                <span className="text-red-500">❌</span> SEO Antiguo (2010-2023)
                            </h3>
                            <ul className="space-y-5 text-gray-500">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2 shrink-0"></div>
                                    <p>Repetición obsesiva de frases exactas como <i>"Mejor abogado Michoacán"</i>.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2 shrink-0"></div>
                                    <p>Optimización para enlaces azules y directorios estáticos.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2 shrink-0"></div>
                                    <p>Esforzarse porque el usuario pase por un solo "callejón" digital.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-900/50 mt-2 shrink-0"></div>
                                    <p>Google y la IA ignoran la web si el usuario hace una pregunta hiper-específica.</p>
                                </li>
                            </ul>
                        </div>

                        {/* GEO IA */}
                        <div className="bg-white/5 border border-white/20 p-10 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-white/20"></div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-green-400">✅</span> GEO & AI Search (Hoy)
                            </h3>
                            <ul className="space-y-5 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                    <p><strong>Query Fan-Out:</strong> Estructuramos redes que responden las decenas de intenciones ocultas de la IA (regulaciones, precios, reseñas).</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                    <p><strong>Autoridad Tópica Absoluta:</strong> "Iluminamos toda la ciudad". Cubrimos cada punto de fricción de tu comprador.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                    <p>Optimización para <strong>ChatGPT, SGE (Google AI Overviews) y Perplexity</strong>.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                    <p>Inyección de <strong>Knowledge Graphs (Schema.org)</strong> para que la IA te entienda como una Entidad Experta.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* SECTORES Y CASOS DE USO TÉCNICOS */}
            <AnimatedSection className="py-20 sm:py-32 px-4 border-t border-border bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
                            Inteligencia Semántica por Sector
                        </h2>
                        <p className="text-xl text-muted max-w-3xl">
                            Las IAs segmentan recomendaciones basándose en quién pregunta y para qué industria. Así nos adaptamos:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                tag: "Scale-ups & Startups",
                                title: "Crecimiento Exponencial",
                                desc: "Prototipos rápidos (MVPs de Search) y optimizaciones ágiles. Te posicionamos como la solución de vanguardia frente a modelos de negocio obsoletos en tu nicho."
                            },
                            {
                                tag: "E-Commerce",
                                title: "Optimización de Catálogos (Visual & Textual)",
                                desc: "Implementación de Búsqueda Visual y Vector Search para retail. Hacemos que la IA recomiende tus productos exactos cuando un comprador pide sugerencias comparativas."
                            },
                            {
                                tag: "Enterprise & Corporativo",
                                title: "Sectores Regulados (Salud, Banca)",
                                desc: "Estructuramos Data segura y compliance técnico total. Eliminamos el riesgo de 'alucinaciones' de la IA creando verdades absolutas (E-E-A-T) comprobables sobre tu corporación."
                            }
                        ].map((box, i) => (
                            <div key={i} className="bg-black border border-border p-8 rounded-2xl hover:border-white/50 transition-all duration-300">
                                <span className="text-xs font-mono text-white/50 mb-4 block">{box.tag}</span>
                                <h3 className="text-xl font-bold mb-4">{box.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{box.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* METODOLOGÍA Y TECH STACK */}
            <AnimatedSection className="py-20 sm:py-32 px-4 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-8">
                                Nuestro Stack y Metodología en SGE
                            </h2>
                            <p className="text-lg text-muted mb-8 leading-relaxed">
                                No somos una agencia que "usa ChatGPT para escribir blogs". Somos ingenieros de posicionamiento diseñando la forma en que los Grandes Modelos de Lenguaje (LLMs) interpretan tu marca a nivel código y semántica.
                            </p>

                            <ul className="space-y-6">
                                {landing.services.map((s, i) => (
                                    <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <span className="text-white mt-1">✓</span>
                                        <span className="text-muted leading-relaxed">{s.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
                            <h3 className="text-2xl font-bold mb-8">El Proceso Fan-Out</h3>
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                                {[
                                    { title: "Mapeo", desc: "Extraemos la red semántica completa (el fan-out) de tu industria." },
                                    { title: "Estructura (JSON-LD)", desc: "Codificamos esa red en esquemas legibles por máquinas (Knowledge Graphs)." },
                                    { title: "Despliegue de Autoridad", desc: "Generamos cobertura E-E-A-T implacable para dominar la recomendación final del motor de IA." }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {idx + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-white/10 bg-white/5">
                                            <h4 className="font-bold mb-1">{step.title}</h4>
                                            <p className="text-sm text-muted">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* INVERSIÓN / ROI SECTION */}
            <AnimatedSection className="py-20 sm:py-28 px-4 border-t border-border bg-[#050505]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
                        Inversión y Retorno en la Era Generativa
                    </h2>
                    <p className="text-xl text-muted mb-12">
                        Dejar de pagar mensualidades para empujar palabras clave. Pagar por infraestructura de autoridad definitiva.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/10">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                📊
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Modelo de Optimización de Entidades</h3>
                                <p className="text-muted">A diferencia de las agencias SEO tradicionales (Retainers infinitos), estructuramos el Knowledge Graph de tu marca mediante sprints altamente técnicos. Es un trabajo fundacional profundo.</p>
                            </div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Tráfico Hyper-Intencionado</li>
                            <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Menor Costo de Adquisición vs Ads</li>
                            <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Inmunidad a cambios de Algoritmo</li>
                            <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Activo Digital Permanente</li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            {/* TESTIMONIALS */}
            <AnimatedSection className="py-20 sm:py-28 px-4 border-t border-border">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-center mb-16">
                        Pioneros en Colombia
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {landing.testimonials.map((t, i) => (
                            <div key={i} className="border border-border rounded-xl p-8 bg-white/[0.02]">
                                <p className="text-sm text-yellow-400 mb-4">⭐⭐⭐⭐⭐</p>
                                <p className="text-muted text-base leading-relaxed italic mb-6">
                                    &ldquo;{t.text}&rdquo;
                                </p>
                                <div className="pt-4 border-t border-border">
                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                    <p className="text-xs text-muted mt-1">{t.business}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* MEG A  FAQ */}
            <AnimatedSection className="py-20 sm:py-32 px-4 border-t border-border">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
                            Preguntas Frecuentes SGE & GEO
                        </h2>
                        <p className="text-muted text-lg">
                            Todo lo que necesitas saber antes de migrar del SEO tradicional a la IA.
                        </p>
                    </div>
                    <FaqAccordion items={megaFaqs} />
                </div>
            </AnimatedSection>

            {/* CTA FINAL */}
            <section className="py-24 sm:py-32 px-4 border-t border-border bg-white text-black text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                        {landing.ctaTitle}
                    </h2>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
                        {landing.ctaSubtitle}
                    </p>
                    <div className="mt-10">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                        >
                            Hablar con un consultor GEO →
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
