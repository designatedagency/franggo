export const queries = {
    page: (pageId: string, customQuery?: string) => (`
        *[!(_id in path('drafts.**')) && _id == "${pageId}"]${customQuery || ""}
    `),
    byDocId: (documentId: string) => (`
        *[!(_id in path('drafts.**')) && _id == "${documentId}"]
    `),
    byType: (type: string, customQuery?: string) => (`
        *[!(_id in path('drafts.**')) && _type == "${type}"]${customQuery || ""}
    `),
    bySlug: (slug: string, type: string, customQuery?: string) => (`
        *[!(_id in path('drafts.**')) && _type == "${type}" && slug.current == "${slug}"]${customQuery || ""}
    `),
}