export default {
    name: "allergies",
    title: "Allergies",
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
            name: "allergies",
            title: "Allergies",
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

        {
            name: "description",
            title: "Description",
            description: "Description to use for the allergies .pdf",
            type: "text",
            group: "allergies",
        },
        {
            name: "file",
            title: "File",
            description: "File to use for the allergies .pdf",
            type: "file",
            group: "allergies",
        },
    ],
}
