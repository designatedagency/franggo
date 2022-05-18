import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { CTABlockType } from "../components/cta-block.type";
import { DoubleBlockType } from "../components/double-block.type";

export type HomePage = {
    meta: Meta;
    bgImage: SanityAsset;
    textAndImageBlock: DoubleBlockType;
    ctaBlock: CTABlockType;
}