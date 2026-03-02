import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MDXFrontmatter {
    title: string;
    description: string;
    cluster: string;
    date?: string;
    [key: string]: any;
}

export interface MDXData {
    frontmatter: MDXFrontmatter;
    content: string;
    slug: string;
    categoria: string;
}

const contentDir = path.join(process.cwd(), 'content');

export function getMDXFiles(dir: string): string[] {
    try {
        return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
    } catch (err) {
        return [];
    }
}

export function readMDXFile(filePath: string): { frontmatter: MDXFrontmatter; content: string } {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    return { frontmatter: data as MDXFrontmatter, content };
}

export function getMDXDataByCategoria(categoria: string): MDXData[] {
    const categoriaDir = path.join(contentDir, categoria);
    const mdxFiles = getMDXFiles(categoriaDir);

    return mdxFiles.map((file) => {
        const slug = path.basename(file, path.extname(file));
        const { frontmatter, content } = readMDXFile(path.join(categoriaDir, file));
        return { frontmatter, content, slug, categoria };
    });
}

export function getMDXDataBySlug(categoria: string, slug: string): MDXData | null {
    try {
        const filePath = path.join(contentDir, categoria, `${slug}.mdx`);
        const { frontmatter, content } = readMDXFile(filePath);
        return { frontmatter, content, slug, categoria };
    } catch (error) {
        return null;
    }
}

export function getAllCategorias(): string[] {
    try {
        const entries = fs.readdirSync(contentDir, { withFileTypes: true });
        return entries.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch (error) {
        return [];
    }
}

export function getAllMDXNodes(): MDXData[] {
    const categorias = getAllCategorias();
    let allNodes: MDXData[] = [];
    categorias.forEach(categoria => {
        allNodes = [...allNodes, ...getMDXDataByCategoria(categoria)];
    });
    return allNodes;
}
