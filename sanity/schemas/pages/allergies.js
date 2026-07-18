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
