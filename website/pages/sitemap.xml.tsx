import { GetStaticPropsContext } from "next"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"

type PageProps = {
    pages: Array<{
        title: string;
        _updatedAt: string;
    }>;
}

type PageKey = 'home' | 'menu' | 'about' | 'locations' | 'order' | 'contact' | 'career' | 'faq' | 'allergies';

export default function Home(props: SanityNextStaticProps<PageProps>) {

    const { pages } = useSanityPreview(props);

    console.log(pages);

    const getPageUrl = (type: PageKey) => {
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
        }

        return pagesSlugs[type];
    }

    return (
        <xml version="1.0" encoding="UTF-8">
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                {   pages.map((page) => {
                    return (
                        <url>
                            <loc>{ getPageUrl(page._type) }</loc>
                            <lastmod>{  new Date(page._updatedAt).toISOString()
                            }</lastmod>
                        </url>
                    )
                }) }
            </urlset>
        </xml>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: await getSanityNextProps<PageProps>({
            context,
            queries: {
                pages: {
                    groq: `*[_type in ["home", "menu", "locations", "about", "order", "contact", "career", "faq", "allergies"]]{_type, _updatedAt}`,
                    expectArray: true  // This query expects multiple results, hence true
                },
            }
        }),
        revalidate: getNextRevalidation(),
    }
}