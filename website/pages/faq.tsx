import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React from "react"
import { ContactBlock } from "../components/contactBlock"
import { Block } from "../components/core/block"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { JobBlock } from "../components/core/jobBlock"
import { Meta } from "../components/core/meta"
import { DoubleBlock } from "../components/doubleBlock"
import { FaqItem } from "../components/faqItem"
import { Locaties } from "../components/locaties"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { AboutPageType } from "../lib/types/pages/about-page.type"
import { CareerPageType } from "../lib/types/pages/career-page.type"
import { ContactPageType } from "../lib/types/pages/contact-page.type"
import { FaqPageType } from "../lib/types/pages/faq-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
    page: FaqPageType;
    locations: LocationType[]
    menuGroups: MenuGroupType[]
}

export default function Faq(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />

            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />

            <div className="flex flex-col gap-5 p-4 md:p-8">
                <img className="max-w-page w-full mx-auto  hidden md:block md:px-8" src="/faq-block/top-divider.svg" />
                <img className="max-w-page w-full mx-auto  md:hidden" src="/faq-block/top-mobile.svg" />
                <div className="max-w-page mx-auto w-full md:px-10 lg:px-20">
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
                <img className="max-w-page w-full mx-auto  hidden md:block md:px-8" src="/faq-block/bottom-divider.svg" />
                <img className="max-w-page w-full mx-auto  md:px-8 md:hidden" src="/faq-block/bottom-mobile.svg" />
            </div>

            <Footer />

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