import { GetStaticPropsContext } from "next"
import React from "react"
import { Footer } from "../../../components/core/footer"
import { Header } from '../../../components/core/header'
import { Meta } from "../../../components/core/meta"
import { getNextRevalidation, getSanityNextProps, getSanityNextStaticPaths, SanityNextStaticProps, useSanityPreview } from "../../../lib/helpers/sanity-next-helpers"
import { News } from "../../../lib/types/pages/news.type"

interface PageProps {
    newsItem: News,
    newsItems: News[]
}

export default function NewsSlugPage(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);
    const newsItem = data?.newsItem;
    if (!newsItem) return null;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">

            <Meta tags={newsItem.meta} />

            <Header />

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    <h1>{newsItem.newsTitle}</h1>
                </h1>
            </main>

            <Footer />
        </div >
    )
}

export const getStaticPaths = async () => getSanityNextStaticPaths({
    slugName: "newsItem",
    schemaType: "newsItem"
})

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: await getSanityNextProps<PageProps>({
            context,
            queries: {
                newsItem: {
                    groq: `*[_type == "newsItem" && slug.current == "${context.params?.newsItem}"]`,
                },
                newsItems: {
                    groq: `*[_type == "newsItem"]`,
                    expectArray: true
                }
            }
        }),
        revalidate: getNextRevalidation(),
    }
}