import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { DoubleBlockType } from "../components/double-block.type";

export type AboutPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    textAndImageBlocks?: DoubleBlockType[];
}