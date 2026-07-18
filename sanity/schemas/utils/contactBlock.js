export default {
    name: "contactBlock",
    title: "ContactBlock",
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
            name: "streetName",
            title: "Street Name",
            description: "Street Name for the block",
            type: "string",
        },
        {
            name: "postalCode",
            title: "Postal Code",
            description: "Postal Code for the block",
            type: "string",
        },
        {
            name: "city",
            title: "City",
            description: "City for the block",
            type: "string",
        },
        {
            name: "openingHours",
            title: "Opening Hours",
            description: "Opening Hours for the block",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            description: "Phone Number for the block",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            description: "Email for the block",
            type: "string",
        },
        {
            name: "sticker",
            title: "Sticker",
            description: "Sticker for the block (optional)",
            type: "image",
        },
        {
            name: "googleMapName",
            title: "Google Maps Name",
            description: "Google Maps Name of the text block",
            type: "string",
        },
        {
            name: "buttonName",
            title: "Button name",
            description: "name for the button",
            type: "string",
        },
        {
            name: "buttonUrl",
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
