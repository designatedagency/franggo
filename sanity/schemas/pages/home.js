import meta from "../utils/meta";

export default {
  name: "home",
  title: "Home",
  type: "document",

  fields: [
    meta,
    {
      name: "pageTitle",
      title: "Title",
      description: "title for the page",
      type: "_localeString",
    },
    {
      name: "text",
      title: "Text",
      type: "_localeRichText",
    },
  ],
};
