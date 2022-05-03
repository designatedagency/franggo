export default {
    name: "home",
    title: "Home",
    type: "document",
    groups: [
        {
            name: "seo",
            title: "SEO",
        },
        {
            name: "hero",
            title: "Hero",
        },
        {
            name: "info",
            title: "Information",
        },
        {
            name: "cta",
            title: "CTA",
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
        {
            name: "slug",
            title: "Slug",
            description: "Slug to use for the page",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
        },
        // hero

        {
            name: "logo",
            title: "Logo",
            description: "Logo to use in the hero of the page",
            type: "image",
            group: "hero",
        },
        {
            name: "bgImage",
            title: "Background image",
            description: "Background image to use in the hero of the page",
            type: "image",
            group: "hero",
        },

        // about us
        {
            name: "textAndImageBlock",
            title: "Text and image block",
            description: "Setup the text and image block for the page",
            type: "doubleBlock",
            group: "info",
        },
        // cta
        {
            name: "ctaBlock",
            title: "Call to action block",
            description: "Setup the call to action block for the page",
            type: "ctaBlock",
            group: "cta",
        },
    ],
}
