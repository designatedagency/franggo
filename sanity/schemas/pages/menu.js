export default {
    name: "menu",
    title: "Menu",
    type: "document",
    groups: [
        {
            name: "seo",
            title: "SEO",
        },

        {
            name: "info",
            title: "Information",
        },
        {
            name: "menu",
            title: "Menu",
        },
    ],
    fields: [
        // SEO
        {
            name: "meta",
            title: "SEO",
            description: "Edit the SEO options for the page",
            type: "meta",
            group: "seo",
        },

        // about us
        {
            name: "textAndImageBlock",
            title: "Text and image block",
            description: "Setup the text and image block for the page",
            type: "doubleBlock",
            group: "info",
        },
        {
            name: "menuTop",
            title: "Top menu",
            description: "Pick items for the top menu",
            type: "array",
            of: [{ type: "reference", to: [{ type: "menuGroup" }] }],
            group: "menu",
        },

        {
            name: "supplements",
            title: "Supplements",
            description: "Supplements for the menu",
            type: "array",
            of: [{ type: "string" }],
            group: "menu",
        },
        {
            name: "sauces",
            title: "Sauces",
            description: "Sauces for the menu",
            type: "array",
            of: [{ type: "string" }],
            group: "menu",
        },
        {
            name: "normalSauces",
            title: "Normal sauces",
            description: "Normal sauces for the menu",
            type: "array",
            of: [{ type: "menuItem" }],
            group: "menu",
        },
        {
            name: "menuBottom",
            title: "Bottom menu",
            description: "Pick items for the bottom menu",
            type: "array",
            of: [{ type: "reference", to: [{ type: "menuGroup" }] }],
            group: "menu",
        },
    ],
}
