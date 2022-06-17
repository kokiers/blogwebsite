// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kokiers',
  tagline: 'Dinosaurs are cool',
  url: 'https://kokiers.github.io', //https://your-docusaurus-test-site.com',
  baseUrl: '/blogwebsite/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kokiers', // Usually your GitHub org/user name.
  projectName: 'blogwebsite', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // githubHost: 'github.com',
  // githubPort: '22',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: 
        {
          sidebarPath: require.resolve('./sidebars.js'),          
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',// Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Docusaurus 博客！',
          blogDescription: '这是个用 Docusaurus 搭建的博客！',
          postsPerPage: 10,
          // routeBasePath: '/', // 需要删除./src/pages/index.js
          // Please change this to your repo.
          // editUrl:            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  // todo 20211227
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  // },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'kokiers',
        logo: {
          alt: 'kokiers Site Logo',
          src: 'img/mai.jpg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/kokiers',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],    
        copyright: `Copyright © ${new Date().getFullYear()} By kokiers`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
