import meta from "../utils/meta";

export default {
    name: "newsItem",
    title: "News",
    type: "document",

    fields: [
        meta,
        {
            name: "newsTitle",
            title: "Titel",
            description: "Titel van het nieuws bericht",
            type: "string",
        },
        {
            title: "Slug",
            description: "Dit is wat je in het menu te zien krijgt. Bijvoorbeeld harrypotter.nl/nieuws/titel",
            name: "slug",
            type: "slug",
            options: {
                source: "newsTitle",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
    ],
};
