export default {
    name: "location",
    title: "Location",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Restaurant name",
            description: "Name for the restaurant",
            type: "string",
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
            name: "reservationUrl",
            title: "Formitable ID",
            description: "Formitable ID for the restaurant",
            type: "string",
        },
        {
            name: "openingTimes",
            title: "Opening times",
            description: "Opening times for the restaurant",
            type: "array",
            of: [{ type: "openingTime" }],
        },
    ],
}
