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
            name: "headerNav",
            title: "Header navigation",
            description: "Navigation for the header",
            type: "array",
            of: [{ type: "navItem" }],
            group: "header",
        },
        {
            name: "footerLogo",
            title: "Footer logo",
            description: "Logo for the footer",
            type: "image",
            group: "footer",
        },
        {
            name: "footerNav",
            title: "Footer navigation",
            description: "Navigation for the footer",
            type: "array",
            of: [{ type: "navItem" }],
            group: "footer",
        },
    ],
}
