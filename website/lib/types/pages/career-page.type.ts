import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { CareerItemType } from "../components/career-item.type";
import { DoubleBlockType } from "../components/double-block.type";

export type CareerPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    textImageBlock?: DoubleBlockType;
    jobs?: CareerItemType[];
}