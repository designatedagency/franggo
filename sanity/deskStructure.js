import S from "@sanity/desk-tool/structure-builder"
import resolveProductionUrl from "./plugins/resolveProductionUrl"
import Iframe from "sanity-plugin-iframe-pane"

// icons
import {
    MdDescription,
    MdHome,
    MdSettings,
    MdRssFeed,
    MdFastfood,
    MdLocationPin,
    MdMenuBook,
    MdInfoOutline,
    MdShareLocation,
    MdOutlineContactPhone,
    MdWork,
    MdQuestionAnswer,
    MdWifiProtectedSetup,
} from "react-icons/md"

const documentViews = [
    // Default sanity form
    S.view.form(),

    // IFrame/live preview
    S.view
        .component(Iframe)
        .options({
            url: (doc) => resolveProductionUrl(doc),
        })
        .title("Live Preview"),
]

const formView = S.view.form()

export const getDefaultDocumentNode = () => {
    return S.document().views([formView])
}

export default () =>
    S.list()
        .title("Content")
        .items([
            // First panel
            S.listItem()
                .title("Pages")
                .icon(MdDescription)
                .child(
                    S.list()
                        .title("All pages")
                        .items([
                            S.listItem()
                                .title("Home")
                                .icon(MdHome)
                                .child(
                                    S.document()
                                        .documentId("home")
                                        .title("Home page")
                                        .schemaType("home")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("Menu")
                                .icon(MdMenuBook)
                                .child(
                                    S.document()
                                        .documentId("menu")
                                        .title("Menu page")
                                        .schemaType("menu")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("About us")
                                .icon(MdInfoOutline)
                                .child(
                                    S.document()
                                        .documentId("about")
                                        .title("About us")
                                        .schemaType("about")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("Locations")
                                .icon(MdShareLocation)
                                .child(
                                    S.document()
                                        .documentId("locations")
                                        .title("Locations")
                                        .schemaType("locations")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("Contact")
                                .icon(MdOutlineContactPhone)
                                .child(
                                    S.document()
                                        .documentId("contact")
                                        .title("Contact")
                                        .schemaType("contact")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("Career")
                                .icon(MdWork)
                                .child(
                                    S.document()
                                        .documentId("career")
                                        .title("Career")
                                        .schemaType("career")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("FAQ")
                                .icon(MdQuestionAnswer)
                                .child(
                                    S.document()
                                        .documentId("faq")
                                        .title("FAQ")
                                        .schemaType("faq")
                                        .views(documentViews)
                                ),
                            S.listItem()
                                .title("Allergies")
                                .icon(MdWifiProtectedSetup)
                                .child(
                                    S.document()
                                        .documentId("allergies")
                                        .title("Allergies")
                                        .schemaType("allergies")
                                        .views(documentViews)
                                ),
                        ])
                ),

            S.divider(),

            S.listItem()
                .title("Menu's")
                .icon(MdFastfood)
                .child(S.documentTypeList("menuGroup").title("All menu's")),
            S.listItem()
                .title("Locations")
                .icon(MdLocationPin)
                .child(S.documentTypeList("location").title("All locations")),

            S.divider(),

            S.listItem()
                .title("Global")
                .icon(MdSettings)
                .child(
                    S.editor().schemaType("global").documentId("global").title("Global settings")
                ),
        ])
