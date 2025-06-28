import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ACM @ UC Merced Docs",
  tagline: "Central hub for ACM @ UC Merced's documentation",
  favicon: "meta/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.ucmacm.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "UCMercedACM", // Usually your GitHub org/user name.
  projectName: "chapter-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/UCMercedACM/chapter-docs/tree/main/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ]
  ],
  themes: [
        [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        searchBarPosition: "left"
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      respectPrefersColorScheme: true
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ACM @ UC Merced",
      logo: {
        alt: "ACM at UC Merced's Logo",
        src: "meta/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "introSidebar",
          position: "left",
          label: "Introduction"
        },
        {
          type: "docSidebar",
          sidebarId: "projectSidebar",
          position: "left",
          label: "Projects"
        },
        {
          href: "https://github.com/UCMercedACM",
          position: "right",
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()}, ACM @ UC Merced`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
