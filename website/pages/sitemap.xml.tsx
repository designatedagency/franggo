import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { getSanityNextProps } from "../lib/helpers/sanity-next-helpers";

type PageKey = 'home' | 'menu' | 'about' | 'locations' | 'order' | 'contact' | 'career' | 'faq' | 'allergies';

type Page = {
    _type: PageKey,
    _updatedAt: string
}

type PageProps = {
    pages: Array<Page>;
};

export default function Sitemap() {
    // This function component does nothing on the client side
    return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> {
    const { res } = context;
    const props = await getSanityNextProps<PageProps>({
        context,
        queries: {
            pages: {
                groq: `*[_type in ["home", "menu", "locations", "about", "order", "contact", "career", "faq", "allergies"]]{_type, _updatedAt}`,
                expectArray: true
            },
        }
    });

    const xmlContent = generateSitemapXML(props.data.pages);

    res.setHeader("Content-Type", "application/xml");
    res.write(xmlContent);
    res.end();

    return {
        props: {}, // no props needed for the component
    };
}

function generateSitemapXML(pages: Array<{ _type: string; _updatedAt: string }>): string {
    const baseUrl = "https://www.franggo.nl"; // Replace with your domain

    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    pages.forEach(page => {
        const pageUrl = getPageUrl(page._type as PageKey);
        const lastModified = new Date(page._updatedAt).toISOString();
        xml += `
            <url>
                <loc>${baseUrl}${pageUrl}</loc>
                <lastmod>${lastModified}</lastmod>
            </url>`;
    });

    xml += `</urlset>`;
    return xml;
}

function getPageUrl(type: PageKey): string {
    const pagesSlugs = {
        'home': '/',
        'menu': '/menu',
        'about': '/about',
        'locations': '/locations',
        'order': '/order',
        'contact': '/contact',
        'career': '/career',
        'faq': '/faq',
        'allergies': '/allergies'
    };

    return pagesSlugs[type] || '/';
}
