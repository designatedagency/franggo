import { SanityAsset } from "@sanity/asset-utils";

export type Location = {
    title: string;
    image: SanityAsset;
    street: string;
    zip: string;
    city: string;
    phone: string;
    email: string;
    reservationUrl: string;
    openingTimes: string[];
}