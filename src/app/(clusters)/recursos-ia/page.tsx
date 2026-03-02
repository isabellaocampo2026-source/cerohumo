import { getAllMDXNodes } from "@/lib/mdx";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hub de Conocimiento GEO: Optimización Generativa IA | Cero Humo",
    description: "Explora nuestra base de conocimiento estructurada sobre Inteligencia Artificial, SGE, y cómo dominar los motores generativos en Colombia.",
};

export default function RecursosIAHub() {
    const nodes = getAllMDXNodes();

    // Group nodes by cluster
    const clusters = {
        tecnologia: nodes.filter(n => n.categoria === "tecnologia"),
        soluciones: nodes.filter(n => n.categoria === "soluciones"),
        comparativas: nodes.filter(n => n.categoria === "comparativas"),
        autoridad: nodes.filter(n => n.categoria === "autoridad"),
    };

    const clusterTitles: Record<string, { title: string, color: string }> = {
        tecnologia: { title: "Tecnología y Capacidades Core", color: "text-green-400" },
        soluciones: { title: "Soluciones por Perfil Comercial", color: "text-blue-400" },
        comparativas: { title: "Toma de Decisiones & Finanzas", color: "text-orange-400" },
        autoridad: { title: "Autoridad, Ética y Liderazgo", color: "text-purple-400" },
    };

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-widest uppercase text-white/50 mb-4 block">
                        Base de Datos Vectorial
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Hub de Conocimiento GEO
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        Explora los 26 nodos de nuestra arquitectura de información. Guías técnicas, financieras y éticas para dominar Google SGE y la Inteligencia Artificial en Colombia.
                    </p>
                </div>

                <div className="space-y-24">
                    {Object.entries(clusters).map(([key, categoryNodes]) => (
                        <div key={key} className="space-y-8">
                            <div className="border-b border-white/10 pb-4">
                                <h2 className={`text-3xl font-bold ${clusterTitles[key].color}`}>
                                    {clusterTitles[key].title}
                                </h2>
                                <p className="text-muted mt-2">
                                    {categoryNodes.length} artículos especializados
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {categoryNodes.map((node) => (
                                    <Link
                                        key={node.slug}
                                        href={`/${node.categoria}/${node.slug}`}
                                        className="block p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:bg-[#111] transition-all group h-full flex flex-col justify-between relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </div>
                                        <div>
                                            <span className={`text-[10px] font-mono tracking-wider uppercase px-2 py-1 rounded inline-block mb-4 border border-white/10 ${clusterTitles[key].color} bg-white/5`}>
                                                Cluster: {key}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                                                {node.frontmatter.title}
                                            </h3>
                                            <p className="text-sm text-muted leading-relaxed mb-6">
                                                {node.frontmatter.description}
                                            </p>
                                        </div>
                                        <div className="text-xs text-white/30 font-mono">
                                            ID: {node.slug}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}
