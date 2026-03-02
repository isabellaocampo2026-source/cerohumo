import { getMDXDataBySlug, getAllMDXNodes } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";

interface Props {
    params: Promise<{
        categoria: string;
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const { categoria, slug } = resolvedParams;
    const post = getMDXDataBySlug(categoria, slug);

    if (!post) {
        return {};
    }

    const title = `${post.frontmatter.title} | Cero Humo`;
    const url = `${SITE_URL}/${categoria}/${slug}`;

    return {
        title,
        description: post.frontmatter.description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description: post.frontmatter.description,
            url,
            type: "article",
        },
    };
}

export async function generateStaticParams() {
    const nodes = getAllMDXNodes();
    return nodes.map((node) => ({
        categoria: node.categoria,
        slug: node.slug,
    }));
}

export default async function MDXPage({ params }: Props) {
    const resolvedParams = await params;
    const { categoria, slug } = resolvedParams;
    const post = getMDXDataBySlug(categoria, slug);

    if (!post) {
        return notFound();
    }

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.frontmatter.title,
        description: post.frontmatter.description,
        author: {
            "@type": "Organization",
            name: "Cero Humo",
            url: SITE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Cero Humo",
            url: SITE_URL,
        },
        url: `${SITE_URL}/${categoria}/${slug}`,
    };

    return (
        <article className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <header className="py-16 sm:py-24 px-4 border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-xs font-semibold tracking-wide uppercase text-muted">
                            {post.categoria}
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
                        {post.frontmatter.title}
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        {post.frontmatter.description}
                    </p>
                </div>
            </header>

            <div className="py-16 px-4">
                <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-bold prose-a:text-white prose-a:underline hover:prose-a:text-gray-300">
                    <MDXRemote source={post.content} />
                </div>
            </div>

            <section className="py-20 px-4 bg-white text-black text-center mt-12">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-black tracking-tight mb-4">
                        ¿Listo para dominar la búsqueda con IA?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Aplica estas estrategias a tu negocio hoy mismo.
                    </p>
                    <a
                        href="https://wa.me/573053476462"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                        Hablar con un consultor →
                    </a>
                </div>
            </section>
        </article>
    );
}
