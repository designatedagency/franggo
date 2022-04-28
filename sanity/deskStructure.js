import S from "@sanity/desk-tool/structure-builder";
import resolveProductionUrl from './plugins/resolveProductionUrl'
import Iframe from 'sanity-plugin-iframe-pane'

// icons
import {
  MdDescription,
  MdHome,
  MdSettings,
  MdRssFeed,
} from "react-icons/md";

const documentViews = [
  // Default sanity form
  S.view.form(),

  // IFrame/live preview
  S.view
    .component(Iframe)
    .options({
      url: (doc) => resolveProductionUrl(doc),
    })
    .title('Live Preview'),
]

export const getDefaultDocumentNode = () => {
  return S.document().views(documentViews)
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

            ])
        ),

      S.divider(),

      S.listItem()
        .title("News")
        .icon(MdRssFeed)
        .child(S.documentTypeList("newsItem").title("All news messages")),

      S.divider(),

      S.listItem()
        .title("Global")
        .icon(MdSettings)
        .child(
          S.editor()
            .schemaType("global")
            .documentId("global")
            .title("Global settings")
        ),
    ]);
