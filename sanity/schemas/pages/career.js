export default {
    name: "career",
    title: "Career",
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
        {
            name: "jobs",
            title: "Jobs",
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
            name: "textImageBlock",
            title: "Text and image block",
            description: "Setup the text and image block for the page",
            type: "doubleBlock",
            group: "info",
        },
        // jobs
        {
            name: "jobs",
            title: "Jobs",
            description: "Add job listings",
            type: "array",
            of: [{ type: "careerItem" }],
            group: "jobs",
        },
    ],
}
