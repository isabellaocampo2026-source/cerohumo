import { getAllMDXNodes, getAllCategorias } from "@/lib/mdx";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Recursos SEO y Marketing Digital | Cero Humo",
    description: "La biblioteca más avanzada de trucos, hacks y auditorías técnicas SEO y de Marketing Digital para Colombia.",
};

export default function RecursosPage() {
    const nodes = getAllMDXNodes();
    const categorias = getAllCategorias();

    // Group nodes by categoria
    const groupedNodes = categorias.reduce((acc, categoria) => {
        acc[categoria] = nodes.filter(node => node.categoria === categoria);
        return acc;
    }, {} as Record<string, typeof nodes>);

    return (
        <div className="min-h-screen bg-background pt-8 pb-24 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
                        Centro de <span className="text-muted">Recursos</span>
                    </h1>
                    <p className="text-lg text-muted">
                        Hemos liberado nuestra infraestructura de conocimiento. Todo lo que tu competencia no quiere que leas sobre SEO y posicionamiento en buscadores (Google / Maps / SGE IA).
                    </p>
                </header>

                <div className="space-y-20">
                    {categorias.map(categoria => {
                        const articulos = groupedNodes[categoria];
                        if (articulos.length === 0) return null;

                        return (
                            <section key={categoria} className="border-t border-border pt-10">
                                <h2 className="text-2xl font-bold uppercase tracking-wide mb-8 inline-flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-sm">📂</span>
                                    {categoria.replace("-", " ")}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {articulos.map(articulo => (
                                        <Link
                                            key={articulo.slug}
                                            href={`/${articulo.categoria}/${articulo.slug}`}
                                            className="group block border border-border bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/40"
                                        >
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                                                {articulo.frontmatter.title}
                                            </h3>
                                            <p className="text-sm text-muted line-clamp-3">
                                                {articulo.frontmatter.description}
                                            </p>
                                            <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-border group-hover:text-white transition-colors">
                                                Leer artículo →
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
