export default {
    name: "location",
    title: "Location",
    type: "document",

    fields: [
        {
            name: "comingSoon",
            title: "Coming soon",
            description: "Is the restaurant coming soon?",
            type: "boolean"
        },
        {
            name: "title",
            title: "Restaurant name",
            description: "Name for the restaurant",
            type: "string",
        },
        {
            name: "image",
            title: "Restaurant image",
            description: "Image for the restaurant",
            type: "image",
        },
        {
            name: "description",
            title: "Restaurant description",
            description: "Description for the restaurant",
            type: "text",
        },
        {
            name: "street",
            title: "Street",
            description: "Street name for the restaurant",
            type: "string",
        },
        {
            name: "zip",
            title: "ZIP/Postal code",
            description: "ZIP/Postal code for the restaurant",
            type: "string",
        },
        {
            name: "city",
            title: "City",
            description: "City for the restaurant",
            type: "string",
        },
        {
            name: "phone",
            title: "Phone number",
            description: "Phone number for the restaurant",
            type: "string",
        },
        {
            name: "email",
            title: "E-mail",
            description: "E-mail for the restaurant",
            type: "string",
        },
        {
            name: "openingTimes",
            title: "Opening times",
            description: "Opening times for the restaurant",
            type: "array",
            of: [{ type: "openingTime" }],
        },
        {
            name: "uberEatsUrl",
            title: "Uber Eats URL",
            description: "Uber Eats URL for the restaurant",
            type: "string",
        },
        {
            name: "thuisbezorgdUrl",
            title: "Thuisbezorgd URL",
            description: "Thuisbezorgd URL for the restaurant",
            type: "string",
        }
    ],
}
