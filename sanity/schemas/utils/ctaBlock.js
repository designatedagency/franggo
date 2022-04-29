export default {
    name: "ctaBlock",
    title: "Call to action block",
    type: "object",

    fields: [
        {
            name: "tag",
            title: "Tag",
            description: "Tag for the block",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            description: "Title for the block",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            description: "Image for the block",
            type: "image",
        },
        {
            name: "ctaItems",
            title: "CTA items",
            description: "CTA items for the block",
            type: "array",
            of: [{ type: "ctaItem" }],
        },
    ],
}
