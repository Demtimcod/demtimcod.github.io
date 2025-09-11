// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DemtimCod Docs",
  tagline: "Belajar bersama komunitas",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://demtimcod.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "demtimcod", // Usually your GitHub org/user name.
  projectName: "demtimcod.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "intro-html",
        path: "articles/pemrograman/html",
        routeBasePath: "pemrograman/html",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "intro-python",
        path: "articles/pemrograman/python",
        routeBasePath: "pemrograman/python",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "intro-css",
        path: "articles/pemrograman/css",
        routeBasePath: "pemrograman/css",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/dc-logo.jpg",
      navbar: {
        title: "DemtimCod Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/dc-logo.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "About",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/demtimcod",
            label: "GitHub",
            position: "right",
          },
          {
            position: "left",
            label: "Pemrograman",
            items: [
              {
                to: "/pemrograman/html/intro",
                label: "html",
              },
              {
                to: "/pemrograman/css/intro",
                label: "css",
              },
              // {
              //   to: "/pemrograman/javascript/intro",
              //   label: "javascript",
              // },
              {
                to: "/pemrograman/python/intro",
                label: "python",
              },
              // {
              //   to: "/pemrograman/php/intro",
              //   label: "PHP",
              // },
              // {
              //   to: "/pemrograman/typescript/intro",
              //   label: "TypeScript",
              // },
            ],
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/demtimcod",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/demtimcod",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} demtimcod`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
