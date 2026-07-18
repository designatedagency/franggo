import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { DoubleBlockType } from "../components/double-block.type";
import { CTABlockType } from "../components/cta-block.type";

export type AboutPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    textAndImageBlocks?: DoubleBlockType[];
    ctaBlock: CTABlockType;
}