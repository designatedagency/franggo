import { SanityAsset } from "@sanity/asset-utils";

export type LocationType = {
    comingSoon?: boolean;
    title: string;
    image: SanityAsset;
    description?: string;
    street: string;
    zip: string;
    city: string;
    phone: string;  
    email: string;
    reservationUrl: string;
    openingTimes: string[];
    uberEatsUrl?: string;
    thuisbezorgdUrl?: string;
}