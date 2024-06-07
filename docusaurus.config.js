// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
// require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "IRMI Learning",
  tagline: "Learning center for internal processes",
  url: 'https://your-docusaurus-test-site.com',
  customFields: {
    // Put your custom environment here
    first_key: "JimVALUEONE",
    second_key: "JimVALUETWO",
  },
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/docusaurus.png",
  organizationName: "IRMI", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://https://github.com/jrtwheeler/IRMI_Doc_Site',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            "label": "Documentation",
            "to": "docs"
          },
          {
            href: 'https://irmi.zendesk.com/hc/en-us',
            label: 'Zendesk',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "IRMI Sites",
            items: [
              {
                label: "Legacy IRMI Online",
                href: "https://www.irmi.com",
              },
              {
                label: "Captive",
                href: "https://www.captive.com/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/IRMIowl",
              },
            ],
          }
          // Add another json object here to add another column
        ],
        copyright: `Copyright © 2000-${new Date().getFullYear()} International Risk Management Institute, Inc. (IRMI). All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;