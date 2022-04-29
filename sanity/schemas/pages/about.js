export default {
    name: "about",
    title: "About",
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
            name: "info",
            title: "Information",
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
            name: "slug",
            title: "Slug",
            description: "Slug to use for the page",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        // hero

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

        // about us
        {
            name: "textAndImageBlocks",
            title: "Text and image blocks",
            description: "Setup the text and image blocks for the page",
            type: "array",
            of: [{ type: "doubleBlock" }],
            group: "info",
        },
    ],
}
