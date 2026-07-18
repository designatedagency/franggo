export default {
    name: "doubleBlock",
    title: "Text and image block",
    type: "object",

    fields: [
        {
            name: "tag",
            title: "Tag",
            description: "Tag of the text block",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            description: "Title of the text block",
            type: "string",
        },
        {
            name: "text",
            title: "Text",
            description: "Rich text for the block",
            type: "portableText",
        },
        {
            name: "label",
            title: "Button label",
            description: "Label for the button",
            type: "string",
        },
        {
            name: "url",
            title: "Button URL",
            description: "Link for the button",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            description: "Image of the text block",
            type: "image",
        },
    ],
}
