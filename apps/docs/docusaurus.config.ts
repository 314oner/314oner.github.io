import path from 'path';

import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import configTabs from './src/remark/configTabs';

import versions from './versions.json';

import ConfigLocalized from './docusaurus.config.localized.json';

import PrismLight from 'prism-react-renderer/themes/github';
import PrismDark from 'prism-react-renderer/themes/dracula';

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as BlogOptions } from '@docusaurus/plugin-content-blog';
import type { Options as PageOptions } from '@docusaurus/plugin-content-pages';
import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';
import type { Options as ClientRedirectsOptions } from '@docusaurus/plugin-client-redirects';

function isPrerelease(version: string) {
  return (
    version.includes('alpha') ||
    version.includes('beta') ||
    version.includes('rc')
  );
}

function getLastVersion() {
  const firstStableVersion = versions.find((version) => !isPrerelease(version));
  return firstStableVersion ?? versions[0];
}

function getNextVersionName() {
  return 'Current';
}
const isDev = process.env.NODE_ENV === 'development';
const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';
// Netlify branch deploy like "314oner-v2"
const isBranchDeploy =
  !!process.env.NETLIFY && process.env.CONTEXT === 'branch-deploy';
const isBuildFast = !!process.env.BUILD_FAST;
const baseUrl = process.env.BASE_URL ?? '/';
// Special deployment for staging locales until they get enough translations
// https://app.netlify.com/sites/314oner-i18n-staging
// https://314oner-i18n-staging.netlify.app/
const isI18nStaging = process.env.I18N_STAGING === 'true';
const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;
const defaultLocale = 'ru';

function getLocalizedConfigValue(key: keyof typeof ConfigLocalized) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

export default async function createConfigAsync() {
  return {
    title: '314oner.github.io',
    tagline: getLocalizedConfigValue('tagline'),
    url: 'https://github.com',
    baseUrl: '/',
    organizationName: '314oner',
    projectName: '',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: isDeployPreview,
    stylesheets: [
      {
        href: '/katex/katex.min.css',
        type: 'text/css',
      },
    ],
    i18n: {
      defaultLocale,
      locales: ['en', 'ru'],
      localeConfigs: {
        en: {
          label: 'English',
        },
        ru: {
          label: 'Русский',
        },
      },
    },
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            target: 'es2017',
          },
          module: {
            type: isServer ? 'commonjs' : 'es6',
          },
        },
      }),
    },
    markdown: {
      format: 'detect',
      mermaid: true,
      mdx1Compat: {
        // comments: false,
      },
      preprocessor: ({ filePath, fileContent }) => {
        let result = fileContent;
        //@ts-ignore
        result = result.replaceAll('{/_', '{/*');
        //@ts-ignore
        result = result.replaceAll('_/}', '*/}');

        if (isDev) {
          const isPartial = path.basename(filePath).startsWith('_');
          if (!isPartial) {
            // "vscode://file/${projectPath}${filePath}:${line}:${column}",
            // "webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",
            const vscodeLink = `vscode://file/${filePath}`;
            const webstormLink = `webstorm://open?file=${filePath}`;
            const intellijLink = `idea://open?file=${filePath}`;
            result = `${result}\n\n---\n\n**DEV**: open this file in [VSCode](<${vscodeLink}>) | [WebStorm](<${webstormLink}>) | [IntelliJ](<${intellijLink}>)\n`;
          }
        }

        return result;
      },
    },
    onBrokenLinks:
      isVersioningDisabled ||
        process.env.DOCUSAURUS_CURRENT_LOCALE !== defaultLocale
        ? 'warn'
        : 'throw',
    customFields: {
      isDeployPreview,
      description:
        '314oner.github.io',
    },
    staticDirectories: [
      'static'
    ],
    themes: ['live-codeblock', 'docusaurus-portfolio-theme'],

    plugins: [
      [
        'content-docs',
        {
          id: 'community',
          path: 'community',
          routeBasePath: 'community',
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== defaultLocale) {
              return `https://crowdin.com/project/bibliothecaalexandrina/${locale}`;
            }
            return `https://github.com/314oner/314oner.github.io/edit/master/apps/docs/${versionDocsDirPath}/${docPath}`;
          },
          remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: './sidebarsCommunity.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        } satisfies DocsOptions,
      ],
      [
        'client-redirects',
        {
          fromExtensions: ['html'],
          createRedirects(routePath) {
            if (routePath === '/docs' || routePath === '/docs/') {
              return [`${routePath}/introduction`];
            }
            return [];
          },
          redirects: [
            {
              from: ['/docs/support', '/docs/next/support'],
              to: '/community/support',
            },
            {
              from: ['/docs/team', '/docs/next/team'],
              to: '/community/team',
            },
            {
              from: ['/docs/resources', '/docs/next/resources'],
              to: '/community/resources',
            },
            {
              from: ['/docs/repos', '/docs/next/repos'],
              to: '/community/repos',
            },
          ],
        } satisfies ClientRedirectsOptions,
      ],
      [
        'ideal-image',

        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          disableInDev: true,
        } satisfies IdealImageOptions,
      ],
      [
        'pwa',
        {
          // debug: isDeployPreview,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          swRegister: false,
          //swCustom: require.resolve('./src/sw.js'),
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: 'img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: 'manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#000',
            },
            {
              tagName: 'link',
              rel: 'apple-touch-icon',
              href: 'img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'mask-icon',
              href: 'img/docusaurus.png',
              color: 'rgb(62, 204, 94)',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileImage',
              content: 'img/docusaurus.png',
            },
            {
              tagName: 'meta',
              name: 'msapplication-TileColor',
              content: '#000',
            },
          ],
        },
      ],

      '@docusaurus/theme-mermaid',
      [
        'docusaurus-portfolio-plugin',
        {
          username: '314oner',
          path: '/repos',
          pageTitle: "My repositories",
          pageDescription: 'My repositories.',
          userOptions: {
            fullname: 'A.A.Gverdtsiteli',
          },
          repoOptions: {
            type: 'all',
            sort: 'updated',
            direction: 'desc',
            numRepos: 100,
          },
        },
      ],
    ],
    presets: [
      [
        'classic',
        {
          //debug: true, // force debug plugin usage
          docs: {
            //routeBasePath: '/docs',
            path: 'docs',
            sidebarPath: 'sidebars.ts',
            // sidebarCollapsible: false,
            // sidebarCollapsed: true,
            editUrl: ({ locale, docPath }) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/bibliothecaalexandrina/${locale}`;
              }
              const nextVersionDocsDirPath = 'docs';
              return `https://github.com/314oner/314oner.github.io/edit/master/apps/docs/${nextVersionDocsDirPath}/${docPath}`;
            },
            admonitions: {
              keywords: ['my-custom-admonition'],
            },
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            remarkPlugins: [[npm2yarn, { sync: true }], remarkMath, configTabs],
            rehypePlugins: [rehypeKatex],
            disableVersioning: isVersioningDisabled,
            lastVersion:
              isDev ||
                isVersioningDisabled ||
                isDeployPreview ||
                isBranchDeploy ||
                isBuildFast
                ? 'current'
                : getLastVersion(),

            onlyIncludeVersions: (() => {
              if (isBuildFast) {
                return ['current'];
              } else if (
                !isVersioningDisabled &&
                (isDev || isDeployPreview || isBranchDeploy)
              ) {
                return ['current', ...versions.slice(0, 2)];
              }
              return undefined;
            })(),
            versions: {
              current: {
                label: `${getNextVersionName()} 🚧`,
              },
            },
          },
          blog: {
            //routeBasePath: '/blog',
            path: 'blog',
            editUrl: ({ locale, blogDirPath, blogPath }) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/bibliothecaalexandrina/${locale}`;
              }
              return `https://github.com/314oner/314oner.github.io/edit/master/apps/docs/${blogDirPath}/${blogPath}`;
            },
            remarkPlugins: [npm2yarn],
            postsPerPage: 5,
            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} 314oner.github.io.`,
            },
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All our posts',
          } satisfies BlogOptions,
          pages: {
            remarkPlugins: [npm2yarn],
          } satisfies PageOptions,
          theme: {
            customCss: [
              './src/css/custom.css',
            ],
          },
          sitemap: {
            ignorePatterns: ['/tests/{blog,pages}/**'],
          },
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        additionalLanguages: [
          'java',
          'latex',
          'haskell',
          'matlab',
          'PHp',
          'bash',
          'diff',
          'json',
          'scss',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        //@ts-ignore
        theme: PrismLight,
        //@ts-ignore
        darkTheme: PrismDark,
      },
      image: 'img/docusaurus-social-card.jpg',
      algolia: {
        appId: 'X1Z85QJPUV',
        apiKey: 'bf7211c161e8205da2f933a02534105a',
        indexName: 'docusaurus-2',
        replaceSearchResultPathname:
          isDev || isDeployPreview
            ? {
              from: /^\/docs\/next/g.source,
              to: '/docs',
            }
            : undefined,
      },
      navbar: {
        hideOnScroll: true,
        title: '314oner.github.io',
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
            position: 'left',
            docId: 'introduction',
            label: 'Docs',
          },
          { to: 'blog', label: 'Blog', position: 'left' },

          {
            to: '/community/support',
            label: 'Community',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          { to: '/repos', label: 'Repos', position: 'left' },
          //{ to: 'about', label: 'About', position: 'left' },
          //{ to: 'showcase', label: 'Showcase', position: 'left' },
          // Right
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              }
            ],
          },
        ]
          // TODO fix type
          .filter(Boolean) as NonNullable<
            Preset.ThemeConfig['navbar']
          >['items'],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: 'docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              /*
              {
                label: 'Feature Requests',
                to: '/feature-requests',
              },
              */
              {
                label: 'Help',
                to: '/community/support',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/314oner',
              },
              {
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
              },
              {
                html: `
                <a href="https://argos-ci.com" target="_blank" rel="noreferrer noopener" aria-label="Covered by Argos">
                  <img src="https://argos-ci.com/badge.svg" alt="Covered by Argos" width="133" height="20" />
                </a>
              `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 314oner.github.io.`,
      },
    } satisfies Preset.ThemeConfig,
  } satisfies Config;
}
