import { Meta } from "../base/meta.type";
import { CTABlockType } from "../components/cta-block.type";
import { DoubleBlockType } from "../components/double-block.type";

export type MenuPageType = {
    meta: Meta;
    textAndImageBlock: DoubleBlockType;
    ctaBlock: CTABlockType;
}