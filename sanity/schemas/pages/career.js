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
