import { SanityAsset } from "@sanity/asset-utils";
import { CTAItemType } from "./cta-item.type";

export type CTABlockType = {
    tag: string;
    title: string;
    ctaItems: CTAItemType[];
    image: SanityAsset;
}