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
import { Formitable } from "../components/formitable"
import { Locaties } from "../components/locaties"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { AboutPageType } from "../lib/types/pages/about-page.type"
import { CareerPageType } from "../lib/types/pages/career-page.type"
import { ContactPageType } from "../lib/types/pages/contact-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
    page: CareerPageType;
    locations: LocationType[]
    menuGroups: MenuGroupType[]
}

export default function Career(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />
            <Formitable />
            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />

            <DoubleBlock backgroundPattern doubleBlock={data.page.textImageBlock} />

            <Block small>
                <div className="flex flex-col md:p-10">
                    {data.page.jobs?.map((job, i) => {
                        return (
                            <div key={i}>
                                <JobBlock block={job} />
                                {data.page.jobs && data.page.jobs.length - 1 > i ?
                                    <div className="w-full max-w-page mx-auto py-2 px-8">
                                        <div className="h-[2px] w-full bg-black" />
                                    </div>
                                    : null}
                            </div>
                        )
                    })}
                </div>
            </Block>

            < Footer />

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
                    groq: `*[_type == "career"]`
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