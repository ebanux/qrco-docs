// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The QR Link - Docs',
  staticDirectories: ['public', 'static'],
  tagline: 'Solution of Ebanux.com',
  url: 'https://docs.theqr.link',
  baseUrl: '/',
  onBrokenLinks: 'ignore', //'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ebanux', // Usually your GitHub org/user name.
  projectName: 'qrco-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ebanux/qrco-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ebanux/qrco-docs/edit/master/',
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
        title: 'The QR Link - Docs',
        // logo: {
        //   alt: 'Cenit I0 - Docs Logo',
        //   src: 'img/logo2.svg',
        //   width: 28,
        //   // height: 32,
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ebanux/qrco-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Roadmap',
                href: 'https://cenit.frill.co/roadmap',
              },
              {
                label: 'Terms of Service',
                to: '/docs/terms',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/cenit-io/',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/cenitio/shared_invite/zt-1cq3uab52-Jv93F8R2BJ9MHr00SbCqjw',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/c/CenitIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                href: 'https://cenit.frill.co/b/6m4lrkv4/feature-ideas',
                label: 'Feature ideas',
              },
              {
                label: 'Suggest a feature',
                href: 'https://github.com/cenit-io/cenit/issues/new?assignees=&labels=&template=feature_request.md&title=',
              },
              {
                label: 'Report an issue',
                href: 'https://github.com/cenit-io/cenit/issues/new?assignees=&labels=&template=bug_report.md&title=',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cenit IO, LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
