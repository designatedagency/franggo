import React, { FC } from "react";
import Head from "next/head";
import { Meta as Props } from "../../../lib/types/base/meta.type";
import { imageUrlFor } from "../../../lib/helpers/sanity-helpers";

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
            </Head>
        </>
    );
}