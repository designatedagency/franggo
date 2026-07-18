/* eslint no-use-before-define: 0 */  // --> OFF

import BlockContent from "@sanity/block-content-to-react";
import React, { FC } from "react";
import { imageUrlFor } from "../../../lib/helpers/sanity-helpers";
import { SanityRichText } from "../../../lib/types/base/sanity-rich-text.type";
import { YoutubePlayer } from "../youtube-player";

export const RichText: FC<{
    richText?: SanityRichText;
    className?: string;
}> = ({ richText, className }) => {

    if (!richText) return null;

    const serializers = {
        types: {
            code: (props: any) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props: any) => {
                return (
                    <figure>
                        <picture>
                            <img alt={"This is a richtext image"} style={{ width: "100%" }} src={imageUrlFor(props.node)} />
                        </picture>
                        <figcaption>{props.node.caption}</figcaption>
                    </figure>
                );
            },
            youtubeVimeoBlock: (props: any) => {
                return (
                    <YoutubePlayer youtubeUrl={props.node.url} />
                )
            },
            marks: {
                link: ({ mark, children }: { mark: any, children: any }) => {
                    const { blank, href } = mark
                    return blank ? (
                        <a href={href} target='_blank' rel='noreferrer'>
                            {children}
                        </a>
                    ) : (
                        <a rel='noreferrer' href={href}>
                            {children}
                        </a>
                    )
                },
            },

        },
    };

    return (
        <div className={`w-[100%] rt ${className}`}>
            {/* @ts-ignore */}
            <BlockContent blocks={richText} serializers={serializers} />
        </div>
    )
}
