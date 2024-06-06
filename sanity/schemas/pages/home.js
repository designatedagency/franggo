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
            name: "intro",
            title: "Intro",
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
        {
            name: "primaryCta",
            title: "Primary call to action",
            type: "button",
            group: "hero",
        },
        {
            name: "secondaryCta",
            title: "Secondary call to action",
            type: "button",
            group: "hero",
        },
        // about us
        {
            name: "introBlock",
            title: "Text and image block",
            description: "Setup the text and image block for the page",
            type: "doubleBlock",
            group: "intro",
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
