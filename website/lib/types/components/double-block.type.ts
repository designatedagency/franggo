import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { SanityRichText } from "../base/sanity-rich-text.type";

export type DoubleBlockType = {
    tag: string;
    title: string;
    text: SanityRichText;
    label: string;
    url: string;
    image: SanityAsset;
}