import { getFile, SanityAsset, SanityReference } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity'
import { readClient, sanityConfig } from "./sanity-next-helpers";

const imageBuilder = imageUrlBuilder(readClient);

export const imageUrlFor = (source?: SanityAsset) => {
    if (!source) return "";
    return imageBuilder.image(source) + "?q=35&h=1000&auto=format";
}

export const assetUrlFor = (source: SanityReference) => {
    return getFile(source, { projectId: process.env.SANITY_PROJECT_ID || "", dataset: process.env.SANITY_DATASET || "" })?.asset.url
}

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(sanityConfig);