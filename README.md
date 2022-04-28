# How to use
[Next local setup](#next-local-setup)
[Live preview setup](#live-preview-setup)

# Next local setup

Create a .env.local file in the website folder and add the following content and populate it with the proper data

```bash
SANITY_READ_TOKEN=
SANITY_PROJECT_ID=
SANITY_DATASET=
NEXT_REVALIDATE=5
SANITY_PREVIEW_SECRET=
```

# Live preview setup

Go to `sanity/plugins/resolveProductionUrl.js` and set the `remoteUrl` and `localUrl` according to the project.

```js
const remoteUrl = `https://nextjs-wearemiles.vercel.app`
const localUrl = `http://localhost:3000`
```

Make sure that in the Sanity project settings you add the remoteUrl to the CORS origin settings.

In `sanity/plugins/resolveProductionUrl.js` you have to add the mappings for your Next pages to the correct document types like so: 

```js
export const translateSchemaTypeToNextUrl = (document) => {
    if (!document) return "";
    switch (document._type) {
        case "home":
            return `/`
        case "newsItem":
            return `/news/${document.slug?.current}`
    }
}
```

# Creating a new page

Let's create a basic page with live preview and localisation enabled. (We will be using TypeScript)

We will start by defining the page's props type
```tsx
type PageProps = {
  page: {
      title: string;
  }
}
```


Now we can create the home page component which leverages the `SanityNextStaticProps` type and pass our created `PageProps` type as the generic type for the prop's returned data.
```tsx
export default function Home(props: SanityNextStaticProps<PageProps>) {

    // Use the useSanityPreview hook to enable the live preview when requested
    // we pass our page props here so it can abstract our initial prop data, live preview updates, localisation and more 
    const data = useSanityPreview(props);

    // Make sure to null check so we don't crash
    if (!data) return null;

    return (
        <div>
            {/* This content will be reactive to live edits */}
            <h1>{data.page.title}</h1>

            {/* Add a link so the user can choose to exit the live preview mode */}
            {props.preview && <Link locale={false} href="/api/exit-preview" className="fixed bottom-5 right-5">Exit preview</Link>}
        </div>
    )
}
```

Now it's time to manage the static props, we will use the `getSanityNextProps` method.
This method abstracts fetching data from Sanity, localizing the data and then mapping it to the data object in your page's props.

```tsx
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
```

# Mapping static paths for slug pages
Sometimes a page needs to map the static paths, eg: a news page slug needs this. There is a neat method called `getSanityNextStaticPaths` that abstracts away the sanity calls. You can use it like so in your slug page files:

```tsx
export const getStaticPaths = async () => getSanityNextStaticPaths({
    slugName: "article", // The name of the param (eg: context.params.article)
    schemaType: "newsItem" // The schema type as it is defined in your Sanity schema file
})
```