export default {
    name: "global",
    title: "Global",
    type: "object",
    groups: [
        {
            name: "header",
            title: "Header",
        },
        {
            name: "footer",
            title: "Footer",
        },
    ],
    fields: [
        {
            name: "headerLogo",
            title: "Header logo",
            description: "Logo for the header",
            type: "image",
            group: "header",
        },
        {
            name: "orderLink",
            title: "Order link",
            description: "Link to put on order button",
            type: "string",
            group: "header",
        },
        {
            name: "reservationID",
            title: "Formitable ID",
            description: "ID for the reservation button",
            type: "string",
            group: "header",
        },

        {
            name: "footerLogo",
            title: "Footer logo",
            description: "Logo for the footer",
            type: "image",
            group: "footer",
        },
    ],
}
