import { GlobalConfiguration, QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

var custom_theme : GlobalConfiguration["theme"] = {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Schibsted Grotesk",
    body: "Source Sans Pro",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#faf8f8",
      lightgray: "#e5e5e5",
      gray: "#b8b8b8",
      darkgray: "#4e4e4e",
      dark: "#2b2b2b",
      secondary: "#284b63",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#fff23688",
    },
    darkMode: {
      light: "#161618",
      lightgray: "#393639",
      gray: "#646464",
      darkgray: "#d4d4d4",
      dark: "#ebebec",
      secondary: "#7b97aa",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
}

var orignal_theme : GlobalConfiguration["theme"] = {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Schibsted Grotesk",
    body: "Source Sans Pro",
    code: "IBM Plex Mono",
  },
  colors: {
    lightMode: {
      light: "#faf8f8",
      lightgray: "#e5e5e5",
      gray: "#b8b8b8",
      darkgray: "#4e4e4e",
      dark: "#2b2b2b",
      secondary: "#284b63",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#fff23688",
    },
    darkMode: {
      light: "#161618",
      lightgray: "#393639",
      gray: "#646464",
      darkgray: "#d4d4d4",
      dark: "#ebebec",
      secondary: "#7b97aa",
      tertiary: "#84a59d",
      highlight: "rgba(143, 159, 169, 0.15)",
      textHighlight: "#b3aa0288",
    },
  },
} 

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {

    pageTitle: "🪴 Notescapes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", "-- Templates --",".obsidian", "Excalidraw", "Canvas", "Images"],
    defaultDateType: "modified",
    generateSocialImages: {

        colorScheme: "lightMode", // what colors to use for generating image, same as theme colors from config, valid values are "darkMode" and "lightMode"
        width: 1200, // width to generate with (in pixels)
        height: 630, // height to generate with (in pixels)
        excludeRoot: false, // wether to exclude "/" index path to be excluded from auto generated images (false = use auto, true = use default og image)

    },

    theme: custom_theme,
  
  
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["git","frontmatter"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true, enableCheckbox: true }),
      Plugin.HardLineBreaks(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
