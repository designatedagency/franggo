import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React from "react"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { Formitable } from "../components/formitable"
import { Locaties } from "../components/locaties"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { GlobalType } from "../lib/types/base/global.type"
import { ContactPageType } from "../lib/types/pages/contact-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
    page: ContactPageType;
    locations: LocationType[]
    global: GlobalType;
    menuGroups: MenuGroupType[]
}

export default function Contact(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />
            <Formitable />
            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />
            <Locaties paddingY hideButton sticker showMap hideText locations={data.locations} />
            {/* <Block>

                {data.locations.map((location, i) => {
                    return <ContactBlock data={location} key={i} />
                })}

            </Block> */}

            < Footer locations={props.data.locations} global={data.global} />

            {/* Exit preview button */}
            {/* {props.preview && <Link locale={false} href="/api/exit-preview"><Button variant={"primary"} className="fixed bottom-5 right-5 w-fit">Exit preview</Button></Link>} */}
        </div >
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: await getSanityNextProps<PageProps>({
            context,
            queries: {
                page: {
                    groq: `*[_type == "contact"]`
                },
                global: {
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