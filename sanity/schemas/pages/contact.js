export default {
    name: "contact",
    title: "Contact",
    type: "document",
    groups: [
        {
            name: "seo",
            title: "SEO",
        },
        {
            name: "hero",
            title: "Hero",
        },
        {
            name: "contactBlocks",
            title: "Contact Blocks",
        },
    ],
    fields: [
        // SEO
        {
            name: "meta",
            title: "SEO",
            description: "Edit the SEO options for the page",
            type: "meta",
            group: "seo",
        },

        {
            name: "title",
            title: "Title",
            description: "Title to use in the hero of the page",
            type: "string",
            group: "hero",
        },
        {
            name: "subtitle",
            title: "Subtitle",
            description: "Subtitle to use in the hero of the page",
            type: "text",
            group: "hero",
        },
        {
            name: "bgImage",
            title: "Background image",
            description: "Background image to use in the hero of the page",
            type: "image",
            group: "hero",
        },
        {
            name: "contactBlocks",
            title: "Contact Blocks",
            type: "array",
            of: [{ type: "contactBlock" }],
            group: "contactBlocks",
        },

    ],
}
