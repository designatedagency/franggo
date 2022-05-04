import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { ContactBlockType } from "../components/contact-block.type";
import { DoubleBlockType } from "../components/double-block.type";

export type ContactPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    contactBlocks?: ContactBlockType[];
}