import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'harshp2008/Notes',
        // from data-repo-id
        repoId: 'R_kgDONbjX7g',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDONbjX7s4ClQNU',
        

        lightTheme: "light-theme", // corresponds to light-theme.css in quartz/static/giscus/
        darkTheme: "dark-theme", // corresponds to dark-theme.css quartz/static/giscus/
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        scale: 1.1, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
        focusOnHover: true, // whether to highlight nodes when hovering over them
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,

        focusOnHover: true,

        removeTags: ['excalidraw'], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],

  
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
