import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { SanityRichText } from "../base/sanity-rich-text.type";

export type CTAItemType = {
    icon: SanityAsset;
    title: string;
    description: string;
    url: string;
}