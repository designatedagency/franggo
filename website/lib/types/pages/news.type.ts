import { Meta } from "../base/meta.type";
import { SanitySlug } from "../base/sanity-slug.type";

export type News = {
    meta: Meta,
    newsTitle: string;
    slug: SanitySlug;
}