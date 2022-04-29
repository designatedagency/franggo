export default {
    name: "menu",
    title: "Menu",
    type: "document",
    groups: [
        {
            name: "seo",
            title: "SEO",
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

        // about us
        {
            name: "textAndImageBlock",
            title: "Text and image block",
            description: "Setup the text and image block for the page",
            type: "doubleBlock",
            group: "info",
        },
    ],
}
