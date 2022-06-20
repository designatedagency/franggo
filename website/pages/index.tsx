import { GetStaticPropsContext } from "next"
import { Footer } from "../components/core/footer"
import { Header } from '../components/core/header'
import { Meta } from "../components/core/meta"
import { CTA } from "../components/cta"
import { DoubleBlock } from "../components/doubleBlock"
import { Formitable } from "../components/formitable"
import { Hero } from "../components/hero"
import { Locaties } from "../components/locaties"
import { Menu } from "../components/menu"
import { getNextRevalidation, getSanityNextProps, SanityNextStaticProps, useSanityPreview } from "../lib/helpers/sanity-next-helpers"
import { GlobalType } from "../lib/types/base/global.type"
import { HomePage } from "../lib/types/pages/home-page.type"
import { MenuPageType } from "../lib/types/pages/menu-page"
import { LocationType } from "../lib/types/types/location.type"
import { MenuGroupType } from "../lib/types/types/menu-group.type"

type PageProps = {
  page: HomePage
  menuPage: MenuPageType;
  global: GlobalType;
  locations: LocationType[]
  menuGroups: MenuGroupType[]
}

export default function Home(props: SanityNextStaticProps<PageProps>) {

  const data = useSanityPreview(props);

  console.log(data);


  return (
    <div>

      <Meta tags={data.page.meta} />
      <Formitable />
      <Header global={data.global} />
      <Hero image={data.page.bgImage} />
      <DoubleBlock doubleBlock={data.page.textAndImageBlock} />
      <Menu page={data.menuPage} menuGroups={props.data.menuGroups} />
      <Locaties locations={props.data.locations} />
      <CTA ctaBlock={data.page.ctaBlock} />

      <Footer locations={props.data.locations} global={data.global} />

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
          groq: `*[_type == "home"]`
        },
        menuPage: {
          groq: `*[_type == "menu"]{..., menuTop[]->, menuBottom[]->}`
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