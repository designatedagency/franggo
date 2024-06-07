import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { DoubleBlockType } from "../components/double-block.type";
import { CTABlockType } from '../components/cta-block.type'

export type OrderPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    textAndImageBlock?: DoubleBlockType;
    ctaBlock?: CTABlockType;
}