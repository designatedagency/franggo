export default {
    name: "menuGroup",
    title: "Menu group",
    type: "document",

    fields: [
        {
            name: "image",
            title: "Menu group image",
            description: "Image for the menu group",
            type: "image",
        },
        {
            name: "title",
            title: "Menu group name",
            description: "Name for the menu group",
            type: "string",
        },

        {
            name: "menuItems",
            title: "Menu items",
            description: "Create menu items here",
            type: "array",
            of: [{ type: "menuItem" }],
        },
        {
            name: "supplements",
            title: "Supplements",
            description: "Supplements for the menu group",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
}
