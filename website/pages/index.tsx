import React from "react"
import Link from "next/link"
import { GetStaticPropsContext } from "next"
import { Button } from '../components/core/button'
import { Header } from '../components/core/header'
import { Input } from '../components/core/input'
import { TextArea } from '../components/core/textarea'
import { strings } from '../lib/constants/languages/strings'
import { setLanguage } from '../lib/helpers/language-helpers'
import { HomePage } from "../lib/types/pages/home-page.type"
import { RichText } from "../components/core/rich-text"
import { Meta } from "../components/core/meta"
import { Footer } from "../components/core/footer"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { Location } from "../lib/types/types/location.type"
import { Hero } from "../components/hero"
import { DoubleBlock } from "../components/doubleBlock"
import { CTA } from "../components/cta"
import { Locaties } from "../components/locaties"

type PageProps = {
  page: HomePage
  locations: Location[]
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