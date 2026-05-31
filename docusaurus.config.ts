import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Pray',
  tagline: '1.9+ PvP Server',
  url: 'https://praymc.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'praymc',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          path: 'src/docs',
          routeBasePath: '/',
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/search/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'server-logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '가이드',
        },
        /* {
          href: 'https://github.com/planetearth-kr',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      copyright: `Copyright 2022 - ${new Date().getFullYear()} 플래닛네트워크. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
