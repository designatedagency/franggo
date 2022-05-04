import { SanityAsset } from "@sanity/asset-utils";
import { Meta } from "../base/meta.type";
import { FaqItemType } from "../components/faq-item.type";

export type FaqPageType = {
    meta: Meta;
    title?: string;
    subtitle?: string;
    bgImage?: SanityAsset;
    faqs?: FaqItemType[];
}