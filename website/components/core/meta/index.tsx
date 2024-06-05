import Head from "next/head";
import { FC } from "react";
import { imageUrlFor } from "../../../lib/helpers/sanity-helpers";
import { Meta as Props } from "../../../lib/types/base/meta.type";

export const Meta: FC<{
    tags: Props;
}> = ({ tags }) => {
    return (
        <>
            <Head>
                <title>{tags?.title}</title>
                <link rel="icon" href={"/favicon.png"} />

                <meta name="title" content={tags?.title} />
                <meta name="description" content={tags?.description} />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={tags?.title} />
                <meta property="og:description" content={tags?.description} />
                <meta property="og:image" content={imageUrlFor(tags?.image)} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={tags?.title} />
                <meta property="twitter:description" content={tags?.description} />
                <meta property="twitter:image" content={imageUrlFor(tags?.image)} />

                {/* Cookiebot recurrance fix */}
                <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7431cf9b-4fcd-418a-b2a5-49f8e888a261" data-blockingmode="auto" type="text/javascript" async></script>
            </Head>
        </>
    );
}
