import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React from "react"
import { Block } from "../components/core/block"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { DoubleBlock } from "../components/doubleBlock"
import { Formitable } from "../components/formitable"
import { Locaties } from "../components/locaties"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { AboutPageType } from "../lib/types/pages/about-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
    page: AboutPageType;
    locations: LocationType[]
    menuGroups: MenuGroupType[]
}

export default function Locations(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />
            <Formitable />

            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />

            <Locaties hideText locations={props.data.locations} />

            <Block>
                {data.page.textAndImageBlocks?.map((doubleBlock, i) => {
                    return (
                        <DoubleBlock transparant key={i} flipped={i % 2 != 0} doubleBlock={doubleBlock} />
                    )
                })}
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
                    groq: `*[_type == "locations"]`
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