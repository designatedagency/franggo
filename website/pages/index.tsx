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

type PageProps = {
  page: HomePage
}

export default function Home(props: SanityNextStaticProps<PageProps>) {

  const data = useSanityPreview(props);
  console.log("Refresh", data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Meta tags={data.page.meta} />

      <Header />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          {data.page.pageTitle || (strings.formatString(strings.welcomeToNextJs, <a className="text-purple-500" href="https://nextjs.org">Next.JS</a>))}
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">Localization</h3>
            <Button variant="primary" className="mt-4" onClick={() => setLanguage(strings.getLanguage() === "en" ? "nl" : "en", strings.getLanguage())}>Switch Language</Button>
          </div>

          <div className="p-6 mt-6 text-left border rounded-xl">
            <h3 className="text-2xl font-bold">Buttons</h3>
            <div className="flex">
              <div className="flex flex-col">
                <Button variant="primary" className="mt-4">Primary</Button>

                <Button variant="secondary" className="mt-4 group w-fit">
                  Secondary
                  <div className="relative ml-2 w-5 h-5">
                    <img className="w-5 h-5 absolute transition-all left-0 group-hover:left-1" src="/icons/arrow-long-right-black.svg" />
                  </div>
                </Button>

              </div>
              <div className="flex flex-col ml-4">
                <Button variant="secondary" className="mt-4">
                  <img className='mr-2 w-auto h-5' src="/miles.svg" />
                  With IMG
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">Inputs</h3>
            <Input className="mt-4" placeholder='Basic input' />
            <TextArea className="mt-4" placeholder='Textarea input' />
          </div>

        </div>
      </main >

      <RichText richText={data.page.text} />

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
        }
      }
    }),
    revalidate: getNextRevalidation(),
  }
}