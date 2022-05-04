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
