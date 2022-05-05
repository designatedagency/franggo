import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React from "react"
import { Block } from "../components/core/block"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { FaqItem } from "../components/faqItem"
import { Formitable } from "../components/formitable"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { GlobalType } from "../lib/types/base/global.type"
import { FaqPageType } from "../lib/types/pages/faq-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
    page: FaqPageType;
    locations: LocationType[]
    global: GlobalType;
    menuGroups: MenuGroupType[]
}

export default function Faq(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />
            <Formitable />
            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />

            <Block small>
                <div className="max-w-page mx-auto py-20 w-full">
                    {data.page.faqs?.map((faq, i) => {
                        return (
                            <div key={i}>
                                <FaqItem faq={faq} />
                                {data.page.faqs && data.page.faqs.length - 1 > i ?
                                    <div className="w-full max-w-page mx-auto py-4 px-4 md:px-8">
                                        <div className="h-[2px] w-full bg-black" />
                                    </div>
                                    : null}
                            </div>
                        )
                    })}
                </div>
            </Block>

            <Footer locations={props.data.locations} global={data.global} />

            {/* Exit preview button */}
            {props.preview && <Link locale={false} href="/api/exit-preview"><Button variant={"primary"} className="fixed bottom-5 right-5 w-fit">Exit preview</Button></Link>}
        </div >
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: await getSanityNextProps<PageProps>({
            context,
            queries: {
                page: {
                    groq: `*[_type == "faq"]`
                }, global: {
                    groq: `*[_type == "global"]`
                },
                locations: {
                    groq: `*[_type == "location"]`,
                    expectArray: true
                },
                menuGroups: {
                    groq: `*[_type == "menuGroup"]`,
                    expectArray: true
                }
            }
        }),
        revalidate: getNextRevalidation(),
    }
}