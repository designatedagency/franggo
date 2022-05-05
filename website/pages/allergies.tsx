import { GetStaticPropsContext } from "next"
import Link from "next/link"
import React, { useState } from "react"
import { Block } from "../components/core/block"
import { Button } from '../components/core/button'
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { DoubleBlock } from "../components/doubleBlock"
import { Locaties } from "../components/locaties"
import { SmallHero } from "../components/smallHero"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { AboutPageType } from "../lib/types/pages/about-page.type"
import { AllergiesPageType } from "../lib/types/pages/allergies-page.type"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

// react pdf
import { Document, Page } from 'react-pdf';
import { pdfjs } from "react-pdf";
import { assetUrlFor } from "../lib/helpers/sanity-helpers"
import { Formitable } from "../components/formitable"
import { GlobalType } from "../lib/types/base/global.type"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PageProps = {
    page: AllergiesPageType;
    locations: LocationType[]
    global: GlobalType;
    menuGroups: MenuGroupType[]
}

export default function Allergies(props: SanityNextStaticProps<PageProps>) {

    const data = useSanityPreview(props);

    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div>

            <Meta tags={data.page?.meta} />

            <Header />
            <Formitable />

            <SmallHero title={data.page.title} description={data.page.subtitle} image={data.page.bgImage} />


            <div className="relative bg-franggo-orange">
                <div className={`absolute h-full object-cover w-[50px] z-10 top-0 left-0  bg-contain bg-[url('/graphic/left.svg')] bg-repeat-y`} />
                <div className="relative z-20 p-8 max-w-page mx-auto">
                    <img className="mb-5" src="/allergies/text-image.svg" />
                    <div className="text-white">
                        <p className="mb-10">{data.page.description}</p>

                        {data.page.file ?
                            <div className="w-full mx-auto">
                                <Document
                                    file={assetUrlFor(data.page.file)}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </div>
                            : null}
                    </div>

                </div>

                <div className={`absolute h-full object-cover w-[50px] z-10 top-0 right-0  bg-contain bg-[url('/graphic/right.svg')]  bg-repeat-y`} />
            </div>

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
                    groq: `*[_type == "allergies"]`
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