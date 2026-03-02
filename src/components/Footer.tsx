import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Top section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-black tracking-tight text-white">
                            Cero Humo
                        </Link>
                        <p className="mt-4 text-sm text-muted leading-relaxed">
                            SEO Local. Cero humo. Puro resultado.
                        </p>
                    </div>

                    {/* Ciudades y Nacional */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Sedes Locales
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <li>
                                <Link href="/bogota" className="text-sm text-muted hover:text-white transition-colors">
                                    Bogotá
                                </Link>
                            </li>
                            <li>
                                <Link href="/medellin" className="text-sm text-muted hover:text-white transition-colors">
                                    Medellín
                                </Link>
                            </li>
                            <li>
                                <Link href="/barranquilla" className="text-sm text-muted hover:text-white transition-colors">
                                    Barranquilla
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Cobertura Nacional
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/colombia/agencia-geo-ia" className="text-sm text-muted hover:text-white transition-colors">
                                    Agencia Búsqueda IA (GEO)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Servicios en Bogotá */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Servicios en Bogotá
                        </h3>
                        <ul className="space-y-3 mb-8">
                            <li>
                                <Link href="/bogota/agencia-de-marketing-digital" className="text-sm text-muted hover:text-white transition-colors">
                                    Agencia de Marketing Digital en Bogotá
                                </Link>
                            </li>
                            <li>
                                <Link href="/bogota/empresas-de-marketing" className="text-sm text-muted hover:text-white transition-colors">
                                    Empresas de Marketing en Bogotá
                                </Link>
                            </li>
                            <li>
                                <Link href="/bogota/consultor-seo-y-marketing" className="text-sm text-muted hover:text-white transition-colors">
                                    Consultor SEO en Bogotá
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Recursos Especializados IA
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/tecnologia/busqueda-generativa-sge-colombia" className="text-sm text-muted hover:text-white transition-colors">
                                    Impacto del SGE en Colombia
                                </Link>
                            </li>
                            <li>
                                <Link href="/soluciones/soluciones-ecommerce-pequenas-empresas" className="text-sm text-muted hover:text-white transition-colors">
                                    Búsqueda con IA para E-commerce
                                </Link>
                            </li>
                            <li>
                                <Link href="/comparativas/precios-agencias-ia-vs-tradicional" className="text-sm text-muted hover:text-white transition-colors">
                                    Precio: Agencia IA vs Tradicional
                                </Link>
                            </li>
                            <li>
                                <Link href="/autoridad/como-evaluar-agencia-busqueda-ia" className="text-sm text-muted hover:text-white transition-colors">
                                    Cómo evaluar estrategias de IA
                                </Link>
                            </li>
                            <li className="pt-2">
                                <Link href="/recursos-ia" className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center">
                                    Ver todos los 26 recursos <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Servicios en Medellín y Barranquilla */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Servicios en Medellín
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/medellin/agencia-de-marketing-digital" className="text-sm text-muted hover:text-white transition-colors">
                                    Agencia de Marketing Digital en Medellín
                                </Link>
                            </li>
                        </ul>

                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
                            Servicios en Barranquilla
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/barranquilla/agencia-de-marketing-digital" className="text-sm text-muted hover:text-white transition-colors">
                                    Agencia de Marketing Digital en Barranquilla
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-8 border-t border-border">
                    <p className="text-xs text-muted text-center">
                        © 2025 Cero Humo. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
