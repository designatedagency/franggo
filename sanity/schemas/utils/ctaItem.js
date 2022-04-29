export default {
    name: "ctaItem",
    title: "Call to action item",
    type: "object",

    fields: [
        {
            name: "icon",
            title: "Icon",
            description: "Icon for the item",
            type: "image",
        },
        {
            name: "title",
            title: "Title",
            description: "Title for the item",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            description: "Description for the item",
            type: "text",
        },
        {
            name: "url",
            title: "URL",
            description: "URL for the item",
            type: "url",
        },
    ],
}
