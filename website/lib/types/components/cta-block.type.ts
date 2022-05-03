import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { SanityRichText } from "../base/sanity-rich-text.type";
import { CTAItemType } from "./cta-item.type";

export type CTABlockType = {
    tag: string;
    title: string;
    ctaItems: CTAItemType[];
    image: SanityAsset;
}