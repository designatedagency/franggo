import { SanityAsset } from "@sanity/asset-utils";

export type CTAItemType = {
    icon: SanityAsset;
    title: string;
    description: string;
    buttonName?: string;
    url: string;
}