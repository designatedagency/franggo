export default {
    name: "meta",
    title: "SEO",
    type: "object",
    fieldsets: [
        {
            name: "meta",
            title: "Click to open",
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: true, // Defines if the fieldset should be collapsed by default or not
            },
        },
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            description: "",
            type: "string",
            fieldset: "meta",
        },
        {
            name: "description",
            title: "Description",
            description: "",
            type: "text",
            fieldset: "meta",
        },
        {
            name: "image",
            title: "Image",
            description: "",
            type: "image",
            fieldset: "meta",
        },
    ],
}
