import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React from "react"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { CTA } from "../components/cta"
import { DoubleBlock } from "../components/doubleBlock"
import { Hero } from "../components/hero"
import { Locaties } from "../components/locaties"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { HomePage } from "../lib/types/pages/home-page.type"
import { LocationType } from "../lib/types/types/location.type"

type PageProps = {
  page: HomePage
  locations: LocationType[]
}

export default function Home(props: SanityNextStaticProps<PageProps>) {

  const data = useSanityPreview(props);
  console.log("Refresh", data);

  return (
    <div>

      <Meta tags={data.page.meta} />

      <Header />
      <Hero />
      <DoubleBlock doubleBlock={data.page.textAndImageBlock} />
      <Locaties locations={props.data.locations} />
      <CTA ctaBlock={data.page.ctaBlock} />

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
          groq: `*[_type == "home"]`
        },
        locations: {
          groq: `*[_type == "location"]`,
          expectArray: true
        }
      }
    }),
    revalidate: getNextRevalidation(),
  }
}