import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { DoubleBlockType } from "../components/double-block.type";

export type LocationsPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    textAndImageBlocks?: DoubleBlockType[];
}