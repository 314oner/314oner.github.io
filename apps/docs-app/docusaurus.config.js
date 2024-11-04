// @ts-nocheck
const { DOCUSAURUS_VERSION } = require('@docusaurus/utils');
const { themes } = require('prism-react-renderer');
const tailwindPlugin = require('./plugins/tailwind-config.cjs');

const defaultLocale = 'en';
const organizationName = '314oner';
const projectName = '314oner.github.io';
const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

module.exports = {
  title: '314oner.github.io',
  tagline: 'SSG site with documentation for applications and libraries',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName,
  projectName,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: isDeployPreview,
  staticDirectories: ['static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ locale, docPath }) => {
            if (locale !== defaultLocale) {
              return `https://crowdin.com/project/bibliothecaalexandrina/${locale}`;
            }
            const nextVersionDocsDirPath = 'docs';
            return `https://github.com/314oner/314oner.github.io/edit/master/apps/docs-app/${nextVersionDocsDirPath}/${docPath}`;
          },
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem', // docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        /*
        gtag: {
          trackingID: 'xxx-xxxxxxx',
          anonymizeIP: false,
        },
        */
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: '',
          src: 'img/docusaurus.svg',
          srcDark: 'img/docusaurus_keytar.svg',
          width: 32,
          height: 32,
        },
        items: [
          // Left
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: '314oner.github.io',
          },
          {
            to: '/community/repositories',
            label: 'Repositories',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          {
            type: 'dropdown',
            label: 'Documentation',
            position: 'left',
            items: [
              {
                label: 'Applications',
                to: '/category/applications-api',
              },
              {
                label: 'Petstore (versioned)',
                to: '/category/petstore-versioned-api',
              },
              {
                label: 'Packages',
                to: '/category/packages-api',
              },
            ],
          },
          // Right
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
            ],
          },
          {
            href: 'https://github.com/314oner/314oner.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '314oner.github.io',
                to: '/docs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/314oner/314oner.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 314oner.github.io. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
      },
      algolia: {
        apiKey: '441074cace987cbf4640c039ebed303c',
        appId: 'J0EABTYI1A',
        indexName: 'docusaurus-openapi',
      },
      announcementBar: {
        id: 'announcementBar_1',
        content: '🥳 A new release will be coming soon',
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),

  plugins: [
    tailwindPlugin,
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          petstore_versioned: {
            specPath: 'apis/microservice-14-pet/microservice-14-pet.yaml',
            outputDir:
              'docs/apps/nest-app/microservice-14-pet/petstore_versioned', // No trailing slash
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            version: '2.0.0', // Current version
            label: 'v2.0.0', // Current version label
            baseUrl:
              '/apps/nest-app/microservice-14-pet/petstore_versioned/swagger-petstore-yaml', // Leading slash is important
            versions: {
              '1.0.0': {
                specPath:
                  'apis/microservice-14-pet/microservice-14-pet-1.0.0.yaml',
                outputDir:
                  'docs/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0', // No trailing slash
                label: 'v1.0.0',
                baseUrl:
                  '/apps/nest-app/microservice-14-pet/petstore_versioned/1.0.0/swagger-petstore-yaml', // Leading slash is important
              },
            },
          },
          petstore: {
            specPath: 'apis/microservice-14-pet/microservice-14-pet.yaml',
            proxy: 'https://cors.pan.dev',
            outputDir: 'docs/apps/nest-app/microservice-14-pet/petstore',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            template: 'api.mustache', // Customize API MDX with mustache template
            downloadUrl:
              'https://raw.githubusercontent.com/314oner/314oner.github.io/main/apps/docs-app/apis/microservice-14-pet.yaml',
            hideSendButton: false,
            //showSchemas: true,
          },
          order: {
            specPath: 'apis/microservice-11-order/openapi.yaml',
            outputDir: 'docs/apps/nest-app/microservice-11-order',
          },
          payment: {
            specPath: 'apis/microservice-12-payment/openapi.yaml',
            outputDir: 'docs/apps/nest-app/microservice-12-payment',
          },
        },
      },
    ],
    [
      'client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction (now docs root doc)
          if (routePath === '/docs' || routePath === '/docs/') {
            return [`${routePath}/introduction`];
          }
          return [];
        },
        redirects: [
          {
            from: ['/community/repositories'],
            to: '/community/repositories',
          },
        ],
      },
    ],
    [
      'docusaurus-portfolio-plugin',
      {
        username: '314oner',
        path: '/community/repositories',
        pageTitle: 'My repositories',
        pageDescription: 'My repositories.',
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 100,
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs', 'docusaurus-portfolio-theme'],
  stylesheets: [
    {
      href: 'https://use.fontawesome.com/releases/v5.11.0/css/all.css',
      type: 'text/css',
    },
  ],
};
