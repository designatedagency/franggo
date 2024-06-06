// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
import meta from "./utils/meta"
import button from "./utils/button"
import home from "./pages/home"
import newsItem from "./types/newsItem"
import global from "./global/global"
import { localeRichText, localeString, localeText } from "./utils/locale"
import portableText from "./utils/portableText"
import youtubeVimeoBlock from "./utils/youtubeVimeoBlock"
import doubleBlock from "./utils/doubleBlock"
import richtText from './utils/richText'
import menuGroup from "./types/menuGroup"
import menuItem from "./types/menuItem"
import openingTime from "./utils/openingTime"
import location from "./types/location"
import ctaBlock from "./utils/ctaBlock"
import ctaItem from "./utils/ctaItem"
import menu from "./pages/menu"
import about from "./pages/about"
import locations from "./pages/locations"
import contact from "./pages/contact"
import career from "./pages/career"
import careerItem from "./utils/careerItem"
import faqItem from "./utils/faqItem"
import faq from "./pages/faq"
import allergies from "./pages/allergies"
import navItem from "./utils/navItem"
import contactBlock from "./utils/contactBlock"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */

        // utilities
        richtText,
        meta,
        button,
        portableText,
        youtubeVimeoBlock,
        doubleBlock,
        openingTime,
        ctaBlock,
        ctaItem,
        careerItem,
        faqItem,
        navItem,
        contactBlock,

        // pages
        home,
        menu,
        about,
        locations,
        contact,
        career,
        faq,
        allergies,

        //types
        newsItem,
        menuGroup,
        menuItem,
        location,

        // global
        global,

        //locale
        localeString,
        localeRichText,
        localeText,
    ]),
})
