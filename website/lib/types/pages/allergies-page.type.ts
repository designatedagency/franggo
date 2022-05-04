import { SanityAsset, SanityReference } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";

export type AllergiesPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    description?: string;
    file?: SanityReference;
}