import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { WHATSAPP_LINK, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cero Humo | Agencia de SEO Local en Colombia",
  description:
    "Agencia de SEO Local en Colombia. Hacemos que tus clientes te encuentren en Google. Sin humo, puro resultado. Escríbenos por WhatsApp.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Cero Humo | Agencia de SEO Local en Colombia",
    description:
      "Agencia de SEO Local en Colombia. Hacemos que tus clientes te encuentren en Google. Sin humo, puro resultado.",
    url: SITE_URL,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] animate-fade-in-up">
            Tu negocio en Google.
            <br />
            <span className="text-muted">Sin humo.</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Somos la agencia de SEO local que hace que tus clientes te
            encuentren cuando buscan lo que tú vendes. En Bogotá, Medellín y
            Barranquilla.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-full text-base hover:bg-black hover:text-white border border-white transition-all duration-200"
            >
              Escríbenos por WhatsApp →
            </a>
            <a
              href="#que-hacemos"
              className="inline-flex items-center justify-center border border-border text-muted font-medium px-8 py-4 rounded-full text-base hover:border-white hover:text-white transition-all duration-200"
            >
              Ver cómo funciona ↓
            </a>
          </div>
          <p className="mt-6 text-sm text-muted animate-fade-in-up delay-300">
            ⭐ 4.9 en Google · +80 negocios posicionados
          </p>
        </div>
      </section>

      {/* ===== QUÉ HACEMOS ===== */}
      <AnimatedSection id="que-hacemos" className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight">
            SEO Local. Solo eso.
            <br />
            <span className="text-muted">Pero mejor que nadie.</span>
          </h2>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "📍",
                title: "Google Maps",
                text: "Tu negocio aparece en el mapa cuando alguien busca lo que vendes cerca de ti.",
              },
              {
                icon: "🔍",
                title: "Búsquedas orgánicas",
                text: "Primera página de Google para las búsquedas que importan en tu ciudad.",
              },
              {
                icon: "📞",
                title: "Más llamadas y clientes",
                text: "El SEO local genera llamadas, visitas a tu local y ventas. Medible. Real.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-border rounded-2xl p-8 sm:p-10 hover:border-white/30 transition-colors duration-300"
              >
                <span className="text-4xl">{card.icon}</span>
                <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== RESULTADOS ===== */}
      <AnimatedSection className="py-20 sm:py-28 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight">
            Números. <span className="text-muted">No promesas.</span>
          </h2>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "+312%",
                desc: "aumento en visibilidad en Google Maps",
                source: "Restaurante en Bogotá",
              },
              {
                number: "48",
                desc: "llamadas nuevas al mes",
                source: "Clínica dental en Medellín",
              },
              {
                number: "#1",
                desc: "en Google para su keyword principal",
                source: "Abogado en Barranquilla",
              },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black">
                  {metric.number}
                </span>
                <p className="mt-3 text-muted text-sm sm:text-base">
                  {metric.desc}
                </p>
                <p className="mt-1 text-xs text-border">{metric.source}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== POR QUÉ CERO HUMO ===== */}
      <AnimatedSection className="py-20 sm:py-28 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight">
            Otras agencias te venden humo.
            <br />
            <span className="text-muted">Nosotros no.</span>
          </h2>
          <ul className="mt-12 sm:mt-16 space-y-6">
            {[
              "No hacemos contratos de 12 meses. Si no funciona, te vas.",
              "No vendemos likes ni seguidores. Vendemos clientes reales.",
              "No te mandamos reportes bonitos que no entiendes. Te mandamos resultados.",
              "No prometemos la primera posición en 1 semana. Te decimos la verdad.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-base sm:text-lg">
                <span className="text-white font-bold text-xl shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* ===== CIUDADES ===== */}
      <AnimatedSection className="py-20 sm:py-28 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center tracking-tight">
            ¿Dónde estamos?
          </h2>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { city: "Bogotá", href: "/bogota" },
              { city: "Medellín", href: "/medellin" },
              { city: "Barranquilla", href: "/barranquilla" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-border rounded-2xl p-8 sm:p-10 text-center text-2xl sm:text-3xl font-black hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                {item.city} →
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-muted text-sm">
            Y seguimos expandiendo. Pronto en más ciudades de Colombia.
          </p>
        </div>
      </AnimatedSection>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 sm:py-32 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            ¿Listo para que te encuentren en Google?
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
