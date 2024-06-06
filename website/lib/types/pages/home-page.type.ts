import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { CTABlockType } from "../components/cta-block.type";
import { DoubleBlockType } from "../components/double-block.type";
import { Button } from "../components/button.type";

export type HomePage = {
    meta: Meta;
    logo: SanityAsset;
    introBlock: DoubleBlockType;
    primaryCta: Button;
    secondaryCta: Button; 
    bgImage: SanityAsset;
    textAndImageBlock: DoubleBlockType;
    ctaBlock: CTABlockType;
}