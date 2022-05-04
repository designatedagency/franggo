import { SanityAsset } from "@sanity/asset-utils";
import { CTAItemType } from "./cta-item.type";

export type ContactBlockType = {
    tag?: string;
    title?: string;
    streetName?: string;
    postalCode?: string;
    city?: string;
    openingHours?: string[];
    phoneNumber?: string;
    email?: string;
    sticker?: SanityAsset;
    googleMapName?: string;
    buttonName?: string;
    buttonUrl?: string;
    image?: SanityAsset;
}