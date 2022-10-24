// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SMB Edition Squad",
  tagline:
    "This is the online documentation for the SMB Edition squad by PrestaShop",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/poc-documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PrestaShop", // Usually your GitHub org/user name.
  projectName: "smb-edition-documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FabienFAPresta/poc-documentation/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/FabienFAPresta/poc-documentation/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SMB Edition",
        logo: {
          alt: "PrestaShop Logo",
          src: "img/preston.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
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
                label: "📚 Blog",
                to: "/blog",
              },
              {
                label: "💬 Slack channel",
                href: "https://prestashopcorp.slack.com/archives/C03NRJR37PE",
              },
              {
                label: "📑 Notion page",
                href: "https://www.notion.so/prestashopcorp/Squad-Edition-9649dd76d341481ebe3324640e885644",
              },
            ],
          },
          {
            title: "SMB Edition repositories",
            items: [
              {
                label: "🐧 Module",
                href: "https://github.com/PrestaShopCorp/smb_edition",
              },
              {
                label: "🏗 Builder",
                href: "https://github.com/PrestaShopCorp/smb_edition_builder",
              },
              {
                label: "🌍 Hosting Api",
                href: "https://github.com/PrestaShopCorp/smb_edition_hosting_api",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PrestaShop.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
