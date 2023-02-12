import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from '@vuepress/utils'

const vuepressRoot = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/addons/',
    lang: 'zh-CN',
    title: '基岩版开发文档',
    description: 'Minecraft基岩版开发文档',
    head: [
        ['link', { rel: 'icon', href: '/addons/images/icon.svg' }]
    ],
    alias: {
        '@theme/HomeFooter.vue': path.resolve(vuepressRoot, './components/Footer.vue'),
        '@theme/Page.vue': path.resolve(vuepressRoot, './components/Page.vue')
    },
  
    
    theme: defaultTheme({
        logo: '/images/icon.svg',
        home: '/',
        docsDir: 'docs',
        // navbar
        navbar: [
            {
              text: '首页',
              link: '/',
            },
            {
              text: '官方文档',
              children: [
                {
                  text: '最新测试版文档',
                  children: [
                    '/official/addons.md',/*
                    '/official/animations.md',
                    '/official/biomes.md',*/
                    '/official/blocks.md',/*
                    '/official/entities.md',
                    '/official/entity_events.md',
                    '/official/entity_timeline_events.md',
                    '/official/features.md',
                    '/official/fogs.md',
                    '/official/item.md',
                    '/official/molang.md',
                    '/official/paritcles.md',
                    '/official/recipes.md',
                    '/official/schemas.md',
                    '/official/texture_sets.md',
                    '/official/volumes.md',*/
                  ],
                },
              ],
            },
            {
              text: '数据驱动',
              children: [
                {
                    text: '总纲',
                    link: '/data-driven/',
                    activeMatch: '/data-driven/$',
                },
                {
                  text: '常规',
                  children: [
                    '/data-driven/general/manifest.md',
                    '/data-driven/general/contents.md',
                    '/data-driven/general/signatures.md',
                    '/data-driven/general/education.md',
                    '/data-driven/general/splashes.md',
                    '/data-driven/general/loading_messages.md',
                    '/data-driven/general/icons.md',
                  ],
                },
                {
                  text: '纹理',
                  children: [
                    '/data-driven/texture/textures.md',
                    '/data-driven/texture/textures_list.md',
                    '/data-driven/texture/atlas.md',
                  ],
                },
                /*
                {
                  text: '第1章 脚本使能的附加包',
                  children: [
                    '/advanced/sec1.1.md',
                    '/advanced/sec1.2.md',
                    '/advanced/sec1.3.md',
                    '/advanced/sec1.4.md',
                    '/advanced/sec1.5.md',
                  ],
                },
                {
                  text: '第2章 进阶的数据驱动的附加包',
                  children: [
                    '/advanced/sec2.1.md',
                    '/advanced/sec2.2.md',
                    '/advanced/sec2.3.md',
                    '/advanced/sec2.4.md',
                  ],
                },
                {
                  text: '第3章 数据与脚本的联动',
                  children: [
                    '/advanced/sec3.1.md',
                  ],
                },
                */
              ],
            },
            {
              text: '脚本使能',
              children: [
                /*
                {
                  text: '深入',
                  children: [
                    '/zh/advanced/architecture.md',
                    '/zh/advanced/plugin.md',
                    '/zh/advanced/theme.md',
                    {
                      text: 'Cookbook',
                      link: '/zh/advanced/cookbook/',
                    },
                  ],
                },
                {
                  text: '其他资源',
                  children: [
                    '/zh/contributing.md',
                  ],
                },
              */
              ],
            },
            {
              text: '杂项文档',
              children: [
                /*
                {
                  text: '深入',
                  children: [
                    '/zh/advanced/architecture.md',
                    '/zh/advanced/plugin.md',
                    '/zh/advanced/theme.md',
                    {
                      text: 'Cookbook',
                      link: '/zh/advanced/cookbook/',
                    },
                  ],
                },
                {
                  text: '其他资源',
                  children: [
                    '/zh/contributing.md',
                  ],
                },
              */
              ],
            },
            {
              text: '开发Wiki',
              link: 'https://wiki.bedev.cn/',
            },
        ],
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: {
            '/official/': [
                {
                  text: '最新测试版文档',
                  children: [
                    '/official/addons.md',/*
                    '/official/animations.md',
                    '/official/biomes.md',*/
                    '/official/blocks.md',/*
                    '/official/entities.md',
                    '/official/entity_events.md',
                    '/official/entity_timeline_events.md',
                    '/official/features.md',
                    '/official/fogs.md',
                    '/official/item.md',
                    '/official/molang.md',
                    '/official/paritcles.md',
                    '/official/recipes.md',
                    '/official/schemas.md',
                    '/official/texture_sets.md',
                    '/official/volumes.md',*/
                  ],
                },
            ],
            '/data-driven/': [
                {
                    text: '总纲',
                    link: '/data-driven/',
                },
                {
                  text: '常规',
                  children: [
                    '/data-driven/general/manifest.md',
                    '/data-driven/general/contents.md',
                    '/data-driven/general/signatures.md',
                    '/data-driven/general/education.md',
                    '/data-driven/general/splashes.md',
                    '/data-driven/general/loading_messages.md',
                    '/data-driven/general/icons.md',
                  ],
                },
                {
                  text: '纹理',
                  children: [
                    '/data-driven/texture/textures.md',
                    '/data-driven/texture/textures_list.md',
                    '/data-driven/texture/atlas.md',
                  ],
                },
                /*{
                  text: '第1章 脚本使能的附加包',
                  children: [
                    '/advanced/sec1.1.md',
                    '/advanced/sec1.2.md',
                    '/advanced/sec1.3.md',
                    '/advanced/sec1.4.md',
                    '/advanced/sec1.5.md',
                  ],
                },
                {
                  text: '第2章 进阶的数据驱动的附加包',
                  children: [
                    '/advanced/sec2.1.md',
                    '/advanced/sec2.2.md',
                    '/advanced/sec2.3.md',
                    '/advanced/sec2.4.md',
                  ],
                },
                {
                  text: '第3章 数据与脚本的联动',
                  children: [
                    '/advanced/sec3.1.md',
                  ],
                },*/
            ],
            '/script-enabled/': [
              /*{
                text: 'VuePress 参考',
                collapsible: true,
                children: [
                  '/zh/reference/cli.md',
                  '/zh/reference/config.md',
                  '/zh/reference/frontmatter.md',
                  '/zh/reference/components.md',
                  '/zh/reference/plugin-api.md',
                  '/zh/reference/theme-api.md',
                  '/zh/reference/client-api.md',
                  '/zh/reference/node-api.md',
                ],
              },
              {
                text: '打包工具参考',
                collapsible: true,
                children: [
                  '/zh/reference/bundler/vite.md',
                  '/zh/reference/bundler/webpack.md',
                ],
              },
              {
                text: '默认主题参考',
                collapsible: true,
                children: [
                  '/zh/reference/default-theme/config.md',
                  '/zh/reference/default-theme/frontmatter.md',
                  '/zh/reference/default-theme/components.md',
                  '/zh/reference/default-theme/markdown.md',
                  '/zh/reference/default-theme/styles.md',
                  '/zh/reference/default-theme/extending.md',
                ],
              },
              {
                text: '官方插件参考',
                collapsible: true,
                children: [
                  {
                    text: '常用功能',
                    children: [
                      '/zh/reference/plugin/back-to-top.md',
                      '/zh/reference/plugin/container.md',
                      '/zh/reference/plugin/external-link-icon.md',
                      '/zh/reference/plugin/google-analytics.md',
                      '/zh/reference/plugin/medium-zoom.md',
                      '/zh/reference/plugin/nprogress.md',
                      '/zh/reference/plugin/register-components.md',
                    ],
                  },
                  {
                    text: '内容搜索',
                    children: [
                      '/zh/reference/plugin/docsearch.md',
                      '/zh/reference/plugin/search.md',
                    ],
                  },
                  {
                    text: 'PWA',
                    children: [
                      '/zh/reference/plugin/pwa.md',
                      '/zh/reference/plugin/pwa-popup.md',
                    ],
                  },
                  {
                    text: '语法高亮',
                    children: [
                      '/zh/reference/plugin/prismjs.md',
                      '/zh/reference/plugin/shiki.md',
                    ],
                  },
                  {
                    text: '主题开发',
                    children: [
                      '/zh/reference/plugin/active-header-links.md',
                      '/zh/reference/plugin/git.md',
                      '/zh/reference/plugin/palette.md',
                      '/zh/reference/plugin/theme-data.md',
                      '/zh/reference/plugin/toc.md',
                    ],
                  },
                ],
              },*/
            ],
            '/misc/': [
              /*{
                text: 'VuePress 参考',
                collapsible: true,
                children: [
                  '/zh/reference/cli.md',
                  '/zh/reference/config.md',
                  '/zh/reference/frontmatter.md',
                  '/zh/reference/components.md',
                  '/zh/reference/plugin-api.md',
                  '/zh/reference/theme-api.md',
                  '/zh/reference/client-api.md',
                  '/zh/reference/node-api.md',
                ],
              },
              {
                text: '打包工具参考',
                collapsible: true,
                children: [
                  '/zh/reference/bundler/vite.md',
                  '/zh/reference/bundler/webpack.md',
                ],
              },
              {
                text: '默认主题参考',
                collapsible: true,
                children: [
                  '/zh/reference/default-theme/config.md',
                  '/zh/reference/default-theme/frontmatter.md',
                  '/zh/reference/default-theme/components.md',
                  '/zh/reference/default-theme/markdown.md',
                  '/zh/reference/default-theme/styles.md',
                  '/zh/reference/default-theme/extending.md',
                ],
              },
              {
                text: '官方插件参考',
                collapsible: true,
                children: [
                  {
                    text: '常用功能',
                    children: [
                      '/zh/reference/plugin/back-to-top.md',
                      '/zh/reference/plugin/container.md',
                      '/zh/reference/plugin/external-link-icon.md',
                      '/zh/reference/plugin/google-analytics.md',
                      '/zh/reference/plugin/medium-zoom.md',
                      '/zh/reference/plugin/nprogress.md',
                      '/zh/reference/plugin/register-components.md',
                    ],
                  },
                  {
                    text: '内容搜索',
                    children: [
                      '/zh/reference/plugin/docsearch.md',
                      '/zh/reference/plugin/search.md',
                    ],
                  },
                  {
                    text: 'PWA',
                    children: [
                      '/zh/reference/plugin/pwa.md',
                      '/zh/reference/plugin/pwa-popup.md',
                    ],
                  },
                  {
                    text: '语法高亮',
                    children: [
                      '/zh/reference/plugin/prismjs.md',
                      '/zh/reference/plugin/shiki.md',
                    ],
                  },
                  {
                    text: '主题开发',
                    children: [
                      '/zh/reference/plugin/active-header-links.md',
                      '/zh/reference/plugin/git.md',
                      '/zh/reference/plugin/palette.md',
                      '/zh/reference/plugin/theme-data.md',
                      '/zh/reference/plugin/toc.md',
                    ],
                  },
                ],
              },*/
            ],
        },
        // page meta
        editLinkText: '在GitHub上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个404页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
    }),

    plugins: [
        /*docsearchPlugin({
            // 配置项
        }),*/
        searchPlugin({
            locales: {
              '/': {
                placeholder: '搜索',
              },
            },
          }),
        '@vuepress/plugin-html-redirect',
    ]
});
