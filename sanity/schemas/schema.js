// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import meta from "./utils/meta";
import button from "./utils/button";
import home from "./pages/home";
import newsItem from "./types/newsItem";
import global from "./global/global";
import { localeRichText, localeString, localeText } from "./utils/locale";
import portableText from "./utils/portableText";
import youtubeVimeoBlock from "./utils/youtubeVimeoBlock";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    // utilities
    meta,
    button,
    portableText,
    youtubeVimeoBlock,

    // pages
    home,

    //types
    newsItem,

    // global
    global,

    //locale
    localeString,
    localeRichText,
    localeText,
  ]),
});
