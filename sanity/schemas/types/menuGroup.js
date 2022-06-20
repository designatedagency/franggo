export default {
    name: "menuGroup",
    title: "Menu group",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Menu group name",
            description: "Name for the menu group",
            type: "string",
        },

        {
            name: "groupPrice",
            title: "Menu group price",
            description:
                "Price for the menu group; this will hide the individual prices of the menu items",
            type: "string",
        },

        {
            name: "menuItems",
            title: "Menu items",
            description: "Create menu items here",
            type: "array",
            of: [{ type: "menuItem" }],
        },
    ],
}
